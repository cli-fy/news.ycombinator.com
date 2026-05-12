import { app } from '../src/index.ts'

async function test() {
  console.log('=== Testing HN Plugin API ===\n')

  // Test topstories
  const topRes = await app.request('/topstories')
  const topData = await topRes.json()
  console.log('GET /topstories:', topRes.status, Array.isArray(topData) ? `array(${topData.length})` : topData)

  // Test item
  const itemRes = await app.request('/item/48100706')
  const itemData = await itemRes.json()
  console.log('GET /item/48100706:', itemRes.status, itemData.type, itemData.title?.slice(0, 40))

  // Test user
  const userRes = await app.request('/user/dang')
  const userData = await userRes.json()
  console.log('GET /user/dang:', userRes.status, userData.id, `karma=${userData.karma}`)

  // Test maxitem
  const maxRes = await app.request('/maxitem')
  const maxData = await maxRes.json()
  console.log('GET /maxitem:', maxRes.status, maxData)

  // Test search
  const searchRes = await app.request('/search?query=typescript&tags=story&hitsPerPage=1')
  const searchData = await searchRes.json()
  console.log('GET /search:', searchRes.status, `hits=${searchData.nbHits}`, `query=${searchData.query}`)

  // Test search_by_date
  const dateRes = await app.request('/search_by_date?query=rust&tags=story&hitsPerPage=1')
  const dateData = await dateRes.json()
  console.log('GET /search_by_date:', dateRes.status, `hits=${dateData.nbHits}`, `query=${dateData.query}`)

  console.log('\n=== All tests completed ===')
}

test().catch(console.error)
