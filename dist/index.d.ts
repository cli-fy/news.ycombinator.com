import * as hono0 from "hono";
import * as openapi3_ts_oas300 from "openapi3-ts/oas30";
import { OpenAPIHono } from "@hono/zod-openapi";
import { Cli } from "incur";

//#region src/index.d.ts
declare const app: OpenAPIHono<hono0.Env, {}, "/">;
declare const spec: openapi3_ts_oas300.OpenAPIObject;
declare const cli: Cli.Cli<{}, undefined, undefined>;
//#endregion
export { app, cli as default, spec };
//# sourceMappingURL=index.d.ts.map