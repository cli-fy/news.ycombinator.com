import { OpenAPIHono, createRoute } from '@hono/zod-openapi'
import { z } from 'zod'
import { Cli } from 'incur'
import {
  ItemSchema,
  UserSchema,
  MaxItemSchema,
  UpdatesSchema,
  StoryIdsSchema,
  SearchResponseSchema,
  ItemIdParamSchema,
  UserIdParamSchema,
  SearchQuerySchema,
} from './schemas.js'

const app = new OpenAPIHono()

const FIREBASE_BASE = 'https://hacker-news.firebaseio.com/v0'
const ALGOLIA_BASE = 'https://hn.algolia.com/api/v1'

const USER_AGENT = 'clify-hackernews (https://github.com/cli-fy/news.ycombinator.com)'

async function fetchJson(url: string): Promise<unknown> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15_000)
  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': USER_AGENT },
    })
    if (!res.ok) {
      throw new Error(`upstream returned ${res.status}`)
    }
    return await res.json()
  } finally {
    clearTimeout(timeout)
  }
}

// ============================================================================
// Firebase API Routes
// ============================================================================

const topStoriesRoute = createRoute({
  method: 'get',
  path: '/topstories',
  tags: ['Stories'],
  summary: 'Get top stories',
  description: 'Returns an array of up to 500 top story IDs.',
  responses: {
    200: {
      description: 'List of top story IDs',
      content: { 'application/json': { schema: StoryIdsSchema } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(topStoriesRoute, async (c) => {
  try {
    const data = await fetchJson(`${FIREBASE_BASE}/topstories.json`)
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

const newStoriesRoute = createRoute({
  method: 'get',
  path: '/newstories',
  tags: ['Stories'],
  summary: 'Get new stories',
  description: 'Returns an array of up to 500 new story IDs.',
  responses: {
    200: {
      description: 'List of new story IDs',
      content: { 'application/json': { schema: StoryIdsSchema } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(newStoriesRoute, async (c) => {
  try {
    const data = await fetchJson(`${FIREBASE_BASE}/newstories.json`)
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

const bestStoriesRoute = createRoute({
  method: 'get',
  path: '/beststories',
  tags: ['Stories'],
  summary: 'Get best stories',
  description: 'Returns an array of up to 500 best story IDs.',
  responses: {
    200: {
      description: 'List of best story IDs',
      content: { 'application/json': { schema: StoryIdsSchema } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(bestStoriesRoute, async (c) => {
  try {
    const data = await fetchJson(`${FIREBASE_BASE}/beststories.json`)
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

const askStoriesRoute = createRoute({
  method: 'get',
  path: '/askstories',
  tags: ['Stories'],
  summary: 'Get Ask HN stories',
  description: 'Returns an array of up to 200 Ask HN story IDs.',
  responses: {
    200: {
      description: 'List of Ask HN story IDs',
      content: { 'application/json': { schema: StoryIdsSchema } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(askStoriesRoute, async (c) => {
  try {
    const data = await fetchJson(`${FIREBASE_BASE}/askstories.json`)
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

const showStoriesRoute = createRoute({
  method: 'get',
  path: '/showstories',
  tags: ['Stories'],
  summary: 'Get Show HN stories',
  description: 'Returns an array of up to 200 Show HN story IDs.',
  responses: {
    200: {
      description: 'List of Show HN story IDs',
      content: { 'application/json': { schema: StoryIdsSchema } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(showStoriesRoute, async (c) => {
  try {
    const data = await fetchJson(`${FIREBASE_BASE}/showstories.json`)
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

const jobStoriesRoute = createRoute({
  method: 'get',
  path: '/jobstories',
  tags: ['Stories'],
  summary: 'Get job stories',
  description: 'Returns an array of up to 200 job story IDs.',
  responses: {
    200: {
      description: 'List of job story IDs',
      content: { 'application/json': { schema: StoryIdsSchema } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(jobStoriesRoute, async (c) => {
  try {
    const data = await fetchJson(`${FIREBASE_BASE}/jobstories.json`)
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

const itemRoute = createRoute({
  method: 'get',
  path: '/item/{id}',
  tags: ['Items'],
  summary: 'Get item by ID',
  description: 'Returns a single item (story, comment, job, poll, or pollopt) by its ID.',
  request: {
    params: ItemIdParamSchema,
  },
  responses: {
    200: {
      description: 'The requested item',
      content: { 'application/json': { schema: ItemSchema } },
    },
    404: {
      description: 'Item not found',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(itemRoute, async (c) => {
  const { id } = c.req.valid('param')
  try {
    const data = await fetchJson(`${FIREBASE_BASE}/item/${id}.json`)
    if (data === null) {
      return c.json({ error: `item ${id} not found` }, 404)
    }
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

const userRoute = createRoute({
  method: 'get',
  path: '/user/{id}',
  tags: ['Users'],
  summary: 'Get user by ID',
  description: 'Returns a single user by their username.',
  request: {
    params: UserIdParamSchema,
  },
  responses: {
    200: {
      description: 'The requested user',
      content: { 'application/json': { schema: UserSchema } },
    },
    404: {
      description: 'User not found',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(userRoute, async (c) => {
  const { id } = c.req.valid('param')
  try {
    const data = await fetchJson(`${FIREBASE_BASE}/user/${id}.json`)
    if (data === null) {
      return c.json({ error: `user ${id} not found` }, 404)
    }
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

const maxItemRoute = createRoute({
  method: 'get',
  path: '/maxitem',
  tags: ['Items'],
  summary: 'Get max item ID',
  description: 'Returns the current largest item id.',
  responses: {
    200: {
      description: 'Current max item ID',
      content: { 'application/json': { schema: MaxItemSchema } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(maxItemRoute, async (c) => {
  try {
    const data = await fetchJson(`${FIREBASE_BASE}/maxitem.json`)
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

const updatesRoute = createRoute({
  method: 'get',
  path: '/updates',
  tags: ['Updates'],
  summary: 'Get recent updates',
  description: 'Returns items and profiles that have changed recently.',
  responses: {
    200: {
      description: 'Recent updates',
      content: { 'application/json': { schema: UpdatesSchema } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(updatesRoute, async (c) => {
  try {
    const data = await fetchJson(`${FIREBASE_BASE}/updates.json`)
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

// ============================================================================
// Algolia Search API Routes
// ============================================================================

const searchRoute = createRoute({
  method: 'get',
  path: '/search',
  tags: ['Search'],
  summary: 'Search HN by relevance',
  description: 'Search Hacker News stories and comments by relevance using Algolia.',
  request: {
    query: SearchQuerySchema,
  },
  responses: {
    200: {
      description: 'Search results',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(searchRoute, async (c) => {
  const { query, tags, page, hitsPerPage } = c.req.valid('query')
  const url = new URL(`${ALGOLIA_BASE}/search`)
  url.searchParams.set('query', query)
  url.searchParams.set('page', String(page))
  url.searchParams.set('hitsPerPage', String(hitsPerPage))
  if (tags) url.searchParams.set('tags', tags)
  try {
    const data = await fetchJson(url.toString())
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

const searchByDateRoute = createRoute({
  method: 'get',
  path: '/search_by_date',
  tags: ['Search'],
  summary: 'Search HN by date',
  description: 'Search Hacker News stories and comments by date using Algolia.',
  request: {
    query: SearchQuerySchema,
  },
  responses: {
    200: {
      description: 'Search results',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    502: {
      description: 'Upstream API error',
      content: { 'application/json': { schema: z.object({ error: z.string() }) } },
    },
  },
})

app.openapi(searchByDateRoute, async (c) => {
  const { query, tags, page, hitsPerPage } = c.req.valid('query')
  const url = new URL(`${ALGOLIA_BASE}/search_by_date`)
  url.searchParams.set('query', query)
  url.searchParams.set('page', String(page))
  url.searchParams.set('hitsPerPage', String(hitsPerPage))
  if (tags) url.searchParams.set('tags', tags)
  try {
    const data = await fetchJson(url.toString())
    return c.json(data)
  } catch (err) {
    return c.json({ error: err instanceof Error ? err.message : 'unknown error' }, 502)
  }
})

// ============================================================================
// OpenAPI Document
// ============================================================================

const spec = app.getOpenAPIDocument({
  openapi: '3.1.0',
  info: {
    title: 'clify-hackernews',
    version: '0.1.0',
    description: 'RESTful API for Hacker News data via Firebase and Algolia APIs.',
  },
  servers: [
    { url: 'https://hacker-news.firebaseio.com/v0', description: 'Firebase API' },
    { url: 'https://hn.algolia.com/api/v1', description: 'Algolia Search API' },
  ],
})

const cli = Cli.create('hackernews', {
  description: 'Fetch data from Hacker News via RESTful API.',
}).command('api', {
  description: 'Call the Hacker News API',
  fetch: app.fetch,
  openapi: spec,
})

export { app, spec }
export default cli
