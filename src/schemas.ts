import { z } from 'zod'

// ============================================================================
// Hacker News Firebase API Schemas
// ============================================================================

export const ItemTypeSchema = z.enum(['story', 'comment', 'job', 'poll', 'pollopt'])

export const BaseItemSchema = z.object({
  id: z.number().int().describe('The item\'s unique id.'),
  type: ItemTypeSchema.describe('The type of item.'),
  by: z.string().describe('The username of the item\'s author.'),
  time: z.number().int().describe('Creation date of the item, in Unix Time.'),
  dead: z.boolean().optional().describe('True if the item is dead.'),
  deleted: z.boolean().optional().describe('True if the item is deleted.'),
})

export const StorySchema = BaseItemSchema.extend({
  type: z.literal('story'),
  descendants: z.number().int().optional().describe('In the case of stories or polls, the total comment count.'),
  kids: z.array(z.number().int()).optional().describe('The ids of the item\'s comments, in ranked display order.'),
  score: z.number().int().optional().describe('The story\'s score, or the votes for a pollopt.'),
  title: z.string().describe('The title of the story, poll or job. HTML.'),
  text: z.string().optional().describe('The comment, story or poll text. HTML.'),
  url: z.string().optional().describe('The URL of the story.'),
})

export const CommentSchema = BaseItemSchema.extend({
  type: z.literal('comment'),
  parent: z.number().int().describe('The comment\'s parent: either another comment or the relevant story.'),
  kids: z.array(z.number().int()).optional().describe('The ids of the item\'s comments, in ranked display order.'),
  text: z.string().describe('The comment, story or poll text. HTML.'),
})

export const JobSchema = BaseItemSchema.extend({
  type: z.literal('job'),
  score: z.number().int().optional().describe('The story\'s score, or the votes for a pollopt.'),
  title: z.string().describe('The title of the story, poll or job. HTML.'),
  text: z.string().optional().describe('The comment, story or poll text. HTML.'),
  url: z.string().optional().describe('The URL of the story.'),
})

export const PollSchema = BaseItemSchema.extend({
  type: z.literal('poll'),
  descendants: z.number().int().optional().describe('In the case of stories or polls, the total comment count.'),
  kids: z.array(z.number().int()).optional().describe('The ids of the item\'s comments, in ranked display order.'),
  parts: z.array(z.number().int()).describe('A list of related pollopts, in display order.'),
  score: z.number().int().optional().describe('The story\'s score, or the votes for a pollopt.'),
  title: z.string().describe('The title of the story, poll or job. HTML.'),
  text: z.string().optional().describe('The comment, story or poll text. HTML.'),
})

export const PollOptSchema = BaseItemSchema.extend({
  type: z.literal('pollopt'),
  poll: z.number().int().describe('The poll\'s unique id.'),
  score: z.number().int().optional().describe('The story\'s score, or the votes for a pollopt.'),
  text: z.string().describe('The comment, story or poll text. HTML.'),
})

export const ItemSchema = z.union([StorySchema, CommentSchema, JobSchema, PollSchema, PollOptSchema])
  .describe('A Hacker News item (story, comment, job, poll, or pollopt).')

export const UserSchema = z.object({
  id: z.string().describe('The user\'s unique username. Case-sensitive.'),
  created: z.number().int().describe('Creation date of the user, in Unix Time.'),
  karma: z.number().int().describe('The user\'s karma.'),
  about: z.string().optional().describe('The user\'s optional self-description. HTML.'),
  submitted: z.array(z.number().int()).optional().describe('List of the user\'s stories, polls and comments.'),
})

export const MaxItemSchema = z.number().int().describe('The current largest item id.')

export const UpdatesSchema = z.object({
  items: z.array(z.number().int()).describe('List of item ids that have been updated recently.'),
  profiles: z.array(z.string()).describe('List of user names that have been updated recently.'),
})

export const StoryIdsSchema = z.array(z.number().int()).describe('List of story/item ids.')

// ============================================================================
// Algolia Search API Schemas
// ============================================================================

export const HighlightResultSchema = z.object({
  value: z.string(),
  matchLevel: z.enum(['none', 'partial', 'full']),
  matchedWords: z.array(z.string()),
  fullyHighlighted: z.boolean().optional(),
})

export const SearchHitSchema = z.object({
  objectID: z.string().describe('The item\'s unique id (as string).'),
  created_at: z.string().describe('Creation date in ISO 8601 format.'),
  created_at_i: z.number().int().describe('Creation date in Unix Time.'),
  author: z.string().describe('The username of the item\'s author.'),
  title: z.string().optional().describe('The title of the story.'),
  text: z.string().optional().describe('The text of the comment or story.'),
  url: z.string().optional().describe('The URL of the story.'),
  points: z.number().int().optional().describe('The story\'s score.'),
  num_comments: z.number().int().optional().describe('The number of comments.'),
  children: z.array(z.number().int()).optional().describe('The ids of the item\'s comments.'),
  story_id: z.number().int().optional().describe('The story id (for comments).'),
  _tags: z.array(z.string()).describe('Tags for the item.'),
  _highlightResult: z.record(HighlightResultSchema).optional(),
})

export const SearchResponseSchema = z.object({
  hits: z.array(SearchHitSchema).describe('List of search results.'),
  nbHits: z.number().int().describe('Number of hits total.'),
  page: z.number().int().describe('Current page (0-indexed).'),
  nbPages: z.number().int().describe('Number of pages total.'),
  hitsPerPage: z.number().int().describe('Number of hits per page.'),
  processingTimeMS: z.number().int().describe('Processing time in milliseconds.'),
  query: z.string().describe('The query string.'),
  params: z.string().describe('The search parameters.'),
  exhaustive: z.object({
    nbHits: z.boolean(),
    typo: z.boolean(),
  }).optional(),
  exhaustiveNbHits: z.boolean().optional(),
  exhaustiveTypo: z.boolean().optional(),
})

// ============================================================================
// Query Parameter Schemas
// ============================================================================

export const ItemIdParamSchema = z.object({
  id: z.coerce.number().int().min(1).describe('The item\'s unique id.'),
})

export const UserIdParamSchema = z.object({
  id: z.string().min(1).describe('The user\'s unique username.'),
})

export const SearchQuerySchema = z.object({
  query: z.string().min(1).describe('Search query string.'),
  tags: z.string().optional().describe('Filter by tags (e.g., story, comment, poll, show_hn, ask_hn, author_USERNAME).'),
  page: z.coerce.number().int().min(0).default(0).describe('Page number (0-indexed).'),
  hitsPerPage: z.coerce.number().int().min(1).max(100).default(20).describe('Number of hits per page.'),
})
