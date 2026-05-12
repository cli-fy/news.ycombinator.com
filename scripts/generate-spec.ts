import { spec } from '../src/index.ts'
import { writeFileSync } from 'fs'

const output = JSON.stringify(spec, null, 2)
writeFileSync('./openapi.json', output)
console.log('OpenAPI spec written to ./openapi.json')
