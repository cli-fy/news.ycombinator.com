import { a as StdioServerTransport, r as McpServer } from "./dist-3HDtzruv.js";
import { createRequire } from "node:module";
import * as fs$1 from "node:fs/promises";
import fs from "node:fs/promises";
import * as os$1 from "node:os";
import os, { homedir } from "node:os";
import * as path$1 from "node:path";
import path, { dirname, join } from "node:path";
import { createHash } from "node:crypto";
import { execFile } from "node:child_process";
import * as fs$2 from "node:fs";
import fsSync, { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

//#region rolldown:runtime
var __defProp = Object.defineProperty;
var __commonJSMin = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (all$1, symbols) => {
	let target = {};
	for (var name in all$1) {
		__defProp(target, name, {
			get: all$1[name],
			enumerable: true
		});
	}
	if (symbols) {
		__defProp(target, Symbol.toStringTag, { value: "Module" });
	}
	return target;
};
var __require = /* @__PURE__ */ createRequire(import.meta.url);

//#endregion
//#region node_modules/@asteasolutions/zod-to-openapi/dist/index.cjs
var require_dist$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	/******************************************************************************
	Copyright (c) Microsoft Corporation.
	
	Permission to use, copy, modify, and/or distribute this software for any
	purpose with or without fee is hereby granted.
	
	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
	PERFORMANCE OF THIS SOFTWARE.
	***************************************************************************** */
	function __rest(s, e) {
		var t = {};
		for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
		if (s != null && typeof Object.getOwnPropertySymbols === "function") {
			for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
		}
		return t;
	}
	function isZodType(schema$6, typeName) {
		var _a$2;
		return ((_a$2 = schema$6 === null || schema$6 === void 0 ? void 0 : schema$6._def) === null || _a$2 === void 0 ? void 0 : _a$2.typeName) === typeName;
	}
	function isAnyZodType(schema$6) {
		return "_def" in schema$6;
	}
	function preserveMetadataFromModifier(zod, modifier) {
		const zodModifier = zod.ZodType.prototype[modifier];
		zod.ZodType.prototype[modifier] = function(...args) {
			const result = zodModifier.apply(this, args);
			result._def.openapi = this._def.openapi;
			return result;
		};
	}
	function extendZodWithOpenApi$1(zod) {
		if (typeof zod.ZodType.prototype.openapi !== "undefined") return;
		zod.ZodType.prototype.openapi = function(refOrOpenapi, metadata) {
			var _a$2, _b, _c, _d, _e, _f;
			const openapi = typeof refOrOpenapi === "string" ? metadata : refOrOpenapi;
			const _g = openapi !== null && openapi !== void 0 ? openapi : {}, { param } = _g, restOfOpenApi = __rest(_g, ["param"]);
			const _internal = Object.assign(Object.assign({}, (_a$2 = this._def.openapi) === null || _a$2 === void 0 ? void 0 : _a$2._internal), typeof refOrOpenapi === "string" ? { refId: refOrOpenapi } : void 0);
			const resultMetadata = Object.assign(Object.assign(Object.assign({}, (_b = this._def.openapi) === null || _b === void 0 ? void 0 : _b.metadata), restOfOpenApi), ((_d = (_c = this._def.openapi) === null || _c === void 0 ? void 0 : _c.metadata) === null || _d === void 0 ? void 0 : _d.param) || param ? { param: Object.assign(Object.assign({}, (_f = (_e = this._def.openapi) === null || _e === void 0 ? void 0 : _e.metadata) === null || _f === void 0 ? void 0 : _f.param), param) } : void 0);
			const result = new this.constructor(Object.assign(Object.assign({}, this._def), { openapi: Object.assign(Object.assign({}, Object.keys(_internal).length > 0 ? { _internal } : void 0), Object.keys(resultMetadata).length > 0 ? { metadata: resultMetadata } : void 0) }));
			if (isZodType(this, "ZodObject")) {
				const originalExtend = this.extend;
				result.extend = function(...args) {
					var _a$3, _b$1, _c$1, _d$1, _e$1, _f$1, _g$1;
					const extendedResult = originalExtend.apply(this, args);
					extendedResult._def.openapi = {
						_internal: { extendedFrom: ((_b$1 = (_a$3 = this._def.openapi) === null || _a$3 === void 0 ? void 0 : _a$3._internal) === null || _b$1 === void 0 ? void 0 : _b$1.refId) ? {
							refId: (_d$1 = (_c$1 = this._def.openapi) === null || _c$1 === void 0 ? void 0 : _c$1._internal) === null || _d$1 === void 0 ? void 0 : _d$1.refId,
							schema: this
						} : (_f$1 = (_e$1 = this._def.openapi) === null || _e$1 === void 0 ? void 0 : _e$1._internal) === null || _f$1 === void 0 ? void 0 : _f$1.extendedFrom },
						metadata: (_g$1 = extendedResult._def.openapi) === null || _g$1 === void 0 ? void 0 : _g$1.metadata
					};
					return extendedResult;
				};
			}
			return result;
		};
		preserveMetadataFromModifier(zod, "optional");
		preserveMetadataFromModifier(zod, "nullable");
		preserveMetadataFromModifier(zod, "default");
		preserveMetadataFromModifier(zod, "transform");
		preserveMetadataFromModifier(zod, "refine");
		const zodDeepPartial = zod.ZodObject.prototype.deepPartial;
		zod.ZodObject.prototype.deepPartial = function() {
			const initialShape = this._def.shape();
			const result = zodDeepPartial.apply(this);
			const resultShape = result._def.shape();
			Object.entries(resultShape).forEach(([key, value]) => {
				var _a$2, _b;
				value._def.openapi = (_b = (_a$2 = initialShape[key]) === null || _a$2 === void 0 ? void 0 : _a$2._def) === null || _b === void 0 ? void 0 : _b.openapi;
			});
			result._def.openapi = void 0;
			return result;
		};
		const zodPick = zod.ZodObject.prototype.pick;
		zod.ZodObject.prototype.pick = function(...args) {
			const result = zodPick.apply(this, args);
			result._def.openapi = void 0;
			return result;
		};
		const zodOmit = zod.ZodObject.prototype.omit;
		zod.ZodObject.prototype.omit = function(...args) {
			const result = zodOmit.apply(this, args);
			result._def.openapi = void 0;
			return result;
		};
	}
	function isEqual(x, y) {
		if (x === null || x === void 0 || y === null || y === void 0) return x === y;
		if (x === y || x.valueOf() === y.valueOf()) return true;
		if (Array.isArray(x)) {
			if (!Array.isArray(y)) return false;
			if (x.length !== y.length) return false;
		}
		if (!(x instanceof Object) || !(y instanceof Object)) return false;
		const keysX = Object.keys(x);
		return Object.keys(y).every((keyY) => keysX.indexOf(keyY) !== -1) && keysX.every((key) => isEqual(x[key], y[key]));
	}
	var ObjectSet = class {
		constructor() {
			this.buckets = /* @__PURE__ */ new Map();
		}
		put(value) {
			const hashCode = this.hashCodeOf(value);
			const itemsByCode = this.buckets.get(hashCode);
			if (!itemsByCode) {
				this.buckets.set(hashCode, [value]);
				return;
			}
			if (!itemsByCode.some((_) => isEqual(_, value))) itemsByCode.push(value);
		}
		contains(value) {
			const hashCode = this.hashCodeOf(value);
			const itemsByCode = this.buckets.get(hashCode);
			if (!itemsByCode) return false;
			return itemsByCode.some((_) => isEqual(_, value));
		}
		values() {
			return [...this.buckets.values()].flat();
		}
		stats() {
			let totalBuckets = 0;
			let totalValues = 0;
			let collisions = 0;
			for (const bucket of this.buckets.values()) {
				totalBuckets += 1;
				totalValues += bucket.length;
				if (bucket.length > 1) collisions += 1;
			}
			const hashEffectiveness = totalBuckets / totalValues;
			return {
				totalBuckets,
				collisions,
				totalValues,
				hashEffectiveness
			};
		}
		hashCodeOf(object$1) {
			let hashCode = 0;
			if (Array.isArray(object$1)) {
				for (let i = 0; i < object$1.length; i++) hashCode ^= this.hashCodeOf(object$1[i]) * i;
				return hashCode;
			}
			if (typeof object$1 === "string") {
				for (let i = 0; i < object$1.length; i++) hashCode ^= object$1.charCodeAt(i) * i;
				return hashCode;
			}
			if (typeof object$1 === "number") return object$1;
			if (typeof object$1 === "object") for (const [key, value] of Object.entries(object$1)) hashCode ^= this.hashCodeOf(key) + this.hashCodeOf(value !== null && value !== void 0 ? value : "");
			return hashCode;
		}
	};
	function isUndefined(value) {
		return value === void 0;
	}
	function mapValues(object$1, mapper) {
		const result = {};
		Object.entries(object$1).forEach(([key, value]) => {
			result[key] = mapper(value);
		});
		return result;
	}
	function omit$1(object$1, keys) {
		const result = {};
		Object.entries(object$1).forEach(([key, value]) => {
			if (!keys.some((keyToOmit) => keyToOmit === key)) result[key] = value;
		});
		return result;
	}
	function omitBy(object$1, predicate) {
		const result = {};
		Object.entries(object$1).forEach(([key, value]) => {
			if (!predicate(value, key)) result[key] = value;
		});
		return result;
	}
	function compact(arr) {
		return arr.filter((elem) => !isUndefined(elem));
	}
	const objectEquals = isEqual;
	function uniq(values) {
		const set$4 = new ObjectSet();
		values.forEach((value) => set$4.put(value));
		return [...set$4.values()];
	}
	function isString(val) {
		return typeof val === "string";
	}
	var OpenAPIRegistry$1 = class {
		constructor(parents) {
			this.parents = parents;
			this._definitions = [];
		}
		get definitions() {
			var _a$2, _b;
			return [...(_b = (_a$2 = this.parents) === null || _a$2 === void 0 ? void 0 : _a$2.flatMap((par) => par.definitions)) !== null && _b !== void 0 ? _b : [], ...this._definitions];
		}
		/**
		* Registers a new component schema under /components/schemas/${name}
		*/
		register(refId, zodSchema) {
			const schemaWithRefId = this.schemaWithRefId(refId, zodSchema);
			this._definitions.push({
				type: "schema",
				schema: schemaWithRefId
			});
			return schemaWithRefId;
		}
		/**
		* Registers a new parameter schema under /components/parameters/${name}
		*/
		registerParameter(refId, zodSchema) {
			var _a$2, _b, _c;
			const schemaWithRefId = this.schemaWithRefId(refId, zodSchema);
			const currentMetadata = (_a$2 = schemaWithRefId._def.openapi) === null || _a$2 === void 0 ? void 0 : _a$2.metadata;
			const schemaWithMetadata = schemaWithRefId.openapi(Object.assign(Object.assign({}, currentMetadata), { param: Object.assign(Object.assign({}, currentMetadata === null || currentMetadata === void 0 ? void 0 : currentMetadata.param), { name: (_c = (_b = currentMetadata === null || currentMetadata === void 0 ? void 0 : currentMetadata.param) === null || _b === void 0 ? void 0 : _b.name) !== null && _c !== void 0 ? _c : refId }) }));
			this._definitions.push({
				type: "parameter",
				schema: schemaWithMetadata
			});
			return schemaWithMetadata;
		}
		/**
		* Registers a new path that would be generated under paths:
		*/
		registerPath(route) {
			this._definitions.push({
				type: "route",
				route
			});
		}
		/**
		* Registers a new webhook that would be generated under webhooks:
		*/
		registerWebhook(webhook) {
			this._definitions.push({
				type: "webhook",
				webhook
			});
		}
		/**
		* Registers a raw OpenAPI component. Use this if you have a simple object instead of a Zod schema.
		*
		* @param type The component type, e.g. `schemas`, `responses`, `securitySchemes`, etc.
		* @param name The name of the object, it is the key under the component
		*             type in the resulting OpenAPI document
		* @param component The actual object to put there
		*/
		registerComponent(type, name, component) {
			this._definitions.push({
				type: "component",
				componentType: type,
				name,
				component
			});
			return {
				name,
				ref: { $ref: `#/components/${type}/${name}` }
			};
		}
		schemaWithRefId(refId, zodSchema) {
			return zodSchema.openapi(refId);
		}
	};
	var ZodToOpenAPIError = class {
		constructor(message) {
			this.message = message;
		}
	};
	var ConflictError = class extends ZodToOpenAPIError {
		constructor(message, data) {
			super(message);
			this.data = data;
		}
	};
	var MissingParameterDataError = class extends ZodToOpenAPIError {
		constructor(data) {
			super(`Missing parameter data, please specify \`${data.missingField}\` and other OpenAPI parameter props using the \`param\` field of \`ZodSchema.openapi\``);
			this.data = data;
		}
	};
	function enhanceMissingParametersError(action, paramsToAdd) {
		try {
			return action();
		} catch (error) {
			if (error instanceof MissingParameterDataError) throw new MissingParameterDataError(Object.assign(Object.assign({}, error.data), paramsToAdd));
			throw error;
		}
	}
	var UnknownZodTypeError = class extends ZodToOpenAPIError {
		constructor(data) {
			super(`Unknown zod object type, please specify \`type\` and other OpenAPI props using \`ZodSchema.openapi\`.`);
			this.data = data;
		}
	};
	var Metadata = class {
		static getMetadata(zodSchema) {
			var _a$2;
			const innerSchema = this.unwrapChained(zodSchema);
			const metadata = zodSchema._def.openapi ? zodSchema._def.openapi : innerSchema._def.openapi;
			/**
			* Every zod schema can receive a `description` by using the .describe method.
			* That description should be used when generating an OpenApi schema.
			* The `??` bellow makes sure we can handle both:
			* - schema.describe('Test').optional()
			* - schema.optional().describe('Test')
			*/
			const zodDescription = (_a$2 = zodSchema.description) !== null && _a$2 !== void 0 ? _a$2 : innerSchema.description;
			return {
				_internal: metadata === null || metadata === void 0 ? void 0 : metadata._internal,
				metadata: Object.assign({ description: zodDescription }, metadata === null || metadata === void 0 ? void 0 : metadata.metadata)
			};
		}
		static getInternalMetadata(zodSchema) {
			const innerSchema = this.unwrapChained(zodSchema);
			const openapi = zodSchema._def.openapi ? zodSchema._def.openapi : innerSchema._def.openapi;
			return openapi === null || openapi === void 0 ? void 0 : openapi._internal;
		}
		static getParamMetadata(zodSchema) {
			var _a$2, _b;
			const innerSchema = this.unwrapChained(zodSchema);
			const metadata = zodSchema._def.openapi ? zodSchema._def.openapi : innerSchema._def.openapi;
			/**
			* Every zod schema can receive a `description` by using the .describe method.
			* That description should be used when generating an OpenApi schema.
			* The `??` bellow makes sure we can handle both:
			* - schema.describe('Test').optional()
			* - schema.optional().describe('Test')
			*/
			const zodDescription = (_a$2 = zodSchema.description) !== null && _a$2 !== void 0 ? _a$2 : innerSchema.description;
			return {
				_internal: metadata === null || metadata === void 0 ? void 0 : metadata._internal,
				metadata: Object.assign(Object.assign({}, metadata === null || metadata === void 0 ? void 0 : metadata.metadata), { param: Object.assign({ description: zodDescription }, (_b = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _b === void 0 ? void 0 : _b.param) })
			};
		}
		/**
		* A method that omits all custom keys added to the regular OpenAPI
		* metadata properties
		*/
		static buildSchemaMetadata(metadata) {
			return omitBy(omit$1(metadata, ["param"]), isUndefined);
		}
		static buildParameterMetadata(metadata) {
			return omitBy(metadata, isUndefined);
		}
		static applySchemaMetadata(initialData, metadata) {
			return omitBy(Object.assign(Object.assign({}, initialData), this.buildSchemaMetadata(metadata)), isUndefined);
		}
		static getRefId(zodSchema) {
			var _a$2;
			return (_a$2 = this.getInternalMetadata(zodSchema)) === null || _a$2 === void 0 ? void 0 : _a$2.refId;
		}
		static unwrapChained(schema$6) {
			return this.unwrapUntil(schema$6);
		}
		static getDefaultValue(zodSchema) {
			const unwrapped = this.unwrapUntil(zodSchema, "ZodDefault");
			return unwrapped === null || unwrapped === void 0 ? void 0 : unwrapped._def.defaultValue();
		}
		static unwrapUntil(schema$6, typeName) {
			if (typeName && isZodType(schema$6, typeName)) return schema$6;
			if (isZodType(schema$6, "ZodOptional") || isZodType(schema$6, "ZodNullable") || isZodType(schema$6, "ZodBranded")) return this.unwrapUntil(schema$6.unwrap(), typeName);
			if (isZodType(schema$6, "ZodDefault") || isZodType(schema$6, "ZodReadonly")) return this.unwrapUntil(schema$6._def.innerType, typeName);
			if (isZodType(schema$6, "ZodEffects")) return this.unwrapUntil(schema$6._def.schema, typeName);
			if (isZodType(schema$6, "ZodPipeline")) return this.unwrapUntil(schema$6._def.in, typeName);
			return typeName ? void 0 : schema$6;
		}
		static isOptionalSchema(zodSchema) {
			return zodSchema.isOptional();
		}
	};
	var ArrayTransformer = class {
		transform(zodSchema, mapNullableType, mapItems) {
			var _a$2, _b;
			const itemType = zodSchema._def.type;
			return Object.assign(Object.assign({}, mapNullableType("array")), {
				items: mapItems(itemType),
				minItems: (_a$2 = zodSchema._def.minLength) === null || _a$2 === void 0 ? void 0 : _a$2.value,
				maxItems: (_b = zodSchema._def.maxLength) === null || _b === void 0 ? void 0 : _b.value
			});
		}
	};
	var BigIntTransformer = class {
		transform(mapNullableType) {
			return Object.assign(Object.assign({}, mapNullableType("string")), { pattern: `^\d+$` });
		}
	};
	var DiscriminatedUnionTransformer = class {
		transform(zodSchema, isNullable, mapNullableOfArray, mapItem, generateSchemaRef) {
			const options = [...zodSchema.options.values()];
			const optionSchema = options.map(mapItem);
			if (isNullable) return { oneOf: mapNullableOfArray(optionSchema, isNullable) };
			return {
				oneOf: optionSchema,
				discriminator: this.mapDiscriminator(options, zodSchema.discriminator, generateSchemaRef)
			};
		}
		mapDiscriminator(zodObjects, discriminator, generateSchemaRef) {
			if (zodObjects.some((obj) => Metadata.getRefId(obj) === void 0)) return;
			const mapping = {};
			zodObjects.forEach((obj) => {
				var _a$2;
				const refId = Metadata.getRefId(obj);
				const value = (_a$2 = obj.shape) === null || _a$2 === void 0 ? void 0 : _a$2[discriminator];
				if (isZodType(value, "ZodEnum") || isZodType(value, "ZodNativeEnum")) {
					Object.values(value.enum).filter(isString).forEach((enumValue) => {
						mapping[enumValue] = generateSchemaRef(refId);
					});
					return;
				}
				const literalValue = value === null || value === void 0 ? void 0 : value._def.value;
				if (typeof literalValue !== "string") throw new Error(`Discriminator ${discriminator} could not be found in one of the values of a discriminated union`);
				mapping[literalValue] = generateSchemaRef(refId);
			});
			return {
				propertyName: discriminator,
				mapping
			};
		}
	};
	var EnumTransformer = class {
		transform(zodSchema, mapNullableType) {
			return Object.assign(Object.assign({}, mapNullableType("string")), { enum: zodSchema._def.values });
		}
	};
	var IntersectionTransformer = class {
		transform(zodSchema, isNullable, mapNullableOfArray, mapItem) {
			const allOfSchema = { allOf: this.flattenIntersectionTypes(zodSchema).map(mapItem) };
			if (isNullable) return { anyOf: mapNullableOfArray([allOfSchema], isNullable) };
			return allOfSchema;
		}
		flattenIntersectionTypes(schema$6) {
			if (!isZodType(schema$6, "ZodIntersection")) return [schema$6];
			const leftSubTypes = this.flattenIntersectionTypes(schema$6._def.left);
			const rightSubTypes = this.flattenIntersectionTypes(schema$6._def.right);
			return [...leftSubTypes, ...rightSubTypes];
		}
	};
	var LiteralTransformer = class {
		transform(zodSchema, mapNullableType) {
			return Object.assign(Object.assign({}, mapNullableType(typeof zodSchema._def.value)), { enum: [zodSchema._def.value] });
		}
	};
	/**
	* Numeric enums have a reverse mapping https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings
	* whereas string ones don't.
	*
	* This function checks if an enum is fully numeric - i.e all values are numbers or not.
	* And filters out only the actual enum values when a reverse mapping is apparent.
	*/
	function enumInfo(enumObject) {
		const values = Object.keys(enumObject).filter((key) => typeof enumObject[enumObject[key]] !== "number").map((key) => enumObject[key]);
		const numericCount = values.filter((_) => typeof _ === "number").length;
		return {
			values,
			type: numericCount === 0 ? "string" : numericCount === values.length ? "numeric" : "mixed"
		};
	}
	var NativeEnumTransformer = class {
		transform(zodSchema, mapNullableType) {
			const { type, values } = enumInfo(zodSchema._def.values);
			if (type === "mixed") throw new ZodToOpenAPIError("Enum has mixed string and number values, please specify the OpenAPI type manually");
			return Object.assign(Object.assign({}, mapNullableType(type === "numeric" ? "integer" : "string")), { enum: values });
		}
	};
	var NumberTransformer = class {
		transform(zodSchema, mapNullableType, getNumberChecks) {
			return Object.assign(Object.assign({}, mapNullableType(zodSchema.isInt ? "integer" : "number")), getNumberChecks(zodSchema._def.checks));
		}
	};
	var ObjectTransformer = class {
		transform(zodSchema, defaultValue, mapNullableType, mapItem) {
			var _a$2;
			const extendedFrom = (_a$2 = Metadata.getInternalMetadata(zodSchema)) === null || _a$2 === void 0 ? void 0 : _a$2.extendedFrom;
			const required$1 = this.requiredKeysOf(zodSchema);
			const properties = mapValues(zodSchema._def.shape(), mapItem);
			if (!extendedFrom) return Object.assign(Object.assign(Object.assign(Object.assign({}, mapNullableType("object")), {
				properties,
				default: defaultValue
			}), required$1.length > 0 ? { required: required$1 } : {}), this.generateAdditionalProperties(zodSchema, mapItem));
			const parent = extendedFrom.schema;
			mapItem(parent);
			const keysRequiredByParent = this.requiredKeysOf(parent);
			const propsOfParent = mapValues(parent === null || parent === void 0 ? void 0 : parent._def.shape(), mapItem);
			const propertiesToAdd = Object.fromEntries(Object.entries(properties).filter(([key, type]) => {
				return !objectEquals(propsOfParent[key], type);
			}));
			const additionallyRequired = required$1.filter((prop) => !keysRequiredByParent.includes(prop));
			const objectData = Object.assign(Object.assign(Object.assign(Object.assign({}, mapNullableType("object")), {
				default: defaultValue,
				properties: propertiesToAdd
			}), additionallyRequired.length > 0 ? { required: additionallyRequired } : {}), this.generateAdditionalProperties(zodSchema, mapItem));
			return { allOf: [{ $ref: `#/components/schemas/${extendedFrom.refId}` }, objectData] };
		}
		generateAdditionalProperties(zodSchema, mapItem) {
			const unknownKeysOption = zodSchema._def.unknownKeys;
			const catchallSchema = zodSchema._def.catchall;
			if (isZodType(catchallSchema, "ZodNever")) {
				if (unknownKeysOption === "strict") return { additionalProperties: false };
				return {};
			}
			return { additionalProperties: mapItem(catchallSchema) };
		}
		requiredKeysOf(objectSchema) {
			return Object.entries(objectSchema._def.shape()).filter(([_key, type]) => !Metadata.isOptionalSchema(type)).map(([key, _type]) => key);
		}
	};
	var RecordTransformer = class {
		transform(zodSchema, mapNullableType, mapItem) {
			const propertiesType = zodSchema._def.valueType;
			const keyType = zodSchema._def.keyType;
			const propertiesSchema = mapItem(propertiesType);
			if (isZodType(keyType, "ZodEnum") || isZodType(keyType, "ZodNativeEnum")) {
				const properties = Object.values(keyType.enum).filter(isString).reduce((acc, curr) => Object.assign(Object.assign({}, acc), { [curr]: propertiesSchema }), {});
				return Object.assign(Object.assign({}, mapNullableType("object")), { properties });
			}
			return Object.assign(Object.assign({}, mapNullableType("object")), { additionalProperties: propertiesSchema });
		}
	};
	var StringTransformer = class {
		transform(zodSchema, mapNullableType) {
			var _a$2, _b, _c;
			const regexCheck = this.getZodStringCheck(zodSchema, "regex");
			const length = (_a$2 = this.getZodStringCheck(zodSchema, "length")) === null || _a$2 === void 0 ? void 0 : _a$2.value;
			const maxLength = Number.isFinite(zodSchema.minLength) ? (_b = zodSchema.minLength) !== null && _b !== void 0 ? _b : void 0 : void 0;
			const minLength = Number.isFinite(zodSchema.maxLength) ? (_c = zodSchema.maxLength) !== null && _c !== void 0 ? _c : void 0 : void 0;
			return Object.assign(Object.assign({}, mapNullableType("string")), {
				minLength: length !== null && length !== void 0 ? length : maxLength,
				maxLength: length !== null && length !== void 0 ? length : minLength,
				format: this.mapStringFormat(zodSchema),
				pattern: regexCheck === null || regexCheck === void 0 ? void 0 : regexCheck.regex.source
			});
		}
		/**
		* Attempts to map Zod strings to known formats
		* https://json-schema.org/understanding-json-schema/reference/string.html#built-in-formats
		*/
		mapStringFormat(zodString) {
			if (zodString.isUUID) return "uuid";
			if (zodString.isEmail) return "email";
			if (zodString.isURL) return "uri";
			if (zodString.isDate) return "date";
			if (zodString.isDatetime) return "date-time";
			if (zodString.isCUID) return "cuid";
			if (zodString.isCUID2) return "cuid2";
			if (zodString.isULID) return "ulid";
			if (zodString.isIP) return "ip";
			if (zodString.isEmoji) return "emoji";
		}
		getZodStringCheck(zodString, kind) {
			return zodString._def.checks.find((check$1) => {
				return check$1.kind === kind;
			});
		}
	};
	var TupleTransformer = class {
		constructor(versionSpecifics) {
			this.versionSpecifics = versionSpecifics;
		}
		transform(zodSchema, mapNullableType, mapItem) {
			const { items } = zodSchema._def;
			const schemas$1 = items.map(mapItem);
			return Object.assign(Object.assign({}, mapNullableType("array")), this.versionSpecifics.mapTupleItems(schemas$1));
		}
	};
	var UnionTransformer = class {
		transform(zodSchema, mapNullableOfArray, mapItem) {
			return { anyOf: mapNullableOfArray(this.flattenUnionTypes(zodSchema).map((schema$6) => {
				return mapItem(this.unwrapNullable(schema$6));
			})) };
		}
		flattenUnionTypes(schema$6) {
			if (!isZodType(schema$6, "ZodUnion")) return [schema$6];
			return schema$6._def.options.flatMap((option) => this.flattenUnionTypes(option));
		}
		unwrapNullable(schema$6) {
			if (isZodType(schema$6, "ZodNullable")) return this.unwrapNullable(schema$6.unwrap());
			return schema$6;
		}
	};
	var OpenApiTransformer = class {
		constructor(versionSpecifics) {
			this.versionSpecifics = versionSpecifics;
			this.objectTransformer = new ObjectTransformer();
			this.stringTransformer = new StringTransformer();
			this.numberTransformer = new NumberTransformer();
			this.bigIntTransformer = new BigIntTransformer();
			this.literalTransformer = new LiteralTransformer();
			this.enumTransformer = new EnumTransformer();
			this.nativeEnumTransformer = new NativeEnumTransformer();
			this.arrayTransformer = new ArrayTransformer();
			this.unionTransformer = new UnionTransformer();
			this.discriminatedUnionTransformer = new DiscriminatedUnionTransformer();
			this.intersectionTransformer = new IntersectionTransformer();
			this.recordTransformer = new RecordTransformer();
			this.tupleTransformer = new TupleTransformer(versionSpecifics);
		}
		transform(zodSchema, isNullable, mapItem, generateSchemaRef, defaultValue) {
			if (isZodType(zodSchema, "ZodNull")) return this.versionSpecifics.nullType;
			if (isZodType(zodSchema, "ZodUnknown") || isZodType(zodSchema, "ZodAny")) return this.versionSpecifics.mapNullableType(void 0, isNullable);
			if (isZodType(zodSchema, "ZodObject")) return this.objectTransformer.transform(zodSchema, defaultValue, (_) => this.versionSpecifics.mapNullableType(_, isNullable), mapItem);
			const schema$6 = this.transformSchemaWithoutDefault(zodSchema, isNullable, mapItem, generateSchemaRef);
			return Object.assign(Object.assign({}, schema$6), { default: defaultValue });
		}
		transformSchemaWithoutDefault(zodSchema, isNullable, mapItem, generateSchemaRef) {
			if (isZodType(zodSchema, "ZodUnknown") || isZodType(zodSchema, "ZodAny")) return this.versionSpecifics.mapNullableType(void 0, isNullable);
			if (isZodType(zodSchema, "ZodString")) return this.stringTransformer.transform(zodSchema, (schema$6) => this.versionSpecifics.mapNullableType(schema$6, isNullable));
			if (isZodType(zodSchema, "ZodNumber")) return this.numberTransformer.transform(zodSchema, (schema$6) => this.versionSpecifics.mapNullableType(schema$6, isNullable), (_) => this.versionSpecifics.getNumberChecks(_));
			if (isZodType(zodSchema, "ZodBigInt")) return this.bigIntTransformer.transform((schema$6) => this.versionSpecifics.mapNullableType(schema$6, isNullable));
			if (isZodType(zodSchema, "ZodBoolean")) return this.versionSpecifics.mapNullableType("boolean", isNullable);
			if (isZodType(zodSchema, "ZodLiteral")) return this.literalTransformer.transform(zodSchema, (schema$6) => this.versionSpecifics.mapNullableType(schema$6, isNullable));
			if (isZodType(zodSchema, "ZodEnum")) return this.enumTransformer.transform(zodSchema, (schema$6) => this.versionSpecifics.mapNullableType(schema$6, isNullable));
			if (isZodType(zodSchema, "ZodNativeEnum")) return this.nativeEnumTransformer.transform(zodSchema, (schema$6) => this.versionSpecifics.mapNullableType(schema$6, isNullable));
			if (isZodType(zodSchema, "ZodArray")) return this.arrayTransformer.transform(zodSchema, (_) => this.versionSpecifics.mapNullableType(_, isNullable), mapItem);
			if (isZodType(zodSchema, "ZodTuple")) return this.tupleTransformer.transform(zodSchema, (_) => this.versionSpecifics.mapNullableType(_, isNullable), mapItem);
			if (isZodType(zodSchema, "ZodUnion")) return this.unionTransformer.transform(zodSchema, (_) => this.versionSpecifics.mapNullableOfArray(_, isNullable), mapItem);
			if (isZodType(zodSchema, "ZodDiscriminatedUnion")) return this.discriminatedUnionTransformer.transform(zodSchema, isNullable, (_) => this.versionSpecifics.mapNullableOfArray(_, isNullable), mapItem, generateSchemaRef);
			if (isZodType(zodSchema, "ZodIntersection")) return this.intersectionTransformer.transform(zodSchema, isNullable, (_) => this.versionSpecifics.mapNullableOfArray(_, isNullable), mapItem);
			if (isZodType(zodSchema, "ZodRecord")) return this.recordTransformer.transform(zodSchema, (_) => this.versionSpecifics.mapNullableType(_, isNullable), mapItem);
			if (isZodType(zodSchema, "ZodDate")) return this.versionSpecifics.mapNullableType("string", isNullable);
			const refId = Metadata.getRefId(zodSchema);
			throw new UnknownZodTypeError({
				currentSchema: zodSchema._def,
				schemaName: refId
			});
		}
	};
	var OpenAPIGenerator = class {
		constructor(definitions, versionSpecifics) {
			this.definitions = definitions;
			this.versionSpecifics = versionSpecifics;
			this.schemaRefs = {};
			this.paramRefs = {};
			this.pathRefs = {};
			this.rawComponents = [];
			this.openApiTransformer = new OpenApiTransformer(versionSpecifics);
			this.sortDefinitions();
		}
		generateDocumentData() {
			this.definitions.forEach((definition) => this.generateSingle(definition));
			return {
				components: this.buildComponents(),
				paths: this.pathRefs
			};
		}
		generateComponents() {
			this.definitions.forEach((definition) => this.generateSingle(definition));
			return { components: this.buildComponents() };
		}
		buildComponents() {
			var _a$2, _b;
			const rawComponents = {};
			this.rawComponents.forEach(({ componentType, name, component }) => {
				var _a$3;
				(_a$3 = rawComponents[componentType]) !== null && _a$3 !== void 0 || (rawComponents[componentType] = {});
				rawComponents[componentType][name] = component;
			});
			return Object.assign(Object.assign({}, rawComponents), {
				schemas: Object.assign(Object.assign({}, (_a$2 = rawComponents.schemas) !== null && _a$2 !== void 0 ? _a$2 : {}), this.schemaRefs),
				parameters: Object.assign(Object.assign({}, (_b = rawComponents.parameters) !== null && _b !== void 0 ? _b : {}), this.paramRefs)
			});
		}
		sortDefinitions() {
			const generationOrder = [
				"schema",
				"parameter",
				"component",
				"route"
			];
			this.definitions.sort((left, right) => {
				if (!("type" in left)) {
					if (!("type" in right)) return 0;
					return -1;
				}
				if (!("type" in right)) return 1;
				return generationOrder.findIndex((type) => type === left.type) - generationOrder.findIndex((type) => type === right.type);
			});
		}
		generateSingle(definition) {
			if (!("type" in definition)) {
				this.generateSchemaWithRef(definition);
				return;
			}
			switch (definition.type) {
				case "parameter":
					this.generateParameterDefinition(definition.schema);
					return;
				case "schema":
					this.generateSchemaWithRef(definition.schema);
					return;
				case "route":
					this.generateSingleRoute(definition.route);
					return;
				case "component":
					this.rawComponents.push(definition);
					return;
			}
		}
		generateParameterDefinition(zodSchema) {
			const refId = Metadata.getRefId(zodSchema);
			const result = this.generateParameter(zodSchema);
			if (refId) this.paramRefs[refId] = result;
			return result;
		}
		getParameterRef(schemaMetadata, external) {
			var _a$2, _b, _c, _d, _e;
			const parameterMetadata = (_a$2 = schemaMetadata === null || schemaMetadata === void 0 ? void 0 : schemaMetadata.metadata) === null || _a$2 === void 0 ? void 0 : _a$2.param;
			const existingRef = ((_b = schemaMetadata === null || schemaMetadata === void 0 ? void 0 : schemaMetadata._internal) === null || _b === void 0 ? void 0 : _b.refId) ? this.paramRefs[(_c = schemaMetadata._internal) === null || _c === void 0 ? void 0 : _c.refId] : void 0;
			if (!((_d = schemaMetadata === null || schemaMetadata === void 0 ? void 0 : schemaMetadata._internal) === null || _d === void 0 ? void 0 : _d.refId) || !existingRef) return;
			if (parameterMetadata && existingRef.in !== parameterMetadata.in || (external === null || external === void 0 ? void 0 : external.in) && existingRef.in !== external.in) throw new ConflictError(`Conflicting location for parameter ${existingRef.name}`, {
				key: "in",
				values: compact([
					existingRef.in,
					external === null || external === void 0 ? void 0 : external.in,
					parameterMetadata === null || parameterMetadata === void 0 ? void 0 : parameterMetadata.in
				])
			});
			if (parameterMetadata && existingRef.name !== parameterMetadata.name || (external === null || external === void 0 ? void 0 : external.name) && existingRef.name !== (external === null || external === void 0 ? void 0 : external.name)) throw new ConflictError(`Conflicting names for parameter`, {
				key: "name",
				values: compact([
					existingRef.name,
					external === null || external === void 0 ? void 0 : external.name,
					parameterMetadata === null || parameterMetadata === void 0 ? void 0 : parameterMetadata.name
				])
			});
			return { $ref: `#/components/parameters/${(_e = schemaMetadata._internal) === null || _e === void 0 ? void 0 : _e.refId}` };
		}
		generateInlineParameters(zodSchema, location) {
			var _a$2;
			const metadata = Metadata.getMetadata(zodSchema);
			const parameterMetadata = (_a$2 = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _a$2 === void 0 ? void 0 : _a$2.param;
			const referencedSchema = this.getParameterRef(metadata, { in: location });
			if (referencedSchema) return [referencedSchema];
			if (isZodType(zodSchema, "ZodObject")) {
				const propTypes = zodSchema._def.shape();
				return Object.entries(propTypes).map(([key, schema$6]) => {
					var _a$3, _b;
					const innerMetadata = Metadata.getMetadata(schema$6);
					const referencedSchema$1 = this.getParameterRef(innerMetadata, {
						in: location,
						name: key
					});
					if (referencedSchema$1) return referencedSchema$1;
					const innerParameterMetadata = (_a$3 = innerMetadata === null || innerMetadata === void 0 ? void 0 : innerMetadata.metadata) === null || _a$3 === void 0 ? void 0 : _a$3.param;
					if ((innerParameterMetadata === null || innerParameterMetadata === void 0 ? void 0 : innerParameterMetadata.name) && innerParameterMetadata.name !== key) throw new ConflictError(`Conflicting names for parameter`, {
						key: "name",
						values: [key, innerParameterMetadata.name]
					});
					if ((innerParameterMetadata === null || innerParameterMetadata === void 0 ? void 0 : innerParameterMetadata.in) && innerParameterMetadata.in !== location) throw new ConflictError(`Conflicting location for parameter ${(_b = innerParameterMetadata.name) !== null && _b !== void 0 ? _b : key}`, {
						key: "in",
						values: [location, innerParameterMetadata.in]
					});
					return this.generateParameter(schema$6.openapi({ param: {
						name: key,
						in: location
					} }));
				});
			}
			if ((parameterMetadata === null || parameterMetadata === void 0 ? void 0 : parameterMetadata.in) && parameterMetadata.in !== location) throw new ConflictError(`Conflicting location for parameter ${parameterMetadata.name}`, {
				key: "in",
				values: [location, parameterMetadata.in]
			});
			return [this.generateParameter(zodSchema.openapi({ param: { in: location } }))];
		}
		generateSimpleParameter(zodSchema) {
			var _a$2;
			const metadata = Metadata.getParamMetadata(zodSchema);
			const paramMetadata = (_a$2 = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _a$2 === void 0 ? void 0 : _a$2.param;
			const required$1 = !Metadata.isOptionalSchema(zodSchema) && !zodSchema.isNullable();
			const schema$6 = this.generateSchemaWithRef(zodSchema);
			return Object.assign({
				schema: schema$6,
				required: required$1
			}, paramMetadata ? Metadata.buildParameterMetadata(paramMetadata) : {});
		}
		generateParameter(zodSchema) {
			var _a$2;
			const metadata = Metadata.getMetadata(zodSchema);
			const paramMetadata = (_a$2 = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _a$2 === void 0 ? void 0 : _a$2.param;
			const paramName = paramMetadata === null || paramMetadata === void 0 ? void 0 : paramMetadata.name;
			const paramLocation = paramMetadata === null || paramMetadata === void 0 ? void 0 : paramMetadata.in;
			if (!paramName) throw new MissingParameterDataError({ missingField: "name" });
			if (!paramLocation) throw new MissingParameterDataError({
				missingField: "in",
				paramName
			});
			const baseParameter = this.generateSimpleParameter(zodSchema);
			return Object.assign(Object.assign({}, baseParameter), {
				in: paramLocation,
				name: paramName
			});
		}
		generateSchemaWithMetadata(zodSchema) {
			var _a$2;
			const innerSchema = Metadata.unwrapChained(zodSchema);
			const metadata = Metadata.getMetadata(zodSchema);
			const defaultValue = Metadata.getDefaultValue(zodSchema);
			const result = ((_a$2 = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _a$2 === void 0 ? void 0 : _a$2.type) ? { type: metadata === null || metadata === void 0 ? void 0 : metadata.metadata.type } : this.toOpenAPISchema(innerSchema, zodSchema.isNullable(), defaultValue);
			return (metadata === null || metadata === void 0 ? void 0 : metadata.metadata) ? Metadata.applySchemaMetadata(result, metadata.metadata) : omitBy(result, isUndefined);
		}
		/**
		* Same as above but applies nullable
		*/
		constructReferencedOpenAPISchema(zodSchema) {
			var _a$2;
			const metadata = Metadata.getMetadata(zodSchema);
			const innerSchema = Metadata.unwrapChained(zodSchema);
			const defaultValue = Metadata.getDefaultValue(zodSchema);
			const isNullableSchema = zodSchema.isNullable();
			if ((_a$2 = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) === null || _a$2 === void 0 ? void 0 : _a$2.type) return this.versionSpecifics.mapNullableType(metadata.metadata.type, isNullableSchema);
			return this.toOpenAPISchema(innerSchema, isNullableSchema, defaultValue);
		}
		/**
		* Generates an OpenAPI SchemaObject or a ReferenceObject with all the provided metadata applied
		*/
		generateSimpleSchema(zodSchema) {
			var _a$2;
			const metadata = Metadata.getMetadata(zodSchema);
			const refId = Metadata.getRefId(zodSchema);
			if (!refId || !this.schemaRefs[refId]) return this.generateSchemaWithMetadata(zodSchema);
			const schemaRef = this.schemaRefs[refId];
			const referenceObject = { $ref: this.generateSchemaRef(refId) };
			const newMetadata = omitBy(Metadata.buildSchemaMetadata((_a$2 = metadata === null || metadata === void 0 ? void 0 : metadata.metadata) !== null && _a$2 !== void 0 ? _a$2 : {}), (value, key) => value === void 0 || objectEquals(value, schemaRef[key]));
			if (newMetadata.type) return { allOf: [referenceObject, newMetadata] };
			const newSchemaMetadata = omitBy(this.constructReferencedOpenAPISchema(zodSchema), (value, key) => value === void 0 || objectEquals(value, schemaRef[key]));
			const appliedMetadata = Metadata.applySchemaMetadata(newSchemaMetadata, newMetadata);
			if (Object.keys(appliedMetadata).length > 0) return { allOf: [referenceObject, appliedMetadata] };
			return referenceObject;
		}
		/**
		* Same as `generateSchema` but if the new schema is added into the
		* referenced schemas, it would return a ReferenceObject and not the
		* whole result.
		*
		* Should be used for nested objects, arrays, etc.
		*/
		generateSchemaWithRef(zodSchema) {
			const refId = Metadata.getRefId(zodSchema);
			const result = this.generateSimpleSchema(zodSchema);
			if (refId && this.schemaRefs[refId] === void 0) {
				this.schemaRefs[refId] = result;
				return { $ref: this.generateSchemaRef(refId) };
			}
			return result;
		}
		generateSchemaRef(refId) {
			return `#/components/schemas/${refId}`;
		}
		getRequestBody(requestBody) {
			if (!requestBody) return;
			const { content } = requestBody, rest = __rest(requestBody, ["content"]);
			const requestBodyContent = this.getBodyContent(content);
			return Object.assign(Object.assign({}, rest), { content: requestBodyContent });
		}
		getParameters(request) {
			if (!request) return [];
			const { headers } = request;
			const query = this.cleanParameter(request.query);
			const params = this.cleanParameter(request.params);
			const cookies = this.cleanParameter(request.cookies);
			const queryParameters = enhanceMissingParametersError(() => query ? this.generateInlineParameters(query, "query") : [], { location: "query" });
			const pathParameters = enhanceMissingParametersError(() => params ? this.generateInlineParameters(params, "path") : [], { location: "path" });
			const cookieParameters = enhanceMissingParametersError(() => cookies ? this.generateInlineParameters(cookies, "cookie") : [], { location: "cookie" });
			const headerParameters = enhanceMissingParametersError(() => {
				if (Array.isArray(headers)) return headers.flatMap((header) => this.generateInlineParameters(header, "header"));
				const cleanHeaders = this.cleanParameter(headers);
				return cleanHeaders ? this.generateInlineParameters(cleanHeaders, "header") : [];
			}, { location: "header" });
			return [
				...pathParameters,
				...queryParameters,
				...headerParameters,
				...cookieParameters
			];
		}
		cleanParameter(schema$6) {
			if (!schema$6) return;
			return isZodType(schema$6, "ZodEffects") ? this.cleanParameter(schema$6._def.schema) : schema$6;
		}
		generatePath(route) {
			const { method, path: path$2, request, responses } = route, pathItemConfig = __rest(route, [
				"method",
				"path",
				"request",
				"responses"
			]);
			const generatedResponses = mapValues(responses, (response) => {
				return this.getResponse(response);
			});
			const parameters = enhanceMissingParametersError(() => this.getParameters(request), { route: `${method} ${path$2}` });
			const requestBody = this.getRequestBody(request === null || request === void 0 ? void 0 : request.body);
			return { [method]: Object.assign(Object.assign(Object.assign(Object.assign({}, pathItemConfig), parameters.length > 0 ? { parameters: [...pathItemConfig.parameters || [], ...parameters] } : {}), requestBody ? { requestBody } : {}), { responses: generatedResponses }) };
		}
		generateSingleRoute(route) {
			const routeDoc = this.generatePath(route);
			this.pathRefs[route.path] = Object.assign(Object.assign({}, this.pathRefs[route.path]), routeDoc);
			return routeDoc;
		}
		getResponse(response) {
			if (this.isReferenceObject(response)) return response;
			const { content, headers } = response, rest = __rest(response, ["content", "headers"]);
			const responseContent = content ? { content: this.getBodyContent(content) } : {};
			if (!headers) return Object.assign(Object.assign({}, rest), responseContent);
			const responseHeaders = isZodType(headers, "ZodObject") ? this.getResponseHeaders(headers) : headers;
			return Object.assign(Object.assign(Object.assign({}, rest), { headers: responseHeaders }), responseContent);
		}
		isReferenceObject(schema$6) {
			return "$ref" in schema$6;
		}
		getResponseHeaders(headers) {
			return mapValues(headers._def.shape(), (_) => this.generateSimpleParameter(_));
		}
		getBodyContent(content) {
			return mapValues(content, (config$1) => {
				if (!config$1 || !isAnyZodType(config$1.schema)) return config$1;
				const { schema: configSchema } = config$1, rest = __rest(config$1, ["schema"]);
				const schema$6 = this.generateSchemaWithRef(configSchema);
				return Object.assign({ schema: schema$6 }, rest);
			});
		}
		toOpenAPISchema(zodSchema, isNullable, defaultValue) {
			return this.openApiTransformer.transform(zodSchema, isNullable, (_) => this.generateSchemaWithRef(_), (_) => this.generateSchemaRef(_), defaultValue);
		}
	};
	var OpenApiGeneratorV30Specifics = class {
		get nullType() {
			return { nullable: true };
		}
		mapNullableOfArray(objects, isNullable) {
			if (isNullable) return [...objects, this.nullType];
			return objects;
		}
		mapNullableType(type, isNullable) {
			return Object.assign(Object.assign({}, type ? { type } : void 0), isNullable ? this.nullType : void 0);
		}
		mapTupleItems(schemas$1) {
			const uniqueSchemas = uniq(schemas$1);
			return {
				items: uniqueSchemas.length === 1 ? uniqueSchemas[0] : { anyOf: uniqueSchemas },
				minItems: schemas$1.length,
				maxItems: schemas$1.length
			};
		}
		getNumberChecks(checks) {
			return Object.assign({}, ...checks.map((check$1) => {
				switch (check$1.kind) {
					case "min": return check$1.inclusive ? { minimum: Number(check$1.value) } : {
						minimum: Number(check$1.value),
						exclusiveMinimum: true
					};
					case "max": return check$1.inclusive ? { maximum: Number(check$1.value) } : {
						maximum: Number(check$1.value),
						exclusiveMaximum: true
					};
					default: return {};
				}
			}));
		}
	};
	var OpenApiGeneratorV3$1 = class {
		constructor(definitions) {
			this.generator = new OpenAPIGenerator(definitions, new OpenApiGeneratorV30Specifics());
		}
		generateDocument(config$1) {
			const baseData = this.generator.generateDocumentData();
			return Object.assign(Object.assign({}, config$1), baseData);
		}
		generateComponents() {
			return this.generator.generateComponents();
		}
	};
	var OpenApiGeneratorV31Specifics = class {
		get nullType() {
			return { type: "null" };
		}
		mapNullableOfArray(objects, isNullable) {
			if (isNullable) return [...objects, this.nullType];
			return objects;
		}
		mapNullableType(type, isNullable) {
			if (!type) return {};
			if (isNullable) return { type: Array.isArray(type) ? [...type, "null"] : [type, "null"] };
			return { type };
		}
		mapTupleItems(schemas$1) {
			return { prefixItems: schemas$1 };
		}
		getNumberChecks(checks) {
			return Object.assign({}, ...checks.map((check$1) => {
				switch (check$1.kind) {
					case "min": return check$1.inclusive ? { minimum: Number(check$1.value) } : { exclusiveMinimum: Number(check$1.value) };
					case "max": return check$1.inclusive ? { maximum: Number(check$1.value) } : { exclusiveMaximum: Number(check$1.value) };
					default: return {};
				}
			}));
		}
	};
	function isWebhookDefinition(definition) {
		return "type" in definition && definition.type === "webhook";
	}
	var OpenApiGeneratorV31$1 = class {
		constructor(definitions) {
			this.definitions = definitions;
			this.webhookRefs = {};
			const specifics = new OpenApiGeneratorV31Specifics();
			this.generator = new OpenAPIGenerator(this.definitions, specifics);
		}
		generateDocument(config$1) {
			const baseDocument = this.generator.generateDocumentData();
			this.definitions.filter(isWebhookDefinition).forEach((definition) => this.generateSingleWebhook(definition.webhook));
			return Object.assign(Object.assign(Object.assign({}, config$1), baseDocument), { webhooks: this.webhookRefs });
		}
		generateComponents() {
			return this.generator.generateComponents();
		}
		generateSingleWebhook(route) {
			const routeDoc = this.generator.generatePath(route);
			this.webhookRefs[route.path] = Object.assign(Object.assign({}, this.webhookRefs[route.path]), routeDoc);
			return routeDoc;
		}
	};
	exports.OpenAPIRegistry = OpenAPIRegistry$1;
	exports.OpenApiGeneratorV3 = OpenApiGeneratorV3$1;
	exports.OpenApiGeneratorV31 = OpenApiGeneratorV31$1;
	exports.extendZodWithOpenApi = extendZodWithOpenApi$1;
}));

//#endregion
//#region node_modules/hono/dist/utils/url.js
var import_dist$4 = require_dist$1();
var splitPath = (path$2) => {
	const paths = path$2.split("/");
	if (paths[0] === "") paths.shift();
	return paths;
};
var splitRoutingPath = (routePath) => {
	const { groups, path: path$2 } = extractGroupsFromPath(routePath);
	return replaceGroupMarks(splitPath(path$2), groups);
};
var extractGroupsFromPath = (path$2) => {
	const groups = [];
	path$2 = path$2.replace(/\{[^}]+\}/g, (match$1, index$1) => {
		const mark = `@${index$1}`;
		groups.push([mark, match$1]);
		return mark;
	});
	return {
		groups,
		path: path$2
	};
};
var replaceGroupMarks = (paths, groups) => {
	for (let i = groups.length - 1; i >= 0; i--) {
		const [mark] = groups[i];
		for (let j = paths.length - 1; j >= 0; j--) if (paths[j].includes(mark)) {
			paths[j] = paths[j].replace(mark, groups[i][1]);
			break;
		}
	}
	return paths;
};
var patternCache = {};
var getPattern = (label, next) => {
	if (label === "*") return "*";
	const match$1 = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
	if (match$1) {
		const cacheKey = `${label}#${next}`;
		if (!patternCache[cacheKey]) if (match$1[2]) patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [
			cacheKey,
			match$1[1],
			/* @__PURE__ */ new RegExp(`^${match$1[2]}(?=/${next})`)
		] : [
			label,
			match$1[1],
			/* @__PURE__ */ new RegExp(`^${match$1[2]}$`)
		];
		else patternCache[cacheKey] = [
			label,
			match$1[1],
			true
		];
		return patternCache[cacheKey];
	}
	return null;
};
var tryDecode = (str, decoder) => {
	try {
		return decoder(str);
	} catch {
		return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match$1) => {
			try {
				return decoder(match$1);
			} catch {
				return match$1;
			}
		});
	}
};
var tryDecodeURI = (str) => tryDecode(str, decodeURI);
var getPath = (request) => {
	const url$1 = request.url;
	const start = url$1.indexOf("/", url$1.indexOf(":") + 4);
	let i = start;
	for (; i < url$1.length; i++) {
		const charCode = url$1.charCodeAt(i);
		if (charCode === 37) {
			const queryIndex = url$1.indexOf("?", i);
			const hashIndex = url$1.indexOf("#", i);
			const end = queryIndex === -1 ? hashIndex === -1 ? void 0 : hashIndex : hashIndex === -1 ? queryIndex : Math.min(queryIndex, hashIndex);
			const path$2 = url$1.slice(start, end);
			return tryDecodeURI(path$2.includes("%25") ? path$2.replace(/%25/g, "%2525") : path$2);
		} else if (charCode === 63 || charCode === 35) break;
	}
	return url$1.slice(start, i);
};
var getPathNoStrict = (request) => {
	const result = getPath(request);
	return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
};
var mergePath = (base, sub, ...rest) => {
	if (rest.length) sub = mergePath(sub, ...rest);
	return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
};
var checkOptionalParameter = (path$2) => {
	if (path$2.charCodeAt(path$2.length - 1) !== 63 || !path$2.includes(":")) return null;
	const segments = path$2.split("/");
	const results = [];
	let basePath = "";
	segments.forEach((segment) => {
		if (segment !== "" && !/\:/.test(segment)) basePath += "/" + segment;
		else if (/\:/.test(segment)) if (/\?/.test(segment)) {
			if (results.length === 0 && basePath === "") results.push("/");
			else results.push(basePath);
			const optionalSegment = segment.replace("?", "");
			basePath += "/" + optionalSegment;
			results.push(basePath);
		} else basePath += "/" + segment;
	});
	return results.filter((v, i, a) => a.indexOf(v) === i);
};
var _decodeURI = (value) => {
	if (!/[%+]/.test(value)) return value;
	if (value.indexOf("+") !== -1) value = value.replace(/\+/g, " ");
	return value.indexOf("%") !== -1 ? tryDecode(value, decodeURIComponent_) : value;
};
var _getQueryParam = (url$1, key, multiple) => {
	let encoded;
	if (!multiple && key && !/[%+]/.test(key)) {
		let keyIndex2 = url$1.indexOf("?", 8);
		if (keyIndex2 === -1) return;
		if (!url$1.startsWith(key, keyIndex2 + 1)) keyIndex2 = url$1.indexOf(`&${key}`, keyIndex2 + 1);
		while (keyIndex2 !== -1) {
			const trailingKeyCode = url$1.charCodeAt(keyIndex2 + key.length + 1);
			if (trailingKeyCode === 61) {
				const valueIndex = keyIndex2 + key.length + 2;
				const endIndex = url$1.indexOf("&", valueIndex);
				return _decodeURI(url$1.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
			} else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) return "";
			keyIndex2 = url$1.indexOf(`&${key}`, keyIndex2 + 1);
		}
		encoded = /[%+]/.test(url$1);
		if (!encoded) return;
	}
	const results = {};
	encoded ??= /[%+]/.test(url$1);
	let keyIndex = url$1.indexOf("?", 8);
	while (keyIndex !== -1) {
		const nextKeyIndex = url$1.indexOf("&", keyIndex + 1);
		let valueIndex = url$1.indexOf("=", keyIndex);
		if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) valueIndex = -1;
		let name = url$1.slice(keyIndex + 1, valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex);
		if (encoded) name = _decodeURI(name);
		keyIndex = nextKeyIndex;
		if (name === "") continue;
		let value;
		if (valueIndex === -1) value = "";
		else {
			value = url$1.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
			if (encoded) value = _decodeURI(value);
		}
		if (multiple) {
			if (!(results[name] && Array.isArray(results[name]))) results[name] = [];
			results[name].push(value);
		} else results[name] ??= value;
	}
	return key ? results[key] : results;
};
var getQueryParam = _getQueryParam;
var getQueryParams = (url$1, key) => {
	return _getQueryParam(url$1, key, true);
};
var decodeURIComponent_ = decodeURIComponent;

//#endregion
//#region node_modules/hono/dist/utils/cookie.js
var validCookieNameRegEx = /^[\w!#$%&'*.^`|~+-]+$/;
var validCookieValueRegEx = /^[ !#-:<-[\]-~]*$/;
var trimCookieWhitespace = (value) => {
	let start = 0;
	let end = value.length;
	while (start < end) {
		const charCode = value.charCodeAt(start);
		if (charCode !== 32 && charCode !== 9) break;
		start++;
	}
	while (end > start) {
		const charCode = value.charCodeAt(end - 1);
		if (charCode !== 32 && charCode !== 9) break;
		end--;
	}
	return start === 0 && end === value.length ? value : value.slice(start, end);
};
var parse$5 = (cookie, name) => {
	if (name && cookie.indexOf(name) === -1) return {};
	const pairs$4 = cookie.split(";");
	const parsedCookie = {};
	for (const pairStr of pairs$4) {
		const valueStartPos = pairStr.indexOf("=");
		if (valueStartPos === -1) continue;
		const cookieName = trimCookieWhitespace(pairStr.substring(0, valueStartPos));
		if (name && name !== cookieName || !validCookieNameRegEx.test(cookieName)) continue;
		let cookieValue = trimCookieWhitespace(pairStr.substring(valueStartPos + 1));
		if (cookieValue.startsWith("\"") && cookieValue.endsWith("\"")) cookieValue = cookieValue.slice(1, -1);
		if (validCookieValueRegEx.test(cookieValue)) {
			parsedCookie[cookieName] = cookieValue.indexOf("%") !== -1 ? tryDecode(cookieValue, decodeURIComponent_) : cookieValue;
			if (name) break;
		}
	}
	return parsedCookie;
};

//#endregion
//#region node_modules/hono/dist/helper/cookie/index.js
var getCookie = (c, key, prefix) => {
	const cookie = c.req.raw.headers.get("Cookie");
	if (typeof key === "string") {
		if (!cookie) return;
		let finalKey = key;
		if (prefix === "secure") finalKey = "__Secure-" + key;
		else if (prefix === "host") finalKey = "__Host-" + key;
		return parse$5(cookie, finalKey)[finalKey];
	}
	if (!cookie) return {};
	return parse$5(cookie);
};

//#endregion
//#region node_modules/hono/dist/http-exception.js
var HTTPException = class extends Error {
	res;
	status;
	/**
	* Creates an instance of `HTTPException`.
	* @param status - HTTP status code for the exception. Defaults to 500.
	* @param options - Additional options for the exception.
	*/
	constructor(status = 500, options) {
		super(options?.message, { cause: options?.cause });
		this.res = options?.res;
		this.status = status;
	}
	/**
	* Returns the response object associated with the exception.
	* If a response object is not provided, a new response is created with the error message and status code.
	* @returns The response object.
	*/
	getResponse() {
		if (this.res) return new Response(this.res.body, {
			status: this.status,
			headers: this.res.headers
		});
		return new Response(this.message, { status: this.status });
	}
};

//#endregion
//#region node_modules/hono/dist/utils/buffer.js
var bufferToFormData = (arrayBuffer, contentType) => {
	return new Response(arrayBuffer, { headers: { "Content-Type": contentType } }).formData();
};

//#endregion
//#region node_modules/hono/dist/validator/validator.js
var jsonRegex = /^application\/([a-z-\.]+\+)?json(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/;
var multipartRegex = /^multipart\/form-data(;\s?boundary=[a-zA-Z0-9'"()+_,\-./:=?]+)?$/;
var urlencodedRegex = /^application\/x-www-form-urlencoded(;\s*[a-zA-Z0-9\-]+\=([^;]+))*$/;
var validator = (target, validationFunc) => {
	return async (c, next) => {
		let value = {};
		const contentType = c.req.header("Content-Type");
		switch (target) {
			case "json":
				if (!contentType || !jsonRegex.test(contentType)) break;
				try {
					value = await c.req.json();
				} catch {
					throw new HTTPException(400, { message: "Malformed JSON in request body" });
				}
				break;
			case "form": {
				if (!contentType || !(multipartRegex.test(contentType) || urlencodedRegex.test(contentType))) break;
				let formData;
				if (c.req.bodyCache.formData) formData = await c.req.bodyCache.formData;
				else try {
					formData = await bufferToFormData(await c.req.arrayBuffer(), contentType);
					c.req.bodyCache.formData = formData;
				} catch (e) {
					let message = "Malformed FormData request.";
					message += e instanceof Error ? ` ${e.message}` : ` ${String(e)}`;
					throw new HTTPException(400, { message });
				}
				const form = /* @__PURE__ */ Object.create(null);
				formData.forEach((value2, key) => {
					if (key.endsWith("[]")) (form[key] ??= []).push(value2);
					else if (Array.isArray(form[key])) form[key].push(value2);
					else if (Object.hasOwn(form, key)) form[key] = [form[key], value2];
					else form[key] = value2;
				});
				value = form;
				break;
			}
			case "query":
				value = Object.fromEntries(Object.entries(c.req.queries()).map(([k, v]) => {
					return v.length === 1 ? [k, v[0]] : [k, v];
				}));
				break;
			case "param":
				value = c.req.param();
				break;
			case "header":
				value = c.req.header();
				break;
			case "cookie":
				value = getCookie(c);
				break;
		}
		const res = await validationFunc(value, c);
		if (res instanceof Response) return res;
		c.req.addValidatedData(target, res);
		return await next();
	};
};

//#endregion
//#region node_modules/@hono/zod-validator/dist/index.js
function zValidatorFunction(target, schema$6, hook, options) {
	return validator(target, async (value, c) => {
		let validatorValue = value;
		if (target === "header" && "_def" in schema$6 || target === "header" && "_zod" in schema$6) {
			const schemaKeys = Object.keys("in" in schema$6 ? schema$6.in.shape : schema$6.shape);
			const caseInsensitiveKeymap = Object.fromEntries(schemaKeys.map((key) => [key.toLowerCase(), key]));
			validatorValue = Object.fromEntries(Object.entries(value).map(([key, value$1]) => [caseInsensitiveKeymap[key] || key, value$1]));
		}
		const result = options && options.validationFunction ? await options.validationFunction(schema$6, validatorValue) : await schema$6.safeParseAsync(validatorValue);
		if (hook) {
			const hookResult = await hook({
				data: validatorValue,
				...result,
				target
			}, c);
			if (hookResult) {
				if (hookResult instanceof Response) return hookResult;
				if ("response" in hookResult) return hookResult.response;
			}
		}
		if (!result.success) return c.json(result, 400);
		return result.data;
	});
}
const zValidator = zValidatorFunction;

//#endregion
//#region node_modules/hono/dist/compose.js
var compose = (middleware, onError, onNotFound) => {
	return (context, next) => {
		let index$1 = -1;
		return dispatch(0);
		async function dispatch(i) {
			if (i <= index$1) throw new Error("next() called multiple times");
			index$1 = i;
			let res;
			let isError = false;
			let handler;
			if (middleware[i]) {
				handler = middleware[i][0][0];
				context.req.routeIndex = i;
			} else handler = i === middleware.length && next || void 0;
			if (handler) try {
				res = await handler(context, () => dispatch(i + 1));
			} catch (err) {
				if (err instanceof Error && onError) {
					context.error = err;
					res = await onError(err, context);
					isError = true;
				} else throw err;
			}
			else if (context.finalized === false && onNotFound) res = await onNotFound(context);
			if (res && (context.finalized === false || isError)) context.res = res;
			return context;
		}
	};
};

//#endregion
//#region node_modules/hono/dist/request/constants.js
var GET_MATCH_RESULT = /* @__PURE__ */ Symbol();

//#endregion
//#region node_modules/hono/dist/utils/body.js
var parseBody = async (request, options = /* @__PURE__ */ Object.create(null)) => {
	const { all: all$1 = false, dot = false } = options;
	const contentType = (request instanceof HonoRequest ? request.raw.headers : request.headers).get("Content-Type");
	if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) return parseFormData(request, {
		all: all$1,
		dot
	});
	return {};
};
async function parseFormData(request, options) {
	const formData = await request.formData();
	if (formData) return convertFormDataToBodyData(formData, options);
	return {};
}
function convertFormDataToBodyData(formData, options) {
	const form = /* @__PURE__ */ Object.create(null);
	formData.forEach((value, key) => {
		if (!(options.all || key.endsWith("[]"))) form[key] = value;
		else handleParsingAllValues(form, key, value);
	});
	if (options.dot) Object.entries(form).forEach(([key, value]) => {
		if (key.includes(".")) {
			handleParsingNestedValues(form, key, value);
			delete form[key];
		}
	});
	return form;
}
var handleParsingAllValues = (form, key, value) => {
	if (form[key] !== void 0) if (Array.isArray(form[key])) form[key].push(value);
	else form[key] = [form[key], value];
	else if (!key.endsWith("[]")) form[key] = value;
	else form[key] = [value];
};
var handleParsingNestedValues = (form, key, value) => {
	if (/(?:^|\.)__proto__\./.test(key)) return;
	let nestedForm = form;
	const keys = key.split(".");
	keys.forEach((key2, index$1) => {
		if (index$1 === keys.length - 1) nestedForm[key2] = value;
		else {
			if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) nestedForm[key2] = /* @__PURE__ */ Object.create(null);
			nestedForm = nestedForm[key2];
		}
	});
};

//#endregion
//#region node_modules/hono/dist/request.js
var tryDecodeURIComponent = (str) => tryDecode(str, decodeURIComponent_);
var HonoRequest = class {
	/**
	* `.raw` can get the raw Request object.
	*
	* @see {@link https://hono.dev/docs/api/request#raw}
	*
	* @example
	* ```ts
	* // For Cloudflare Workers
	* app.post('/', async (c) => {
	*   const metadata = c.req.raw.cf?.hostMetadata?
	*   ...
	* })
	* ```
	*/
	raw;
	#validatedData;
	#matchResult;
	routeIndex = 0;
	/**
	* `.path` can get the pathname of the request.
	*
	* @see {@link https://hono.dev/docs/api/request#path}
	*
	* @example
	* ```ts
	* app.get('/about/me', (c) => {
	*   const pathname = c.req.path // `/about/me`
	* })
	* ```
	*/
	path;
	bodyCache = {};
	constructor(request, path$2 = "/", matchResult = [[]]) {
		this.raw = request;
		this.path = path$2;
		this.#matchResult = matchResult;
		this.#validatedData = {};
	}
	param(key) {
		return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
	}
	#getDecodedParam(key) {
		const paramKey = this.#matchResult[0][this.routeIndex][1][key];
		const param = this.#getParamValue(paramKey);
		return param && /\%/.test(param) ? tryDecodeURIComponent(param) : param;
	}
	#getAllDecodedParams() {
		const decoded = {};
		const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
		for (const key of keys) {
			const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
			if (value !== void 0) decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
		}
		return decoded;
	}
	#getParamValue(paramKey) {
		return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
	}
	query(key) {
		return getQueryParam(this.url, key);
	}
	queries(key) {
		return getQueryParams(this.url, key);
	}
	header(name) {
		if (name) return this.raw.headers.get(name) ?? void 0;
		const headerData = {};
		this.raw.headers.forEach((value, key) => {
			headerData[key] = value;
		});
		return headerData;
	}
	async parseBody(options) {
		return parseBody(this, options);
	}
	#cachedBody = (key) => {
		const { bodyCache, raw: raw$1 } = this;
		const cachedBody = bodyCache[key];
		if (cachedBody) return cachedBody;
		const anyCachedKey = Object.keys(bodyCache)[0];
		if (anyCachedKey) return bodyCache[anyCachedKey].then((body) => {
			if (anyCachedKey === "json") body = JSON.stringify(body);
			return new Response(body)[key]();
		});
		return bodyCache[key] = raw$1[key]();
	};
	/**
	* `.json()` can parse Request body of type `application/json`
	*
	* @see {@link https://hono.dev/docs/api/request#json}
	*
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.json()
	* })
	* ```
	*/
	json() {
		return this.#cachedBody("text").then((text) => JSON.parse(text));
	}
	/**
	* `.text()` can parse Request body of type `text/plain`
	*
	* @see {@link https://hono.dev/docs/api/request#text}
	*
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.text()
	* })
	* ```
	*/
	text() {
		return this.#cachedBody("text");
	}
	/**
	* `.arrayBuffer()` parse Request body as an `ArrayBuffer`
	*
	* @see {@link https://hono.dev/docs/api/request#arraybuffer}
	*
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.arrayBuffer()
	* })
	* ```
	*/
	arrayBuffer() {
		return this.#cachedBody("arrayBuffer");
	}
	/**
	* Parses the request body as a `Blob`.
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.blob();
	* });
	* ```
	* @see https://hono.dev/docs/api/request#blob
	*/
	blob() {
		return this.#cachedBody("blob");
	}
	/**
	* Parses the request body as `FormData`.
	* @example
	* ```ts
	* app.post('/entry', async (c) => {
	*   const body = await c.req.formData();
	* });
	* ```
	* @see https://hono.dev/docs/api/request#formdata
	*/
	formData() {
		return this.#cachedBody("formData");
	}
	/**
	* Adds validated data to the request.
	*
	* @param target - The target of the validation.
	* @param data - The validated data to add.
	*/
	addValidatedData(target, data) {
		this.#validatedData[target] = data;
	}
	valid(target) {
		return this.#validatedData[target];
	}
	/**
	* `.url()` can get the request url strings.
	*
	* @see {@link https://hono.dev/docs/api/request#url}
	*
	* @example
	* ```ts
	* app.get('/about/me', (c) => {
	*   const url = c.req.url // `http://localhost:8787/about/me`
	*   ...
	* })
	* ```
	*/
	get url() {
		return this.raw.url;
	}
	/**
	* `.method()` can get the method name of the request.
	*
	* @see {@link https://hono.dev/docs/api/request#method}
	*
	* @example
	* ```ts
	* app.get('/about/me', (c) => {
	*   const method = c.req.method // `GET`
	* })
	* ```
	*/
	get method() {
		return this.raw.method;
	}
	get [GET_MATCH_RESULT]() {
		return this.#matchResult;
	}
	/**
	* `.matchedRoutes()` can return a matched route in the handler
	*
	* @deprecated
	*
	* Use matchedRoutes helper defined in "hono/route" instead.
	*
	* @see {@link https://hono.dev/docs/api/request#matchedroutes}
	*
	* @example
	* ```ts
	* app.use('*', async function logger(c, next) {
	*   await next()
	*   c.req.matchedRoutes.forEach(({ handler, method, path }, i) => {
	*     const name = handler.name || (handler.length < 2 ? '[handler]' : '[middleware]')
	*     console.log(
	*       method,
	*       ' ',
	*       path,
	*       ' '.repeat(Math.max(10 - path.length, 0)),
	*       name,
	*       i === c.req.routeIndex ? '<- respond from here' : ''
	*     )
	*   })
	* })
	* ```
	*/
	get matchedRoutes() {
		return this.#matchResult[0].map(([[, route]]) => route);
	}
	/**
	* `routePath()` can retrieve the path registered within the handler
	*
	* @deprecated
	*
	* Use routePath helper defined in "hono/route" instead.
	*
	* @see {@link https://hono.dev/docs/api/request#routepath}
	*
	* @example
	* ```ts
	* app.get('/posts/:id', (c) => {
	*   return c.json({ path: c.req.routePath })
	* })
	* ```
	*/
	get routePath() {
		return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
	}
};

//#endregion
//#region node_modules/hono/dist/utils/html.js
var HtmlEscapedCallbackPhase = {
	Stringify: 1,
	BeforeStream: 2,
	Stream: 3
};
var raw = (value, callbacks) => {
	const escapedString = new String(value);
	escapedString.isEscaped = true;
	escapedString.callbacks = callbacks;
	return escapedString;
};
var resolveCallback = async (str, phase, preserveCallbacks, context, buffer) => {
	if (typeof str === "object" && !(str instanceof String)) {
		if (!(str instanceof Promise)) str = str.toString();
		if (str instanceof Promise) str = await str;
	}
	const callbacks = str.callbacks;
	if (!callbacks?.length) return Promise.resolve(str);
	if (buffer) buffer[0] += str;
	else buffer = [str];
	const resStr = Promise.all(callbacks.map((c) => c({
		phase,
		buffer,
		context
	}))).then((res) => Promise.all(res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))).then(() => buffer[0]));
	if (preserveCallbacks) return raw(await resStr, callbacks);
	else return resStr;
};

//#endregion
//#region node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setDefaultContentType = (contentType, headers) => {
	return {
		"Content-Type": contentType,
		...headers
	};
};
var createResponseInstance = (body, init) => new Response(body, init);
var Context = class {
	#rawRequest;
	#req;
	/**
	* `.env` can get bindings (environment variables, secrets, KV namespaces, D1 database, R2 bucket etc.) in Cloudflare Workers.
	*
	* @see {@link https://hono.dev/docs/api/context#env}
	*
	* @example
	* ```ts
	* // Environment object for Cloudflare Workers
	* app.get('*', async c => {
	*   const counter = c.env.COUNTER
	* })
	* ```
	*/
	env = {};
	#var;
	finalized = false;
	/**
	* `.error` can get the error object from the middleware if the Handler throws an error.
	*
	* @see {@link https://hono.dev/docs/api/context#error}
	*
	* @example
	* ```ts
	* app.use('*', async (c, next) => {
	*   await next()
	*   if (c.error) {
	*     // do something...
	*   }
	* })
	* ```
	*/
	error;
	#status;
	#executionCtx;
	#res;
	#layout;
	#renderer;
	#notFoundHandler;
	#preparedHeaders;
	#matchResult;
	#path;
	/**
	* Creates an instance of the Context class.
	*
	* @param req - The Request object.
	* @param options - Optional configuration options for the context.
	*/
	constructor(req, options) {
		this.#rawRequest = req;
		if (options) {
			this.#executionCtx = options.executionCtx;
			this.env = options.env;
			this.#notFoundHandler = options.notFoundHandler;
			this.#path = options.path;
			this.#matchResult = options.matchResult;
		}
	}
	/**
	* `.req` is the instance of {@link HonoRequest}.
	*/
	get req() {
		this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
		return this.#req;
	}
	/**
	* @see {@link https://hono.dev/docs/api/context#event}
	* The FetchEvent associated with the current request.
	*
	* @throws Will throw an error if the context does not have a FetchEvent.
	*/
	get event() {
		if (this.#executionCtx && "respondWith" in this.#executionCtx) return this.#executionCtx;
		else throw Error("This context has no FetchEvent");
	}
	/**
	* @see {@link https://hono.dev/docs/api/context#executionctx}
	* The ExecutionContext associated with the current request.
	*
	* @throws Will throw an error if the context does not have an ExecutionContext.
	*/
	get executionCtx() {
		if (this.#executionCtx) return this.#executionCtx;
		else throw Error("This context has no ExecutionContext");
	}
	/**
	* @see {@link https://hono.dev/docs/api/context#res}
	* The Response object for the current request.
	*/
	get res() {
		return this.#res ||= createResponseInstance(null, { headers: this.#preparedHeaders ??= new Headers() });
	}
	/**
	* Sets the Response object for the current request.
	*
	* @param _res - The Response object to set.
	*/
	set res(_res) {
		if (this.#res && _res) {
			_res = createResponseInstance(_res.body, _res);
			for (const [k, v] of this.#res.headers.entries()) {
				if (k === "content-type") continue;
				if (k === "set-cookie") {
					const cookies = this.#res.headers.getSetCookie();
					_res.headers.delete("set-cookie");
					for (const cookie of cookies) _res.headers.append("set-cookie", cookie);
				} else _res.headers.set(k, v);
			}
		}
		this.#res = _res;
		this.finalized = true;
	}
	/**
	* `.render()` can create a response within a layout.
	*
	* @see {@link https://hono.dev/docs/api/context#render-setrenderer}
	*
	* @example
	* ```ts
	* app.get('/', (c) => {
	*   return c.render('Hello!')
	* })
	* ```
	*/
	render = (...args) => {
		this.#renderer ??= (content) => this.html(content);
		return this.#renderer(...args);
	};
	/**
	* Sets the layout for the response.
	*
	* @param layout - The layout to set.
	* @returns The layout function.
	*/
	setLayout = (layout) => this.#layout = layout;
	/**
	* Gets the current layout for the response.
	*
	* @returns The current layout function.
	*/
	getLayout = () => this.#layout;
	/**
	* `.setRenderer()` can set the layout in the custom middleware.
	*
	* @see {@link https://hono.dev/docs/api/context#render-setrenderer}
	*
	* @example
	* ```tsx
	* app.use('*', async (c, next) => {
	*   c.setRenderer((content) => {
	*     return c.html(
	*       <html>
	*         <body>
	*           <p>{content}</p>
	*         </body>
	*       </html>
	*     )
	*   })
	*   await next()
	* })
	* ```
	*/
	setRenderer = (renderer) => {
		this.#renderer = renderer;
	};
	/**
	* `.header()` can set headers.
	*
	* @see {@link https://hono.dev/docs/api/context#header}
	*
	* @example
	* ```ts
	* app.get('/welcome', (c) => {
	*   // Set headers
	*   c.header('X-Message', 'Hello!')
	*   c.header('Content-Type', 'text/plain')
	*
	*   return c.body('Thank you for coming')
	* })
	* ```
	*/
	header = (name, value, options) => {
		if (this.finalized) this.#res = createResponseInstance(this.#res.body, this.#res);
		const headers = this.#res ? this.#res.headers : this.#preparedHeaders ??= new Headers();
		if (value === void 0) headers.delete(name);
		else if (options?.append) headers.append(name, value);
		else headers.set(name, value);
	};
	status = (status) => {
		this.#status = status;
	};
	/**
	* `.set()` can set the value specified by the key.
	*
	* @see {@link https://hono.dev/docs/api/context#set-get}
	*
	* @example
	* ```ts
	* app.use('*', async (c, next) => {
	*   c.set('message', 'Hono is hot!!')
	*   await next()
	* })
	* ```
	*/
	set = (key, value) => {
		this.#var ??= /* @__PURE__ */ new Map();
		this.#var.set(key, value);
	};
	/**
	* `.get()` can use the value specified by the key.
	*
	* @see {@link https://hono.dev/docs/api/context#set-get}
	*
	* @example
	* ```ts
	* app.get('/', (c) => {
	*   const message = c.get('message')
	*   return c.text(`The message is "${message}"`)
	* })
	* ```
	*/
	get = (key) => {
		return this.#var ? this.#var.get(key) : void 0;
	};
	/**
	* `.var` can access the value of a variable.
	*
	* @see {@link https://hono.dev/docs/api/context#var}
	*
	* @example
	* ```ts
	* const result = c.var.client.oneMethod()
	* ```
	*/
	get var() {
		if (!this.#var) return {};
		return Object.fromEntries(this.#var);
	}
	#newResponse(data, arg, headers) {
		const responseHeaders = this.#res ? new Headers(this.#res.headers) : this.#preparedHeaders ?? new Headers();
		if (typeof arg === "object" && "headers" in arg) {
			const argHeaders = arg.headers instanceof Headers ? arg.headers : new Headers(arg.headers);
			for (const [key, value] of argHeaders) if (key.toLowerCase() === "set-cookie") responseHeaders.append(key, value);
			else responseHeaders.set(key, value);
		}
		if (headers) for (const [k, v] of Object.entries(headers)) if (typeof v === "string") responseHeaders.set(k, v);
		else {
			responseHeaders.delete(k);
			for (const v2 of v) responseHeaders.append(k, v2);
		}
		return createResponseInstance(data, {
			status: typeof arg === "number" ? arg : arg?.status ?? this.#status,
			headers: responseHeaders
		});
	}
	newResponse = (...args) => this.#newResponse(...args);
	/**
	* `.body()` can return the HTTP response.
	* You can set headers with `.header()` and set HTTP status code with `.status`.
	* This can also be set in `.text()`, `.json()` and so on.
	*
	* @see {@link https://hono.dev/docs/api/context#body}
	*
	* @example
	* ```ts
	* app.get('/welcome', (c) => {
	*   // Set headers
	*   c.header('X-Message', 'Hello!')
	*   c.header('Content-Type', 'text/plain')
	*   // Set HTTP status code
	*   c.status(201)
	*
	*   // Return the response body
	*   return c.body('Thank you for coming')
	* })
	* ```
	*/
	body = (data, arg, headers) => this.#newResponse(data, arg, headers);
	/**
	* `.text()` can render text as `Content-Type:text/plain`.
	*
	* @see {@link https://hono.dev/docs/api/context#text}
	*
	* @example
	* ```ts
	* app.get('/say', (c) => {
	*   return c.text('Hello!')
	* })
	* ```
	*/
	text = (text, arg, headers) => {
		return !this.#preparedHeaders && !this.#status && !arg && !headers && !this.finalized ? new Response(text) : this.#newResponse(text, arg, setDefaultContentType(TEXT_PLAIN, headers));
	};
	/**
	* `.json()` can render JSON as `Content-Type:application/json`.
	*
	* @see {@link https://hono.dev/docs/api/context#json}
	*
	* @example
	* ```ts
	* app.get('/api', (c) => {
	*   return c.json({ message: 'Hello!' })
	* })
	* ```
	*/
	json = (object$1, arg, headers) => {
		return this.#newResponse(JSON.stringify(object$1), arg, setDefaultContentType("application/json", headers));
	};
	html = (html, arg, headers) => {
		const res = (html2) => this.#newResponse(html2, arg, setDefaultContentType("text/html; charset=UTF-8", headers));
		return typeof html === "object" ? resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then(res) : res(html);
	};
	/**
	* `.redirect()` can Redirect, default status code is 302.
	*
	* @see {@link https://hono.dev/docs/api/context#redirect}
	*
	* @example
	* ```ts
	* app.get('/redirect', (c) => {
	*   return c.redirect('/')
	* })
	* app.get('/redirect-permanently', (c) => {
	*   return c.redirect('/', 301)
	* })
	* ```
	*/
	redirect = (location, status) => {
		const locationString = String(location);
		this.header("Location", !/[^\x00-\xFF]/.test(locationString) ? locationString : encodeURI(locationString));
		return this.newResponse(null, status ?? 302);
	};
	/**
	* `.notFound()` can return the Not Found Response.
	*
	* @see {@link https://hono.dev/docs/api/context#notfound}
	*
	* @example
	* ```ts
	* app.get('/notfound', (c) => {
	*   return c.notFound()
	* })
	* ```
	*/
	notFound = () => {
		this.#notFoundHandler ??= () => createResponseInstance();
		return this.#notFoundHandler(this);
	};
};

//#endregion
//#region node_modules/hono/dist/router.js
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = [
	"get",
	"post",
	"put",
	"delete",
	"options",
	"patch"
];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {};

//#endregion
//#region node_modules/hono/dist/utils/constants.js
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

//#endregion
//#region node_modules/hono/dist/hono-base.js
var notFoundHandler = (c) => {
	return c.text("404 Not Found", 404);
};
var errorHandler = (err, c) => {
	if ("getResponse" in err) {
		const res = err.getResponse();
		return c.newResponse(res.body, res);
	}
	console.error(err);
	return c.text("Internal Server Error", 500);
};
var Hono$1 = class _Hono {
	get;
	post;
	put;
	delete;
	options;
	patch;
	all;
	on;
	use;
	router;
	getPath;
	_basePath = "/";
	#path = "/";
	routes = [];
	constructor(options = {}) {
		[...METHODS, METHOD_NAME_ALL_LOWERCASE].forEach((method) => {
			this[method] = (args1, ...args) => {
				if (typeof args1 === "string") this.#path = args1;
				else this.#addRoute(method, this.#path, args1);
				args.forEach((handler) => {
					this.#addRoute(method, this.#path, handler);
				});
				return this;
			};
		});
		this.on = (method, path$2, ...handlers) => {
			for (const p of [path$2].flat()) {
				this.#path = p;
				for (const m of [method].flat()) handlers.map((handler) => {
					this.#addRoute(m.toUpperCase(), this.#path, handler);
				});
			}
			return this;
		};
		this.use = (arg1, ...handlers) => {
			if (typeof arg1 === "string") this.#path = arg1;
			else {
				this.#path = "*";
				handlers.unshift(arg1);
			}
			handlers.forEach((handler) => {
				this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
			});
			return this;
		};
		const { strict, ...optionsWithoutStrict } = options;
		Object.assign(this, optionsWithoutStrict);
		this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
	}
	#clone() {
		const clone$1 = new _Hono({
			router: this.router,
			getPath: this.getPath
		});
		clone$1.errorHandler = this.errorHandler;
		clone$1.#notFoundHandler = this.#notFoundHandler;
		clone$1.routes = this.routes;
		return clone$1;
	}
	#notFoundHandler = notFoundHandler;
	errorHandler = errorHandler;
	/**
	* `.route()` allows grouping other Hono instance in routes.
	*
	* @see {@link https://hono.dev/docs/api/routing#grouping}
	*
	* @param {string} path - base Path
	* @param {Hono} app - other Hono instance
	* @returns {Hono} routed Hono instance
	*
	* @example
	* ```ts
	* const app = new Hono()
	* const app2 = new Hono()
	*
	* app2.get("/user", (c) => c.text("user"))
	* app.route("/api", app2) // GET /api/user
	* ```
	*/
	route(path$2, app$1) {
		const subApp = this.basePath(path$2);
		app$1.routes.map((r) => {
			let handler;
			if (app$1.errorHandler === errorHandler) handler = r.handler;
			else {
				handler = async (c, next) => (await compose([], app$1.errorHandler)(c, () => r.handler(c, next))).res;
				handler[COMPOSED_HANDLER] = r.handler;
			}
			subApp.#addRoute(r.method, r.path, handler);
		});
		return this;
	}
	/**
	* `.basePath()` allows base paths to be specified.
	*
	* @see {@link https://hono.dev/docs/api/routing#base-path}
	*
	* @param {string} path - base Path
	* @returns {Hono} changed Hono instance
	*
	* @example
	* ```ts
	* const api = new Hono().basePath('/api')
	* ```
	*/
	basePath(path$2) {
		const subApp = this.#clone();
		subApp._basePath = mergePath(this._basePath, path$2);
		return subApp;
	}
	/**
	* `.onError()` handles an error and returns a customized Response.
	*
	* @see {@link https://hono.dev/docs/api/hono#error-handling}
	*
	* @param {ErrorHandler} handler - request Handler for error
	* @returns {Hono} changed Hono instance
	*
	* @example
	* ```ts
	* app.onError((err, c) => {
	*   console.error(`${err}`)
	*   return c.text('Custom Error Message', 500)
	* })
	* ```
	*/
	onError = (handler) => {
		this.errorHandler = handler;
		return this;
	};
	/**
	* `.notFound()` allows you to customize a Not Found Response.
	*
	* @see {@link https://hono.dev/docs/api/hono#not-found}
	*
	* @param {NotFoundHandler} handler - request handler for not-found
	* @returns {Hono} changed Hono instance
	*
	* @example
	* ```ts
	* app.notFound((c) => {
	*   return c.text('Custom 404 Message', 404)
	* })
	* ```
	*/
	notFound = (handler) => {
		this.#notFoundHandler = handler;
		return this;
	};
	/**
	* `.mount()` allows you to mount applications built with other frameworks into your Hono application.
	*
	* @see {@link https://hono.dev/docs/api/hono#mount}
	*
	* @param {string} path - base Path
	* @param {Function} applicationHandler - other Request Handler
	* @param {MountOptions} [options] - options of `.mount()`
	* @returns {Hono} mounted Hono instance
	*
	* @example
	* ```ts
	* import { Router as IttyRouter } from 'itty-router'
	* import { Hono } from 'hono'
	* // Create itty-router application
	* const ittyRouter = IttyRouter()
	* // GET /itty-router/hello
	* ittyRouter.get('/hello', () => new Response('Hello from itty-router'))
	*
	* const app = new Hono()
	* app.mount('/itty-router', ittyRouter.handle)
	* ```
	*
	* @example
	* ```ts
	* const app = new Hono()
	* // Send the request to another application without modification.
	* app.mount('/app', anotherApp, {
	*   replaceRequest: (req) => req,
	* })
	* ```
	*/
	mount(path$2, applicationHandler, options) {
		let replaceRequest;
		let optionHandler;
		if (options) if (typeof options === "function") optionHandler = options;
		else {
			optionHandler = options.optionHandler;
			if (options.replaceRequest === false) replaceRequest = (request) => request;
			else replaceRequest = options.replaceRequest;
		}
		const getOptions = optionHandler ? (c) => {
			const options2 = optionHandler(c);
			return Array.isArray(options2) ? options2 : [options2];
		} : (c) => {
			let executionContext = void 0;
			try {
				executionContext = c.executionCtx;
			} catch {}
			return [c.env, executionContext];
		};
		replaceRequest ||= (() => {
			const mergedPath = mergePath(this._basePath, path$2);
			const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
			return (request) => {
				const url$1 = new URL(request.url);
				url$1.pathname = url$1.pathname.slice(pathPrefixLength) || "/";
				return new Request(url$1, request);
			};
		})();
		const handler = async (c, next) => {
			const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
			if (res) return res;
			await next();
		};
		this.#addRoute(METHOD_NAME_ALL, mergePath(path$2, "*"), handler);
		return this;
	}
	#addRoute(method, path$2, handler) {
		method = method.toUpperCase();
		path$2 = mergePath(this._basePath, path$2);
		const r = {
			basePath: this._basePath,
			path: path$2,
			method,
			handler
		};
		this.router.add(method, path$2, [handler, r]);
		this.routes.push(r);
	}
	#handleError(err, c) {
		if (err instanceof Error) return this.errorHandler(err, c);
		throw err;
	}
	#dispatch(request, executionCtx, env, method) {
		if (method === "HEAD") return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
		const path$2 = this.getPath(request, { env });
		const matchResult = this.router.match(method, path$2);
		const c = new Context(request, {
			path: path$2,
			matchResult,
			env,
			executionCtx,
			notFoundHandler: this.#notFoundHandler
		});
		if (matchResult[0].length === 1) {
			let res;
			try {
				res = matchResult[0][0][0][0](c, async () => {
					c.res = await this.#notFoundHandler(c);
				});
			} catch (err) {
				return this.#handleError(err, c);
			}
			return res instanceof Promise ? res.then((resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
		}
		const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
		return (async () => {
			try {
				const context = await composed(c);
				if (!context.finalized) throw new Error("Context is not finalized. Did you forget to return a Response object or `await next()`?");
				return context.res;
			} catch (err) {
				return this.#handleError(err, c);
			}
		})();
	}
	/**
	* `.fetch()` will be entry point of your app.
	*
	* @see {@link https://hono.dev/docs/api/hono#fetch}
	*
	* @param {Request} request - request Object of request
	* @param {Env} Env - env Object
	* @param {ExecutionContext} - context of execution
	* @returns {Response | Promise<Response>} response of request
	*
	*/
	fetch = (request, ...rest) => {
		return this.#dispatch(request, rest[1], rest[0], request.method);
	};
	/**
	* `.request()` is a useful method for testing.
	* You can pass a URL or pathname to send a GET request.
	* app will return a Response object.
	* ```ts
	* test('GET /hello is ok', async () => {
	*   const res = await app.request('/hello')
	*   expect(res.status).toBe(200)
	* })
	* ```
	* @see https://hono.dev/docs/api/hono#request
	*/
	request = (input, requestInit, Env, executionCtx) => {
		if (input instanceof Request) return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
		input = input.toString();
		return this.fetch(new Request(/^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`, requestInit), Env, executionCtx);
	};
	/**
	* `.fire()` automatically adds a global fetch event listener.
	* This can be useful for environments that adhere to the Service Worker API, such as non-ES module Cloudflare Workers.
	* @deprecated
	* Use `fire` from `hono/service-worker` instead.
	* ```ts
	* import { Hono } from 'hono'
	* import { fire } from 'hono/service-worker'
	*
	* const app = new Hono()
	* // ...
	* fire(app)
	* ```
	* @see https://hono.dev/docs/api/hono#fire
	* @see https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
	* @see https://developers.cloudflare.com/workers/reference/migrate-to-module-workers/
	*/
	fire = () => {
		addEventListener("fetch", (event) => {
			event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
		});
	};
};

//#endregion
//#region node_modules/hono/dist/router/reg-exp-router/matcher.js
var emptyParam = [];
function match(method, path$2) {
	const matchers = this.buildAllMatchers();
	const match2 = ((method2, path2) => {
		const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
		const staticMatch = matcher[2][path2];
		if (staticMatch) return staticMatch;
		const match3 = path2.match(matcher[0]);
		if (!match3) return [[], emptyParam];
		const index$1 = match3.indexOf("", 1);
		return [matcher[1][index$1], match3];
	});
	this.match = match2;
	return match2(method, path$2);
}

//#endregion
//#region node_modules/hono/dist/router/reg-exp-router/node.js
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = /* @__PURE__ */ Symbol();
var regExpMetaChars = /* @__PURE__ */ new Set(".\\+*[^]$()");
function compareKey(a, b) {
	if (a.length === 1) return b.length === 1 ? a < b ? -1 : 1 : -1;
	if (b.length === 1) return 1;
	if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) return 1;
	else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) return -1;
	if (a === LABEL_REG_EXP_STR) return 1;
	else if (b === LABEL_REG_EXP_STR) return -1;
	return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
var Node$4 = class _Node {
	#index;
	#varIndex;
	#children = /* @__PURE__ */ Object.create(null);
	insert(tokens, index$1, paramMap, context, pathErrorCheckOnly) {
		if (tokens.length === 0) {
			if (this.#index !== void 0) throw PATH_ERROR;
			if (pathErrorCheckOnly) return;
			this.#index = index$1;
			return;
		}
		const [token, ...restTokens] = tokens;
		const pattern = token === "*" ? restTokens.length === 0 ? [
			"",
			"",
			ONLY_WILDCARD_REG_EXP_STR
		] : [
			"",
			"",
			LABEL_REG_EXP_STR
		] : token === "/*" ? [
			"",
			"",
			TAIL_WILDCARD_REG_EXP_STR
		] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
		let node;
		if (pattern) {
			const name = pattern[1];
			let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
			if (name && pattern[2]) {
				if (regexpStr === ".*") throw PATH_ERROR;
				regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
				if (/\((?!\?:)/.test(regexpStr)) throw PATH_ERROR;
			}
			node = this.#children[regexpStr];
			if (!node) {
				if (Object.keys(this.#children).some((k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) throw PATH_ERROR;
				if (pathErrorCheckOnly) return;
				node = this.#children[regexpStr] = new _Node();
				if (name !== "") node.#varIndex = context.varIndex++;
			}
			if (!pathErrorCheckOnly && name !== "") paramMap.push([name, node.#varIndex]);
		} else {
			node = this.#children[token];
			if (!node) {
				if (Object.keys(this.#children).some((k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR)) throw PATH_ERROR;
				if (pathErrorCheckOnly) return;
				node = this.#children[token] = new _Node();
			}
		}
		node.insert(restTokens, index$1, paramMap, context, pathErrorCheckOnly);
	}
	buildRegExpStr() {
		const strList = Object.keys(this.#children).sort(compareKey).map((k) => {
			const c = this.#children[k];
			return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
		});
		if (typeof this.#index === "number") strList.unshift(`#${this.#index}`);
		if (strList.length === 0) return "";
		if (strList.length === 1) return strList[0];
		return "(?:" + strList.join("|") + ")";
	}
};

//#endregion
//#region node_modules/hono/dist/router/reg-exp-router/trie.js
var Trie = class {
	#context = { varIndex: 0 };
	#root = new Node$4();
	insert(path$2, index$1, pathErrorCheckOnly) {
		const paramAssoc = [];
		const groups = [];
		for (let i = 0;;) {
			let replaced = false;
			path$2 = path$2.replace(/\{[^}]+\}/g, (m) => {
				const mark = `@\\${i}`;
				groups[i] = [mark, m];
				i++;
				replaced = true;
				return mark;
			});
			if (!replaced) break;
		}
		const tokens = path$2.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
		for (let i = groups.length - 1; i >= 0; i--) {
			const [mark] = groups[i];
			for (let j = tokens.length - 1; j >= 0; j--) if (tokens[j].indexOf(mark) !== -1) {
				tokens[j] = tokens[j].replace(mark, groups[i][1]);
				break;
			}
		}
		this.#root.insert(tokens, index$1, paramAssoc, this.#context, pathErrorCheckOnly);
		return paramAssoc;
	}
	buildRegExp() {
		let regexp = this.#root.buildRegExpStr();
		if (regexp === "") return [
			/^$/,
			[],
			[]
		];
		let captureIndex = 0;
		const indexReplacementMap = [];
		const paramReplacementMap = [];
		regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
			if (handlerIndex !== void 0) {
				indexReplacementMap[++captureIndex] = Number(handlerIndex);
				return "$()";
			}
			if (paramIndex !== void 0) {
				paramReplacementMap[Number(paramIndex)] = ++captureIndex;
				return "";
			}
			return "";
		});
		return [
			/* @__PURE__ */ new RegExp(`^${regexp}`),
			indexReplacementMap,
			paramReplacementMap
		];
	}
};

//#endregion
//#region node_modules/hono/dist/router/reg-exp-router/router.js
var nullMatcher = [
	/^$/,
	[],
	/* @__PURE__ */ Object.create(null)
];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path$2) {
	return wildcardRegExpCache[path$2] ??= /* @__PURE__ */ new RegExp(path$2 === "*" ? "" : `^${path$2.replace(/\/\*$|([.\\+*[^\]$()])/g, (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)")}$`);
}
function clearWildcardRegExpCache() {
	wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
function buildMatcherFromPreprocessedRoutes(routes) {
	const trie = new Trie();
	const handlerData = [];
	if (routes.length === 0) return nullMatcher;
	const routesWithStaticPathFlag = routes.map((route) => [!/\*|\/:/.test(route[0]), ...route]).sort(([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length);
	const staticMap = /* @__PURE__ */ Object.create(null);
	for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
		const [pathErrorCheckOnly, path$2, handlers] = routesWithStaticPathFlag[i];
		if (pathErrorCheckOnly) staticMap[path$2] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
		else j++;
		let paramAssoc;
		try {
			paramAssoc = trie.insert(path$2, j, pathErrorCheckOnly);
		} catch (e) {
			throw e === PATH_ERROR ? new UnsupportedPathError(path$2) : e;
		}
		if (pathErrorCheckOnly) continue;
		handlerData[j] = handlers.map(([h, paramCount]) => {
			const paramIndexMap = /* @__PURE__ */ Object.create(null);
			paramCount -= 1;
			for (; paramCount >= 0; paramCount--) {
				const [key, value] = paramAssoc[paramCount];
				paramIndexMap[key] = value;
			}
			return [h, paramIndexMap];
		});
	}
	const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
	for (let i = 0, len = handlerData.length; i < len; i++) for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
		const map$7 = handlerData[i][j]?.[1];
		if (!map$7) continue;
		const keys = Object.keys(map$7);
		for (let k = 0, len3 = keys.length; k < len3; k++) map$7[keys[k]] = paramReplacementMap[map$7[keys[k]]];
	}
	const handlerMap = [];
	for (const i in indexReplacementMap) handlerMap[i] = handlerData[indexReplacementMap[i]];
	return [
		regexp,
		handlerMap,
		staticMap
	];
}
function findMiddleware(middleware, path$2) {
	if (!middleware) return;
	for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) if (buildWildcardRegExp(k).test(path$2)) return [...middleware[k]];
}
var RegExpRouter = class {
	name = "RegExpRouter";
	#middleware;
	#routes;
	constructor() {
		this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
		this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
	}
	add(method, path$2, handler) {
		const middleware = this.#middleware;
		const routes = this.#routes;
		if (!middleware || !routes) throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
		if (!middleware[method]) [middleware, routes].forEach((handlerMap) => {
			handlerMap[method] = /* @__PURE__ */ Object.create(null);
			Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
				handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
			});
		});
		if (path$2 === "/*") path$2 = "*";
		const paramCount = (path$2.match(/\/:/g) || []).length;
		if (/\*$/.test(path$2)) {
			const re = buildWildcardRegExp(path$2);
			if (method === METHOD_NAME_ALL) Object.keys(middleware).forEach((m) => {
				middleware[m][path$2] ||= findMiddleware(middleware[m], path$2) || findMiddleware(middleware[METHOD_NAME_ALL], path$2) || [];
			});
			else middleware[method][path$2] ||= findMiddleware(middleware[method], path$2) || findMiddleware(middleware[METHOD_NAME_ALL], path$2) || [];
			Object.keys(middleware).forEach((m) => {
				if (method === METHOD_NAME_ALL || method === m) Object.keys(middleware[m]).forEach((p) => {
					re.test(p) && middleware[m][p].push([handler, paramCount]);
				});
			});
			Object.keys(routes).forEach((m) => {
				if (method === METHOD_NAME_ALL || method === m) Object.keys(routes[m]).forEach((p) => re.test(p) && routes[m][p].push([handler, paramCount]));
			});
			return;
		}
		const paths = checkOptionalParameter(path$2) || [path$2];
		for (let i = 0, len = paths.length; i < len; i++) {
			const path2 = paths[i];
			Object.keys(routes).forEach((m) => {
				if (method === METHOD_NAME_ALL || method === m) {
					routes[m][path2] ||= [...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []];
					routes[m][path2].push([handler, paramCount - len + i + 1]);
				}
			});
		}
	}
	match = match;
	buildAllMatchers() {
		const matchers = /* @__PURE__ */ Object.create(null);
		Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
			matchers[method] ||= this.#buildMatcher(method);
		});
		this.#middleware = this.#routes = void 0;
		clearWildcardRegExpCache();
		return matchers;
	}
	#buildMatcher(method) {
		const routes = [];
		let hasOwnRoute = method === METHOD_NAME_ALL;
		[this.#middleware, this.#routes].forEach((r) => {
			const ownRoute = r[method] ? Object.keys(r[method]).map((path$2) => [path$2, r[method][path$2]]) : [];
			if (ownRoute.length !== 0) {
				hasOwnRoute ||= true;
				routes.push(...ownRoute);
			} else if (method !== METHOD_NAME_ALL) routes.push(...Object.keys(r[METHOD_NAME_ALL]).map((path$2) => [path$2, r[METHOD_NAME_ALL][path$2]]));
		});
		if (!hasOwnRoute) return null;
		else return buildMatcherFromPreprocessedRoutes(routes);
	}
};

//#endregion
//#region node_modules/hono/dist/router/smart-router/router.js
var SmartRouter = class {
	name = "SmartRouter";
	#routers = [];
	#routes = [];
	constructor(init) {
		this.#routers = init.routers;
	}
	add(method, path$2, handler) {
		if (!this.#routes) throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
		this.#routes.push([
			method,
			path$2,
			handler
		]);
	}
	match(method, path$2) {
		if (!this.#routes) throw new Error("Fatal error");
		const routers = this.#routers;
		const routes = this.#routes;
		const len = routers.length;
		let i = 0;
		let res;
		for (; i < len; i++) {
			const router = routers[i];
			try {
				for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) router.add(...routes[i2]);
				res = router.match(method, path$2);
			} catch (e) {
				if (e instanceof UnsupportedPathError) continue;
				throw e;
			}
			this.match = router.match.bind(router);
			this.#routers = [router];
			this.#routes = void 0;
			break;
		}
		if (i === len) throw new Error("Fatal error");
		this.name = `SmartRouter + ${this.activeRouter.name}`;
		return res;
	}
	get activeRouter() {
		if (this.#routes || this.#routers.length !== 1) throw new Error("No active router has been determined yet.");
		return this.#routers[0];
	}
};

//#endregion
//#region node_modules/hono/dist/router/trie-router/node.js
var emptyParams = /* @__PURE__ */ Object.create(null);
var hasChildren = (children) => {
	for (const _ in children) return true;
	return false;
};
var Node$3 = class _Node {
	#methods;
	#children;
	#patterns;
	#order = 0;
	#params = emptyParams;
	constructor(method, handler, children) {
		this.#children = children || /* @__PURE__ */ Object.create(null);
		this.#methods = [];
		if (method && handler) {
			const m = /* @__PURE__ */ Object.create(null);
			m[method] = {
				handler,
				possibleKeys: [],
				score: 0
			};
			this.#methods = [m];
		}
		this.#patterns = [];
	}
	insert(method, path$2, handler) {
		this.#order = ++this.#order;
		let curNode = this;
		const parts = splitRoutingPath(path$2);
		const possibleKeys = [];
		for (let i = 0, len = parts.length; i < len; i++) {
			const p = parts[i];
			const nextP = parts[i + 1];
			const pattern = getPattern(p, nextP);
			const key = Array.isArray(pattern) ? pattern[0] : p;
			if (key in curNode.#children) {
				curNode = curNode.#children[key];
				if (pattern) possibleKeys.push(pattern[1]);
				continue;
			}
			curNode.#children[key] = new _Node();
			if (pattern) {
				curNode.#patterns.push(pattern);
				possibleKeys.push(pattern[1]);
			}
			curNode = curNode.#children[key];
		}
		curNode.#methods.push({ [method]: {
			handler,
			possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
			score: this.#order
		} });
		return curNode;
	}
	#pushHandlerSets(handlerSets, node, method, nodeParams, params) {
		for (let i = 0, len = node.#methods.length; i < len; i++) {
			const m = node.#methods[i];
			const handlerSet = m[method] || m[METHOD_NAME_ALL];
			const processedSet = {};
			if (handlerSet !== void 0) {
				handlerSet.params = /* @__PURE__ */ Object.create(null);
				handlerSets.push(handlerSet);
				if (nodeParams !== emptyParams || params && params !== emptyParams) for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
					const key = handlerSet.possibleKeys[i2];
					const processed = processedSet[handlerSet.score];
					handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
					processedSet[handlerSet.score] = true;
				}
			}
		}
	}
	search(method, path$2) {
		const handlerSets = [];
		this.#params = emptyParams;
		let curNodes = [this];
		const parts = splitPath(path$2);
		const curNodesQueue = [];
		const len = parts.length;
		let partOffsets = null;
		for (let i = 0; i < len; i++) {
			const part = parts[i];
			const isLast = i === len - 1;
			const tempNodes = [];
			for (let j = 0, len2 = curNodes.length; j < len2; j++) {
				const node = curNodes[j];
				const nextNode = node.#children[part];
				if (nextNode) {
					nextNode.#params = node.#params;
					if (isLast) {
						if (nextNode.#children["*"]) this.#pushHandlerSets(handlerSets, nextNode.#children["*"], method, node.#params);
						this.#pushHandlerSets(handlerSets, nextNode, method, node.#params);
					} else tempNodes.push(nextNode);
				}
				for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
					const pattern = node.#patterns[k];
					const params = node.#params === emptyParams ? {} : { ...node.#params };
					if (pattern === "*") {
						const astNode = node.#children["*"];
						if (astNode) {
							this.#pushHandlerSets(handlerSets, astNode, method, node.#params);
							astNode.#params = params;
							tempNodes.push(astNode);
						}
						continue;
					}
					const [key, name, matcher] = pattern;
					if (!part && !(matcher instanceof RegExp)) continue;
					const child = node.#children[key];
					if (matcher instanceof RegExp) {
						if (partOffsets === null) {
							partOffsets = new Array(len);
							let offset = path$2[0] === "/" ? 1 : 0;
							for (let p = 0; p < len; p++) {
								partOffsets[p] = offset;
								offset += parts[p].length + 1;
							}
						}
						const restPathString = path$2.substring(partOffsets[i]);
						const m = matcher.exec(restPathString);
						if (m) {
							params[name] = m[0];
							this.#pushHandlerSets(handlerSets, child, method, node.#params, params);
							if (hasChildren(child.#children)) {
								child.#params = params;
								const componentCount = m[0].match(/\//)?.length ?? 0;
								(curNodesQueue[componentCount] ||= []).push(child);
							}
							continue;
						}
					}
					if (matcher === true || matcher.test(part)) {
						params[name] = part;
						if (isLast) {
							this.#pushHandlerSets(handlerSets, child, method, params, node.#params);
							if (child.#children["*"]) this.#pushHandlerSets(handlerSets, child.#children["*"], method, params, node.#params);
						} else {
							child.#params = params;
							tempNodes.push(child);
						}
					}
				}
			}
			const shifted = curNodesQueue.shift();
			curNodes = shifted ? tempNodes.concat(shifted) : tempNodes;
		}
		if (handlerSets.length > 1) handlerSets.sort((a, b) => {
			return a.score - b.score;
		});
		return [handlerSets.map(({ handler, params }) => [handler, params])];
	}
};

//#endregion
//#region node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
	name = "TrieRouter";
	#node;
	constructor() {
		this.#node = new Node$3();
	}
	add(method, path$2, handler) {
		const results = checkOptionalParameter(path$2);
		if (results) {
			for (let i = 0, len = results.length; i < len; i++) this.#node.insert(method, results[i], handler);
			return;
		}
		this.#node.insert(method, path$2, handler);
	}
	match(method, path$2) {
		return this.#node.search(method, path$2);
	}
};

//#endregion
//#region node_modules/hono/dist/hono.js
var Hono = class extends Hono$1 {
	/**
	* Creates an instance of the Hono class.
	*
	* @param options - Optional configuration options for the Hono instance.
	*/
	constructor(options = {}) {
		super(options);
		this.router = options.router ?? new SmartRouter({ routers: [new RegExpRouter(), new TrieRouter()] });
	}
};

//#endregion
//#region node_modules/zod/v3/helpers/util.js
var util;
(function(util$1) {
	util$1.assertEqual = (_) => {};
	function assertIs(_arg) {}
	util$1.assertIs = assertIs;
	function assertNever(_x) {
		throw new Error();
	}
	util$1.assertNever = assertNever;
	util$1.arrayToEnum = (items) => {
		const obj = {};
		for (const item of items) obj[item] = item;
		return obj;
	};
	util$1.getValidEnumValues = (obj) => {
		const validKeys = util$1.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
		const filtered = {};
		for (const k of validKeys) filtered[k] = obj[k];
		return util$1.objectValues(filtered);
	};
	util$1.objectValues = (obj) => {
		return util$1.objectKeys(obj).map(function(e) {
			return obj[e];
		});
	};
	util$1.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object$1) => {
		const keys = [];
		for (const key in object$1) if (Object.prototype.hasOwnProperty.call(object$1, key)) keys.push(key);
		return keys;
	};
	util$1.find = (arr, checker) => {
		for (const item of arr) if (checker(item)) return item;
	};
	util$1.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
	function joinValues(array$1, separator = " | ") {
		return array$1.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
	}
	util$1.joinValues = joinValues;
	util$1.jsonStringifyReplacer = (_, value) => {
		if (typeof value === "bigint") return value.toString();
		return value;
	};
})(util || (util = {}));
var objectUtil;
(function(objectUtil$1) {
	objectUtil$1.mergeShapes = (first, second) => {
		return {
			...first,
			...second
		};
	};
})(objectUtil || (objectUtil = {}));
const ZodParsedType = util.arrayToEnum([
	"string",
	"nan",
	"number",
	"integer",
	"float",
	"boolean",
	"date",
	"bigint",
	"symbol",
	"function",
	"undefined",
	"null",
	"array",
	"object",
	"unknown",
	"promise",
	"void",
	"never",
	"map",
	"set"
]);
const getParsedType = (data) => {
	switch (typeof data) {
		case "undefined": return ZodParsedType.undefined;
		case "string": return ZodParsedType.string;
		case "number": return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
		case "boolean": return ZodParsedType.boolean;
		case "function": return ZodParsedType.function;
		case "bigint": return ZodParsedType.bigint;
		case "symbol": return ZodParsedType.symbol;
		case "object":
			if (Array.isArray(data)) return ZodParsedType.array;
			if (data === null) return ZodParsedType.null;
			if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") return ZodParsedType.promise;
			if (typeof Map !== "undefined" && data instanceof Map) return ZodParsedType.map;
			if (typeof Set !== "undefined" && data instanceof Set) return ZodParsedType.set;
			if (typeof Date !== "undefined" && data instanceof Date) return ZodParsedType.date;
			return ZodParsedType.object;
		default: return ZodParsedType.unknown;
	}
};

//#endregion
//#region node_modules/zod/v3/ZodError.js
const ZodIssueCode = util.arrayToEnum([
	"invalid_type",
	"invalid_literal",
	"custom",
	"invalid_union",
	"invalid_union_discriminator",
	"invalid_enum_value",
	"unrecognized_keys",
	"invalid_arguments",
	"invalid_return_type",
	"invalid_date",
	"invalid_string",
	"too_small",
	"too_big",
	"invalid_intersection_types",
	"not_multiple_of",
	"not_finite"
]);
const quotelessJson = (obj) => {
	return JSON.stringify(obj, null, 2).replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class ZodError extends Error {
	get errors() {
		return this.issues;
	}
	constructor(issues) {
		super();
		this.issues = [];
		this.addIssue = (sub) => {
			this.issues = [...this.issues, sub];
		};
		this.addIssues = (subs = []) => {
			this.issues = [...this.issues, ...subs];
		};
		const actualProto = new.target.prototype;
		if (Object.setPrototypeOf) Object.setPrototypeOf(this, actualProto);
		else this.__proto__ = actualProto;
		this.name = "ZodError";
		this.issues = issues;
	}
	format(_mapper) {
		const mapper = _mapper || function(issue$1) {
			return issue$1.message;
		};
		const fieldErrors = { _errors: [] };
		const processError = (error) => {
			for (const issue$1 of error.issues) if (issue$1.code === "invalid_union") issue$1.unionErrors.map(processError);
			else if (issue$1.code === "invalid_return_type") processError(issue$1.returnTypeError);
			else if (issue$1.code === "invalid_arguments") processError(issue$1.argumentsError);
			else if (issue$1.path.length === 0) fieldErrors._errors.push(mapper(issue$1));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < issue$1.path.length) {
					const el = issue$1.path[i];
					if (!(i === issue$1.path.length - 1)) curr[el] = curr[el] || { _errors: [] };
					else {
						curr[el] = curr[el] || { _errors: [] };
						curr[el]._errors.push(mapper(issue$1));
					}
					curr = curr[el];
					i++;
				}
			}
		};
		processError(this);
		return fieldErrors;
	}
	static assert(value) {
		if (!(value instanceof ZodError)) throw new Error(`Not a ZodError: ${value}`);
	}
	toString() {
		return this.message;
	}
	get message() {
		return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
	}
	get isEmpty() {
		return this.issues.length === 0;
	}
	flatten(mapper = (issue$1) => issue$1.message) {
		const fieldErrors = {};
		const formErrors = [];
		for (const sub of this.issues) if (sub.path.length > 0) {
			const firstEl = sub.path[0];
			fieldErrors[firstEl] = fieldErrors[firstEl] || [];
			fieldErrors[firstEl].push(mapper(sub));
		} else formErrors.push(mapper(sub));
		return {
			formErrors,
			fieldErrors
		};
	}
	get formErrors() {
		return this.flatten();
	}
};
ZodError.create = (issues) => {
	return new ZodError(issues);
};

//#endregion
//#region node_modules/zod/v3/locales/en.js
const errorMap = (issue$1, _ctx) => {
	let message;
	switch (issue$1.code) {
		case ZodIssueCode.invalid_type:
			if (issue$1.received === ZodParsedType.undefined) message = "Required";
			else message = `Expected ${issue$1.expected}, received ${issue$1.received}`;
			break;
		case ZodIssueCode.invalid_literal:
			message = `Invalid literal value, expected ${JSON.stringify(issue$1.expected, util.jsonStringifyReplacer)}`;
			break;
		case ZodIssueCode.unrecognized_keys:
			message = `Unrecognized key(s) in object: ${util.joinValues(issue$1.keys, ", ")}`;
			break;
		case ZodIssueCode.invalid_union:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_union_discriminator:
			message = `Invalid discriminator value. Expected ${util.joinValues(issue$1.options)}`;
			break;
		case ZodIssueCode.invalid_enum_value:
			message = `Invalid enum value. Expected ${util.joinValues(issue$1.options)}, received '${issue$1.received}'`;
			break;
		case ZodIssueCode.invalid_arguments:
			message = `Invalid function arguments`;
			break;
		case ZodIssueCode.invalid_return_type:
			message = `Invalid function return type`;
			break;
		case ZodIssueCode.invalid_date:
			message = `Invalid date`;
			break;
		case ZodIssueCode.invalid_string:
			if (typeof issue$1.validation === "object") if ("includes" in issue$1.validation) {
				message = `Invalid input: must include "${issue$1.validation.includes}"`;
				if (typeof issue$1.validation.position === "number") message = `${message} at one or more positions greater than or equal to ${issue$1.validation.position}`;
			} else if ("startsWith" in issue$1.validation) message = `Invalid input: must start with "${issue$1.validation.startsWith}"`;
			else if ("endsWith" in issue$1.validation) message = `Invalid input: must end with "${issue$1.validation.endsWith}"`;
			else util.assertNever(issue$1.validation);
			else if (issue$1.validation !== "regex") message = `Invalid ${issue$1.validation}`;
			else message = "Invalid";
			break;
		case ZodIssueCode.too_small:
			if (issue$1.type === "array") message = `Array must contain ${issue$1.exact ? "exactly" : issue$1.inclusive ? `at least` : `more than`} ${issue$1.minimum} element(s)`;
			else if (issue$1.type === "string") message = `String must contain ${issue$1.exact ? "exactly" : issue$1.inclusive ? `at least` : `over`} ${issue$1.minimum} character(s)`;
			else if (issue$1.type === "number") message = `Number must be ${issue$1.exact ? `exactly equal to ` : issue$1.inclusive ? `greater than or equal to ` : `greater than `}${issue$1.minimum}`;
			else if (issue$1.type === "bigint") message = `Number must be ${issue$1.exact ? `exactly equal to ` : issue$1.inclusive ? `greater than or equal to ` : `greater than `}${issue$1.minimum}`;
			else if (issue$1.type === "date") message = `Date must be ${issue$1.exact ? `exactly equal to ` : issue$1.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue$1.minimum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.too_big:
			if (issue$1.type === "array") message = `Array must contain ${issue$1.exact ? `exactly` : issue$1.inclusive ? `at most` : `less than`} ${issue$1.maximum} element(s)`;
			else if (issue$1.type === "string") message = `String must contain ${issue$1.exact ? `exactly` : issue$1.inclusive ? `at most` : `under`} ${issue$1.maximum} character(s)`;
			else if (issue$1.type === "number") message = `Number must be ${issue$1.exact ? `exactly` : issue$1.inclusive ? `less than or equal to` : `less than`} ${issue$1.maximum}`;
			else if (issue$1.type === "bigint") message = `BigInt must be ${issue$1.exact ? `exactly` : issue$1.inclusive ? `less than or equal to` : `less than`} ${issue$1.maximum}`;
			else if (issue$1.type === "date") message = `Date must be ${issue$1.exact ? `exactly` : issue$1.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue$1.maximum))}`;
			else message = "Invalid input";
			break;
		case ZodIssueCode.custom:
			message = `Invalid input`;
			break;
		case ZodIssueCode.invalid_intersection_types:
			message = `Intersection results could not be merged`;
			break;
		case ZodIssueCode.not_multiple_of:
			message = `Number must be a multiple of ${issue$1.multipleOf}`;
			break;
		case ZodIssueCode.not_finite:
			message = "Number must be finite";
			break;
		default:
			message = _ctx.defaultError;
			util.assertNever(issue$1);
	}
	return { message };
};
var en_default = errorMap;

//#endregion
//#region node_modules/zod/v3/errors.js
let overrideErrorMap = en_default;
function setErrorMap(map$7) {
	overrideErrorMap = map$7;
}
function getErrorMap() {
	return overrideErrorMap;
}

//#endregion
//#region node_modules/zod/v3/helpers/parseUtil.js
const makeIssue = (params) => {
	const { data, path: path$2, errorMaps, issueData } = params;
	const fullPath = [...path$2, ...issueData.path || []];
	const fullIssue = {
		...issueData,
		path: fullPath
	};
	if (issueData.message !== void 0) return {
		...issueData,
		path: fullPath,
		message: issueData.message
	};
	let errorMessage = "";
	const maps = errorMaps.filter((m) => !!m).slice().reverse();
	for (const map$7 of maps) errorMessage = map$7(fullIssue, {
		data,
		defaultError: errorMessage
	}).message;
	return {
		...issueData,
		path: fullPath,
		message: errorMessage
	};
};
const EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
	const overrideMap = getErrorMap();
	const issue$1 = makeIssue({
		issueData,
		data: ctx.data,
		path: ctx.path,
		errorMaps: [
			ctx.common.contextualErrorMap,
			ctx.schemaErrorMap,
			overrideMap,
			overrideMap === en_default ? void 0 : en_default
		].filter((x) => !!x)
	});
	ctx.common.issues.push(issue$1);
}
var ParseStatus = class ParseStatus {
	constructor() {
		this.value = "valid";
	}
	dirty() {
		if (this.value === "valid") this.value = "dirty";
	}
	abort() {
		if (this.value !== "aborted") this.value = "aborted";
	}
	static mergeArray(status, results) {
		const arrayValue = [];
		for (const s of results) {
			if (s.status === "aborted") return INVALID;
			if (s.status === "dirty") status.dirty();
			arrayValue.push(s.value);
		}
		return {
			status: status.value,
			value: arrayValue
		};
	}
	static async mergeObjectAsync(status, pairs$4) {
		const syncPairs = [];
		for (const pair of pairs$4) {
			const key = await pair.key;
			const value = await pair.value;
			syncPairs.push({
				key,
				value
			});
		}
		return ParseStatus.mergeObjectSync(status, syncPairs);
	}
	static mergeObjectSync(status, pairs$4) {
		const finalObject = {};
		for (const pair of pairs$4) {
			const { key, value } = pair;
			if (key.status === "aborted") return INVALID;
			if (value.status === "aborted") return INVALID;
			if (key.status === "dirty") status.dirty();
			if (value.status === "dirty") status.dirty();
			if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) finalObject[key.value] = value.value;
		}
		return {
			status: status.value,
			value: finalObject
		};
	}
};
const INVALID = Object.freeze({ status: "aborted" });
const DIRTY = (value) => ({
	status: "dirty",
	value
});
const OK = (value) => ({
	status: "valid",
	value
});
const isAborted = (x) => x.status === "aborted";
const isDirty = (x) => x.status === "dirty";
const isValid = (x) => x.status === "valid";
const isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

//#endregion
//#region node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil$1) {
	errorUtil$1.errToObj = (message) => typeof message === "string" ? { message } : message || {};
	errorUtil$1.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

//#endregion
//#region node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
	constructor(parent, value, path$2, key) {
		this._cachedPath = [];
		this.parent = parent;
		this.data = value;
		this._path = path$2;
		this._key = key;
	}
	get path() {
		if (!this._cachedPath.length) if (Array.isArray(this._key)) this._cachedPath.push(...this._path, ...this._key);
		else this._cachedPath.push(...this._path, this._key);
		return this._cachedPath;
	}
};
const handleResult = (ctx, result) => {
	if (isValid(result)) return {
		success: true,
		data: result.value
	};
	else {
		if (!ctx.common.issues.length) throw new Error("Validation failed but no issues detected.");
		return {
			success: false,
			get error() {
				if (this._error) return this._error;
				this._error = new ZodError(ctx.common.issues);
				return this._error;
			}
		};
	}
};
function processCreateParams(params) {
	if (!params) return {};
	const { errorMap: errorMap$1, invalid_type_error, required_error, description } = params;
	if (errorMap$1 && (invalid_type_error || required_error)) throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
	if (errorMap$1) return {
		errorMap: errorMap$1,
		description
	};
	const customMap = (iss, ctx) => {
		const { message } = params;
		if (iss.code === "invalid_enum_value") return { message: message ?? ctx.defaultError };
		if (typeof ctx.data === "undefined") return { message: message ?? required_error ?? ctx.defaultError };
		if (iss.code !== "invalid_type") return { message: ctx.defaultError };
		return { message: message ?? invalid_type_error ?? ctx.defaultError };
	};
	return {
		errorMap: customMap,
		description
	};
}
var ZodType$1 = class {
	get description() {
		return this._def.description;
	}
	_getType(input) {
		return getParsedType(input.data);
	}
	_getOrReturnCtx(input, ctx) {
		return ctx || {
			common: input.parent.common,
			data: input.data,
			parsedType: getParsedType(input.data),
			schemaErrorMap: this._def.errorMap,
			path: input.path,
			parent: input.parent
		};
	}
	_processInputParams(input) {
		return {
			status: new ParseStatus(),
			ctx: {
				common: input.parent.common,
				data: input.data,
				parsedType: getParsedType(input.data),
				schemaErrorMap: this._def.errorMap,
				path: input.path,
				parent: input.parent
			}
		};
	}
	_parseSync(input) {
		const result = this._parse(input);
		if (isAsync(result)) throw new Error("Synchronous parse encountered promise.");
		return result;
	}
	_parseAsync(input) {
		const result = this._parse(input);
		return Promise.resolve(result);
	}
	parse(data, params) {
		const result = this.safeParse(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	safeParse(data, params) {
		const ctx = {
			common: {
				issues: [],
				async: params?.async ?? false,
				contextualErrorMap: params?.errorMap
			},
			path: params?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		return handleResult(ctx, this._parseSync({
			data,
			path: ctx.path,
			parent: ctx
		}));
	}
	"~validate"(data) {
		const ctx = {
			common: {
				issues: [],
				async: !!this["~standard"].async
			},
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		if (!this["~standard"].async) try {
			const result = this._parseSync({
				data,
				path: [],
				parent: ctx
			});
			return isValid(result) ? { value: result.value } : { issues: ctx.common.issues };
		} catch (err) {
			if (err?.message?.toLowerCase()?.includes("encountered")) this["~standard"].async = true;
			ctx.common = {
				issues: [],
				async: true
			};
		}
		return this._parseAsync({
			data,
			path: [],
			parent: ctx
		}).then((result) => isValid(result) ? { value: result.value } : { issues: ctx.common.issues });
	}
	async parseAsync(data, params) {
		const result = await this.safeParseAsync(data, params);
		if (result.success) return result.data;
		throw result.error;
	}
	async safeParseAsync(data, params) {
		const ctx = {
			common: {
				issues: [],
				contextualErrorMap: params?.errorMap,
				async: true
			},
			path: params?.path || [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data,
			parsedType: getParsedType(data)
		};
		const maybeAsyncResult = this._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
		return handleResult(ctx, await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult)));
	}
	refine(check$1, message) {
		const getIssueProperties = (val) => {
			if (typeof message === "string" || typeof message === "undefined") return { message };
			else if (typeof message === "function") return message(val);
			else return message;
		};
		return this._refinement((val, ctx) => {
			const result = check$1(val);
			const setError = () => ctx.addIssue({
				code: ZodIssueCode.custom,
				...getIssueProperties(val)
			});
			if (typeof Promise !== "undefined" && result instanceof Promise) return result.then((data) => {
				if (!data) {
					setError();
					return false;
				} else return true;
			});
			if (!result) {
				setError();
				return false;
			} else return true;
		});
	}
	refinement(check$1, refinementData) {
		return this._refinement((val, ctx) => {
			if (!check$1(val)) {
				ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
				return false;
			} else return true;
		});
	}
	_refinement(refinement) {
		return new ZodEffects({
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "refinement",
				refinement
			}
		});
	}
	superRefine(refinement) {
		return this._refinement(refinement);
	}
	constructor(def) {
		/** Alias of safeParseAsync */
		this.spa = this.safeParseAsync;
		this._def = def;
		this.parse = this.parse.bind(this);
		this.safeParse = this.safeParse.bind(this);
		this.parseAsync = this.parseAsync.bind(this);
		this.safeParseAsync = this.safeParseAsync.bind(this);
		this.spa = this.spa.bind(this);
		this.refine = this.refine.bind(this);
		this.refinement = this.refinement.bind(this);
		this.superRefine = this.superRefine.bind(this);
		this.optional = this.optional.bind(this);
		this.nullable = this.nullable.bind(this);
		this.nullish = this.nullish.bind(this);
		this.array = this.array.bind(this);
		this.promise = this.promise.bind(this);
		this.or = this.or.bind(this);
		this.and = this.and.bind(this);
		this.transform = this.transform.bind(this);
		this.brand = this.brand.bind(this);
		this.default = this.default.bind(this);
		this.catch = this.catch.bind(this);
		this.describe = this.describe.bind(this);
		this.pipe = this.pipe.bind(this);
		this.readonly = this.readonly.bind(this);
		this.isNullable = this.isNullable.bind(this);
		this.isOptional = this.isOptional.bind(this);
		this["~standard"] = {
			version: 1,
			vendor: "zod",
			validate: (data) => this["~validate"](data)
		};
	}
	optional() {
		return ZodOptional$1.create(this, this._def);
	}
	nullable() {
		return ZodNullable$1.create(this, this._def);
	}
	nullish() {
		return this.nullable().optional();
	}
	array() {
		return ZodArray$1.create(this);
	}
	promise() {
		return ZodPromise$1.create(this, this._def);
	}
	or(option) {
		return ZodUnion$1.create([this, option], this._def);
	}
	and(incoming) {
		return ZodIntersection$1.create(this, incoming, this._def);
	}
	transform(transform$1) {
		return new ZodEffects({
			...processCreateParams(this._def),
			schema: this,
			typeName: ZodFirstPartyTypeKind.ZodEffects,
			effect: {
				type: "transform",
				transform: transform$1
			}
		});
	}
	default(def) {
		const defaultValueFunc = typeof def === "function" ? def : () => def;
		return new ZodDefault$1({
			...processCreateParams(this._def),
			innerType: this,
			defaultValue: defaultValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodDefault
		});
	}
	brand() {
		return new ZodBranded({
			typeName: ZodFirstPartyTypeKind.ZodBranded,
			type: this,
			...processCreateParams(this._def)
		});
	}
	catch(def) {
		const catchValueFunc = typeof def === "function" ? def : () => def;
		return new ZodCatch$1({
			...processCreateParams(this._def),
			innerType: this,
			catchValue: catchValueFunc,
			typeName: ZodFirstPartyTypeKind.ZodCatch
		});
	}
	describe(description) {
		const This = this.constructor;
		return new This({
			...this._def,
			description
		});
	}
	pipe(target) {
		return ZodPipeline.create(this, target);
	}
	readonly() {
		return ZodReadonly$1.create(this);
	}
	isOptional() {
		return this.safeParse(void 0).success;
	}
	isNullable() {
		return this.safeParse(null).success;
	}
};
const cuidRegex = /^c[^\s-]{8,}$/i;
const cuid2Regex = /^[0-9a-z]+$/;
const ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
const uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
const nanoidRegex = /^[a-z0-9_-]{21}$/i;
const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
const durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
const _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
let emojiRegex;
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
const ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
const ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
const base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
const dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
const dateRegex = /* @__PURE__ */ new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
	let secondsRegexSource = `[0-5]\\d`;
	if (args.precision) secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
	else if (args.precision == null) secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
	const secondsQuantifier = args.precision ? "+" : "?";
	return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
	return /* @__PURE__ */ new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
	let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
	const opts = [];
	opts.push(args.local ? `Z?` : `Z`);
	if (args.offset) opts.push(`([+-]\\d{2}:?\\d{2})`);
	regex = `${regex}(${opts.join("|")})`;
	return /* @__PURE__ */ new RegExp(`^${regex}$`);
}
function isValidIP(ip, version$1) {
	if ((version$1 === "v4" || !version$1) && ipv4Regex.test(ip)) return true;
	if ((version$1 === "v6" || !version$1) && ipv6Regex.test(ip)) return true;
	return false;
}
function isValidJWT$1(jwt$1, alg) {
	if (!jwtRegex.test(jwt$1)) return false;
	try {
		const [header] = jwt$1.split(".");
		if (!header) return false;
		const base64$2 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
		const decoded = JSON.parse(atob(base64$2));
		if (typeof decoded !== "object" || decoded === null) return false;
		if ("typ" in decoded && decoded?.typ !== "JWT") return false;
		if (!decoded.alg) return false;
		if (alg && decoded.alg !== alg) return false;
		return true;
	} catch {
		return false;
	}
}
function isValidCidr(ip, version$1) {
	if ((version$1 === "v4" || !version$1) && ipv4CidrRegex.test(ip)) return true;
	if ((version$1 === "v6" || !version$1) && ipv6CidrRegex.test(ip)) return true;
	return false;
}
var ZodString$1 = class ZodString$1 extends ZodType$1 {
	_parse(input) {
		if (this._def.coerce) input.data = String(input.data);
		if (this._getType(input) !== ZodParsedType.string) {
			const ctx$1 = this._getOrReturnCtx(input);
			addIssueToContext(ctx$1, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.string,
				received: ctx$1.parsedType
			});
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check$1 of this._def.checks) if (check$1.kind === "min") {
			if (input.data.length < check$1.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check$1.value,
					type: "string",
					inclusive: true,
					exact: false,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "max") {
			if (input.data.length > check$1.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check$1.value,
					type: "string",
					inclusive: true,
					exact: false,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "length") {
			const tooBig = input.data.length > check$1.value;
			const tooSmall = input.data.length < check$1.value;
			if (tooBig || tooSmall) {
				ctx = this._getOrReturnCtx(input, ctx);
				if (tooBig) addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check$1.value,
					type: "string",
					inclusive: true,
					exact: true,
					message: check$1.message
				});
				else if (tooSmall) addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check$1.value,
					type: "string",
					inclusive: true,
					exact: true,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "email") {
			if (!emailRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "email",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "emoji") {
			if (!emojiRegex) emojiRegex = new RegExp(_emojiRegex, "u");
			if (!emojiRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "emoji",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "uuid") {
			if (!uuidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "uuid",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "nanoid") {
			if (!nanoidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "nanoid",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "cuid") {
			if (!cuidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cuid",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "cuid2") {
			if (!cuid2Regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cuid2",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "ulid") {
			if (!ulidRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "ulid",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "url") try {
			new URL(input.data);
		} catch {
			ctx = this._getOrReturnCtx(input, ctx);
			addIssueToContext(ctx, {
				validation: "url",
				code: ZodIssueCode.invalid_string,
				message: check$1.message
			});
			status.dirty();
		}
		else if (check$1.kind === "regex") {
			check$1.regex.lastIndex = 0;
			if (!check$1.regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "regex",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "trim") input.data = input.data.trim();
		else if (check$1.kind === "includes") {
			if (!input.data.includes(check$1.value, check$1.position)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: {
						includes: check$1.value,
						position: check$1.position
					},
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "toLowerCase") input.data = input.data.toLowerCase();
		else if (check$1.kind === "toUpperCase") input.data = input.data.toUpperCase();
		else if (check$1.kind === "startsWith") {
			if (!input.data.startsWith(check$1.value)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: { startsWith: check$1.value },
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "endsWith") {
			if (!input.data.endsWith(check$1.value)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: { endsWith: check$1.value },
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "datetime") {
			if (!datetimeRegex(check$1).test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "datetime",
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "date") {
			if (!dateRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "date",
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "time") {
			if (!timeRegex(check$1).test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_string,
					validation: "time",
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "duration") {
			if (!durationRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "duration",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "ip") {
			if (!isValidIP(input.data, check$1.version)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "ip",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "jwt") {
			if (!isValidJWT$1(input.data, check$1.alg)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "jwt",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "cidr") {
			if (!isValidCidr(input.data, check$1.version)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "cidr",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "base64") {
			if (!base64Regex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "base64",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "base64url") {
			if (!base64urlRegex.test(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					validation: "base64url",
					code: ZodIssueCode.invalid_string,
					message: check$1.message
				});
				status.dirty();
			}
		} else util.assertNever(check$1);
		return {
			status: status.value,
			value: input.data
		};
	}
	_regex(regex, validation, message) {
		return this.refinement((data) => regex.test(data), {
			validation,
			code: ZodIssueCode.invalid_string,
			...errorUtil.errToObj(message)
		});
	}
	_addCheck(check$1) {
		return new ZodString$1({
			...this._def,
			checks: [...this._def.checks, check$1]
		});
	}
	email(message) {
		return this._addCheck({
			kind: "email",
			...errorUtil.errToObj(message)
		});
	}
	url(message) {
		return this._addCheck({
			kind: "url",
			...errorUtil.errToObj(message)
		});
	}
	emoji(message) {
		return this._addCheck({
			kind: "emoji",
			...errorUtil.errToObj(message)
		});
	}
	uuid(message) {
		return this._addCheck({
			kind: "uuid",
			...errorUtil.errToObj(message)
		});
	}
	nanoid(message) {
		return this._addCheck({
			kind: "nanoid",
			...errorUtil.errToObj(message)
		});
	}
	cuid(message) {
		return this._addCheck({
			kind: "cuid",
			...errorUtil.errToObj(message)
		});
	}
	cuid2(message) {
		return this._addCheck({
			kind: "cuid2",
			...errorUtil.errToObj(message)
		});
	}
	ulid(message) {
		return this._addCheck({
			kind: "ulid",
			...errorUtil.errToObj(message)
		});
	}
	base64(message) {
		return this._addCheck({
			kind: "base64",
			...errorUtil.errToObj(message)
		});
	}
	base64url(message) {
		return this._addCheck({
			kind: "base64url",
			...errorUtil.errToObj(message)
		});
	}
	jwt(options) {
		return this._addCheck({
			kind: "jwt",
			...errorUtil.errToObj(options)
		});
	}
	ip(options) {
		return this._addCheck({
			kind: "ip",
			...errorUtil.errToObj(options)
		});
	}
	cidr(options) {
		return this._addCheck({
			kind: "cidr",
			...errorUtil.errToObj(options)
		});
	}
	datetime(options) {
		if (typeof options === "string") return this._addCheck({
			kind: "datetime",
			precision: null,
			offset: false,
			local: false,
			message: options
		});
		return this._addCheck({
			kind: "datetime",
			precision: typeof options?.precision === "undefined" ? null : options?.precision,
			offset: options?.offset ?? false,
			local: options?.local ?? false,
			...errorUtil.errToObj(options?.message)
		});
	}
	date(message) {
		return this._addCheck({
			kind: "date",
			message
		});
	}
	time(options) {
		if (typeof options === "string") return this._addCheck({
			kind: "time",
			precision: null,
			message: options
		});
		return this._addCheck({
			kind: "time",
			precision: typeof options?.precision === "undefined" ? null : options?.precision,
			...errorUtil.errToObj(options?.message)
		});
	}
	duration(message) {
		return this._addCheck({
			kind: "duration",
			...errorUtil.errToObj(message)
		});
	}
	regex(regex, message) {
		return this._addCheck({
			kind: "regex",
			regex,
			...errorUtil.errToObj(message)
		});
	}
	includes(value, options) {
		return this._addCheck({
			kind: "includes",
			value,
			position: options?.position,
			...errorUtil.errToObj(options?.message)
		});
	}
	startsWith(value, message) {
		return this._addCheck({
			kind: "startsWith",
			value,
			...errorUtil.errToObj(message)
		});
	}
	endsWith(value, message) {
		return this._addCheck({
			kind: "endsWith",
			value,
			...errorUtil.errToObj(message)
		});
	}
	min(minLength, message) {
		return this._addCheck({
			kind: "min",
			value: minLength,
			...errorUtil.errToObj(message)
		});
	}
	max(maxLength, message) {
		return this._addCheck({
			kind: "max",
			value: maxLength,
			...errorUtil.errToObj(message)
		});
	}
	length(len, message) {
		return this._addCheck({
			kind: "length",
			value: len,
			...errorUtil.errToObj(message)
		});
	}
	/**
	* Equivalent to `.min(1)`
	*/
	nonempty(message) {
		return this.min(1, errorUtil.errToObj(message));
	}
	trim() {
		return new ZodString$1({
			...this._def,
			checks: [...this._def.checks, { kind: "trim" }]
		});
	}
	toLowerCase() {
		return new ZodString$1({
			...this._def,
			checks: [...this._def.checks, { kind: "toLowerCase" }]
		});
	}
	toUpperCase() {
		return new ZodString$1({
			...this._def,
			checks: [...this._def.checks, { kind: "toUpperCase" }]
		});
	}
	get isDatetime() {
		return !!this._def.checks.find((ch) => ch.kind === "datetime");
	}
	get isDate() {
		return !!this._def.checks.find((ch) => ch.kind === "date");
	}
	get isTime() {
		return !!this._def.checks.find((ch) => ch.kind === "time");
	}
	get isDuration() {
		return !!this._def.checks.find((ch) => ch.kind === "duration");
	}
	get isEmail() {
		return !!this._def.checks.find((ch) => ch.kind === "email");
	}
	get isURL() {
		return !!this._def.checks.find((ch) => ch.kind === "url");
	}
	get isEmoji() {
		return !!this._def.checks.find((ch) => ch.kind === "emoji");
	}
	get isUUID() {
		return !!this._def.checks.find((ch) => ch.kind === "uuid");
	}
	get isNANOID() {
		return !!this._def.checks.find((ch) => ch.kind === "nanoid");
	}
	get isCUID() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid");
	}
	get isCUID2() {
		return !!this._def.checks.find((ch) => ch.kind === "cuid2");
	}
	get isULID() {
		return !!this._def.checks.find((ch) => ch.kind === "ulid");
	}
	get isIP() {
		return !!this._def.checks.find((ch) => ch.kind === "ip");
	}
	get isCIDR() {
		return !!this._def.checks.find((ch) => ch.kind === "cidr");
	}
	get isBase64() {
		return !!this._def.checks.find((ch) => ch.kind === "base64");
	}
	get isBase64url() {
		return !!this._def.checks.find((ch) => ch.kind === "base64url");
	}
	get minLength() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxLength() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
};
ZodString$1.create = (params) => {
	return new ZodString$1({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodString,
		coerce: params?.coerce ?? false,
		...processCreateParams(params)
	});
};
function floatSafeRemainder$1(val, step) {
	const valDecCount = (val.toString().split(".")[1] || "").length;
	const stepDecCount = (step.toString().split(".")[1] || "").length;
	const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
	return Number.parseInt(val.toFixed(decCount).replace(".", "")) % Number.parseInt(step.toFixed(decCount).replace(".", "")) / 10 ** decCount;
}
var ZodNumber$1 = class ZodNumber$1 extends ZodType$1 {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
		this.step = this.multipleOf;
	}
	_parse(input) {
		if (this._def.coerce) input.data = Number(input.data);
		if (this._getType(input) !== ZodParsedType.number) {
			const ctx$1 = this._getOrReturnCtx(input);
			addIssueToContext(ctx$1, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.number,
				received: ctx$1.parsedType
			});
			return INVALID;
		}
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check$1 of this._def.checks) if (check$1.kind === "int") {
			if (!util.isInteger(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.invalid_type,
					expected: "integer",
					received: "float",
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "min") {
			if (check$1.inclusive ? input.data < check$1.value : input.data <= check$1.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: check$1.value,
					type: "number",
					inclusive: check$1.inclusive,
					exact: false,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "max") {
			if (check$1.inclusive ? input.data > check$1.value : input.data >= check$1.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: check$1.value,
					type: "number",
					inclusive: check$1.inclusive,
					exact: false,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "multipleOf") {
			if (floatSafeRemainder$1(input.data, check$1.value) !== 0) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_multiple_of,
					multipleOf: check$1.value,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "finite") {
			if (!Number.isFinite(input.data)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_finite,
					message: check$1.message
				});
				status.dirty();
			}
		} else util.assertNever(check$1);
		return {
			status: status.value,
			value: input.data
		};
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodNumber$1({
			...this._def,
			checks: [...this._def.checks, {
				kind,
				value,
				inclusive,
				message: errorUtil.toString(message)
			}]
		});
	}
	_addCheck(check$1) {
		return new ZodNumber$1({
			...this._def,
			checks: [...this._def.checks, check$1]
		});
	}
	int(message) {
		return this._addCheck({
			kind: "int",
			message: errorUtil.toString(message)
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: 0,
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message)
		});
	}
	finite(message) {
		return this._addCheck({
			kind: "finite",
			message: errorUtil.toString(message)
		});
	}
	safe(message) {
		return this._addCheck({
			kind: "min",
			inclusive: true,
			value: Number.MIN_SAFE_INTEGER,
			message: errorUtil.toString(message)
		})._addCheck({
			kind: "max",
			inclusive: true,
			value: Number.MAX_SAFE_INTEGER,
			message: errorUtil.toString(message)
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
	get isInt() {
		return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
	}
	get isFinite() {
		let max = null;
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") return true;
		else if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		} else if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return Number.isFinite(min) && Number.isFinite(max);
	}
};
ZodNumber$1.create = (params) => {
	return new ZodNumber$1({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodNumber,
		coerce: params?.coerce || false,
		...processCreateParams(params)
	});
};
var ZodBigInt$1 = class ZodBigInt$1 extends ZodType$1 {
	constructor() {
		super(...arguments);
		this.min = this.gte;
		this.max = this.lte;
	}
	_parse(input) {
		if (this._def.coerce) try {
			input.data = BigInt(input.data);
		} catch {
			return this._getInvalidInput(input);
		}
		if (this._getType(input) !== ZodParsedType.bigint) return this._getInvalidInput(input);
		let ctx = void 0;
		const status = new ParseStatus();
		for (const check$1 of this._def.checks) if (check$1.kind === "min") {
			if (check$1.inclusive ? input.data < check$1.value : input.data <= check$1.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					type: "bigint",
					minimum: check$1.value,
					inclusive: check$1.inclusive,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "max") {
			if (check$1.inclusive ? input.data > check$1.value : input.data >= check$1.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					type: "bigint",
					maximum: check$1.value,
					inclusive: check$1.inclusive,
					message: check$1.message
				});
				status.dirty();
			}
		} else if (check$1.kind === "multipleOf") {
			if (input.data % check$1.value !== BigInt(0)) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.not_multiple_of,
					multipleOf: check$1.value,
					message: check$1.message
				});
				status.dirty();
			}
		} else util.assertNever(check$1);
		return {
			status: status.value,
			value: input.data
		};
	}
	_getInvalidInput(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.bigint,
			received: ctx.parsedType
		});
		return INVALID;
	}
	gte(value, message) {
		return this.setLimit("min", value, true, errorUtil.toString(message));
	}
	gt(value, message) {
		return this.setLimit("min", value, false, errorUtil.toString(message));
	}
	lte(value, message) {
		return this.setLimit("max", value, true, errorUtil.toString(message));
	}
	lt(value, message) {
		return this.setLimit("max", value, false, errorUtil.toString(message));
	}
	setLimit(kind, value, inclusive, message) {
		return new ZodBigInt$1({
			...this._def,
			checks: [...this._def.checks, {
				kind,
				value,
				inclusive,
				message: errorUtil.toString(message)
			}]
		});
	}
	_addCheck(check$1) {
		return new ZodBigInt$1({
			...this._def,
			checks: [...this._def.checks, check$1]
		});
	}
	positive(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	negative(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: false,
			message: errorUtil.toString(message)
		});
	}
	nonpositive(message) {
		return this._addCheck({
			kind: "max",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	nonnegative(message) {
		return this._addCheck({
			kind: "min",
			value: BigInt(0),
			inclusive: true,
			message: errorUtil.toString(message)
		});
	}
	multipleOf(value, message) {
		return this._addCheck({
			kind: "multipleOf",
			value,
			message: errorUtil.toString(message)
		});
	}
	get minValue() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min;
	}
	get maxValue() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max;
	}
};
ZodBigInt$1.create = (params) => {
	return new ZodBigInt$1({
		checks: [],
		typeName: ZodFirstPartyTypeKind.ZodBigInt,
		coerce: params?.coerce ?? false,
		...processCreateParams(params)
	});
};
var ZodBoolean$1 = class extends ZodType$1 {
	_parse(input) {
		if (this._def.coerce) input.data = Boolean(input.data);
		if (this._getType(input) !== ZodParsedType.boolean) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.boolean,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodBoolean$1.create = (params) => {
	return new ZodBoolean$1({
		typeName: ZodFirstPartyTypeKind.ZodBoolean,
		coerce: params?.coerce || false,
		...processCreateParams(params)
	});
};
var ZodDate$1 = class ZodDate$1 extends ZodType$1 {
	_parse(input) {
		if (this._def.coerce) input.data = new Date(input.data);
		if (this._getType(input) !== ZodParsedType.date) {
			const ctx$1 = this._getOrReturnCtx(input);
			addIssueToContext(ctx$1, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.date,
				received: ctx$1.parsedType
			});
			return INVALID;
		}
		if (Number.isNaN(input.data.getTime())) {
			addIssueToContext(this._getOrReturnCtx(input), { code: ZodIssueCode.invalid_date });
			return INVALID;
		}
		const status = new ParseStatus();
		let ctx = void 0;
		for (const check$1 of this._def.checks) if (check$1.kind === "min") {
			if (input.data.getTime() < check$1.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					message: check$1.message,
					inclusive: true,
					exact: false,
					minimum: check$1.value,
					type: "date"
				});
				status.dirty();
			}
		} else if (check$1.kind === "max") {
			if (input.data.getTime() > check$1.value) {
				ctx = this._getOrReturnCtx(input, ctx);
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					message: check$1.message,
					inclusive: true,
					exact: false,
					maximum: check$1.value,
					type: "date"
				});
				status.dirty();
			}
		} else util.assertNever(check$1);
		return {
			status: status.value,
			value: new Date(input.data.getTime())
		};
	}
	_addCheck(check$1) {
		return new ZodDate$1({
			...this._def,
			checks: [...this._def.checks, check$1]
		});
	}
	min(minDate, message) {
		return this._addCheck({
			kind: "min",
			value: minDate.getTime(),
			message: errorUtil.toString(message)
		});
	}
	max(maxDate, message) {
		return this._addCheck({
			kind: "max",
			value: maxDate.getTime(),
			message: errorUtil.toString(message)
		});
	}
	get minDate() {
		let min = null;
		for (const ch of this._def.checks) if (ch.kind === "min") {
			if (min === null || ch.value > min) min = ch.value;
		}
		return min != null ? new Date(min) : null;
	}
	get maxDate() {
		let max = null;
		for (const ch of this._def.checks) if (ch.kind === "max") {
			if (max === null || ch.value < max) max = ch.value;
		}
		return max != null ? new Date(max) : null;
	}
};
ZodDate$1.create = (params) => {
	return new ZodDate$1({
		checks: [],
		coerce: params?.coerce || false,
		typeName: ZodFirstPartyTypeKind.ZodDate,
		...processCreateParams(params)
	});
};
var ZodSymbol$1 = class extends ZodType$1 {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.symbol) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.symbol,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodSymbol$1.create = (params) => {
	return new ZodSymbol$1({
		typeName: ZodFirstPartyTypeKind.ZodSymbol,
		...processCreateParams(params)
	});
};
var ZodUndefined$1 = class extends ZodType$1 {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.undefined,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodUndefined$1.create = (params) => {
	return new ZodUndefined$1({
		typeName: ZodFirstPartyTypeKind.ZodUndefined,
		...processCreateParams(params)
	});
};
var ZodNull$1 = class extends ZodType$1 {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.null) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.null,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodNull$1.create = (params) => {
	return new ZodNull$1({
		typeName: ZodFirstPartyTypeKind.ZodNull,
		...processCreateParams(params)
	});
};
var ZodAny$1 = class extends ZodType$1 {
	constructor() {
		super(...arguments);
		this._any = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
ZodAny$1.create = (params) => {
	return new ZodAny$1({
		typeName: ZodFirstPartyTypeKind.ZodAny,
		...processCreateParams(params)
	});
};
var ZodUnknown$1 = class extends ZodType$1 {
	constructor() {
		super(...arguments);
		this._unknown = true;
	}
	_parse(input) {
		return OK(input.data);
	}
};
ZodUnknown$1.create = (params) => {
	return new ZodUnknown$1({
		typeName: ZodFirstPartyTypeKind.ZodUnknown,
		...processCreateParams(params)
	});
};
var ZodNever$1 = class extends ZodType$1 {
	_parse(input) {
		const ctx = this._getOrReturnCtx(input);
		addIssueToContext(ctx, {
			code: ZodIssueCode.invalid_type,
			expected: ZodParsedType.never,
			received: ctx.parsedType
		});
		return INVALID;
	}
};
ZodNever$1.create = (params) => {
	return new ZodNever$1({
		typeName: ZodFirstPartyTypeKind.ZodNever,
		...processCreateParams(params)
	});
};
var ZodVoid$1 = class extends ZodType$1 {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.undefined) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.void,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK(input.data);
	}
};
ZodVoid$1.create = (params) => {
	return new ZodVoid$1({
		typeName: ZodFirstPartyTypeKind.ZodVoid,
		...processCreateParams(params)
	});
};
var ZodArray$1 = class ZodArray$1 extends ZodType$1 {
	_parse(input) {
		const { ctx, status } = this._processInputParams(input);
		const def = this._def;
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (def.exactLength !== null) {
			const tooBig = ctx.data.length > def.exactLength.value;
			const tooSmall = ctx.data.length < def.exactLength.value;
			if (tooBig || tooSmall) {
				addIssueToContext(ctx, {
					code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
					minimum: tooSmall ? def.exactLength.value : void 0,
					maximum: tooBig ? def.exactLength.value : void 0,
					type: "array",
					inclusive: true,
					exact: true,
					message: def.exactLength.message
				});
				status.dirty();
			}
		}
		if (def.minLength !== null) {
			if (ctx.data.length < def.minLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.minLength.message
				});
				status.dirty();
			}
		}
		if (def.maxLength !== null) {
			if (ctx.data.length > def.maxLength.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxLength.value,
					type: "array",
					inclusive: true,
					exact: false,
					message: def.maxLength.message
				});
				status.dirty();
			}
		}
		if (ctx.common.async) return Promise.all([...ctx.data].map((item, i) => {
			return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		})).then((result$1) => {
			return ParseStatus.mergeArray(status, result$1);
		});
		const result = [...ctx.data].map((item, i) => {
			return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
		});
		return ParseStatus.mergeArray(status, result);
	}
	get element() {
		return this._def.type;
	}
	min(minLength, message) {
		return new ZodArray$1({
			...this._def,
			minLength: {
				value: minLength,
				message: errorUtil.toString(message)
			}
		});
	}
	max(maxLength, message) {
		return new ZodArray$1({
			...this._def,
			maxLength: {
				value: maxLength,
				message: errorUtil.toString(message)
			}
		});
	}
	length(len, message) {
		return new ZodArray$1({
			...this._def,
			exactLength: {
				value: len,
				message: errorUtil.toString(message)
			}
		});
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
ZodArray$1.create = (schema$6, params) => {
	return new ZodArray$1({
		type: schema$6,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: ZodFirstPartyTypeKind.ZodArray,
		...processCreateParams(params)
	});
};
function deepPartialify(schema$6) {
	if (schema$6 instanceof ZodObject$1) {
		const newShape = {};
		for (const key in schema$6.shape) {
			const fieldSchema = schema$6.shape[key];
			newShape[key] = ZodOptional$1.create(deepPartialify(fieldSchema));
		}
		return new ZodObject$1({
			...schema$6._def,
			shape: () => newShape
		});
	} else if (schema$6 instanceof ZodArray$1) return new ZodArray$1({
		...schema$6._def,
		type: deepPartialify(schema$6.element)
	});
	else if (schema$6 instanceof ZodOptional$1) return ZodOptional$1.create(deepPartialify(schema$6.unwrap()));
	else if (schema$6 instanceof ZodNullable$1) return ZodNullable$1.create(deepPartialify(schema$6.unwrap()));
	else if (schema$6 instanceof ZodTuple$1) return ZodTuple$1.create(schema$6.items.map((item) => deepPartialify(item)));
	else return schema$6;
}
var ZodObject$1 = class ZodObject$1 extends ZodType$1 {
	constructor() {
		super(...arguments);
		this._cached = null;
		/**
		* @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
		* If you want to pass through unknown properties, use `.passthrough()` instead.
		*/
		this.nonstrict = this.passthrough;
		/**
		* @deprecated Use `.extend` instead
		*  */
		this.augment = this.extend;
	}
	_getCached() {
		if (this._cached !== null) return this._cached;
		const shape = this._def.shape();
		this._cached = {
			shape,
			keys: util.objectKeys(shape)
		};
		return this._cached;
	}
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.object) {
			const ctx$1 = this._getOrReturnCtx(input);
			addIssueToContext(ctx$1, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx$1.parsedType
			});
			return INVALID;
		}
		const { status, ctx } = this._processInputParams(input);
		const { shape, keys: shapeKeys } = this._getCached();
		const extraKeys = [];
		if (!(this._def.catchall instanceof ZodNever$1 && this._def.unknownKeys === "strip")) {
			for (const key in ctx.data) if (!shapeKeys.includes(key)) extraKeys.push(key);
		}
		const pairs$4 = [];
		for (const key of shapeKeys) {
			const keyValidator = shape[key];
			const value = ctx.data[key];
			pairs$4.push({
				key: {
					status: "valid",
					value: key
				},
				value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
				alwaysSet: key in ctx.data
			});
		}
		if (this._def.catchall instanceof ZodNever$1) {
			const unknownKeys = this._def.unknownKeys;
			if (unknownKeys === "passthrough") for (const key of extraKeys) pairs$4.push({
				key: {
					status: "valid",
					value: key
				},
				value: {
					status: "valid",
					value: ctx.data[key]
				}
			});
			else if (unknownKeys === "strict") {
				if (extraKeys.length > 0) {
					addIssueToContext(ctx, {
						code: ZodIssueCode.unrecognized_keys,
						keys: extraKeys
					});
					status.dirty();
				}
			} else if (unknownKeys === "strip") {} else throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
		} else {
			const catchall = this._def.catchall;
			for (const key of extraKeys) {
				const value = ctx.data[key];
				pairs$4.push({
					key: {
						status: "valid",
						value: key
					},
					value: catchall._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
					alwaysSet: key in ctx.data
				});
			}
		}
		if (ctx.common.async) return Promise.resolve().then(async () => {
			const syncPairs = [];
			for (const pair of pairs$4) {
				const key = await pair.key;
				const value = await pair.value;
				syncPairs.push({
					key,
					value,
					alwaysSet: pair.alwaysSet
				});
			}
			return syncPairs;
		}).then((syncPairs) => {
			return ParseStatus.mergeObjectSync(status, syncPairs);
		});
		else return ParseStatus.mergeObjectSync(status, pairs$4);
	}
	get shape() {
		return this._def.shape();
	}
	strict(message) {
		errorUtil.errToObj;
		return new ZodObject$1({
			...this._def,
			unknownKeys: "strict",
			...message !== void 0 ? { errorMap: (issue$1, ctx) => {
				const defaultError = this._def.errorMap?.(issue$1, ctx).message ?? ctx.defaultError;
				if (issue$1.code === "unrecognized_keys") return { message: errorUtil.errToObj(message).message ?? defaultError };
				return { message: defaultError };
			} } : {}
		});
	}
	strip() {
		return new ZodObject$1({
			...this._def,
			unknownKeys: "strip"
		});
	}
	passthrough() {
		return new ZodObject$1({
			...this._def,
			unknownKeys: "passthrough"
		});
	}
	extend(augmentation) {
		return new ZodObject$1({
			...this._def,
			shape: () => ({
				...this._def.shape(),
				...augmentation
			})
		});
	}
	/**
	* Prior to zod@1.0.12 there was a bug in the
	* inferred type of merged objects. Please
	* upgrade if you are experiencing issues.
	*/
	merge(merging) {
		return new ZodObject$1({
			unknownKeys: merging._def.unknownKeys,
			catchall: merging._def.catchall,
			shape: () => ({
				...this._def.shape(),
				...merging._def.shape()
			}),
			typeName: ZodFirstPartyTypeKind.ZodObject
		});
	}
	setKey(key, schema$6) {
		return this.augment({ [key]: schema$6 });
	}
	catchall(index$1) {
		return new ZodObject$1({
			...this._def,
			catchall: index$1
		});
	}
	pick(mask) {
		const shape = {};
		for (const key of util.objectKeys(mask)) if (mask[key] && this.shape[key]) shape[key] = this.shape[key];
		return new ZodObject$1({
			...this._def,
			shape: () => shape
		});
	}
	omit(mask) {
		const shape = {};
		for (const key of util.objectKeys(this.shape)) if (!mask[key]) shape[key] = this.shape[key];
		return new ZodObject$1({
			...this._def,
			shape: () => shape
		});
	}
	/**
	* @deprecated
	*/
	deepPartial() {
		return deepPartialify(this);
	}
	partial(mask) {
		const newShape = {};
		for (const key of util.objectKeys(this.shape)) {
			const fieldSchema = this.shape[key];
			if (mask && !mask[key]) newShape[key] = fieldSchema;
			else newShape[key] = fieldSchema.optional();
		}
		return new ZodObject$1({
			...this._def,
			shape: () => newShape
		});
	}
	required(mask) {
		const newShape = {};
		for (const key of util.objectKeys(this.shape)) if (mask && !mask[key]) newShape[key] = this.shape[key];
		else {
			let newField = this.shape[key];
			while (newField instanceof ZodOptional$1) newField = newField._def.innerType;
			newShape[key] = newField;
		}
		return new ZodObject$1({
			...this._def,
			shape: () => newShape
		});
	}
	keyof() {
		return createZodEnum(util.objectKeys(this.shape));
	}
};
ZodObject$1.create = (shape, params) => {
	return new ZodObject$1({
		shape: () => shape,
		unknownKeys: "strip",
		catchall: ZodNever$1.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
ZodObject$1.strictCreate = (shape, params) => {
	return new ZodObject$1({
		shape: () => shape,
		unknownKeys: "strict",
		catchall: ZodNever$1.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
ZodObject$1.lazycreate = (shape, params) => {
	return new ZodObject$1({
		shape,
		unknownKeys: "strip",
		catchall: ZodNever$1.create(),
		typeName: ZodFirstPartyTypeKind.ZodObject,
		...processCreateParams(params)
	});
};
var ZodUnion$1 = class extends ZodType$1 {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const options = this._def.options;
		function handleResults(results) {
			for (const result of results) if (result.result.status === "valid") return result.result;
			for (const result of results) if (result.result.status === "dirty") {
				ctx.common.issues.push(...result.ctx.common.issues);
				return result.result;
			}
			const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors
			});
			return INVALID;
		}
		if (ctx.common.async) return Promise.all(options.map(async (option) => {
			const childCtx = {
				...ctx,
				common: {
					...ctx.common,
					issues: []
				},
				parent: null
			};
			return {
				result: await option._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx
				}),
				ctx: childCtx
			};
		})).then(handleResults);
		else {
			let dirty = void 0;
			const issues = [];
			for (const option of options) {
				const childCtx = {
					...ctx,
					common: {
						...ctx.common,
						issues: []
					},
					parent: null
				};
				const result = option._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: childCtx
				});
				if (result.status === "valid") return result;
				else if (result.status === "dirty" && !dirty) dirty = {
					result,
					ctx: childCtx
				};
				if (childCtx.common.issues.length) issues.push(childCtx.common.issues);
			}
			if (dirty) {
				ctx.common.issues.push(...dirty.ctx.common.issues);
				return dirty.result;
			}
			const unionErrors = issues.map((issues$1) => new ZodError(issues$1));
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union,
				unionErrors
			});
			return INVALID;
		}
	}
	get options() {
		return this._def.options;
	}
};
ZodUnion$1.create = (types, params) => {
	return new ZodUnion$1({
		options: types,
		typeName: ZodFirstPartyTypeKind.ZodUnion,
		...processCreateParams(params)
	});
};
const getDiscriminator = (type) => {
	if (type instanceof ZodLazy$1) return getDiscriminator(type.schema);
	else if (type instanceof ZodEffects) return getDiscriminator(type.innerType());
	else if (type instanceof ZodLiteral$1) return [type.value];
	else if (type instanceof ZodEnum$1) return type.options;
	else if (type instanceof ZodNativeEnum) return util.objectValues(type.enum);
	else if (type instanceof ZodDefault$1) return getDiscriminator(type._def.innerType);
	else if (type instanceof ZodUndefined$1) return [void 0];
	else if (type instanceof ZodNull$1) return [null];
	else if (type instanceof ZodOptional$1) return [void 0, ...getDiscriminator(type.unwrap())];
	else if (type instanceof ZodNullable$1) return [null, ...getDiscriminator(type.unwrap())];
	else if (type instanceof ZodBranded) return getDiscriminator(type.unwrap());
	else if (type instanceof ZodReadonly$1) return getDiscriminator(type.unwrap());
	else if (type instanceof ZodCatch$1) return getDiscriminator(type._def.innerType);
	else return [];
};
var ZodDiscriminatedUnion$1 = class ZodDiscriminatedUnion$1 extends ZodType$1 {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const discriminator = this.discriminator;
		const discriminatorValue = ctx.data[discriminator];
		const option = this.optionsMap.get(discriminatorValue);
		if (!option) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_union_discriminator,
				options: Array.from(this.optionsMap.keys()),
				path: [discriminator]
			});
			return INVALID;
		}
		if (ctx.common.async) return option._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
		else return option._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
	}
	get discriminator() {
		return this._def.discriminator;
	}
	get options() {
		return this._def.options;
	}
	get optionsMap() {
		return this._def.optionsMap;
	}
	/**
	* The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
	* However, it only allows a union of objects, all of which need to share a discriminator property. This property must
	* have a different value for each object in the union.
	* @param discriminator the name of the discriminator property
	* @param types an array of object schemas
	* @param params
	*/
	static create(discriminator, options, params) {
		const optionsMap = /* @__PURE__ */ new Map();
		for (const type of options) {
			const discriminatorValues = getDiscriminator(type.shape[discriminator]);
			if (!discriminatorValues.length) throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
			for (const value of discriminatorValues) {
				if (optionsMap.has(value)) throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
				optionsMap.set(value, type);
			}
		}
		return new ZodDiscriminatedUnion$1({
			typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
			discriminator,
			options,
			optionsMap,
			...processCreateParams(params)
		});
	}
};
function mergeValues$1(a, b) {
	const aType = getParsedType(a);
	const bType = getParsedType(b);
	if (a === b) return {
		valid: true,
		data: a
	};
	else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
		const bKeys = util.objectKeys(b);
		const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		for (const key of sharedKeys) {
			const sharedValue = mergeValues$1(a[key], b[key]);
			if (!sharedValue.valid) return { valid: false };
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	} else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
		if (a.length !== b.length) return { valid: false };
		const newArray = [];
		for (let index$1 = 0; index$1 < a.length; index$1++) {
			const itemA = a[index$1];
			const itemB = b[index$1];
			const sharedValue = mergeValues$1(itemA, itemB);
			if (!sharedValue.valid) return { valid: false };
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	} else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) return {
		valid: true,
		data: a
	};
	else return { valid: false };
}
var ZodIntersection$1 = class extends ZodType$1 {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const handleParsed = (parsedLeft, parsedRight) => {
			if (isAborted(parsedLeft) || isAborted(parsedRight)) return INVALID;
			const merged = mergeValues$1(parsedLeft.value, parsedRight.value);
			if (!merged.valid) {
				addIssueToContext(ctx, { code: ZodIssueCode.invalid_intersection_types });
				return INVALID;
			}
			if (isDirty(parsedLeft) || isDirty(parsedRight)) status.dirty();
			return {
				status: status.value,
				value: merged.data
			};
		};
		if (ctx.common.async) return Promise.all([this._def.left._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}), this._def.right._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		})]).then(([left, right]) => handleParsed(left, right));
		else return handleParsed(this._def.left._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}), this._def.right._parseSync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}));
	}
};
ZodIntersection$1.create = (left, right, params) => {
	return new ZodIntersection$1({
		left,
		right,
		typeName: ZodFirstPartyTypeKind.ZodIntersection,
		...processCreateParams(params)
	});
};
var ZodTuple$1 = class ZodTuple$1 extends ZodType$1 {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.array) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.array,
				received: ctx.parsedType
			});
			return INVALID;
		}
		if (ctx.data.length < this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_small,
				minimum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array"
			});
			return INVALID;
		}
		if (!this._def.rest && ctx.data.length > this._def.items.length) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.too_big,
				maximum: this._def.items.length,
				inclusive: true,
				exact: false,
				type: "array"
			});
			status.dirty();
		}
		const items = [...ctx.data].map((item, itemIndex) => {
			const schema$6 = this._def.items[itemIndex] || this._def.rest;
			if (!schema$6) return null;
			return schema$6._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
		}).filter((x) => !!x);
		if (ctx.common.async) return Promise.all(items).then((results) => {
			return ParseStatus.mergeArray(status, results);
		});
		else return ParseStatus.mergeArray(status, items);
	}
	get items() {
		return this._def.items;
	}
	rest(rest) {
		return new ZodTuple$1({
			...this._def,
			rest
		});
	}
};
ZodTuple$1.create = (schemas$1, params) => {
	if (!Array.isArray(schemas$1)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
	return new ZodTuple$1({
		items: schemas$1,
		typeName: ZodFirstPartyTypeKind.ZodTuple,
		rest: null,
		...processCreateParams(params)
	});
};
var ZodRecord$1 = class ZodRecord$1 extends ZodType$1 {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.object) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.object,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const pairs$4 = [];
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		for (const key in ctx.data) pairs$4.push({
			key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
			value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
			alwaysSet: key in ctx.data
		});
		if (ctx.common.async) return ParseStatus.mergeObjectAsync(status, pairs$4);
		else return ParseStatus.mergeObjectSync(status, pairs$4);
	}
	get element() {
		return this._def.valueType;
	}
	static create(first, second, third) {
		if (second instanceof ZodType$1) return new ZodRecord$1({
			keyType: first,
			valueType: second,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(third)
		});
		return new ZodRecord$1({
			keyType: ZodString$1.create(),
			valueType: first,
			typeName: ZodFirstPartyTypeKind.ZodRecord,
			...processCreateParams(second)
		});
	}
};
var ZodMap$1 = class extends ZodType$1 {
	get keySchema() {
		return this._def.keyType;
	}
	get valueSchema() {
		return this._def.valueType;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.map) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.map,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const keyType = this._def.keyType;
		const valueType = this._def.valueType;
		const pairs$4 = [...ctx.data.entries()].map(([key, value], index$1) => {
			return {
				key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index$1, "key"])),
				value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index$1, "value"]))
			};
		});
		if (ctx.common.async) {
			const finalMap = /* @__PURE__ */ new Map();
			return Promise.resolve().then(async () => {
				for (const pair of pairs$4) {
					const key = await pair.key;
					const value = await pair.value;
					if (key.status === "aborted" || value.status === "aborted") return INVALID;
					if (key.status === "dirty" || value.status === "dirty") status.dirty();
					finalMap.set(key.value, value.value);
				}
				return {
					status: status.value,
					value: finalMap
				};
			});
		} else {
			const finalMap = /* @__PURE__ */ new Map();
			for (const pair of pairs$4) {
				const key = pair.key;
				const value = pair.value;
				if (key.status === "aborted" || value.status === "aborted") return INVALID;
				if (key.status === "dirty" || value.status === "dirty") status.dirty();
				finalMap.set(key.value, value.value);
			}
			return {
				status: status.value,
				value: finalMap
			};
		}
	}
};
ZodMap$1.create = (keyType, valueType, params) => {
	return new ZodMap$1({
		valueType,
		keyType,
		typeName: ZodFirstPartyTypeKind.ZodMap,
		...processCreateParams(params)
	});
};
var ZodSet$1 = class ZodSet$1 extends ZodType$1 {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.set) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.set,
				received: ctx.parsedType
			});
			return INVALID;
		}
		const def = this._def;
		if (def.minSize !== null) {
			if (ctx.data.size < def.minSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_small,
					minimum: def.minSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.minSize.message
				});
				status.dirty();
			}
		}
		if (def.maxSize !== null) {
			if (ctx.data.size > def.maxSize.value) {
				addIssueToContext(ctx, {
					code: ZodIssueCode.too_big,
					maximum: def.maxSize.value,
					type: "set",
					inclusive: true,
					exact: false,
					message: def.maxSize.message
				});
				status.dirty();
			}
		}
		const valueType = this._def.valueType;
		function finalizeSet(elements$1) {
			const parsedSet = /* @__PURE__ */ new Set();
			for (const element of elements$1) {
				if (element.status === "aborted") return INVALID;
				if (element.status === "dirty") status.dirty();
				parsedSet.add(element.value);
			}
			return {
				status: status.value,
				value: parsedSet
			};
		}
		const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
		if (ctx.common.async) return Promise.all(elements).then((elements$1) => finalizeSet(elements$1));
		else return finalizeSet(elements);
	}
	min(minSize, message) {
		return new ZodSet$1({
			...this._def,
			minSize: {
				value: minSize,
				message: errorUtil.toString(message)
			}
		});
	}
	max(maxSize, message) {
		return new ZodSet$1({
			...this._def,
			maxSize: {
				value: maxSize,
				message: errorUtil.toString(message)
			}
		});
	}
	size(size, message) {
		return this.min(size, message).max(size, message);
	}
	nonempty(message) {
		return this.min(1, message);
	}
};
ZodSet$1.create = (valueType, params) => {
	return new ZodSet$1({
		valueType,
		minSize: null,
		maxSize: null,
		typeName: ZodFirstPartyTypeKind.ZodSet,
		...processCreateParams(params)
	});
};
var ZodFunction$1 = class ZodFunction$1 extends ZodType$1 {
	constructor() {
		super(...arguments);
		this.validate = this.implement;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.function) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.function,
				received: ctx.parsedType
			});
			return INVALID;
		}
		function makeArgsIssue(args, error) {
			return makeIssue({
				data: args,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					en_default
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_arguments,
					argumentsError: error
				}
			});
		}
		function makeReturnsIssue(returns, error) {
			return makeIssue({
				data: returns,
				path: ctx.path,
				errorMaps: [
					ctx.common.contextualErrorMap,
					ctx.schemaErrorMap,
					getErrorMap(),
					en_default
				].filter((x) => !!x),
				issueData: {
					code: ZodIssueCode.invalid_return_type,
					returnTypeError: error
				}
			});
		}
		const params = { errorMap: ctx.common.contextualErrorMap };
		const fn = ctx.data;
		if (this._def.returns instanceof ZodPromise$1) {
			const me = this;
			return OK(async function(...args) {
				const error = new ZodError([]);
				const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
					error.addIssue(makeArgsIssue(args, e));
					throw error;
				});
				const result = await Reflect.apply(fn, this, parsedArgs);
				return await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
					error.addIssue(makeReturnsIssue(result, e));
					throw error;
				});
			});
		} else {
			const me = this;
			return OK(function(...args) {
				const parsedArgs = me._def.args.safeParse(args, params);
				if (!parsedArgs.success) throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
				const result = Reflect.apply(fn, this, parsedArgs.data);
				const parsedReturns = me._def.returns.safeParse(result, params);
				if (!parsedReturns.success) throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
				return parsedReturns.data;
			});
		}
	}
	parameters() {
		return this._def.args;
	}
	returnType() {
		return this._def.returns;
	}
	args(...items) {
		return new ZodFunction$1({
			...this._def,
			args: ZodTuple$1.create(items).rest(ZodUnknown$1.create())
		});
	}
	returns(returnType) {
		return new ZodFunction$1({
			...this._def,
			returns: returnType
		});
	}
	implement(func) {
		return this.parse(func);
	}
	strictImplement(func) {
		return this.parse(func);
	}
	static create(args, returns, params) {
		return new ZodFunction$1({
			args: args ? args : ZodTuple$1.create([]).rest(ZodUnknown$1.create()),
			returns: returns || ZodUnknown$1.create(),
			typeName: ZodFirstPartyTypeKind.ZodFunction,
			...processCreateParams(params)
		});
	}
};
var ZodLazy$1 = class extends ZodType$1 {
	get schema() {
		return this._def.getter();
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		return this._def.getter()._parse({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		});
	}
};
ZodLazy$1.create = (getter, params) => {
	return new ZodLazy$1({
		getter,
		typeName: ZodFirstPartyTypeKind.ZodLazy,
		...processCreateParams(params)
	});
};
var ZodLiteral$1 = class extends ZodType$1 {
	_parse(input) {
		if (input.data !== this._def.value) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_literal,
				expected: this._def.value
			});
			return INVALID;
		}
		return {
			status: "valid",
			value: input.data
		};
	}
	get value() {
		return this._def.value;
	}
};
ZodLiteral$1.create = (value, params) => {
	return new ZodLiteral$1({
		value,
		typeName: ZodFirstPartyTypeKind.ZodLiteral,
		...processCreateParams(params)
	});
};
function createZodEnum(values, params) {
	return new ZodEnum$1({
		values,
		typeName: ZodFirstPartyTypeKind.ZodEnum,
		...processCreateParams(params)
	});
}
var ZodEnum$1 = class ZodEnum$1 extends ZodType$1 {
	_parse(input) {
		if (typeof input.data !== "string") {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type
			});
			return INVALID;
		}
		if (!this._cache) this._cache = new Set(this._def.values);
		if (!this._cache.has(input.data)) {
			const ctx = this._getOrReturnCtx(input);
			const expectedValues = this._def.values;
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get options() {
		return this._def.values;
	}
	get enum() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	get Values() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	get Enum() {
		const enumValues = {};
		for (const val of this._def.values) enumValues[val] = val;
		return enumValues;
	}
	extract(values, newDef = this._def) {
		return ZodEnum$1.create(values, {
			...this._def,
			...newDef
		});
	}
	exclude(values, newDef = this._def) {
		return ZodEnum$1.create(this.options.filter((opt) => !values.includes(opt)), {
			...this._def,
			...newDef
		});
	}
};
ZodEnum$1.create = createZodEnum;
var ZodNativeEnum = class extends ZodType$1 {
	_parse(input) {
		const nativeEnumValues = util.getValidEnumValues(this._def.values);
		const ctx = this._getOrReturnCtx(input);
		if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				expected: util.joinValues(expectedValues),
				received: ctx.parsedType,
				code: ZodIssueCode.invalid_type
			});
			return INVALID;
		}
		if (!this._cache) this._cache = new Set(util.getValidEnumValues(this._def.values));
		if (!this._cache.has(input.data)) {
			const expectedValues = util.objectValues(nativeEnumValues);
			addIssueToContext(ctx, {
				received: ctx.data,
				code: ZodIssueCode.invalid_enum_value,
				options: expectedValues
			});
			return INVALID;
		}
		return OK(input.data);
	}
	get enum() {
		return this._def.values;
	}
};
ZodNativeEnum.create = (values, params) => {
	return new ZodNativeEnum({
		values,
		typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
		...processCreateParams(params)
	});
};
var ZodPromise$1 = class extends ZodType$1 {
	unwrap() {
		return this._def.type;
	}
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.promise,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return OK((ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data)).then((data) => {
			return this._def.type.parseAsync(data, {
				path: ctx.path,
				errorMap: ctx.common.contextualErrorMap
			});
		}));
	}
};
ZodPromise$1.create = (schema$6, params) => {
	return new ZodPromise$1({
		type: schema$6,
		typeName: ZodFirstPartyTypeKind.ZodPromise,
		...processCreateParams(params)
	});
};
var ZodEffects = class extends ZodType$1 {
	innerType() {
		return this._def.schema;
	}
	sourceType() {
		return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
	}
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		const effect = this._def.effect || null;
		const checkCtx = {
			addIssue: (arg) => {
				addIssueToContext(ctx, arg);
				if (arg.fatal) status.abort();
				else status.dirty();
			},
			get path() {
				return ctx.path;
			}
		};
		checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
		if (effect.type === "preprocess") {
			const processed = effect.transform(ctx.data, checkCtx);
			if (ctx.common.async) return Promise.resolve(processed).then(async (processed$1) => {
				if (status.value === "aborted") return INVALID;
				const result = await this._def.schema._parseAsync({
					data: processed$1,
					path: ctx.path,
					parent: ctx
				});
				if (result.status === "aborted") return INVALID;
				if (result.status === "dirty") return DIRTY(result.value);
				if (status.value === "dirty") return DIRTY(result.value);
				return result;
			});
			else {
				if (status.value === "aborted") return INVALID;
				const result = this._def.schema._parseSync({
					data: processed,
					path: ctx.path,
					parent: ctx
				});
				if (result.status === "aborted") return INVALID;
				if (result.status === "dirty") return DIRTY(result.value);
				if (status.value === "dirty") return DIRTY(result.value);
				return result;
			}
		}
		if (effect.type === "refinement") {
			const executeRefinement = (acc) => {
				const result = effect.refinement(acc, checkCtx);
				if (ctx.common.async) return Promise.resolve(result);
				if (result instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
				return acc;
			};
			if (ctx.common.async === false) {
				const inner = this._def.schema._parseSync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				executeRefinement(inner.value);
				return {
					status: status.value,
					value: inner.value
				};
			} else return this._def.schema._parseAsync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			}).then((inner) => {
				if (inner.status === "aborted") return INVALID;
				if (inner.status === "dirty") status.dirty();
				return executeRefinement(inner.value).then(() => {
					return {
						status: status.value,
						value: inner.value
					};
				});
			});
		}
		if (effect.type === "transform") if (ctx.common.async === false) {
			const base = this._def.schema._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
			if (!isValid(base)) return INVALID;
			const result = effect.transform(base.value, checkCtx);
			if (result instanceof Promise) throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
			return {
				status: status.value,
				value: result
			};
		} else return this._def.schema._parseAsync({
			data: ctx.data,
			path: ctx.path,
			parent: ctx
		}).then((base) => {
			if (!isValid(base)) return INVALID;
			return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
				status: status.value,
				value: result
			}));
		});
		util.assertNever(effect);
	}
};
ZodEffects.create = (schema$6, effect, params) => {
	return new ZodEffects({
		schema: schema$6,
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		effect,
		...processCreateParams(params)
	});
};
ZodEffects.createWithPreprocess = (preprocess$1, schema$6, params) => {
	return new ZodEffects({
		schema: schema$6,
		effect: {
			type: "preprocess",
			transform: preprocess$1
		},
		typeName: ZodFirstPartyTypeKind.ZodEffects,
		...processCreateParams(params)
	});
};
var ZodOptional$1 = class extends ZodType$1 {
	_parse(input) {
		if (this._getType(input) === ZodParsedType.undefined) return OK(void 0);
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodOptional$1.create = (type, params) => {
	return new ZodOptional$1({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodOptional,
		...processCreateParams(params)
	});
};
var ZodNullable$1 = class extends ZodType$1 {
	_parse(input) {
		if (this._getType(input) === ZodParsedType.null) return OK(null);
		return this._def.innerType._parse(input);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodNullable$1.create = (type, params) => {
	return new ZodNullable$1({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodNullable,
		...processCreateParams(params)
	});
};
var ZodDefault$1 = class extends ZodType$1 {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		let data = ctx.data;
		if (ctx.parsedType === ZodParsedType.undefined) data = this._def.defaultValue();
		return this._def.innerType._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
	}
	removeDefault() {
		return this._def.innerType;
	}
};
ZodDefault$1.create = (type, params) => {
	return new ZodDefault$1({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodDefault,
		defaultValue: typeof params.default === "function" ? params.default : () => params.default,
		...processCreateParams(params)
	});
};
var ZodCatch$1 = class extends ZodType$1 {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const newCtx = {
			...ctx,
			common: {
				...ctx.common,
				issues: []
			}
		};
		const result = this._def.innerType._parse({
			data: newCtx.data,
			path: newCtx.path,
			parent: { ...newCtx }
		});
		if (isAsync(result)) return result.then((result$1) => {
			return {
				status: "valid",
				value: result$1.status === "valid" ? result$1.value : this._def.catchValue({
					get error() {
						return new ZodError(newCtx.common.issues);
					},
					input: newCtx.data
				})
			};
		});
		else return {
			status: "valid",
			value: result.status === "valid" ? result.value : this._def.catchValue({
				get error() {
					return new ZodError(newCtx.common.issues);
				},
				input: newCtx.data
			})
		};
	}
	removeCatch() {
		return this._def.innerType;
	}
};
ZodCatch$1.create = (type, params) => {
	return new ZodCatch$1({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodCatch,
		catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
		...processCreateParams(params)
	});
};
var ZodNaN$1 = class extends ZodType$1 {
	_parse(input) {
		if (this._getType(input) !== ZodParsedType.nan) {
			const ctx = this._getOrReturnCtx(input);
			addIssueToContext(ctx, {
				code: ZodIssueCode.invalid_type,
				expected: ZodParsedType.nan,
				received: ctx.parsedType
			});
			return INVALID;
		}
		return {
			status: "valid",
			value: input.data
		};
	}
};
ZodNaN$1.create = (params) => {
	return new ZodNaN$1({
		typeName: ZodFirstPartyTypeKind.ZodNaN,
		...processCreateParams(params)
	});
};
const BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType$1 {
	_parse(input) {
		const { ctx } = this._processInputParams(input);
		const data = ctx.data;
		return this._def.type._parse({
			data,
			path: ctx.path,
			parent: ctx
		});
	}
	unwrap() {
		return this._def.type;
	}
};
var ZodPipeline = class ZodPipeline extends ZodType$1 {
	_parse(input) {
		const { status, ctx } = this._processInputParams(input);
		if (ctx.common.async) {
			const handleAsync = async () => {
				const inResult = await this._def.in._parseAsync({
					data: ctx.data,
					path: ctx.path,
					parent: ctx
				});
				if (inResult.status === "aborted") return INVALID;
				if (inResult.status === "dirty") {
					status.dirty();
					return DIRTY(inResult.value);
				} else return this._def.out._parseAsync({
					data: inResult.value,
					path: ctx.path,
					parent: ctx
				});
			};
			return handleAsync();
		} else {
			const inResult = this._def.in._parseSync({
				data: ctx.data,
				path: ctx.path,
				parent: ctx
			});
			if (inResult.status === "aborted") return INVALID;
			if (inResult.status === "dirty") {
				status.dirty();
				return {
					status: "dirty",
					value: inResult.value
				};
			} else return this._def.out._parseSync({
				data: inResult.value,
				path: ctx.path,
				parent: ctx
			});
		}
	}
	static create(a, b) {
		return new ZodPipeline({
			in: a,
			out: b,
			typeName: ZodFirstPartyTypeKind.ZodPipeline
		});
	}
};
var ZodReadonly$1 = class extends ZodType$1 {
	_parse(input) {
		const result = this._def.innerType._parse(input);
		const freeze = (data) => {
			if (isValid(data)) data.value = Object.freeze(data.value);
			return data;
		};
		return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
	}
	unwrap() {
		return this._def.innerType;
	}
};
ZodReadonly$1.create = (type, params) => {
	return new ZodReadonly$1({
		innerType: type,
		typeName: ZodFirstPartyTypeKind.ZodReadonly,
		...processCreateParams(params)
	});
};
function cleanParams(params, data) {
	const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
	return typeof p === "string" ? { message: p } : p;
}
function custom$1(check$1, _params = {}, fatal) {
	if (check$1) return ZodAny$1.create().superRefine((data, ctx) => {
		const r = check$1(data);
		if (r instanceof Promise) return r.then((r$1) => {
			if (!r$1) {
				const params = cleanParams(_params, data);
				const _fatal = params.fatal ?? fatal ?? true;
				ctx.addIssue({
					code: "custom",
					...params,
					fatal: _fatal
				});
			}
		});
		if (!r) {
			const params = cleanParams(_params, data);
			const _fatal = params.fatal ?? fatal ?? true;
			ctx.addIssue({
				code: "custom",
				...params,
				fatal: _fatal
			});
		}
	});
	return ZodAny$1.create();
}
const late = { object: ZodObject$1.lazycreate };
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind$1) {
	ZodFirstPartyTypeKind$1["ZodString"] = "ZodString";
	ZodFirstPartyTypeKind$1["ZodNumber"] = "ZodNumber";
	ZodFirstPartyTypeKind$1["ZodNaN"] = "ZodNaN";
	ZodFirstPartyTypeKind$1["ZodBigInt"] = "ZodBigInt";
	ZodFirstPartyTypeKind$1["ZodBoolean"] = "ZodBoolean";
	ZodFirstPartyTypeKind$1["ZodDate"] = "ZodDate";
	ZodFirstPartyTypeKind$1["ZodSymbol"] = "ZodSymbol";
	ZodFirstPartyTypeKind$1["ZodUndefined"] = "ZodUndefined";
	ZodFirstPartyTypeKind$1["ZodNull"] = "ZodNull";
	ZodFirstPartyTypeKind$1["ZodAny"] = "ZodAny";
	ZodFirstPartyTypeKind$1["ZodUnknown"] = "ZodUnknown";
	ZodFirstPartyTypeKind$1["ZodNever"] = "ZodNever";
	ZodFirstPartyTypeKind$1["ZodVoid"] = "ZodVoid";
	ZodFirstPartyTypeKind$1["ZodArray"] = "ZodArray";
	ZodFirstPartyTypeKind$1["ZodObject"] = "ZodObject";
	ZodFirstPartyTypeKind$1["ZodUnion"] = "ZodUnion";
	ZodFirstPartyTypeKind$1["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
	ZodFirstPartyTypeKind$1["ZodIntersection"] = "ZodIntersection";
	ZodFirstPartyTypeKind$1["ZodTuple"] = "ZodTuple";
	ZodFirstPartyTypeKind$1["ZodRecord"] = "ZodRecord";
	ZodFirstPartyTypeKind$1["ZodMap"] = "ZodMap";
	ZodFirstPartyTypeKind$1["ZodSet"] = "ZodSet";
	ZodFirstPartyTypeKind$1["ZodFunction"] = "ZodFunction";
	ZodFirstPartyTypeKind$1["ZodLazy"] = "ZodLazy";
	ZodFirstPartyTypeKind$1["ZodLiteral"] = "ZodLiteral";
	ZodFirstPartyTypeKind$1["ZodEnum"] = "ZodEnum";
	ZodFirstPartyTypeKind$1["ZodEffects"] = "ZodEffects";
	ZodFirstPartyTypeKind$1["ZodNativeEnum"] = "ZodNativeEnum";
	ZodFirstPartyTypeKind$1["ZodOptional"] = "ZodOptional";
	ZodFirstPartyTypeKind$1["ZodNullable"] = "ZodNullable";
	ZodFirstPartyTypeKind$1["ZodDefault"] = "ZodDefault";
	ZodFirstPartyTypeKind$1["ZodCatch"] = "ZodCatch";
	ZodFirstPartyTypeKind$1["ZodPromise"] = "ZodPromise";
	ZodFirstPartyTypeKind$1["ZodBranded"] = "ZodBranded";
	ZodFirstPartyTypeKind$1["ZodPipeline"] = "ZodPipeline";
	ZodFirstPartyTypeKind$1["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
const instanceOfType = (cls, params = { message: `Input not instance of ${cls.name}` }) => custom$1((data) => data instanceof cls, params);
const stringType = ZodString$1.create;
const numberType = ZodNumber$1.create;
const nanType = ZodNaN$1.create;
const bigIntType = ZodBigInt$1.create;
const booleanType = ZodBoolean$1.create;
const dateType = ZodDate$1.create;
const symbolType = ZodSymbol$1.create;
const undefinedType = ZodUndefined$1.create;
const nullType = ZodNull$1.create;
const anyType = ZodAny$1.create;
const unknownType = ZodUnknown$1.create;
const neverType = ZodNever$1.create;
const voidType = ZodVoid$1.create;
const arrayType = ZodArray$1.create;
const objectType = ZodObject$1.create;
const strictObjectType = ZodObject$1.strictCreate;
const unionType = ZodUnion$1.create;
const discriminatedUnionType = ZodDiscriminatedUnion$1.create;
const intersectionType = ZodIntersection$1.create;
const tupleType = ZodTuple$1.create;
const recordType = ZodRecord$1.create;
const mapType = ZodMap$1.create;
const setType = ZodSet$1.create;
const functionType = ZodFunction$1.create;
const lazyType = ZodLazy$1.create;
const literalType = ZodLiteral$1.create;
const enumType = ZodEnum$1.create;
const nativeEnumType = ZodNativeEnum.create;
const promiseType = ZodPromise$1.create;
const effectsType = ZodEffects.create;
const optionalType = ZodOptional$1.create;
const nullableType = ZodNullable$1.create;
const preprocessType = ZodEffects.createWithPreprocess;
const pipelineType = ZodPipeline.create;
const ostring = () => stringType().optional();
const onumber = () => numberType().optional();
const oboolean = () => booleanType().optional();
const coerce$1 = {
	string: ((arg) => ZodString$1.create({
		...arg,
		coerce: true
	})),
	number: ((arg) => ZodNumber$1.create({
		...arg,
		coerce: true
	})),
	boolean: ((arg) => ZodBoolean$1.create({
		...arg,
		coerce: true
	})),
	bigint: ((arg) => ZodBigInt$1.create({
		...arg,
		coerce: true
	})),
	date: ((arg) => ZodDate$1.create({
		...arg,
		coerce: true
	}))
};
const NEVER = INVALID;

//#endregion
//#region node_modules/zod/v3/external.js
var external_exports = /* @__PURE__ */ __export({
	BRAND: () => BRAND,
	DIRTY: () => DIRTY,
	EMPTY_PATH: () => EMPTY_PATH,
	INVALID: () => INVALID,
	NEVER: () => NEVER,
	OK: () => OK,
	ParseStatus: () => ParseStatus,
	Schema: () => ZodType$1,
	ZodAny: () => ZodAny$1,
	ZodArray: () => ZodArray$1,
	ZodBigInt: () => ZodBigInt$1,
	ZodBoolean: () => ZodBoolean$1,
	ZodBranded: () => ZodBranded,
	ZodCatch: () => ZodCatch$1,
	ZodDate: () => ZodDate$1,
	ZodDefault: () => ZodDefault$1,
	ZodDiscriminatedUnion: () => ZodDiscriminatedUnion$1,
	ZodEffects: () => ZodEffects,
	ZodEnum: () => ZodEnum$1,
	ZodError: () => ZodError,
	ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
	ZodFunction: () => ZodFunction$1,
	ZodIntersection: () => ZodIntersection$1,
	ZodIssueCode: () => ZodIssueCode,
	ZodLazy: () => ZodLazy$1,
	ZodLiteral: () => ZodLiteral$1,
	ZodMap: () => ZodMap$1,
	ZodNaN: () => ZodNaN$1,
	ZodNativeEnum: () => ZodNativeEnum,
	ZodNever: () => ZodNever$1,
	ZodNull: () => ZodNull$1,
	ZodNullable: () => ZodNullable$1,
	ZodNumber: () => ZodNumber$1,
	ZodObject: () => ZodObject$1,
	ZodOptional: () => ZodOptional$1,
	ZodParsedType: () => ZodParsedType,
	ZodPipeline: () => ZodPipeline,
	ZodPromise: () => ZodPromise$1,
	ZodReadonly: () => ZodReadonly$1,
	ZodRecord: () => ZodRecord$1,
	ZodSchema: () => ZodType$1,
	ZodSet: () => ZodSet$1,
	ZodString: () => ZodString$1,
	ZodSymbol: () => ZodSymbol$1,
	ZodTransformer: () => ZodEffects,
	ZodTuple: () => ZodTuple$1,
	ZodType: () => ZodType$1,
	ZodUndefined: () => ZodUndefined$1,
	ZodUnion: () => ZodUnion$1,
	ZodUnknown: () => ZodUnknown$1,
	ZodVoid: () => ZodVoid$1,
	addIssueToContext: () => addIssueToContext,
	any: () => anyType,
	array: () => arrayType,
	bigint: () => bigIntType,
	boolean: () => booleanType,
	coerce: () => coerce$1,
	custom: () => custom$1,
	date: () => dateType,
	datetimeRegex: () => datetimeRegex,
	defaultErrorMap: () => en_default,
	discriminatedUnion: () => discriminatedUnionType,
	effect: () => effectsType,
	enum: () => enumType,
	function: () => functionType,
	getErrorMap: () => getErrorMap,
	getParsedType: () => getParsedType,
	instanceof: () => instanceOfType,
	intersection: () => intersectionType,
	isAborted: () => isAborted,
	isAsync: () => isAsync,
	isDirty: () => isDirty,
	isValid: () => isValid,
	late: () => late,
	lazy: () => lazyType,
	literal: () => literalType,
	makeIssue: () => makeIssue,
	map: () => mapType,
	nan: () => nanType,
	nativeEnum: () => nativeEnumType,
	never: () => neverType,
	null: () => nullType,
	nullable: () => nullableType,
	number: () => numberType,
	object: () => objectType,
	objectUtil: () => objectUtil,
	oboolean: () => oboolean,
	onumber: () => onumber,
	optional: () => optionalType,
	ostring: () => ostring,
	pipeline: () => pipelineType,
	preprocess: () => preprocessType,
	promise: () => promiseType,
	quotelessJson: () => quotelessJson,
	record: () => recordType,
	set: () => setType,
	setErrorMap: () => setErrorMap,
	strictObject: () => strictObjectType,
	string: () => stringType,
	symbol: () => symbolType,
	transformer: () => effectsType,
	tuple: () => tupleType,
	undefined: () => undefinedType,
	union: () => unionType,
	unknown: () => unknownType,
	util: () => util,
	void: () => voidType
});

//#endregion
//#region node_modules/@hono/zod-openapi/dist/index.js
var OpenAPIHono = class _OpenAPIHono extends Hono {
	openAPIRegistry;
	defaultHook;
	constructor(init) {
		super(init);
		this.openAPIRegistry = new import_dist$4.OpenAPIRegistry();
		this.defaultHook = init?.defaultHook;
	}
	/**
	*
	* @param {RouteConfig} route - The route definition which you create with `createRoute()`.
	* @param {Handler} handler - The handler. If you want to return a JSON object, you should specify the status code with `c.json()`.
	* @param {Hook} hook - Optional. The hook method defines what it should do after validation.
	* @example
	* app.openapi(
	*   route,
	*   (c) => {
	*     // ...
	*     return c.json(
	*       {
	*         age: 20,
	*         name: 'Young man',
	*       },
	*       200 // You should specify the status code even if it's 200.
	*     )
	*   },
	*  (result, c) => {
	*    if (!result.success) {
	*      return c.json(
	*        {
	*          code: 400,
	*          message: 'Custom Message',
	*        },
	*        400
	*      )
	*    }
	*  }
	*)
	*/
	openapi = ({ middleware: routeMiddleware, hide, ...route }, handler, hook = this.defaultHook) => {
		if (!hide) this.openAPIRegistry.registerPath(route);
		const validators = [];
		if (route.request?.query) {
			const validator$1 = zValidator("query", route.request.query, hook);
			validators.push(validator$1);
		}
		if (route.request?.params) {
			const validator$1 = zValidator("param", route.request.params, hook);
			validators.push(validator$1);
		}
		if (route.request?.headers) {
			const validator$1 = zValidator("header", route.request.headers, hook);
			validators.push(validator$1);
		}
		if (route.request?.cookies) {
			const validator$1 = zValidator("cookie", route.request.cookies, hook);
			validators.push(validator$1);
		}
		const bodyContent = route.request?.body?.content;
		if (bodyContent) for (const mediaType of Object.keys(bodyContent)) {
			if (!bodyContent[mediaType]) continue;
			const schema$6 = bodyContent[mediaType]["schema"];
			if (!(schema$6 instanceof ZodType$1)) continue;
			if (isJSONContentType(mediaType)) {
				const validator$1 = zValidator("json", schema$6, hook);
				if (route.request?.body?.required) validators.push(validator$1);
				else {
					const mw = async (c, next) => {
						if (c.req.header("content-type")) {
							if (isJSONContentType(c.req.header("content-type"))) return await validator$1(c, next);
						}
						c.req.addValidatedData("json", {});
						await next();
					};
					validators.push(mw);
				}
			}
			if (isFormContentType(mediaType)) {
				const validator$1 = zValidator("form", schema$6, hook);
				if (route.request?.body?.required) validators.push(validator$1);
				else {
					const mw = async (c, next) => {
						if (c.req.header("content-type")) {
							if (isFormContentType(c.req.header("content-type"))) return await validator$1(c, next);
						}
						c.req.addValidatedData("form", {});
						await next();
					};
					validators.push(mw);
				}
			}
		}
		const middleware = routeMiddleware ? Array.isArray(routeMiddleware) ? routeMiddleware : [routeMiddleware] : [];
		this.on([route.method], route.path.replaceAll(/\/{(.+?)}/g, "/:$1"), ...middleware, ...validators, handler);
		return this;
	};
	getOpenAPIDocument = (config$1) => {
		const document = new import_dist$4.OpenApiGeneratorV3(this.openAPIRegistry.definitions).generateDocument(config$1);
		return this._basePath ? addBasePathToDocument(document, this._basePath) : document;
	};
	getOpenAPI31Document = (config$1) => {
		const document = new import_dist$4.OpenApiGeneratorV31(this.openAPIRegistry.definitions).generateDocument(config$1);
		return this._basePath ? addBasePathToDocument(document, this._basePath) : document;
	};
	doc = (path$2, configure) => {
		return this.get(path$2, (c) => {
			const config$1 = typeof configure === "function" ? configure(c) : configure;
			try {
				const document = this.getOpenAPIDocument(config$1);
				return c.json(document);
			} catch (e) {
				return c.json(e, 500);
			}
		});
	};
	doc31 = (path$2, configure) => {
		return this.get(path$2, (c) => {
			const config$1 = typeof configure === "function" ? configure(c) : configure;
			try {
				const document = this.getOpenAPI31Document(config$1);
				return c.json(document);
			} catch (e) {
				return c.json(e, 500);
			}
		});
	};
	route(path$2, app$1) {
		const pathForOpenAPI = path$2.replaceAll(/:([^\/]+)/g, "{$1}");
		super.route(path$2, app$1);
		if (!(app$1 instanceof _OpenAPIHono)) return this;
		app$1.openAPIRegistry.definitions.forEach((def) => {
			switch (def.type) {
				case "component": return this.openAPIRegistry.registerComponent(def.componentType, def.name, def.component);
				case "route":
					this.openAPIRegistry.registerPath({
						...def.route,
						path: mergePath(pathForOpenAPI, app$1._basePath.replaceAll(/:([^\/]+)/g, "{$1}"), def.route.path)
					});
					return;
				case "webhook":
					this.openAPIRegistry.registerWebhook({
						...def.webhook,
						path: mergePath(pathForOpenAPI, app$1._basePath.replaceAll(/:([^\/]+)/g, "{$1}"), def.webhook.path)
					});
					return;
				case "schema": return this.openAPIRegistry.register(def.schema._def.openapi._internal.refId, def.schema);
				case "parameter": return this.openAPIRegistry.registerParameter(def.schema._def.openapi._internal.refId, def.schema);
				default: {
					const errorIfNotExhaustive = def;
					throw new Error(`Unknown registry type: ${errorIfNotExhaustive}`);
				}
			}
		});
		return this;
	}
	basePath(path$2) {
		return new _OpenAPIHono({
			...super.basePath(path$2),
			defaultHook: this.defaultHook
		});
	}
};
var createRoute = (routeConfig) => {
	const route = {
		...routeConfig,
		getRoutingPath() {
			return routeConfig.path.replaceAll(/\/{(.+?)}/g, "/:$1");
		}
	};
	return Object.defineProperty(route, "getRoutingPath", { enumerable: false });
};
(0, import_dist$4.extendZodWithOpenApi)(external_exports);
function addBasePathToDocument(document, basePath) {
	const updatedPaths = {};
	Object.keys(document.paths).forEach((path$2) => {
		updatedPaths[mergePath(basePath.replaceAll(/:([^\/]+)/g, "{$1}"), path$2)] = document.paths[path$2];
	});
	return {
		...document,
		paths: updatedPaths
	};
}
function isJSONContentType(contentType) {
	return /^application\/([a-z-\.]+\+)?json/.test(contentType);
}
function isFormContentType(contentType) {
	return contentType.startsWith("multipart/form-data") || contentType.startsWith("application/x-www-form-urlencoded");
}

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/core.js
var _a$1;
function $constructor(name, initializer$2, params) {
	function init(inst, def) {
		if (!inst._zod) Object.defineProperty(inst, "_zod", {
			value: {
				def,
				constr: _,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: false
		});
		if (inst._zod.traits.has(name)) return;
		inst._zod.traits.add(name);
		initializer$2(inst, def);
		const proto = _.prototype;
		const keys = Object.keys(proto);
		for (let i = 0; i < keys.length; i++) {
			const k = keys[i];
			if (!(k in inst)) inst[k] = proto[k].bind(inst);
		}
	}
	const Parent = params?.Parent ?? Object;
	class Definition extends Parent {}
	Object.defineProperty(Definition, "name", { value: name });
	function _(def) {
		var _a$2;
		const inst = params?.Parent ? new Definition() : this;
		init(inst, def);
		(_a$2 = inst._zod).deferred ?? (_a$2.deferred = []);
		for (const fn of inst._zod.deferred) fn();
		return inst;
	}
	Object.defineProperty(_, "init", { value: init });
	Object.defineProperty(_, Symbol.hasInstance, { value: (inst) => {
		if (params?.Parent && inst instanceof params.Parent) return true;
		return inst?._zod?.traits?.has(name);
	} });
	Object.defineProperty(_, "name", { value: name });
	return _;
}
var $ZodAsyncError = class extends Error {
	constructor() {
		super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
	}
};
var $ZodEncodeError = class extends Error {
	constructor(name) {
		super(`Encountered unidirectional transform during encode: ${name}`);
		this.name = "ZodEncodeError";
	}
};
(_a$1 = globalThis).__zod_globalConfig ?? (_a$1.__zod_globalConfig = {});
const globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
	if (newConfig) Object.assign(globalConfig, newConfig);
	return globalConfig;
}

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/util.js
function getEnumValues(entries) {
	const numericValues = Object.values(entries).filter((v) => typeof v === "number");
	return Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
}
function jsonStringifyReplacer(_, value) {
	if (typeof value === "bigint") return value.toString();
	return value;
}
function cached(getter) {
	return { get value() {
		{
			const value = getter();
			Object.defineProperty(this, "value", { value });
			return value;
		}
		throw new Error("cached value already set");
	} };
}
function nullish$1(input) {
	return input === null || input === void 0;
}
function cleanRegex(source) {
	const start = source.startsWith("^") ? 1 : 0;
	const end = source.endsWith("$") ? source.length - 1 : source.length;
	return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
	const ratio = val / step;
	const roundedRatio = Math.round(ratio);
	const tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
	if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
	return ratio - roundedRatio;
}
const EVALUATING = /* @__PURE__ */ Symbol("evaluating");
function defineLazy(object$1, key, getter) {
	let value = void 0;
	Object.defineProperty(object$1, key, {
		get() {
			if (value === EVALUATING) return;
			if (value === void 0) {
				value = EVALUATING;
				value = getter();
			}
			return value;
		},
		set(v) {
			Object.defineProperty(object$1, key, { value: v });
		},
		configurable: true
	});
}
function assignProp(target, prop, value) {
	Object.defineProperty(target, prop, {
		value,
		writable: true,
		enumerable: true,
		configurable: true
	});
}
function mergeDefs(...defs) {
	const mergedDescriptors = {};
	for (const def of defs) {
		const descriptors = Object.getOwnPropertyDescriptors(def);
		Object.assign(mergedDescriptors, descriptors);
	}
	return Object.defineProperties({}, mergedDescriptors);
}
function esc(str) {
	return JSON.stringify(str);
}
function slugify$1(input) {
	return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {};
function isObject(data) {
	return typeof data === "object" && data !== null && !Array.isArray(data);
}
const allowsEval = /* @__PURE__ */ cached(() => {
	if (globalConfig.jitless) return false;
	if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) return false;
	try {
		new Function("");
		return true;
	} catch (_) {
		return false;
	}
});
function isPlainObject$1(o) {
	if (isObject(o) === false) return false;
	const ctor = o.constructor;
	if (ctor === void 0) return true;
	if (typeof ctor !== "function") return true;
	const prot = ctor.prototype;
	if (isObject(prot) === false) return false;
	if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) return false;
	return true;
}
function shallowClone(o) {
	if (isPlainObject$1(o)) return { ...o };
	if (Array.isArray(o)) return [...o];
	if (o instanceof Map) return new Map(o);
	if (o instanceof Set) return new Set(o);
	return o;
}
const propertyKeyTypes = /* @__PURE__ */ new Set([
	"string",
	"number",
	"symbol"
]);
const primitiveTypes = /* @__PURE__ */ new Set([
	"string",
	"number",
	"bigint",
	"boolean",
	"symbol",
	"undefined"
]);
function escapeRegex(str) {
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
	const cl = new inst._zod.constr(def ?? inst._zod.def);
	if (!def || params?.parent) cl._zod.parent = inst;
	return cl;
}
function normalizeParams(_params) {
	const params = _params;
	if (!params) return {};
	if (typeof params === "string") return { error: () => params };
	if (params?.message !== void 0) {
		if (params?.error !== void 0) throw new Error("Cannot specify both `message` and `error` params");
		params.error = params.message;
	}
	delete params.message;
	if (typeof params.error === "string") return {
		...params,
		error: () => params.error
	};
	return params;
}
function optionalKeys(shape) {
	return Object.keys(shape).filter((k) => {
		return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
	});
}
const NUMBER_FORMAT_RANGES = {
	safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
const BIGINT_FORMAT_RANGES = {
	int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
	uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function pick(schema$6, mask) {
	const currDef = schema$6._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
	return clone(schema$6, mergeDefs(schema$6._zod.def, {
		get shape() {
			const newShape = {};
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				newShape[key] = currDef.shape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function omit(schema$6, mask) {
	const currDef = schema$6._zod.def;
	const checks = currDef.checks;
	if (checks && checks.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
	return clone(schema$6, mergeDefs(schema$6._zod.def, {
		get shape() {
			const newShape = { ...schema$6._zod.def.shape };
			for (const key in mask) {
				if (!(key in currDef.shape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				delete newShape[key];
			}
			assignProp(this, "shape", newShape);
			return newShape;
		},
		checks: []
	}));
}
function extend(schema$6, shape) {
	if (!isPlainObject$1(shape)) throw new Error("Invalid input to extend: expected a plain object");
	const checks = schema$6._zod.def.checks;
	if (checks && checks.length > 0) {
		const existingShape = schema$6._zod.def.shape;
		for (const key in shape) if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return clone(schema$6, mergeDefs(schema$6._zod.def, { get shape() {
		const _shape = {
			...schema$6._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function safeExtend(schema$6, shape) {
	if (!isPlainObject$1(shape)) throw new Error("Invalid input to safeExtend: expected a plain object");
	return clone(schema$6, mergeDefs(schema$6._zod.def, { get shape() {
		const _shape = {
			...schema$6._zod.def.shape,
			...shape
		};
		assignProp(this, "shape", _shape);
		return _shape;
	} }));
}
function merge$5(a, b) {
	if (a._zod.def.checks?.length) throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return clone(a, mergeDefs(a._zod.def, {
		get shape() {
			const _shape = {
				...a._zod.def.shape,
				...b._zod.def.shape
			};
			assignProp(this, "shape", _shape);
			return _shape;
		},
		get catchall() {
			return b._zod.def.catchall;
		},
		checks: b._zod.def.checks ?? []
	}));
}
function partial(Class, schema$6, mask) {
	const checks = schema$6._zod.def.checks;
	if (checks && checks.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
	return clone(schema$6, mergeDefs(schema$6._zod.def, {
		get shape() {
			const oldShape = schema$6._zod.def.shape;
			const shape = { ...oldShape };
			if (mask) for (const key in mask) {
				if (!(key in oldShape)) throw new Error(`Unrecognized key: "${key}"`);
				if (!mask[key]) continue;
				shape[key] = Class ? new Class({
					type: "optional",
					innerType: oldShape[key]
				}) : oldShape[key];
			}
			else for (const key in oldShape) shape[key] = Class ? new Class({
				type: "optional",
				innerType: oldShape[key]
			}) : oldShape[key];
			assignProp(this, "shape", shape);
			return shape;
		},
		checks: []
	}));
}
function required(Class, schema$6, mask) {
	return clone(schema$6, mergeDefs(schema$6._zod.def, { get shape() {
		const oldShape = schema$6._zod.def.shape;
		const shape = { ...oldShape };
		if (mask) for (const key in mask) {
			if (!(key in shape)) throw new Error(`Unrecognized key: "${key}"`);
			if (!mask[key]) continue;
			shape[key] = new Class({
				type: "nonoptional",
				innerType: oldShape[key]
			});
		}
		else for (const key in oldShape) shape[key] = new Class({
			type: "nonoptional",
			innerType: oldShape[key]
		});
		assignProp(this, "shape", shape);
		return shape;
	} }));
}
function aborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue !== true) return true;
	return false;
}
function explicitlyAborted(x, startIndex = 0) {
	if (x.aborted === true) return true;
	for (let i = startIndex; i < x.issues.length; i++) if (x.issues[i]?.continue === false) return true;
	return false;
}
function prefixIssues(path$2, issues) {
	return issues.map((iss) => {
		var _a$2;
		(_a$2 = iss).path ?? (_a$2.path = []);
		iss.path.unshift(path$2);
		return iss;
	});
}
function unwrapMessage(message) {
	return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config$1) {
	const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config$1.customError?.(iss)) ?? unwrapMessage(config$1.localeError?.(iss)) ?? "Invalid input";
	const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
	rest.path ?? (rest.path = []);
	rest.message = message;
	if (ctx?.reportInput) rest.input = _input;
	return rest;
}
function getSizableOrigin(input) {
	if (input instanceof Set) return "set";
	if (input instanceof Map) return "map";
	if (input instanceof File) return "file";
	return "unknown";
}
function getLengthableOrigin(input) {
	if (Array.isArray(input)) return "array";
	if (typeof input === "string") return "string";
	return "unknown";
}
function issue(...args) {
	const [iss, input, inst] = args;
	if (typeof iss === "string") return {
		message: iss,
		code: "custom",
		input,
		inst
	};
	return { ...iss };
}

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/errors.js
const initializer$1 = (inst, def) => {
	inst.name = "$ZodError";
	Object.defineProperty(inst, "_zod", {
		value: inst._zod,
		enumerable: false
	});
	Object.defineProperty(inst, "issues", {
		value: def,
		enumerable: false
	});
	inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
	Object.defineProperty(inst, "toString", {
		value: () => inst.message,
		enumerable: false
	});
};
const $ZodError = $constructor("$ZodError", initializer$1);
const $ZodRealError = $constructor("$ZodError", initializer$1, { Parent: Error });
function flattenError(error, mapper = (issue$1) => issue$1.message) {
	const fieldErrors = {};
	const formErrors = [];
	for (const sub of error.issues) if (sub.path.length > 0) {
		fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
		fieldErrors[sub.path[0]].push(mapper(sub));
	} else formErrors.push(mapper(sub));
	return {
		formErrors,
		fieldErrors
	};
}
function formatError(error, mapper = (issue$1) => issue$1.message) {
	const fieldErrors = { _errors: [] };
	const processError = (error$1, path$2 = []) => {
		for (const issue$1 of error$1.issues) if (issue$1.code === "invalid_union" && issue$1.errors.length) issue$1.errors.map((issues) => processError({ issues }, [...path$2, ...issue$1.path]));
		else if (issue$1.code === "invalid_key") processError({ issues: issue$1.issues }, [...path$2, ...issue$1.path]);
		else if (issue$1.code === "invalid_element") processError({ issues: issue$1.issues }, [...path$2, ...issue$1.path]);
		else {
			const fullpath = [...path$2, ...issue$1.path];
			if (fullpath.length === 0) fieldErrors._errors.push(mapper(issue$1));
			else {
				let curr = fieldErrors;
				let i = 0;
				while (i < fullpath.length) {
					const el = fullpath[i];
					if (!(i === fullpath.length - 1)) curr[el] = curr[el] || { _errors: [] };
					else {
						curr[el] = curr[el] || { _errors: [] };
						curr[el]._errors.push(mapper(issue$1));
					}
					curr = curr[el];
					i++;
				}
			}
		}
	};
	processError(error);
	return fieldErrors;
}

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/parse.js
const _parse = (_Err) => (schema$6, value, _ctx, _params) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema$6._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	if (result.issues.length) {
		const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, _params?.callee);
		throw e;
	}
	return result.value;
};
const parse$4 = /* @__PURE__ */ _parse($ZodRealError);
const _parseAsync = (_Err) => async (schema$6, value, _ctx, params) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema$6._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	if (result.issues.length) {
		const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
		captureStackTrace(e, params?.callee);
		throw e;
	}
	return result.value;
};
const parseAsync$1 = /* @__PURE__ */ _parseAsync($ZodRealError);
const _safeParse = (_Err) => (schema$6, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: false
	} : { async: false };
	const result = schema$6._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) throw new $ZodAsyncError();
	return result.issues.length ? {
		success: false,
		error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
const safeParse$1 = /* @__PURE__ */ _safeParse($ZodRealError);
const _safeParseAsync = (_Err) => async (schema$6, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		async: true
	} : { async: true };
	let result = schema$6._zod.run({
		value,
		issues: []
	}, ctx);
	if (result instanceof Promise) result = await result;
	return result.issues.length ? {
		success: false,
		error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	} : {
		success: true,
		data: result.value
	};
};
const safeParseAsync$1 = /* @__PURE__ */ _safeParseAsync($ZodRealError);
const _encode = (_Err) => (schema$6, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _parse(_Err)(schema$6, value, ctx);
};
const encode$2 = /* @__PURE__ */ _encode($ZodRealError);
const _decode = (_Err) => (schema$6, value, _ctx) => {
	return _parse(_Err)(schema$6, value, _ctx);
};
const decode$1 = /* @__PURE__ */ _decode($ZodRealError);
const _encodeAsync = (_Err) => async (schema$6, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _parseAsync(_Err)(schema$6, value, ctx);
};
const encodeAsync$1 = /* @__PURE__ */ _encodeAsync($ZodRealError);
const _decodeAsync = (_Err) => async (schema$6, value, _ctx) => {
	return _parseAsync(_Err)(schema$6, value, _ctx);
};
const decodeAsync$1 = /* @__PURE__ */ _decodeAsync($ZodRealError);
const _safeEncode = (_Err) => (schema$6, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParse(_Err)(schema$6, value, ctx);
};
const safeEncode$1 = /* @__PURE__ */ _safeEncode($ZodRealError);
const _safeDecode = (_Err) => (schema$6, value, _ctx) => {
	return _safeParse(_Err)(schema$6, value, _ctx);
};
const safeDecode$1 = /* @__PURE__ */ _safeDecode($ZodRealError);
const _safeEncodeAsync = (_Err) => async (schema$6, value, _ctx) => {
	const ctx = _ctx ? {
		..._ctx,
		direction: "backward"
	} : { direction: "backward" };
	return _safeParseAsync(_Err)(schema$6, value, ctx);
};
const safeEncodeAsync$1 = /* @__PURE__ */ _safeEncodeAsync($ZodRealError);
const _safeDecodeAsync = (_Err) => async (schema$6, value, _ctx) => {
	return _safeParseAsync(_Err)(schema$6, value, _ctx);
};
const safeDecodeAsync$1 = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/regexes.js
var regexes_exports = /* @__PURE__ */ __export({
	base64: () => base64$1,
	base64url: () => base64url$1,
	bigint: () => bigint$1,
	boolean: () => boolean$2,
	browserEmail: () => browserEmail,
	cidrv4: () => cidrv4$1,
	cidrv6: () => cidrv6$1,
	cuid: () => cuid$1,
	cuid2: () => cuid2$1,
	date: () => date$2,
	datetime: () => datetime$1,
	domain: () => domain,
	duration: () => duration$1,
	e164: () => e164$1,
	email: () => email$1,
	emoji: () => emoji$1,
	extendedDuration: () => extendedDuration,
	guid: () => guid$1,
	hex: () => hex$1,
	hostname: () => hostname$1,
	html5Email: () => html5Email,
	httpProtocol: () => httpProtocol,
	idnEmail: () => idnEmail,
	integer: () => integer,
	ipv4: () => ipv4$1,
	ipv6: () => ipv6$1,
	ksuid: () => ksuid$1,
	lowercase: () => lowercase,
	mac: () => mac$1,
	md5_base64: () => md5_base64,
	md5_base64url: () => md5_base64url,
	md5_hex: () => md5_hex,
	nanoid: () => nanoid$1,
	null: () => _null$5,
	number: () => number$2,
	rfc5322Email: () => rfc5322Email,
	sha1_base64: () => sha1_base64,
	sha1_base64url: () => sha1_base64url,
	sha1_hex: () => sha1_hex,
	sha256_base64: () => sha256_base64,
	sha256_base64url: () => sha256_base64url,
	sha256_hex: () => sha256_hex,
	sha384_base64: () => sha384_base64,
	sha384_base64url: () => sha384_base64url,
	sha384_hex: () => sha384_hex,
	sha512_base64: () => sha512_base64,
	sha512_base64url: () => sha512_base64url,
	sha512_hex: () => sha512_hex,
	string: () => string$6,
	time: () => time$1,
	ulid: () => ulid$1,
	undefined: () => _undefined$2,
	unicodeEmail: () => unicodeEmail,
	uppercase: () => uppercase,
	uuid: () => uuid$1,
	uuid4: () => uuid4,
	uuid6: () => uuid6,
	uuid7: () => uuid7,
	xid: () => xid$1
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
const cuid$1 = /^[cC][0-9a-z]{6,}$/;
const cuid2$1 = /^[0-9a-z]+$/;
const ulid$1 = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
const xid$1 = /^[0-9a-vA-V]{20}$/;
const ksuid$1 = /^[A-Za-z0-9]{27}$/;
const nanoid$1 = /^[a-zA-Z0-9_-]{21}$/;
/** ISO 8601-1 duration regex. Does not support the 8601-2 extensions like negative durations or fractional/negative components. */
const duration$1 = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
/** Implements ISO 8601-2 extensions like explicit +- prefixes, mixing weeks with other units, and fractional/negative components. */
const extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
/** A regex for any UUID-like identifier: 8-4-4-4-12 hex pattern */
const guid$1 = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
/** Returns a regex for validating an RFC 9562/4122 UUID.
*
* @param version Optionally specify a version 1-8. If no version is specified, all versions are supported. */
const uuid$1 = (version$1) => {
	if (!version$1) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
	return /* @__PURE__ */ new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version$1}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
const uuid4 = /* @__PURE__ */ uuid$1(4);
const uuid6 = /* @__PURE__ */ uuid$1(6);
const uuid7 = /* @__PURE__ */ uuid$1(7);
/** Practical email validation */
const email$1 = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
/** Equivalent to the HTML5 input[type=email] validation implemented by browsers. Source: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email */
const html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
/** The classic emailregex.com regex for RFC 5322-compliant emails */
const rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/** A loose regex that allows Unicode characters, enforces length limits, and that's about it. */
const unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
const idnEmail = unicodeEmail;
const browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const _emoji$1 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
function emoji$1() {
	return new RegExp(_emoji$1, "u");
}
const ipv4$1 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6$1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
const mac$1 = (delimiter) => {
	const escapedDelim = escapeRegex(delimiter ?? ":");
	return /* @__PURE__ */ new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
};
const cidrv4$1 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
const cidrv6$1 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const base64$1 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
const base64url$1 = /^[A-Za-z0-9_-]*$/;
const hostname$1 = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
const domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
const httpProtocol = /^https?$/;
const e164$1 = /^\+[1-9]\d{6,14}$/;
const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
const date$2 = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
function timeSource(args) {
	const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
	return typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function time$1(args) {
	return /* @__PURE__ */ new RegExp(`^${timeSource(args)}$`);
}
function datetime$1(args) {
	const time$2 = timeSource({ precision: args.precision });
	const opts = ["Z"];
	if (args.local) opts.push("");
	if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
	const timeRegex$1 = `${time$2}(?:${opts.join("|")})`;
	return /* @__PURE__ */ new RegExp(`^${dateSource}T(?:${timeRegex$1})$`);
}
const string$6 = (params) => {
	const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
	return /* @__PURE__ */ new RegExp(`^${regex}$`);
};
const bigint$1 = /^-?\d+n?$/;
const integer = /^-?\d+$/;
const number$2 = /^-?\d+(?:\.\d+)?$/;
const boolean$2 = /^(?:true|false)$/i;
const _null$5 = /^null$/i;
const _undefined$2 = /^undefined$/i;
const lowercase = /^[^A-Z]*$/;
const uppercase = /^[^a-z]*$/;
const hex$1 = /^[0-9a-fA-F]*$/;
function fixedBase64(bodyLength, padding) {
	return /* @__PURE__ */ new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
function fixedBase64url(length) {
	return /* @__PURE__ */ new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
const md5_hex = /^[0-9a-fA-F]{32}$/;
const md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
const md5_base64url = /* @__PURE__ */ fixedBase64url(22);
const sha1_hex = /^[0-9a-fA-F]{40}$/;
const sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
const sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
const sha256_hex = /^[0-9a-fA-F]{64}$/;
const sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
const sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
const sha384_hex = /^[0-9a-fA-F]{96}$/;
const sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
const sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
const sha512_hex = /^[0-9a-fA-F]{128}$/;
const sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
const sha512_base64url = /* @__PURE__ */ fixedBase64url(86);

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/checks.js
const $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
	var _a$2;
	inst._zod ?? (inst._zod = {});
	inst._zod.def = def;
	(_a$2 = inst._zod).onattach ?? (_a$2.onattach = []);
});
const numericOriginMap = {
	number: "number",
	bigint: "bigint",
	object: "date"
};
const $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
		if (def.value < curr) if (def.inclusive) bag.maximum = def.value;
		else bag.exclusiveMaximum = def.value;
	});
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value <= def.value : payload.value < def.value) return;
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
	$ZodCheck.init(inst, def);
	const origin = numericOriginMap[typeof def.value];
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
		if (def.value > curr) if (def.inclusive) bag.minimum = def.value;
		else bag.exclusiveMinimum = def.value;
	});
	inst._zod.check = (payload) => {
		if (def.inclusive ? payload.value >= def.value : payload.value > def.value) return;
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
			input: payload.value,
			inclusive: def.inclusive,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst$1) => {
		var _a$2;
		(_a$2 = inst$1._zod.bag).multipleOf ?? (_a$2.multipleOf = def.value);
	});
	inst._zod.check = (payload) => {
		if (typeof payload.value !== typeof def.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
		if (typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0) return;
		payload.issues.push({
			origin: typeof payload.value,
			code: "not_multiple_of",
			divisor: def.value,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
	$ZodCheck.init(inst, def);
	def.format = def.format || "float64";
	const isInt = def.format?.includes("int");
	const origin = isInt ? "int" : "number";
	const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.format = def.format;
		bag.minimum = minimum;
		bag.maximum = maximum;
		if (isInt) bag.pattern = integer;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (isInt) {
			if (!Number.isInteger(input)) {
				payload.issues.push({
					expected: origin,
					format: def.format,
					code: "invalid_type",
					continue: false,
					input,
					inst
				});
				return;
			}
			if (!Number.isSafeInteger(input)) {
				if (input > 0) payload.issues.push({
					input,
					code: "too_big",
					maximum: Number.MAX_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				else payload.issues.push({
					input,
					code: "too_small",
					minimum: Number.MIN_SAFE_INTEGER,
					note: "Integers must be within the safe integer range.",
					inst,
					origin,
					inclusive: true,
					continue: !def.abort
				});
				return;
			}
		}
		if (input < minimum) payload.issues.push({
			origin: "number",
			input,
			code: "too_small",
			minimum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
		if (input > maximum) payload.issues.push({
			origin: "number",
			input,
			code: "too_big",
			maximum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
	$ZodCheck.init(inst, def);
	const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.format = def.format;
		bag.minimum = minimum;
		bag.maximum = maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input < minimum) payload.issues.push({
			origin: "bigint",
			input,
			code: "too_small",
			minimum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
		if (input > maximum) payload.issues.push({
			origin: "bigint",
			input,
			code: "too_big",
			maximum,
			inclusive: true,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
	var _a$2;
	$ZodCheck.init(inst, def);
	(_a$2 = inst._zod.def).when ?? (_a$2.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.size !== void 0;
	});
	inst._zod.onattach.push((inst$1) => {
		const curr = inst$1._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		if (def.maximum < curr) inst$1._zod.bag.maximum = def.maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.size <= def.maximum) return;
		payload.issues.push({
			origin: getSizableOrigin(input),
			code: "too_big",
			maximum: def.maximum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
	var _a$2;
	$ZodCheck.init(inst, def);
	(_a$2 = inst._zod.def).when ?? (_a$2.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.size !== void 0;
	});
	inst._zod.onattach.push((inst$1) => {
		const curr = inst$1._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		if (def.minimum > curr) inst$1._zod.bag.minimum = def.minimum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.size >= def.minimum) return;
		payload.issues.push({
			origin: getSizableOrigin(input),
			code: "too_small",
			minimum: def.minimum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
	var _a$2;
	$ZodCheck.init(inst, def);
	(_a$2 = inst._zod.def).when ?? (_a$2.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.size !== void 0;
	});
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.minimum = def.size;
		bag.maximum = def.size;
		bag.size = def.size;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const size = input.size;
		if (size === def.size) return;
		const tooBig = size > def.size;
		payload.issues.push({
			origin: getSizableOrigin(input),
			...tooBig ? {
				code: "too_big",
				maximum: def.size
			} : {
				code: "too_small",
				minimum: def.size
			},
			inclusive: true,
			exact: true,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
	var _a$2;
	$ZodCheck.init(inst, def);
	(_a$2 = inst._zod.def).when ?? (_a$2.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst$1) => {
		const curr = inst$1._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
		if (def.maximum < curr) inst$1._zod.bag.maximum = def.maximum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length <= def.maximum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_big",
			maximum: def.maximum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
	var _a$2;
	$ZodCheck.init(inst, def);
	(_a$2 = inst._zod.def).when ?? (_a$2.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst$1) => {
		const curr = inst$1._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
		if (def.minimum > curr) inst$1._zod.bag.minimum = def.minimum;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		if (input.length >= def.minimum) return;
		const origin = getLengthableOrigin(input);
		payload.issues.push({
			origin,
			code: "too_small",
			minimum: def.minimum,
			inclusive: true,
			input,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
	var _a$2;
	$ZodCheck.init(inst, def);
	(_a$2 = inst._zod.def).when ?? (_a$2.when = (payload) => {
		const val = payload.value;
		return !nullish$1(val) && val.length !== void 0;
	});
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.minimum = def.length;
		bag.maximum = def.length;
		bag.length = def.length;
	});
	inst._zod.check = (payload) => {
		const input = payload.value;
		const length = input.length;
		if (length === def.length) return;
		const origin = getLengthableOrigin(input);
		const tooBig = length > def.length;
		payload.issues.push({
			origin,
			...tooBig ? {
				code: "too_big",
				maximum: def.length
			} : {
				code: "too_small",
				minimum: def.length
			},
			inclusive: true,
			exact: true,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
	var _a$2, _b;
	$ZodCheck.init(inst, def);
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.format = def.format;
		if (def.pattern) {
			bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
			bag.patterns.add(def.pattern);
		}
	});
	if (def.pattern) (_a$2 = inst._zod).check ?? (_a$2.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: def.format,
			input: payload.value,
			...def.pattern ? { pattern: def.pattern.toString() } : {},
			inst,
			continue: !def.abort
		});
	});
	else (_b = inst._zod).check ?? (_b.check = () => {});
});
const $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		def.pattern.lastIndex = 0;
		if (def.pattern.test(payload.value)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "regex",
			input: payload.value,
			pattern: def.pattern.toString(),
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
	def.pattern ?? (def.pattern = lowercase);
	$ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
	def.pattern ?? (def.pattern = uppercase);
	$ZodCheckStringFormat.init(inst, def);
});
const $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
	$ZodCheck.init(inst, def);
	const escapedRegex = escapeRegex(def.includes);
	const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
	def.pattern = pattern;
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.includes(def.includes, def.position)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: def.includes,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = /* @__PURE__ */ new RegExp(`^${escapeRegex(def.prefix)}.*`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.startsWith(def.prefix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: def.prefix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
	$ZodCheck.init(inst, def);
	const pattern = /* @__PURE__ */ new RegExp(`.*${escapeRegex(def.suffix)}$`);
	def.pattern ?? (def.pattern = pattern);
	inst._zod.onattach.push((inst$1) => {
		const bag = inst$1._zod.bag;
		bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
		bag.patterns.add(pattern);
	});
	inst._zod.check = (payload) => {
		if (payload.value.endsWith(def.suffix)) return;
		payload.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: def.suffix,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
function handleCheckPropertyResult(result, payload, property) {
	if (result.issues.length) payload.issues.push(...prefixIssues(property, result.issues));
}
const $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		const result = def.schema._zod.run({
			value: payload.value[def.property],
			issues: []
		}, {});
		if (result instanceof Promise) return result.then((result$1) => handleCheckPropertyResult(result$1, payload, def.property));
		handleCheckPropertyResult(result, payload, def.property);
	};
});
const $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
	$ZodCheck.init(inst, def);
	const mimeSet = new Set(def.mime);
	inst._zod.onattach.push((inst$1) => {
		inst$1._zod.bag.mime = def.mime;
	});
	inst._zod.check = (payload) => {
		if (mimeSet.has(payload.value.type)) return;
		payload.issues.push({
			code: "invalid_value",
			values: def.mime,
			input: payload.value.type,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
	$ZodCheck.init(inst, def);
	inst._zod.check = (payload) => {
		payload.value = def.tx(payload.value);
	};
});

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/doc.js
var Doc = class {
	constructor(args = []) {
		this.content = [];
		this.indent = 0;
		if (this) this.args = args;
	}
	indented(fn) {
		this.indent += 1;
		fn(this);
		this.indent -= 1;
	}
	write(arg) {
		if (typeof arg === "function") {
			arg(this, { execution: "sync" });
			arg(this, { execution: "async" });
			return;
		}
		const lines = arg.split("\n").filter((x) => x);
		const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
		const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
		for (const line of dedented) this.content.push(line);
	}
	compile() {
		const F = Function;
		const args = this?.args;
		const lines = [...(this?.content ?? [``]).map((x) => `  ${x}`)];
		return new F(...args, lines.join("\n"));
	}
};

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/versions.js
const version = {
	major: 4,
	minor: 4,
	patch: 3
};

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/schemas.js
const $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
	var _a$2;
	inst ?? (inst = {});
	inst._zod.def = def;
	inst._zod.bag = inst._zod.bag || {};
	inst._zod.version = version;
	const checks = [...inst._zod.def.checks ?? []];
	if (inst._zod.traits.has("$ZodCheck")) checks.unshift(inst);
	for (const ch of checks) for (const fn of ch._zod.onattach) fn(inst);
	if (checks.length === 0) {
		(_a$2 = inst._zod).deferred ?? (_a$2.deferred = []);
		inst._zod.deferred?.push(() => {
			inst._zod.run = inst._zod.parse;
		});
	} else {
		const runChecks = (payload, checks$1, ctx) => {
			let isAborted$1 = aborted(payload);
			let asyncResult;
			for (const ch of checks$1) {
				if (ch._zod.def.when) {
					if (explicitlyAborted(payload)) continue;
					if (!ch._zod.def.when(payload)) continue;
				} else if (isAborted$1) continue;
				const currLen = payload.issues.length;
				const _ = ch._zod.check(payload);
				if (_ instanceof Promise && ctx?.async === false) throw new $ZodAsyncError();
				if (asyncResult || _ instanceof Promise) asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
					await _;
					if (payload.issues.length === currLen) return;
					if (!isAborted$1) isAborted$1 = aborted(payload, currLen);
				});
				else {
					if (payload.issues.length === currLen) continue;
					if (!isAborted$1) isAborted$1 = aborted(payload, currLen);
				}
			}
			if (asyncResult) return asyncResult.then(() => {
				return payload;
			});
			return payload;
		};
		const handleCanaryResult = (canary, payload, ctx) => {
			if (aborted(canary)) {
				canary.aborted = true;
				return canary;
			}
			const checkResult = runChecks(payload, checks, ctx);
			if (checkResult instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return checkResult.then((checkResult$1) => inst._zod.parse(checkResult$1, ctx));
			}
			return inst._zod.parse(checkResult, ctx);
		};
		inst._zod.run = (payload, ctx) => {
			if (ctx.skipChecks) return inst._zod.parse(payload, ctx);
			if (ctx.direction === "backward") {
				const canary = inst._zod.parse({
					value: payload.value,
					issues: []
				}, {
					...ctx,
					skipChecks: true
				});
				if (canary instanceof Promise) return canary.then((canary$1) => {
					return handleCanaryResult(canary$1, payload, ctx);
				});
				return handleCanaryResult(canary, payload, ctx);
			}
			const result = inst._zod.parse(payload, ctx);
			if (result instanceof Promise) {
				if (ctx.async === false) throw new $ZodAsyncError();
				return result.then((result$1) => runChecks(result$1, checks, ctx));
			}
			return runChecks(result, checks, ctx);
		};
	}
	defineLazy(inst, "~standard", () => ({
		validate: (value) => {
			try {
				const r = safeParse$1(inst, value);
				return r.success ? { value: r.data } : { issues: r.error?.issues };
			} catch (_) {
				return safeParseAsync$1(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
});
const $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string$6(inst._zod.bag);
	inst._zod.parse = (payload, _) => {
		if (def.coerce) try {
			payload.value = String(payload.value);
		} catch (_$1) {}
		if (typeof payload.value === "string") return payload;
		payload.issues.push({
			expected: "string",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
const $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
	$ZodCheckStringFormat.init(inst, def);
	$ZodString.init(inst, def);
});
const $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
	def.pattern ?? (def.pattern = guid$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
	if (def.version) {
		const v = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[def.version];
		if (v === void 0) throw new Error(`Invalid UUID version: "${def.version}"`);
		def.pattern ?? (def.pattern = uuid$1(v));
	} else def.pattern ?? (def.pattern = uuid$1());
	$ZodStringFormat.init(inst, def);
});
const $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
	def.pattern ?? (def.pattern = email$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		try {
			const trimmed = payload.value.trim();
			if (!def.normalize && def.protocol?.source === httpProtocol.source) {
				if (!/^https?:\/\//i.test(trimmed)) {
					payload.issues.push({
						code: "invalid_format",
						format: "url",
						note: "Invalid URL format",
						input: payload.value,
						inst,
						continue: !def.abort
					});
					return;
				}
			}
			const url$1 = new URL(trimmed);
			if (def.hostname) {
				def.hostname.lastIndex = 0;
				if (!def.hostname.test(url$1.hostname)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid hostname",
					pattern: def.hostname.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.protocol) {
				def.protocol.lastIndex = 0;
				if (!def.protocol.test(url$1.protocol.endsWith(":") ? url$1.protocol.slice(0, -1) : url$1.protocol)) payload.issues.push({
					code: "invalid_format",
					format: "url",
					note: "Invalid protocol",
					pattern: def.protocol.source,
					input: payload.value,
					inst,
					continue: !def.abort
				});
			}
			if (def.normalize) payload.value = url$1.href;
			else payload.value = trimmed;
			return;
		} catch (_) {
			payload.issues.push({
				code: "invalid_format",
				format: "url",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
const $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
	def.pattern ?? (def.pattern = emoji$1());
	$ZodStringFormat.init(inst, def);
});
const $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
	def.pattern ?? (def.pattern = nanoid$1);
	$ZodStringFormat.init(inst, def);
});
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link $ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
const $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
	def.pattern ?? (def.pattern = cuid$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
	def.pattern ?? (def.pattern = cuid2$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
	def.pattern ?? (def.pattern = ulid$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
	def.pattern ?? (def.pattern = xid$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
	def.pattern ?? (def.pattern = ksuid$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
	def.pattern ?? (def.pattern = datetime$1(def));
	$ZodStringFormat.init(inst, def);
});
const $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
	def.pattern ?? (def.pattern = date$2);
	$ZodStringFormat.init(inst, def);
});
const $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
	def.pattern ?? (def.pattern = time$1(def));
	$ZodStringFormat.init(inst, def);
});
const $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
	def.pattern ?? (def.pattern = duration$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
	def.pattern ?? (def.pattern = ipv4$1);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv4`;
});
const $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
	def.pattern ?? (def.pattern = ipv6$1);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `ipv6`;
	inst._zod.check = (payload) => {
		try {
			new URL(`http://[${payload.value}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "ipv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
const $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
	def.pattern ?? (def.pattern = mac$1(def.delimiter));
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.format = `mac`;
});
const $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv4$1);
	$ZodStringFormat.init(inst, def);
});
const $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
	def.pattern ?? (def.pattern = cidrv6$1);
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		const parts = payload.value.split("/");
		try {
			if (parts.length !== 2) throw new Error();
			const [address, prefix] = parts;
			if (!prefix) throw new Error();
			const prefixNum = Number(prefix);
			if (`${prefixNum}` !== prefix) throw new Error();
			if (prefixNum < 0 || prefixNum > 128) throw new Error();
			new URL(`http://[${address}]`);
		} catch {
			payload.issues.push({
				code: "invalid_format",
				format: "cidrv6",
				input: payload.value,
				inst,
				continue: !def.abort
			});
		}
	};
});
function isValidBase64(data) {
	if (data === "") return true;
	if (/\s/.test(data)) return false;
	if (data.length % 4 !== 0) return false;
	try {
		atob(data);
		return true;
	} catch {
		return false;
	}
}
const $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
	def.pattern ?? (def.pattern = base64$1);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64";
	inst._zod.check = (payload) => {
		if (isValidBase64(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
function isValidBase64URL(data) {
	if (!base64url$1.test(data)) return false;
	const base64$2 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
	return isValidBase64(base64$2.padEnd(Math.ceil(base64$2.length / 4) * 4, "="));
}
const $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
	def.pattern ?? (def.pattern = base64url$1);
	$ZodStringFormat.init(inst, def);
	inst._zod.bag.contentEncoding = "base64url";
	inst._zod.check = (payload) => {
		if (isValidBase64URL(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
	def.pattern ?? (def.pattern = e164$1);
	$ZodStringFormat.init(inst, def);
});
function isValidJWT(token, algorithm = null) {
	try {
		const tokensParts = token.split(".");
		if (tokensParts.length !== 3) return false;
		const [header] = tokensParts;
		if (!header) return false;
		const parsedHeader = JSON.parse(atob(header));
		if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT") return false;
		if (!parsedHeader.alg) return false;
		if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm)) return false;
		return true;
	} catch {
		return false;
	}
}
const $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (isValidJWT(payload.value, def.alg)) return;
		payload.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	inst._zod.check = (payload) => {
		if (def.fn(payload.value)) return;
		payload.issues.push({
			code: "invalid_format",
			format: def.format,
			input: payload.value,
			inst,
			continue: !def.abort
		});
	};
});
const $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = inst._zod.bag.pattern ?? number$2;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Number(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) return payload;
		const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
		payload.issues.push({
			expected: "number",
			code: "invalid_type",
			input,
			inst,
			...received ? { received } : {}
		});
		return payload;
	};
});
const $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
	$ZodCheckNumberFormat.init(inst, def);
	$ZodNumber.init(inst, def);
});
const $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = boolean$2;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = Boolean(payload.value);
		} catch (_) {}
		const input = payload.value;
		if (typeof input === "boolean") return payload;
		payload.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
const $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = bigint$1;
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = BigInt(payload.value);
		} catch (_) {}
		if (typeof payload.value === "bigint") return payload;
		payload.issues.push({
			expected: "bigint",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
const $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
	$ZodCheckBigIntFormat.init(inst, def);
	$ZodBigInt.init(inst, def);
});
const $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (typeof input === "symbol") return payload;
		payload.issues.push({
			expected: "symbol",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
const $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = _undefined$2;
	inst._zod.values = new Set([void 0]);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (typeof input === "undefined") return payload;
		payload.issues.push({
			expected: "undefined",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
const $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.pattern = _null$5;
	inst._zod.values = new Set([null]);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (input === null) return payload;
		payload.issues.push({
			expected: "null",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
const $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
const $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload) => payload;
});
const $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		payload.issues.push({
			expected: "never",
			code: "invalid_type",
			input: payload.value,
			inst
		});
		return payload;
	};
});
const $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (typeof input === "undefined") return payload;
		payload.issues.push({
			expected: "void",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
const $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		if (def.coerce) try {
			payload.value = new Date(payload.value);
		} catch (_err) {}
		const input = payload.value;
		const isDate = input instanceof Date;
		if (isDate && !Number.isNaN(input.getTime())) return payload;
		payload.issues.push({
			expected: "date",
			code: "invalid_type",
			input,
			...isDate ? { received: "Invalid Date" } : {},
			inst
		});
		return payload;
	};
});
function handleArrayResult(result, final, index$1) {
	if (result.issues.length) final.issues.push(...prefixIssues(index$1, result.issues));
	final.value[index$1] = result.value;
}
const $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!Array.isArray(input)) {
			payload.issues.push({
				expected: "array",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = Array(input.length);
		const proms = [];
		for (let i = 0; i < input.length; i++) {
			const item = input[i];
			const result = def.element._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result$1) => handleArrayResult(result$1, payload, i)));
			else handleArrayResult(result, payload, i);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
	const isPresent = key in input;
	if (result.issues.length) {
		if (isOptionalIn && isOptionalOut && !isPresent) return;
		final.issues.push(...prefixIssues(key, result.issues));
	}
	if (!isPresent && !isOptionalIn) {
		if (!result.issues.length) final.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [key]
		});
		return;
	}
	if (result.value === void 0) {
		if (isPresent) final.value[key] = void 0;
	} else final.value[key] = result.value;
}
function normalizeDef(def) {
	const keys = Object.keys(def.shape);
	for (const k of keys) if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
	const okeys = optionalKeys(def.shape);
	return {
		...def,
		keys,
		keySet: new Set(keys),
		numKeys: keys.length,
		optionalKeys: new Set(okeys)
	};
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
	const unrecognized = [];
	const keySet = def.keySet;
	const _catchall = def.catchall._zod;
	const t = _catchall.def.type;
	const isOptionalIn = _catchall.optin === "optional";
	const isOptionalOut = _catchall.optout === "optional";
	for (const key in input) {
		if (key === "__proto__") continue;
		if (keySet.has(key)) continue;
		if (t === "never") {
			unrecognized.push(key);
			continue;
		}
		const r = _catchall.run({
			value: input[key],
			issues: []
		}, ctx);
		if (r instanceof Promise) proms.push(r.then((r$1) => handlePropertyResult(r$1, payload, key, input, isOptionalIn, isOptionalOut)));
		else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
	}
	if (unrecognized.length) payload.issues.push({
		code: "unrecognized_keys",
		keys: unrecognized,
		input,
		inst
	});
	if (!proms.length) return payload;
	return Promise.all(proms).then(() => {
		return payload;
	});
}
const $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
	$ZodType.init(inst, def);
	if (!Object.getOwnPropertyDescriptor(def, "shape")?.get) {
		const sh = def.shape;
		Object.defineProperty(def, "shape", { get: () => {
			const newSh = { ...sh };
			Object.defineProperty(def, "shape", { value: newSh });
			return newSh;
		} });
	}
	const _normalized = cached(() => normalizeDef(def));
	defineLazy(inst._zod, "propValues", () => {
		const shape = def.shape;
		const propValues = {};
		for (const key in shape) {
			const field = shape[key]._zod;
			if (field.values) {
				propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
				for (const v of field.values) propValues[key].add(v);
			}
		}
		return propValues;
	});
	const isObject$1 = isObject;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		payload.value = {};
		const proms = [];
		const shape = value.shape;
		for (const key of value.keys) {
			const el = shape[key];
			const isOptionalIn = el._zod.optin === "optional";
			const isOptionalOut = el._zod.optout === "optional";
			const r = el._zod.run({
				value: input[key],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((r$1) => handlePropertyResult(r$1, payload, key, input, isOptionalIn, isOptionalOut)));
			else handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
		}
		if (!catchall) return proms.length ? Promise.all(proms).then(() => payload) : payload;
		return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
	};
});
const $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
	$ZodObject.init(inst, def);
	const superParse = inst._zod.parse;
	const _normalized = cached(() => normalizeDef(def));
	const generateFastpass = (shape) => {
		const doc = new Doc([
			"shape",
			"payload",
			"ctx"
		]);
		const normalized = _normalized.value;
		const parseStr = (key) => {
			const k = esc(key);
			return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
		};
		doc.write(`const input = payload.value;`);
		const ids = Object.create(null);
		let counter = 0;
		for (const key of normalized.keys) ids[key] = `key_${counter++}`;
		doc.write(`const newResult = {};`);
		for (const key of normalized.keys) {
			const id = ids[key];
			const k = esc(key);
			const schema$6 = shape[key];
			const isOptionalIn = schema$6?._zod?.optin === "optional";
			const isOptionalOut = schema$6?._zod?.optout === "optional";
			doc.write(`const ${id} = ${parseStr(key)};`);
			if (isOptionalIn && isOptionalOut) doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
			else if (!isOptionalIn) doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
			else doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
		}
		doc.write(`payload.value = newResult;`);
		doc.write(`return payload;`);
		const fn = doc.compile();
		return (payload, ctx) => fn(shape, payload, ctx);
	};
	let fastpass;
	const isObject$1 = isObject;
	const jit = !globalConfig.jitless;
	const allowsEval$1 = allowsEval;
	const fastEnabled = jit && allowsEval$1.value;
	const catchall = def.catchall;
	let value;
	inst._zod.parse = (payload, ctx) => {
		value ?? (value = _normalized.value);
		const input = payload.value;
		if (!isObject$1(input)) {
			payload.issues.push({
				expected: "object",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
			if (!fastpass) fastpass = generateFastpass(def.shape);
			payload = fastpass(payload, ctx);
			if (!catchall) return payload;
			return handleCatchall([], input, payload, ctx, value, inst);
		}
		return superParse(payload, ctx);
	};
});
function handleUnionResults(results, final, inst, ctx) {
	for (const result of results) if (result.issues.length === 0) {
		final.value = result.value;
		return final;
	}
	const nonaborted = results.filter((r) => !aborted(r));
	if (nonaborted.length === 1) {
		final.value = nonaborted[0].value;
		return nonaborted[0];
	}
	final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	return final;
}
const $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
	defineLazy(inst._zod, "values", () => {
		if (def.options.every((o) => o._zod.values)) return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
	});
	defineLazy(inst._zod, "pattern", () => {
		if (def.options.every((o) => o._zod.pattern)) {
			const patterns = def.options.map((o) => o._zod.pattern);
			return /* @__PURE__ */ new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
		}
	});
	const first = def.options.length === 1 ? def.options[0]._zod.run : null;
	inst._zod.parse = (payload, ctx) => {
		if (first) return first(payload, ctx);
		let async = false;
		const results = [];
		for (const option of def.options) {
			const result = option._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) {
				results.push(result);
				async = true;
			} else {
				if (result.issues.length === 0) return result;
				results.push(result);
			}
		}
		if (!async) return handleUnionResults(results, payload, inst, ctx);
		return Promise.all(results).then((results$1) => {
			return handleUnionResults(results$1, payload, inst, ctx);
		});
	};
});
function handleExclusiveUnionResults(results, final, inst, ctx) {
	const successes = results.filter((r) => r.issues.length === 0);
	if (successes.length === 1) {
		final.value = successes[0].value;
		return final;
	}
	if (successes.length === 0) final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
	});
	else final.issues.push({
		code: "invalid_union",
		input: final.value,
		inst,
		errors: [],
		inclusive: false
	});
	return final;
}
const $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
	$ZodUnion.init(inst, def);
	def.inclusive = false;
	const first = def.options.length === 1 ? def.options[0]._zod.run : null;
	inst._zod.parse = (payload, ctx) => {
		if (first) return first(payload, ctx);
		let async = false;
		const results = [];
		for (const option of def.options) {
			const result = option._zod.run({
				value: payload.value,
				issues: []
			}, ctx);
			if (result instanceof Promise) {
				results.push(result);
				async = true;
			} else results.push(result);
		}
		if (!async) return handleExclusiveUnionResults(results, payload, inst, ctx);
		return Promise.all(results).then((results$1) => {
			return handleExclusiveUnionResults(results$1, payload, inst, ctx);
		});
	};
});
const $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
	def.inclusive = false;
	$ZodUnion.init(inst, def);
	const _super = inst._zod.parse;
	defineLazy(inst._zod, "propValues", () => {
		const propValues = {};
		for (const option of def.options) {
			const pv = option._zod.propValues;
			if (!pv || Object.keys(pv).length === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
			for (const [k, v] of Object.entries(pv)) {
				if (!propValues[k]) propValues[k] = /* @__PURE__ */ new Set();
				for (const val of v) propValues[k].add(val);
			}
		}
		return propValues;
	});
	const disc = cached(() => {
		const opts = def.options;
		const map$7 = /* @__PURE__ */ new Map();
		for (const o of opts) {
			const values = o._zod.propValues?.[def.discriminator];
			if (!values || values.size === 0) throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
			for (const v of values) {
				if (map$7.has(v)) throw new Error(`Duplicate discriminator value "${String(v)}"`);
				map$7.set(v, o);
			}
		}
		return map$7;
	});
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isObject(input)) {
			payload.issues.push({
				code: "invalid_type",
				expected: "object",
				input,
				inst
			});
			return payload;
		}
		const opt = disc.value.get(input?.[def.discriminator]);
		if (opt) return opt._zod.run(payload, ctx);
		if (def.unionFallback || ctx.direction === "backward") return _super(payload, ctx);
		payload.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: def.discriminator,
			options: Array.from(disc.value.keys()),
			input,
			path: [def.discriminator],
			inst
		});
		return payload;
	};
});
const $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		const left = def.left._zod.run({
			value: input,
			issues: []
		}, ctx);
		const right = def.right._zod.run({
			value: input,
			issues: []
		}, ctx);
		if (left instanceof Promise || right instanceof Promise) return Promise.all([left, right]).then(([left$1, right$1]) => {
			return handleIntersectionResults(payload, left$1, right$1);
		});
		return handleIntersectionResults(payload, left, right);
	};
});
function mergeValues(a, b) {
	if (a === b) return {
		valid: true,
		data: a
	};
	if (a instanceof Date && b instanceof Date && +a === +b) return {
		valid: true,
		data: a
	};
	if (isPlainObject$1(a) && isPlainObject$1(b)) {
		const bKeys = Object.keys(b);
		const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
		const newObj = {
			...a,
			...b
		};
		for (const key of sharedKeys) {
			const sharedValue = mergeValues(a[key], b[key]);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
			};
			newObj[key] = sharedValue.data;
		}
		return {
			valid: true,
			data: newObj
		};
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) return {
			valid: false,
			mergeErrorPath: []
		};
		const newArray = [];
		for (let index$1 = 0; index$1 < a.length; index$1++) {
			const itemA = a[index$1];
			const itemB = b[index$1];
			const sharedValue = mergeValues(itemA, itemB);
			if (!sharedValue.valid) return {
				valid: false,
				mergeErrorPath: [index$1, ...sharedValue.mergeErrorPath]
			};
			newArray.push(sharedValue.data);
		}
		return {
			valid: true,
			data: newArray
		};
	}
	return {
		valid: false,
		mergeErrorPath: []
	};
}
function handleIntersectionResults(result, left, right) {
	const unrecKeys = /* @__PURE__ */ new Map();
	let unrecIssue;
	for (const iss of left.issues) if (iss.code === "unrecognized_keys") {
		unrecIssue ?? (unrecIssue = iss);
		for (const k of iss.keys) {
			if (!unrecKeys.has(k)) unrecKeys.set(k, {});
			unrecKeys.get(k).l = true;
		}
	} else result.issues.push(iss);
	for (const iss of right.issues) if (iss.code === "unrecognized_keys") for (const k of iss.keys) {
		if (!unrecKeys.has(k)) unrecKeys.set(k, {});
		unrecKeys.get(k).r = true;
	}
	else result.issues.push(iss);
	const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
	if (bothKeys.length && unrecIssue) result.issues.push({
		...unrecIssue,
		keys: bothKeys
	});
	if (aborted(result)) return result;
	const merged = mergeValues(left.value, right.value);
	if (!merged.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
	result.value = merged.data;
	return result;
}
const $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
	$ZodType.init(inst, def);
	const items = def.items;
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!Array.isArray(input)) {
			payload.issues.push({
				input,
				inst,
				expected: "tuple",
				code: "invalid_type"
			});
			return payload;
		}
		payload.value = [];
		const proms = [];
		const optinStart = getTupleOptStart(items, "optin");
		const optoutStart = getTupleOptStart(items, "optout");
		if (!def.rest) {
			if (input.length < optinStart) {
				payload.issues.push({
					code: "too_small",
					minimum: optinStart,
					inclusive: true,
					input,
					inst,
					origin: "array"
				});
				return payload;
			}
			if (input.length > items.length) payload.issues.push({
				code: "too_big",
				maximum: items.length,
				inclusive: true,
				input,
				inst,
				origin: "array"
			});
		}
		const itemResults = new Array(items.length);
		for (let i = 0; i < items.length; i++) {
			const r = items[i]._zod.run({
				value: input[i],
				issues: []
			}, ctx);
			if (r instanceof Promise) proms.push(r.then((rr) => {
				itemResults[i] = rr;
			}));
			else itemResults[i] = r;
		}
		if (def.rest) {
			let i = items.length - 1;
			const rest = input.slice(items.length);
			for (const el of rest) {
				i++;
				const result = def.rest._zod.run({
					value: el,
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((r) => handleTupleResult(r, payload, i)));
				else handleTupleResult(result, payload, i);
			}
		}
		if (proms.length) return Promise.all(proms).then(() => handleTupleResults(itemResults, payload, items, input, optoutStart));
		return handleTupleResults(itemResults, payload, items, input, optoutStart);
	};
});
function getTupleOptStart(items, key) {
	for (let i = items.length - 1; i >= 0; i--) if (items[i]._zod[key] !== "optional") return i + 1;
	return 0;
}
function handleTupleResult(result, final, index$1) {
	if (result.issues.length) final.issues.push(...prefixIssues(index$1, result.issues));
	final.value[index$1] = result.value;
}
function handleTupleResults(itemResults, final, items, input, optoutStart) {
	for (let i = 0; i < items.length; i++) {
		const r = itemResults[i];
		const isPresent = i < input.length;
		if (r.issues.length) {
			if (!isPresent && i >= optoutStart) {
				final.value.length = i;
				break;
			}
			final.issues.push(...prefixIssues(i, r.issues));
		}
		final.value[i] = r.value;
	}
	for (let i = final.value.length - 1; i >= input.length; i--) if (items[i]._zod.optout === "optional" && final.value[i] === void 0) final.value.length = i;
	else break;
	return final;
}
const $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!isPlainObject$1(input)) {
			payload.issues.push({
				expected: "record",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		const proms = [];
		const values = def.keyType._zod.values;
		if (values) {
			payload.value = {};
			const recordKeys = /* @__PURE__ */ new Set();
			for (const key of values) if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
				recordKeys.add(typeof key === "number" ? key.toString() : key);
				const keyResult = def.keyType._zod.run({
					value: key,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (keyResult.issues.length) {
					payload.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key,
						path: [key],
						inst
					});
					continue;
				}
				const outKey = keyResult.value;
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result$1) => {
					if (result$1.issues.length) payload.issues.push(...prefixIssues(key, result$1.issues));
					payload.value[outKey] = result$1.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[outKey] = result.value;
				}
			}
			let unrecognized;
			for (const key in input) if (!recordKeys.has(key)) {
				unrecognized = unrecognized ?? [];
				unrecognized.push(key);
			}
			if (unrecognized && unrecognized.length > 0) payload.issues.push({
				code: "unrecognized_keys",
				input,
				inst,
				keys: unrecognized
			});
		} else {
			payload.value = {};
			for (const key of Reflect.ownKeys(input)) {
				if (key === "__proto__") continue;
				if (!Object.prototype.propertyIsEnumerable.call(input, key)) continue;
				let keyResult = def.keyType._zod.run({
					value: key,
					issues: []
				}, ctx);
				if (keyResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
				if (typeof key === "string" && number$2.test(key) && keyResult.issues.length) {
					const retryResult = def.keyType._zod.run({
						value: Number(key),
						issues: []
					}, ctx);
					if (retryResult instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
					if (retryResult.issues.length === 0) keyResult = retryResult;
				}
				if (keyResult.issues.length) {
					if (def.mode === "loose") payload.value[key] = input[key];
					else payload.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
						input: key,
						path: [key],
						inst
					});
					continue;
				}
				const result = def.valueType._zod.run({
					value: input[key],
					issues: []
				}, ctx);
				if (result instanceof Promise) proms.push(result.then((result$1) => {
					if (result$1.issues.length) payload.issues.push(...prefixIssues(key, result$1.issues));
					payload.value[keyResult.value] = result$1.value;
				}));
				else {
					if (result.issues.length) payload.issues.push(...prefixIssues(key, result.issues));
					payload.value[keyResult.value] = result.value;
				}
			}
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
const $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!(input instanceof Map)) {
			payload.issues.push({
				expected: "map",
				code: "invalid_type",
				input,
				inst
			});
			return payload;
		}
		const proms = [];
		payload.value = /* @__PURE__ */ new Map();
		for (const [key, value] of input) {
			const keyResult = def.keyType._zod.run({
				value: key,
				issues: []
			}, ctx);
			const valueResult = def.valueType._zod.run({
				value,
				issues: []
			}, ctx);
			if (keyResult instanceof Promise || valueResult instanceof Promise) proms.push(Promise.all([keyResult, valueResult]).then(([keyResult$1, valueResult$1]) => {
				handleMapResult(keyResult$1, valueResult$1, payload, key, input, inst, ctx);
			}));
			else handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
	if (keyResult.issues.length) if (propertyKeyTypes.has(typeof key)) final.issues.push(...prefixIssues(key, keyResult.issues));
	else final.issues.push({
		code: "invalid_key",
		origin: "map",
		input,
		inst,
		issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
	});
	if (valueResult.issues.length) if (propertyKeyTypes.has(typeof key)) final.issues.push(...prefixIssues(key, valueResult.issues));
	else final.issues.push({
		origin: "map",
		code: "invalid_element",
		input,
		inst,
		key,
		issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
	});
	final.value.set(keyResult.value, valueResult.value);
}
const $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		const input = payload.value;
		if (!(input instanceof Set)) {
			payload.issues.push({
				input,
				inst,
				expected: "set",
				code: "invalid_type"
			});
			return payload;
		}
		const proms = [];
		payload.value = /* @__PURE__ */ new Set();
		for (const item of input) {
			const result = def.valueType._zod.run({
				value: item,
				issues: []
			}, ctx);
			if (result instanceof Promise) proms.push(result.then((result$1) => handleSetResult(result$1, payload)));
			else handleSetResult(result, payload);
		}
		if (proms.length) return Promise.all(proms).then(() => payload);
		return payload;
	};
});
function handleSetResult(result, final) {
	if (result.issues.length) final.issues.push(...result.issues);
	final.value.add(result.value);
}
const $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
	$ZodType.init(inst, def);
	const values = getEnumValues(def.entries);
	const valuesSet = new Set(values);
	inst._zod.values = valuesSet;
	inst._zod.pattern = /* @__PURE__ */ new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (valuesSet.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values,
			input,
			inst
		});
		return payload;
	};
});
const $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
	$ZodType.init(inst, def);
	if (def.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
	const values = new Set(def.values);
	inst._zod.values = values;
	inst._zod.pattern = /* @__PURE__ */ new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (values.has(input)) return payload;
		payload.issues.push({
			code: "invalid_value",
			values: def.values,
			input,
			inst
		});
		return payload;
	};
});
const $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		const input = payload.value;
		if (input instanceof File) return payload;
		payload.issues.push({
			expected: "file",
			code: "invalid_type",
			input,
			inst
		});
		return payload;
	};
});
const $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		const _out = def.transform(payload.value, payload);
		if (ctx.async) return (_out instanceof Promise ? _out : Promise.resolve(_out)).then((output) => {
			payload.value = output;
			payload.fallback = true;
			return payload;
		});
		if (_out instanceof Promise) throw new $ZodAsyncError();
		payload.value = _out;
		payload.fallback = true;
		return payload;
	};
});
function handleOptionalResult(result, input) {
	if (input === void 0 && (result.issues.length || result.fallback)) return {
		issues: [],
		value: void 0
	};
	return result;
}
const $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	inst._zod.optout = "optional";
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? new Set([...def.innerType._zod.values, void 0]) : void 0;
	});
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? /* @__PURE__ */ new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (def.innerType._zod.optin === "optional") {
			const input = payload.value;
			const result = def.innerType._zod.run(payload, ctx);
			if (result instanceof Promise) return result.then((r) => handleOptionalResult(r, input));
			return handleOptionalResult(result, input);
		}
		if (payload.value === void 0) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
	inst._zod.parse = (payload, ctx) => {
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "pattern", () => {
		const pattern = def.innerType._zod.pattern;
		return pattern ? /* @__PURE__ */ new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
	});
	defineLazy(inst._zod, "values", () => {
		return def.innerType._zod.values ? new Set([...def.innerType._zod.values, null]) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		if (payload.value === null) return payload;
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) {
			payload.value = def.defaultValue;
			/**
			* $ZodDefault returns the default value immediately in forward direction.
			* It doesn't pass the default value into the validator ("prefault"). There's no reason to pass the default value through validation. The validity of the default is enforced by TypeScript statically. Otherwise, it's the responsibility of the user to ensure the default is valid. In the case of pipes with divergent in/out types, you can specify the default on the `in` schema of your ZodPipe to set a "prefault" for the pipe.   */
			return payload;
		}
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result$1) => handleDefaultResult(result$1, def));
		return handleDefaultResult(result, def);
	};
});
function handleDefaultResult(payload, def) {
	if (payload.value === void 0) payload.value = def.defaultValue;
	return payload;
}
const $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		if (payload.value === void 0) payload.value = def.defaultValue;
		return def.innerType._zod.run(payload, ctx);
	};
});
const $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => {
		const v = def.innerType._zod.values;
		return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
	});
	inst._zod.parse = (payload, ctx) => {
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result$1) => handleNonOptionalResult(result$1, inst));
		return handleNonOptionalResult(result, inst);
	};
});
function handleNonOptionalResult(payload, inst) {
	if (!payload.issues.length && payload.value === void 0) payload.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: payload.value,
		inst
	});
	return payload;
}
const $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") throw new $ZodEncodeError("ZodSuccess");
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result$1) => {
			payload.value = result$1.issues.length === 0;
			return payload;
		});
		payload.value = result.issues.length === 0;
		return payload;
	};
});
const $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.optin = "optional";
	defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then((result$1) => {
			payload.value = result$1.value;
			if (result$1.issues.length) {
				payload.value = def.catchValue({
					...payload,
					error: { issues: result$1.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
					input: payload.value
				});
				payload.issues = [];
				payload.fallback = true;
			}
			return payload;
		});
		payload.value = result.value;
		if (result.issues.length) {
			payload.value = def.catchValue({
				...payload,
				error: { issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config())) },
				input: payload.value
			});
			payload.issues = [];
			payload.fallback = true;
		}
		return payload;
	};
});
const $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _ctx) => {
		if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
			payload.issues.push({
				input: payload.value,
				inst,
				expected: "nan",
				code: "invalid_type"
			});
			return payload;
		}
		return payload;
	};
});
const $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => def.in._zod.values);
	defineLazy(inst._zod, "optin", () => def.in._zod.optin);
	defineLazy(inst._zod, "optout", () => def.out._zod.optout);
	defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right$1) => handlePipeResult(right$1, def.in, ctx));
			return handlePipeResult(right, def.in, ctx);
		}
		const left = def.in._zod.run(payload, ctx);
		if (left instanceof Promise) return left.then((left$1) => handlePipeResult(left$1, def.out, ctx));
		return handlePipeResult(left, def.out, ctx);
	};
});
function handlePipeResult(left, next, ctx) {
	if (left.issues.length) {
		left.aborted = true;
		return left;
	}
	return next._zod.run({
		value: left.value,
		issues: left.issues,
		fallback: left.fallback
	}, ctx);
}
const $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "values", () => def.in._zod.values);
	defineLazy(inst._zod, "optin", () => def.in._zod.optin);
	defineLazy(inst._zod, "optout", () => def.out._zod.optout);
	defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
	inst._zod.parse = (payload, ctx) => {
		if ((ctx.direction || "forward") === "forward") {
			const left = def.in._zod.run(payload, ctx);
			if (left instanceof Promise) return left.then((left$1) => handleCodecAResult(left$1, def, ctx));
			return handleCodecAResult(left, def, ctx);
		} else {
			const right = def.out._zod.run(payload, ctx);
			if (right instanceof Promise) return right.then((right$1) => handleCodecAResult(right$1, def, ctx));
			return handleCodecAResult(right, def, ctx);
		}
	};
});
function handleCodecAResult(result, def, ctx) {
	if (result.issues.length) {
		result.aborted = true;
		return result;
	}
	if ((ctx.direction || "forward") === "forward") {
		const transformed = def.transform(result.value, result);
		if (transformed instanceof Promise) return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
		return handleCodecTxResult(result, transformed, def.out, ctx);
	} else {
		const transformed = def.reverseTransform(result.value, result);
		if (transformed instanceof Promise) return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
		return handleCodecTxResult(result, transformed, def.in, ctx);
	}
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
	if (left.issues.length) {
		left.aborted = true;
		return left;
	}
	return nextSchema._zod.run({
		value,
		issues: left.issues
	}, ctx);
}
const $ZodPreprocess = /* @__PURE__ */ $constructor("$ZodPreprocess", (inst, def) => {
	$ZodPipe.init(inst, def);
});
const $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
	defineLazy(inst._zod, "values", () => def.innerType._zod.values);
	defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
	defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
	inst._zod.parse = (payload, ctx) => {
		if (ctx.direction === "backward") return def.innerType._zod.run(payload, ctx);
		const result = def.innerType._zod.run(payload, ctx);
		if (result instanceof Promise) return result.then(handleReadonlyResult);
		return handleReadonlyResult(result);
	};
});
function handleReadonlyResult(payload) {
	payload.value = Object.freeze(payload.value);
	return payload;
}
const $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
	$ZodType.init(inst, def);
	const regexParts = [];
	for (const part of def.parts) if (typeof part === "object" && part !== null) {
		if (!part._zod.pattern) throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
		const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
		if (!source) throw new Error(`Invalid template literal part: ${part._zod.traits}`);
		const start = source.startsWith("^") ? 1 : 0;
		const end = source.endsWith("$") ? source.length - 1 : source.length;
		regexParts.push(source.slice(start, end));
	} else if (part === null || primitiveTypes.has(typeof part)) regexParts.push(escapeRegex(`${part}`));
	else throw new Error(`Invalid template literal part: ${part}`);
	inst._zod.pattern = /* @__PURE__ */ new RegExp(`^${regexParts.join("")}$`);
	inst._zod.parse = (payload, _ctx) => {
		if (typeof payload.value !== "string") {
			payload.issues.push({
				input: payload.value,
				inst,
				expected: "string",
				code: "invalid_type"
			});
			return payload;
		}
		inst._zod.pattern.lastIndex = 0;
		if (!inst._zod.pattern.test(payload.value)) {
			payload.issues.push({
				input: payload.value,
				inst,
				code: "invalid_format",
				format: def.format ?? "template_literal",
				pattern: inst._zod.pattern.source
			});
			return payload;
		}
		return payload;
	};
});
const $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => {
	$ZodType.init(inst, def);
	inst._def = def;
	inst._zod.def = def;
	inst.implement = (func) => {
		if (typeof func !== "function") throw new Error("implement() must be called with a function");
		return function(...args) {
			const parsedArgs = inst._def.input ? parse$4(inst._def.input, args) : args;
			const result = Reflect.apply(func, this, parsedArgs);
			if (inst._def.output) return parse$4(inst._def.output, result);
			return result;
		};
	};
	inst.implementAsync = (func) => {
		if (typeof func !== "function") throw new Error("implementAsync() must be called with a function");
		return async function(...args) {
			const parsedArgs = inst._def.input ? await parseAsync$1(inst._def.input, args) : args;
			const result = await Reflect.apply(func, this, parsedArgs);
			if (inst._def.output) return await parseAsync$1(inst._def.output, result);
			return result;
		};
	};
	inst._zod.parse = (payload, _ctx) => {
		if (typeof payload.value !== "function") {
			payload.issues.push({
				code: "invalid_type",
				expected: "function",
				input: payload.value,
				inst
			});
			return payload;
		}
		if (inst._def.output && inst._def.output._zod.def.type === "promise") payload.value = inst.implementAsync(payload.value);
		else payload.value = inst.implement(payload.value);
		return payload;
	};
	inst.input = (...args) => {
		const F = inst.constructor;
		if (Array.isArray(args[0])) return new F({
			type: "function",
			input: new $ZodTuple({
				type: "tuple",
				items: args[0],
				rest: args[1]
			}),
			output: inst._def.output
		});
		return new F({
			type: "function",
			input: args[0],
			output: inst._def.output
		});
	};
	inst.output = (output) => {
		const F = inst.constructor;
		return new F({
			type: "function",
			input: inst._def.input,
			output
		});
	};
	return inst;
});
const $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, ctx) => {
		return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({
			value: inner,
			issues: []
		}, ctx));
	};
});
const $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
	$ZodType.init(inst, def);
	defineLazy(inst._zod, "innerType", () => {
		const d = def;
		if (!d._cachedInner) d._cachedInner = def.getter();
		return d._cachedInner;
	});
	defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
	defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
	defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? void 0);
	defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? void 0);
	inst._zod.parse = (payload, ctx) => {
		return inst._zod.innerType._zod.run(payload, ctx);
	};
});
const $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
	$ZodCheck.init(inst, def);
	$ZodType.init(inst, def);
	inst._zod.parse = (payload, _) => {
		return payload;
	};
	inst._zod.check = (payload) => {
		const input = payload.value;
		const r = def.fn(input);
		if (r instanceof Promise) return r.then((r$1) => handleRefineResult(r$1, payload, input, inst));
		handleRefineResult(r, payload, input, inst);
	};
});
function handleRefineResult(result, payload, input, inst) {
	if (!result) {
		const _iss = {
			code: "custom",
			input,
			inst,
			path: [...inst._zod.def.path ?? []],
			continue: !inst._zod.def.abort
		};
		if (inst._zod.def.params) _iss.params = inst._zod.def.params;
		payload.issues.push(issue(_iss));
	}
}

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/registries.js
var _a;
var $ZodRegistry = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
	}
	add(schema$6, ..._meta) {
		const meta$2 = _meta[0];
		this._map.set(schema$6, meta$2);
		if (meta$2 && typeof meta$2 === "object" && "id" in meta$2) this._idmap.set(meta$2.id, schema$6);
		return this;
	}
	clear() {
		this._map = /* @__PURE__ */ new WeakMap();
		this._idmap = /* @__PURE__ */ new Map();
		return this;
	}
	remove(schema$6) {
		const meta$2 = this._map.get(schema$6);
		if (meta$2 && typeof meta$2 === "object" && "id" in meta$2) this._idmap.delete(meta$2.id);
		this._map.delete(schema$6);
		return this;
	}
	get(schema$6) {
		const p = schema$6._zod.parent;
		if (p) {
			const pm = { ...this.get(p) ?? {} };
			delete pm.id;
			const f = {
				...pm,
				...this._map.get(schema$6)
			};
			return Object.keys(f).length ? f : void 0;
		}
		return this._map.get(schema$6);
	}
	has(schema$6) {
		return this._map.has(schema$6);
	}
};
function registry() {
	return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
const globalRegistry = globalThis.__zod_globalRegistry;

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/api.js
/* @__NO_SIDE_EFFECTS__ */
function _string(Class, params) {
	return new Class({
		type: "string",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _email(Class, params) {
	return new Class({
		type: "string",
		format: "email",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _guid(Class, params) {
	return new Class({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuid(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv4(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v4",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv6(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v6",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uuidv7(Class, params) {
	return new Class({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: false,
		version: "v7",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _url(Class, params) {
	return new Class({
		type: "string",
		format: "url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _emoji(Class, params) {
	return new Class({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _nanoid(Class, params) {
	return new Class({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link _cuid2} instead.
* See https://github.com/paralleldrive/cuid.
*/
/* @__NO_SIDE_EFFECTS__ */
function _cuid(Class, params) {
	return new Class({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cuid2(Class, params) {
	return new Class({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ulid(Class, params) {
	return new Class({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _xid(Class, params) {
	return new Class({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ksuid(Class, params) {
	return new Class({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv4(Class, params) {
	return new Class({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _ipv6(Class, params) {
	return new Class({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _mac(Class, params) {
	return new Class({
		type: "string",
		format: "mac",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv4(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _cidrv6(Class, params) {
	return new Class({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64(Class, params) {
	return new Class({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _base64url(Class, params) {
	return new Class({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _e164(Class, params) {
	return new Class({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _jwt(Class, params) {
	return new Class({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: false,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDateTime(Class, params) {
	return new Class({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: false,
		local: false,
		precision: null,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDate(Class, params) {
	return new Class({
		type: "string",
		format: "date",
		check: "string_format",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoTime(Class, params) {
	return new Class({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _isoDuration(Class, params) {
	return new Class({
		type: "string",
		format: "duration",
		check: "string_format",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _number(Class, params) {
	return new Class({
		type: "number",
		checks: [],
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _coercedNumber(Class, params) {
	return new Class({
		type: "number",
		coerce: true,
		checks: [],
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _int(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "safeint",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _float32(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "float32",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _float64(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "float64",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _int32(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "int32",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uint32(Class, params) {
	return new Class({
		type: "number",
		check: "number_format",
		abort: false,
		format: "uint32",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _boolean(Class, params) {
	return new Class({
		type: "boolean",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _coercedBoolean(Class, params) {
	return new Class({
		type: "boolean",
		coerce: true,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _bigint(Class, params) {
	return new Class({
		type: "bigint",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _int64(Class, params) {
	return new Class({
		type: "bigint",
		check: "bigint_format",
		abort: false,
		format: "int64",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uint64(Class, params) {
	return new Class({
		type: "bigint",
		check: "bigint_format",
		abort: false,
		format: "uint64",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _symbol(Class, params) {
	return new Class({
		type: "symbol",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _undefined$1(Class, params) {
	return new Class({
		type: "undefined",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _null$4(Class, params) {
	return new Class({
		type: "null",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _any(Class) {
	return new Class({ type: "any" });
}
/* @__NO_SIDE_EFFECTS__ */
function _unknown(Class) {
	return new Class({ type: "unknown" });
}
/* @__NO_SIDE_EFFECTS__ */
function _never(Class, params) {
	return new Class({
		type: "never",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _void$1(Class, params) {
	return new Class({
		type: "void",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _date(Class, params) {
	return new Class({
		type: "date",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _nan(Class, params) {
	return new Class({
		type: "nan",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lt(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lte(value, params) {
	return new $ZodCheckLessThan({
		check: "less_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _gt(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: false
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _gte(value, params) {
	return new $ZodCheckGreaterThan({
		check: "greater_than",
		...normalizeParams(params),
		value,
		inclusive: true
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _positive(params) {
	return /* @__PURE__ */ _gt(0, params);
}
/* @__NO_SIDE_EFFECTS__ */
function _negative(params) {
	return /* @__PURE__ */ _lt(0, params);
}
/* @__NO_SIDE_EFFECTS__ */
function _nonpositive(params) {
	return /* @__PURE__ */ _lte(0, params);
}
/* @__NO_SIDE_EFFECTS__ */
function _nonnegative(params) {
	return /* @__PURE__ */ _gte(0, params);
}
/* @__NO_SIDE_EFFECTS__ */
function _multipleOf(value, params) {
	return new $ZodCheckMultipleOf({
		check: "multiple_of",
		...normalizeParams(params),
		value
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _maxSize(maximum, params) {
	return new $ZodCheckMaxSize({
		check: "max_size",
		...normalizeParams(params),
		maximum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _minSize(minimum, params) {
	return new $ZodCheckMinSize({
		check: "min_size",
		...normalizeParams(params),
		minimum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _size(size, params) {
	return new $ZodCheckSizeEquals({
		check: "size_equals",
		...normalizeParams(params),
		size
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _maxLength(maximum, params) {
	return new $ZodCheckMaxLength({
		check: "max_length",
		...normalizeParams(params),
		maximum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _minLength(minimum, params) {
	return new $ZodCheckMinLength({
		check: "min_length",
		...normalizeParams(params),
		minimum
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _length(length, params) {
	return new $ZodCheckLengthEquals({
		check: "length_equals",
		...normalizeParams(params),
		length
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _regex(pattern, params) {
	return new $ZodCheckRegex({
		check: "string_format",
		format: "regex",
		...normalizeParams(params),
		pattern
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _lowercase(params) {
	return new $ZodCheckLowerCase({
		check: "string_format",
		format: "lowercase",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _uppercase(params) {
	return new $ZodCheckUpperCase({
		check: "string_format",
		format: "uppercase",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _includes(includes, params) {
	return new $ZodCheckIncludes({
		check: "string_format",
		format: "includes",
		...normalizeParams(params),
		includes
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _startsWith(prefix, params) {
	return new $ZodCheckStartsWith({
		check: "string_format",
		format: "starts_with",
		...normalizeParams(params),
		prefix
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _endsWith(suffix, params) {
	return new $ZodCheckEndsWith({
		check: "string_format",
		format: "ends_with",
		...normalizeParams(params),
		suffix
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _property(property, schema$6, params) {
	return new $ZodCheckProperty({
		check: "property",
		property,
		schema: schema$6,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _mime(types, params) {
	return new $ZodCheckMimeType({
		check: "mime_type",
		mime: types,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _overwrite(tx) {
	return new $ZodCheckOverwrite({
		check: "overwrite",
		tx
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _normalize(form) {
	return /* @__PURE__ */ _overwrite((input) => input.normalize(form));
}
/* @__NO_SIDE_EFFECTS__ */
function _trim() {
	return /* @__PURE__ */ _overwrite((input) => input.trim());
}
/* @__NO_SIDE_EFFECTS__ */
function _toLowerCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toLowerCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _toUpperCase() {
	return /* @__PURE__ */ _overwrite((input) => input.toUpperCase());
}
/* @__NO_SIDE_EFFECTS__ */
function _slugify() {
	return /* @__PURE__ */ _overwrite((input) => slugify$1(input));
}
/* @__NO_SIDE_EFFECTS__ */
function _array(Class, element, params) {
	return new Class({
		type: "array",
		element,
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _file(Class, params) {
	return new Class({
		type: "file",
		...normalizeParams(params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _custom(Class, fn, _params) {
	const norm = normalizeParams(_params);
	norm.abort ?? (norm.abort = true);
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...norm
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _refine(Class, fn, _params) {
	return new Class({
		type: "custom",
		check: "custom",
		fn,
		...normalizeParams(_params)
	});
}
/* @__NO_SIDE_EFFECTS__ */
function _superRefine(fn, params) {
	const ch = /* @__PURE__ */ _check((payload) => {
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, ch._zod.def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = ch);
				_issue.continue ?? (_issue.continue = !ch._zod.def.abort);
				payload.issues.push(issue(_issue));
			}
		};
		return fn(payload.value, payload);
	}, params);
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function _check(fn, params) {
	const ch = new $ZodCheck({
		check: "custom",
		...normalizeParams(params)
	});
	ch._zod.check = fn;
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function describe$1(description) {
	const ch = new $ZodCheck({ check: "describe" });
	ch._zod.onattach = [(inst) => {
		const existing = globalRegistry.get(inst) ?? {};
		globalRegistry.add(inst, {
			...existing,
			description
		});
	}];
	ch._zod.check = () => {};
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function meta$1(metadata) {
	const ch = new $ZodCheck({ check: "meta" });
	ch._zod.onattach = [(inst) => {
		const existing = globalRegistry.get(inst) ?? {};
		globalRegistry.add(inst, {
			...existing,
			...metadata
		});
	}];
	ch._zod.check = () => {};
	return ch;
}
/* @__NO_SIDE_EFFECTS__ */
function _stringbool(Classes, _params) {
	const params = normalizeParams(_params);
	let truthyArray = params.truthy ?? [
		"true",
		"1",
		"yes",
		"on",
		"y",
		"enabled"
	];
	let falsyArray = params.falsy ?? [
		"false",
		"0",
		"no",
		"off",
		"n",
		"disabled"
	];
	if (params.case !== "sensitive") {
		truthyArray = truthyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
		falsyArray = falsyArray.map((v) => typeof v === "string" ? v.toLowerCase() : v);
	}
	const truthySet = new Set(truthyArray);
	const falsySet = new Set(falsyArray);
	const _Codec = Classes.Codec ?? $ZodCodec;
	const _Boolean = Classes.Boolean ?? $ZodBoolean;
	const codec$1 = new _Codec({
		type: "pipe",
		in: new (Classes.String ?? $ZodString)({
			type: "string",
			error: params.error
		}),
		out: new _Boolean({
			type: "boolean",
			error: params.error
		}),
		transform: ((input, payload) => {
			let data = input;
			if (params.case !== "sensitive") data = data.toLowerCase();
			if (truthySet.has(data)) return true;
			else if (falsySet.has(data)) return false;
			else {
				payload.issues.push({
					code: "invalid_value",
					expected: "stringbool",
					values: [...truthySet, ...falsySet],
					input: payload.value,
					inst: codec$1,
					continue: false
				});
				return {};
			}
		}),
		reverseTransform: ((input, _payload) => {
			if (input === true) return truthyArray[0] || "true";
			else return falsyArray[0] || "false";
		}),
		error: params.error
	});
	return codec$1;
}
/* @__NO_SIDE_EFFECTS__ */
function _stringFormat(Class, format$2, fnOrRegex, _params = {}) {
	const params = normalizeParams(_params);
	const def = {
		...normalizeParams(_params),
		check: "string_format",
		type: "string",
		format: format$2,
		fn: typeof fnOrRegex === "function" ? fnOrRegex : (val) => fnOrRegex.test(val),
		...params
	};
	if (fnOrRegex instanceof RegExp) def.pattern = fnOrRegex;
	return new Class(def);
}

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/to-json-schema.js
function initializeContext(params) {
	let target = params?.target ?? "draft-2020-12";
	if (target === "draft-4") target = "draft-04";
	if (target === "draft-7") target = "draft-07";
	return {
		processors: params.processors ?? {},
		metadataRegistry: params?.metadata ?? globalRegistry,
		target,
		unrepresentable: params?.unrepresentable ?? "throw",
		override: params?.override ?? (() => {}),
		io: params?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: params?.cycles ?? "ref",
		reused: params?.reused ?? "inline",
		external: params?.external ?? void 0
	};
}
function process$1(schema$6, ctx, _params = {
	path: [],
	schemaPath: []
}) {
	var _a$2;
	const def = schema$6._zod.def;
	const seen = ctx.seen.get(schema$6);
	if (seen) {
		seen.count++;
		if (_params.schemaPath.includes(schema$6)) seen.cycle = _params.path;
		return seen.schema;
	}
	const result = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: _params.path
	};
	ctx.seen.set(schema$6, result);
	const overrideSchema = schema$6._zod.toJSONSchema?.();
	if (overrideSchema) result.schema = overrideSchema;
	else {
		const params = {
			..._params,
			schemaPath: [..._params.schemaPath, schema$6],
			path: _params.path
		};
		if (schema$6._zod.processJSONSchema) schema$6._zod.processJSONSchema(ctx, result.schema, params);
		else {
			const _json = result.schema;
			const processor = ctx.processors[def.type];
			if (!processor) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
			processor(schema$6, ctx, _json, params);
		}
		const parent = schema$6._zod.parent;
		if (parent) {
			if (!result.ref) result.ref = parent;
			process$1(parent, ctx, params);
			ctx.seen.get(parent).isParent = true;
		}
	}
	const meta$2 = ctx.metadataRegistry.get(schema$6);
	if (meta$2) Object.assign(result.schema, meta$2);
	if (ctx.io === "input" && isTransforming(schema$6)) {
		delete result.schema.examples;
		delete result.schema.default;
	}
	if (ctx.io === "input" && "_prefault" in result.schema) (_a$2 = result.schema).default ?? (_a$2.default = result.schema._prefault);
	delete result.schema._prefault;
	return ctx.seen.get(schema$6).schema;
}
function extractDefs(ctx, schema$6) {
	const root = ctx.seen.get(schema$6);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const idToSchema = /* @__PURE__ */ new Map();
	for (const entry of ctx.seen.entries()) {
		const id = ctx.metadataRegistry.get(entry[0])?.id;
		if (id) {
			const existing = idToSchema.get(id);
			if (existing && existing !== entry[0]) throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			idToSchema.set(id, entry[0]);
		}
	}
	const makeURI = (entry) => {
		const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
		if (ctx.external) {
			const externalId = ctx.external.registry.get(entry[0])?.id;
			const uriGenerator = ctx.external.uri ?? ((id$1) => id$1);
			if (externalId) return { ref: uriGenerator(externalId) };
			const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
			entry[1].defId = id;
			return {
				defId: id,
				ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}`
			};
		}
		if (entry[1] === root) return { ref: "#" };
		const defUriPrefix = `#/${defsSegment}/`;
		const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
		return {
			defId,
			ref: defUriPrefix + defId
		};
	};
	const extractToDef = (entry) => {
		if (entry[1].schema.$ref) return;
		const seen = entry[1];
		const { ref, defId } = makeURI(entry);
		seen.def = { ...seen.schema };
		if (defId) seen.defId = defId;
		const schema$7 = seen.schema;
		for (const key in schema$7) delete schema$7[key];
		schema$7.$ref = ref;
	};
	if (ctx.cycles === "throw") for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.cycle) throw new Error(`Cycle detected: #/${seen.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (schema$6 === entry[0]) {
			extractToDef(entry);
			continue;
		}
		if (ctx.external) {
			const ext = ctx.external.registry.get(entry[0])?.id;
			if (schema$6 !== entry[0] && ext) {
				extractToDef(entry);
				continue;
			}
		}
		if (ctx.metadataRegistry.get(entry[0])?.id) {
			extractToDef(entry);
			continue;
		}
		if (seen.cycle) {
			extractToDef(entry);
			continue;
		}
		if (seen.count > 1) {
			if (ctx.reused === "ref") {
				extractToDef(entry);
				continue;
			}
		}
	}
}
function finalize(ctx, schema$6) {
	const root = ctx.seen.get(schema$6);
	if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
	const flattenRef = (zodSchema) => {
		const seen = ctx.seen.get(zodSchema);
		if (seen.ref === null) return;
		const schema$7 = seen.def ?? seen.schema;
		const _cached = { ...schema$7 };
		const ref = seen.ref;
		seen.ref = null;
		if (ref) {
			flattenRef(ref);
			const refSeen = ctx.seen.get(ref);
			const refSchema = refSeen.schema;
			if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
				schema$7.allOf = schema$7.allOf ?? [];
				schema$7.allOf.push(refSchema);
			} else Object.assign(schema$7, refSchema);
			Object.assign(schema$7, _cached);
			if (zodSchema._zod.parent === ref) for (const key in schema$7) {
				if (key === "$ref" || key === "allOf") continue;
				if (!(key in _cached)) delete schema$7[key];
			}
			if (refSchema.$ref && refSeen.def) for (const key in schema$7) {
				if (key === "$ref" || key === "allOf") continue;
				if (key in refSeen.def && JSON.stringify(schema$7[key]) === JSON.stringify(refSeen.def[key])) delete schema$7[key];
			}
		}
		const parent = zodSchema._zod.parent;
		if (parent && parent !== ref) {
			flattenRef(parent);
			const parentSeen = ctx.seen.get(parent);
			if (parentSeen?.schema.$ref) {
				schema$7.$ref = parentSeen.schema.$ref;
				if (parentSeen.def) for (const key in schema$7) {
					if (key === "$ref" || key === "allOf") continue;
					if (key in parentSeen.def && JSON.stringify(schema$7[key]) === JSON.stringify(parentSeen.def[key])) delete schema$7[key];
				}
			}
		}
		ctx.override({
			zodSchema,
			jsonSchema: schema$7,
			path: seen.path ?? []
		});
	};
	for (const entry of [...ctx.seen.entries()].reverse()) flattenRef(entry[0]);
	const result = {};
	if (ctx.target === "draft-2020-12") result.$schema = "https://json-schema.org/draft/2020-12/schema";
	else if (ctx.target === "draft-07") result.$schema = "http://json-schema.org/draft-07/schema#";
	else if (ctx.target === "draft-04") result.$schema = "http://json-schema.org/draft-04/schema#";
	else if (ctx.target === "openapi-3.0") {}
	if (ctx.external?.uri) {
		const id = ctx.external.registry.get(schema$6)?.id;
		if (!id) throw new Error("Schema is missing an `id` property");
		result.$id = ctx.external.uri(id);
	}
	Object.assign(result, root.def ?? root.schema);
	const rootMetaId = ctx.metadataRegistry.get(schema$6)?.id;
	if (rootMetaId !== void 0 && result.id === rootMetaId) delete result.id;
	const defs = ctx.external?.defs ?? {};
	for (const entry of ctx.seen.entries()) {
		const seen = entry[1];
		if (seen.def && seen.defId) {
			if (seen.def.id === seen.defId) delete seen.def.id;
			defs[seen.defId] = seen.def;
		}
	}
	if (ctx.external) {} else if (Object.keys(defs).length > 0) if (ctx.target === "draft-2020-12") result.$defs = defs;
	else result.definitions = defs;
	try {
		const finalized = JSON.parse(JSON.stringify(result));
		Object.defineProperty(finalized, "~standard", {
			value: {
				...schema$6["~standard"],
				jsonSchema: {
					input: createStandardJSONSchemaMethod(schema$6, "input", ctx.processors),
					output: createStandardJSONSchemaMethod(schema$6, "output", ctx.processors)
				}
			},
			enumerable: false,
			writable: false
		});
		return finalized;
	} catch (_err) {
		throw new Error("Error converting schema to JSON.");
	}
}
function isTransforming(_schema, _ctx) {
	const ctx = _ctx ?? { seen: /* @__PURE__ */ new Set() };
	if (ctx.seen.has(_schema)) return false;
	ctx.seen.add(_schema);
	const def = _schema._zod.def;
	if (def.type === "transform") return true;
	if (def.type === "array") return isTransforming(def.element, ctx);
	if (def.type === "set") return isTransforming(def.valueType, ctx);
	if (def.type === "lazy") return isTransforming(def.getter(), ctx);
	if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault") return isTransforming(def.innerType, ctx);
	if (def.type === "intersection") return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
	if (def.type === "record" || def.type === "map") return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
	if (def.type === "pipe") {
		if (_schema._zod.traits.has("$ZodCodec")) return true;
		return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
	}
	if (def.type === "object") {
		for (const key in def.shape) if (isTransforming(def.shape[key], ctx)) return true;
		return false;
	}
	if (def.type === "union") {
		for (const option of def.options) if (isTransforming(option, ctx)) return true;
		return false;
	}
	if (def.type === "tuple") {
		for (const item of def.items) if (isTransforming(item, ctx)) return true;
		if (def.rest && isTransforming(def.rest, ctx)) return true;
		return false;
	}
	return false;
}
/**
* Creates a toJSONSchema method for a schema instance.
* This encapsulates the logic of initializing context, processing, extracting defs, and finalizing.
*/
const createToJSONSchemaMethod = (schema$6, processors = {}) => (params) => {
	const ctx = initializeContext({
		...params,
		processors
	});
	process$1(schema$6, ctx);
	extractDefs(ctx, schema$6);
	return finalize(ctx, schema$6);
};
const createStandardJSONSchemaMethod = (schema$6, io, processors = {}) => (params) => {
	const { libraryOptions, target } = params ?? {};
	const ctx = initializeContext({
		...libraryOptions ?? {},
		target,
		io,
		processors
	});
	process$1(schema$6, ctx);
	extractDefs(ctx, schema$6);
	return finalize(ctx, schema$6);
};

//#endregion
//#region node_modules/incur/node_modules/zod/v4/core/json-schema-processors.js
const formatMap = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
};
const stringProcessor = (schema$6, ctx, _json, _params) => {
	const json$1 = _json;
	json$1.type = "string";
	const { minimum, maximum, format: format$2, patterns, contentEncoding } = schema$6._zod.bag;
	if (typeof minimum === "number") json$1.minLength = minimum;
	if (typeof maximum === "number") json$1.maxLength = maximum;
	if (format$2) {
		json$1.format = formatMap[format$2] ?? format$2;
		if (json$1.format === "") delete json$1.format;
		if (format$2 === "time") delete json$1.format;
	}
	if (contentEncoding) json$1.contentEncoding = contentEncoding;
	if (patterns && patterns.size > 0) {
		const regexes = [...patterns];
		if (regexes.length === 1) json$1.pattern = regexes[0].source;
		else if (regexes.length > 1) json$1.allOf = [...regexes.map((regex) => ({
			...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: regex.source
		}))];
	}
};
const numberProcessor = (schema$6, ctx, _json, _params) => {
	const json$1 = _json;
	const { minimum, maximum, format: format$2, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema$6._zod.bag;
	if (typeof format$2 === "string" && format$2.includes("int")) json$1.type = "integer";
	else json$1.type = "number";
	const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
	const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
	const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
	if (exMin) if (legacy) {
		json$1.minimum = exclusiveMinimum;
		json$1.exclusiveMinimum = true;
	} else json$1.exclusiveMinimum = exclusiveMinimum;
	else if (typeof minimum === "number") json$1.minimum = minimum;
	if (exMax) if (legacy) {
		json$1.maximum = exclusiveMaximum;
		json$1.exclusiveMaximum = true;
	} else json$1.exclusiveMaximum = exclusiveMaximum;
	else if (typeof maximum === "number") json$1.maximum = maximum;
	if (typeof multipleOf === "number") json$1.multipleOf = multipleOf;
};
const booleanProcessor = (_schema, _ctx, json$1, _params) => {
	json$1.type = "boolean";
};
const bigintProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
};
const symbolProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
};
const nullProcessor = (_schema, ctx, json$1, _params) => {
	if (ctx.target === "openapi-3.0") {
		json$1.type = "string";
		json$1.nullable = true;
		json$1.enum = [null];
	} else json$1.type = "null";
};
const undefinedProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
};
const voidProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
};
const neverProcessor = (_schema, _ctx, json$1, _params) => {
	json$1.not = {};
};
const anyProcessor = (_schema, _ctx, _json, _params) => {};
const unknownProcessor = (_schema, _ctx, _json, _params) => {};
const dateProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
};
const enumProcessor = (schema$6, _ctx, json$1, _params) => {
	const def = schema$6._zod.def;
	const values = getEnumValues(def.entries);
	if (values.every((v) => typeof v === "number")) json$1.type = "number";
	if (values.every((v) => typeof v === "string")) json$1.type = "string";
	json$1.enum = values;
};
const literalProcessor = (schema$6, ctx, json$1, _params) => {
	const def = schema$6._zod.def;
	const vals = [];
	for (const val of def.values) if (val === void 0) {
		if (ctx.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
	} else if (typeof val === "bigint") if (ctx.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
	else vals.push(Number(val));
	else vals.push(val);
	if (vals.length === 0) {} else if (vals.length === 1) {
		const val = vals[0];
		json$1.type = val === null ? "null" : typeof val;
		if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") json$1.enum = [val];
		else json$1.const = val;
	} else {
		if (vals.every((v) => typeof v === "number")) json$1.type = "number";
		if (vals.every((v) => typeof v === "string")) json$1.type = "string";
		if (vals.every((v) => typeof v === "boolean")) json$1.type = "boolean";
		if (vals.every((v) => v === null)) json$1.type = "null";
		json$1.enum = vals;
	}
};
const nanProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
};
const templateLiteralProcessor = (schema$6, _ctx, json$1, _params) => {
	const _json = json$1;
	const pattern = schema$6._zod.pattern;
	if (!pattern) throw new Error("Pattern not found in template literal");
	_json.type = "string";
	_json.pattern = pattern.source;
};
const fileProcessor = (schema$6, _ctx, json$1, _params) => {
	const _json = json$1;
	const file$1 = {
		type: "string",
		format: "binary",
		contentEncoding: "binary"
	};
	const { minimum, maximum, mime } = schema$6._zod.bag;
	if (minimum !== void 0) file$1.minLength = minimum;
	if (maximum !== void 0) file$1.maxLength = maximum;
	if (mime) if (mime.length === 1) {
		file$1.contentMediaType = mime[0];
		Object.assign(_json, file$1);
	} else {
		Object.assign(_json, file$1);
		_json.anyOf = mime.map((m) => ({ contentMediaType: m }));
	}
	else Object.assign(_json, file$1);
};
const successProcessor = (_schema, _ctx, json$1, _params) => {
	json$1.type = "boolean";
};
const customProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
};
const functionProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema");
};
const transformProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
};
const mapProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
};
const setProcessor = (_schema, ctx, _json, _params) => {
	if (ctx.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
};
const arrayProcessor = (schema$6, ctx, _json, params) => {
	const json$1 = _json;
	const def = schema$6._zod.def;
	const { minimum, maximum } = schema$6._zod.bag;
	if (typeof minimum === "number") json$1.minItems = minimum;
	if (typeof maximum === "number") json$1.maxItems = maximum;
	json$1.type = "array";
	json$1.items = process$1(def.element, ctx, {
		...params,
		path: [...params.path, "items"]
	});
};
const objectProcessor = (schema$6, ctx, _json, params) => {
	const json$1 = _json;
	const def = schema$6._zod.def;
	json$1.type = "object";
	json$1.properties = {};
	const shape = def.shape;
	for (const key in shape) json$1.properties[key] = process$1(shape[key], ctx, {
		...params,
		path: [
			...params.path,
			"properties",
			key
		]
	});
	const allKeys = new Set(Object.keys(shape));
	const requiredKeys = new Set([...allKeys].filter((key) => {
		const v = def.shape[key]._zod;
		if (ctx.io === "input") return v.optin === void 0;
		else return v.optout === void 0;
	}));
	if (requiredKeys.size > 0) json$1.required = Array.from(requiredKeys);
	if (def.catchall?._zod.def.type === "never") json$1.additionalProperties = false;
	else if (!def.catchall) {
		if (ctx.io === "output") json$1.additionalProperties = false;
	} else if (def.catchall) json$1.additionalProperties = process$1(def.catchall, ctx, {
		...params,
		path: [...params.path, "additionalProperties"]
	});
};
const unionProcessor = (schema$6, ctx, json$1, params) => {
	const def = schema$6._zod.def;
	const isExclusive = def.inclusive === false;
	const options = def.options.map((x, i) => process$1(x, ctx, {
		...params,
		path: [
			...params.path,
			isExclusive ? "oneOf" : "anyOf",
			i
		]
	}));
	if (isExclusive) json$1.oneOf = options;
	else json$1.anyOf = options;
};
const intersectionProcessor = (schema$6, ctx, json$1, params) => {
	const def = schema$6._zod.def;
	const a = process$1(def.left, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			0
		]
	});
	const b = process$1(def.right, ctx, {
		...params,
		path: [
			...params.path,
			"allOf",
			1
		]
	});
	const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
	json$1.allOf = [...isSimpleIntersection(a) ? a.allOf : [a], ...isSimpleIntersection(b) ? b.allOf : [b]];
};
const tupleProcessor = (schema$6, ctx, _json, params) => {
	const json$1 = _json;
	const def = schema$6._zod.def;
	json$1.type = "array";
	const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
	const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
	const prefixItems = def.items.map((x, i) => process$1(x, ctx, {
		...params,
		path: [
			...params.path,
			prefixPath,
			i
		]
	}));
	const rest = def.rest ? process$1(def.rest, ctx, {
		...params,
		path: [
			...params.path,
			restPath,
			...ctx.target === "openapi-3.0" ? [def.items.length] : []
		]
	}) : null;
	if (ctx.target === "draft-2020-12") {
		json$1.prefixItems = prefixItems;
		if (rest) json$1.items = rest;
	} else if (ctx.target === "openapi-3.0") {
		json$1.items = { anyOf: prefixItems };
		if (rest) json$1.items.anyOf.push(rest);
		json$1.minItems = prefixItems.length;
		if (!rest) json$1.maxItems = prefixItems.length;
	} else {
		json$1.items = prefixItems;
		if (rest) json$1.additionalItems = rest;
	}
	const { minimum, maximum } = schema$6._zod.bag;
	if (typeof minimum === "number") json$1.minItems = minimum;
	if (typeof maximum === "number") json$1.maxItems = maximum;
};
const recordProcessor = (schema$6, ctx, _json, params) => {
	const json$1 = _json;
	const def = schema$6._zod.def;
	json$1.type = "object";
	const keyType = def.keyType;
	const patterns = keyType._zod.bag?.patterns;
	if (def.mode === "loose" && patterns && patterns.size > 0) {
		const valueSchema = process$1(def.valueType, ctx, {
			...params,
			path: [
				...params.path,
				"patternProperties",
				"*"
			]
		});
		json$1.patternProperties = {};
		for (const pattern of patterns) json$1.patternProperties[pattern.source] = valueSchema;
	} else {
		if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") json$1.propertyNames = process$1(def.keyType, ctx, {
			...params,
			path: [...params.path, "propertyNames"]
		});
		json$1.additionalProperties = process$1(def.valueType, ctx, {
			...params,
			path: [...params.path, "additionalProperties"]
		});
	}
	const keyValues = keyType._zod.values;
	if (keyValues) {
		const validKeyValues = [...keyValues].filter((v) => typeof v === "string" || typeof v === "number");
		if (validKeyValues.length > 0) json$1.required = validKeyValues;
	}
};
const nullableProcessor = (schema$6, ctx, json$1, params) => {
	const def = schema$6._zod.def;
	const inner = process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema$6);
	if (ctx.target === "openapi-3.0") {
		seen.ref = def.innerType;
		json$1.nullable = true;
	} else json$1.anyOf = [inner, { type: "null" }];
};
const nonoptionalProcessor = (schema$6, ctx, _json, params) => {
	const def = schema$6._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema$6);
	seen.ref = def.innerType;
};
const defaultProcessor = (schema$6, ctx, json$1, params) => {
	const def = schema$6._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema$6);
	seen.ref = def.innerType;
	json$1.default = JSON.parse(JSON.stringify(def.defaultValue));
};
const prefaultProcessor = (schema$6, ctx, json$1, params) => {
	const def = schema$6._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema$6);
	seen.ref = def.innerType;
	if (ctx.io === "input") json$1._prefault = JSON.parse(JSON.stringify(def.defaultValue));
};
const catchProcessor = (schema$6, ctx, json$1, params) => {
	const def = schema$6._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema$6);
	seen.ref = def.innerType;
	let catchValue;
	try {
		catchValue = def.catchValue(void 0);
	} catch {
		throw new Error("Dynamic catch values are not supported in JSON Schema");
	}
	json$1.default = catchValue;
};
const pipeProcessor = (schema$6, ctx, _json, params) => {
	const def = schema$6._zod.def;
	const inIsTransform = def.in._zod.traits.has("$ZodTransform");
	const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
	process$1(innerType, ctx, params);
	const seen = ctx.seen.get(schema$6);
	seen.ref = innerType;
};
const readonlyProcessor = (schema$6, ctx, json$1, params) => {
	const def = schema$6._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema$6);
	seen.ref = def.innerType;
	json$1.readOnly = true;
};
const promiseProcessor = (schema$6, ctx, _json, params) => {
	const def = schema$6._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema$6);
	seen.ref = def.innerType;
};
const optionalProcessor = (schema$6, ctx, _json, params) => {
	const def = schema$6._zod.def;
	process$1(def.innerType, ctx, params);
	const seen = ctx.seen.get(schema$6);
	seen.ref = def.innerType;
};
const lazyProcessor = (schema$6, ctx, _json, params) => {
	const innerType = schema$6._zod.innerType;
	process$1(innerType, ctx, params);
	const seen = ctx.seen.get(schema$6);
	seen.ref = innerType;
};
const allProcessors = {
	string: stringProcessor,
	number: numberProcessor,
	boolean: booleanProcessor,
	bigint: bigintProcessor,
	symbol: symbolProcessor,
	null: nullProcessor,
	undefined: undefinedProcessor,
	void: voidProcessor,
	never: neverProcessor,
	any: anyProcessor,
	unknown: unknownProcessor,
	date: dateProcessor,
	enum: enumProcessor,
	literal: literalProcessor,
	nan: nanProcessor,
	template_literal: templateLiteralProcessor,
	file: fileProcessor,
	success: successProcessor,
	custom: customProcessor,
	function: functionProcessor,
	transform: transformProcessor,
	map: mapProcessor,
	set: setProcessor,
	array: arrayProcessor,
	object: objectProcessor,
	union: unionProcessor,
	intersection: intersectionProcessor,
	tuple: tupleProcessor,
	record: recordProcessor,
	nullable: nullableProcessor,
	nonoptional: nonoptionalProcessor,
	default: defaultProcessor,
	prefault: prefaultProcessor,
	catch: catchProcessor,
	pipe: pipeProcessor,
	readonly: readonlyProcessor,
	promise: promiseProcessor,
	optional: optionalProcessor,
	lazy: lazyProcessor
};
function toJSONSchema(input, params) {
	if ("_idmap" in input) {
		const registry$1 = input;
		const ctx$1 = initializeContext({
			...params,
			processors: allProcessors
		});
		const defs = {};
		for (const entry of registry$1._idmap.entries()) {
			const [_, schema$6] = entry;
			process$1(schema$6, ctx$1);
		}
		const schemas$1 = {};
		ctx$1.external = {
			registry: registry$1,
			uri: params?.uri,
			defs
		};
		for (const entry of registry$1._idmap.entries()) {
			const [key, schema$6] = entry;
			extractDefs(ctx$1, schema$6);
			schemas$1[key] = finalize(ctx$1, schema$6);
		}
		if (Object.keys(defs).length > 0) schemas$1.__shared = { [ctx$1.target === "draft-2020-12" ? "$defs" : "definitions"]: defs };
		return { schemas: schemas$1 };
	}
	const ctx = initializeContext({
		...params,
		processors: allProcessors
	});
	process$1(input, ctx);
	extractDefs(ctx, input);
	return finalize(ctx, input);
}

//#endregion
//#region node_modules/incur/node_modules/zod/v4/classic/checks.js
var checks_exports = /* @__PURE__ */ __export({
	endsWith: () => _endsWith,
	gt: () => _gt,
	gte: () => _gte,
	includes: () => _includes,
	length: () => _length,
	lowercase: () => _lowercase,
	lt: () => _lt,
	lte: () => _lte,
	maxLength: () => _maxLength,
	maxSize: () => _maxSize,
	mime: () => _mime,
	minLength: () => _minLength,
	minSize: () => _minSize,
	multipleOf: () => _multipleOf,
	negative: () => _negative,
	nonnegative: () => _nonnegative,
	nonpositive: () => _nonpositive,
	normalize: () => _normalize,
	overwrite: () => _overwrite,
	positive: () => _positive,
	property: () => _property,
	regex: () => _regex,
	size: () => _size,
	slugify: () => _slugify,
	startsWith: () => _startsWith,
	toLowerCase: () => _toLowerCase,
	toUpperCase: () => _toUpperCase,
	trim: () => _trim,
	uppercase: () => _uppercase
});

//#endregion
//#region node_modules/incur/node_modules/zod/v4/classic/iso.js
var iso_exports = /* @__PURE__ */ __export({
	ZodISODate: () => ZodISODate,
	ZodISODateTime: () => ZodISODateTime,
	ZodISODuration: () => ZodISODuration,
	ZodISOTime: () => ZodISOTime,
	date: () => date$1,
	datetime: () => datetime,
	duration: () => duration,
	time: () => time
});
const ZodISODateTime = /* @__PURE__ */ $constructor("ZodISODateTime", (inst, def) => {
	$ZodISODateTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function datetime(params) {
	return _isoDateTime(ZodISODateTime, params);
}
const ZodISODate = /* @__PURE__ */ $constructor("ZodISODate", (inst, def) => {
	$ZodISODate.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function date$1(params) {
	return _isoDate(ZodISODate, params);
}
const ZodISOTime = /* @__PURE__ */ $constructor("ZodISOTime", (inst, def) => {
	$ZodISOTime.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function time(params) {
	return _isoTime(ZodISOTime, params);
}
const ZodISODuration = /* @__PURE__ */ $constructor("ZodISODuration", (inst, def) => {
	$ZodISODuration.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function duration(params) {
	return _isoDuration(ZodISODuration, params);
}

//#endregion
//#region node_modules/incur/node_modules/zod/v4/classic/errors.js
const initializer = (inst, issues) => {
	$ZodError.init(inst, issues);
	inst.name = "ZodError";
	Object.defineProperties(inst, {
		format: { value: (mapper) => formatError(inst, mapper) },
		flatten: { value: (mapper) => flattenError(inst, mapper) },
		addIssue: { value: (issue$1) => {
			inst.issues.push(issue$1);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		addIssues: { value: (issues$1) => {
			inst.issues.push(...issues$1);
			inst.message = JSON.stringify(inst.issues, jsonStringifyReplacer, 2);
		} },
		isEmpty: { get() {
			return inst.issues.length === 0;
		} }
	});
};
const ZodRealError = /* @__PURE__ */ $constructor("ZodError", initializer, { Parent: Error });

//#endregion
//#region node_modules/incur/node_modules/zod/v4/classic/parse.js
const parse$3 = /* @__PURE__ */ _parse(ZodRealError);
const parseAsync = /* @__PURE__ */ _parseAsync(ZodRealError);
const safeParse = /* @__PURE__ */ _safeParse(ZodRealError);
const safeParseAsync = /* @__PURE__ */ _safeParseAsync(ZodRealError);
const encode$1 = /* @__PURE__ */ _encode(ZodRealError);
const decode = /* @__PURE__ */ _decode(ZodRealError);
const encodeAsync = /* @__PURE__ */ _encodeAsync(ZodRealError);
const decodeAsync = /* @__PURE__ */ _decodeAsync(ZodRealError);
const safeEncode = /* @__PURE__ */ _safeEncode(ZodRealError);
const safeDecode = /* @__PURE__ */ _safeDecode(ZodRealError);
const safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync(ZodRealError);
const safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync(ZodRealError);

//#endregion
//#region node_modules/incur/node_modules/zod/v4/classic/schemas.js
var schemas_exports = /* @__PURE__ */ __export({
	ZodAny: () => ZodAny,
	ZodArray: () => ZodArray,
	ZodBase64: () => ZodBase64,
	ZodBase64URL: () => ZodBase64URL,
	ZodBigInt: () => ZodBigInt,
	ZodBigIntFormat: () => ZodBigIntFormat,
	ZodBoolean: () => ZodBoolean,
	ZodCIDRv4: () => ZodCIDRv4,
	ZodCIDRv6: () => ZodCIDRv6,
	ZodCUID: () => ZodCUID,
	ZodCUID2: () => ZodCUID2,
	ZodCatch: () => ZodCatch,
	ZodCodec: () => ZodCodec,
	ZodCustom: () => ZodCustom,
	ZodCustomStringFormat: () => ZodCustomStringFormat,
	ZodDate: () => ZodDate,
	ZodDefault: () => ZodDefault,
	ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
	ZodE164: () => ZodE164,
	ZodEmail: () => ZodEmail,
	ZodEmoji: () => ZodEmoji,
	ZodEnum: () => ZodEnum,
	ZodExactOptional: () => ZodExactOptional,
	ZodFile: () => ZodFile,
	ZodFunction: () => ZodFunction,
	ZodGUID: () => ZodGUID,
	ZodIPv4: () => ZodIPv4,
	ZodIPv6: () => ZodIPv6,
	ZodIntersection: () => ZodIntersection,
	ZodJWT: () => ZodJWT,
	ZodKSUID: () => ZodKSUID,
	ZodLazy: () => ZodLazy,
	ZodLiteral: () => ZodLiteral,
	ZodMAC: () => ZodMAC,
	ZodMap: () => ZodMap,
	ZodNaN: () => ZodNaN,
	ZodNanoID: () => ZodNanoID,
	ZodNever: () => ZodNever,
	ZodNonOptional: () => ZodNonOptional,
	ZodNull: () => ZodNull,
	ZodNullable: () => ZodNullable,
	ZodNumber: () => ZodNumber,
	ZodNumberFormat: () => ZodNumberFormat,
	ZodObject: () => ZodObject,
	ZodOptional: () => ZodOptional,
	ZodPipe: () => ZodPipe,
	ZodPrefault: () => ZodPrefault,
	ZodPreprocess: () => ZodPreprocess,
	ZodPromise: () => ZodPromise,
	ZodReadonly: () => ZodReadonly,
	ZodRecord: () => ZodRecord,
	ZodSet: () => ZodSet,
	ZodString: () => ZodString,
	ZodStringFormat: () => ZodStringFormat,
	ZodSuccess: () => ZodSuccess,
	ZodSymbol: () => ZodSymbol,
	ZodTemplateLiteral: () => ZodTemplateLiteral,
	ZodTransform: () => ZodTransform,
	ZodTuple: () => ZodTuple,
	ZodType: () => ZodType,
	ZodULID: () => ZodULID,
	ZodURL: () => ZodURL,
	ZodUUID: () => ZodUUID,
	ZodUndefined: () => ZodUndefined,
	ZodUnion: () => ZodUnion,
	ZodUnknown: () => ZodUnknown,
	ZodVoid: () => ZodVoid,
	ZodXID: () => ZodXID,
	ZodXor: () => ZodXor,
	_ZodString: () => _ZodString,
	_default: () => _default,
	_function: () => _function,
	any: () => any,
	array: () => array,
	base64: () => base64,
	base64url: () => base64url,
	bigint: () => bigint,
	boolean: () => boolean$1,
	catch: () => _catch,
	check: () => check,
	cidrv4: () => cidrv4,
	cidrv6: () => cidrv6,
	codec: () => codec,
	cuid: () => cuid,
	cuid2: () => cuid2,
	custom: () => custom,
	date: () => date,
	describe: () => describe,
	discriminatedUnion: () => discriminatedUnion,
	e164: () => e164,
	email: () => email,
	emoji: () => emoji,
	enum: () => _enum,
	exactOptional: () => exactOptional,
	file: () => file,
	float32: () => float32,
	float64: () => float64,
	function: () => _function,
	guid: () => guid,
	hash: () => hash$1,
	hex: () => hex,
	hostname: () => hostname,
	httpUrl: () => httpUrl,
	instanceof: () => _instanceof,
	int: () => int$5,
	int32: () => int32,
	int64: () => int64,
	intersection: () => intersection,
	invertCodec: () => invertCodec,
	ipv4: () => ipv4,
	ipv6: () => ipv6,
	json: () => json,
	jwt: () => jwt,
	keyof: () => keyof,
	ksuid: () => ksuid,
	lazy: () => lazy,
	literal: () => literal,
	looseObject: () => looseObject,
	looseRecord: () => looseRecord,
	mac: () => mac,
	map: () => map$6,
	meta: () => meta,
	nan: () => nan,
	nanoid: () => nanoid,
	nativeEnum: () => nativeEnum,
	never: () => never,
	nonoptional: () => nonoptional,
	null: () => _null$3,
	nullable: () => nullable,
	nullish: () => nullish,
	number: () => number$1,
	object: () => object,
	optional: () => optional,
	partialRecord: () => partialRecord,
	pipe: () => pipe,
	prefault: () => prefault,
	preprocess: () => preprocess,
	promise: () => promise,
	readonly: () => readonly,
	record: () => record,
	refine: () => refine,
	set: () => set$3,
	strictObject: () => strictObject,
	string: () => string$5,
	stringFormat: () => stringFormat,
	stringbool: () => stringbool,
	success: () => success,
	superRefine: () => superRefine,
	symbol: () => symbol,
	templateLiteral: () => templateLiteral,
	transform: () => transform,
	tuple: () => tuple,
	uint32: () => uint32,
	uint64: () => uint64,
	ulid: () => ulid,
	undefined: () => _undefined,
	union: () => union,
	unknown: () => unknown,
	url: () => url,
	uuid: () => uuid,
	uuidv4: () => uuidv4,
	uuidv6: () => uuidv6,
	uuidv7: () => uuidv7,
	void: () => _void,
	xid: () => xid,
	xor: () => xor
});
const _installedGroups = /* @__PURE__ */ new WeakMap();
function _installLazyMethods(inst, group, methods) {
	const proto = Object.getPrototypeOf(inst);
	let installed = _installedGroups.get(proto);
	if (!installed) {
		installed = /* @__PURE__ */ new Set();
		_installedGroups.set(proto, installed);
	}
	if (installed.has(group)) return;
	installed.add(group);
	for (const key in methods) {
		const fn = methods[key];
		Object.defineProperty(proto, key, {
			configurable: true,
			enumerable: false,
			get() {
				const bound = fn.bind(this);
				Object.defineProperty(this, key, {
					configurable: true,
					writable: true,
					enumerable: true,
					value: bound
				});
				return bound;
			},
			set(v) {
				Object.defineProperty(this, key, {
					configurable: true,
					writable: true,
					enumerable: true,
					value: v
				});
			}
		});
	}
}
const ZodType = /* @__PURE__ */ $constructor("ZodType", (inst, def) => {
	$ZodType.init(inst, def);
	Object.assign(inst["~standard"], { jsonSchema: {
		input: createStandardJSONSchemaMethod(inst, "input"),
		output: createStandardJSONSchemaMethod(inst, "output")
	} });
	inst.toJSONSchema = createToJSONSchemaMethod(inst, {});
	inst.def = def;
	inst.type = def.type;
	Object.defineProperty(inst, "_def", { value: def });
	inst.parse = (data, params) => parse$3(inst, data, params, { callee: inst.parse });
	inst.safeParse = (data, params) => safeParse(inst, data, params);
	inst.parseAsync = async (data, params) => parseAsync(inst, data, params, { callee: inst.parseAsync });
	inst.safeParseAsync = async (data, params) => safeParseAsync(inst, data, params);
	inst.spa = inst.safeParseAsync;
	inst.encode = (data, params) => encode$1(inst, data, params);
	inst.decode = (data, params) => decode(inst, data, params);
	inst.encodeAsync = async (data, params) => encodeAsync(inst, data, params);
	inst.decodeAsync = async (data, params) => decodeAsync(inst, data, params);
	inst.safeEncode = (data, params) => safeEncode(inst, data, params);
	inst.safeDecode = (data, params) => safeDecode(inst, data, params);
	inst.safeEncodeAsync = async (data, params) => safeEncodeAsync(inst, data, params);
	inst.safeDecodeAsync = async (data, params) => safeDecodeAsync(inst, data, params);
	_installLazyMethods(inst, "ZodType", {
		check(...chks) {
			const def$1 = this.def;
			return this.clone(mergeDefs(def$1, { checks: [...def$1.checks ?? [], ...chks.map((ch) => typeof ch === "function" ? { _zod: {
				check: ch,
				def: { check: "custom" },
				onattach: []
			} } : ch)] }), { parent: true });
		},
		with(...chks) {
			return this.check(...chks);
		},
		clone(def$1, params) {
			return clone(this, def$1, params);
		},
		brand() {
			return this;
		},
		register(reg, meta$2) {
			reg.add(this, meta$2);
			return this;
		},
		refine(check$1, params) {
			return this.check(refine(check$1, params));
		},
		superRefine(refinement, params) {
			return this.check(superRefine(refinement, params));
		},
		overwrite(fn) {
			return this.check(_overwrite(fn));
		},
		optional() {
			return optional(this);
		},
		exactOptional() {
			return exactOptional(this);
		},
		nullable() {
			return nullable(this);
		},
		nullish() {
			return optional(nullable(this));
		},
		nonoptional(params) {
			return nonoptional(this, params);
		},
		array() {
			return array(this);
		},
		or(arg) {
			return union([this, arg]);
		},
		and(arg) {
			return intersection(this, arg);
		},
		transform(tx) {
			return pipe(this, transform(tx));
		},
		default(d) {
			return _default(this, d);
		},
		prefault(d) {
			return prefault(this, d);
		},
		catch(params) {
			return _catch(this, params);
		},
		pipe(target) {
			return pipe(this, target);
		},
		readonly() {
			return readonly(this);
		},
		describe(description) {
			const cl = this.clone();
			globalRegistry.add(cl, { description });
			return cl;
		},
		meta(...args) {
			if (args.length === 0) return globalRegistry.get(this);
			const cl = this.clone();
			globalRegistry.add(cl, args[0]);
			return cl;
		},
		isOptional() {
			return this.safeParse(void 0).success;
		},
		isNullable() {
			return this.safeParse(null).success;
		},
		apply(fn) {
			return fn(this);
		}
	});
	Object.defineProperty(inst, "description", {
		get() {
			return globalRegistry.get(inst)?.description;
		},
		configurable: true
	});
	return inst;
});
/** @internal */
const _ZodString = /* @__PURE__ */ $constructor("_ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => stringProcessor(inst, ctx, json$1, params);
	const bag = inst._zod.bag;
	inst.format = bag.format ?? null;
	inst.minLength = bag.minimum ?? null;
	inst.maxLength = bag.maximum ?? null;
	_installLazyMethods(inst, "_ZodString", {
		regex(...args) {
			return this.check(_regex(...args));
		},
		includes(...args) {
			return this.check(_includes(...args));
		},
		startsWith(...args) {
			return this.check(_startsWith(...args));
		},
		endsWith(...args) {
			return this.check(_endsWith(...args));
		},
		min(...args) {
			return this.check(_minLength(...args));
		},
		max(...args) {
			return this.check(_maxLength(...args));
		},
		length(...args) {
			return this.check(_length(...args));
		},
		nonempty(...args) {
			return this.check(_minLength(1, ...args));
		},
		lowercase(params) {
			return this.check(_lowercase(params));
		},
		uppercase(params) {
			return this.check(_uppercase(params));
		},
		trim() {
			return this.check(_trim());
		},
		normalize(...args) {
			return this.check(_normalize(...args));
		},
		toLowerCase() {
			return this.check(_toLowerCase());
		},
		toUpperCase() {
			return this.check(_toUpperCase());
		},
		slugify() {
			return this.check(_slugify());
		}
	});
});
const ZodString = /* @__PURE__ */ $constructor("ZodString", (inst, def) => {
	$ZodString.init(inst, def);
	_ZodString.init(inst, def);
	inst.email = (params) => inst.check(_email(ZodEmail, params));
	inst.url = (params) => inst.check(_url(ZodURL, params));
	inst.jwt = (params) => inst.check(_jwt(ZodJWT, params));
	inst.emoji = (params) => inst.check(_emoji(ZodEmoji, params));
	inst.guid = (params) => inst.check(_guid(ZodGUID, params));
	inst.uuid = (params) => inst.check(_uuid(ZodUUID, params));
	inst.uuidv4 = (params) => inst.check(_uuidv4(ZodUUID, params));
	inst.uuidv6 = (params) => inst.check(_uuidv6(ZodUUID, params));
	inst.uuidv7 = (params) => inst.check(_uuidv7(ZodUUID, params));
	inst.nanoid = (params) => inst.check(_nanoid(ZodNanoID, params));
	inst.guid = (params) => inst.check(_guid(ZodGUID, params));
	inst.cuid = (params) => inst.check(_cuid(ZodCUID, params));
	inst.cuid2 = (params) => inst.check(_cuid2(ZodCUID2, params));
	inst.ulid = (params) => inst.check(_ulid(ZodULID, params));
	inst.base64 = (params) => inst.check(_base64(ZodBase64, params));
	inst.base64url = (params) => inst.check(_base64url(ZodBase64URL, params));
	inst.xid = (params) => inst.check(_xid(ZodXID, params));
	inst.ksuid = (params) => inst.check(_ksuid(ZodKSUID, params));
	inst.ipv4 = (params) => inst.check(_ipv4(ZodIPv4, params));
	inst.ipv6 = (params) => inst.check(_ipv6(ZodIPv6, params));
	inst.cidrv4 = (params) => inst.check(_cidrv4(ZodCIDRv4, params));
	inst.cidrv6 = (params) => inst.check(_cidrv6(ZodCIDRv6, params));
	inst.e164 = (params) => inst.check(_e164(ZodE164, params));
	inst.datetime = (params) => inst.check(datetime(params));
	inst.date = (params) => inst.check(date$1(params));
	inst.time = (params) => inst.check(time(params));
	inst.duration = (params) => inst.check(duration(params));
});
function string$5(params) {
	return _string(ZodString, params);
}
const ZodStringFormat = /* @__PURE__ */ $constructor("ZodStringFormat", (inst, def) => {
	$ZodStringFormat.init(inst, def);
	_ZodString.init(inst, def);
});
const ZodEmail = /* @__PURE__ */ $constructor("ZodEmail", (inst, def) => {
	$ZodEmail.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function email(params) {
	return _email(ZodEmail, params);
}
const ZodGUID = /* @__PURE__ */ $constructor("ZodGUID", (inst, def) => {
	$ZodGUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function guid(params) {
	return _guid(ZodGUID, params);
}
const ZodUUID = /* @__PURE__ */ $constructor("ZodUUID", (inst, def) => {
	$ZodUUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function uuid(params) {
	return _uuid(ZodUUID, params);
}
function uuidv4(params) {
	return _uuidv4(ZodUUID, params);
}
function uuidv6(params) {
	return _uuidv6(ZodUUID, params);
}
function uuidv7(params) {
	return _uuidv7(ZodUUID, params);
}
const ZodURL = /* @__PURE__ */ $constructor("ZodURL", (inst, def) => {
	$ZodURL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function url(params) {
	return _url(ZodURL, params);
}
function httpUrl(params) {
	return _url(ZodURL, {
		protocol: httpProtocol,
		hostname: domain,
		...normalizeParams(params)
	});
}
const ZodEmoji = /* @__PURE__ */ $constructor("ZodEmoji", (inst, def) => {
	$ZodEmoji.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function emoji(params) {
	return _emoji(ZodEmoji, params);
}
const ZodNanoID = /* @__PURE__ */ $constructor("ZodNanoID", (inst, def) => {
	$ZodNanoID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function nanoid(params) {
	return _nanoid(ZodNanoID, params);
}
/**
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link ZodCUID2} instead.
* See https://github.com/paralleldrive/cuid.
*/
const ZodCUID = /* @__PURE__ */ $constructor("ZodCUID", (inst, def) => {
	$ZodCUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
/**
* Validates a CUID v1 string.
*
* @deprecated CUID v1 is deprecated by its authors due to information leakage
* (timestamps embedded in the id). Use {@link cuid2 | `z.cuid2()`} instead.
* See https://github.com/paralleldrive/cuid.
*/
function cuid(params) {
	return _cuid(ZodCUID, params);
}
const ZodCUID2 = /* @__PURE__ */ $constructor("ZodCUID2", (inst, def) => {
	$ZodCUID2.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function cuid2(params) {
	return _cuid2(ZodCUID2, params);
}
const ZodULID = /* @__PURE__ */ $constructor("ZodULID", (inst, def) => {
	$ZodULID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function ulid(params) {
	return _ulid(ZodULID, params);
}
const ZodXID = /* @__PURE__ */ $constructor("ZodXID", (inst, def) => {
	$ZodXID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function xid(params) {
	return _xid(ZodXID, params);
}
const ZodKSUID = /* @__PURE__ */ $constructor("ZodKSUID", (inst, def) => {
	$ZodKSUID.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function ksuid(params) {
	return _ksuid(ZodKSUID, params);
}
const ZodIPv4 = /* @__PURE__ */ $constructor("ZodIPv4", (inst, def) => {
	$ZodIPv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function ipv4(params) {
	return _ipv4(ZodIPv4, params);
}
const ZodMAC = /* @__PURE__ */ $constructor("ZodMAC", (inst, def) => {
	$ZodMAC.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function mac(params) {
	return _mac(ZodMAC, params);
}
const ZodIPv6 = /* @__PURE__ */ $constructor("ZodIPv6", (inst, def) => {
	$ZodIPv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function ipv6(params) {
	return _ipv6(ZodIPv6, params);
}
const ZodCIDRv4 = /* @__PURE__ */ $constructor("ZodCIDRv4", (inst, def) => {
	$ZodCIDRv4.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function cidrv4(params) {
	return _cidrv4(ZodCIDRv4, params);
}
const ZodCIDRv6 = /* @__PURE__ */ $constructor("ZodCIDRv6", (inst, def) => {
	$ZodCIDRv6.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function cidrv6(params) {
	return _cidrv6(ZodCIDRv6, params);
}
const ZodBase64 = /* @__PURE__ */ $constructor("ZodBase64", (inst, def) => {
	$ZodBase64.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function base64(params) {
	return _base64(ZodBase64, params);
}
const ZodBase64URL = /* @__PURE__ */ $constructor("ZodBase64URL", (inst, def) => {
	$ZodBase64URL.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function base64url(params) {
	return _base64url(ZodBase64URL, params);
}
const ZodE164 = /* @__PURE__ */ $constructor("ZodE164", (inst, def) => {
	$ZodE164.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function e164(params) {
	return _e164(ZodE164, params);
}
const ZodJWT = /* @__PURE__ */ $constructor("ZodJWT", (inst, def) => {
	$ZodJWT.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function jwt(params) {
	return _jwt(ZodJWT, params);
}
const ZodCustomStringFormat = /* @__PURE__ */ $constructor("ZodCustomStringFormat", (inst, def) => {
	$ZodCustomStringFormat.init(inst, def);
	ZodStringFormat.init(inst, def);
});
function stringFormat(format$2, fnOrRegex, _params = {}) {
	return _stringFormat(ZodCustomStringFormat, format$2, fnOrRegex, _params);
}
function hostname(_params) {
	return _stringFormat(ZodCustomStringFormat, "hostname", hostname$1, _params);
}
function hex(_params) {
	return _stringFormat(ZodCustomStringFormat, "hex", hex$1, _params);
}
function hash$1(alg, params) {
	const format$2 = `${alg}_${params?.enc ?? "hex"}`;
	const regex = regexes_exports[format$2];
	if (!regex) throw new Error(`Unrecognized hash format: ${format$2}`);
	return _stringFormat(ZodCustomStringFormat, format$2, regex, params);
}
const ZodNumber = /* @__PURE__ */ $constructor("ZodNumber", (inst, def) => {
	$ZodNumber.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => numberProcessor(inst, ctx, json$1, params);
	_installLazyMethods(inst, "ZodNumber", {
		gt(value, params) {
			return this.check(_gt(value, params));
		},
		gte(value, params) {
			return this.check(_gte(value, params));
		},
		min(value, params) {
			return this.check(_gte(value, params));
		},
		lt(value, params) {
			return this.check(_lt(value, params));
		},
		lte(value, params) {
			return this.check(_lte(value, params));
		},
		max(value, params) {
			return this.check(_lte(value, params));
		},
		int(params) {
			return this.check(int$5(params));
		},
		safe(params) {
			return this.check(int$5(params));
		},
		positive(params) {
			return this.check(_gt(0, params));
		},
		nonnegative(params) {
			return this.check(_gte(0, params));
		},
		negative(params) {
			return this.check(_lt(0, params));
		},
		nonpositive(params) {
			return this.check(_lte(0, params));
		},
		multipleOf(value, params) {
			return this.check(_multipleOf(value, params));
		},
		step(value, params) {
			return this.check(_multipleOf(value, params));
		},
		finite() {
			return this;
		}
	});
	const bag = inst._zod.bag;
	inst.minValue = Math.max(bag.minimum ?? Number.NEGATIVE_INFINITY, bag.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null;
	inst.maxValue = Math.min(bag.maximum ?? Number.POSITIVE_INFINITY, bag.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null;
	inst.isInt = (bag.format ?? "").includes("int") || Number.isSafeInteger(bag.multipleOf ?? .5);
	inst.isFinite = true;
	inst.format = bag.format ?? null;
});
function number$1(params) {
	return _number(ZodNumber, params);
}
const ZodNumberFormat = /* @__PURE__ */ $constructor("ZodNumberFormat", (inst, def) => {
	$ZodNumberFormat.init(inst, def);
	ZodNumber.init(inst, def);
});
function int$5(params) {
	return _int(ZodNumberFormat, params);
}
function float32(params) {
	return _float32(ZodNumberFormat, params);
}
function float64(params) {
	return _float64(ZodNumberFormat, params);
}
function int32(params) {
	return _int32(ZodNumberFormat, params);
}
function uint32(params) {
	return _uint32(ZodNumberFormat, params);
}
const ZodBoolean = /* @__PURE__ */ $constructor("ZodBoolean", (inst, def) => {
	$ZodBoolean.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => booleanProcessor(inst, ctx, json$1, params);
});
function boolean$1(params) {
	return _boolean(ZodBoolean, params);
}
const ZodBigInt = /* @__PURE__ */ $constructor("ZodBigInt", (inst, def) => {
	$ZodBigInt.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => bigintProcessor(inst, ctx, json$1, params);
	inst.gte = (value, params) => inst.check(_gte(value, params));
	inst.min = (value, params) => inst.check(_gte(value, params));
	inst.gt = (value, params) => inst.check(_gt(value, params));
	inst.gte = (value, params) => inst.check(_gte(value, params));
	inst.min = (value, params) => inst.check(_gte(value, params));
	inst.lt = (value, params) => inst.check(_lt(value, params));
	inst.lte = (value, params) => inst.check(_lte(value, params));
	inst.max = (value, params) => inst.check(_lte(value, params));
	inst.positive = (params) => inst.check(_gt(BigInt(0), params));
	inst.negative = (params) => inst.check(_lt(BigInt(0), params));
	inst.nonpositive = (params) => inst.check(_lte(BigInt(0), params));
	inst.nonnegative = (params) => inst.check(_gte(BigInt(0), params));
	inst.multipleOf = (value, params) => inst.check(_multipleOf(value, params));
	const bag = inst._zod.bag;
	inst.minValue = bag.minimum ?? null;
	inst.maxValue = bag.maximum ?? null;
	inst.format = bag.format ?? null;
});
function bigint(params) {
	return _bigint(ZodBigInt, params);
}
const ZodBigIntFormat = /* @__PURE__ */ $constructor("ZodBigIntFormat", (inst, def) => {
	$ZodBigIntFormat.init(inst, def);
	ZodBigInt.init(inst, def);
});
function int64(params) {
	return _int64(ZodBigIntFormat, params);
}
function uint64(params) {
	return _uint64(ZodBigIntFormat, params);
}
const ZodSymbol = /* @__PURE__ */ $constructor("ZodSymbol", (inst, def) => {
	$ZodSymbol.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => symbolProcessor(inst, ctx, json$1, params);
});
function symbol(params) {
	return _symbol(ZodSymbol, params);
}
const ZodUndefined = /* @__PURE__ */ $constructor("ZodUndefined", (inst, def) => {
	$ZodUndefined.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => undefinedProcessor(inst, ctx, json$1, params);
});
function _undefined(params) {
	return _undefined$1(ZodUndefined, params);
}
const ZodNull = /* @__PURE__ */ $constructor("ZodNull", (inst, def) => {
	$ZodNull.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => nullProcessor(inst, ctx, json$1, params);
});
function _null$3(params) {
	return _null$4(ZodNull, params);
}
const ZodAny = /* @__PURE__ */ $constructor("ZodAny", (inst, def) => {
	$ZodAny.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => anyProcessor(inst, ctx, json$1, params);
});
function any() {
	return _any(ZodAny);
}
const ZodUnknown = /* @__PURE__ */ $constructor("ZodUnknown", (inst, def) => {
	$ZodUnknown.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => unknownProcessor(inst, ctx, json$1, params);
});
function unknown() {
	return _unknown(ZodUnknown);
}
const ZodNever = /* @__PURE__ */ $constructor("ZodNever", (inst, def) => {
	$ZodNever.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => neverProcessor(inst, ctx, json$1, params);
});
function never(params) {
	return _never(ZodNever, params);
}
const ZodVoid = /* @__PURE__ */ $constructor("ZodVoid", (inst, def) => {
	$ZodVoid.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => voidProcessor(inst, ctx, json$1, params);
});
function _void(params) {
	return _void$1(ZodVoid, params);
}
const ZodDate = /* @__PURE__ */ $constructor("ZodDate", (inst, def) => {
	$ZodDate.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => dateProcessor(inst, ctx, json$1, params);
	inst.min = (value, params) => inst.check(_gte(value, params));
	inst.max = (value, params) => inst.check(_lte(value, params));
	const c = inst._zod.bag;
	inst.minDate = c.minimum ? new Date(c.minimum) : null;
	inst.maxDate = c.maximum ? new Date(c.maximum) : null;
});
function date(params) {
	return _date(ZodDate, params);
}
const ZodArray = /* @__PURE__ */ $constructor("ZodArray", (inst, def) => {
	$ZodArray.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => arrayProcessor(inst, ctx, json$1, params);
	inst.element = def.element;
	_installLazyMethods(inst, "ZodArray", {
		min(n, params) {
			return this.check(_minLength(n, params));
		},
		nonempty(params) {
			return this.check(_minLength(1, params));
		},
		max(n, params) {
			return this.check(_maxLength(n, params));
		},
		length(n, params) {
			return this.check(_length(n, params));
		},
		unwrap() {
			return this.element;
		}
	});
});
function array(element, params) {
	return _array(ZodArray, element, params);
}
function keyof(schema$6) {
	const shape = schema$6._zod.def.shape;
	return _enum(Object.keys(shape));
}
const ZodObject = /* @__PURE__ */ $constructor("ZodObject", (inst, def) => {
	$ZodObjectJIT.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => objectProcessor(inst, ctx, json$1, params);
	defineLazy(inst, "shape", () => {
		return def.shape;
	});
	_installLazyMethods(inst, "ZodObject", {
		keyof() {
			return _enum(Object.keys(this._zod.def.shape));
		},
		catchall(catchall) {
			return this.clone({
				...this._zod.def,
				catchall
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: unknown()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: unknown()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: never()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(incoming) {
			return extend(this, incoming);
		},
		safeExtend(incoming) {
			return safeExtend(this, incoming);
		},
		merge(other) {
			return merge$5(this, other);
		},
		pick(mask) {
			return pick(this, mask);
		},
		omit(mask) {
			return omit(this, mask);
		},
		partial(...args) {
			return partial(ZodOptional, this, args[0]);
		},
		required(...args) {
			return required(ZodNonOptional, this, args[0]);
		}
	});
});
function object(shape, params) {
	return new ZodObject({
		type: "object",
		shape: shape ?? {},
		...normalizeParams(params)
	});
}
function strictObject(shape, params) {
	return new ZodObject({
		type: "object",
		shape,
		catchall: never(),
		...normalizeParams(params)
	});
}
function looseObject(shape, params) {
	return new ZodObject({
		type: "object",
		shape,
		catchall: unknown(),
		...normalizeParams(params)
	});
}
const ZodUnion = /* @__PURE__ */ $constructor("ZodUnion", (inst, def) => {
	$ZodUnion.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => unionProcessor(inst, ctx, json$1, params);
	inst.options = def.options;
});
function union(options, params) {
	return new ZodUnion({
		type: "union",
		options,
		...normalizeParams(params)
	});
}
const ZodXor = /* @__PURE__ */ $constructor("ZodXor", (inst, def) => {
	ZodUnion.init(inst, def);
	$ZodXor.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => unionProcessor(inst, ctx, json$1, params);
	inst.options = def.options;
});
/** Creates an exclusive union (XOR) where exactly one option must match.
* Unlike regular unions that succeed when any option matches, xor fails if
* zero or more than one option matches the input. */
function xor(options, params) {
	return new ZodXor({
		type: "union",
		options,
		inclusive: false,
		...normalizeParams(params)
	});
}
const ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("ZodDiscriminatedUnion", (inst, def) => {
	ZodUnion.init(inst, def);
	$ZodDiscriminatedUnion.init(inst, def);
});
function discriminatedUnion(discriminator, options, params) {
	return new ZodDiscriminatedUnion({
		type: "union",
		options,
		discriminator,
		...normalizeParams(params)
	});
}
const ZodIntersection = /* @__PURE__ */ $constructor("ZodIntersection", (inst, def) => {
	$ZodIntersection.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => intersectionProcessor(inst, ctx, json$1, params);
});
function intersection(left, right) {
	return new ZodIntersection({
		type: "intersection",
		left,
		right
	});
}
const ZodTuple = /* @__PURE__ */ $constructor("ZodTuple", (inst, def) => {
	$ZodTuple.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => tupleProcessor(inst, ctx, json$1, params);
	inst.rest = (rest) => inst.clone({
		...inst._zod.def,
		rest
	});
});
function tuple(items, _paramsOrRest, _params) {
	const hasRest = _paramsOrRest instanceof $ZodType;
	const params = hasRest ? _params : _paramsOrRest;
	return new ZodTuple({
		type: "tuple",
		items,
		rest: hasRest ? _paramsOrRest : null,
		...normalizeParams(params)
	});
}
const ZodRecord = /* @__PURE__ */ $constructor("ZodRecord", (inst, def) => {
	$ZodRecord.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => recordProcessor(inst, ctx, json$1, params);
	inst.keyType = def.keyType;
	inst.valueType = def.valueType;
});
function record(keyType, valueType, params) {
	if (!valueType || !valueType._zod) return new ZodRecord({
		type: "record",
		keyType: string$5(),
		valueType: keyType,
		...normalizeParams(valueType)
	});
	return new ZodRecord({
		type: "record",
		keyType,
		valueType,
		...normalizeParams(params)
	});
}
function partialRecord(keyType, valueType, params) {
	const k = clone(keyType);
	k._zod.values = void 0;
	return new ZodRecord({
		type: "record",
		keyType: k,
		valueType,
		...normalizeParams(params)
	});
}
function looseRecord(keyType, valueType, params) {
	return new ZodRecord({
		type: "record",
		keyType,
		valueType,
		mode: "loose",
		...normalizeParams(params)
	});
}
const ZodMap = /* @__PURE__ */ $constructor("ZodMap", (inst, def) => {
	$ZodMap.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => mapProcessor(inst, ctx, json$1, params);
	inst.keyType = def.keyType;
	inst.valueType = def.valueType;
	inst.min = (...args) => inst.check(_minSize(...args));
	inst.nonempty = (params) => inst.check(_minSize(1, params));
	inst.max = (...args) => inst.check(_maxSize(...args));
	inst.size = (...args) => inst.check(_size(...args));
});
function map$6(keyType, valueType, params) {
	return new ZodMap({
		type: "map",
		keyType,
		valueType,
		...normalizeParams(params)
	});
}
const ZodSet = /* @__PURE__ */ $constructor("ZodSet", (inst, def) => {
	$ZodSet.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => setProcessor(inst, ctx, json$1, params);
	inst.min = (...args) => inst.check(_minSize(...args));
	inst.nonempty = (params) => inst.check(_minSize(1, params));
	inst.max = (...args) => inst.check(_maxSize(...args));
	inst.size = (...args) => inst.check(_size(...args));
});
function set$3(valueType, params) {
	return new ZodSet({
		type: "set",
		valueType,
		...normalizeParams(params)
	});
}
const ZodEnum = /* @__PURE__ */ $constructor("ZodEnum", (inst, def) => {
	$ZodEnum.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => enumProcessor(inst, ctx, json$1, params);
	inst.enum = def.entries;
	inst.options = Object.values(def.entries);
	const keys = new Set(Object.keys(def.entries));
	inst.extract = (values, params) => {
		const newEntries = {};
		for (const value of values) if (keys.has(value)) newEntries[value] = def.entries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
	inst.exclude = (values, params) => {
		const newEntries = { ...def.entries };
		for (const value of values) if (keys.has(value)) delete newEntries[value];
		else throw new Error(`Key ${value} not found in enum`);
		return new ZodEnum({
			...def,
			checks: [],
			...normalizeParams(params),
			entries: newEntries
		});
	};
});
function _enum(values, params) {
	return new ZodEnum({
		type: "enum",
		entries: Array.isArray(values) ? Object.fromEntries(values.map((v) => [v, v])) : values,
		...normalizeParams(params)
	});
}
/** @deprecated This API has been merged into `z.enum()`. Use `z.enum()` instead.
*
* ```ts
* enum Colors { red, green, blue }
* z.enum(Colors);
* ```
*/
function nativeEnum(entries, params) {
	return new ZodEnum({
		type: "enum",
		entries,
		...normalizeParams(params)
	});
}
const ZodLiteral = /* @__PURE__ */ $constructor("ZodLiteral", (inst, def) => {
	$ZodLiteral.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => literalProcessor(inst, ctx, json$1, params);
	inst.values = new Set(def.values);
	Object.defineProperty(inst, "value", { get() {
		if (def.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return def.values[0];
	} });
});
function literal(value, params) {
	return new ZodLiteral({
		type: "literal",
		values: Array.isArray(value) ? value : [value],
		...normalizeParams(params)
	});
}
const ZodFile = /* @__PURE__ */ $constructor("ZodFile", (inst, def) => {
	$ZodFile.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => fileProcessor(inst, ctx, json$1, params);
	inst.min = (size, params) => inst.check(_minSize(size, params));
	inst.max = (size, params) => inst.check(_maxSize(size, params));
	inst.mime = (types, params) => inst.check(_mime(Array.isArray(types) ? types : [types], params));
});
function file(params) {
	return _file(ZodFile, params);
}
const ZodTransform = /* @__PURE__ */ $constructor("ZodTransform", (inst, def) => {
	$ZodTransform.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => transformProcessor(inst, ctx, json$1, params);
	inst._zod.parse = (payload, _ctx) => {
		if (_ctx.direction === "backward") throw new $ZodEncodeError(inst.constructor.name);
		payload.addIssue = (issue$1) => {
			if (typeof issue$1 === "string") payload.issues.push(issue(issue$1, payload.value, def));
			else {
				const _issue = issue$1;
				if (_issue.fatal) _issue.continue = false;
				_issue.code ?? (_issue.code = "custom");
				_issue.input ?? (_issue.input = payload.value);
				_issue.inst ?? (_issue.inst = inst);
				payload.issues.push(issue(_issue));
			}
		};
		const output = def.transform(payload.value, payload);
		if (output instanceof Promise) return output.then((output$1) => {
			payload.value = output$1;
			payload.fallback = true;
			return payload;
		});
		payload.value = output;
		payload.fallback = true;
		return payload;
	};
});
function transform(fn) {
	return new ZodTransform({
		type: "transform",
		transform: fn
	});
}
const ZodOptional = /* @__PURE__ */ $constructor("ZodOptional", (inst, def) => {
	$ZodOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => optionalProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function optional(innerType) {
	return new ZodOptional({
		type: "optional",
		innerType
	});
}
const ZodExactOptional = /* @__PURE__ */ $constructor("ZodExactOptional", (inst, def) => {
	$ZodExactOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => optionalProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function exactOptional(innerType) {
	return new ZodExactOptional({
		type: "optional",
		innerType
	});
}
const ZodNullable = /* @__PURE__ */ $constructor("ZodNullable", (inst, def) => {
	$ZodNullable.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => nullableProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nullable(innerType) {
	return new ZodNullable({
		type: "nullable",
		innerType
	});
}
function nullish(innerType) {
	return optional(nullable(innerType));
}
const ZodDefault = /* @__PURE__ */ $constructor("ZodDefault", (inst, def) => {
	$ZodDefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => defaultProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeDefault = inst.unwrap;
});
function _default(innerType, defaultValue) {
	return new ZodDefault({
		type: "default",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
const ZodPrefault = /* @__PURE__ */ $constructor("ZodPrefault", (inst, def) => {
	$ZodPrefault.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => prefaultProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function prefault(innerType, defaultValue) {
	return new ZodPrefault({
		type: "prefault",
		innerType,
		get defaultValue() {
			return typeof defaultValue === "function" ? defaultValue() : shallowClone(defaultValue);
		}
	});
}
const ZodNonOptional = /* @__PURE__ */ $constructor("ZodNonOptional", (inst, def) => {
	$ZodNonOptional.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => nonoptionalProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function nonoptional(innerType, params) {
	return new ZodNonOptional({
		type: "nonoptional",
		innerType,
		...normalizeParams(params)
	});
}
const ZodSuccess = /* @__PURE__ */ $constructor("ZodSuccess", (inst, def) => {
	$ZodSuccess.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => successProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function success(innerType) {
	return new ZodSuccess({
		type: "success",
		innerType
	});
}
const ZodCatch = /* @__PURE__ */ $constructor("ZodCatch", (inst, def) => {
	$ZodCatch.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => catchProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.innerType;
	inst.removeCatch = inst.unwrap;
});
function _catch(innerType, catchValue) {
	return new ZodCatch({
		type: "catch",
		innerType,
		catchValue: typeof catchValue === "function" ? catchValue : () => catchValue
	});
}
const ZodNaN = /* @__PURE__ */ $constructor("ZodNaN", (inst, def) => {
	$ZodNaN.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => nanProcessor(inst, ctx, json$1, params);
});
function nan(params) {
	return _nan(ZodNaN, params);
}
const ZodPipe = /* @__PURE__ */ $constructor("ZodPipe", (inst, def) => {
	$ZodPipe.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => pipeProcessor(inst, ctx, json$1, params);
	inst.in = def.in;
	inst.out = def.out;
});
function pipe(in_, out) {
	return new ZodPipe({
		type: "pipe",
		in: in_,
		out
	});
}
const ZodCodec = /* @__PURE__ */ $constructor("ZodCodec", (inst, def) => {
	ZodPipe.init(inst, def);
	$ZodCodec.init(inst, def);
});
function codec(in_, out, params) {
	return new ZodCodec({
		type: "pipe",
		in: in_,
		out,
		transform: params.decode,
		reverseTransform: params.encode
	});
}
function invertCodec(codec$1) {
	const def = codec$1._zod.def;
	return new ZodCodec({
		type: "pipe",
		in: def.out,
		out: def.in,
		transform: def.reverseTransform,
		reverseTransform: def.transform
	});
}
const ZodPreprocess = /* @__PURE__ */ $constructor("ZodPreprocess", (inst, def) => {
	ZodPipe.init(inst, def);
	$ZodPreprocess.init(inst, def);
});
const ZodReadonly = /* @__PURE__ */ $constructor("ZodReadonly", (inst, def) => {
	$ZodReadonly.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => readonlyProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function readonly(innerType) {
	return new ZodReadonly({
		type: "readonly",
		innerType
	});
}
const ZodTemplateLiteral = /* @__PURE__ */ $constructor("ZodTemplateLiteral", (inst, def) => {
	$ZodTemplateLiteral.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => templateLiteralProcessor(inst, ctx, json$1, params);
});
function templateLiteral(parts, params) {
	return new ZodTemplateLiteral({
		type: "template_literal",
		parts,
		...normalizeParams(params)
	});
}
const ZodLazy = /* @__PURE__ */ $constructor("ZodLazy", (inst, def) => {
	$ZodLazy.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => lazyProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.getter();
});
function lazy(getter) {
	return new ZodLazy({
		type: "lazy",
		getter
	});
}
const ZodPromise = /* @__PURE__ */ $constructor("ZodPromise", (inst, def) => {
	$ZodPromise.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => promiseProcessor(inst, ctx, json$1, params);
	inst.unwrap = () => inst._zod.def.innerType;
});
function promise(innerType) {
	return new ZodPromise({
		type: "promise",
		innerType
	});
}
const ZodFunction = /* @__PURE__ */ $constructor("ZodFunction", (inst, def) => {
	$ZodFunction.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => functionProcessor(inst, ctx, json$1, params);
});
function _function(params) {
	return new ZodFunction({
		type: "function",
		input: Array.isArray(params?.input) ? tuple(params?.input) : params?.input ?? array(unknown()),
		output: params?.output ?? unknown()
	});
}
const ZodCustom = /* @__PURE__ */ $constructor("ZodCustom", (inst, def) => {
	$ZodCustom.init(inst, def);
	ZodType.init(inst, def);
	inst._zod.processJSONSchema = (ctx, json$1, params) => customProcessor(inst, ctx, json$1, params);
});
function check(fn) {
	const ch = new $ZodCheck({ check: "custom" });
	ch._zod.check = fn;
	return ch;
}
function custom(fn, _params) {
	return _custom(ZodCustom, fn ?? (() => true), _params);
}
function refine(fn, _params = {}) {
	return _refine(ZodCustom, fn, _params);
}
function superRefine(fn, params) {
	return _superRefine(fn, params);
}
const describe = describe$1;
const meta = meta$1;
function _instanceof(cls, params = {}) {
	const inst = new ZodCustom({
		type: "custom",
		check: "custom",
		fn: (data) => data instanceof cls,
		abort: true,
		...normalizeParams(params)
	});
	inst._zod.bag.Class = cls;
	inst._zod.check = (payload) => {
		if (!(payload.value instanceof cls)) payload.issues.push({
			code: "invalid_type",
			expected: cls.name,
			input: payload.value,
			inst,
			path: [...inst._zod.def.path ?? []]
		});
	};
	return inst;
}
const stringbool = (...args) => _stringbool({
	Codec: ZodCodec,
	Boolean: ZodBoolean,
	String: ZodString
}, ...args);
function json(params) {
	const jsonSchema = lazy(() => {
		return union([
			string$5(params),
			number$1(),
			boolean$1(),
			_null$3(),
			array(jsonSchema),
			record(string$5(), jsonSchema)
		]);
	});
	return jsonSchema;
}
function preprocess(fn, schema$6) {
	return new ZodPreprocess({
		type: "pipe",
		in: transform(fn),
		out: schema$6
	});
}

//#endregion
//#region node_modules/incur/node_modules/zod/v4/classic/from-json-schema.js
const z = {
	...schemas_exports,
	...checks_exports,
	iso: iso_exports
};
const RECOGNIZED_KEYS = /* @__PURE__ */ new Set([
	"$schema",
	"$ref",
	"$defs",
	"definitions",
	"$id",
	"id",
	"$comment",
	"$anchor",
	"$vocabulary",
	"$dynamicRef",
	"$dynamicAnchor",
	"type",
	"enum",
	"const",
	"anyOf",
	"oneOf",
	"allOf",
	"not",
	"properties",
	"required",
	"additionalProperties",
	"patternProperties",
	"propertyNames",
	"minProperties",
	"maxProperties",
	"items",
	"prefixItems",
	"additionalItems",
	"minItems",
	"maxItems",
	"uniqueItems",
	"contains",
	"minContains",
	"maxContains",
	"minLength",
	"maxLength",
	"pattern",
	"format",
	"minimum",
	"maximum",
	"exclusiveMinimum",
	"exclusiveMaximum",
	"multipleOf",
	"description",
	"default",
	"contentEncoding",
	"contentMediaType",
	"contentSchema",
	"unevaluatedItems",
	"unevaluatedProperties",
	"if",
	"then",
	"else",
	"dependentSchemas",
	"dependentRequired",
	"nullable",
	"readOnly"
]);
function detectVersion(schema$6, defaultTarget) {
	const $schema = schema$6.$schema;
	if ($schema === "https://json-schema.org/draft/2020-12/schema") return "draft-2020-12";
	if ($schema === "http://json-schema.org/draft-07/schema#") return "draft-7";
	if ($schema === "http://json-schema.org/draft-04/schema#") return "draft-4";
	return defaultTarget ?? "draft-2020-12";
}
function resolveRef(ref, ctx) {
	if (!ref.startsWith("#")) throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
	const path$2 = ref.slice(1).split("/").filter(Boolean);
	if (path$2.length === 0) return ctx.rootSchema;
	const defsKey = ctx.version === "draft-2020-12" ? "$defs" : "definitions";
	if (path$2[0] === defsKey) {
		const key = path$2[1];
		if (!key || !ctx.defs[key]) throw new Error(`Reference not found: ${ref}`);
		return ctx.defs[key];
	}
	throw new Error(`Reference not found: ${ref}`);
}
function convertBaseSchema(schema$6, ctx) {
	if (schema$6.not !== void 0) {
		if (typeof schema$6.not === "object" && Object.keys(schema$6.not).length === 0) return z.never();
		throw new Error("not is not supported in Zod (except { not: {} } for never)");
	}
	if (schema$6.unevaluatedItems !== void 0) throw new Error("unevaluatedItems is not supported");
	if (schema$6.unevaluatedProperties !== void 0) throw new Error("unevaluatedProperties is not supported");
	if (schema$6.if !== void 0 || schema$6.then !== void 0 || schema$6.else !== void 0) throw new Error("Conditional schemas (if/then/else) are not supported");
	if (schema$6.dependentSchemas !== void 0 || schema$6.dependentRequired !== void 0) throw new Error("dependentSchemas and dependentRequired are not supported");
	if (schema$6.$ref) {
		const refPath = schema$6.$ref;
		if (ctx.refs.has(refPath)) return ctx.refs.get(refPath);
		if (ctx.processing.has(refPath)) return z.lazy(() => {
			if (!ctx.refs.has(refPath)) throw new Error(`Circular reference not resolved: ${refPath}`);
			return ctx.refs.get(refPath);
		});
		ctx.processing.add(refPath);
		const zodSchema$1 = convertSchema(resolveRef(refPath, ctx), ctx);
		ctx.refs.set(refPath, zodSchema$1);
		ctx.processing.delete(refPath);
		return zodSchema$1;
	}
	if (schema$6.enum !== void 0) {
		const enumValues = schema$6.enum;
		if (ctx.version === "openapi-3.0" && schema$6.nullable === true && enumValues.length === 1 && enumValues[0] === null) return z.null();
		if (enumValues.length === 0) return z.never();
		if (enumValues.length === 1) return z.literal(enumValues[0]);
		if (enumValues.every((v) => typeof v === "string")) return z.enum(enumValues);
		const literalSchemas = enumValues.map((v) => z.literal(v));
		if (literalSchemas.length < 2) return literalSchemas[0];
		return z.union([
			literalSchemas[0],
			literalSchemas[1],
			...literalSchemas.slice(2)
		]);
	}
	if (schema$6.const !== void 0) return z.literal(schema$6.const);
	const type = schema$6.type;
	if (Array.isArray(type)) {
		const typeSchemas = type.map((t) => {
			return convertBaseSchema({
				...schema$6,
				type: t
			}, ctx);
		});
		if (typeSchemas.length === 0) return z.never();
		if (typeSchemas.length === 1) return typeSchemas[0];
		return z.union(typeSchemas);
	}
	if (!type) return z.any();
	let zodSchema;
	switch (type) {
		case "string": {
			let stringSchema = z.string();
			if (schema$6.format) {
				const format$2 = schema$6.format;
				if (format$2 === "email") stringSchema = stringSchema.check(z.email());
				else if (format$2 === "uri" || format$2 === "uri-reference") stringSchema = stringSchema.check(z.url());
				else if (format$2 === "uuid" || format$2 === "guid") stringSchema = stringSchema.check(z.uuid());
				else if (format$2 === "date-time") stringSchema = stringSchema.check(z.iso.datetime());
				else if (format$2 === "date") stringSchema = stringSchema.check(z.iso.date());
				else if (format$2 === "time") stringSchema = stringSchema.check(z.iso.time());
				else if (format$2 === "duration") stringSchema = stringSchema.check(z.iso.duration());
				else if (format$2 === "ipv4") stringSchema = stringSchema.check(z.ipv4());
				else if (format$2 === "ipv6") stringSchema = stringSchema.check(z.ipv6());
				else if (format$2 === "mac") stringSchema = stringSchema.check(z.mac());
				else if (format$2 === "cidr") stringSchema = stringSchema.check(z.cidrv4());
				else if (format$2 === "cidr-v6") stringSchema = stringSchema.check(z.cidrv6());
				else if (format$2 === "base64") stringSchema = stringSchema.check(z.base64());
				else if (format$2 === "base64url") stringSchema = stringSchema.check(z.base64url());
				else if (format$2 === "e164") stringSchema = stringSchema.check(z.e164());
				else if (format$2 === "jwt") stringSchema = stringSchema.check(z.jwt());
				else if (format$2 === "emoji") stringSchema = stringSchema.check(z.emoji());
				else if (format$2 === "nanoid") stringSchema = stringSchema.check(z.nanoid());
				else if (format$2 === "cuid") stringSchema = stringSchema.check(z.cuid());
				else if (format$2 === "cuid2") stringSchema = stringSchema.check(z.cuid2());
				else if (format$2 === "ulid") stringSchema = stringSchema.check(z.ulid());
				else if (format$2 === "xid") stringSchema = stringSchema.check(z.xid());
				else if (format$2 === "ksuid") stringSchema = stringSchema.check(z.ksuid());
			}
			if (typeof schema$6.minLength === "number") stringSchema = stringSchema.min(schema$6.minLength);
			if (typeof schema$6.maxLength === "number") stringSchema = stringSchema.max(schema$6.maxLength);
			if (schema$6.pattern) stringSchema = stringSchema.regex(new RegExp(schema$6.pattern));
			zodSchema = stringSchema;
			break;
		}
		case "number":
		case "integer": {
			let numberSchema = type === "integer" ? z.number().int() : z.number();
			if (typeof schema$6.minimum === "number") numberSchema = numberSchema.min(schema$6.minimum);
			if (typeof schema$6.maximum === "number") numberSchema = numberSchema.max(schema$6.maximum);
			if (typeof schema$6.exclusiveMinimum === "number") numberSchema = numberSchema.gt(schema$6.exclusiveMinimum);
			else if (schema$6.exclusiveMinimum === true && typeof schema$6.minimum === "number") numberSchema = numberSchema.gt(schema$6.minimum);
			if (typeof schema$6.exclusiveMaximum === "number") numberSchema = numberSchema.lt(schema$6.exclusiveMaximum);
			else if (schema$6.exclusiveMaximum === true && typeof schema$6.maximum === "number") numberSchema = numberSchema.lt(schema$6.maximum);
			if (typeof schema$6.multipleOf === "number") numberSchema = numberSchema.multipleOf(schema$6.multipleOf);
			zodSchema = numberSchema;
			break;
		}
		case "boolean":
			zodSchema = z.boolean();
			break;
		case "null":
			zodSchema = z.null();
			break;
		case "object": {
			const shape = {};
			const properties = schema$6.properties || {};
			const requiredSet = new Set(schema$6.required || []);
			for (const [key, propSchema] of Object.entries(properties)) {
				const propZodSchema = convertSchema(propSchema, ctx);
				shape[key] = requiredSet.has(key) ? propZodSchema : propZodSchema.optional();
			}
			if (schema$6.propertyNames) {
				const keySchema = convertSchema(schema$6.propertyNames, ctx);
				const valueSchema = schema$6.additionalProperties && typeof schema$6.additionalProperties === "object" ? convertSchema(schema$6.additionalProperties, ctx) : z.any();
				if (Object.keys(shape).length === 0) {
					zodSchema = z.record(keySchema, valueSchema);
					break;
				}
				const objectSchema$1 = z.object(shape).passthrough();
				const recordSchema = z.looseRecord(keySchema, valueSchema);
				zodSchema = z.intersection(objectSchema$1, recordSchema);
				break;
			}
			if (schema$6.patternProperties) {
				const patternProps = schema$6.patternProperties;
				const patternKeys = Object.keys(patternProps);
				const looseRecords = [];
				for (const pattern of patternKeys) {
					const patternValue = convertSchema(patternProps[pattern], ctx);
					const keySchema = z.string().regex(new RegExp(pattern));
					looseRecords.push(z.looseRecord(keySchema, patternValue));
				}
				const schemasToIntersect = [];
				if (Object.keys(shape).length > 0) schemasToIntersect.push(z.object(shape).passthrough());
				schemasToIntersect.push(...looseRecords);
				if (schemasToIntersect.length === 0) zodSchema = z.object({}).passthrough();
				else if (schemasToIntersect.length === 1) zodSchema = schemasToIntersect[0];
				else {
					let result = z.intersection(schemasToIntersect[0], schemasToIntersect[1]);
					for (let i = 2; i < schemasToIntersect.length; i++) result = z.intersection(result, schemasToIntersect[i]);
					zodSchema = result;
				}
				break;
			}
			const objectSchema = z.object(shape);
			if (schema$6.additionalProperties === false) zodSchema = objectSchema.strict();
			else if (typeof schema$6.additionalProperties === "object") zodSchema = objectSchema.catchall(convertSchema(schema$6.additionalProperties, ctx));
			else zodSchema = objectSchema.passthrough();
			break;
		}
		case "array": {
			const prefixItems = schema$6.prefixItems;
			const items = schema$6.items;
			if (prefixItems && Array.isArray(prefixItems)) {
				const tupleItems = prefixItems.map((item) => convertSchema(item, ctx));
				const rest = items && typeof items === "object" && !Array.isArray(items) ? convertSchema(items, ctx) : void 0;
				if (rest) zodSchema = z.tuple(tupleItems).rest(rest);
				else zodSchema = z.tuple(tupleItems);
				if (typeof schema$6.minItems === "number") zodSchema = zodSchema.check(z.minLength(schema$6.minItems));
				if (typeof schema$6.maxItems === "number") zodSchema = zodSchema.check(z.maxLength(schema$6.maxItems));
			} else if (Array.isArray(items)) {
				const tupleItems = items.map((item) => convertSchema(item, ctx));
				const rest = schema$6.additionalItems && typeof schema$6.additionalItems === "object" ? convertSchema(schema$6.additionalItems, ctx) : void 0;
				if (rest) zodSchema = z.tuple(tupleItems).rest(rest);
				else zodSchema = z.tuple(tupleItems);
				if (typeof schema$6.minItems === "number") zodSchema = zodSchema.check(z.minLength(schema$6.minItems));
				if (typeof schema$6.maxItems === "number") zodSchema = zodSchema.check(z.maxLength(schema$6.maxItems));
			} else if (items !== void 0) {
				const element = convertSchema(items, ctx);
				let arraySchema = z.array(element);
				if (typeof schema$6.minItems === "number") arraySchema = arraySchema.min(schema$6.minItems);
				if (typeof schema$6.maxItems === "number") arraySchema = arraySchema.max(schema$6.maxItems);
				zodSchema = arraySchema;
			} else zodSchema = z.array(z.any());
			break;
		}
		default: throw new Error(`Unsupported type: ${type}`);
	}
	return zodSchema;
}
function convertSchema(schema$6, ctx) {
	if (typeof schema$6 === "boolean") return schema$6 ? z.any() : z.never();
	let baseSchema = convertBaseSchema(schema$6, ctx);
	const hasExplicitType = schema$6.type || schema$6.enum !== void 0 || schema$6.const !== void 0;
	if (schema$6.anyOf && Array.isArray(schema$6.anyOf)) {
		const options = schema$6.anyOf.map((s) => convertSchema(s, ctx));
		const anyOfUnion = z.union(options);
		baseSchema = hasExplicitType ? z.intersection(baseSchema, anyOfUnion) : anyOfUnion;
	}
	if (schema$6.oneOf && Array.isArray(schema$6.oneOf)) {
		const options = schema$6.oneOf.map((s) => convertSchema(s, ctx));
		const oneOfUnion = z.xor(options);
		baseSchema = hasExplicitType ? z.intersection(baseSchema, oneOfUnion) : oneOfUnion;
	}
	if (schema$6.allOf && Array.isArray(schema$6.allOf)) if (schema$6.allOf.length === 0) baseSchema = hasExplicitType ? baseSchema : z.any();
	else {
		let result = hasExplicitType ? baseSchema : convertSchema(schema$6.allOf[0], ctx);
		const startIdx = hasExplicitType ? 0 : 1;
		for (let i = startIdx; i < schema$6.allOf.length; i++) result = z.intersection(result, convertSchema(schema$6.allOf[i], ctx));
		baseSchema = result;
	}
	if (schema$6.nullable === true && ctx.version === "openapi-3.0") baseSchema = z.nullable(baseSchema);
	if (schema$6.readOnly === true) baseSchema = z.readonly(baseSchema);
	if (schema$6.default !== void 0) baseSchema = baseSchema.default(schema$6.default);
	const extraMeta = {};
	for (const key of [
		"$id",
		"id",
		"$comment",
		"$anchor",
		"$vocabulary",
		"$dynamicRef",
		"$dynamicAnchor"
	]) if (key in schema$6) extraMeta[key] = schema$6[key];
	for (const key of [
		"contentEncoding",
		"contentMediaType",
		"contentSchema"
	]) if (key in schema$6) extraMeta[key] = schema$6[key];
	for (const key of Object.keys(schema$6)) if (!RECOGNIZED_KEYS.has(key)) extraMeta[key] = schema$6[key];
	if (Object.keys(extraMeta).length > 0) ctx.registry.add(baseSchema, extraMeta);
	if (schema$6.description) baseSchema = baseSchema.describe(schema$6.description);
	return baseSchema;
}
/**
* Converts a JSON Schema to a Zod schema. This function should be considered semi-experimental. It's behavior is liable to change. */
function fromJSONSchema(schema$6, params) {
	if (typeof schema$6 === "boolean") return schema$6 ? z.any() : z.never();
	let normalized;
	try {
		normalized = JSON.parse(JSON.stringify(schema$6));
	} catch {
		throw new Error("fromJSONSchema input is not valid JSON (possibly cyclic); use $defs/$ref for recursive schemas");
	}
	const ctx = {
		version: detectVersion(normalized, params?.defaultTarget),
		defs: normalized.$defs || normalized.definitions || {},
		refs: /* @__PURE__ */ new Map(),
		processing: /* @__PURE__ */ new Set(),
		rootSchema: normalized,
		registry: params?.registry ?? globalRegistry
	};
	return convertSchema(normalized, ctx);
}

//#endregion
//#region node_modules/incur/node_modules/zod/v4/classic/coerce.js
function number(params) {
	return _coercedNumber(ZodNumber, params);
}
function boolean(params) {
	return _coercedBoolean(ZodBoolean, params);
}

//#endregion
//#region node_modules/tokenx/dist/index.mjs
const PATTERNS = {
	whitespace: /^\s+$/,
	cjk: /[\u4E00-\u9FFF\u3400-\u4DBF\u3000-\u303F\uFF00-\uFFEF\u30A0-\u30FF\u2E80-\u2EFF\u31C0-\u31EF\u3200-\u32FF\u3300-\u33FF\uAC00-\uD7AF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uD7B0-\uD7FF]/,
	numeric: /^\d+(?:[.,]\d+)*$/,
	punctuation: /[.,!?;(){}[\]<>:/\\|@#$%^&*+=`~_-]/,
	alphanumeric: /^[a-zA-Z0-9\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]+$/
};
const TOKEN_SPLIT_PATTERN = /* @__PURE__ */ new RegExp(`(\\s+|${PATTERNS.punctuation.source}+)`);
const DEFAULT_CHARS_PER_TOKEN = 6;
const SHORT_TOKEN_THRESHOLD = 3;
const DEFAULT_LANGUAGE_CONFIGS = [
	{
		pattern: /[äöüßẞ]/i,
		averageCharsPerToken: 3
	},
	{
		pattern: /[éèêëàâîïôûùüÿçœæáíóúñ]/i,
		averageCharsPerToken: 3
	},
	{
		pattern: /[ąćęłńóśźżěščřžýůúďťň]/i,
		averageCharsPerToken: 3.5
	}
];
/**
* Estimates the number of tokens in a text string using heuristic rules.
*/
function estimateTokenCount(text, options = {}) {
	if (!text) return 0;
	const { defaultCharsPerToken = DEFAULT_CHARS_PER_TOKEN, languageConfigs = DEFAULT_LANGUAGE_CONFIGS } = options;
	const segments = text.split(TOKEN_SPLIT_PATTERN).filter(Boolean);
	let tokenCount = 0;
	for (const segment of segments) tokenCount += estimateSegmentTokens(segment, languageConfigs, defaultCharsPerToken);
	return tokenCount;
}
/**
* Extracts a portion of text based on token positions, similar to Array.prototype.slice().
*/
function sliceByTokens(text, start = 0, end, options = {}) {
	if (!text) return "";
	const { defaultCharsPerToken = DEFAULT_CHARS_PER_TOKEN, languageConfigs = DEFAULT_LANGUAGE_CONFIGS } = options;
	let totalTokens = 0;
	if (start < 0 || end !== void 0 && end < 0) totalTokens = estimateTokenCount(text, options);
	const normalizedStart = start < 0 ? Math.max(0, totalTokens + start) : Math.max(0, start);
	const normalizedEnd = end === void 0 ? Infinity : end < 0 ? Math.max(0, totalTokens + end) : end;
	if (normalizedStart >= normalizedEnd) return "";
	const segments = text.split(TOKEN_SPLIT_PATTERN).filter(Boolean);
	const parts = [];
	let currentTokenPos = 0;
	for (const segment of segments) {
		if (currentTokenPos >= normalizedEnd) break;
		const tokenCount = estimateSegmentTokens(segment, languageConfigs, defaultCharsPerToken);
		const extracted = extractSegmentPart(segment, currentTokenPos, tokenCount, normalizedStart, normalizedEnd);
		if (extracted) parts.push(extracted);
		currentTokenPos += tokenCount;
	}
	return parts.join("");
}
function estimateSegmentTokens(segment, languageConfigs, defaultCharsPerToken) {
	if (PATTERNS.whitespace.test(segment)) return 0;
	if (PATTERNS.cjk.test(segment)) return getCharacterCount(segment);
	if (PATTERNS.numeric.test(segment)) return 1;
	if (segment.length <= SHORT_TOKEN_THRESHOLD) return 1;
	if (PATTERNS.punctuation.test(segment)) return segment.length > 1 ? Math.ceil(segment.length / 2) : 1;
	if (PATTERNS.alphanumeric.test(segment)) {
		const charsPerToken$1 = getLanguageSpecificCharsPerToken(segment, languageConfigs) ?? defaultCharsPerToken;
		return Math.ceil(segment.length / charsPerToken$1);
	}
	const charsPerToken = getLanguageSpecificCharsPerToken(segment, languageConfigs) ?? defaultCharsPerToken;
	return Math.ceil(segment.length / charsPerToken);
}
function getLanguageSpecificCharsPerToken(segment, languageConfigs) {
	for (const config$1 of languageConfigs) if (config$1.pattern.test(segment)) return config$1.averageCharsPerToken;
}
function getCharacterCount(text) {
	return Array.from(text).length;
}
function extractSegmentPart(segment, segmentTokenStart, segmentTokenCount, targetStart, targetEnd) {
	if (segmentTokenCount === 0) return segmentTokenStart >= targetStart && segmentTokenStart < targetEnd ? segment : "";
	const segmentTokenEnd = segmentTokenStart + segmentTokenCount;
	if (segmentTokenStart >= targetEnd || segmentTokenEnd <= targetStart) return "";
	const overlapStart = Math.max(0, targetStart - segmentTokenStart);
	const overlapEnd = Math.min(segmentTokenCount, targetEnd - segmentTokenStart);
	if (overlapStart === 0 && overlapEnd === segmentTokenCount) return segment;
	const charStart = Math.floor(overlapStart / segmentTokenCount * segment.length);
	const charEnd = Math.ceil(overlapEnd / segmentTokenCount * segment.length);
	return segment.slice(charStart, charEnd);
}

//#endregion
//#region node_modules/yaml/dist/nodes/identity.js
var require_identity = /* @__PURE__ */ __commonJSMin(((exports) => {
	const ALIAS = Symbol.for("yaml.alias");
	const DOC = Symbol.for("yaml.document");
	const MAP = Symbol.for("yaml.map");
	const PAIR = Symbol.for("yaml.pair");
	const SCALAR$1 = Symbol.for("yaml.scalar");
	const SEQ = Symbol.for("yaml.seq");
	const NODE_TYPE = Symbol.for("yaml.node.type");
	const isAlias$1 = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === ALIAS;
	const isDocument = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === DOC;
	const isMap = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === MAP;
	const isPair = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === PAIR;
	const isScalar$2 = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SCALAR$1;
	const isSeq = (node) => !!node && typeof node === "object" && node[NODE_TYPE] === SEQ;
	function isCollection$1(node) {
		if (node && typeof node === "object") switch (node[NODE_TYPE]) {
			case MAP:
			case SEQ: return true;
		}
		return false;
	}
	function isNode(node) {
		if (node && typeof node === "object") switch (node[NODE_TYPE]) {
			case ALIAS:
			case MAP:
			case SCALAR$1:
			case SEQ: return true;
		}
		return false;
	}
	const hasAnchor = (node) => (isScalar$2(node) || isCollection$1(node)) && !!node.anchor;
	exports.ALIAS = ALIAS;
	exports.DOC = DOC;
	exports.MAP = MAP;
	exports.NODE_TYPE = NODE_TYPE;
	exports.PAIR = PAIR;
	exports.SCALAR = SCALAR$1;
	exports.SEQ = SEQ;
	exports.hasAnchor = hasAnchor;
	exports.isAlias = isAlias$1;
	exports.isCollection = isCollection$1;
	exports.isDocument = isDocument;
	exports.isMap = isMap;
	exports.isNode = isNode;
	exports.isPair = isPair;
	exports.isScalar = isScalar$2;
	exports.isSeq = isSeq;
}));

//#endregion
//#region node_modules/yaml/dist/visit.js
var require_visit = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$32 = require_identity();
	const BREAK$1 = Symbol("break visit");
	const SKIP$1 = Symbol("skip children");
	const REMOVE$1 = Symbol("remove node");
	/**
	* Apply a visitor to an AST node or document.
	*
	* Walks through the tree (depth-first) starting from `node`, calling a
	* `visitor` function with three arguments:
	*   - `key`: For sequence values and map `Pair`, the node's index in the
	*     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
	*     `null` for the root node.
	*   - `node`: The current node.
	*   - `path`: The ancestry of the current node.
	*
	* The return value of the visitor may be used to control the traversal:
	*   - `undefined` (default): Do nothing and continue
	*   - `visit.SKIP`: Do not visit the children of this node, continue with next
	*     sibling
	*   - `visit.BREAK`: Terminate traversal completely
	*   - `visit.REMOVE`: Remove the current node, then continue with the next one
	*   - `Node`: Replace the current node, then continue by visiting it
	*   - `number`: While iterating the items of a sequence or map, set the index
	*     of the next step. This is useful especially if the index of the current
	*     node has changed.
	*
	* If `visitor` is a single function, it will be called with all values
	* encountered in the tree, including e.g. `null` values. Alternatively,
	* separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
	* `Alias` and `Scalar` node. To define the same visitor function for more than
	* one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
	* and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
	* specific defined one will be used for each node.
	*/
	function visit$5(node, visitor) {
		const visitor_ = initVisitor(visitor);
		if (identity$32.isDocument(node)) {
			if (visit_(null, node.contents, visitor_, Object.freeze([node])) === REMOVE$1) node.contents = null;
		} else visit_(null, node, visitor_, Object.freeze([]));
	}
	/** Terminate visit traversal completely */
	visit$5.BREAK = BREAK$1;
	/** Do not visit the children of the current node */
	visit$5.SKIP = SKIP$1;
	/** Remove the current node */
	visit$5.REMOVE = REMOVE$1;
	function visit_(key, node, visitor, path$2) {
		const ctrl = callVisitor(key, node, visitor, path$2);
		if (identity$32.isNode(ctrl) || identity$32.isPair(ctrl)) {
			replaceNode(key, path$2, ctrl);
			return visit_(key, ctrl, visitor, path$2);
		}
		if (typeof ctrl !== "symbol") {
			if (identity$32.isCollection(node)) {
				path$2 = Object.freeze(path$2.concat(node));
				for (let i = 0; i < node.items.length; ++i) {
					const ci = visit_(i, node.items[i], visitor, path$2);
					if (typeof ci === "number") i = ci - 1;
					else if (ci === BREAK$1) return BREAK$1;
					else if (ci === REMOVE$1) {
						node.items.splice(i, 1);
						i -= 1;
					}
				}
			} else if (identity$32.isPair(node)) {
				path$2 = Object.freeze(path$2.concat(node));
				const ck = visit_("key", node.key, visitor, path$2);
				if (ck === BREAK$1) return BREAK$1;
				else if (ck === REMOVE$1) node.key = null;
				const cv = visit_("value", node.value, visitor, path$2);
				if (cv === BREAK$1) return BREAK$1;
				else if (cv === REMOVE$1) node.value = null;
			}
		}
		return ctrl;
	}
	/**
	* Apply an async visitor to an AST node or document.
	*
	* Walks through the tree (depth-first) starting from `node`, calling a
	* `visitor` function with three arguments:
	*   - `key`: For sequence values and map `Pair`, the node's index in the
	*     collection. Within a `Pair`, `'key'` or `'value'`, correspondingly.
	*     `null` for the root node.
	*   - `node`: The current node.
	*   - `path`: The ancestry of the current node.
	*
	* The return value of the visitor may be used to control the traversal:
	*   - `Promise`: Must resolve to one of the following values
	*   - `undefined` (default): Do nothing and continue
	*   - `visit.SKIP`: Do not visit the children of this node, continue with next
	*     sibling
	*   - `visit.BREAK`: Terminate traversal completely
	*   - `visit.REMOVE`: Remove the current node, then continue with the next one
	*   - `Node`: Replace the current node, then continue by visiting it
	*   - `number`: While iterating the items of a sequence or map, set the index
	*     of the next step. This is useful especially if the index of the current
	*     node has changed.
	*
	* If `visitor` is a single function, it will be called with all values
	* encountered in the tree, including e.g. `null` values. Alternatively,
	* separate visitor functions may be defined for each `Map`, `Pair`, `Seq`,
	* `Alias` and `Scalar` node. To define the same visitor function for more than
	* one node type, use the `Collection` (map and seq), `Value` (map, seq & scalar)
	* and `Node` (alias, map, seq & scalar) targets. Of all these, only the most
	* specific defined one will be used for each node.
	*/
	async function visitAsync(node, visitor) {
		const visitor_ = initVisitor(visitor);
		if (identity$32.isDocument(node)) {
			if (await visitAsync_(null, node.contents, visitor_, Object.freeze([node])) === REMOVE$1) node.contents = null;
		} else await visitAsync_(null, node, visitor_, Object.freeze([]));
	}
	/** Terminate visit traversal completely */
	visitAsync.BREAK = BREAK$1;
	/** Do not visit the children of the current node */
	visitAsync.SKIP = SKIP$1;
	/** Remove the current node */
	visitAsync.REMOVE = REMOVE$1;
	async function visitAsync_(key, node, visitor, path$2) {
		const ctrl = await callVisitor(key, node, visitor, path$2);
		if (identity$32.isNode(ctrl) || identity$32.isPair(ctrl)) {
			replaceNode(key, path$2, ctrl);
			return visitAsync_(key, ctrl, visitor, path$2);
		}
		if (typeof ctrl !== "symbol") {
			if (identity$32.isCollection(node)) {
				path$2 = Object.freeze(path$2.concat(node));
				for (let i = 0; i < node.items.length; ++i) {
					const ci = await visitAsync_(i, node.items[i], visitor, path$2);
					if (typeof ci === "number") i = ci - 1;
					else if (ci === BREAK$1) return BREAK$1;
					else if (ci === REMOVE$1) {
						node.items.splice(i, 1);
						i -= 1;
					}
				}
			} else if (identity$32.isPair(node)) {
				path$2 = Object.freeze(path$2.concat(node));
				const ck = await visitAsync_("key", node.key, visitor, path$2);
				if (ck === BREAK$1) return BREAK$1;
				else if (ck === REMOVE$1) node.key = null;
				const cv = await visitAsync_("value", node.value, visitor, path$2);
				if (cv === BREAK$1) return BREAK$1;
				else if (cv === REMOVE$1) node.value = null;
			}
		}
		return ctrl;
	}
	function initVisitor(visitor) {
		if (typeof visitor === "object" && (visitor.Collection || visitor.Node || visitor.Value)) return Object.assign({
			Alias: visitor.Node,
			Map: visitor.Node,
			Scalar: visitor.Node,
			Seq: visitor.Node
		}, visitor.Value && {
			Map: visitor.Value,
			Scalar: visitor.Value,
			Seq: visitor.Value
		}, visitor.Collection && {
			Map: visitor.Collection,
			Seq: visitor.Collection
		}, visitor);
		return visitor;
	}
	function callVisitor(key, node, visitor, path$2) {
		if (typeof visitor === "function") return visitor(key, node, path$2);
		if (identity$32.isMap(node)) return visitor.Map?.(key, node, path$2);
		if (identity$32.isSeq(node)) return visitor.Seq?.(key, node, path$2);
		if (identity$32.isPair(node)) return visitor.Pair?.(key, node, path$2);
		if (identity$32.isScalar(node)) return visitor.Scalar?.(key, node, path$2);
		if (identity$32.isAlias(node)) return visitor.Alias?.(key, node, path$2);
	}
	function replaceNode(key, path$2, node) {
		const parent = path$2[path$2.length - 1];
		if (identity$32.isCollection(parent)) parent.items[key] = node;
		else if (identity$32.isPair(parent)) if (key === "key") parent.key = node;
		else parent.value = node;
		else if (identity$32.isDocument(parent)) parent.contents = node;
		else {
			const pt = identity$32.isAlias(parent) ? "alias" : "scalar";
			throw new Error(`Cannot replace node with ${pt} parent`);
		}
	}
	exports.visit = visit$5;
	exports.visitAsync = visitAsync;
}));

//#endregion
//#region node_modules/yaml/dist/doc/directives.js
var require_directives = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$31 = require_identity();
	var visit$4 = require_visit();
	const escapeChars = {
		"!": "%21",
		",": "%2C",
		"[": "%5B",
		"]": "%5D",
		"{": "%7B",
		"}": "%7D"
	};
	const escapeTagName = (tn) => tn.replace(/[!,[\]{}]/g, (ch) => escapeChars[ch]);
	var Directives = class Directives {
		constructor(yaml, tags$1) {
			/**
			* The directives-end/doc-start marker `---`. If `null`, a marker may still be
			* included in the document's stringified representation.
			*/
			this.docStart = null;
			/** The doc-end marker `...`.  */
			this.docEnd = false;
			this.yaml = Object.assign({}, Directives.defaultYaml, yaml);
			this.tags = Object.assign({}, Directives.defaultTags, tags$1);
		}
		clone() {
			const copy = new Directives(this.yaml, this.tags);
			copy.docStart = this.docStart;
			return copy;
		}
		/**
		* During parsing, get a Directives instance for the current document and
		* update the stream state according to the current version's spec.
		*/
		atDocument() {
			const res = new Directives(this.yaml, this.tags);
			switch (this.yaml.version) {
				case "1.1":
					this.atNextDocument = true;
					break;
				case "1.2":
					this.atNextDocument = false;
					this.yaml = {
						explicit: Directives.defaultYaml.explicit,
						version: "1.2"
					};
					this.tags = Object.assign({}, Directives.defaultTags);
					break;
			}
			return res;
		}
		/**
		* @param onError - May be called even if the action was successful
		* @returns `true` on success
		*/
		add(line, onError) {
			if (this.atNextDocument) {
				this.yaml = {
					explicit: Directives.defaultYaml.explicit,
					version: "1.1"
				};
				this.tags = Object.assign({}, Directives.defaultTags);
				this.atNextDocument = false;
			}
			const parts = line.trim().split(/[ \t]+/);
			const name = parts.shift();
			switch (name) {
				case "%TAG": {
					if (parts.length !== 2) {
						onError(0, "%TAG directive should contain exactly two parts");
						if (parts.length < 2) return false;
					}
					const [handle, prefix] = parts;
					this.tags[handle] = prefix;
					return true;
				}
				case "%YAML": {
					this.yaml.explicit = true;
					if (parts.length !== 1) {
						onError(0, "%YAML directive should contain exactly one part");
						return false;
					}
					const [version$1] = parts;
					if (version$1 === "1.1" || version$1 === "1.2") {
						this.yaml.version = version$1;
						return true;
					} else {
						const isValid$1 = /^\d+\.\d+$/.test(version$1);
						onError(6, `Unsupported YAML version ${version$1}`, isValid$1);
						return false;
					}
				}
				default:
					onError(0, `Unknown directive ${name}`, true);
					return false;
			}
		}
		/**
		* Resolves a tag, matching handles to those defined in %TAG directives.
		*
		* @returns Resolved tag, which may also be the non-specific tag `'!'` or a
		*   `'!local'` tag, or `null` if unresolvable.
		*/
		tagName(source, onError) {
			if (source === "!") return "!";
			if (source[0] !== "!") {
				onError(`Not a valid tag: ${source}`);
				return null;
			}
			if (source[1] === "<") {
				const verbatim = source.slice(2, -1);
				if (verbatim === "!" || verbatim === "!!") {
					onError(`Verbatim tags aren't resolved, so ${source} is invalid.`);
					return null;
				}
				if (source[source.length - 1] !== ">") onError("Verbatim tags must end with a >");
				return verbatim;
			}
			const [, handle, suffix] = source.match(/^(.*!)([^!]*)$/s);
			if (!suffix) onError(`The ${source} tag has no suffix`);
			const prefix = this.tags[handle];
			if (prefix) try {
				return prefix + decodeURIComponent(suffix);
			} catch (error) {
				onError(String(error));
				return null;
			}
			if (handle === "!") return source;
			onError(`Could not resolve tag: ${source}`);
			return null;
		}
		/**
		* Given a fully resolved tag, returns its printable string form,
		* taking into account current tag prefixes and defaults.
		*/
		tagString(tag) {
			for (const [handle, prefix] of Object.entries(this.tags)) if (tag.startsWith(prefix)) return handle + escapeTagName(tag.substring(prefix.length));
			return tag[0] === "!" ? tag : `!<${tag}>`;
		}
		toString(doc) {
			const lines = this.yaml.explicit ? [`%YAML ${this.yaml.version || "1.2"}`] : [];
			const tagEntries = Object.entries(this.tags);
			let tagNames;
			if (doc && tagEntries.length > 0 && identity$31.isNode(doc.contents)) {
				const tags$1 = {};
				visit$4.visit(doc.contents, (_key, node) => {
					if (identity$31.isNode(node) && node.tag) tags$1[node.tag] = true;
				});
				tagNames = Object.keys(tags$1);
			} else tagNames = [];
			for (const [handle, prefix] of tagEntries) {
				if (handle === "!!" && prefix === "tag:yaml.org,2002:") continue;
				if (!doc || tagNames.some((tn) => tn.startsWith(prefix))) lines.push(`%TAG ${handle} ${prefix}`);
			}
			return lines.join("\n");
		}
	};
	Directives.defaultYaml = {
		explicit: false,
		version: "1.2"
	};
	Directives.defaultTags = { "!!": "tag:yaml.org,2002:" };
	exports.Directives = Directives;
}));

//#endregion
//#region node_modules/yaml/dist/doc/anchors.js
var require_anchors = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$30 = require_identity();
	var visit$3 = require_visit();
	/**
	* Verify that the input string is a valid anchor.
	*
	* Will throw on errors.
	*/
	function anchorIsValid(anchor) {
		if (/[\x00-\x19\s,[\]{}]/.test(anchor)) {
			const msg = `Anchor must not contain whitespace or control characters: ${JSON.stringify(anchor)}`;
			throw new Error(msg);
		}
		return true;
	}
	function anchorNames(root) {
		const anchors$3 = /* @__PURE__ */ new Set();
		visit$3.visit(root, { Value(_key, node) {
			if (node.anchor) anchors$3.add(node.anchor);
		} });
		return anchors$3;
	}
	/** Find a new anchor name with the given `prefix` and a one-indexed suffix. */
	function findNewAnchor(prefix, exclude) {
		for (let i = 1;; ++i) {
			const name = `${prefix}${i}`;
			if (!exclude.has(name)) return name;
		}
	}
	function createNodeAnchors(doc, prefix) {
		const aliasObjects = [];
		const sourceObjects = /* @__PURE__ */ new Map();
		let prevAnchors = null;
		return {
			onAnchor: (source) => {
				aliasObjects.push(source);
				prevAnchors ?? (prevAnchors = anchorNames(doc));
				const anchor = findNewAnchor(prefix, prevAnchors);
				prevAnchors.add(anchor);
				return anchor;
			},
			setAnchors: () => {
				for (const source of aliasObjects) {
					const ref = sourceObjects.get(source);
					if (typeof ref === "object" && ref.anchor && (identity$30.isScalar(ref.node) || identity$30.isCollection(ref.node))) ref.node.anchor = ref.anchor;
					else {
						const error = /* @__PURE__ */ new Error("Failed to resolve repeated object (this should not happen)");
						error.source = source;
						throw error;
					}
				}
			},
			sourceObjects
		};
	}
	exports.anchorIsValid = anchorIsValid;
	exports.anchorNames = anchorNames;
	exports.createNodeAnchors = createNodeAnchors;
	exports.findNewAnchor = findNewAnchor;
}));

//#endregion
//#region node_modules/yaml/dist/doc/applyReviver.js
var require_applyReviver = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Applies the JSON.parse reviver algorithm as defined in the ECMA-262 spec,
	* in section 24.5.1.1 "Runtime Semantics: InternalizeJSONProperty" of the
	* 2021 edition: https://tc39.es/ecma262/#sec-json.parse
	*
	* Includes extensions for handling Map and Set objects.
	*/
	function applyReviver$2(reviver, obj, key, val) {
		if (val && typeof val === "object") if (Array.isArray(val)) for (let i = 0, len = val.length; i < len; ++i) {
			const v0 = val[i];
			const v1 = applyReviver$2(reviver, val, String(i), v0);
			if (v1 === void 0) delete val[i];
			else if (v1 !== v0) val[i] = v1;
		}
		else if (val instanceof Map) for (const k of Array.from(val.keys())) {
			const v0 = val.get(k);
			const v1 = applyReviver$2(reviver, val, k, v0);
			if (v1 === void 0) val.delete(k);
			else if (v1 !== v0) val.set(k, v1);
		}
		else if (val instanceof Set) for (const v0 of Array.from(val)) {
			const v1 = applyReviver$2(reviver, val, v0, v0);
			if (v1 === void 0) val.delete(v0);
			else if (v1 !== v0) {
				val.delete(v0);
				val.add(v1);
			}
		}
		else for (const [k, v0] of Object.entries(val)) {
			const v1 = applyReviver$2(reviver, val, k, v0);
			if (v1 === void 0) delete val[k];
			else if (v1 !== v0) val[k] = v1;
		}
		return reviver.call(obj, key, val);
	}
	exports.applyReviver = applyReviver$2;
}));

//#endregion
//#region node_modules/yaml/dist/nodes/toJS.js
var require_toJS = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$29 = require_identity();
	/**
	* Recursively convert any node or its contents to native JavaScript
	*
	* @param value - The input value
	* @param arg - If `value` defines a `toJSON()` method, use this
	*   as its first argument
	* @param ctx - Conversion context, originally set in Document#toJS(). If
	*   `{ keep: true }` is not set, output should be suitable for JSON
	*   stringification.
	*/
	function toJS$7(value, arg, ctx) {
		if (Array.isArray(value)) return value.map((v, i) => toJS$7(v, String(i), ctx));
		if (value && typeof value.toJSON === "function") {
			if (!ctx || !identity$29.hasAnchor(value)) return value.toJSON(arg, ctx);
			const data = {
				aliasCount: 0,
				count: 1,
				res: void 0
			};
			ctx.anchors.set(value, data);
			ctx.onCreate = (res$1) => {
				data.res = res$1;
				delete ctx.onCreate;
			};
			const res = value.toJSON(arg, ctx);
			if (ctx.onCreate) ctx.onCreate(res);
			return res;
		}
		if (typeof value === "bigint" && !ctx?.keep) return Number(value);
		return value;
	}
	exports.toJS = toJS$7;
}));

//#endregion
//#region node_modules/yaml/dist/nodes/Node.js
var require_Node = /* @__PURE__ */ __commonJSMin(((exports) => {
	var applyReviver$1 = require_applyReviver();
	var identity$28 = require_identity();
	var toJS$6 = require_toJS();
	var NodeBase = class {
		constructor(type) {
			Object.defineProperty(this, identity$28.NODE_TYPE, { value: type });
		}
		/** Create a copy of this node.  */
		clone() {
			const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
			if (this.range) copy.range = this.range.slice();
			return copy;
		}
		/** A plain JavaScript representation of this node. */
		toJS(doc, { mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
			if (!identity$28.isDocument(doc)) throw new TypeError("A document argument is required");
			const ctx = {
				anchors: /* @__PURE__ */ new Map(),
				doc,
				keep: true,
				mapAsMap: mapAsMap === true,
				mapKeyWarned: false,
				maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
			};
			const res = toJS$6.toJS(this, "", ctx);
			if (typeof onAnchor === "function") for (const { count, res: res$1 } of ctx.anchors.values()) onAnchor(res$1, count);
			return typeof reviver === "function" ? applyReviver$1.applyReviver(reviver, { "": res }, "", res) : res;
		}
	};
	exports.NodeBase = NodeBase;
}));

//#endregion
//#region node_modules/yaml/dist/nodes/Alias.js
var require_Alias = /* @__PURE__ */ __commonJSMin(((exports) => {
	var anchors$2 = require_anchors();
	var visit$2 = require_visit();
	var identity$27 = require_identity();
	var Node$2 = require_Node();
	var toJS$5 = require_toJS();
	var Alias$4 = class extends Node$2.NodeBase {
		constructor(source) {
			super(identity$27.ALIAS);
			this.source = source;
			Object.defineProperty(this, "tag", { set() {
				throw new Error("Alias nodes cannot have tags");
			} });
		}
		/**
		* Resolve the value of this alias within `doc`, finding the last
		* instance of the `source` anchor before this node.
		*/
		resolve(doc, ctx) {
			if (ctx?.maxAliasCount === 0) throw new ReferenceError("Alias resolution is disabled");
			let nodes;
			if (ctx?.aliasResolveCache) nodes = ctx.aliasResolveCache;
			else {
				nodes = [];
				visit$2.visit(doc, { Node: (_key, node) => {
					if (identity$27.isAlias(node) || identity$27.hasAnchor(node)) nodes.push(node);
				} });
				if (ctx) ctx.aliasResolveCache = nodes;
			}
			let found = void 0;
			for (const node of nodes) {
				if (node === this) break;
				if (node.anchor === this.source) found = node;
			}
			return found;
		}
		toJSON(_arg, ctx) {
			if (!ctx) return { source: this.source };
			const { anchors: anchors$3, doc, maxAliasCount } = ctx;
			const source = this.resolve(doc, ctx);
			if (!source) {
				const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
				throw new ReferenceError(msg);
			}
			let data = anchors$3.get(source);
			if (!data) {
				toJS$5.toJS(source, null, ctx);
				data = anchors$3.get(source);
			}
			/* istanbul ignore if */
			if (data?.res === void 0) throw new ReferenceError("This should not happen: Alias anchor was not resolved?");
			if (maxAliasCount >= 0) {
				data.count += 1;
				if (data.aliasCount === 0) data.aliasCount = getAliasCount(doc, source, anchors$3);
				if (data.count * data.aliasCount > maxAliasCount) throw new ReferenceError("Excessive alias count indicates a resource exhaustion attack");
			}
			return data.res;
		}
		toString(ctx, _onComment, _onChompKeep) {
			const src = `*${this.source}`;
			if (ctx) {
				anchors$2.anchorIsValid(this.source);
				if (ctx.options.verifyAliasOrder && !ctx.anchors.has(this.source)) {
					const msg = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
					throw new Error(msg);
				}
				if (ctx.implicitKey) return `${src} `;
			}
			return src;
		}
	};
	function getAliasCount(doc, node, anchors$3) {
		if (identity$27.isAlias(node)) {
			const source = node.resolve(doc);
			const anchor = anchors$3 && source && anchors$3.get(source);
			return anchor ? anchor.count * anchor.aliasCount : 0;
		} else if (identity$27.isCollection(node)) {
			let count = 0;
			for (const item of node.items) {
				const c = getAliasCount(doc, item, anchors$3);
				if (c > count) count = c;
			}
			return count;
		} else if (identity$27.isPair(node)) {
			const kc = getAliasCount(doc, node.key, anchors$3);
			const vc = getAliasCount(doc, node.value, anchors$3);
			return Math.max(kc, vc);
		}
		return 1;
	}
	exports.Alias = Alias$4;
}));

//#endregion
//#region node_modules/yaml/dist/nodes/Scalar.js
var require_Scalar = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$26 = require_identity();
	var Node$1 = require_Node();
	var toJS$4 = require_toJS();
	const isScalarValue = (value) => !value || typeof value !== "function" && typeof value !== "object";
	var Scalar$19 = class extends Node$1.NodeBase {
		constructor(value) {
			super(identity$26.SCALAR);
			this.value = value;
		}
		toJSON(arg, ctx) {
			return ctx?.keep ? this.value : toJS$4.toJS(this.value, arg, ctx);
		}
		toString() {
			return String(this.value);
		}
	};
	Scalar$19.BLOCK_FOLDED = "BLOCK_FOLDED";
	Scalar$19.BLOCK_LITERAL = "BLOCK_LITERAL";
	Scalar$19.PLAIN = "PLAIN";
	Scalar$19.QUOTE_DOUBLE = "QUOTE_DOUBLE";
	Scalar$19.QUOTE_SINGLE = "QUOTE_SINGLE";
	exports.Scalar = Scalar$19;
	exports.isScalarValue = isScalarValue;
}));

//#endregion
//#region node_modules/yaml/dist/doc/createNode.js
var require_createNode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Alias$3 = require_Alias();
	var identity$25 = require_identity();
	var Scalar$18 = require_Scalar();
	const defaultTagPrefix = "tag:yaml.org,2002:";
	function findTagObject(value, tagName, tags$1) {
		if (tagName) {
			const match$1 = tags$1.filter((t) => t.tag === tagName);
			const tagObj = match$1.find((t) => !t.format) ?? match$1[0];
			if (!tagObj) throw new Error(`Tag ${tagName} not found`);
			return tagObj;
		}
		return tags$1.find((t) => t.identify?.(value) && !t.format);
	}
	function createNode$4(value, tagName, ctx) {
		if (identity$25.isDocument(value)) value = value.contents;
		if (identity$25.isNode(value)) return value;
		if (identity$25.isPair(value)) {
			const map$7 = ctx.schema[identity$25.MAP].createNode?.(ctx.schema, null, ctx);
			map$7.items.push(value);
			return map$7;
		}
		if (value instanceof String || value instanceof Number || value instanceof Boolean || typeof BigInt !== "undefined" && value instanceof BigInt) value = value.valueOf();
		const { aliasDuplicateObjects, onAnchor, onTagObj, schema: schema$6, sourceObjects } = ctx;
		let ref = void 0;
		if (aliasDuplicateObjects && value && typeof value === "object") {
			ref = sourceObjects.get(value);
			if (ref) {
				ref.anchor ?? (ref.anchor = onAnchor(value));
				return new Alias$3.Alias(ref.anchor);
			} else {
				ref = {
					anchor: null,
					node: null
				};
				sourceObjects.set(value, ref);
			}
		}
		if (tagName?.startsWith("!!")) tagName = defaultTagPrefix + tagName.slice(2);
		let tagObj = findTagObject(value, tagName, schema$6.tags);
		if (!tagObj) {
			if (value && typeof value.toJSON === "function") value = value.toJSON();
			if (!value || typeof value !== "object") {
				const node$1 = new Scalar$18.Scalar(value);
				if (ref) ref.node = node$1;
				return node$1;
			}
			tagObj = value instanceof Map ? schema$6[identity$25.MAP] : Symbol.iterator in Object(value) ? schema$6[identity$25.SEQ] : schema$6[identity$25.MAP];
		}
		if (onTagObj) {
			onTagObj(tagObj);
			delete ctx.onTagObj;
		}
		const node = tagObj?.createNode ? tagObj.createNode(ctx.schema, value, ctx) : typeof tagObj?.nodeClass?.from === "function" ? tagObj.nodeClass.from(ctx.schema, value, ctx) : new Scalar$18.Scalar(value);
		if (tagName) node.tag = tagName;
		else if (!tagObj.default) node.tag = tagObj.tag;
		if (ref) ref.node = node;
		return node;
	}
	exports.createNode = createNode$4;
}));

//#endregion
//#region node_modules/yaml/dist/nodes/Collection.js
var require_Collection = /* @__PURE__ */ __commonJSMin(((exports) => {
	var createNode$3 = require_createNode();
	var identity$24 = require_identity();
	var Node = require_Node();
	function collectionFromPath(schema$6, path$2, value) {
		let v = value;
		for (let i = path$2.length - 1; i >= 0; --i) {
			const k = path$2[i];
			if (typeof k === "number" && Number.isInteger(k) && k >= 0) {
				const a = [];
				a[k] = v;
				v = a;
			} else v = new Map([[k, v]]);
		}
		return createNode$3.createNode(v, void 0, {
			aliasDuplicateObjects: false,
			keepUndefined: false,
			onAnchor: () => {
				throw new Error("This should not happen, please report a bug.");
			},
			schema: schema$6,
			sourceObjects: /* @__PURE__ */ new Map()
		});
	}
	const isEmptyPath = (path$2) => path$2 == null || typeof path$2 === "object" && !!path$2[Symbol.iterator]().next().done;
	var Collection$3 = class extends Node.NodeBase {
		constructor(type, schema$6) {
			super(type);
			Object.defineProperty(this, "schema", {
				value: schema$6,
				configurable: true,
				enumerable: false,
				writable: true
			});
		}
		/**
		* Create a copy of this collection.
		*
		* @param schema - If defined, overwrites the original's schema
		*/
		clone(schema$6) {
			const copy = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
			if (schema$6) copy.schema = schema$6;
			copy.items = copy.items.map((it) => identity$24.isNode(it) || identity$24.isPair(it) ? it.clone(schema$6) : it);
			if (this.range) copy.range = this.range.slice();
			return copy;
		}
		/**
		* Adds a value to the collection. For `!!map` and `!!omap` the value must
		* be a Pair instance or a `{ key, value }` object, which may not have a key
		* that already exists in the map.
		*/
		addIn(path$2, value) {
			if (isEmptyPath(path$2)) this.add(value);
			else {
				const [key, ...rest] = path$2;
				const node = this.get(key, true);
				if (identity$24.isCollection(node)) node.addIn(rest, value);
				else if (node === void 0 && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));
				else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
			}
		}
		/**
		* Removes a value from the collection.
		* @returns `true` if the item was found and removed.
		*/
		deleteIn(path$2) {
			const [key, ...rest] = path$2;
			if (rest.length === 0) return this.delete(key);
			const node = this.get(key, true);
			if (identity$24.isCollection(node)) return node.deleteIn(rest);
			else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
		}
		/**
		* Returns item at `key`, or `undefined` if not found. By default unwraps
		* scalar values from their surrounding node; to disable set `keepScalar` to
		* `true` (collections are always returned intact).
		*/
		getIn(path$2, keepScalar) {
			const [key, ...rest] = path$2;
			const node = this.get(key, true);
			if (rest.length === 0) return !keepScalar && identity$24.isScalar(node) ? node.value : node;
			else return identity$24.isCollection(node) ? node.getIn(rest, keepScalar) : void 0;
		}
		hasAllNullValues(allowScalar) {
			return this.items.every((node) => {
				if (!identity$24.isPair(node)) return false;
				const n = node.value;
				return n == null || allowScalar && identity$24.isScalar(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
			});
		}
		/**
		* Checks if the collection includes a value with the key `key`.
		*/
		hasIn(path$2) {
			const [key, ...rest] = path$2;
			if (rest.length === 0) return this.has(key);
			const node = this.get(key, true);
			return identity$24.isCollection(node) ? node.hasIn(rest) : false;
		}
		/**
		* Sets a value in this collection. For `!!set`, `value` needs to be a
		* boolean to add/remove the item from the set.
		*/
		setIn(path$2, value) {
			const [key, ...rest] = path$2;
			if (rest.length === 0) this.set(key, value);
			else {
				const node = this.get(key, true);
				if (identity$24.isCollection(node)) node.setIn(rest, value);
				else if (node === void 0 && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));
				else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
			}
		}
	};
	exports.Collection = Collection$3;
	exports.collectionFromPath = collectionFromPath;
	exports.isEmptyPath = isEmptyPath;
}));

//#endregion
//#region node_modules/yaml/dist/stringify/stringifyComment.js
var require_stringifyComment = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Stringifies a comment.
	*
	* Empty comment lines are left empty,
	* lines consisting of a single space are replaced by `#`,
	* and all other lines are prefixed with a `#`.
	*/
	const stringifyComment$4 = (str) => str.replace(/^(?!$)(?: $)?/gm, "#");
	function indentComment(comment, indent) {
		if (/^\n+$/.test(comment)) return comment.substring(1);
		return indent ? comment.replace(/^(?! *$)/gm, indent) : comment;
	}
	const lineComment = (str, indent, comment) => str.endsWith("\n") ? indentComment(comment, indent) : comment.includes("\n") ? "\n" + indentComment(comment, indent) : (str.endsWith(" ") ? "" : " ") + comment;
	exports.indentComment = indentComment;
	exports.lineComment = lineComment;
	exports.stringifyComment = stringifyComment$4;
}));

//#endregion
//#region node_modules/yaml/dist/stringify/foldFlowLines.js
var require_foldFlowLines = /* @__PURE__ */ __commonJSMin(((exports) => {
	const FOLD_FLOW = "flow";
	const FOLD_BLOCK = "block";
	const FOLD_QUOTED = "quoted";
	/**
	* Tries to keep input at up to `lineWidth` characters, splitting only on spaces
	* not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
	* terminated with `\n` and started with `indent`.
	*/
	function foldFlowLines$1(text, indent, mode = "flow", { indentAtStart, lineWidth = 80, minContentWidth = 20, onFold, onOverflow } = {}) {
		if (!lineWidth || lineWidth < 0) return text;
		if (lineWidth < minContentWidth) minContentWidth = 0;
		const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
		if (text.length <= endStep) return text;
		const folds = [];
		const escapedFolds = {};
		let end = lineWidth - indent.length;
		if (typeof indentAtStart === "number") if (indentAtStart > lineWidth - Math.max(2, minContentWidth)) folds.push(0);
		else end = lineWidth - indentAtStart;
		let split$1 = void 0;
		let prev = void 0;
		let overflow = false;
		let i = -1;
		let escStart = -1;
		let escEnd = -1;
		if (mode === FOLD_BLOCK) {
			i = consumeMoreIndentedLines(text, i, indent.length);
			if (i !== -1) end = i + endStep;
		}
		for (let ch; ch = text[i += 1];) {
			if (mode === FOLD_QUOTED && ch === "\\") {
				escStart = i;
				switch (text[i + 1]) {
					case "x":
						i += 3;
						break;
					case "u":
						i += 5;
						break;
					case "U":
						i += 9;
						break;
					default: i += 1;
				}
				escEnd = i;
			}
			if (ch === "\n") {
				if (mode === FOLD_BLOCK) i = consumeMoreIndentedLines(text, i, indent.length);
				end = i + indent.length + endStep;
				split$1 = void 0;
			} else {
				if (ch === " " && prev && prev !== " " && prev !== "\n" && prev !== "	") {
					const next = text[i + 1];
					if (next && next !== " " && next !== "\n" && next !== "	") split$1 = i;
				}
				if (i >= end) if (split$1) {
					folds.push(split$1);
					end = split$1 + endStep;
					split$1 = void 0;
				} else if (mode === FOLD_QUOTED) {
					while (prev === " " || prev === "	") {
						prev = ch;
						ch = text[i += 1];
						overflow = true;
					}
					const j = i > escEnd + 1 ? i - 2 : escStart - 1;
					if (escapedFolds[j]) return text;
					folds.push(j);
					escapedFolds[j] = true;
					end = j + endStep;
					split$1 = void 0;
				} else overflow = true;
			}
			prev = ch;
		}
		if (overflow && onOverflow) onOverflow();
		if (folds.length === 0) return text;
		if (onFold) onFold();
		let res = text.slice(0, folds[0]);
		for (let i$1 = 0; i$1 < folds.length; ++i$1) {
			const fold = folds[i$1];
			const end$1 = folds[i$1 + 1] || text.length;
			if (fold === 0) res = `\n${indent}${text.slice(0, end$1)}`;
			else {
				if (mode === FOLD_QUOTED && escapedFolds[fold]) res += `${text[fold]}\\`;
				res += `\n${indent}${text.slice(fold + 1, end$1)}`;
			}
		}
		return res;
	}
	/**
	* Presumes `i + 1` is at the start of a line
	* @returns index of last newline in more-indented block
	*/
	function consumeMoreIndentedLines(text, i, indent) {
		let end = i;
		let start = i + 1;
		let ch = text[start];
		while (ch === " " || ch === "	") if (i < start + indent) ch = text[++i];
		else {
			do
				ch = text[++i];
			while (ch && ch !== "\n");
			end = i;
			start = i + 1;
			ch = text[start];
		}
		return end;
	}
	exports.FOLD_BLOCK = FOLD_BLOCK;
	exports.FOLD_FLOW = FOLD_FLOW;
	exports.FOLD_QUOTED = FOLD_QUOTED;
	exports.foldFlowLines = foldFlowLines$1;
}));

//#endregion
//#region node_modules/yaml/dist/stringify/stringifyString.js
var require_stringifyString = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scalar$17 = require_Scalar();
	var foldFlowLines = require_foldFlowLines();
	const getFoldOptions = (ctx, isBlock$1) => ({
		indentAtStart: isBlock$1 ? ctx.indent.length : ctx.indentAtStart,
		lineWidth: ctx.options.lineWidth,
		minContentWidth: ctx.options.minContentWidth
	});
	const containsDocumentMarker = (str) => /^(%|---|\.\.\.)/m.test(str);
	function lineLengthOverLimit(str, lineWidth, indentLength) {
		if (!lineWidth || lineWidth < 0) return false;
		const limit = lineWidth - indentLength;
		const strLen = str.length;
		if (strLen <= limit) return false;
		for (let i = 0, start = 0; i < strLen; ++i) if (str[i] === "\n") {
			if (i - start > limit) return true;
			start = i + 1;
			if (strLen - start <= limit) return false;
		}
		return true;
	}
	function doubleQuotedString(value, ctx) {
		const json$1 = JSON.stringify(value);
		if (ctx.options.doubleQuotedAsJSON) return json$1;
		const { implicitKey } = ctx;
		const minMultiLineLength = ctx.options.doubleQuotedMinMultiLineLength;
		const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
		let str = "";
		let start = 0;
		for (let i = 0, ch = json$1[i]; ch; ch = json$1[++i]) {
			if (ch === " " && json$1[i + 1] === "\\" && json$1[i + 2] === "n") {
				str += json$1.slice(start, i) + "\\ ";
				i += 1;
				start = i;
				ch = "\\";
			}
			if (ch === "\\") switch (json$1[i + 1]) {
				case "u":
					{
						str += json$1.slice(start, i);
						const code = json$1.substr(i + 2, 4);
						switch (code) {
							case "0000":
								str += "\\0";
								break;
							case "0007":
								str += "\\a";
								break;
							case "000b":
								str += "\\v";
								break;
							case "001b":
								str += "\\e";
								break;
							case "0085":
								str += "\\N";
								break;
							case "00a0":
								str += "\\_";
								break;
							case "2028":
								str += "\\L";
								break;
							case "2029":
								str += "\\P";
								break;
							default: if (code.substr(0, 2) === "00") str += "\\x" + code.substr(2);
							else str += json$1.substr(i, 6);
						}
						i += 5;
						start = i + 1;
					}
					break;
				case "n":
					if (implicitKey || json$1[i + 2] === "\"" || json$1.length < minMultiLineLength) i += 1;
					else {
						str += json$1.slice(start, i) + "\n\n";
						while (json$1[i + 2] === "\\" && json$1[i + 3] === "n" && json$1[i + 4] !== "\"") {
							str += "\n";
							i += 2;
						}
						str += indent;
						if (json$1[i + 2] === " ") str += "\\";
						i += 1;
						start = i + 1;
					}
					break;
				default: i += 1;
			}
		}
		str = start ? str + json$1.slice(start) : json$1;
		return implicitKey ? str : foldFlowLines.foldFlowLines(str, indent, foldFlowLines.FOLD_QUOTED, getFoldOptions(ctx, false));
	}
	function singleQuotedString(value, ctx) {
		if (ctx.options.singleQuote === false || ctx.implicitKey && value.includes("\n") || /[ \t]\n|\n[ \t]/.test(value)) return doubleQuotedString(value, ctx);
		const indent = ctx.indent || (containsDocumentMarker(value) ? "  " : "");
		const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&\n${indent}`) + "'";
		return ctx.implicitKey ? res : foldFlowLines.foldFlowLines(res, indent, foldFlowLines.FOLD_FLOW, getFoldOptions(ctx, false));
	}
	function quotedString(value, ctx) {
		const { singleQuote } = ctx.options;
		let qs;
		if (singleQuote === false) qs = doubleQuotedString;
		else {
			const hasDouble = value.includes("\"");
			const hasSingle = value.includes("'");
			if (hasDouble && !hasSingle) qs = singleQuotedString;
			else if (hasSingle && !hasDouble) qs = doubleQuotedString;
			else qs = singleQuote ? singleQuotedString : doubleQuotedString;
		}
		return qs(value, ctx);
	}
	let blockEndNewlines;
	try {
		blockEndNewlines = new RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
	} catch {
		blockEndNewlines = /\n+(?!\n|$)/g;
	}
	function blockString({ comment, type, value }, ctx, onComment, onChompKeep) {
		const { blockQuote, commentString, lineWidth } = ctx.options;
		if (!blockQuote || /\n[\t ]+$/.test(value)) return quotedString(value, ctx);
		const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? "  " : "");
		const literal$1 = blockQuote === "literal" ? true : blockQuote === "folded" || type === Scalar$17.Scalar.BLOCK_FOLDED ? false : type === Scalar$17.Scalar.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, lineWidth, indent.length);
		if (!value) return literal$1 ? "|\n" : ">\n";
		let chomp;
		let endStart;
		for (endStart = value.length; endStart > 0; --endStart) {
			const ch = value[endStart - 1];
			if (ch !== "\n" && ch !== "	" && ch !== " ") break;
		}
		let end = value.substring(endStart);
		const endNlPos = end.indexOf("\n");
		if (endNlPos === -1) chomp = "-";
		else if (value === end || endNlPos !== end.length - 1) {
			chomp = "+";
			if (onChompKeep) onChompKeep();
		} else chomp = "";
		if (end) {
			value = value.slice(0, -end.length);
			if (end[end.length - 1] === "\n") end = end.slice(0, -1);
			end = end.replace(blockEndNewlines, `$&${indent}`);
		}
		let startWithSpace = false;
		let startEnd;
		let startNlPos = -1;
		for (startEnd = 0; startEnd < value.length; ++startEnd) {
			const ch = value[startEnd];
			if (ch === " ") startWithSpace = true;
			else if (ch === "\n") startNlPos = startEnd;
			else break;
		}
		let start = value.substring(0, startNlPos < startEnd ? startNlPos + 1 : startEnd);
		if (start) {
			value = value.substring(start.length);
			start = start.replace(/\n+/g, `$&${indent}`);
		}
		let header = (startWithSpace ? indent ? "2" : "1" : "") + chomp;
		if (comment) {
			header += " " + commentString(comment.replace(/ ?[\r\n]+/g, " "));
			if (onComment) onComment();
		}
		if (!literal$1) {
			const foldedValue = value.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${indent}`);
			let literalFallback = false;
			const foldOptions = getFoldOptions(ctx, true);
			if (blockQuote !== "folded" && type !== Scalar$17.Scalar.BLOCK_FOLDED) foldOptions.onOverflow = () => {
				literalFallback = true;
			};
			const body = foldFlowLines.foldFlowLines(`${start}${foldedValue}${end}`, indent, foldFlowLines.FOLD_BLOCK, foldOptions);
			if (!literalFallback) return `>${header}\n${indent}${body}`;
		}
		value = value.replace(/\n+/g, `$&${indent}`);
		return `|${header}\n${indent}${start}${value}${end}`;
	}
	function plainString(item, ctx, onComment, onChompKeep) {
		const { type, value } = item;
		const { actualString, implicitKey, indent, indentStep, inFlow } = ctx;
		if (implicitKey && value.includes("\n") || inFlow && /[[\]{},]/.test(value)) return quotedString(value, ctx);
		if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) return implicitKey || inFlow || !value.includes("\n") ? quotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
		if (!implicitKey && !inFlow && type !== Scalar$17.Scalar.PLAIN && value.includes("\n")) return blockString(item, ctx, onComment, onChompKeep);
		if (containsDocumentMarker(value)) {
			if (indent === "") {
				ctx.forceBlockIndent = true;
				return blockString(item, ctx, onComment, onChompKeep);
			} else if (implicitKey && indent === indentStep) return quotedString(value, ctx);
		}
		const str = value.replace(/\n+/g, `$&\n${indent}`);
		if (actualString) {
			const test = (tag) => tag.default && tag.tag !== "tag:yaml.org,2002:str" && tag.test?.test(str);
			const { compat, tags: tags$1 } = ctx.doc.schema;
			if (tags$1.some(test) || compat?.some(test)) return quotedString(value, ctx);
		}
		return implicitKey ? str : foldFlowLines.foldFlowLines(str, indent, foldFlowLines.FOLD_FLOW, getFoldOptions(ctx, false));
	}
	function stringifyString$4(item, ctx, onComment, onChompKeep) {
		const { implicitKey, inFlow } = ctx;
		const ss = typeof item.value === "string" ? item : Object.assign({}, item, { value: String(item.value) });
		let { type } = item;
		if (type !== Scalar$17.Scalar.QUOTE_DOUBLE) {
			if (/[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(ss.value)) type = Scalar$17.Scalar.QUOTE_DOUBLE;
		}
		const _stringify = (_type) => {
			switch (_type) {
				case Scalar$17.Scalar.BLOCK_FOLDED:
				case Scalar$17.Scalar.BLOCK_LITERAL: return implicitKey || inFlow ? quotedString(ss.value, ctx) : blockString(ss, ctx, onComment, onChompKeep);
				case Scalar$17.Scalar.QUOTE_DOUBLE: return doubleQuotedString(ss.value, ctx);
				case Scalar$17.Scalar.QUOTE_SINGLE: return singleQuotedString(ss.value, ctx);
				case Scalar$17.Scalar.PLAIN: return plainString(ss, ctx, onComment, onChompKeep);
				default: return null;
			}
		};
		let res = _stringify(type);
		if (res === null) {
			const { defaultKeyType, defaultStringType } = ctx.options;
			const t = implicitKey && defaultKeyType || defaultStringType;
			res = _stringify(t);
			if (res === null) throw new Error(`Unsupported default string type ${t}`);
		}
		return res;
	}
	exports.stringifyString = stringifyString$4;
}));

//#endregion
//#region node_modules/yaml/dist/stringify/stringify.js
var require_stringify = /* @__PURE__ */ __commonJSMin(((exports) => {
	var anchors$1 = require_anchors();
	var identity$23 = require_identity();
	var stringifyComment$3 = require_stringifyComment();
	var stringifyString$3 = require_stringifyString();
	function createStringifyContext(doc, options) {
		const opt = Object.assign({
			blockQuote: true,
			commentString: stringifyComment$3.stringifyComment,
			defaultKeyType: null,
			defaultStringType: "PLAIN",
			directives: null,
			doubleQuotedAsJSON: false,
			doubleQuotedMinMultiLineLength: 40,
			falseStr: "false",
			flowCollectionPadding: true,
			indentSeq: true,
			lineWidth: 80,
			minContentWidth: 20,
			nullStr: "null",
			simpleKeys: false,
			singleQuote: null,
			trailingComma: false,
			trueStr: "true",
			verifyAliasOrder: true
		}, doc.schema.toStringOptions, options);
		let inFlow;
		switch (opt.collectionStyle) {
			case "block":
				inFlow = false;
				break;
			case "flow":
				inFlow = true;
				break;
			default: inFlow = null;
		}
		return {
			anchors: /* @__PURE__ */ new Set(),
			doc,
			flowCollectionPadding: opt.flowCollectionPadding ? " " : "",
			indent: "",
			indentStep: typeof opt.indent === "number" ? " ".repeat(opt.indent) : "  ",
			inFlow,
			options: opt
		};
	}
	function getTagObject(tags$1, item) {
		if (item.tag) {
			const match$1 = tags$1.filter((t) => t.tag === item.tag);
			if (match$1.length > 0) return match$1.find((t) => t.format === item.format) ?? match$1[0];
		}
		let tagObj = void 0;
		let obj;
		if (identity$23.isScalar(item)) {
			obj = item.value;
			let match$1 = tags$1.filter((t) => t.identify?.(obj));
			if (match$1.length > 1) {
				const testMatch = match$1.filter((t) => t.test);
				if (testMatch.length > 0) match$1 = testMatch;
			}
			tagObj = match$1.find((t) => t.format === item.format) ?? match$1.find((t) => !t.format);
		} else {
			obj = item;
			tagObj = tags$1.find((t) => t.nodeClass && obj instanceof t.nodeClass);
		}
		if (!tagObj) {
			const name = obj?.constructor?.name ?? (obj === null ? "null" : typeof obj);
			throw new Error(`Tag not resolved for ${name} value`);
		}
		return tagObj;
	}
	function stringifyProps(node, tagObj, { anchors: anchors$1$1, doc }) {
		if (!doc.directives) return "";
		const props = [];
		const anchor = (identity$23.isScalar(node) || identity$23.isCollection(node)) && node.anchor;
		if (anchor && anchors$1.anchorIsValid(anchor)) {
			anchors$1$1.add(anchor);
			props.push(`&${anchor}`);
		}
		const tag = node.tag ?? (tagObj.default ? null : tagObj.tag);
		if (tag) props.push(doc.directives.tagString(tag));
		return props.join(" ");
	}
	function stringify$6(item, ctx, onComment, onChompKeep) {
		if (identity$23.isPair(item)) return item.toString(ctx, onComment, onChompKeep);
		if (identity$23.isAlias(item)) {
			if (ctx.doc.directives) return item.toString(ctx);
			if (ctx.resolvedAliases?.has(item)) throw new TypeError(`Cannot stringify circular structure without alias nodes`);
			else {
				if (ctx.resolvedAliases) ctx.resolvedAliases.add(item);
				else ctx.resolvedAliases = new Set([item]);
				item = item.resolve(ctx.doc);
			}
		}
		let tagObj = void 0;
		const node = identity$23.isNode(item) ? item : ctx.doc.createNode(item, { onTagObj: (o) => tagObj = o });
		tagObj ?? (tagObj = getTagObject(ctx.doc.schema.tags, node));
		const props = stringifyProps(node, tagObj, ctx);
		if (props.length > 0) ctx.indentAtStart = (ctx.indentAtStart ?? 0) + props.length + 1;
		const str = typeof tagObj.stringify === "function" ? tagObj.stringify(node, ctx, onComment, onChompKeep) : identity$23.isScalar(node) ? stringifyString$3.stringifyString(node, ctx, onComment, onChompKeep) : node.toString(ctx, onComment, onChompKeep);
		if (!props) return str;
		return identity$23.isScalar(node) || str[0] === "{" || str[0] === "[" ? `${props} ${str}` : `${props}\n${ctx.indent}${str}`;
	}
	exports.createStringifyContext = createStringifyContext;
	exports.stringify = stringify$6;
}));

//#endregion
//#region node_modules/yaml/dist/stringify/stringifyPair.js
var require_stringifyPair = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$22 = require_identity();
	var Scalar$16 = require_Scalar();
	var stringify$5 = require_stringify();
	var stringifyComment$2 = require_stringifyComment();
	function stringifyPair$1({ key, value }, ctx, onComment, onChompKeep) {
		const { allNullValues, doc, indent, indentStep, options: { commentString, indentSeq, simpleKeys } } = ctx;
		let keyComment = identity$22.isNode(key) && key.comment || null;
		if (simpleKeys) {
			if (keyComment) throw new Error("With simple keys, key nodes cannot have comments");
			if (identity$22.isCollection(key) || !identity$22.isNode(key) && typeof key === "object") throw new Error("With simple keys, collection cannot be used as a key value");
		}
		let explicitKey = !simpleKeys && (!key || keyComment && value == null && !ctx.inFlow || identity$22.isCollection(key) || (identity$22.isScalar(key) ? key.type === Scalar$16.Scalar.BLOCK_FOLDED || key.type === Scalar$16.Scalar.BLOCK_LITERAL : typeof key === "object"));
		ctx = Object.assign({}, ctx, {
			allNullValues: false,
			implicitKey: !explicitKey && (simpleKeys || !allNullValues),
			indent: indent + indentStep
		});
		let keyCommentDone = false;
		let chompKeep = false;
		let str = stringify$5.stringify(key, ctx, () => keyCommentDone = true, () => chompKeep = true);
		if (!explicitKey && !ctx.inFlow && str.length > 1024) {
			if (simpleKeys) throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
			explicitKey = true;
		}
		if (ctx.inFlow) {
			if (allNullValues || value == null) {
				if (keyCommentDone && onComment) onComment();
				return str === "" ? "?" : explicitKey ? `? ${str}` : str;
			}
		} else if (allNullValues && !simpleKeys || value == null && explicitKey) {
			str = `? ${str}`;
			if (keyComment && !keyCommentDone) str += stringifyComment$2.lineComment(str, ctx.indent, commentString(keyComment));
			else if (chompKeep && onChompKeep) onChompKeep();
			return str;
		}
		if (keyCommentDone) keyComment = null;
		if (explicitKey) {
			if (keyComment) str += stringifyComment$2.lineComment(str, ctx.indent, commentString(keyComment));
			str = `? ${str}\n${indent}:`;
		} else {
			str = `${str}:`;
			if (keyComment) str += stringifyComment$2.lineComment(str, ctx.indent, commentString(keyComment));
		}
		let vsb, vcb, valueComment;
		if (identity$22.isNode(value)) {
			vsb = !!value.spaceBefore;
			vcb = value.commentBefore;
			valueComment = value.comment;
		} else {
			vsb = false;
			vcb = null;
			valueComment = null;
			if (value && typeof value === "object") value = doc.createNode(value);
		}
		ctx.implicitKey = false;
		if (!explicitKey && !keyComment && identity$22.isScalar(value)) ctx.indentAtStart = str.length + 1;
		chompKeep = false;
		if (!indentSeq && indentStep.length >= 2 && !ctx.inFlow && !explicitKey && identity$22.isSeq(value) && !value.flow && !value.tag && !value.anchor) ctx.indent = ctx.indent.substring(2);
		let valueCommentDone = false;
		const valueStr = stringify$5.stringify(value, ctx, () => valueCommentDone = true, () => chompKeep = true);
		let ws = " ";
		if (keyComment || vsb || vcb) {
			ws = vsb ? "\n" : "";
			if (vcb) {
				const cs = commentString(vcb);
				ws += `\n${stringifyComment$2.indentComment(cs, ctx.indent)}`;
			}
			if (valueStr === "" && !ctx.inFlow) {
				if (ws === "\n" && valueComment) ws = "\n\n";
			} else ws += `\n${ctx.indent}`;
		} else if (!explicitKey && identity$22.isCollection(value)) {
			const vs0 = valueStr[0];
			const nl0 = valueStr.indexOf("\n");
			const hasNewline = nl0 !== -1;
			const flow = ctx.inFlow ?? value.flow ?? value.items.length === 0;
			if (hasNewline || !flow) {
				let hasPropsLine = false;
				if (hasNewline && (vs0 === "&" || vs0 === "!")) {
					let sp0 = valueStr.indexOf(" ");
					if (vs0 === "&" && sp0 !== -1 && sp0 < nl0 && valueStr[sp0 + 1] === "!") sp0 = valueStr.indexOf(" ", sp0 + 1);
					if (sp0 === -1 || nl0 < sp0) hasPropsLine = true;
				}
				if (!hasPropsLine) ws = `\n${ctx.indent}`;
			}
		} else if (valueStr === "" || valueStr[0] === "\n") ws = "";
		str += ws + valueStr;
		if (ctx.inFlow) {
			if (valueCommentDone && onComment) onComment();
		} else if (valueComment && !valueCommentDone) str += stringifyComment$2.lineComment(str, ctx.indent, commentString(valueComment));
		else if (chompKeep && onChompKeep) onChompKeep();
		return str;
	}
	exports.stringifyPair = stringifyPair$1;
}));

//#endregion
//#region node_modules/yaml/dist/log.js
var require_log = /* @__PURE__ */ __commonJSMin(((exports) => {
	var node_process$2 = __require("process");
	function debug(logLevel, ...messages) {
		if (logLevel === "debug") console.log(...messages);
	}
	function warn(logLevel, warning) {
		if (logLevel === "debug" || logLevel === "warn") if (typeof node_process$2.emitWarning === "function") node_process$2.emitWarning(warning);
		else console.warn(warning);
	}
	exports.debug = debug;
	exports.warn = warn;
}));

//#endregion
//#region node_modules/yaml/dist/schema/yaml-1.1/merge.js
var require_merge = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$21 = require_identity();
	var Scalar$15 = require_Scalar();
	const MERGE_KEY = "<<";
	const merge$4 = {
		identify: (value) => value === MERGE_KEY || typeof value === "symbol" && value.description === MERGE_KEY,
		default: "key",
		tag: "tag:yaml.org,2002:merge",
		test: /^<<$/,
		resolve: () => Object.assign(new Scalar$15.Scalar(Symbol(MERGE_KEY)), { addToJSMap: addMergeToJSMap }),
		stringify: () => MERGE_KEY
	};
	const isMergeKey = (ctx, key) => (merge$4.identify(key) || identity$21.isScalar(key) && (!key.type || key.type === Scalar$15.Scalar.PLAIN) && merge$4.identify(key.value)) && ctx?.doc.schema.tags.some((tag) => tag.tag === merge$4.tag && tag.default);
	function addMergeToJSMap(ctx, map$7, value) {
		const source = resolveAliasValue(ctx, value);
		if (identity$21.isSeq(source)) for (const it of source.items) mergeValue(ctx, map$7, it);
		else if (Array.isArray(source)) for (const it of source) mergeValue(ctx, map$7, it);
		else mergeValue(ctx, map$7, source);
	}
	function mergeValue(ctx, map$7, value) {
		const source = resolveAliasValue(ctx, value);
		if (!identity$21.isMap(source)) throw new Error("Merge sources must be maps or map aliases");
		const srcMap = source.toJSON(null, ctx, Map);
		for (const [key, value$1] of srcMap) if (map$7 instanceof Map) {
			if (!map$7.has(key)) map$7.set(key, value$1);
		} else if (map$7 instanceof Set) map$7.add(key);
		else if (!Object.prototype.hasOwnProperty.call(map$7, key)) Object.defineProperty(map$7, key, {
			value: value$1,
			writable: true,
			enumerable: true,
			configurable: true
		});
		return map$7;
	}
	function resolveAliasValue(ctx, value) {
		return ctx && identity$21.isAlias(value) ? value.resolve(ctx.doc, ctx) : value;
	}
	exports.addMergeToJSMap = addMergeToJSMap;
	exports.isMergeKey = isMergeKey;
	exports.merge = merge$4;
}));

//#endregion
//#region node_modules/yaml/dist/nodes/addPairToJSMap.js
var require_addPairToJSMap = /* @__PURE__ */ __commonJSMin(((exports) => {
	var log$1 = require_log();
	var merge$3 = require_merge();
	var stringify$4 = require_stringify();
	var identity$20 = require_identity();
	var toJS$3 = require_toJS();
	function addPairToJSMap$2(ctx, map$7, { key, value }) {
		if (identity$20.isNode(key) && key.addToJSMap) key.addToJSMap(ctx, map$7, value);
		else if (merge$3.isMergeKey(ctx, key)) merge$3.addMergeToJSMap(ctx, map$7, value);
		else {
			const jsKey = toJS$3.toJS(key, "", ctx);
			if (map$7 instanceof Map) map$7.set(jsKey, toJS$3.toJS(value, jsKey, ctx));
			else if (map$7 instanceof Set) map$7.add(jsKey);
			else {
				const stringKey = stringifyKey(key, jsKey, ctx);
				const jsValue = toJS$3.toJS(value, stringKey, ctx);
				if (stringKey in map$7) Object.defineProperty(map$7, stringKey, {
					value: jsValue,
					writable: true,
					enumerable: true,
					configurable: true
				});
				else map$7[stringKey] = jsValue;
			}
		}
		return map$7;
	}
	function stringifyKey(key, jsKey, ctx) {
		if (jsKey === null) return "";
		if (typeof jsKey !== "object") return String(jsKey);
		if (identity$20.isNode(key) && ctx?.doc) {
			const strCtx = stringify$4.createStringifyContext(ctx.doc, {});
			strCtx.anchors = /* @__PURE__ */ new Set();
			for (const node of ctx.anchors.keys()) strCtx.anchors.add(node.anchor);
			strCtx.inFlow = true;
			strCtx.inStringifyKey = true;
			const strKey = key.toString(strCtx);
			if (!ctx.mapKeyWarned) {
				let jsonStr = JSON.stringify(strKey);
				if (jsonStr.length > 40) jsonStr = jsonStr.substring(0, 36) + "...\"";
				log$1.warn(ctx.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${jsonStr}. Set mapAsMap: true to use object keys.`);
				ctx.mapKeyWarned = true;
			}
			return strKey;
		}
		return JSON.stringify(jsKey);
	}
	exports.addPairToJSMap = addPairToJSMap$2;
}));

//#endregion
//#region node_modules/yaml/dist/nodes/Pair.js
var require_Pair = /* @__PURE__ */ __commonJSMin(((exports) => {
	var createNode$2 = require_createNode();
	var stringifyPair = require_stringifyPair();
	var addPairToJSMap$1 = require_addPairToJSMap();
	var identity$19 = require_identity();
	function createPair(key, value, ctx) {
		return new Pair$7(createNode$2.createNode(key, void 0, ctx), createNode$2.createNode(value, void 0, ctx));
	}
	var Pair$7 = class Pair$7 {
		constructor(key, value = null) {
			Object.defineProperty(this, identity$19.NODE_TYPE, { value: identity$19.PAIR });
			this.key = key;
			this.value = value;
		}
		clone(schema$6) {
			let { key, value } = this;
			if (identity$19.isNode(key)) key = key.clone(schema$6);
			if (identity$19.isNode(value)) value = value.clone(schema$6);
			return new Pair$7(key, value);
		}
		toJSON(_, ctx) {
			const pair = ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
			return addPairToJSMap$1.addPairToJSMap(ctx, pair, this);
		}
		toString(ctx, onComment, onChompKeep) {
			return ctx?.doc ? stringifyPair.stringifyPair(this, ctx, onComment, onChompKeep) : JSON.stringify(this);
		}
	};
	exports.Pair = Pair$7;
	exports.createPair = createPair;
}));

//#endregion
//#region node_modules/yaml/dist/stringify/stringifyCollection.js
var require_stringifyCollection = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$18 = require_identity();
	var stringify$3 = require_stringify();
	var stringifyComment$1 = require_stringifyComment();
	function stringifyCollection$2(collection, ctx, options) {
		return (ctx.inFlow ?? collection.flow ? stringifyFlowCollection : stringifyBlockCollection)(collection, ctx, options);
	}
	function stringifyBlockCollection({ comment, items }, ctx, { blockItemPrefix, flowChars, itemIndent, onChompKeep, onComment }) {
		const { indent, options: { commentString } } = ctx;
		const itemCtx = Object.assign({}, ctx, {
			indent: itemIndent,
			type: null
		});
		let chompKeep = false;
		const lines = [];
		for (let i = 0; i < items.length; ++i) {
			const item = items[i];
			let comment$1 = null;
			if (identity$18.isNode(item)) {
				if (!chompKeep && item.spaceBefore) lines.push("");
				addCommentBefore(ctx, lines, item.commentBefore, chompKeep);
				if (item.comment) comment$1 = item.comment;
			} else if (identity$18.isPair(item)) {
				const ik = identity$18.isNode(item.key) ? item.key : null;
				if (ik) {
					if (!chompKeep && ik.spaceBefore) lines.push("");
					addCommentBefore(ctx, lines, ik.commentBefore, chompKeep);
				}
			}
			chompKeep = false;
			let str$1 = stringify$3.stringify(item, itemCtx, () => comment$1 = null, () => chompKeep = true);
			if (comment$1) str$1 += stringifyComment$1.lineComment(str$1, itemIndent, commentString(comment$1));
			if (chompKeep && comment$1) chompKeep = false;
			lines.push(blockItemPrefix + str$1);
		}
		let str;
		if (lines.length === 0) str = flowChars.start + flowChars.end;
		else {
			str = lines[0];
			for (let i = 1; i < lines.length; ++i) {
				const line = lines[i];
				str += line ? `\n${indent}${line}` : "\n";
			}
		}
		if (comment) {
			str += "\n" + stringifyComment$1.indentComment(commentString(comment), indent);
			if (onComment) onComment();
		} else if (chompKeep && onChompKeep) onChompKeep();
		return str;
	}
	function stringifyFlowCollection({ items }, ctx, { flowChars, itemIndent }) {
		const { indent, indentStep, flowCollectionPadding: fcPadding, options: { commentString } } = ctx;
		itemIndent += indentStep;
		const itemCtx = Object.assign({}, ctx, {
			indent: itemIndent,
			inFlow: true,
			type: null
		});
		let reqNewline = false;
		let linesAtValue = 0;
		const lines = [];
		for (let i = 0; i < items.length; ++i) {
			const item = items[i];
			let comment = null;
			if (identity$18.isNode(item)) {
				if (item.spaceBefore) lines.push("");
				addCommentBefore(ctx, lines, item.commentBefore, false);
				if (item.comment) comment = item.comment;
			} else if (identity$18.isPair(item)) {
				const ik = identity$18.isNode(item.key) ? item.key : null;
				if (ik) {
					if (ik.spaceBefore) lines.push("");
					addCommentBefore(ctx, lines, ik.commentBefore, false);
					if (ik.comment) reqNewline = true;
				}
				const iv = identity$18.isNode(item.value) ? item.value : null;
				if (iv) {
					if (iv.comment) comment = iv.comment;
					if (iv.commentBefore) reqNewline = true;
				} else if (item.value == null && ik?.comment) comment = ik.comment;
			}
			if (comment) reqNewline = true;
			let str = stringify$3.stringify(item, itemCtx, () => comment = null);
			reqNewline || (reqNewline = lines.length > linesAtValue || str.includes("\n"));
			if (i < items.length - 1) str += ",";
			else if (ctx.options.trailingComma) {
				if (ctx.options.lineWidth > 0) reqNewline || (reqNewline = lines.reduce((sum, line) => sum + line.length + 2, 2) + (str.length + 2) > ctx.options.lineWidth);
				if (reqNewline) str += ",";
			}
			if (comment) str += stringifyComment$1.lineComment(str, itemIndent, commentString(comment));
			lines.push(str);
			linesAtValue = lines.length;
		}
		const { start, end } = flowChars;
		if (lines.length === 0) return start + end;
		else {
			if (!reqNewline) {
				const len = lines.reduce((sum, line) => sum + line.length + 2, 2);
				reqNewline = ctx.options.lineWidth > 0 && len > ctx.options.lineWidth;
			}
			if (reqNewline) {
				let str = start;
				for (const line of lines) str += line ? `\n${indentStep}${indent}${line}` : "\n";
				return `${str}\n${indent}${end}`;
			} else return `${start}${fcPadding}${lines.join(" ")}${fcPadding}${end}`;
		}
	}
	function addCommentBefore({ indent, options: { commentString } }, lines, comment, chompKeep) {
		if (comment && chompKeep) comment = comment.replace(/^\n+/, "");
		if (comment) {
			const ic = stringifyComment$1.indentComment(commentString(comment), indent);
			lines.push(ic.trimStart());
		}
	}
	exports.stringifyCollection = stringifyCollection$2;
}));

//#endregion
//#region node_modules/yaml/dist/nodes/YAMLMap.js
var require_YAMLMap = /* @__PURE__ */ __commonJSMin(((exports) => {
	var stringifyCollection$1 = require_stringifyCollection();
	var addPairToJSMap = require_addPairToJSMap();
	var Collection$2 = require_Collection();
	var identity$17 = require_identity();
	var Pair$6 = require_Pair();
	var Scalar$14 = require_Scalar();
	function findPair(items, key) {
		const k = identity$17.isScalar(key) ? key.value : key;
		for (const it of items) if (identity$17.isPair(it)) {
			if (it.key === key || it.key === k) return it;
			if (identity$17.isScalar(it.key) && it.key.value === k) return it;
		}
	}
	var YAMLMap$7 = class extends Collection$2.Collection {
		static get tagName() {
			return "tag:yaml.org,2002:map";
		}
		constructor(schema$6) {
			super(identity$17.MAP, schema$6);
			this.items = [];
		}
		/**
		* A generic collection parsing method that can be extended
		* to other node classes that inherit from YAMLMap
		*/
		static from(schema$6, obj, ctx) {
			const { keepUndefined, replacer } = ctx;
			const map$7 = new this(schema$6);
			const add = (key, value) => {
				if (typeof replacer === "function") value = replacer.call(obj, key, value);
				else if (Array.isArray(replacer) && !replacer.includes(key)) return;
				if (value !== void 0 || keepUndefined) map$7.items.push(Pair$6.createPair(key, value, ctx));
			};
			if (obj instanceof Map) for (const [key, value] of obj) add(key, value);
			else if (obj && typeof obj === "object") for (const key of Object.keys(obj)) add(key, obj[key]);
			if (typeof schema$6.sortMapEntries === "function") map$7.items.sort(schema$6.sortMapEntries);
			return map$7;
		}
		/**
		* Adds a value to the collection.
		*
		* @param overwrite - If not set `true`, using a key that is already in the
		*   collection will throw. Otherwise, overwrites the previous value.
		*/
		add(pair, overwrite) {
			let _pair;
			if (identity$17.isPair(pair)) _pair = pair;
			else if (!pair || typeof pair !== "object" || !("key" in pair)) _pair = new Pair$6.Pair(pair, pair?.value);
			else _pair = new Pair$6.Pair(pair.key, pair.value);
			const prev = findPair(this.items, _pair.key);
			const sortEntries = this.schema?.sortMapEntries;
			if (prev) {
				if (!overwrite) throw new Error(`Key ${_pair.key} already set`);
				if (identity$17.isScalar(prev.value) && Scalar$14.isScalarValue(_pair.value)) prev.value.value = _pair.value;
				else prev.value = _pair.value;
			} else if (sortEntries) {
				const i = this.items.findIndex((item) => sortEntries(_pair, item) < 0);
				if (i === -1) this.items.push(_pair);
				else this.items.splice(i, 0, _pair);
			} else this.items.push(_pair);
		}
		delete(key) {
			const it = findPair(this.items, key);
			if (!it) return false;
			return this.items.splice(this.items.indexOf(it), 1).length > 0;
		}
		get(key, keepScalar) {
			const node = findPair(this.items, key)?.value;
			return (!keepScalar && identity$17.isScalar(node) ? node.value : node) ?? void 0;
		}
		has(key) {
			return !!findPair(this.items, key);
		}
		set(key, value) {
			this.add(new Pair$6.Pair(key, value), true);
		}
		/**
		* @param ctx - Conversion context, originally set in Document#toJS()
		* @param {Class} Type - If set, forces the returned collection type
		* @returns Instance of Type, Map, or Object
		*/
		toJSON(_, ctx, Type) {
			const map$7 = Type ? new Type() : ctx?.mapAsMap ? /* @__PURE__ */ new Map() : {};
			if (ctx?.onCreate) ctx.onCreate(map$7);
			for (const item of this.items) addPairToJSMap.addPairToJSMap(ctx, map$7, item);
			return map$7;
		}
		toString(ctx, onComment, onChompKeep) {
			if (!ctx) return JSON.stringify(this);
			for (const item of this.items) if (!identity$17.isPair(item)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
			if (!ctx.allNullValues && this.hasAllNullValues(false)) ctx = Object.assign({}, ctx, { allNullValues: true });
			return stringifyCollection$1.stringifyCollection(this, ctx, {
				blockItemPrefix: "",
				flowChars: {
					start: "{",
					end: "}"
				},
				itemIndent: ctx.indent || "",
				onChompKeep,
				onComment
			});
		}
	};
	exports.YAMLMap = YAMLMap$7;
	exports.findPair = findPair;
}));

//#endregion
//#region node_modules/yaml/dist/schema/common/map.js
var require_map = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$16 = require_identity();
	var YAMLMap$6 = require_YAMLMap();
	const map$5 = {
		collection: "map",
		default: true,
		nodeClass: YAMLMap$6.YAMLMap,
		tag: "tag:yaml.org,2002:map",
		resolve(map$7, onError) {
			if (!identity$16.isMap(map$7)) onError("Expected a mapping for this tag");
			return map$7;
		},
		createNode: (schema$6, obj, ctx) => YAMLMap$6.YAMLMap.from(schema$6, obj, ctx)
	};
	exports.map = map$5;
}));

//#endregion
//#region node_modules/yaml/dist/nodes/YAMLSeq.js
var require_YAMLSeq = /* @__PURE__ */ __commonJSMin(((exports) => {
	var createNode$1 = require_createNode();
	var stringifyCollection = require_stringifyCollection();
	var Collection$1 = require_Collection();
	var identity$15 = require_identity();
	var Scalar$13 = require_Scalar();
	var toJS$2 = require_toJS();
	var YAMLSeq$7 = class extends Collection$1.Collection {
		static get tagName() {
			return "tag:yaml.org,2002:seq";
		}
		constructor(schema$6) {
			super(identity$15.SEQ, schema$6);
			this.items = [];
		}
		add(value) {
			this.items.push(value);
		}
		/**
		* Removes a value from the collection.
		*
		* `key` must contain a representation of an integer for this to succeed.
		* It may be wrapped in a `Scalar`.
		*
		* @returns `true` if the item was found and removed.
		*/
		delete(key) {
			const idx = asItemIndex(key);
			if (typeof idx !== "number") return false;
			return this.items.splice(idx, 1).length > 0;
		}
		get(key, keepScalar) {
			const idx = asItemIndex(key);
			if (typeof idx !== "number") return void 0;
			const it = this.items[idx];
			return !keepScalar && identity$15.isScalar(it) ? it.value : it;
		}
		/**
		* Checks if the collection includes a value with the key `key`.
		*
		* `key` must contain a representation of an integer for this to succeed.
		* It may be wrapped in a `Scalar`.
		*/
		has(key) {
			const idx = asItemIndex(key);
			return typeof idx === "number" && idx < this.items.length;
		}
		/**
		* Sets a value in this collection. For `!!set`, `value` needs to be a
		* boolean to add/remove the item from the set.
		*
		* If `key` does not contain a representation of an integer, this will throw.
		* It may be wrapped in a `Scalar`.
		*/
		set(key, value) {
			const idx = asItemIndex(key);
			if (typeof idx !== "number") throw new Error(`Expected a valid index, not ${key}.`);
			const prev = this.items[idx];
			if (identity$15.isScalar(prev) && Scalar$13.isScalarValue(value)) prev.value = value;
			else this.items[idx] = value;
		}
		toJSON(_, ctx) {
			const seq$6 = [];
			if (ctx?.onCreate) ctx.onCreate(seq$6);
			let i = 0;
			for (const item of this.items) seq$6.push(toJS$2.toJS(item, String(i++), ctx));
			return seq$6;
		}
		toString(ctx, onComment, onChompKeep) {
			if (!ctx) return JSON.stringify(this);
			return stringifyCollection.stringifyCollection(this, ctx, {
				blockItemPrefix: "- ",
				flowChars: {
					start: "[",
					end: "]"
				},
				itemIndent: (ctx.indent || "") + "  ",
				onChompKeep,
				onComment
			});
		}
		static from(schema$6, obj, ctx) {
			const { replacer } = ctx;
			const seq$6 = new this(schema$6);
			if (obj && Symbol.iterator in Object(obj)) {
				let i = 0;
				for (let it of obj) {
					if (typeof replacer === "function") {
						const key = obj instanceof Set ? it : String(i++);
						it = replacer.call(obj, key, it);
					}
					seq$6.items.push(createNode$1.createNode(it, void 0, ctx));
				}
			}
			return seq$6;
		}
	};
	function asItemIndex(key) {
		let idx = identity$15.isScalar(key) ? key.value : key;
		if (idx && typeof idx === "string") idx = Number(idx);
		return typeof idx === "number" && Number.isInteger(idx) && idx >= 0 ? idx : null;
	}
	exports.YAMLSeq = YAMLSeq$7;
}));

//#endregion
//#region node_modules/yaml/dist/schema/common/seq.js
var require_seq = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$14 = require_identity();
	var YAMLSeq$6 = require_YAMLSeq();
	const seq$5 = {
		collection: "seq",
		default: true,
		nodeClass: YAMLSeq$6.YAMLSeq,
		tag: "tag:yaml.org,2002:seq",
		resolve(seq$6, onError) {
			if (!identity$14.isSeq(seq$6)) onError("Expected a sequence for this tag");
			return seq$6;
		},
		createNode: (schema$6, obj, ctx) => YAMLSeq$6.YAMLSeq.from(schema$6, obj, ctx)
	};
	exports.seq = seq$5;
}));

//#endregion
//#region node_modules/yaml/dist/schema/common/string.js
var require_string = /* @__PURE__ */ __commonJSMin(((exports) => {
	var stringifyString$2 = require_stringifyString();
	const string$4 = {
		identify: (value) => typeof value === "string",
		default: true,
		tag: "tag:yaml.org,2002:str",
		resolve: (str) => str,
		stringify(item, ctx, onComment, onChompKeep) {
			ctx = Object.assign({ actualString: true }, ctx);
			return stringifyString$2.stringifyString(item, ctx, onComment, onChompKeep);
		}
	};
	exports.string = string$4;
}));

//#endregion
//#region node_modules/yaml/dist/schema/common/null.js
var require_null = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scalar$12 = require_Scalar();
	const nullTag = {
		identify: (value) => value == null,
		createNode: () => new Scalar$12.Scalar(null),
		default: true,
		tag: "tag:yaml.org,2002:null",
		test: /^(?:~|[Nn]ull|NULL)?$/,
		resolve: () => new Scalar$12.Scalar(null),
		stringify: ({ source }, ctx) => typeof source === "string" && nullTag.test.test(source) ? source : ctx.options.nullStr
	};
	exports.nullTag = nullTag;
}));

//#endregion
//#region node_modules/yaml/dist/schema/core/bool.js
var require_bool$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scalar$11 = require_Scalar();
	const boolTag = {
		identify: (value) => typeof value === "boolean",
		default: true,
		tag: "tag:yaml.org,2002:bool",
		test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
		resolve: (str) => new Scalar$11.Scalar(str[0] === "t" || str[0] === "T"),
		stringify({ source, value }, ctx) {
			if (source && boolTag.test.test(source)) {
				if (value === (source[0] === "t" || source[0] === "T")) return source;
			}
			return value ? ctx.options.trueStr : ctx.options.falseStr;
		}
	};
	exports.boolTag = boolTag;
}));

//#endregion
//#region node_modules/yaml/dist/stringify/stringifyNumber.js
var require_stringifyNumber = /* @__PURE__ */ __commonJSMin(((exports) => {
	function stringifyNumber$5({ format: format$2, minFractionDigits, tag, value }) {
		if (typeof value === "bigint") return String(value);
		const num = typeof value === "number" ? value : Number(value);
		if (!isFinite(num)) return isNaN(num) ? ".nan" : num < 0 ? "-.inf" : ".inf";
		let n = Object.is(value, -0) ? "-0" : JSON.stringify(value);
		if (!format$2 && minFractionDigits && (!tag || tag === "tag:yaml.org,2002:float") && /^-?\d/.test(n) && !n.includes("e")) {
			let i = n.indexOf(".");
			if (i < 0) {
				i = n.length;
				n += ".";
			}
			let d = minFractionDigits - (n.length - i - 1);
			while (d-- > 0) n += "0";
		}
		return n;
	}
	exports.stringifyNumber = stringifyNumber$5;
}));

//#endregion
//#region node_modules/yaml/dist/schema/core/float.js
var require_float$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scalar$10 = require_Scalar();
	var stringifyNumber$4 = require_stringifyNumber();
	const floatNaN$1 = {
		identify: (value) => typeof value === "number",
		default: true,
		tag: "tag:yaml.org,2002:float",
		test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
		resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
		stringify: stringifyNumber$4.stringifyNumber
	};
	const floatExp$1 = {
		identify: (value) => typeof value === "number",
		default: true,
		tag: "tag:yaml.org,2002:float",
		format: "EXP",
		test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
		resolve: (str) => parseFloat(str),
		stringify(node) {
			const num = Number(node.value);
			return isFinite(num) ? num.toExponential() : stringifyNumber$4.stringifyNumber(node);
		}
	};
	const float$4 = {
		identify: (value) => typeof value === "number",
		default: true,
		tag: "tag:yaml.org,2002:float",
		test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
		resolve(str) {
			const node = new Scalar$10.Scalar(parseFloat(str));
			const dot = str.indexOf(".");
			if (dot !== -1 && str[str.length - 1] === "0") node.minFractionDigits = str.length - dot - 1;
			return node;
		},
		stringify: stringifyNumber$4.stringifyNumber
	};
	exports.float = float$4;
	exports.floatExp = floatExp$1;
	exports.floatNaN = floatNaN$1;
}));

//#endregion
//#region node_modules/yaml/dist/schema/core/int.js
var require_int$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var stringifyNumber$3 = require_stringifyNumber();
	const intIdentify$2 = (value) => typeof value === "bigint" || Number.isInteger(value);
	const intResolve$1 = (str, offset, radix, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str.substring(offset), radix);
	function intStringify$1(node, radix, prefix) {
		const { value } = node;
		if (intIdentify$2(value) && value >= 0) return prefix + value.toString(radix);
		return stringifyNumber$3.stringifyNumber(node);
	}
	const intOct$1 = {
		identify: (value) => intIdentify$2(value) && value >= 0,
		default: true,
		tag: "tag:yaml.org,2002:int",
		format: "OCT",
		test: /^0o[0-7]+$/,
		resolve: (str, _onError, opt) => intResolve$1(str, 2, 8, opt),
		stringify: (node) => intStringify$1(node, 8, "0o")
	};
	const int$4 = {
		identify: intIdentify$2,
		default: true,
		tag: "tag:yaml.org,2002:int",
		test: /^[-+]?[0-9]+$/,
		resolve: (str, _onError, opt) => intResolve$1(str, 0, 10, opt),
		stringify: stringifyNumber$3.stringifyNumber
	};
	const intHex$1 = {
		identify: (value) => intIdentify$2(value) && value >= 0,
		default: true,
		tag: "tag:yaml.org,2002:int",
		format: "HEX",
		test: /^0x[0-9a-fA-F]+$/,
		resolve: (str, _onError, opt) => intResolve$1(str, 2, 16, opt),
		stringify: (node) => intStringify$1(node, 16, "0x")
	};
	exports.int = int$4;
	exports.intHex = intHex$1;
	exports.intOct = intOct$1;
}));

//#endregion
//#region node_modules/yaml/dist/schema/core/schema.js
var require_schema$2 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var map$4 = require_map();
	var _null$2 = require_null();
	var seq$4 = require_seq();
	var string$3 = require_string();
	var bool$2 = require_bool$1();
	var float$3 = require_float$1();
	var int$3 = require_int$1();
	const schema$5 = [
		map$4.map,
		seq$4.seq,
		string$3.string,
		_null$2.nullTag,
		bool$2.boolTag,
		int$3.intOct,
		int$3.int,
		int$3.intHex,
		float$3.floatNaN,
		float$3.floatExp,
		float$3.float
	];
	exports.schema = schema$5;
}));

//#endregion
//#region node_modules/yaml/dist/schema/json/schema.js
var require_schema$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scalar$9 = require_Scalar();
	var map$3 = require_map();
	var seq$3 = require_seq();
	function intIdentify$1(value) {
		return typeof value === "bigint" || Number.isInteger(value);
	}
	const stringifyJSON = ({ value }) => JSON.stringify(value);
	const jsonScalars = [
		{
			identify: (value) => typeof value === "string",
			default: true,
			tag: "tag:yaml.org,2002:str",
			resolve: (str) => str,
			stringify: stringifyJSON
		},
		{
			identify: (value) => value == null,
			createNode: () => new Scalar$9.Scalar(null),
			default: true,
			tag: "tag:yaml.org,2002:null",
			test: /^null$/,
			resolve: () => null,
			stringify: stringifyJSON
		},
		{
			identify: (value) => typeof value === "boolean",
			default: true,
			tag: "tag:yaml.org,2002:bool",
			test: /^true$|^false$/,
			resolve: (str) => str === "true",
			stringify: stringifyJSON
		},
		{
			identify: intIdentify$1,
			default: true,
			tag: "tag:yaml.org,2002:int",
			test: /^-?(?:0|[1-9][0-9]*)$/,
			resolve: (str, _onError, { intAsBigInt }) => intAsBigInt ? BigInt(str) : parseInt(str, 10),
			stringify: ({ value }) => intIdentify$1(value) ? value.toString() : JSON.stringify(value)
		},
		{
			identify: (value) => typeof value === "number",
			default: true,
			tag: "tag:yaml.org,2002:float",
			test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
			resolve: (str) => parseFloat(str),
			stringify: stringifyJSON
		}
	];
	const schema$4 = [map$3.map, seq$3.seq].concat(jsonScalars, {
		default: true,
		tag: "",
		test: /^/,
		resolve(str, onError) {
			onError(`Unresolved plain scalar ${JSON.stringify(str)}`);
			return str;
		}
	});
	exports.schema = schema$4;
}));

//#endregion
//#region node_modules/yaml/dist/schema/yaml-1.1/binary.js
var require_binary = /* @__PURE__ */ __commonJSMin(((exports) => {
	var node_buffer = __require("buffer");
	var Scalar$8 = require_Scalar();
	var stringifyString$1 = require_stringifyString();
	const binary$2 = {
		identify: (value) => value instanceof Uint8Array,
		default: false,
		tag: "tag:yaml.org,2002:binary",
		resolve(src, onError) {
			if (typeof node_buffer.Buffer === "function") return node_buffer.Buffer.from(src, "base64");
			else if (typeof atob === "function") {
				const str = atob(src.replace(/[\n\r]/g, ""));
				const buffer = new Uint8Array(str.length);
				for (let i = 0; i < str.length; ++i) buffer[i] = str.charCodeAt(i);
				return buffer;
			} else {
				onError("This environment does not support reading binary tags; either Buffer or atob is required");
				return src;
			}
		},
		stringify({ comment, type, value }, ctx, onComment, onChompKeep) {
			if (!value) return "";
			const buf = value;
			let str;
			if (typeof node_buffer.Buffer === "function") str = buf instanceof node_buffer.Buffer ? buf.toString("base64") : node_buffer.Buffer.from(buf.buffer).toString("base64");
			else if (typeof btoa === "function") {
				let s = "";
				for (let i = 0; i < buf.length; ++i) s += String.fromCharCode(buf[i]);
				str = btoa(s);
			} else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
			type ?? (type = Scalar$8.Scalar.BLOCK_LITERAL);
			if (type !== Scalar$8.Scalar.QUOTE_DOUBLE) {
				const lineWidth = Math.max(ctx.options.lineWidth - ctx.indent.length, ctx.options.minContentWidth);
				const n = Math.ceil(str.length / lineWidth);
				const lines = new Array(n);
				for (let i = 0, o = 0; i < n; ++i, o += lineWidth) lines[i] = str.substr(o, lineWidth);
				str = lines.join(type === Scalar$8.Scalar.BLOCK_LITERAL ? "\n" : " ");
			}
			return stringifyString$1.stringifyString({
				comment,
				type,
				value: str
			}, ctx, onComment, onChompKeep);
		}
	};
	exports.binary = binary$2;
}));

//#endregion
//#region node_modules/yaml/dist/schema/yaml-1.1/pairs.js
var require_pairs = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$13 = require_identity();
	var Pair$5 = require_Pair();
	var Scalar$7 = require_Scalar();
	var YAMLSeq$5 = require_YAMLSeq();
	function resolvePairs(seq$6, onError) {
		if (identity$13.isSeq(seq$6)) for (let i = 0; i < seq$6.items.length; ++i) {
			let item = seq$6.items[i];
			if (identity$13.isPair(item)) continue;
			else if (identity$13.isMap(item)) {
				if (item.items.length > 1) onError("Each pair must have its own sequence indicator");
				const pair = item.items[0] || new Pair$5.Pair(new Scalar$7.Scalar(null));
				if (item.commentBefore) pair.key.commentBefore = pair.key.commentBefore ? `${item.commentBefore}\n${pair.key.commentBefore}` : item.commentBefore;
				if (item.comment) {
					const cn = pair.value ?? pair.key;
					cn.comment = cn.comment ? `${item.comment}\n${cn.comment}` : item.comment;
				}
				item = pair;
			}
			seq$6.items[i] = identity$13.isPair(item) ? item : new Pair$5.Pair(item);
		}
		else onError("Expected a sequence for this tag");
		return seq$6;
	}
	function createPairs(schema$6, iterable, ctx) {
		const { replacer } = ctx;
		const pairs$4 = new YAMLSeq$5.YAMLSeq(schema$6);
		pairs$4.tag = "tag:yaml.org,2002:pairs";
		let i = 0;
		if (iterable && Symbol.iterator in Object(iterable)) for (let it of iterable) {
			if (typeof replacer === "function") it = replacer.call(iterable, String(i++), it);
			let key, value;
			if (Array.isArray(it)) if (it.length === 2) {
				key = it[0];
				value = it[1];
			} else throw new TypeError(`Expected [key, value] tuple: ${it}`);
			else if (it && it instanceof Object) {
				const keys = Object.keys(it);
				if (keys.length === 1) {
					key = keys[0];
					value = it[key];
				} else throw new TypeError(`Expected tuple with one key, not ${keys.length} keys`);
			} else key = it;
			pairs$4.items.push(Pair$5.createPair(key, value, ctx));
		}
		return pairs$4;
	}
	const pairs$3 = {
		collection: "seq",
		default: false,
		tag: "tag:yaml.org,2002:pairs",
		resolve: resolvePairs,
		createNode: createPairs
	};
	exports.createPairs = createPairs;
	exports.pairs = pairs$3;
	exports.resolvePairs = resolvePairs;
}));

//#endregion
//#region node_modules/yaml/dist/schema/yaml-1.1/omap.js
var require_omap = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$12 = require_identity();
	var toJS$1 = require_toJS();
	var YAMLMap$5 = require_YAMLMap();
	var YAMLSeq$4 = require_YAMLSeq();
	var pairs$2 = require_pairs();
	var YAMLOMap = class YAMLOMap extends YAMLSeq$4.YAMLSeq {
		constructor() {
			super();
			this.add = YAMLMap$5.YAMLMap.prototype.add.bind(this);
			this.delete = YAMLMap$5.YAMLMap.prototype.delete.bind(this);
			this.get = YAMLMap$5.YAMLMap.prototype.get.bind(this);
			this.has = YAMLMap$5.YAMLMap.prototype.has.bind(this);
			this.set = YAMLMap$5.YAMLMap.prototype.set.bind(this);
			this.tag = YAMLOMap.tag;
		}
		/**
		* If `ctx` is given, the return type is actually `Map<unknown, unknown>`,
		* but TypeScript won't allow widening the signature of a child method.
		*/
		toJSON(_, ctx) {
			if (!ctx) return super.toJSON(_);
			const map$7 = /* @__PURE__ */ new Map();
			if (ctx?.onCreate) ctx.onCreate(map$7);
			for (const pair of this.items) {
				let key, value;
				if (identity$12.isPair(pair)) {
					key = toJS$1.toJS(pair.key, "", ctx);
					value = toJS$1.toJS(pair.value, key, ctx);
				} else key = toJS$1.toJS(pair, "", ctx);
				if (map$7.has(key)) throw new Error("Ordered maps must not include duplicate keys");
				map$7.set(key, value);
			}
			return map$7;
		}
		static from(schema$6, iterable, ctx) {
			const pairs$1$1 = pairs$2.createPairs(schema$6, iterable, ctx);
			const omap$3 = new this();
			omap$3.items = pairs$1$1.items;
			return omap$3;
		}
	};
	YAMLOMap.tag = "tag:yaml.org,2002:omap";
	const omap$2 = {
		collection: "seq",
		identify: (value) => value instanceof Map,
		nodeClass: YAMLOMap,
		default: false,
		tag: "tag:yaml.org,2002:omap",
		resolve(seq$6, onError) {
			const pairs$1$1 = pairs$2.resolvePairs(seq$6, onError);
			const seenKeys = [];
			for (const { key } of pairs$1$1.items) if (identity$12.isScalar(key)) if (seenKeys.includes(key.value)) onError(`Ordered maps must not include duplicate keys: ${key.value}`);
			else seenKeys.push(key.value);
			return Object.assign(new YAMLOMap(), pairs$1$1);
		},
		createNode: (schema$6, iterable, ctx) => YAMLOMap.from(schema$6, iterable, ctx)
	};
	exports.YAMLOMap = YAMLOMap;
	exports.omap = omap$2;
}));

//#endregion
//#region node_modules/yaml/dist/schema/yaml-1.1/bool.js
var require_bool = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scalar$6 = require_Scalar();
	function boolStringify({ value, source }, ctx) {
		if (source && (value ? trueTag : falseTag).test.test(source)) return source;
		return value ? ctx.options.trueStr : ctx.options.falseStr;
	}
	const trueTag = {
		identify: (value) => value === true,
		default: true,
		tag: "tag:yaml.org,2002:bool",
		test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
		resolve: () => new Scalar$6.Scalar(true),
		stringify: boolStringify
	};
	const falseTag = {
		identify: (value) => value === false,
		default: true,
		tag: "tag:yaml.org,2002:bool",
		test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
		resolve: () => new Scalar$6.Scalar(false),
		stringify: boolStringify
	};
	exports.falseTag = falseTag;
	exports.trueTag = trueTag;
}));

//#endregion
//#region node_modules/yaml/dist/schema/yaml-1.1/float.js
var require_float = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scalar$5 = require_Scalar();
	var stringifyNumber$2 = require_stringifyNumber();
	const floatNaN = {
		identify: (value) => typeof value === "number",
		default: true,
		tag: "tag:yaml.org,2002:float",
		test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
		resolve: (str) => str.slice(-3).toLowerCase() === "nan" ? NaN : str[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
		stringify: stringifyNumber$2.stringifyNumber
	};
	const floatExp = {
		identify: (value) => typeof value === "number",
		default: true,
		tag: "tag:yaml.org,2002:float",
		format: "EXP",
		test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
		resolve: (str) => parseFloat(str.replace(/_/g, "")),
		stringify(node) {
			const num = Number(node.value);
			return isFinite(num) ? num.toExponential() : stringifyNumber$2.stringifyNumber(node);
		}
	};
	const float$2 = {
		identify: (value) => typeof value === "number",
		default: true,
		tag: "tag:yaml.org,2002:float",
		test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
		resolve(str) {
			const node = new Scalar$5.Scalar(parseFloat(str.replace(/_/g, "")));
			const dot = str.indexOf(".");
			if (dot !== -1) {
				const f = str.substring(dot + 1).replace(/_/g, "");
				if (f[f.length - 1] === "0") node.minFractionDigits = f.length;
			}
			return node;
		},
		stringify: stringifyNumber$2.stringifyNumber
	};
	exports.float = float$2;
	exports.floatExp = floatExp;
	exports.floatNaN = floatNaN;
}));

//#endregion
//#region node_modules/yaml/dist/schema/yaml-1.1/int.js
var require_int = /* @__PURE__ */ __commonJSMin(((exports) => {
	var stringifyNumber$1 = require_stringifyNumber();
	const intIdentify = (value) => typeof value === "bigint" || Number.isInteger(value);
	function intResolve(str, offset, radix, { intAsBigInt }) {
		const sign = str[0];
		if (sign === "-" || sign === "+") offset += 1;
		str = str.substring(offset).replace(/_/g, "");
		if (intAsBigInt) {
			switch (radix) {
				case 2:
					str = `0b${str}`;
					break;
				case 8:
					str = `0o${str}`;
					break;
				case 16:
					str = `0x${str}`;
					break;
			}
			const n$1 = BigInt(str);
			return sign === "-" ? BigInt(-1) * n$1 : n$1;
		}
		const n = parseInt(str, radix);
		return sign === "-" ? -1 * n : n;
	}
	function intStringify(node, radix, prefix) {
		const { value } = node;
		if (intIdentify(value)) {
			const str = value.toString(radix);
			return value < 0 ? "-" + prefix + str.substr(1) : prefix + str;
		}
		return stringifyNumber$1.stringifyNumber(node);
	}
	const intBin = {
		identify: intIdentify,
		default: true,
		tag: "tag:yaml.org,2002:int",
		format: "BIN",
		test: /^[-+]?0b[0-1_]+$/,
		resolve: (str, _onError, opt) => intResolve(str, 2, 2, opt),
		stringify: (node) => intStringify(node, 2, "0b")
	};
	const intOct = {
		identify: intIdentify,
		default: true,
		tag: "tag:yaml.org,2002:int",
		format: "OCT",
		test: /^[-+]?0[0-7_]+$/,
		resolve: (str, _onError, opt) => intResolve(str, 1, 8, opt),
		stringify: (node) => intStringify(node, 8, "0")
	};
	const int$2 = {
		identify: intIdentify,
		default: true,
		tag: "tag:yaml.org,2002:int",
		test: /^[-+]?[0-9][0-9_]*$/,
		resolve: (str, _onError, opt) => intResolve(str, 0, 10, opt),
		stringify: stringifyNumber$1.stringifyNumber
	};
	const intHex = {
		identify: intIdentify,
		default: true,
		tag: "tag:yaml.org,2002:int",
		format: "HEX",
		test: /^[-+]?0x[0-9a-fA-F_]+$/,
		resolve: (str, _onError, opt) => intResolve(str, 2, 16, opt),
		stringify: (node) => intStringify(node, 16, "0x")
	};
	exports.int = int$2;
	exports.intBin = intBin;
	exports.intHex = intHex;
	exports.intOct = intOct;
}));

//#endregion
//#region node_modules/yaml/dist/schema/yaml-1.1/set.js
var require_set = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$11 = require_identity();
	var Pair$4 = require_Pair();
	var YAMLMap$4 = require_YAMLMap();
	var YAMLSet = class YAMLSet extends YAMLMap$4.YAMLMap {
		constructor(schema$6) {
			super(schema$6);
			this.tag = YAMLSet.tag;
		}
		add(key) {
			let pair;
			if (identity$11.isPair(key)) pair = key;
			else if (key && typeof key === "object" && "key" in key && "value" in key && key.value === null) pair = new Pair$4.Pair(key.key, null);
			else pair = new Pair$4.Pair(key, null);
			if (!YAMLMap$4.findPair(this.items, pair.key)) this.items.push(pair);
		}
		/**
		* If `keepPair` is `true`, returns the Pair matching `key`.
		* Otherwise, returns the value of that Pair's key.
		*/
		get(key, keepPair) {
			const pair = YAMLMap$4.findPair(this.items, key);
			return !keepPair && identity$11.isPair(pair) ? identity$11.isScalar(pair.key) ? pair.key.value : pair.key : pair;
		}
		set(key, value) {
			if (typeof value !== "boolean") throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
			const prev = YAMLMap$4.findPair(this.items, key);
			if (prev && !value) this.items.splice(this.items.indexOf(prev), 1);
			else if (!prev && value) this.items.push(new Pair$4.Pair(key));
		}
		toJSON(_, ctx) {
			return super.toJSON(_, ctx, Set);
		}
		toString(ctx, onComment, onChompKeep) {
			if (!ctx) return JSON.stringify(this);
			if (this.hasAllNullValues(true)) return super.toString(Object.assign({}, ctx, { allNullValues: true }), onComment, onChompKeep);
			else throw new Error("Set items must all have null values");
		}
		static from(schema$6, iterable, ctx) {
			const { replacer } = ctx;
			const set$4 = new this(schema$6);
			if (iterable && Symbol.iterator in Object(iterable)) for (let value of iterable) {
				if (typeof replacer === "function") value = replacer.call(iterable, value, value);
				set$4.items.push(Pair$4.createPair(value, null, ctx));
			}
			return set$4;
		}
	};
	YAMLSet.tag = "tag:yaml.org,2002:set";
	const set$2 = {
		collection: "map",
		identify: (value) => value instanceof Set,
		nodeClass: YAMLSet,
		default: false,
		tag: "tag:yaml.org,2002:set",
		createNode: (schema$6, iterable, ctx) => YAMLSet.from(schema$6, iterable, ctx),
		resolve(map$7, onError) {
			if (identity$11.isMap(map$7)) if (map$7.hasAllNullValues(true)) return Object.assign(new YAMLSet(), map$7);
			else onError("Set items must all have null values");
			else onError("Expected a mapping for this tag");
			return map$7;
		}
	};
	exports.YAMLSet = YAMLSet;
	exports.set = set$2;
}));

//#endregion
//#region node_modules/yaml/dist/schema/yaml-1.1/timestamp.js
var require_timestamp = /* @__PURE__ */ __commonJSMin(((exports) => {
	var stringifyNumber = require_stringifyNumber();
	/** Internal types handle bigint as number, because TS can't figure it out. */
	function parseSexagesimal(str, asBigInt) {
		const sign = str[0];
		const parts = sign === "-" || sign === "+" ? str.substring(1) : str;
		const num = (n) => asBigInt ? BigInt(n) : Number(n);
		const res = parts.replace(/_/g, "").split(":").reduce((res$1, p) => res$1 * num(60) + num(p), num(0));
		return sign === "-" ? num(-1) * res : res;
	}
	/**
	* hhhh:mm:ss.sss
	*
	* Internal types handle bigint as number, because TS can't figure it out.
	*/
	function stringifySexagesimal(node) {
		let { value } = node;
		let num = (n) => n;
		if (typeof value === "bigint") num = (n) => BigInt(n);
		else if (isNaN(value) || !isFinite(value)) return stringifyNumber.stringifyNumber(node);
		let sign = "";
		if (value < 0) {
			sign = "-";
			value *= num(-1);
		}
		const _60 = num(60);
		const parts = [value % _60];
		if (value < 60) parts.unshift(0);
		else {
			value = (value - parts[0]) / _60;
			parts.unshift(value % _60);
			if (value >= 60) {
				value = (value - parts[0]) / _60;
				parts.unshift(value);
			}
		}
		return sign + parts.map((n) => String(n).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
	}
	const intTime = {
		identify: (value) => typeof value === "bigint" || Number.isInteger(value),
		default: true,
		tag: "tag:yaml.org,2002:int",
		format: "TIME",
		test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
		resolve: (str, _onError, { intAsBigInt }) => parseSexagesimal(str, intAsBigInt),
		stringify: stringifySexagesimal
	};
	const floatTime = {
		identify: (value) => typeof value === "number",
		default: true,
		tag: "tag:yaml.org,2002:float",
		format: "TIME",
		test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
		resolve: (str) => parseSexagesimal(str, false),
		stringify: stringifySexagesimal
	};
	const timestamp$2 = {
		identify: (value) => value instanceof Date,
		default: true,
		tag: "tag:yaml.org,2002:timestamp",
		test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
		resolve(str) {
			const match$1 = str.match(timestamp$2.test);
			if (!match$1) throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
			const [, year, month, day, hour, minute, second] = match$1.map(Number);
			const millisec = match$1[7] ? Number((match$1[7] + "00").substr(1, 3)) : 0;
			let date$3 = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec);
			const tz = match$1[8];
			if (tz && tz !== "Z") {
				let d = parseSexagesimal(tz, false);
				if (Math.abs(d) < 30) d *= 60;
				date$3 -= 6e4 * d;
			}
			return new Date(date$3);
		},
		stringify: ({ value }) => value?.toISOString().replace(/(T00:00:00)?\.000Z$/, "") ?? ""
	};
	exports.floatTime = floatTime;
	exports.intTime = intTime;
	exports.timestamp = timestamp$2;
}));

//#endregion
//#region node_modules/yaml/dist/schema/yaml-1.1/schema.js
var require_schema = /* @__PURE__ */ __commonJSMin(((exports) => {
	var map$2 = require_map();
	var _null$1 = require_null();
	var seq$2 = require_seq();
	var string$2 = require_string();
	var binary$1 = require_binary();
	var bool$1 = require_bool();
	var float$1 = require_float();
	var int$1 = require_int();
	var merge$2 = require_merge();
	var omap$1 = require_omap();
	var pairs$1 = require_pairs();
	var set$1 = require_set();
	var timestamp$1 = require_timestamp();
	const schema$3 = [
		map$2.map,
		seq$2.seq,
		string$2.string,
		_null$1.nullTag,
		bool$1.trueTag,
		bool$1.falseTag,
		int$1.intBin,
		int$1.intOct,
		int$1.int,
		int$1.intHex,
		float$1.floatNaN,
		float$1.floatExp,
		float$1.float,
		binary$1.binary,
		merge$2.merge,
		omap$1.omap,
		pairs$1.pairs,
		set$1.set,
		timestamp$1.intTime,
		timestamp$1.floatTime,
		timestamp$1.timestamp
	];
	exports.schema = schema$3;
}));

//#endregion
//#region node_modules/yaml/dist/schema/tags.js
var require_tags = /* @__PURE__ */ __commonJSMin(((exports) => {
	var map$1 = require_map();
	var _null = require_null();
	var seq$1 = require_seq();
	var string$1 = require_string();
	var bool = require_bool$1();
	var float = require_float$1();
	var int = require_int$1();
	var schema = require_schema$2();
	var schema$1 = require_schema$1();
	var binary = require_binary();
	var merge$1 = require_merge();
	var omap = require_omap();
	var pairs = require_pairs();
	var schema$2 = require_schema();
	var set = require_set();
	var timestamp = require_timestamp();
	const schemas = new Map([
		["core", schema.schema],
		["failsafe", [
			map$1.map,
			seq$1.seq,
			string$1.string
		]],
		["json", schema$1.schema],
		["yaml11", schema$2.schema],
		["yaml-1.1", schema$2.schema]
	]);
	const tagsByName = {
		binary: binary.binary,
		bool: bool.boolTag,
		float: float.float,
		floatExp: float.floatExp,
		floatNaN: float.floatNaN,
		floatTime: timestamp.floatTime,
		int: int.int,
		intHex: int.intHex,
		intOct: int.intOct,
		intTime: timestamp.intTime,
		map: map$1.map,
		merge: merge$1.merge,
		null: _null.nullTag,
		omap: omap.omap,
		pairs: pairs.pairs,
		seq: seq$1.seq,
		set: set.set,
		timestamp: timestamp.timestamp
	};
	const coreKnownTags = {
		"tag:yaml.org,2002:binary": binary.binary,
		"tag:yaml.org,2002:merge": merge$1.merge,
		"tag:yaml.org,2002:omap": omap.omap,
		"tag:yaml.org,2002:pairs": pairs.pairs,
		"tag:yaml.org,2002:set": set.set,
		"tag:yaml.org,2002:timestamp": timestamp.timestamp
	};
	function getTags(customTags, schemaName, addMergeTag) {
		const schemaTags = schemas.get(schemaName);
		if (schemaTags && !customTags) return addMergeTag && !schemaTags.includes(merge$1.merge) ? schemaTags.concat(merge$1.merge) : schemaTags.slice();
		let tags$1 = schemaTags;
		if (!tags$1) if (Array.isArray(customTags)) tags$1 = [];
		else {
			const keys = Array.from(schemas.keys()).filter((key) => key !== "yaml11").map((key) => JSON.stringify(key)).join(", ");
			throw new Error(`Unknown schema "${schemaName}"; use one of ${keys} or define customTags array`);
		}
		if (Array.isArray(customTags)) for (const tag of customTags) tags$1 = tags$1.concat(tag);
		else if (typeof customTags === "function") tags$1 = customTags(tags$1.slice());
		if (addMergeTag) tags$1 = tags$1.concat(merge$1.merge);
		return tags$1.reduce((tags$2, tag) => {
			const tagObj = typeof tag === "string" ? tagsByName[tag] : tag;
			if (!tagObj) {
				const tagName = JSON.stringify(tag);
				const keys = Object.keys(tagsByName).map((key) => JSON.stringify(key)).join(", ");
				throw new Error(`Unknown custom tag ${tagName}; use one of ${keys}`);
			}
			if (!tags$2.includes(tagObj)) tags$2.push(tagObj);
			return tags$2;
		}, []);
	}
	exports.coreKnownTags = coreKnownTags;
	exports.getTags = getTags;
}));

//#endregion
//#region node_modules/yaml/dist/schema/Schema.js
var require_Schema = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$10 = require_identity();
	var map = require_map();
	var seq = require_seq();
	var string = require_string();
	var tags = require_tags();
	const sortMapEntriesByKey = (a, b) => a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
	var Schema$2 = class Schema$2 {
		constructor({ compat, customTags, merge: merge$6, resolveKnownTags, schema: schema$6, sortMapEntries, toStringDefaults }) {
			this.compat = Array.isArray(compat) ? tags.getTags(compat, "compat") : compat ? tags.getTags(null, compat) : null;
			this.name = typeof schema$6 === "string" && schema$6 || "core";
			this.knownTags = resolveKnownTags ? tags.coreKnownTags : {};
			this.tags = tags.getTags(customTags, this.name, merge$6);
			this.toStringOptions = toStringDefaults ?? null;
			Object.defineProperty(this, identity$10.MAP, { value: map.map });
			Object.defineProperty(this, identity$10.SCALAR, { value: string.string });
			Object.defineProperty(this, identity$10.SEQ, { value: seq.seq });
			this.sortMapEntries = typeof sortMapEntries === "function" ? sortMapEntries : sortMapEntries === true ? sortMapEntriesByKey : null;
		}
		clone() {
			const copy = Object.create(Schema$2.prototype, Object.getOwnPropertyDescriptors(this));
			copy.tags = this.tags.slice();
			return copy;
		}
	};
	exports.Schema = Schema$2;
}));

//#endregion
//#region node_modules/yaml/dist/stringify/stringifyDocument.js
var require_stringifyDocument = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$9 = require_identity();
	var stringify$2 = require_stringify();
	var stringifyComment = require_stringifyComment();
	function stringifyDocument$1(doc, options) {
		const lines = [];
		let hasDirectives = options.directives === true;
		if (options.directives !== false && doc.directives) {
			const dir = doc.directives.toString(doc);
			if (dir) {
				lines.push(dir);
				hasDirectives = true;
			} else if (doc.directives.docStart) hasDirectives = true;
		}
		if (hasDirectives) lines.push("---");
		const ctx = stringify$2.createStringifyContext(doc, options);
		const { commentString } = ctx.options;
		if (doc.commentBefore) {
			if (lines.length !== 1) lines.unshift("");
			const cs = commentString(doc.commentBefore);
			lines.unshift(stringifyComment.indentComment(cs, ""));
		}
		let chompKeep = false;
		let contentComment = null;
		if (doc.contents) {
			if (identity$9.isNode(doc.contents)) {
				if (doc.contents.spaceBefore && hasDirectives) lines.push("");
				if (doc.contents.commentBefore) {
					const cs = commentString(doc.contents.commentBefore);
					lines.push(stringifyComment.indentComment(cs, ""));
				}
				ctx.forceBlockIndent = !!doc.comment;
				contentComment = doc.contents.comment;
			}
			const onChompKeep = contentComment ? void 0 : () => chompKeep = true;
			let body = stringify$2.stringify(doc.contents, ctx, () => contentComment = null, onChompKeep);
			if (contentComment) body += stringifyComment.lineComment(body, "", commentString(contentComment));
			if ((body[0] === "|" || body[0] === ">") && lines[lines.length - 1] === "---") lines[lines.length - 1] = `--- ${body}`;
			else lines.push(body);
		} else lines.push(stringify$2.stringify(doc.contents, ctx));
		if (doc.directives?.docEnd) if (doc.comment) {
			const cs = commentString(doc.comment);
			if (cs.includes("\n")) {
				lines.push("...");
				lines.push(stringifyComment.indentComment(cs, ""));
			} else lines.push(`... ${cs}`);
		} else lines.push("...");
		else {
			let dc = doc.comment;
			if (dc && chompKeep) dc = dc.replace(/^\n+/, "");
			if (dc) {
				if ((!chompKeep || contentComment) && lines[lines.length - 1] !== "") lines.push("");
				lines.push(stringifyComment.indentComment(commentString(dc), ""));
			}
		}
		return lines.join("\n") + "\n";
	}
	exports.stringifyDocument = stringifyDocument$1;
}));

//#endregion
//#region node_modules/yaml/dist/doc/Document.js
var require_Document = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Alias$2 = require_Alias();
	var Collection = require_Collection();
	var identity$8 = require_identity();
	var Pair$3 = require_Pair();
	var toJS = require_toJS();
	var Schema$1 = require_Schema();
	var stringifyDocument = require_stringifyDocument();
	var anchors = require_anchors();
	var applyReviver = require_applyReviver();
	var createNode = require_createNode();
	var directives$1 = require_directives();
	var Document$4 = class Document$4 {
		constructor(value, replacer, options) {
			/** A comment before this Document */
			this.commentBefore = null;
			/** A comment immediately after this Document */
			this.comment = null;
			/** Errors encountered during parsing. */
			this.errors = [];
			/** Warnings encountered during parsing. */
			this.warnings = [];
			Object.defineProperty(this, identity$8.NODE_TYPE, { value: identity$8.DOC });
			let _replacer = null;
			if (typeof replacer === "function" || Array.isArray(replacer)) _replacer = replacer;
			else if (options === void 0 && replacer) {
				options = replacer;
				replacer = void 0;
			}
			const opt = Object.assign({
				intAsBigInt: false,
				keepSourceTokens: false,
				logLevel: "warn",
				prettyErrors: true,
				strict: true,
				stringKeys: false,
				uniqueKeys: true,
				version: "1.2"
			}, options);
			this.options = opt;
			let { version: version$1 } = opt;
			if (options?._directives) {
				this.directives = options._directives.atDocument();
				if (this.directives.yaml.explicit) version$1 = this.directives.yaml.version;
			} else this.directives = new directives$1.Directives({ version: version$1 });
			this.setSchema(version$1, options);
			this.contents = value === void 0 ? null : this.createNode(value, _replacer, options);
		}
		/**
		* Create a deep copy of this Document and its contents.
		*
		* Custom Node values that inherit from `Object` still refer to their original instances.
		*/
		clone() {
			const copy = Object.create(Document$4.prototype, { [identity$8.NODE_TYPE]: { value: identity$8.DOC } });
			copy.commentBefore = this.commentBefore;
			copy.comment = this.comment;
			copy.errors = this.errors.slice();
			copy.warnings = this.warnings.slice();
			copy.options = Object.assign({}, this.options);
			if (this.directives) copy.directives = this.directives.clone();
			copy.schema = this.schema.clone();
			copy.contents = identity$8.isNode(this.contents) ? this.contents.clone(copy.schema) : this.contents;
			if (this.range) copy.range = this.range.slice();
			return copy;
		}
		/** Adds a value to the document. */
		add(value) {
			if (assertCollection(this.contents)) this.contents.add(value);
		}
		/** Adds a value to the document. */
		addIn(path$2, value) {
			if (assertCollection(this.contents)) this.contents.addIn(path$2, value);
		}
		/**
		* Create a new `Alias` node, ensuring that the target `node` has the required anchor.
		*
		* If `node` already has an anchor, `name` is ignored.
		* Otherwise, the `node.anchor` value will be set to `name`,
		* or if an anchor with that name is already present in the document,
		* `name` will be used as a prefix for a new unique anchor.
		* If `name` is undefined, the generated anchor will use 'a' as a prefix.
		*/
		createAlias(node, name) {
			if (!node.anchor) {
				const prev = anchors.anchorNames(this);
				node.anchor = !name || prev.has(name) ? anchors.findNewAnchor(name || "a", prev) : name;
			}
			return new Alias$2.Alias(node.anchor);
		}
		createNode(value, replacer, options) {
			let _replacer = void 0;
			if (typeof replacer === "function") {
				value = replacer.call({ "": value }, "", value);
				_replacer = replacer;
			} else if (Array.isArray(replacer)) {
				const keyToStr = (v) => typeof v === "number" || v instanceof String || v instanceof Number;
				const asStr = replacer.filter(keyToStr).map(String);
				if (asStr.length > 0) replacer = replacer.concat(asStr);
				_replacer = replacer;
			} else if (options === void 0 && replacer) {
				options = replacer;
				replacer = void 0;
			}
			const { aliasDuplicateObjects, anchorPrefix, flow, keepUndefined, onTagObj, tag } = options ?? {};
			const { onAnchor, setAnchors, sourceObjects } = anchors.createNodeAnchors(this, anchorPrefix || "a");
			const ctx = {
				aliasDuplicateObjects: aliasDuplicateObjects ?? true,
				keepUndefined: keepUndefined ?? false,
				onAnchor,
				onTagObj,
				replacer: _replacer,
				schema: this.schema,
				sourceObjects
			};
			const node = createNode.createNode(value, tag, ctx);
			if (flow && identity$8.isCollection(node)) node.flow = true;
			setAnchors();
			return node;
		}
		/**
		* Convert a key and a value into a `Pair` using the current schema,
		* recursively wrapping all values as `Scalar` or `Collection` nodes.
		*/
		createPair(key, value, options = {}) {
			const k = this.createNode(key, null, options);
			const v = this.createNode(value, null, options);
			return new Pair$3.Pair(k, v);
		}
		/**
		* Removes a value from the document.
		* @returns `true` if the item was found and removed.
		*/
		delete(key) {
			return assertCollection(this.contents) ? this.contents.delete(key) : false;
		}
		/**
		* Removes a value from the document.
		* @returns `true` if the item was found and removed.
		*/
		deleteIn(path$2) {
			if (Collection.isEmptyPath(path$2)) {
				if (this.contents == null) return false;
				this.contents = null;
				return true;
			}
			return assertCollection(this.contents) ? this.contents.deleteIn(path$2) : false;
		}
		/**
		* Returns item at `key`, or `undefined` if not found. By default unwraps
		* scalar values from their surrounding node; to disable set `keepScalar` to
		* `true` (collections are always returned intact).
		*/
		get(key, keepScalar) {
			return identity$8.isCollection(this.contents) ? this.contents.get(key, keepScalar) : void 0;
		}
		/**
		* Returns item at `path`, or `undefined` if not found. By default unwraps
		* scalar values from their surrounding node; to disable set `keepScalar` to
		* `true` (collections are always returned intact).
		*/
		getIn(path$2, keepScalar) {
			if (Collection.isEmptyPath(path$2)) return !keepScalar && identity$8.isScalar(this.contents) ? this.contents.value : this.contents;
			return identity$8.isCollection(this.contents) ? this.contents.getIn(path$2, keepScalar) : void 0;
		}
		/**
		* Checks if the document includes a value with the key `key`.
		*/
		has(key) {
			return identity$8.isCollection(this.contents) ? this.contents.has(key) : false;
		}
		/**
		* Checks if the document includes a value at `path`.
		*/
		hasIn(path$2) {
			if (Collection.isEmptyPath(path$2)) return this.contents !== void 0;
			return identity$8.isCollection(this.contents) ? this.contents.hasIn(path$2) : false;
		}
		/**
		* Sets a value in this document. For `!!set`, `value` needs to be a
		* boolean to add/remove the item from the set.
		*/
		set(key, value) {
			if (this.contents == null) this.contents = Collection.collectionFromPath(this.schema, [key], value);
			else if (assertCollection(this.contents)) this.contents.set(key, value);
		}
		/**
		* Sets a value in this document. For `!!set`, `value` needs to be a
		* boolean to add/remove the item from the set.
		*/
		setIn(path$2, value) {
			if (Collection.isEmptyPath(path$2)) this.contents = value;
			else if (this.contents == null) this.contents = Collection.collectionFromPath(this.schema, Array.from(path$2), value);
			else if (assertCollection(this.contents)) this.contents.setIn(path$2, value);
		}
		/**
		* Change the YAML version and schema used by the document.
		* A `null` version disables support for directives, explicit tags, anchors, and aliases.
		* It also requires the `schema` option to be given as a `Schema` instance value.
		*
		* Overrides all previously set schema options.
		*/
		setSchema(version$1, options = {}) {
			if (typeof version$1 === "number") version$1 = String(version$1);
			let opt;
			switch (version$1) {
				case "1.1":
					if (this.directives) this.directives.yaml.version = "1.1";
					else this.directives = new directives$1.Directives({ version: "1.1" });
					opt = {
						resolveKnownTags: false,
						schema: "yaml-1.1"
					};
					break;
				case "1.2":
				case "next":
					if (this.directives) this.directives.yaml.version = version$1;
					else this.directives = new directives$1.Directives({ version: version$1 });
					opt = {
						resolveKnownTags: true,
						schema: "core"
					};
					break;
				case null:
					if (this.directives) delete this.directives;
					opt = null;
					break;
				default: {
					const sv = JSON.stringify(version$1);
					throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${sv}`);
				}
			}
			if (options.schema instanceof Object) this.schema = options.schema;
			else if (opt) this.schema = new Schema$1.Schema(Object.assign(opt, options));
			else throw new Error(`With a null YAML version, the { schema: Schema } option is required`);
		}
		toJS({ json: json$1, jsonArg, mapAsMap, maxAliasCount, onAnchor, reviver } = {}) {
			const ctx = {
				anchors: /* @__PURE__ */ new Map(),
				doc: this,
				keep: !json$1,
				mapAsMap: mapAsMap === true,
				mapKeyWarned: false,
				maxAliasCount: typeof maxAliasCount === "number" ? maxAliasCount : 100
			};
			const res = toJS.toJS(this.contents, jsonArg ?? "", ctx);
			if (typeof onAnchor === "function") for (const { count, res: res$1 } of ctx.anchors.values()) onAnchor(res$1, count);
			return typeof reviver === "function" ? applyReviver.applyReviver(reviver, { "": res }, "", res) : res;
		}
		/**
		* A JSON representation of the document `contents`.
		*
		* @param jsonArg Used by `JSON.stringify` to indicate the array index or
		*   property name.
		*/
		toJSON(jsonArg, onAnchor) {
			return this.toJS({
				json: true,
				jsonArg,
				mapAsMap: false,
				onAnchor
			});
		}
		/** A YAML representation of the document. */
		toString(options = {}) {
			if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
			if ("indent" in options && (!Number.isInteger(options.indent) || Number(options.indent) <= 0)) {
				const s = JSON.stringify(options.indent);
				throw new Error(`"indent" option must be a positive integer, not ${s}`);
			}
			return stringifyDocument.stringifyDocument(this, options);
		}
	};
	function assertCollection(contents) {
		if (identity$8.isCollection(contents)) return true;
		throw new Error("Expected a YAML collection as document contents");
	}
	exports.Document = Document$4;
}));

//#endregion
//#region node_modules/yaml/dist/errors.js
var require_errors = /* @__PURE__ */ __commonJSMin(((exports) => {
	var YAMLError = class extends Error {
		constructor(name, pos, code, message) {
			super();
			this.name = name;
			this.code = code;
			this.message = message;
			this.pos = pos;
		}
	};
	var YAMLParseError = class extends YAMLError {
		constructor(pos, code, message) {
			super("YAMLParseError", pos, code, message);
		}
	};
	var YAMLWarning = class extends YAMLError {
		constructor(pos, code, message) {
			super("YAMLWarning", pos, code, message);
		}
	};
	const prettifyError = (src, lc) => (error) => {
		if (error.pos[0] === -1) return;
		error.linePos = error.pos.map((pos) => lc.linePos(pos));
		const { line, col } = error.linePos[0];
		error.message += ` at line ${line}, column ${col}`;
		let ci = col - 1;
		let lineStr = src.substring(lc.lineStarts[line - 1], lc.lineStarts[line]).replace(/[\n\r]+$/, "");
		if (ci >= 60 && lineStr.length > 80) {
			const trimStart = Math.min(ci - 39, lineStr.length - 79);
			lineStr = "…" + lineStr.substring(trimStart);
			ci -= trimStart - 1;
		}
		if (lineStr.length > 80) lineStr = lineStr.substring(0, 79) + "…";
		if (line > 1 && /^ *$/.test(lineStr.substring(0, ci))) {
			let prev = src.substring(lc.lineStarts[line - 2], lc.lineStarts[line - 1]);
			if (prev.length > 80) prev = prev.substring(0, 79) + "…\n";
			lineStr = prev + lineStr;
		}
		if (/[^ ]/.test(lineStr)) {
			let count = 1;
			const end = error.linePos[1];
			if (end?.line === line && end.col > col) count = Math.max(1, Math.min(end.col - col, 80 - ci));
			const pointer = " ".repeat(ci) + "^".repeat(count);
			error.message += `:\n\n${lineStr}\n${pointer}\n`;
		}
	};
	exports.YAMLError = YAMLError;
	exports.YAMLParseError = YAMLParseError;
	exports.YAMLWarning = YAMLWarning;
	exports.prettifyError = prettifyError;
}));

//#endregion
//#region node_modules/yaml/dist/compose/resolve-props.js
var require_resolve_props = /* @__PURE__ */ __commonJSMin(((exports) => {
	function resolveProps$4(tokens, { flow, indicator, next, offset, onError, parentIndent, startOnNewline }) {
		let spaceBefore = false;
		let atNewline = startOnNewline;
		let hasSpace = startOnNewline;
		let comment = "";
		let commentSep = "";
		let hasNewline = false;
		let reqSpace = false;
		let tab = null;
		let anchor = null;
		let tag = null;
		let newlineAfterProp = null;
		let comma = null;
		let found = null;
		let start = null;
		for (const token of tokens) {
			if (reqSpace) {
				if (token.type !== "space" && token.type !== "newline" && token.type !== "comma") onError(token.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
				reqSpace = false;
			}
			if (tab) {
				if (atNewline && token.type !== "comment" && token.type !== "newline") onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
				tab = null;
			}
			switch (token.type) {
				case "space":
					if (!flow && (indicator !== "doc-start" || next?.type !== "flow-collection") && token.source.includes("	")) tab = token;
					hasSpace = true;
					break;
				case "comment": {
					if (!hasSpace) onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
					const cb = token.source.substring(1) || " ";
					if (!comment) comment = cb;
					else comment += commentSep + cb;
					commentSep = "";
					atNewline = false;
					break;
				}
				case "newline":
					if (atNewline) {
						if (comment) comment += token.source;
						else if (!found || indicator !== "seq-item-ind") spaceBefore = true;
					} else commentSep += token.source;
					atNewline = true;
					hasNewline = true;
					if (anchor || tag) newlineAfterProp = token;
					hasSpace = true;
					break;
				case "anchor":
					if (anchor) onError(token, "MULTIPLE_ANCHORS", "A node can have at most one anchor");
					if (token.source.endsWith(":")) onError(token.offset + token.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true);
					anchor = token;
					start ?? (start = token.offset);
					atNewline = false;
					hasSpace = false;
					reqSpace = true;
					break;
				case "tag":
					if (tag) onError(token, "MULTIPLE_TAGS", "A node can have at most one tag");
					tag = token;
					start ?? (start = token.offset);
					atNewline = false;
					hasSpace = false;
					reqSpace = true;
					break;
				case indicator:
					if (anchor || tag) onError(token, "BAD_PROP_ORDER", `Anchors and tags must be after the ${token.source} indicator`);
					if (found) onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.source} in ${flow ?? "collection"}`);
					found = token;
					atNewline = indicator === "seq-item-ind" || indicator === "explicit-key-ind";
					hasSpace = false;
					break;
				case "comma": if (flow) {
					if (comma) onError(token, "UNEXPECTED_TOKEN", `Unexpected , in ${flow}`);
					comma = token;
					atNewline = false;
					hasSpace = false;
					break;
				}
				default:
					onError(token, "UNEXPECTED_TOKEN", `Unexpected ${token.type} token`);
					atNewline = false;
					hasSpace = false;
			}
		}
		const last = tokens[tokens.length - 1];
		const end = last ? last.offset + last.source.length : offset;
		if (reqSpace && next && next.type !== "space" && next.type !== "newline" && next.type !== "comma" && (next.type !== "scalar" || next.source !== "")) onError(next.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space");
		if (tab && (atNewline && tab.indent <= parentIndent || next?.type === "block-map" || next?.type === "block-seq")) onError(tab, "TAB_AS_INDENT", "Tabs are not allowed as indentation");
		return {
			comma,
			found,
			spaceBefore,
			comment,
			hasNewline,
			anchor,
			tag,
			newlineAfterProp,
			end,
			start: start ?? end
		};
	}
	exports.resolveProps = resolveProps$4;
}));

//#endregion
//#region node_modules/yaml/dist/compose/util-contains-newline.js
var require_util_contains_newline = /* @__PURE__ */ __commonJSMin(((exports) => {
	function containsNewline(key) {
		if (!key) return null;
		switch (key.type) {
			case "alias":
			case "scalar":
			case "double-quoted-scalar":
			case "single-quoted-scalar":
				if (key.source.includes("\n")) return true;
				if (key.end) {
					for (const st of key.end) if (st.type === "newline") return true;
				}
				return false;
			case "flow-collection":
				for (const it of key.items) {
					for (const st of it.start) if (st.type === "newline") return true;
					if (it.sep) {
						for (const st of it.sep) if (st.type === "newline") return true;
					}
					if (containsNewline(it.key) || containsNewline(it.value)) return true;
				}
				return false;
			default: return true;
		}
	}
	exports.containsNewline = containsNewline;
}));

//#endregion
//#region node_modules/yaml/dist/compose/util-flow-indent-check.js
var require_util_flow_indent_check = /* @__PURE__ */ __commonJSMin(((exports) => {
	var utilContainsNewline$2 = require_util_contains_newline();
	function flowIndentCheck(indent, fc, onError) {
		if (fc?.type === "flow-collection") {
			const end = fc.end[0];
			if (end.indent === indent && (end.source === "]" || end.source === "}") && utilContainsNewline$2.containsNewline(fc)) onError(end, "BAD_INDENT", "Flow end indicator should be more indented than parent", true);
		}
	}
	exports.flowIndentCheck = flowIndentCheck;
}));

//#endregion
//#region node_modules/yaml/dist/compose/util-map-includes.js
var require_util_map_includes = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$7 = require_identity();
	function mapIncludes(ctx, items, search) {
		const { uniqueKeys } = ctx.options;
		if (uniqueKeys === false) return false;
		const isEqual$1 = typeof uniqueKeys === "function" ? uniqueKeys : (a, b) => a === b || identity$7.isScalar(a) && identity$7.isScalar(b) && a.value === b.value;
		return items.some((pair) => isEqual$1(pair.key, search));
	}
	exports.mapIncludes = mapIncludes;
}));

//#endregion
//#region node_modules/yaml/dist/compose/resolve-block-map.js
var require_resolve_block_map = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Pair$2 = require_Pair();
	var YAMLMap$3 = require_YAMLMap();
	var resolveProps$3 = require_resolve_props();
	var utilContainsNewline$1 = require_util_contains_newline();
	var utilFlowIndentCheck$1 = require_util_flow_indent_check();
	var utilMapIncludes$1 = require_util_map_includes();
	const startColMsg = "All mapping items must start at the same column";
	function resolveBlockMap$1({ composeNode: composeNode$2, composeEmptyNode: composeEmptyNode$1 }, ctx, bm, onError, tag) {
		const map$7 = new (tag?.nodeClass ?? YAMLMap$3.YAMLMap)(ctx.schema);
		if (ctx.atRoot) ctx.atRoot = false;
		let offset = bm.offset;
		let commentEnd = null;
		for (const collItem of bm.items) {
			const { start, key, sep, value } = collItem;
			const keyProps = resolveProps$3.resolveProps(start, {
				indicator: "explicit-key-ind",
				next: key ?? sep?.[0],
				offset,
				onError,
				parentIndent: bm.indent,
				startOnNewline: true
			});
			const implicitKey = !keyProps.found;
			if (implicitKey) {
				if (key) {
					if (key.type === "block-seq") onError(offset, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key");
					else if ("indent" in key && key.indent !== bm.indent) onError(offset, "BAD_INDENT", startColMsg);
				}
				if (!keyProps.anchor && !keyProps.tag && !sep) {
					commentEnd = keyProps.end;
					if (keyProps.comment) if (map$7.comment) map$7.comment += "\n" + keyProps.comment;
					else map$7.comment = keyProps.comment;
					continue;
				}
				if (keyProps.newlineAfterProp || utilContainsNewline$1.containsNewline(key)) onError(key ?? start[start.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
			} else if (keyProps.found?.indent !== bm.indent) onError(offset, "BAD_INDENT", startColMsg);
			ctx.atKey = true;
			const keyStart = keyProps.end;
			const keyNode = key ? composeNode$2(ctx, key, keyProps, onError) : composeEmptyNode$1(ctx, keyStart, start, null, keyProps, onError);
			if (ctx.schema.compat) utilFlowIndentCheck$1.flowIndentCheck(bm.indent, key, onError);
			ctx.atKey = false;
			if (utilMapIncludes$1.mapIncludes(ctx, map$7.items, keyNode)) onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
			const valueProps = resolveProps$3.resolveProps(sep ?? [], {
				indicator: "map-value-ind",
				next: value,
				offset: keyNode.range[2],
				onError,
				parentIndent: bm.indent,
				startOnNewline: !key || key.type === "block-scalar"
			});
			offset = valueProps.end;
			if (valueProps.found) {
				if (implicitKey) {
					if (value?.type === "block-map" && !valueProps.hasNewline) onError(offset, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings");
					if (ctx.options.strict && keyProps.start < valueProps.found.offset - 1024) onError(keyNode.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key");
				}
				const valueNode = value ? composeNode$2(ctx, value, valueProps, onError) : composeEmptyNode$1(ctx, offset, sep, null, valueProps, onError);
				if (ctx.schema.compat) utilFlowIndentCheck$1.flowIndentCheck(bm.indent, value, onError);
				offset = valueNode.range[2];
				const pair = new Pair$2.Pair(keyNode, valueNode);
				if (ctx.options.keepSourceTokens) pair.srcToken = collItem;
				map$7.items.push(pair);
			} else {
				if (implicitKey) onError(keyNode.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values");
				if (valueProps.comment) if (keyNode.comment) keyNode.comment += "\n" + valueProps.comment;
				else keyNode.comment = valueProps.comment;
				const pair = new Pair$2.Pair(keyNode);
				if (ctx.options.keepSourceTokens) pair.srcToken = collItem;
				map$7.items.push(pair);
			}
		}
		if (commentEnd && commentEnd < offset) onError(commentEnd, "IMPOSSIBLE", "Map comment with trailing content");
		map$7.range = [
			bm.offset,
			offset,
			commentEnd ?? offset
		];
		return map$7;
	}
	exports.resolveBlockMap = resolveBlockMap$1;
}));

//#endregion
//#region node_modules/yaml/dist/compose/resolve-block-seq.js
var require_resolve_block_seq = /* @__PURE__ */ __commonJSMin(((exports) => {
	var YAMLSeq$3 = require_YAMLSeq();
	var resolveProps$2 = require_resolve_props();
	var utilFlowIndentCheck = require_util_flow_indent_check();
	function resolveBlockSeq$1({ composeNode: composeNode$2, composeEmptyNode: composeEmptyNode$1 }, ctx, bs, onError, tag) {
		const seq$6 = new (tag?.nodeClass ?? YAMLSeq$3.YAMLSeq)(ctx.schema);
		if (ctx.atRoot) ctx.atRoot = false;
		if (ctx.atKey) ctx.atKey = false;
		let offset = bs.offset;
		let commentEnd = null;
		for (const { start, value } of bs.items) {
			const props = resolveProps$2.resolveProps(start, {
				indicator: "seq-item-ind",
				next: value,
				offset,
				onError,
				parentIndent: bs.indent,
				startOnNewline: true
			});
			if (!props.found) if (props.anchor || props.tag || value) if (value?.type === "block-seq") onError(props.end, "BAD_INDENT", "All sequence items must start at the same column");
			else onError(offset, "MISSING_CHAR", "Sequence item without - indicator");
			else {
				commentEnd = props.end;
				if (props.comment) seq$6.comment = props.comment;
				continue;
			}
			const node = value ? composeNode$2(ctx, value, props, onError) : composeEmptyNode$1(ctx, props.end, start, null, props, onError);
			if (ctx.schema.compat) utilFlowIndentCheck.flowIndentCheck(bs.indent, value, onError);
			offset = node.range[2];
			seq$6.items.push(node);
		}
		seq$6.range = [
			bs.offset,
			offset,
			commentEnd ?? offset
		];
		return seq$6;
	}
	exports.resolveBlockSeq = resolveBlockSeq$1;
}));

//#endregion
//#region node_modules/yaml/dist/compose/resolve-end.js
var require_resolve_end = /* @__PURE__ */ __commonJSMin(((exports) => {
	function resolveEnd$5(end, offset, reqSpace, onError) {
		let comment = "";
		if (end) {
			let hasSpace = false;
			let sep = "";
			for (const token of end) {
				const { source, type } = token;
				switch (type) {
					case "space":
						hasSpace = true;
						break;
					case "comment": {
						if (reqSpace && !hasSpace) onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
						const cb = source.substring(1) || " ";
						if (!comment) comment = cb;
						else comment += sep + cb;
						sep = "";
						break;
					}
					case "newline":
						if (comment) sep += source;
						hasSpace = true;
						break;
					default: onError(token, "UNEXPECTED_TOKEN", `Unexpected ${type} at node end`);
				}
				offset += source.length;
			}
		}
		return {
			comment,
			offset
		};
	}
	exports.resolveEnd = resolveEnd$5;
}));

//#endregion
//#region node_modules/yaml/dist/compose/resolve-flow-collection.js
var require_resolve_flow_collection = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$6 = require_identity();
	var Pair$1 = require_Pair();
	var YAMLMap$2 = require_YAMLMap();
	var YAMLSeq$2 = require_YAMLSeq();
	var resolveEnd$4 = require_resolve_end();
	var resolveProps$1 = require_resolve_props();
	var utilContainsNewline = require_util_contains_newline();
	var utilMapIncludes = require_util_map_includes();
	const blockMsg = "Block collections are not allowed within flow collections";
	const isBlock = (token) => token && (token.type === "block-map" || token.type === "block-seq");
	function resolveFlowCollection$1({ composeNode: composeNode$2, composeEmptyNode: composeEmptyNode$1 }, ctx, fc, onError, tag) {
		const isMap$1 = fc.start.source === "{";
		const fcName = isMap$1 ? "flow map" : "flow sequence";
		const coll = new (tag?.nodeClass ?? (isMap$1 ? YAMLMap$2.YAMLMap : YAMLSeq$2.YAMLSeq))(ctx.schema);
		coll.flow = true;
		const atRoot = ctx.atRoot;
		if (atRoot) ctx.atRoot = false;
		if (ctx.atKey) ctx.atKey = false;
		let offset = fc.offset + fc.start.source.length;
		for (let i = 0; i < fc.items.length; ++i) {
			const collItem = fc.items[i];
			const { start, key, sep, value } = collItem;
			const props = resolveProps$1.resolveProps(start, {
				flow: fcName,
				indicator: "explicit-key-ind",
				next: key ?? sep?.[0],
				offset,
				onError,
				parentIndent: fc.indent,
				startOnNewline: false
			});
			if (!props.found) {
				if (!props.anchor && !props.tag && !sep && !value) {
					if (i === 0 && props.comma) onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
					else if (i < fc.items.length - 1) onError(props.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${fcName}`);
					if (props.comment) if (coll.comment) coll.comment += "\n" + props.comment;
					else coll.comment = props.comment;
					offset = props.end;
					continue;
				}
				if (!isMap$1 && ctx.options.strict && utilContainsNewline.containsNewline(key)) onError(key, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
			}
			if (i === 0) {
				if (props.comma) onError(props.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${fcName}`);
			} else {
				if (!props.comma) onError(props.start, "MISSING_CHAR", `Missing , between ${fcName} items`);
				if (props.comment) {
					let prevItemComment = "";
					loop: for (const st of start) switch (st.type) {
						case "comma":
						case "space": break;
						case "comment":
							prevItemComment = st.source.substring(1);
							break loop;
						default: break loop;
					}
					if (prevItemComment) {
						let prev = coll.items[coll.items.length - 1];
						if (identity$6.isPair(prev)) prev = prev.value ?? prev.key;
						if (prev.comment) prev.comment += "\n" + prevItemComment;
						else prev.comment = prevItemComment;
						props.comment = props.comment.substring(prevItemComment.length + 1);
					}
				}
			}
			if (!isMap$1 && !sep && !props.found) {
				const valueNode = value ? composeNode$2(ctx, value, props, onError) : composeEmptyNode$1(ctx, props.end, sep, null, props, onError);
				coll.items.push(valueNode);
				offset = valueNode.range[2];
				if (isBlock(value)) onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
			} else {
				ctx.atKey = true;
				const keyStart = props.end;
				const keyNode = key ? composeNode$2(ctx, key, props, onError) : composeEmptyNode$1(ctx, keyStart, start, null, props, onError);
				if (isBlock(key)) onError(keyNode.range, "BLOCK_IN_FLOW", blockMsg);
				ctx.atKey = false;
				const valueProps = resolveProps$1.resolveProps(sep ?? [], {
					flow: fcName,
					indicator: "map-value-ind",
					next: value,
					offset: keyNode.range[2],
					onError,
					parentIndent: fc.indent,
					startOnNewline: false
				});
				if (valueProps.found) {
					if (!isMap$1 && !props.found && ctx.options.strict) {
						if (sep) for (const st of sep) {
							if (st === valueProps.found) break;
							if (st.type === "newline") {
								onError(st, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
								break;
							}
						}
						if (props.start < valueProps.found.offset - 1024) onError(valueProps.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
					}
				} else if (value) if ("source" in value && value.source?.[0] === ":") onError(value, "MISSING_CHAR", `Missing space after : in ${fcName}`);
				else onError(valueProps.start, "MISSING_CHAR", `Missing , or : between ${fcName} items`);
				const valueNode = value ? composeNode$2(ctx, value, valueProps, onError) : valueProps.found ? composeEmptyNode$1(ctx, valueProps.end, sep, null, valueProps, onError) : null;
				if (valueNode) {
					if (isBlock(value)) onError(valueNode.range, "BLOCK_IN_FLOW", blockMsg);
				} else if (valueProps.comment) if (keyNode.comment) keyNode.comment += "\n" + valueProps.comment;
				else keyNode.comment = valueProps.comment;
				const pair = new Pair$1.Pair(keyNode, valueNode);
				if (ctx.options.keepSourceTokens) pair.srcToken = collItem;
				if (isMap$1) {
					const map$7 = coll;
					if (utilMapIncludes.mapIncludes(ctx, map$7.items, keyNode)) onError(keyStart, "DUPLICATE_KEY", "Map keys must be unique");
					map$7.items.push(pair);
				} else {
					const map$7 = new YAMLMap$2.YAMLMap(ctx.schema);
					map$7.flow = true;
					map$7.items.push(pair);
					const endRange = (valueNode ?? keyNode).range;
					map$7.range = [
						keyNode.range[0],
						endRange[1],
						endRange[2]
					];
					coll.items.push(map$7);
				}
				offset = valueNode ? valueNode.range[2] : valueProps.end;
			}
		}
		const expectedEnd = isMap$1 ? "}" : "]";
		const [ce, ...ee] = fc.end;
		let cePos = offset;
		if (ce?.source === expectedEnd) cePos = ce.offset + ce.source.length;
		else {
			const name = fcName[0].toUpperCase() + fcName.substring(1);
			const msg = atRoot ? `${name} must end with a ${expectedEnd}` : `${name} in block collection must be sufficiently indented and end with a ${expectedEnd}`;
			onError(offset, atRoot ? "MISSING_CHAR" : "BAD_INDENT", msg);
			if (ce && ce.source.length !== 1) ee.unshift(ce);
		}
		if (ee.length > 0) {
			const end = resolveEnd$4.resolveEnd(ee, cePos, ctx.options.strict, onError);
			if (end.comment) if (coll.comment) coll.comment += "\n" + end.comment;
			else coll.comment = end.comment;
			coll.range = [
				fc.offset,
				cePos,
				end.offset
			];
		} else coll.range = [
			fc.offset,
			cePos,
			cePos
		];
		return coll;
	}
	exports.resolveFlowCollection = resolveFlowCollection$1;
}));

//#endregion
//#region node_modules/yaml/dist/compose/compose-collection.js
var require_compose_collection = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$5 = require_identity();
	var Scalar$4 = require_Scalar();
	var YAMLMap$1 = require_YAMLMap();
	var YAMLSeq$1 = require_YAMLSeq();
	var resolveBlockMap = require_resolve_block_map();
	var resolveBlockSeq = require_resolve_block_seq();
	var resolveFlowCollection = require_resolve_flow_collection();
	function resolveCollection(CN$1, ctx, token, onError, tagName, tag) {
		const coll = token.type === "block-map" ? resolveBlockMap.resolveBlockMap(CN$1, ctx, token, onError, tag) : token.type === "block-seq" ? resolveBlockSeq.resolveBlockSeq(CN$1, ctx, token, onError, tag) : resolveFlowCollection.resolveFlowCollection(CN$1, ctx, token, onError, tag);
		const Coll = coll.constructor;
		if (tagName === "!" || tagName === Coll.tagName) {
			coll.tag = Coll.tagName;
			return coll;
		}
		if (tagName) coll.tag = tagName;
		return coll;
	}
	function composeCollection$1(CN$1, ctx, token, props, onError) {
		const tagToken = props.tag;
		const tagName = !tagToken ? null : ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg));
		if (token.type === "block-seq") {
			const { anchor, newlineAfterProp: nl } = props;
			const lastProp = anchor && tagToken ? anchor.offset > tagToken.offset ? anchor : tagToken : anchor ?? tagToken;
			if (lastProp && (!nl || nl.offset < lastProp.offset)) onError(lastProp, "MISSING_CHAR", "Missing newline after block sequence props");
		}
		const expType = token.type === "block-map" ? "map" : token.type === "block-seq" ? "seq" : token.start.source === "{" ? "map" : "seq";
		if (!tagToken || !tagName || tagName === "!" || tagName === YAMLMap$1.YAMLMap.tagName && expType === "map" || tagName === YAMLSeq$1.YAMLSeq.tagName && expType === "seq") return resolveCollection(CN$1, ctx, token, onError, tagName);
		let tag = ctx.schema.tags.find((t) => t.tag === tagName && t.collection === expType);
		if (!tag) {
			const kt = ctx.schema.knownTags[tagName];
			if (kt?.collection === expType) {
				ctx.schema.tags.push(Object.assign({}, kt, { default: false }));
				tag = kt;
			} else {
				if (kt) onError(tagToken, "BAD_COLLECTION_TYPE", `${kt.tag} used for ${expType} collection, but expects ${kt.collection ?? "scalar"}`, true);
				else onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, true);
				return resolveCollection(CN$1, ctx, token, onError, tagName);
			}
		}
		const coll = resolveCollection(CN$1, ctx, token, onError, tagName, tag);
		const res = tag.resolve?.(coll, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg), ctx.options) ?? coll;
		const node = identity$5.isNode(res) ? res : new Scalar$4.Scalar(res);
		node.range = coll.range;
		node.tag = tagName;
		if (tag?.format) node.format = tag.format;
		return node;
	}
	exports.composeCollection = composeCollection$1;
}));

//#endregion
//#region node_modules/yaml/dist/compose/resolve-block-scalar.js
var require_resolve_block_scalar = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scalar$3 = require_Scalar();
	function resolveBlockScalar$2(ctx, scalar, onError) {
		const start = scalar.offset;
		const header = parseBlockScalarHeader(scalar, ctx.options.strict, onError);
		if (!header) return {
			value: "",
			type: null,
			comment: "",
			range: [
				start,
				start,
				start
			]
		};
		const type = header.mode === ">" ? Scalar$3.Scalar.BLOCK_FOLDED : Scalar$3.Scalar.BLOCK_LITERAL;
		const lines = scalar.source ? splitLines(scalar.source) : [];
		let chompStart = lines.length;
		for (let i = lines.length - 1; i >= 0; --i) {
			const content = lines[i][1];
			if (content === "" || content === "\r") chompStart = i;
			else break;
		}
		if (chompStart === 0) {
			const value$1 = header.chomp === "+" && lines.length > 0 ? "\n".repeat(Math.max(1, lines.length - 1)) : "";
			let end$1 = start + header.length;
			if (scalar.source) end$1 += scalar.source.length;
			return {
				value: value$1,
				type,
				comment: header.comment,
				range: [
					start,
					end$1,
					end$1
				]
			};
		}
		let trimIndent = scalar.indent + header.indent;
		let offset = scalar.offset + header.length;
		let contentStart = 0;
		for (let i = 0; i < chompStart; ++i) {
			const [indent, content] = lines[i];
			if (content === "" || content === "\r") {
				if (header.indent === 0 && indent.length > trimIndent) trimIndent = indent.length;
			} else {
				if (indent.length < trimIndent) onError(offset + indent.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator");
				if (header.indent === 0) trimIndent = indent.length;
				contentStart = i;
				if (trimIndent === 0 && !ctx.atRoot) onError(offset, "BAD_INDENT", "Block scalar values in collections must be indented");
				break;
			}
			offset += indent.length + content.length + 1;
		}
		for (let i = lines.length - 1; i >= chompStart; --i) if (lines[i][0].length > trimIndent) chompStart = i + 1;
		let value = "";
		let sep = "";
		let prevMoreIndented = false;
		for (let i = 0; i < contentStart; ++i) value += lines[i][0].slice(trimIndent) + "\n";
		for (let i = contentStart; i < chompStart; ++i) {
			let [indent, content] = lines[i];
			offset += indent.length + content.length + 1;
			const crlf = content[content.length - 1] === "\r";
			if (crlf) content = content.slice(0, -1);
			/* istanbul ignore if already caught in lexer */
			if (content && indent.length < trimIndent) {
				const message = `Block scalar lines must not be less indented than their ${header.indent ? "explicit indentation indicator" : "first line"}`;
				onError(offset - content.length - (crlf ? 2 : 1), "BAD_INDENT", message);
				indent = "";
			}
			if (type === Scalar$3.Scalar.BLOCK_LITERAL) {
				value += sep + indent.slice(trimIndent) + content;
				sep = "\n";
			} else if (indent.length > trimIndent || content[0] === "	") {
				if (sep === " ") sep = "\n";
				else if (!prevMoreIndented && sep === "\n") sep = "\n\n";
				value += sep + indent.slice(trimIndent) + content;
				sep = "\n";
				prevMoreIndented = true;
			} else if (content === "") if (sep === "\n") value += "\n";
			else sep = "\n";
			else {
				value += sep + content;
				sep = " ";
				prevMoreIndented = false;
			}
		}
		switch (header.chomp) {
			case "-": break;
			case "+":
				for (let i = chompStart; i < lines.length; ++i) value += "\n" + lines[i][0].slice(trimIndent);
				if (value[value.length - 1] !== "\n") value += "\n";
				break;
			default: value += "\n";
		}
		const end = start + header.length + scalar.source.length;
		return {
			value,
			type,
			comment: header.comment,
			range: [
				start,
				end,
				end
			]
		};
	}
	function parseBlockScalarHeader({ offset, props }, strict, onError) {
		/* istanbul ignore if should not happen */
		if (props[0].type !== "block-scalar-header") {
			onError(props[0], "IMPOSSIBLE", "Block scalar header not found");
			return null;
		}
		const { source } = props[0];
		const mode = source[0];
		let indent = 0;
		let chomp = "";
		let error = -1;
		for (let i = 1; i < source.length; ++i) {
			const ch = source[i];
			if (!chomp && (ch === "-" || ch === "+")) chomp = ch;
			else {
				const n = Number(ch);
				if (!indent && n) indent = n;
				else if (error === -1) error = offset + i;
			}
		}
		if (error !== -1) onError(error, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${source}`);
		let hasSpace = false;
		let comment = "";
		let length = source.length;
		for (let i = 1; i < props.length; ++i) {
			const token = props[i];
			switch (token.type) {
				case "space": hasSpace = true;
				case "newline":
					length += token.source.length;
					break;
				case "comment":
					if (strict && !hasSpace) onError(token, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
					length += token.source.length;
					comment = token.source.substring(1);
					break;
				case "error":
					onError(token, "UNEXPECTED_TOKEN", token.message);
					length += token.source.length;
					break;
				default: {
					onError(token, "UNEXPECTED_TOKEN", `Unexpected token in block scalar header: ${token.type}`);
					const ts = token.source;
					if (ts && typeof ts === "string") length += ts.length;
				}
			}
		}
		return {
			mode,
			indent,
			chomp,
			comment,
			length
		};
	}
	/** @returns Array of lines split up as `[indent, content]` */
	function splitLines(source) {
		const split$1 = source.split(/\n( *)/);
		const first = split$1[0];
		const m = first.match(/^( *)/);
		const lines = [m?.[1] ? [m[1], first.slice(m[1].length)] : ["", first]];
		for (let i = 1; i < split$1.length; i += 2) lines.push([split$1[i], split$1[i + 1]]);
		return lines;
	}
	exports.resolveBlockScalar = resolveBlockScalar$2;
}));

//#endregion
//#region node_modules/yaml/dist/compose/resolve-flow-scalar.js
var require_resolve_flow_scalar = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Scalar$2 = require_Scalar();
	var resolveEnd$3 = require_resolve_end();
	function resolveFlowScalar$2(scalar, strict, onError) {
		const { offset, type, source, end } = scalar;
		let _type;
		let value;
		const _onError = (rel, code, msg) => onError(offset + rel, code, msg);
		switch (type) {
			case "scalar":
				_type = Scalar$2.Scalar.PLAIN;
				value = plainValue(source, _onError);
				break;
			case "single-quoted-scalar":
				_type = Scalar$2.Scalar.QUOTE_SINGLE;
				value = singleQuotedValue(source, _onError);
				break;
			case "double-quoted-scalar":
				_type = Scalar$2.Scalar.QUOTE_DOUBLE;
				value = doubleQuotedValue(source, _onError);
				break;
			default:
				onError(scalar, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${type}`);
				return {
					value: "",
					type: null,
					comment: "",
					range: [
						offset,
						offset + source.length,
						offset + source.length
					]
				};
		}
		const valueEnd = offset + source.length;
		const re = resolveEnd$3.resolveEnd(end, valueEnd, strict, onError);
		return {
			value,
			type: _type,
			comment: re.comment,
			range: [
				offset,
				valueEnd,
				re.offset
			]
		};
	}
	function plainValue(source, onError) {
		let badChar = "";
		switch (source[0]) {
			case "	":
				badChar = "a tab character";
				break;
			case ",":
				badChar = "flow indicator character ,";
				break;
			case "%":
				badChar = "directive indicator character %";
				break;
			case "|":
			case ">":
				badChar = `block scalar indicator ${source[0]}`;
				break;
			case "@":
			case "`":
				badChar = `reserved character ${source[0]}`;
				break;
		}
		if (badChar) onError(0, "BAD_SCALAR_START", `Plain value cannot start with ${badChar}`);
		return foldLines(source);
	}
	function singleQuotedValue(source, onError) {
		if (source[source.length - 1] !== "'" || source.length === 1) onError(source.length, "MISSING_CHAR", "Missing closing 'quote");
		return foldLines(source.slice(1, -1)).replace(/''/g, "'");
	}
	function foldLines(source) {
		/**
		* The negative lookbehind here and in the `re` RegExp is to
		* prevent causing a polynomial search time in certain cases.
		*
		* The try-catch is for Safari, which doesn't support this yet:
		* https://caniuse.com/js-regexp-lookbehind
		*/
		let first, line;
		try {
			first = new RegExp("(.*?)(?<![ 	])[ 	]*\r?\n", "sy");
			line = new RegExp("[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?\n", "sy");
		} catch {
			first = /(.*?)[ \t]*\r?\n/sy;
			line = /[ \t]*(.*?)[ \t]*\r?\n/sy;
		}
		let match$1 = first.exec(source);
		if (!match$1) return source;
		let res = match$1[1];
		let sep = " ";
		let pos = first.lastIndex;
		line.lastIndex = pos;
		while (match$1 = line.exec(source)) {
			if (match$1[1] === "") if (sep === "\n") res += sep;
			else sep = "\n";
			else {
				res += sep + match$1[1];
				sep = " ";
			}
			pos = line.lastIndex;
		}
		const last = /[ \t]*(.*)/sy;
		last.lastIndex = pos;
		match$1 = last.exec(source);
		return res + sep + (match$1?.[1] ?? "");
	}
	function doubleQuotedValue(source, onError) {
		let res = "";
		for (let i = 1; i < source.length - 1; ++i) {
			const ch = source[i];
			if (ch === "\r" && source[i + 1] === "\n") continue;
			if (ch === "\n") {
				const { fold, offset } = foldNewline(source, i);
				res += fold;
				i = offset;
			} else if (ch === "\\") {
				let next = source[++i];
				const cc = escapeCodes[next];
				if (cc) res += cc;
				else if (next === "\n") {
					next = source[i + 1];
					while (next === " " || next === "	") next = source[++i + 1];
				} else if (next === "\r" && source[i + 1] === "\n") {
					next = source[++i + 1];
					while (next === " " || next === "	") next = source[++i + 1];
				} else if (next === "x" || next === "u" || next === "U") {
					const length = next === "x" ? 2 : next === "u" ? 4 : 8;
					res += parseCharCode(source, i + 1, length, onError);
					i += length;
				} else {
					const raw$1 = source.substr(i - 1, 2);
					onError(i - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw$1}`);
					res += raw$1;
				}
			} else if (ch === " " || ch === "	") {
				const wsStart = i;
				let next = source[i + 1];
				while (next === " " || next === "	") next = source[++i + 1];
				if (next !== "\n" && !(next === "\r" && source[i + 2] === "\n")) res += i > wsStart ? source.slice(wsStart, i + 1) : ch;
			} else res += ch;
		}
		if (source[source.length - 1] !== "\"" || source.length === 1) onError(source.length, "MISSING_CHAR", "Missing closing \"quote");
		return res;
	}
	/**
	* Fold a single newline into a space, multiple newlines to N - 1 newlines.
	* Presumes `source[offset] === '\n'`
	*/
	function foldNewline(source, offset) {
		let fold = "";
		let ch = source[offset + 1];
		while (ch === " " || ch === "	" || ch === "\n" || ch === "\r") {
			if (ch === "\r" && source[offset + 2] !== "\n") break;
			if (ch === "\n") fold += "\n";
			offset += 1;
			ch = source[offset + 1];
		}
		if (!fold) fold = " ";
		return {
			fold,
			offset
		};
	}
	const escapeCodes = {
		"0": "\0",
		a: "\x07",
		b: "\b",
		e: "\x1B",
		f: "\f",
		n: "\n",
		r: "\r",
		t: "	",
		v: "\v",
		N: "",
		_: "\xA0",
		L: "\u2028",
		P: "\u2029",
		" ": " ",
		"\"": "\"",
		"/": "/",
		"\\": "\\",
		"	": "	"
	};
	function parseCharCode(source, offset, length, onError) {
		const cc = source.substr(offset, length);
		const code = cc.length === length && /^[0-9a-fA-F]+$/.test(cc) ? parseInt(cc, 16) : NaN;
		try {
			return String.fromCodePoint(code);
		} catch {
			const raw$1 = source.substr(offset - 2, length + 2);
			onError(offset - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${raw$1}`);
			return raw$1;
		}
	}
	exports.resolveFlowScalar = resolveFlowScalar$2;
}));

//#endregion
//#region node_modules/yaml/dist/compose/compose-scalar.js
var require_compose_scalar = /* @__PURE__ */ __commonJSMin(((exports) => {
	var identity$4 = require_identity();
	var Scalar$1 = require_Scalar();
	var resolveBlockScalar$1 = require_resolve_block_scalar();
	var resolveFlowScalar$1 = require_resolve_flow_scalar();
	function composeScalar$1(ctx, token, tagToken, onError) {
		const { value, type, comment, range } = token.type === "block-scalar" ? resolveBlockScalar$1.resolveBlockScalar(ctx, token, onError) : resolveFlowScalar$1.resolveFlowScalar(token, ctx.options.strict, onError);
		const tagName = tagToken ? ctx.directives.tagName(tagToken.source, (msg) => onError(tagToken, "TAG_RESOLVE_FAILED", msg)) : null;
		let tag;
		if (ctx.options.stringKeys && ctx.atKey) tag = ctx.schema[identity$4.SCALAR];
		else if (tagName) tag = findScalarTagByName(ctx.schema, value, tagName, tagToken, onError);
		else if (token.type === "scalar") tag = findScalarTagByTest(ctx, value, token, onError);
		else tag = ctx.schema[identity$4.SCALAR];
		let scalar;
		try {
			const res = tag.resolve(value, (msg) => onError(tagToken ?? token, "TAG_RESOLVE_FAILED", msg), ctx.options);
			scalar = identity$4.isScalar(res) ? res : new Scalar$1.Scalar(res);
		} catch (error) {
			const msg = error instanceof Error ? error.message : String(error);
			onError(tagToken ?? token, "TAG_RESOLVE_FAILED", msg);
			scalar = new Scalar$1.Scalar(value);
		}
		scalar.range = range;
		scalar.source = value;
		if (type) scalar.type = type;
		if (tagName) scalar.tag = tagName;
		if (tag.format) scalar.format = tag.format;
		if (comment) scalar.comment = comment;
		return scalar;
	}
	function findScalarTagByName(schema$6, value, tagName, tagToken, onError) {
		if (tagName === "!") return schema$6[identity$4.SCALAR];
		const matchWithTest = [];
		for (const tag of schema$6.tags) if (!tag.collection && tag.tag === tagName) if (tag.default && tag.test) matchWithTest.push(tag);
		else return tag;
		for (const tag of matchWithTest) if (tag.test?.test(value)) return tag;
		const kt = schema$6.knownTags[tagName];
		if (kt && !kt.collection) {
			schema$6.tags.push(Object.assign({}, kt, {
				default: false,
				test: void 0
			}));
			return kt;
		}
		onError(tagToken, "TAG_RESOLVE_FAILED", `Unresolved tag: ${tagName}`, tagName !== "tag:yaml.org,2002:str");
		return schema$6[identity$4.SCALAR];
	}
	function findScalarTagByTest({ atKey, directives: directives$2, schema: schema$6 }, value, token, onError) {
		const tag = schema$6.tags.find((tag$1) => (tag$1.default === true || atKey && tag$1.default === "key") && tag$1.test?.test(value)) || schema$6[identity$4.SCALAR];
		if (schema$6.compat) {
			const compat = schema$6.compat.find((tag$1) => tag$1.default && tag$1.test?.test(value)) ?? schema$6[identity$4.SCALAR];
			if (tag.tag !== compat.tag) onError(token, "TAG_RESOLVE_FAILED", `Value may be parsed as either ${directives$2.tagString(tag.tag)} or ${directives$2.tagString(compat.tag)}`, true);
		}
		return tag;
	}
	exports.composeScalar = composeScalar$1;
}));

//#endregion
//#region node_modules/yaml/dist/compose/util-empty-scalar-position.js
var require_util_empty_scalar_position = /* @__PURE__ */ __commonJSMin(((exports) => {
	function emptyScalarPosition(offset, before, pos) {
		if (before) {
			pos ?? (pos = before.length);
			for (let i = pos - 1; i >= 0; --i) {
				let st = before[i];
				switch (st.type) {
					case "space":
					case "comment":
					case "newline":
						offset -= st.source.length;
						continue;
				}
				st = before[++i];
				while (st?.type === "space") {
					offset += st.source.length;
					st = before[++i];
				}
				break;
			}
		}
		return offset;
	}
	exports.emptyScalarPosition = emptyScalarPosition;
}));

//#endregion
//#region node_modules/yaml/dist/compose/compose-node.js
var require_compose_node = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Alias$1 = require_Alias();
	var identity$3 = require_identity();
	var composeCollection = require_compose_collection();
	var composeScalar = require_compose_scalar();
	var resolveEnd$2 = require_resolve_end();
	var utilEmptyScalarPosition = require_util_empty_scalar_position();
	const CN = {
		composeNode: composeNode$1,
		composeEmptyNode
	};
	function composeNode$1(ctx, token, props, onError) {
		const atKey = ctx.atKey;
		const { spaceBefore, comment, anchor, tag } = props;
		let node;
		let isSrcToken = true;
		switch (token.type) {
			case "alias":
				node = composeAlias(ctx, token, onError);
				if (anchor || tag) onError(token, "ALIAS_PROPS", "An alias node must not specify any properties");
				break;
			case "scalar":
			case "single-quoted-scalar":
			case "double-quoted-scalar":
			case "block-scalar":
				node = composeScalar.composeScalar(ctx, token, tag, onError);
				if (anchor) node.anchor = anchor.source.substring(1);
				break;
			case "block-map":
			case "block-seq":
			case "flow-collection":
				try {
					node = composeCollection.composeCollection(CN, ctx, token, props, onError);
					if (anchor) node.anchor = anchor.source.substring(1);
				} catch (error) {
					onError(token, "RESOURCE_EXHAUSTION", error instanceof Error ? error.message : String(error));
				}
				break;
			default:
				onError(token, "UNEXPECTED_TOKEN", token.type === "error" ? token.message : `Unsupported token (type: ${token.type})`);
				isSrcToken = false;
		}
		node ?? (node = composeEmptyNode(ctx, token.offset, void 0, null, props, onError));
		if (anchor && node.anchor === "") onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
		if (atKey && ctx.options.stringKeys && (!identity$3.isScalar(node) || typeof node.value !== "string" || node.tag && node.tag !== "tag:yaml.org,2002:str")) onError(tag ?? token, "NON_STRING_KEY", "With stringKeys, all keys must be strings");
		if (spaceBefore) node.spaceBefore = true;
		if (comment) if (token.type === "scalar" && token.source === "") node.comment = comment;
		else node.commentBefore = comment;
		if (ctx.options.keepSourceTokens && isSrcToken) node.srcToken = token;
		return node;
	}
	function composeEmptyNode(ctx, offset, before, pos, { spaceBefore, comment, anchor, tag, end }, onError) {
		const token = {
			type: "scalar",
			offset: utilEmptyScalarPosition.emptyScalarPosition(offset, before, pos),
			indent: -1,
			source: ""
		};
		const node = composeScalar.composeScalar(ctx, token, tag, onError);
		if (anchor) {
			node.anchor = anchor.source.substring(1);
			if (node.anchor === "") onError(anchor, "BAD_ALIAS", "Anchor cannot be an empty string");
		}
		if (spaceBefore) node.spaceBefore = true;
		if (comment) {
			node.comment = comment;
			node.range[2] = end;
		}
		return node;
	}
	function composeAlias({ options }, { offset, source, end }, onError) {
		const alias = new Alias$1.Alias(source.substring(1));
		if (alias.source === "") onError(offset, "BAD_ALIAS", "Alias cannot be an empty string");
		if (alias.source.endsWith(":")) onError(offset + source.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
		const valueEnd = offset + source.length;
		const re = resolveEnd$2.resolveEnd(end, valueEnd, options.strict, onError);
		alias.range = [
			offset,
			valueEnd,
			re.offset
		];
		if (re.comment) alias.comment = re.comment;
		return alias;
	}
	exports.composeEmptyNode = composeEmptyNode;
	exports.composeNode = composeNode$1;
}));

//#endregion
//#region node_modules/yaml/dist/compose/compose-doc.js
var require_compose_doc = /* @__PURE__ */ __commonJSMin(((exports) => {
	var Document$3 = require_Document();
	var composeNode = require_compose_node();
	var resolveEnd$1 = require_resolve_end();
	var resolveProps = require_resolve_props();
	function composeDoc$1(options, directives$2, { offset, start, value, end }, onError) {
		const opts = Object.assign({ _directives: directives$2 }, options);
		const doc = new Document$3.Document(void 0, opts);
		const ctx = {
			atKey: false,
			atRoot: true,
			directives: doc.directives,
			options: doc.options,
			schema: doc.schema
		};
		const props = resolveProps.resolveProps(start, {
			indicator: "doc-start",
			next: value ?? end?.[0],
			offset,
			onError,
			parentIndent: 0,
			startOnNewline: true
		});
		if (props.found) {
			doc.directives.docStart = true;
			if (value && (value.type === "block-map" || value.type === "block-seq") && !props.hasNewline) onError(props.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker");
		}
		doc.contents = value ? composeNode.composeNode(ctx, value, props, onError) : composeNode.composeEmptyNode(ctx, props.end, start, null, props, onError);
		const contentEnd = doc.contents.range[2];
		const re = resolveEnd$1.resolveEnd(end, contentEnd, false, onError);
		if (re.comment) doc.comment = re.comment;
		doc.range = [
			offset,
			contentEnd,
			re.offset
		];
		return doc;
	}
	exports.composeDoc = composeDoc$1;
}));

//#endregion
//#region node_modules/yaml/dist/compose/composer.js
var require_composer = /* @__PURE__ */ __commonJSMin(((exports) => {
	var node_process$1 = __require("process");
	var directives = require_directives();
	var Document$2 = require_Document();
	var errors$3 = require_errors();
	var identity$2 = require_identity();
	var composeDoc = require_compose_doc();
	var resolveEnd = require_resolve_end();
	function getErrorPos(src) {
		if (typeof src === "number") return [src, src + 1];
		if (Array.isArray(src)) return src.length === 2 ? src : [src[0], src[1]];
		const { offset, source } = src;
		return [offset, offset + (typeof source === "string" ? source.length : 1)];
	}
	function parsePrelude(prelude) {
		let comment = "";
		let atComment = false;
		let afterEmptyLine = false;
		for (let i = 0; i < prelude.length; ++i) {
			const source = prelude[i];
			switch (source[0]) {
				case "#":
					comment += (comment === "" ? "" : afterEmptyLine ? "\n\n" : "\n") + (source.substring(1) || " ");
					atComment = true;
					afterEmptyLine = false;
					break;
				case "%":
					if (prelude[i + 1]?.[0] !== "#") i += 1;
					atComment = false;
					break;
				default:
					if (!atComment) afterEmptyLine = true;
					atComment = false;
			}
		}
		return {
			comment,
			afterEmptyLine
		};
	}
	/**
	* Compose a stream of CST nodes into a stream of YAML Documents.
	*
	* ```ts
	* import { Composer, Parser } from 'yaml'
	*
	* const src: string = ...
	* const tokens = new Parser().parse(src)
	* const docs = new Composer().compose(tokens)
	* ```
	*/
	var Composer = class {
		constructor(options = {}) {
			this.doc = null;
			this.atDirectives = false;
			this.prelude = [];
			this.errors = [];
			this.warnings = [];
			this.onError = (source, code, message, warning) => {
				const pos = getErrorPos(source);
				if (warning) this.warnings.push(new errors$3.YAMLWarning(pos, code, message));
				else this.errors.push(new errors$3.YAMLParseError(pos, code, message));
			};
			this.directives = new directives.Directives({ version: options.version || "1.2" });
			this.options = options;
		}
		decorate(doc, afterDoc) {
			const { comment, afterEmptyLine } = parsePrelude(this.prelude);
			if (comment) {
				const dc = doc.contents;
				if (afterDoc) doc.comment = doc.comment ? `${doc.comment}\n${comment}` : comment;
				else if (afterEmptyLine || doc.directives.docStart || !dc) doc.commentBefore = comment;
				else if (identity$2.isCollection(dc) && !dc.flow && dc.items.length > 0) {
					let it = dc.items[0];
					if (identity$2.isPair(it)) it = it.key;
					const cb = it.commentBefore;
					it.commentBefore = cb ? `${comment}\n${cb}` : comment;
				} else {
					const cb = dc.commentBefore;
					dc.commentBefore = cb ? `${comment}\n${cb}` : comment;
				}
			}
			if (afterDoc) {
				for (let i = 0; i < this.errors.length; ++i) doc.errors.push(this.errors[i]);
				for (let i = 0; i < this.warnings.length; ++i) doc.warnings.push(this.warnings[i]);
			} else {
				doc.errors = this.errors;
				doc.warnings = this.warnings;
			}
			this.prelude = [];
			this.errors = [];
			this.warnings = [];
		}
		/**
		* Current stream status information.
		*
		* Mostly useful at the end of input for an empty stream.
		*/
		streamInfo() {
			return {
				comment: parsePrelude(this.prelude).comment,
				directives: this.directives,
				errors: this.errors,
				warnings: this.warnings
			};
		}
		/**
		* Compose tokens into documents.
		*
		* @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
		* @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
		*/
		*compose(tokens, forceDoc = false, endOffset = -1) {
			for (const token of tokens) yield* this.next(token);
			yield* this.end(forceDoc, endOffset);
		}
		/** Advance the composer by one CST token. */
		*next(token) {
			if (node_process$1.env.LOG_STREAM) console.dir(token, { depth: null });
			switch (token.type) {
				case "directive":
					this.directives.add(token.source, (offset, message, warning) => {
						const pos = getErrorPos(token);
						pos[0] += offset;
						this.onError(pos, "BAD_DIRECTIVE", message, warning);
					});
					this.prelude.push(token.source);
					this.atDirectives = true;
					break;
				case "document": {
					const doc = composeDoc.composeDoc(this.options, this.directives, token, this.onError);
					if (this.atDirectives && !doc.directives.docStart) this.onError(token, "MISSING_CHAR", "Missing directives-end/doc-start indicator line");
					this.decorate(doc, false);
					if (this.doc) yield this.doc;
					this.doc = doc;
					this.atDirectives = false;
					break;
				}
				case "byte-order-mark":
				case "space": break;
				case "comment":
				case "newline":
					this.prelude.push(token.source);
					break;
				case "error": {
					const msg = token.source ? `${token.message}: ${JSON.stringify(token.source)}` : token.message;
					const error = new errors$3.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", msg);
					if (this.atDirectives || !this.doc) this.errors.push(error);
					else this.doc.errors.push(error);
					break;
				}
				case "doc-end": {
					if (!this.doc) {
						this.errors.push(new errors$3.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", "Unexpected doc-end without preceding document"));
						break;
					}
					this.doc.directives.docEnd = true;
					const end = resolveEnd.resolveEnd(token.end, token.offset + token.source.length, this.doc.options.strict, this.onError);
					this.decorate(this.doc, true);
					if (end.comment) {
						const dc = this.doc.comment;
						this.doc.comment = dc ? `${dc}\n${end.comment}` : end.comment;
					}
					this.doc.range[2] = end.offset;
					break;
				}
				default: this.errors.push(new errors$3.YAMLParseError(getErrorPos(token), "UNEXPECTED_TOKEN", `Unsupported token ${token.type}`));
			}
		}
		/**
		* Call at end of input to yield any remaining document.
		*
		* @param forceDoc - If the stream contains no document, still emit a final document including any comments and directives that would be applied to a subsequent document.
		* @param endOffset - Should be set if `forceDoc` is also set, to set the document range end and to indicate errors correctly.
		*/
		*end(forceDoc = false, endOffset = -1) {
			if (this.doc) {
				this.decorate(this.doc, true);
				yield this.doc;
				this.doc = null;
			} else if (forceDoc) {
				const opts = Object.assign({ _directives: this.directives }, this.options);
				const doc = new Document$2.Document(void 0, opts);
				if (this.atDirectives) this.onError(endOffset, "MISSING_CHAR", "Missing directives-end indicator line");
				doc.range = [
					0,
					endOffset,
					endOffset
				];
				this.decorate(doc, false);
				yield doc;
			}
		}
	};
	exports.Composer = Composer;
}));

//#endregion
//#region node_modules/yaml/dist/parse/cst-scalar.js
var require_cst_scalar = /* @__PURE__ */ __commonJSMin(((exports) => {
	var resolveBlockScalar = require_resolve_block_scalar();
	var resolveFlowScalar = require_resolve_flow_scalar();
	var errors$2 = require_errors();
	var stringifyString = require_stringifyString();
	function resolveAsScalar(token, strict = true, onError) {
		if (token) {
			const _onError = (pos, code, message) => {
				const offset = typeof pos === "number" ? pos : Array.isArray(pos) ? pos[0] : pos.offset;
				if (onError) onError(offset, code, message);
				else throw new errors$2.YAMLParseError([offset, offset + 1], code, message);
			};
			switch (token.type) {
				case "scalar":
				case "single-quoted-scalar":
				case "double-quoted-scalar": return resolveFlowScalar.resolveFlowScalar(token, strict, _onError);
				case "block-scalar": return resolveBlockScalar.resolveBlockScalar({ options: { strict } }, token, _onError);
			}
		}
		return null;
	}
	/**
	* Create a new scalar token with `value`
	*
	* Values that represent an actual string but may be parsed as a different type should use a `type` other than `'PLAIN'`,
	* as this function does not support any schema operations and won't check for such conflicts.
	*
	* @param value The string representation of the value, which will have its content properly indented.
	* @param context.end Comments and whitespace after the end of the value, or after the block scalar header. If undefined, a newline will be added.
	* @param context.implicitKey Being within an implicit key may affect the resolved type of the token's value.
	* @param context.indent The indent level of the token.
	* @param context.inFlow Is this scalar within a flow collection? This may affect the resolved type of the token's value.
	* @param context.offset The offset position of the token.
	* @param context.type The preferred type of the scalar token. If undefined, the previous type of the `token` will be used, defaulting to `'PLAIN'`.
	*/
	function createScalarToken(value, context) {
		const { implicitKey = false, indent, inFlow = false, offset = -1, type = "PLAIN" } = context;
		const source = stringifyString.stringifyString({
			type,
			value
		}, {
			implicitKey,
			indent: indent > 0 ? " ".repeat(indent) : "",
			inFlow,
			options: {
				blockQuote: true,
				lineWidth: -1
			}
		});
		const end = context.end ?? [{
			type: "newline",
			offset: -1,
			indent,
			source: "\n"
		}];
		switch (source[0]) {
			case "|":
			case ">": {
				const he = source.indexOf("\n");
				const head = source.substring(0, he);
				const body = source.substring(he + 1) + "\n";
				const props = [{
					type: "block-scalar-header",
					offset,
					indent,
					source: head
				}];
				if (!addEndtoBlockProps(props, end)) props.push({
					type: "newline",
					offset: -1,
					indent,
					source: "\n"
				});
				return {
					type: "block-scalar",
					offset,
					indent,
					props,
					source: body
				};
			}
			case "\"": return {
				type: "double-quoted-scalar",
				offset,
				indent,
				source,
				end
			};
			case "'": return {
				type: "single-quoted-scalar",
				offset,
				indent,
				source,
				end
			};
			default: return {
				type: "scalar",
				offset,
				indent,
				source,
				end
			};
		}
	}
	/**
	* Set the value of `token` to the given string `value`, overwriting any previous contents and type that it may have.
	*
	* Best efforts are made to retain any comments previously associated with the `token`,
	* though all contents within a collection's `items` will be overwritten.
	*
	* Values that represent an actual string but may be parsed as a different type should use a `type` other than `'PLAIN'`,
	* as this function does not support any schema operations and won't check for such conflicts.
	*
	* @param token Any token. If it does not include an `indent` value, the value will be stringified as if it were an implicit key.
	* @param value The string representation of the value, which will have its content properly indented.
	* @param context.afterKey In most cases, values after a key should have an additional level of indentation.
	* @param context.implicitKey Being within an implicit key may affect the resolved type of the token's value.
	* @param context.inFlow Being within a flow collection may affect the resolved type of the token's value.
	* @param context.type The preferred type of the scalar token. If undefined, the previous type of the `token` will be used, defaulting to `'PLAIN'`.
	*/
	function setScalarValue(token, value, context = {}) {
		let { afterKey = false, implicitKey = false, inFlow = false, type } = context;
		let indent = "indent" in token ? token.indent : null;
		if (afterKey && typeof indent === "number") indent += 2;
		if (!type) switch (token.type) {
			case "single-quoted-scalar":
				type = "QUOTE_SINGLE";
				break;
			case "double-quoted-scalar":
				type = "QUOTE_DOUBLE";
				break;
			case "block-scalar": {
				const header = token.props[0];
				if (header.type !== "block-scalar-header") throw new Error("Invalid block scalar header");
				type = header.source[0] === ">" ? "BLOCK_FOLDED" : "BLOCK_LITERAL";
				break;
			}
			default: type = "PLAIN";
		}
		const source = stringifyString.stringifyString({
			type,
			value
		}, {
			implicitKey: implicitKey || indent === null,
			indent: indent !== null && indent > 0 ? " ".repeat(indent) : "",
			inFlow,
			options: {
				blockQuote: true,
				lineWidth: -1
			}
		});
		switch (source[0]) {
			case "|":
			case ">":
				setBlockScalarValue(token, source);
				break;
			case "\"":
				setFlowScalarValue(token, source, "double-quoted-scalar");
				break;
			case "'":
				setFlowScalarValue(token, source, "single-quoted-scalar");
				break;
			default: setFlowScalarValue(token, source, "scalar");
		}
	}
	function setBlockScalarValue(token, source) {
		const he = source.indexOf("\n");
		const head = source.substring(0, he);
		const body = source.substring(he + 1) + "\n";
		if (token.type === "block-scalar") {
			const header = token.props[0];
			if (header.type !== "block-scalar-header") throw new Error("Invalid block scalar header");
			header.source = head;
			token.source = body;
		} else {
			const { offset } = token;
			const indent = "indent" in token ? token.indent : -1;
			const props = [{
				type: "block-scalar-header",
				offset,
				indent,
				source: head
			}];
			if (!addEndtoBlockProps(props, "end" in token ? token.end : void 0)) props.push({
				type: "newline",
				offset: -1,
				indent,
				source: "\n"
			});
			for (const key of Object.keys(token)) if (key !== "type" && key !== "offset") delete token[key];
			Object.assign(token, {
				type: "block-scalar",
				indent,
				props,
				source: body
			});
		}
	}
	/** @returns `true` if last token is a newline */
	function addEndtoBlockProps(props, end) {
		if (end) for (const st of end) switch (st.type) {
			case "space":
			case "comment":
				props.push(st);
				break;
			case "newline":
				props.push(st);
				return true;
		}
		return false;
	}
	function setFlowScalarValue(token, source, type) {
		switch (token.type) {
			case "scalar":
			case "double-quoted-scalar":
			case "single-quoted-scalar":
				token.type = type;
				token.source = source;
				break;
			case "block-scalar": {
				const end = token.props.slice(1);
				let oa = source.length;
				if (token.props[0].type === "block-scalar-header") oa -= token.props[0].source.length;
				for (const tok of end) tok.offset += oa;
				delete token.props;
				Object.assign(token, {
					type,
					source,
					end
				});
				break;
			}
			case "block-map":
			case "block-seq": {
				const nl = {
					type: "newline",
					offset: token.offset + source.length,
					indent: token.indent,
					source: "\n"
				};
				delete token.items;
				Object.assign(token, {
					type,
					source,
					end: [nl]
				});
				break;
			}
			default: {
				const indent = "indent" in token ? token.indent : -1;
				const end = "end" in token && Array.isArray(token.end) ? token.end.filter((st) => st.type === "space" || st.type === "comment" || st.type === "newline") : [];
				for (const key of Object.keys(token)) if (key !== "type" && key !== "offset") delete token[key];
				Object.assign(token, {
					type,
					indent,
					source,
					end
				});
			}
		}
	}
	exports.createScalarToken = createScalarToken;
	exports.resolveAsScalar = resolveAsScalar;
	exports.setScalarValue = setScalarValue;
}));

//#endregion
//#region node_modules/yaml/dist/parse/cst-stringify.js
var require_cst_stringify = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Stringify a CST document, token, or collection item
	*
	* Fair warning: This applies no validation whatsoever, and
	* simply concatenates the sources in their logical order.
	*/
	const stringify$1 = (cst$3) => "type" in cst$3 ? stringifyToken(cst$3) : stringifyItem(cst$3);
	function stringifyToken(token) {
		switch (token.type) {
			case "block-scalar": {
				let res = "";
				for (const tok of token.props) res += stringifyToken(tok);
				return res + token.source;
			}
			case "block-map":
			case "block-seq": {
				let res = "";
				for (const item of token.items) res += stringifyItem(item);
				return res;
			}
			case "flow-collection": {
				let res = token.start.source;
				for (const item of token.items) res += stringifyItem(item);
				for (const st of token.end) res += st.source;
				return res;
			}
			case "document": {
				let res = stringifyItem(token);
				if (token.end) for (const st of token.end) res += st.source;
				return res;
			}
			default: {
				let res = token.source;
				if ("end" in token && token.end) for (const st of token.end) res += st.source;
				return res;
			}
		}
	}
	function stringifyItem({ start, key, sep, value }) {
		let res = "";
		for (const st of start) res += st.source;
		if (key) res += stringifyToken(key);
		if (sep) for (const st of sep) res += st.source;
		if (value) res += stringifyToken(value);
		return res;
	}
	exports.stringify = stringify$1;
}));

//#endregion
//#region node_modules/yaml/dist/parse/cst-visit.js
var require_cst_visit = /* @__PURE__ */ __commonJSMin(((exports) => {
	const BREAK = Symbol("break visit");
	const SKIP = Symbol("skip children");
	const REMOVE = Symbol("remove item");
	/**
	* Apply a visitor to a CST document or item.
	*
	* Walks through the tree (depth-first) starting from the root, calling a
	* `visitor` function with two arguments when entering each item:
	*   - `item`: The current item, which included the following members:
	*     - `start: SourceToken[]` – Source tokens before the key or value,
	*       possibly including its anchor or tag.
	*     - `key?: Token | null` – Set for pair values. May then be `null`, if
	*       the key before the `:` separator is empty.
	*     - `sep?: SourceToken[]` – Source tokens between the key and the value,
	*       which should include the `:` map value indicator if `value` is set.
	*     - `value?: Token` – The value of a sequence item, or of a map pair.
	*   - `path`: The steps from the root to the current node, as an array of
	*     `['key' | 'value', number]` tuples.
	*
	* The return value of the visitor may be used to control the traversal:
	*   - `undefined` (default): Do nothing and continue
	*   - `visit.SKIP`: Do not visit the children of this token, continue with
	*      next sibling
	*   - `visit.BREAK`: Terminate traversal completely
	*   - `visit.REMOVE`: Remove the current item, then continue with the next one
	*   - `number`: Set the index of the next step. This is useful especially if
	*     the index of the current token has changed.
	*   - `function`: Define the next visitor for this item. After the original
	*     visitor is called on item entry, next visitors are called after handling
	*     a non-empty `key` and when exiting the item.
	*/
	function visit$1(cst$3, visitor) {
		if ("type" in cst$3 && cst$3.type === "document") cst$3 = {
			start: cst$3.start,
			value: cst$3.value
		};
		_visit(Object.freeze([]), cst$3, visitor);
	}
	/** Terminate visit traversal completely */
	visit$1.BREAK = BREAK;
	/** Do not visit the children of the current item */
	visit$1.SKIP = SKIP;
	/** Remove the current item */
	visit$1.REMOVE = REMOVE;
	/** Find the item at `path` from `cst` as the root */
	visit$1.itemAtPath = (cst$3, path$2) => {
		let item = cst$3;
		for (const [field, index$1] of path$2) {
			const tok = item?.[field];
			if (tok && "items" in tok) item = tok.items[index$1];
			else return void 0;
		}
		return item;
	};
	/**
	* Get the immediate parent collection of the item at `path` from `cst` as the root.
	*
	* Throws an error if the collection is not found, which should never happen if the item itself exists.
	*/
	visit$1.parentCollection = (cst$3, path$2) => {
		const parent = visit$1.itemAtPath(cst$3, path$2.slice(0, -1));
		const field = path$2[path$2.length - 1][0];
		const coll = parent?.[field];
		if (coll && "items" in coll) return coll;
		throw new Error("Parent collection not found");
	};
	function _visit(path$2, item, visitor) {
		let ctrl = visitor(item, path$2);
		if (typeof ctrl === "symbol") return ctrl;
		for (const field of ["key", "value"]) {
			const token = item[field];
			if (token && "items" in token) {
				for (let i = 0; i < token.items.length; ++i) {
					const ci = _visit(Object.freeze(path$2.concat([[field, i]])), token.items[i], visitor);
					if (typeof ci === "number") i = ci - 1;
					else if (ci === BREAK) return BREAK;
					else if (ci === REMOVE) {
						token.items.splice(i, 1);
						i -= 1;
					}
				}
				if (typeof ctrl === "function" && field === "key") ctrl = ctrl(item, path$2);
			}
		}
		return typeof ctrl === "function" ? ctrl(item, path$2) : ctrl;
	}
	exports.visit = visit$1;
}));

//#endregion
//#region node_modules/yaml/dist/parse/cst.js
var require_cst = /* @__PURE__ */ __commonJSMin(((exports) => {
	var cstScalar = require_cst_scalar();
	var cstStringify = require_cst_stringify();
	var cstVisit = require_cst_visit();
	/** The byte order mark */
	const BOM = "﻿";
	/** Start of doc-mode */
	const DOCUMENT = "";
	/** Unexpected end of flow-mode */
	const FLOW_END = "";
	/** Next token is a scalar value */
	const SCALAR = "";
	/** @returns `true` if `token` is a flow or block collection */
	const isCollection = (token) => !!token && "items" in token;
	/** @returns `true` if `token` is a flow or block scalar; not an alias */
	const isScalar$1 = (token) => !!token && (token.type === "scalar" || token.type === "single-quoted-scalar" || token.type === "double-quoted-scalar" || token.type === "block-scalar");
	/* istanbul ignore next */
	/** Get a printable representation of a lexer token */
	function prettyToken(token) {
		switch (token) {
			case BOM: return "<BOM>";
			case DOCUMENT: return "<DOC>";
			case FLOW_END: return "<FLOW_END>";
			case SCALAR: return "<SCALAR>";
			default: return JSON.stringify(token);
		}
	}
	/** Identify the type of a lexer token. May return `null` for unknown tokens. */
	function tokenType(source) {
		switch (source) {
			case BOM: return "byte-order-mark";
			case DOCUMENT: return "doc-mode";
			case FLOW_END: return "flow-error-end";
			case SCALAR: return "scalar";
			case "---": return "doc-start";
			case "...": return "doc-end";
			case "":
			case "\n":
			case "\r\n": return "newline";
			case "-": return "seq-item-ind";
			case "?": return "explicit-key-ind";
			case ":": return "map-value-ind";
			case "{": return "flow-map-start";
			case "}": return "flow-map-end";
			case "[": return "flow-seq-start";
			case "]": return "flow-seq-end";
			case ",": return "comma";
		}
		switch (source[0]) {
			case " ":
			case "	": return "space";
			case "#": return "comment";
			case "%": return "directive-line";
			case "*": return "alias";
			case "&": return "anchor";
			case "!": return "tag";
			case "'": return "single-quoted-scalar";
			case "\"": return "double-quoted-scalar";
			case "|":
			case ">": return "block-scalar-header";
		}
		return null;
	}
	exports.createScalarToken = cstScalar.createScalarToken;
	exports.resolveAsScalar = cstScalar.resolveAsScalar;
	exports.setScalarValue = cstScalar.setScalarValue;
	exports.stringify = cstStringify.stringify;
	exports.visit = cstVisit.visit;
	exports.BOM = BOM;
	exports.DOCUMENT = DOCUMENT;
	exports.FLOW_END = FLOW_END;
	exports.SCALAR = SCALAR;
	exports.isCollection = isCollection;
	exports.isScalar = isScalar$1;
	exports.prettyToken = prettyToken;
	exports.tokenType = tokenType;
}));

//#endregion
//#region node_modules/yaml/dist/parse/lexer.js
var require_lexer = /* @__PURE__ */ __commonJSMin(((exports) => {
	var cst$2 = require_cst();
	function isEmpty(ch) {
		switch (ch) {
			case void 0:
			case " ":
			case "\n":
			case "\r":
			case "	": return true;
			default: return false;
		}
	}
	const hexDigits = /* @__PURE__ */ new Set("0123456789ABCDEFabcdef");
	const tagChars = /* @__PURE__ */ new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()");
	const flowIndicatorChars = /* @__PURE__ */ new Set(",[]{}");
	const invalidAnchorChars = /* @__PURE__ */ new Set(" ,[]{}\n\r	");
	const isNotAnchorChar = (ch) => !ch || invalidAnchorChars.has(ch);
	/**
	* Splits an input string into lexical tokens, i.e. smaller strings that are
	* easily identifiable by `tokens.tokenType()`.
	*
	* Lexing starts always in a "stream" context. Incomplete input may be buffered
	* until a complete token can be emitted.
	*
	* In addition to slices of the original input, the following control characters
	* may also be emitted:
	*
	* - `\x02` (Start of Text): A document starts with the next token
	* - `\x18` (Cancel): Unexpected end of flow-mode (indicates an error)
	* - `\x1f` (Unit Separator): Next token is a scalar value
	* - `\u{FEFF}` (Byte order mark): Emitted separately outside documents
	*/
	var Lexer = class {
		constructor() {
			/**
			* Flag indicating whether the end of the current buffer marks the end of
			* all input
			*/
			this.atEnd = false;
			/**
			* Explicit indent set in block scalar header, as an offset from the current
			* minimum indent, so e.g. set to 1 from a header `|2+`. Set to -1 if not
			* explicitly set.
			*/
			this.blockScalarIndent = -1;
			/**
			* Block scalars that include a + (keep) chomping indicator in their header
			* include trailing empty lines, which are otherwise excluded from the
			* scalar's contents.
			*/
			this.blockScalarKeep = false;
			/** Current input */
			this.buffer = "";
			/**
			* Flag noting whether the map value indicator : can immediately follow this
			* node within a flow context.
			*/
			this.flowKey = false;
			/** Count of surrounding flow collection levels. */
			this.flowLevel = 0;
			/**
			* Minimum level of indentation required for next lines to be parsed as a
			* part of the current scalar value.
			*/
			this.indentNext = 0;
			/** Indentation level of the current line. */
			this.indentValue = 0;
			/** Position of the next \n character. */
			this.lineEndPos = null;
			/** Stores the state of the lexer if reaching the end of incpomplete input */
			this.next = null;
			/** A pointer to `buffer`; the current position of the lexer. */
			this.pos = 0;
		}
		/**
		* Generate YAML tokens from the `source` string. If `incomplete`,
		* a part of the last line may be left as a buffer for the next call.
		*
		* @returns A generator of lexical tokens
		*/
		*lex(source, incomplete = false) {
			if (source) {
				if (typeof source !== "string") throw TypeError("source is not a string");
				this.buffer = this.buffer ? this.buffer + source : source;
				this.lineEndPos = null;
			}
			this.atEnd = !incomplete;
			let next = this.next ?? "stream";
			while (next && (incomplete || this.hasChars(1))) next = yield* this.parseNext(next);
		}
		atLineEnd() {
			let i = this.pos;
			let ch = this.buffer[i];
			while (ch === " " || ch === "	") ch = this.buffer[++i];
			if (!ch || ch === "#" || ch === "\n") return true;
			if (ch === "\r") return this.buffer[i + 1] === "\n";
			return false;
		}
		charAt(n) {
			return this.buffer[this.pos + n];
		}
		continueScalar(offset) {
			let ch = this.buffer[offset];
			if (this.indentNext > 0) {
				let indent = 0;
				while (ch === " ") ch = this.buffer[++indent + offset];
				if (ch === "\r") {
					const next = this.buffer[indent + offset + 1];
					if (next === "\n" || !next && !this.atEnd) return offset + indent + 1;
				}
				return ch === "\n" || indent >= this.indentNext || !ch && !this.atEnd ? offset + indent : -1;
			}
			if (ch === "-" || ch === ".") {
				const dt = this.buffer.substr(offset, 3);
				if ((dt === "---" || dt === "...") && isEmpty(this.buffer[offset + 3])) return -1;
			}
			return offset;
		}
		getLine() {
			let end = this.lineEndPos;
			if (typeof end !== "number" || end !== -1 && end < this.pos) {
				end = this.buffer.indexOf("\n", this.pos);
				this.lineEndPos = end;
			}
			if (end === -1) return this.atEnd ? this.buffer.substring(this.pos) : null;
			if (this.buffer[end - 1] === "\r") end -= 1;
			return this.buffer.substring(this.pos, end);
		}
		hasChars(n) {
			return this.pos + n <= this.buffer.length;
		}
		setNext(state) {
			this.buffer = this.buffer.substring(this.pos);
			this.pos = 0;
			this.lineEndPos = null;
			this.next = state;
			return null;
		}
		peek(n) {
			return this.buffer.substr(this.pos, n);
		}
		*parseNext(next) {
			switch (next) {
				case "stream": return yield* this.parseStream();
				case "line-start": return yield* this.parseLineStart();
				case "block-start": return yield* this.parseBlockStart();
				case "doc": return yield* this.parseDocument();
				case "flow": return yield* this.parseFlowCollection();
				case "quoted-scalar": return yield* this.parseQuotedScalar();
				case "block-scalar": return yield* this.parseBlockScalar();
				case "plain-scalar": return yield* this.parsePlainScalar();
			}
		}
		*parseStream() {
			let line = this.getLine();
			if (line === null) return this.setNext("stream");
			if (line[0] === cst$2.BOM) {
				yield* this.pushCount(1);
				line = line.substring(1);
			}
			if (line[0] === "%") {
				let dirEnd = line.length;
				let cs = line.indexOf("#");
				while (cs !== -1) {
					const ch = line[cs - 1];
					if (ch === " " || ch === "	") {
						dirEnd = cs - 1;
						break;
					} else cs = line.indexOf("#", cs + 1);
				}
				while (true) {
					const ch = line[dirEnd - 1];
					if (ch === " " || ch === "	") dirEnd -= 1;
					else break;
				}
				const n = (yield* this.pushCount(dirEnd)) + (yield* this.pushSpaces(true));
				yield* this.pushCount(line.length - n);
				this.pushNewline();
				return "stream";
			}
			if (this.atLineEnd()) {
				const sp = yield* this.pushSpaces(true);
				yield* this.pushCount(line.length - sp);
				yield* this.pushNewline();
				return "stream";
			}
			yield cst$2.DOCUMENT;
			return yield* this.parseLineStart();
		}
		*parseLineStart() {
			const ch = this.charAt(0);
			if (!ch && !this.atEnd) return this.setNext("line-start");
			if (ch === "-" || ch === ".") {
				if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
				const s = this.peek(3);
				if ((s === "---" || s === "...") && isEmpty(this.charAt(3))) {
					yield* this.pushCount(3);
					this.indentValue = 0;
					this.indentNext = 0;
					return s === "---" ? "doc" : "stream";
				}
			}
			this.indentValue = yield* this.pushSpaces(false);
			if (this.indentNext > this.indentValue && !isEmpty(this.charAt(1))) this.indentNext = this.indentValue;
			return yield* this.parseBlockStart();
		}
		*parseBlockStart() {
			const [ch0, ch1] = this.peek(2);
			if (!ch1 && !this.atEnd) return this.setNext("block-start");
			if ((ch0 === "-" || ch0 === "?" || ch0 === ":") && isEmpty(ch1)) {
				const n = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
				this.indentNext = this.indentValue + 1;
				this.indentValue += n;
				return "block-start";
			}
			return "doc";
		}
		*parseDocument() {
			yield* this.pushSpaces(true);
			const line = this.getLine();
			if (line === null) return this.setNext("doc");
			let n = yield* this.pushIndicators();
			switch (line[n]) {
				case "#": yield* this.pushCount(line.length - n);
				case void 0:
					yield* this.pushNewline();
					return yield* this.parseLineStart();
				case "{":
				case "[":
					yield* this.pushCount(1);
					this.flowKey = false;
					this.flowLevel = 1;
					return "flow";
				case "}":
				case "]":
					yield* this.pushCount(1);
					return "doc";
				case "*":
					yield* this.pushUntil(isNotAnchorChar);
					return "doc";
				case "\"":
				case "'": return yield* this.parseQuotedScalar();
				case "|":
				case ">":
					n += yield* this.parseBlockScalarHeader();
					n += yield* this.pushSpaces(true);
					yield* this.pushCount(line.length - n);
					yield* this.pushNewline();
					return yield* this.parseBlockScalar();
				default: return yield* this.parsePlainScalar();
			}
		}
		*parseFlowCollection() {
			let nl, sp;
			let indent = -1;
			do {
				nl = yield* this.pushNewline();
				if (nl > 0) {
					sp = yield* this.pushSpaces(false);
					this.indentValue = indent = sp;
				} else sp = 0;
				sp += yield* this.pushSpaces(true);
			} while (nl + sp > 0);
			const line = this.getLine();
			if (line === null) return this.setNext("flow");
			if (indent !== -1 && indent < this.indentNext && line[0] !== "#" || indent === 0 && (line.startsWith("---") || line.startsWith("...")) && isEmpty(line[3])) {
				if (!(indent === this.indentNext - 1 && this.flowLevel === 1 && (line[0] === "]" || line[0] === "}"))) {
					this.flowLevel = 0;
					yield cst$2.FLOW_END;
					return yield* this.parseLineStart();
				}
			}
			let n = 0;
			while (line[n] === ",") {
				n += yield* this.pushCount(1);
				n += yield* this.pushSpaces(true);
				this.flowKey = false;
			}
			n += yield* this.pushIndicators();
			switch (line[n]) {
				case void 0: return "flow";
				case "#":
					yield* this.pushCount(line.length - n);
					return "flow";
				case "{":
				case "[":
					yield* this.pushCount(1);
					this.flowKey = false;
					this.flowLevel += 1;
					return "flow";
				case "}":
				case "]":
					yield* this.pushCount(1);
					this.flowKey = true;
					this.flowLevel -= 1;
					return this.flowLevel ? "flow" : "doc";
				case "*":
					yield* this.pushUntil(isNotAnchorChar);
					return "flow";
				case "\"":
				case "'":
					this.flowKey = true;
					return yield* this.parseQuotedScalar();
				case ":": {
					const next = this.charAt(1);
					if (this.flowKey || isEmpty(next) || next === ",") {
						this.flowKey = false;
						yield* this.pushCount(1);
						yield* this.pushSpaces(true);
						return "flow";
					}
				}
				default:
					this.flowKey = false;
					return yield* this.parsePlainScalar();
			}
		}
		*parseQuotedScalar() {
			const quote = this.charAt(0);
			let end = this.buffer.indexOf(quote, this.pos + 1);
			if (quote === "'") while (end !== -1 && this.buffer[end + 1] === "'") end = this.buffer.indexOf("'", end + 2);
			else while (end !== -1) {
				let n = 0;
				while (this.buffer[end - 1 - n] === "\\") n += 1;
				if (n % 2 === 0) break;
				end = this.buffer.indexOf("\"", end + 1);
			}
			const qb = this.buffer.substring(0, end);
			let nl = qb.indexOf("\n", this.pos);
			if (nl !== -1) {
				while (nl !== -1) {
					const cs = this.continueScalar(nl + 1);
					if (cs === -1) break;
					nl = qb.indexOf("\n", cs);
				}
				if (nl !== -1) end = nl - (qb[nl - 1] === "\r" ? 2 : 1);
			}
			if (end === -1) {
				if (!this.atEnd) return this.setNext("quoted-scalar");
				end = this.buffer.length;
			}
			yield* this.pushToIndex(end + 1, false);
			return this.flowLevel ? "flow" : "doc";
		}
		*parseBlockScalarHeader() {
			this.blockScalarIndent = -1;
			this.blockScalarKeep = false;
			let i = this.pos;
			while (true) {
				const ch = this.buffer[++i];
				if (ch === "+") this.blockScalarKeep = true;
				else if (ch > "0" && ch <= "9") this.blockScalarIndent = Number(ch) - 1;
				else if (ch !== "-") break;
			}
			return yield* this.pushUntil((ch) => isEmpty(ch) || ch === "#");
		}
		*parseBlockScalar() {
			let nl = this.pos - 1;
			let indent = 0;
			let ch;
			loop: for (let i$1 = this.pos; ch = this.buffer[i$1]; ++i$1) switch (ch) {
				case " ":
					indent += 1;
					break;
				case "\n":
					nl = i$1;
					indent = 0;
					break;
				case "\r": {
					const next = this.buffer[i$1 + 1];
					if (!next && !this.atEnd) return this.setNext("block-scalar");
					if (next === "\n") break;
				}
				default: break loop;
			}
			if (!ch && !this.atEnd) return this.setNext("block-scalar");
			if (indent >= this.indentNext) {
				if (this.blockScalarIndent === -1) this.indentNext = indent;
				else this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
				do {
					const cs = this.continueScalar(nl + 1);
					if (cs === -1) break;
					nl = this.buffer.indexOf("\n", cs);
				} while (nl !== -1);
				if (nl === -1) {
					if (!this.atEnd) return this.setNext("block-scalar");
					nl = this.buffer.length;
				}
			}
			let i = nl + 1;
			ch = this.buffer[i];
			while (ch === " ") ch = this.buffer[++i];
			if (ch === "	") {
				while (ch === "	" || ch === " " || ch === "\r" || ch === "\n") ch = this.buffer[++i];
				nl = i - 1;
			} else if (!this.blockScalarKeep) do {
				let i$1 = nl - 1;
				let ch$1 = this.buffer[i$1];
				if (ch$1 === "\r") ch$1 = this.buffer[--i$1];
				const lastChar = i$1;
				while (ch$1 === " ") ch$1 = this.buffer[--i$1];
				if (ch$1 === "\n" && i$1 >= this.pos && i$1 + 1 + indent > lastChar) nl = i$1;
				else break;
			} while (true);
			yield cst$2.SCALAR;
			yield* this.pushToIndex(nl + 1, true);
			return yield* this.parseLineStart();
		}
		*parsePlainScalar() {
			const inFlow = this.flowLevel > 0;
			let end = this.pos - 1;
			let i = this.pos - 1;
			let ch;
			while (ch = this.buffer[++i]) if (ch === ":") {
				const next = this.buffer[i + 1];
				if (isEmpty(next) || inFlow && flowIndicatorChars.has(next)) break;
				end = i;
			} else if (isEmpty(ch)) {
				let next = this.buffer[i + 1];
				if (ch === "\r") if (next === "\n") {
					i += 1;
					ch = "\n";
					next = this.buffer[i + 1];
				} else end = i;
				if (next === "#" || inFlow && flowIndicatorChars.has(next)) break;
				if (ch === "\n") {
					const cs = this.continueScalar(i + 1);
					if (cs === -1) break;
					i = Math.max(i, cs - 2);
				}
			} else {
				if (inFlow && flowIndicatorChars.has(ch)) break;
				end = i;
			}
			if (!ch && !this.atEnd) return this.setNext("plain-scalar");
			yield cst$2.SCALAR;
			yield* this.pushToIndex(end + 1, true);
			return inFlow ? "flow" : "doc";
		}
		*pushCount(n) {
			if (n > 0) {
				yield this.buffer.substr(this.pos, n);
				this.pos += n;
				return n;
			}
			return 0;
		}
		*pushToIndex(i, allowEmpty) {
			const s = this.buffer.slice(this.pos, i);
			if (s) {
				yield s;
				this.pos += s.length;
				return s.length;
			} else if (allowEmpty) yield "";
			return 0;
		}
		*pushIndicators() {
			let n = 0;
			loop: while (true) {
				switch (this.charAt(0)) {
					case "!":
						n += yield* this.pushTag();
						n += yield* this.pushSpaces(true);
						continue loop;
					case "&":
						n += yield* this.pushUntil(isNotAnchorChar);
						n += yield* this.pushSpaces(true);
						continue loop;
					case "-":
					case "?":
					case ":": {
						const inFlow = this.flowLevel > 0;
						const ch1 = this.charAt(1);
						if (isEmpty(ch1) || inFlow && flowIndicatorChars.has(ch1)) {
							if (!inFlow) this.indentNext = this.indentValue + 1;
							else if (this.flowKey) this.flowKey = false;
							n += yield* this.pushCount(1);
							n += yield* this.pushSpaces(true);
							continue loop;
						}
					}
				}
				break loop;
			}
			return n;
		}
		*pushTag() {
			if (this.charAt(1) === "<") {
				let i = this.pos + 2;
				let ch = this.buffer[i];
				while (!isEmpty(ch) && ch !== ">") ch = this.buffer[++i];
				return yield* this.pushToIndex(ch === ">" ? i + 1 : i, false);
			} else {
				let i = this.pos + 1;
				let ch = this.buffer[i];
				while (ch) if (tagChars.has(ch)) ch = this.buffer[++i];
				else if (ch === "%" && hexDigits.has(this.buffer[i + 1]) && hexDigits.has(this.buffer[i + 2])) ch = this.buffer[i += 3];
				else break;
				return yield* this.pushToIndex(i, false);
			}
		}
		*pushNewline() {
			const ch = this.buffer[this.pos];
			if (ch === "\n") return yield* this.pushCount(1);
			else if (ch === "\r" && this.charAt(1) === "\n") return yield* this.pushCount(2);
			else return 0;
		}
		*pushSpaces(allowTabs) {
			let i = this.pos - 1;
			let ch;
			do
				ch = this.buffer[++i];
			while (ch === " " || allowTabs && ch === "	");
			const n = i - this.pos;
			if (n > 0) {
				yield this.buffer.substr(this.pos, n);
				this.pos = i;
			}
			return n;
		}
		*pushUntil(test) {
			let i = this.pos;
			let ch = this.buffer[i];
			while (!test(ch)) ch = this.buffer[++i];
			return yield* this.pushToIndex(i, false);
		}
	};
	exports.Lexer = Lexer;
}));

//#endregion
//#region node_modules/yaml/dist/parse/line-counter.js
var require_line_counter = /* @__PURE__ */ __commonJSMin(((exports) => {
	/**
	* Tracks newlines during parsing in order to provide an efficient API for
	* determining the one-indexed `{ line, col }` position for any offset
	* within the input.
	*/
	var LineCounter = class {
		constructor() {
			this.lineStarts = [];
			/**
			* Should be called in ascending order. Otherwise, call
			* `lineCounter.lineStarts.sort()` before calling `linePos()`.
			*/
			this.addNewLine = (offset) => this.lineStarts.push(offset);
			/**
			* Performs a binary search and returns the 1-indexed { line, col }
			* position of `offset`. If `line === 0`, `addNewLine` has never been
			* called or `offset` is before the first known newline.
			*/
			this.linePos = (offset) => {
				let low = 0;
				let high = this.lineStarts.length;
				while (low < high) {
					const mid = low + high >> 1;
					if (this.lineStarts[mid] < offset) low = mid + 1;
					else high = mid;
				}
				if (this.lineStarts[low] === offset) return {
					line: low + 1,
					col: 1
				};
				if (low === 0) return {
					line: 0,
					col: offset
				};
				const start = this.lineStarts[low - 1];
				return {
					line: low,
					col: offset - start + 1
				};
			};
		}
	};
	exports.LineCounter = LineCounter;
}));

//#endregion
//#region node_modules/yaml/dist/parse/parser.js
var require_parser = /* @__PURE__ */ __commonJSMin(((exports) => {
	var node_process = __require("process");
	var cst$1 = require_cst();
	var lexer$1 = require_lexer();
	function includesToken(list$1, type) {
		for (let i = 0; i < list$1.length; ++i) if (list$1[i].type === type) return true;
		return false;
	}
	function findNonEmptyIndex(list$1) {
		for (let i = 0; i < list$1.length; ++i) switch (list$1[i].type) {
			case "space":
			case "comment":
			case "newline": break;
			default: return i;
		}
		return -1;
	}
	function isFlowToken(token) {
		switch (token?.type) {
			case "alias":
			case "scalar":
			case "single-quoted-scalar":
			case "double-quoted-scalar":
			case "flow-collection": return true;
			default: return false;
		}
	}
	function getPrevProps(parent) {
		switch (parent.type) {
			case "document": return parent.start;
			case "block-map": {
				const it = parent.items[parent.items.length - 1];
				return it.sep ?? it.start;
			}
			case "block-seq": return parent.items[parent.items.length - 1].start;
			default: return [];
		}
	}
	/** Note: May modify input array */
	function getFirstKeyStartProps(prev) {
		if (prev.length === 0) return [];
		let i = prev.length;
		loop: while (--i >= 0) switch (prev[i].type) {
			case "doc-start":
			case "explicit-key-ind":
			case "map-value-ind":
			case "seq-item-ind":
			case "newline": break loop;
		}
		while (prev[++i]?.type === "space");
		return prev.splice(i, prev.length);
	}
	function arrayPushArray(target, source) {
		if (source.length < 1e5) Array.prototype.push.apply(target, source);
		else for (let i = 0; i < source.length; ++i) target.push(source[i]);
	}
	function fixFlowSeqItems(fc) {
		if (fc.start.type === "flow-seq-start") {
			for (const it of fc.items) if (it.sep && !it.value && !includesToken(it.start, "explicit-key-ind") && !includesToken(it.sep, "map-value-ind")) {
				if (it.key) it.value = it.key;
				delete it.key;
				if (isFlowToken(it.value)) if (it.value.end) arrayPushArray(it.value.end, it.sep);
				else it.value.end = it.sep;
				else arrayPushArray(it.start, it.sep);
				delete it.sep;
			}
		}
	}
	/**
	* A YAML concrete syntax tree (CST) parser
	*
	* ```ts
	* const src: string = ...
	* for (const token of new Parser().parse(src)) {
	*   // token: Token
	* }
	* ```
	*
	* To use the parser with a user-provided lexer:
	*
	* ```ts
	* function* parse(source: string, lexer: Lexer) {
	*   const parser = new Parser()
	*   for (const lexeme of lexer.lex(source))
	*     yield* parser.next(lexeme)
	*   yield* parser.end()
	* }
	*
	* const src: string = ...
	* const lexer = new Lexer()
	* for (const token of parse(src, lexer)) {
	*   // token: Token
	* }
	* ```
	*/
	var Parser = class {
		/**
		* @param onNewLine - If defined, called separately with the start position of
		*   each new line (in `parse()`, including the start of input).
		*/
		constructor(onNewLine) {
			/** If true, space and sequence indicators count as indentation */
			this.atNewLine = true;
			/** If true, next token is a scalar value */
			this.atScalar = false;
			/** Current indentation level */
			this.indent = 0;
			/** Current offset since the start of parsing */
			this.offset = 0;
			/** On the same line with a block map key */
			this.onKeyLine = false;
			/** Top indicates the node that's currently being built */
			this.stack = [];
			/** The source of the current token, set in parse() */
			this.source = "";
			/** The type of the current token, set in parse() */
			this.type = "";
			this.lexer = new lexer$1.Lexer();
			this.onNewLine = onNewLine;
		}
		/**
		* Parse `source` as a YAML stream.
		* If `incomplete`, a part of the last line may be left as a buffer for the next call.
		*
		* Errors are not thrown, but yielded as `{ type: 'error', message }` tokens.
		*
		* @returns A generator of tokens representing each directive, document, and other structure.
		*/
		*parse(source, incomplete = false) {
			if (this.onNewLine && this.offset === 0) this.onNewLine(0);
			for (const lexeme of this.lexer.lex(source, incomplete)) yield* this.next(lexeme);
			if (!incomplete) yield* this.end();
		}
		/**
		* Advance the parser by the `source` of one lexical token.
		*/
		*next(source) {
			this.source = source;
			if (node_process.env.LOG_TOKENS) console.log("|", cst$1.prettyToken(source));
			if (this.atScalar) {
				this.atScalar = false;
				yield* this.step();
				this.offset += source.length;
				return;
			}
			const type = cst$1.tokenType(source);
			if (!type) {
				const message = `Not a YAML token: ${source}`;
				yield* this.pop({
					type: "error",
					offset: this.offset,
					message,
					source
				});
				this.offset += source.length;
			} else if (type === "scalar") {
				this.atNewLine = false;
				this.atScalar = true;
				this.type = "scalar";
			} else {
				this.type = type;
				yield* this.step();
				switch (type) {
					case "newline":
						this.atNewLine = true;
						this.indent = 0;
						if (this.onNewLine) this.onNewLine(this.offset + source.length);
						break;
					case "space":
						if (this.atNewLine && source[0] === " ") this.indent += source.length;
						break;
					case "explicit-key-ind":
					case "map-value-ind":
					case "seq-item-ind":
						if (this.atNewLine) this.indent += source.length;
						break;
					case "doc-mode":
					case "flow-error-end": return;
					default: this.atNewLine = false;
				}
				this.offset += source.length;
			}
		}
		/** Call at end of input to push out any remaining constructions */
		*end() {
			while (this.stack.length > 0) yield* this.pop();
		}
		get sourceToken() {
			return {
				type: this.type,
				offset: this.offset,
				indent: this.indent,
				source: this.source
			};
		}
		*step() {
			const top = this.peek(1);
			if (this.type === "doc-end" && top?.type !== "doc-end") {
				while (this.stack.length > 0) yield* this.pop();
				this.stack.push({
					type: "doc-end",
					offset: this.offset,
					source: this.source
				});
				return;
			}
			if (!top) return yield* this.stream();
			switch (top.type) {
				case "document": return yield* this.document(top);
				case "alias":
				case "scalar":
				case "single-quoted-scalar":
				case "double-quoted-scalar": return yield* this.scalar(top);
				case "block-scalar": return yield* this.blockScalar(top);
				case "block-map": return yield* this.blockMap(top);
				case "block-seq": return yield* this.blockSequence(top);
				case "flow-collection": return yield* this.flowCollection(top);
				case "doc-end": return yield* this.documentEnd(top);
			}
			/* istanbul ignore next should not happen */
			yield* this.pop();
		}
		peek(n) {
			return this.stack[this.stack.length - n];
		}
		*pop(error) {
			const token = error ?? this.stack.pop();
			/* istanbul ignore if should not happen */
			if (!token) yield {
				type: "error",
				offset: this.offset,
				source: "",
				message: "Tried to pop an empty stack"
			};
			else if (this.stack.length === 0) yield token;
			else {
				const top = this.peek(1);
				if (token.type === "block-scalar") token.indent = "indent" in top ? top.indent : 0;
				else if (token.type === "flow-collection" && top.type === "document") token.indent = 0;
				if (token.type === "flow-collection") fixFlowSeqItems(token);
				switch (top.type) {
					case "document":
						top.value = token;
						break;
					case "block-scalar":
						top.props.push(token);
						break;
					case "block-map": {
						const it = top.items[top.items.length - 1];
						if (it.value) {
							top.items.push({
								start: [],
								key: token,
								sep: []
							});
							this.onKeyLine = true;
							return;
						} else if (it.sep) it.value = token;
						else {
							Object.assign(it, {
								key: token,
								sep: []
							});
							this.onKeyLine = !it.explicitKey;
							return;
						}
						break;
					}
					case "block-seq": {
						const it = top.items[top.items.length - 1];
						if (it.value) top.items.push({
							start: [],
							value: token
						});
						else it.value = token;
						break;
					}
					case "flow-collection": {
						const it = top.items[top.items.length - 1];
						if (!it || it.value) top.items.push({
							start: [],
							key: token,
							sep: []
						});
						else if (it.sep) it.value = token;
						else Object.assign(it, {
							key: token,
							sep: []
						});
						return;
					}
					default:
						yield* this.pop();
						yield* this.pop(token);
				}
				if ((top.type === "document" || top.type === "block-map" || top.type === "block-seq") && (token.type === "block-map" || token.type === "block-seq")) {
					const last = token.items[token.items.length - 1];
					if (last && !last.sep && !last.value && last.start.length > 0 && findNonEmptyIndex(last.start) === -1 && (token.indent === 0 || last.start.every((st) => st.type !== "comment" || st.indent < token.indent))) {
						if (top.type === "document") top.end = last.start;
						else top.items.push({ start: last.start });
						token.items.splice(-1, 1);
					}
				}
			}
		}
		*stream() {
			switch (this.type) {
				case "directive-line":
					yield {
						type: "directive",
						offset: this.offset,
						source: this.source
					};
					return;
				case "byte-order-mark":
				case "space":
				case "comment":
				case "newline":
					yield this.sourceToken;
					return;
				case "doc-mode":
				case "doc-start": {
					const doc = {
						type: "document",
						offset: this.offset,
						start: []
					};
					if (this.type === "doc-start") doc.start.push(this.sourceToken);
					this.stack.push(doc);
					return;
				}
			}
			yield {
				type: "error",
				offset: this.offset,
				message: `Unexpected ${this.type} token in YAML stream`,
				source: this.source
			};
		}
		*document(doc) {
			if (doc.value) return yield* this.lineEnd(doc);
			switch (this.type) {
				case "doc-start":
					if (findNonEmptyIndex(doc.start) !== -1) {
						yield* this.pop();
						yield* this.step();
					} else doc.start.push(this.sourceToken);
					return;
				case "anchor":
				case "tag":
				case "space":
				case "comment":
				case "newline":
					doc.start.push(this.sourceToken);
					return;
			}
			const bv = this.startBlockValue(doc);
			if (bv) this.stack.push(bv);
			else yield {
				type: "error",
				offset: this.offset,
				message: `Unexpected ${this.type} token in YAML document`,
				source: this.source
			};
		}
		*scalar(scalar) {
			if (this.type === "map-value-ind") {
				const start = getFirstKeyStartProps(getPrevProps(this.peek(2)));
				let sep;
				if (scalar.end) {
					sep = scalar.end;
					sep.push(this.sourceToken);
					delete scalar.end;
				} else sep = [this.sourceToken];
				const map$7 = {
					type: "block-map",
					offset: scalar.offset,
					indent: scalar.indent,
					items: [{
						start,
						key: scalar,
						sep
					}]
				};
				this.onKeyLine = true;
				this.stack[this.stack.length - 1] = map$7;
			} else yield* this.lineEnd(scalar);
		}
		*blockScalar(scalar) {
			switch (this.type) {
				case "space":
				case "comment":
				case "newline":
					scalar.props.push(this.sourceToken);
					return;
				case "scalar":
					scalar.source = this.source;
					this.atNewLine = true;
					this.indent = 0;
					if (this.onNewLine) {
						let nl = this.source.indexOf("\n") + 1;
						while (nl !== 0) {
							this.onNewLine(this.offset + nl);
							nl = this.source.indexOf("\n", nl) + 1;
						}
					}
					yield* this.pop();
					break;
				default:
					yield* this.pop();
					yield* this.step();
			}
		}
		*blockMap(map$7) {
			const it = map$7.items[map$7.items.length - 1];
			switch (this.type) {
				case "newline":
					this.onKeyLine = false;
					if (it.value) {
						const end = "end" in it.value ? it.value.end : void 0;
						if ((Array.isArray(end) ? end[end.length - 1] : void 0)?.type === "comment") end?.push(this.sourceToken);
						else map$7.items.push({ start: [this.sourceToken] });
					} else if (it.sep) it.sep.push(this.sourceToken);
					else it.start.push(this.sourceToken);
					return;
				case "space":
				case "comment":
					if (it.value) map$7.items.push({ start: [this.sourceToken] });
					else if (it.sep) it.sep.push(this.sourceToken);
					else {
						if (this.atIndentedComment(it.start, map$7.indent)) {
							const end = map$7.items[map$7.items.length - 2]?.value?.end;
							if (Array.isArray(end)) {
								arrayPushArray(end, it.start);
								end.push(this.sourceToken);
								map$7.items.pop();
								return;
							}
						}
						it.start.push(this.sourceToken);
					}
					return;
			}
			if (this.indent >= map$7.indent) {
				const atMapIndent = !this.onKeyLine && this.indent === map$7.indent;
				const atNextItem = atMapIndent && (it.sep || it.explicitKey) && this.type !== "seq-item-ind";
				let start = [];
				if (atNextItem && it.sep && !it.value) {
					const nl = [];
					for (let i = 0; i < it.sep.length; ++i) {
						const st = it.sep[i];
						switch (st.type) {
							case "newline":
								nl.push(i);
								break;
							case "space": break;
							case "comment":
								if (st.indent > map$7.indent) nl.length = 0;
								break;
							default: nl.length = 0;
						}
					}
					if (nl.length >= 2) start = it.sep.splice(nl[1]);
				}
				switch (this.type) {
					case "anchor":
					case "tag":
						if (atNextItem || it.value) {
							start.push(this.sourceToken);
							map$7.items.push({ start });
							this.onKeyLine = true;
						} else if (it.sep) it.sep.push(this.sourceToken);
						else it.start.push(this.sourceToken);
						return;
					case "explicit-key-ind":
						if (!it.sep && !it.explicitKey) {
							it.start.push(this.sourceToken);
							it.explicitKey = true;
						} else if (atNextItem || it.value) {
							start.push(this.sourceToken);
							map$7.items.push({
								start,
								explicitKey: true
							});
						} else this.stack.push({
							type: "block-map",
							offset: this.offset,
							indent: this.indent,
							items: [{
								start: [this.sourceToken],
								explicitKey: true
							}]
						});
						this.onKeyLine = true;
						return;
					case "map-value-ind":
						if (it.explicitKey) if (!it.sep) if (includesToken(it.start, "newline")) Object.assign(it, {
							key: null,
							sep: [this.sourceToken]
						});
						else {
							const start$1 = getFirstKeyStartProps(it.start);
							this.stack.push({
								type: "block-map",
								offset: this.offset,
								indent: this.indent,
								items: [{
									start: start$1,
									key: null,
									sep: [this.sourceToken]
								}]
							});
						}
						else if (it.value) map$7.items.push({
							start: [],
							key: null,
							sep: [this.sourceToken]
						});
						else if (includesToken(it.sep, "map-value-ind")) this.stack.push({
							type: "block-map",
							offset: this.offset,
							indent: this.indent,
							items: [{
								start,
								key: null,
								sep: [this.sourceToken]
							}]
						});
						else if (isFlowToken(it.key) && !includesToken(it.sep, "newline")) {
							const start$1 = getFirstKeyStartProps(it.start);
							const key = it.key;
							const sep = it.sep;
							sep.push(this.sourceToken);
							delete it.key;
							delete it.sep;
							this.stack.push({
								type: "block-map",
								offset: this.offset,
								indent: this.indent,
								items: [{
									start: start$1,
									key,
									sep
								}]
							});
						} else if (start.length > 0) it.sep = it.sep.concat(start, this.sourceToken);
						else it.sep.push(this.sourceToken);
						else if (!it.sep) Object.assign(it, {
							key: null,
							sep: [this.sourceToken]
						});
						else if (it.value || atNextItem) map$7.items.push({
							start,
							key: null,
							sep: [this.sourceToken]
						});
						else if (includesToken(it.sep, "map-value-ind")) this.stack.push({
							type: "block-map",
							offset: this.offset,
							indent: this.indent,
							items: [{
								start: [],
								key: null,
								sep: [this.sourceToken]
							}]
						});
						else it.sep.push(this.sourceToken);
						this.onKeyLine = true;
						return;
					case "alias":
					case "scalar":
					case "single-quoted-scalar":
					case "double-quoted-scalar": {
						const fs$3 = this.flowScalar(this.type);
						if (atNextItem || it.value) {
							map$7.items.push({
								start,
								key: fs$3,
								sep: []
							});
							this.onKeyLine = true;
						} else if (it.sep) this.stack.push(fs$3);
						else {
							Object.assign(it, {
								key: fs$3,
								sep: []
							});
							this.onKeyLine = true;
						}
						return;
					}
					default: {
						const bv = this.startBlockValue(map$7);
						if (bv) {
							if (bv.type === "block-seq") {
								if (!it.explicitKey && it.sep && !includesToken(it.sep, "newline")) {
									yield* this.pop({
										type: "error",
										offset: this.offset,
										message: "Unexpected block-seq-ind on same line with key",
										source: this.source
									});
									return;
								}
							} else if (atMapIndent) map$7.items.push({ start });
							this.stack.push(bv);
							return;
						}
					}
				}
			}
			yield* this.pop();
			yield* this.step();
		}
		*blockSequence(seq$6) {
			const it = seq$6.items[seq$6.items.length - 1];
			switch (this.type) {
				case "newline":
					if (it.value) {
						const end = "end" in it.value ? it.value.end : void 0;
						if ((Array.isArray(end) ? end[end.length - 1] : void 0)?.type === "comment") end?.push(this.sourceToken);
						else seq$6.items.push({ start: [this.sourceToken] });
					} else it.start.push(this.sourceToken);
					return;
				case "space":
				case "comment":
					if (it.value) seq$6.items.push({ start: [this.sourceToken] });
					else {
						if (this.atIndentedComment(it.start, seq$6.indent)) {
							const end = seq$6.items[seq$6.items.length - 2]?.value?.end;
							if (Array.isArray(end)) {
								arrayPushArray(end, it.start);
								end.push(this.sourceToken);
								seq$6.items.pop();
								return;
							}
						}
						it.start.push(this.sourceToken);
					}
					return;
				case "anchor":
				case "tag":
					if (it.value || this.indent <= seq$6.indent) break;
					it.start.push(this.sourceToken);
					return;
				case "seq-item-ind":
					if (this.indent !== seq$6.indent) break;
					if (it.value || includesToken(it.start, "seq-item-ind")) seq$6.items.push({ start: [this.sourceToken] });
					else it.start.push(this.sourceToken);
					return;
			}
			if (this.indent > seq$6.indent) {
				const bv = this.startBlockValue(seq$6);
				if (bv) {
					this.stack.push(bv);
					return;
				}
			}
			yield* this.pop();
			yield* this.step();
		}
		*flowCollection(fc) {
			const it = fc.items[fc.items.length - 1];
			if (this.type === "flow-error-end") {
				let top;
				do {
					yield* this.pop();
					top = this.peek(1);
				} while (top?.type === "flow-collection");
			} else if (fc.end.length === 0) {
				switch (this.type) {
					case "comma":
					case "explicit-key-ind":
						if (!it || it.sep) fc.items.push({ start: [this.sourceToken] });
						else it.start.push(this.sourceToken);
						return;
					case "map-value-ind":
						if (!it || it.value) fc.items.push({
							start: [],
							key: null,
							sep: [this.sourceToken]
						});
						else if (it.sep) it.sep.push(this.sourceToken);
						else Object.assign(it, {
							key: null,
							sep: [this.sourceToken]
						});
						return;
					case "space":
					case "comment":
					case "newline":
					case "anchor":
					case "tag":
						if (!it || it.value) fc.items.push({ start: [this.sourceToken] });
						else if (it.sep) it.sep.push(this.sourceToken);
						else it.start.push(this.sourceToken);
						return;
					case "alias":
					case "scalar":
					case "single-quoted-scalar":
					case "double-quoted-scalar": {
						const fs$3 = this.flowScalar(this.type);
						if (!it || it.value) fc.items.push({
							start: [],
							key: fs$3,
							sep: []
						});
						else if (it.sep) this.stack.push(fs$3);
						else Object.assign(it, {
							key: fs$3,
							sep: []
						});
						return;
					}
					case "flow-map-end":
					case "flow-seq-end":
						fc.end.push(this.sourceToken);
						return;
				}
				const bv = this.startBlockValue(fc);
				/* istanbul ignore else should not happen */
				if (bv) this.stack.push(bv);
				else {
					yield* this.pop();
					yield* this.step();
				}
			} else {
				const parent = this.peek(2);
				if (parent.type === "block-map" && (this.type === "map-value-ind" && parent.indent === fc.indent || this.type === "newline" && !parent.items[parent.items.length - 1].sep)) {
					yield* this.pop();
					yield* this.step();
				} else if (this.type === "map-value-ind" && parent.type !== "flow-collection") {
					const start = getFirstKeyStartProps(getPrevProps(parent));
					fixFlowSeqItems(fc);
					const sep = fc.end.splice(1, fc.end.length);
					sep.push(this.sourceToken);
					const map$7 = {
						type: "block-map",
						offset: fc.offset,
						indent: fc.indent,
						items: [{
							start,
							key: fc,
							sep
						}]
					};
					this.onKeyLine = true;
					this.stack[this.stack.length - 1] = map$7;
				} else yield* this.lineEnd(fc);
			}
		}
		flowScalar(type) {
			if (this.onNewLine) {
				let nl = this.source.indexOf("\n") + 1;
				while (nl !== 0) {
					this.onNewLine(this.offset + nl);
					nl = this.source.indexOf("\n", nl) + 1;
				}
			}
			return {
				type,
				offset: this.offset,
				indent: this.indent,
				source: this.source
			};
		}
		startBlockValue(parent) {
			switch (this.type) {
				case "alias":
				case "scalar":
				case "single-quoted-scalar":
				case "double-quoted-scalar": return this.flowScalar(this.type);
				case "block-scalar-header": return {
					type: "block-scalar",
					offset: this.offset,
					indent: this.indent,
					props: [this.sourceToken],
					source: ""
				};
				case "flow-map-start":
				case "flow-seq-start": return {
					type: "flow-collection",
					offset: this.offset,
					indent: this.indent,
					start: this.sourceToken,
					items: [],
					end: []
				};
				case "seq-item-ind": return {
					type: "block-seq",
					offset: this.offset,
					indent: this.indent,
					items: [{ start: [this.sourceToken] }]
				};
				case "explicit-key-ind": {
					this.onKeyLine = true;
					const start = getFirstKeyStartProps(getPrevProps(parent));
					start.push(this.sourceToken);
					return {
						type: "block-map",
						offset: this.offset,
						indent: this.indent,
						items: [{
							start,
							explicitKey: true
						}]
					};
				}
				case "map-value-ind": {
					this.onKeyLine = true;
					const start = getFirstKeyStartProps(getPrevProps(parent));
					return {
						type: "block-map",
						offset: this.offset,
						indent: this.indent,
						items: [{
							start,
							key: null,
							sep: [this.sourceToken]
						}]
					};
				}
			}
			return null;
		}
		atIndentedComment(start, indent) {
			if (this.type !== "comment") return false;
			if (this.indent <= indent) return false;
			return start.every((st) => st.type === "newline" || st.type === "space");
		}
		*documentEnd(docEnd) {
			if (this.type !== "doc-mode") {
				if (docEnd.end) docEnd.end.push(this.sourceToken);
				else docEnd.end = [this.sourceToken];
				if (this.type === "newline") yield* this.pop();
			}
		}
		*lineEnd(token) {
			switch (this.type) {
				case "comma":
				case "doc-start":
				case "doc-end":
				case "flow-seq-end":
				case "flow-map-end":
				case "map-value-ind":
					yield* this.pop();
					yield* this.step();
					break;
				case "newline": this.onKeyLine = false;
				case "space":
				case "comment":
				default:
					if (token.end) token.end.push(this.sourceToken);
					else token.end = [this.sourceToken];
					if (this.type === "newline") yield* this.pop();
			}
		}
	};
	exports.Parser = Parser;
}));

//#endregion
//#region node_modules/yaml/dist/public-api.js
var require_public_api = /* @__PURE__ */ __commonJSMin(((exports) => {
	var composer$1 = require_composer();
	var Document$1 = require_Document();
	var errors$1 = require_errors();
	var log = require_log();
	var identity$1 = require_identity();
	var lineCounter$1 = require_line_counter();
	var parser$1 = require_parser();
	function parseOptions(options) {
		const prettyErrors = options.prettyErrors !== false;
		return {
			lineCounter: options.lineCounter || prettyErrors && new lineCounter$1.LineCounter() || null,
			prettyErrors
		};
	}
	/**
	* Parse the input as a stream of YAML documents.
	*
	* Documents should be separated from each other by `...` or `---` marker lines.
	*
	* @returns If an empty `docs` array is returned, it will be of type
	*   EmptyStream and contain additional stream information. In
	*   TypeScript, you should use `'empty' in docs` as a type guard for it.
	*/
	function parseAllDocuments(source, options = {}) {
		const { lineCounter: lineCounter$2, prettyErrors } = parseOptions(options);
		const parser$1$1 = new parser$1.Parser(lineCounter$2?.addNewLine);
		const composer$1$1 = new composer$1.Composer(options);
		const docs = Array.from(composer$1$1.compose(parser$1$1.parse(source)));
		if (prettyErrors && lineCounter$2) for (const doc of docs) {
			doc.errors.forEach(errors$1.prettifyError(source, lineCounter$2));
			doc.warnings.forEach(errors$1.prettifyError(source, lineCounter$2));
		}
		if (docs.length > 0) return docs;
		return Object.assign([], { empty: true }, composer$1$1.streamInfo());
	}
	/** Parse an input string into a single YAML.Document */
	function parseDocument(source, options = {}) {
		const { lineCounter: lineCounter$2, prettyErrors } = parseOptions(options);
		const parser$1$1 = new parser$1.Parser(lineCounter$2?.addNewLine);
		const composer$1$1 = new composer$1.Composer(options);
		let doc = null;
		for (const _doc of composer$1$1.compose(parser$1$1.parse(source), true, source.length)) if (!doc) doc = _doc;
		else if (doc.options.logLevel !== "silent") {
			doc.errors.push(new errors$1.YAMLParseError(_doc.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
			break;
		}
		if (prettyErrors && lineCounter$2) {
			doc.errors.forEach(errors$1.prettifyError(source, lineCounter$2));
			doc.warnings.forEach(errors$1.prettifyError(source, lineCounter$2));
		}
		return doc;
	}
	function parse$2(src, reviver, options) {
		let _reviver = void 0;
		if (typeof reviver === "function") _reviver = reviver;
		else if (options === void 0 && reviver && typeof reviver === "object") options = reviver;
		const doc = parseDocument(src, options);
		if (!doc) return null;
		doc.warnings.forEach((warning) => log.warn(doc.options.logLevel, warning));
		if (doc.errors.length > 0) if (doc.options.logLevel !== "silent") throw doc.errors[0];
		else doc.errors = [];
		return doc.toJS(Object.assign({ reviver: _reviver }, options));
	}
	function stringify(value, replacer, options) {
		let _replacer = null;
		if (typeof replacer === "function" || Array.isArray(replacer)) _replacer = replacer;
		else if (options === void 0 && replacer) options = replacer;
		if (typeof options === "string") options = options.length;
		if (typeof options === "number") {
			const indent = Math.round(options);
			options = indent < 1 ? void 0 : indent > 8 ? { indent: 8 } : { indent };
		}
		if (value === void 0) {
			const { keepUndefined } = options ?? replacer ?? {};
			if (!keepUndefined) return void 0;
		}
		if (identity$1.isDocument(value) && !_replacer) return value.toString(options);
		return new Document$1.Document(value, _replacer, options).toString(options);
	}
	exports.parse = parse$2;
	exports.parseAllDocuments = parseAllDocuments;
	exports.parseDocument = parseDocument;
	exports.stringify = stringify;
}));

//#endregion
//#region node_modules/yaml/dist/index.js
var require_dist = /* @__PURE__ */ __commonJSMin(((exports) => {
	var composer = require_composer();
	var Document = require_Document();
	var Schema = require_Schema();
	var errors = require_errors();
	var Alias = require_Alias();
	var identity = require_identity();
	var Pair = require_Pair();
	var Scalar = require_Scalar();
	var YAMLMap = require_YAMLMap();
	var YAMLSeq = require_YAMLSeq();
	var cst = require_cst();
	var lexer = require_lexer();
	var lineCounter = require_line_counter();
	var parser = require_parser();
	var publicApi = require_public_api();
	var visit = require_visit();
	exports.Composer = composer.Composer;
	exports.Document = Document.Document;
	exports.Schema = Schema.Schema;
	exports.YAMLError = errors.YAMLError;
	exports.YAMLParseError = errors.YAMLParseError;
	exports.YAMLWarning = errors.YAMLWarning;
	exports.Alias = Alias.Alias;
	exports.isAlias = identity.isAlias;
	exports.isCollection = identity.isCollection;
	exports.isDocument = identity.isDocument;
	exports.isMap = identity.isMap;
	exports.isNode = identity.isNode;
	exports.isPair = identity.isPair;
	exports.isScalar = identity.isScalar;
	exports.isSeq = identity.isSeq;
	exports.Pair = Pair.Pair;
	exports.Scalar = Scalar.Scalar;
	exports.YAMLMap = YAMLMap.YAMLMap;
	exports.YAMLSeq = YAMLSeq.YAMLSeq;
	exports.Lexer = lexer.Lexer;
	exports.LineCounter = lineCounter.LineCounter;
	exports.Parser = parser.Parser;
	exports.parse = publicApi.parse;
	exports.parseAllDocuments = publicApi.parseAllDocuments;
	exports.parseDocument = publicApi.parseDocument;
	exports.stringify = publicApi.stringify;
	exports.visit = visit.visit;
	exports.visitAsync = visit.visitAsync;
}));

//#endregion
//#region node_modules/incur/dist/Completions.js
/**
* Generates a shell hook script that registers dynamic completions for the CLI.
* The hook calls back into the binary with `COMPLETE=<shell>` at every tab press.
*/
function register$1(shell, name) {
	switch (shell) {
		case "bash": return bashRegister(name);
		case "zsh": return zshRegister(name);
		case "fish": return fishRegister(name);
		case "nushell": return nushellRegister(name);
	}
}
/**
* Computes completion candidates for the given argv words and cursor index.
* Walks the command tree to resolve the active command, then suggests
* subcommands, options, or positional argument hints.
*/
function complete(commands, rootCommand, argv, index$1) {
	const current = argv[index$1] ?? "";
	let scope = {
		commands,
		leaf: rootCommand
	};
	for (let i = 0; i < index$1; i++) {
		const token = argv[i];
		if (token.startsWith("-")) continue;
		let entry = scope.commands.get(token);
		if (!entry) continue;
		if (entry._alias && entry.target) entry = scope.commands.get(entry.target);
		if (!entry) continue;
		if (entry._group && entry.commands) scope = { commands: entry.commands };
		else {
			scope = {
				commands: /* @__PURE__ */ new Map(),
				leaf: entry
			};
			break;
		}
	}
	const candidates = [];
	if (current.startsWith("-")) {
		const leaf = scope.leaf;
		if (leaf?.options) {
			const shape = leaf.options.shape;
			for (const key of Object.keys(shape)) {
				const flag = `--${key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)}`;
				if (flag.startsWith(current)) candidates.push({
					value: flag,
					description: descriptionOf(shape[key])
				});
			}
			if (leaf.alias) for (const [name, short] of Object.entries(leaf.alias)) {
				const flag = `-${short}`;
				if (flag.startsWith(current)) {
					const desc = descriptionOf(shape[name]);
					candidates.push({
						value: flag,
						description: desc
					});
				}
			}
		}
		return candidates;
	}
	if (index$1 > 0) {
		const prev = argv[index$1 - 1];
		const leaf = scope.leaf;
		if (leaf?.options && prev.startsWith("-")) {
			const name = resolveOptionName(prev, leaf);
			if (name) {
				const values = possibleValues(name, leaf.options);
				if (values) {
					for (const v of values) if (v.startsWith(current)) candidates.push({ value: v });
					return candidates;
				}
				if (!isBooleanOption$1(name, leaf.options)) return candidates;
			}
		}
	}
	for (const [name, entry] of scope.commands) {
		if (entry._alias) continue;
		if (name.startsWith(current)) candidates.push({
			value: name,
			description: entry.description,
			...entry._group ? { noSpace: true } : void 0
		});
	}
	return candidates;
}
/**
* Formats completion candidates into shell-specific output.
* - bash: `\013`-separated values (noSpace candidates end with `\001`)
* - zsh: `value:description` newline-separated (`:` escaped in values)
* - fish: `value\tdescription` newline-separated
* - nushell: JSON array of `{value, description}` records
*/
function format$1(shell, candidates) {
	switch (shell) {
		case "bash": return candidates.map((c) => c.noSpace ? `${c.value}\x01` : c.value).join("\v");
		case "zsh": return candidates.map((c) => {
			const escaped = c.value.replaceAll(":", "\\:");
			return c.description ? `${escaped}:${c.description}` : escaped;
		}).join("\n");
		case "fish": return candidates.map((c) => c.description ? `${c.value}\t${c.description}` : c.value).join("\n");
		case "nushell": {
			const records = candidates.map((c) => {
				const record$1 = { value: c.value };
				if (c.description) record$1.description = c.description;
				return record$1;
			});
			return JSON.stringify(records);
		}
	}
}
/** @internal Resolves a flag token (e.g. `--foo-bar` or `-f`) to its camelCase option name. */
function resolveOptionName(token, entry) {
	if (!entry.options) return void 0;
	const known = new Set(Object.keys(entry.options.shape));
	const kebabToCamel = /* @__PURE__ */ new Map();
	for (const name of known) {
		const kebab = name.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
		if (kebab !== name) kebabToCamel.set(kebab, name);
	}
	if (token.startsWith("--")) {
		const raw$1 = token.slice(2);
		const name = kebabToCamel.get(raw$1) ?? raw$1;
		return known.has(name) ? name : void 0;
	}
	if (token.startsWith("-") && token.length === 2 && entry.alias) {
		const short = token.slice(1);
		for (const [name, alias] of Object.entries(entry.alias)) if (alias === short) return name;
	}
}
/** @internal Checks if an option's inner type is boolean or count. */
function isBooleanOption$1(name, schema$6) {
	const field = schema$6.shape[name];
	if (!field) return false;
	if (typeof field.meta === "function" && field.meta()?.count === true) return true;
	return unwrap$2(field).constructor.name === "ZodBoolean";
}
/** @internal Extracts possible values from enum schemas. */
function possibleValues(name, schema$6) {
	const field = schema$6.shape[name];
	if (!field) return void 0;
	const inner = unwrap$2(field);
	if (inner.constructor.name === "ZodEnum") return Object.values(inner._zod.def.entries);
	if (inner.constructor.name === "ZodNativeEnum") return Object.keys(inner._zod.def.values);
}
/** @internal Unwraps ZodDefault/ZodOptional to get the inner type. */
function unwrap$2(schema$6) {
	let s = schema$6;
	while (s._zod?.def?.innerType) s = s._zod.def.innerType;
	return s;
}
/** @internal Extracts a description from a Zod schema's metadata. */
function descriptionOf(schema$6) {
	if (!schema$6) return void 0;
	return schema$6.description;
}
/** @internal Sanitizes a CLI name into a valid shell identifier. */
function ident(name) {
	return name.replace(/[^a-zA-Z0-9_]/g, "_");
}
function bashRegister(name) {
	const id = ident(name);
	return `_incur_complete_${id}() {
    local IFS=$'\\013'
    local _COMPLETE_INDEX=\${COMP_CWORD}
    local _completions
    _completions=( $(
        export COMPLETE="bash"
        export _COMPLETE_INDEX="$_COMPLETE_INDEX"
        "${name}" -- "\${COMP_WORDS[@]}"
    ) )
    if [[ $? != 0 ]]; then
        unset COMPREPLY
        return
    fi
    local _nospace=false
    COMPREPLY=()
    for _c in "\${_completions[@]}"; do
        if [[ "$_c" == *$'\\001' ]]; then
            _nospace=true
            COMPREPLY+=("\${_c%$'\\001'}")
        else
            COMPREPLY+=("$_c")
        fi
    done
    if [[ $_nospace == true ]]; then
        compopt -o nospace
    fi
}
complete -o default -o bashdefault -o nosort -F _incur_complete_${id} ${name}`;
}
function zshRegister(name) {
	const id = ident(name);
	return `#compdef ${name}
_incur_complete_${id}() {
    local completions=("\${(@f)$(
        export _COMPLETE_INDEX=$(( CURRENT - 1 ))
        export COMPLETE="zsh"
        "${name}" -- "\${words[@]}" 2>/dev/null
    )}")
    if [[ -n $completions ]]; then
        _describe 'values' completions -S ''
    fi
}
compdef _incur_complete_${id} ${name}`;
}
function fishRegister(name) {
	return `complete --keep-order --exclusive --command ${name} \\
    --arguments "(COMPLETE=fish ${name} -- (commandline --current-process --tokenize --cut-at-cursor) (commandline --current-token))"`;
}
function nushellRegister(name) {
	return `# External completer for ${name}
# Add to $env.config.completions.external.completer or use in a dispatch completer.
let _incur_complete_${ident(name)} = {|spans|
    COMPLETE=nushell ${name} -- ...$spans | from json
}`;
}

//#endregion
//#region node_modules/incur/dist/Errors.js
/** Base error with shortMessage, details from cause chain, and walk(). */
var BaseError = class extends Error {
	name = "Incur.BaseError";
	/** The short, human-readable error message (without details). */
	shortMessage;
	/** Details extracted from the cause's message, if any. */
	details;
	constructor(shortMessage, options = {}) {
		const details = options.cause instanceof Error ? options.cause.message : void 0;
		const message = details ? `${shortMessage}\n\nDetails: ${details}` : shortMessage;
		super(message, options.cause ? { cause: options.cause } : void 0);
		this.shortMessage = shortMessage;
		this.details = details;
	}
	/**
	* Traverses the cause chain.
	* Without a callback, returns the deepest cause.
	* With a callback, returns the first cause where `fn` returns `true`.
	*/
	walk(fn) {
		return walk$1(this, fn);
	}
};
/** CLI error with code, hint, and retryable flag. */
var IncurError = class extends BaseError {
	name = "Incur.IncurError";
	/** Machine-readable error code (e.g. `'NOT_AUTHENTICATED'`). */
	code;
	/** Actionable hint for the user. */
	hint;
	/** Whether the operation can be retried. */
	retryable;
	/** Process exit code. When set, `serve()` uses this instead of `1`. */
	exitCode;
	constructor(options) {
		super(options.message, options.cause ? { cause: options.cause } : void 0);
		this.code = options.code;
		this.hint = options.hint;
		this.retryable = options.retryable ?? false;
		this.exitCode = options.exitCode;
	}
};
/** Validation error with per-field error details. */
var ValidationError = class extends BaseError {
	name = "Incur.ValidationError";
	/** Per-field validation errors. */
	fieldErrors;
	constructor(options) {
		super(options.message, options.cause ? { cause: options.cause } : void 0);
		this.fieldErrors = options.fieldErrors ?? [];
	}
};
/** Error thrown when argument parsing fails (unknown flags, missing values). */
var ParseError = class extends BaseError {
	name = "Incur.ParseError";
	constructor(options) {
		super(options.message, options.cause ? { cause: options.cause } : void 0);
	}
};
/** Walks the cause chain, returning the deepest cause or the first matching cause. */
function walk$1(error, fn) {
	if (fn) {
		let current$1 = error?.cause;
		while (current$1) {
			if (fn(current$1)) return current$1;
			current$1 = current$1?.cause;
		}
		return;
	}
	let current = error;
	while (current?.cause) current = current.cause;
	return current;
}

//#endregion
//#region node_modules/incur/dist/Fetch.js
/** Reserved flags consumed by the fetch gateway (not forwarded as query params). */
const reservedFlags = new Set([
	"method",
	"body",
	"data",
	"header"
]);
const reservedShort = {
	X: "method",
	d: "data",
	H: "header"
};
/** Parses curl-style argv into a structured fetch input. */
function parseArgv(argv) {
	const segments = [];
	const headers = new Headers();
	const query = new URLSearchParams();
	let method;
	let body;
	let i = 0;
	while (i < argv.length) {
		const token = argv[i];
		if (token.startsWith("--")) {
			const eqIdx = token.indexOf("=");
			if (eqIdx !== -1) {
				const key = token.slice(2, eqIdx);
				const value = token.slice(eqIdx + 1);
				if (reservedFlags.has(key)) handleReserved(key, value);
				else query.set(key, value);
				i++;
			} else {
				const key = token.slice(2);
				const value = argv[i + 1];
				if (value === void 0) throw new Error(`Missing value for --${key}`);
				if (reservedFlags.has(key)) handleReserved(key, value);
				else query.set(key, value);
				i += 2;
			}
		} else if (token.startsWith("-") && token.length === 2) {
			const short = token[1];
			const mapped = reservedShort[short];
			if (mapped) {
				const value = argv[i + 1];
				if (value === void 0) throw new Error(`Missing value for -${short}`);
				handleReserved(mapped, value);
				i += 2;
			} else i++;
		} else {
			segments.push(token);
			i++;
		}
	}
	function handleReserved(key, value) {
		if (key === "method") method = value.toUpperCase();
		else if (key === "body" || key === "data") body = value;
		else if (key === "header") {
			const colonIdx = value.indexOf(":");
			if (colonIdx !== -1) {
				const name = value.slice(0, colonIdx).trim();
				const val = value.slice(colonIdx + 1).trim();
				headers.set(name, val);
			}
		}
	}
	return {
		path: segments.length > 0 ? `/${segments.join("/")}` : "/",
		method: method ?? (body !== void 0 ? "POST" : "GET"),
		headers,
		body,
		query
	};
}
/** Constructs a standard Request from a FetchInput. */
function buildRequest(input) {
	const url$1 = new URL(input.path, "http://localhost");
	input.query.forEach((value, key) => url$1.searchParams.set(key, value));
	const init = {
		method: input.method,
		headers: input.headers
	};
	if (input.body !== void 0) {
		init.body = input.body;
		if (!input.headers.has("content-type")) input.headers.set("content-type", "application/json");
	}
	return new Request(url$1.toString(), init);
}
/** Returns true if the response body is a stream that should be consumed incrementally. */
function isStreamingResponse(response) {
	return response.body !== null && response.headers.get("content-type") === "application/x-ndjson";
}
/** Parses a streaming response body as an async generator of parsed NDJSON chunks. */
async function* parseStreamingResponse(response) {
	const reader = response.body.getReader();
	const decoder = new TextDecoder();
	let buffer = "";
	while (true) {
		const { value, done } = await reader.read();
		if (done) break;
		buffer += decoder.decode(value, { stream: true });
		let newlineIdx;
		while ((newlineIdx = buffer.indexOf("\n")) !== -1) {
			const line = buffer.slice(0, newlineIdx).trim();
			buffer = buffer.slice(newlineIdx + 1);
			if (line.length === 0) continue;
			try {
				yield JSON.parse(line);
			} catch {
				yield line;
			}
		}
	}
	const remaining = buffer.trim();
	if (remaining.length > 0) try {
		yield JSON.parse(remaining);
	} catch {
		yield remaining;
	}
}
/** Parses a fetch Response into structured output. */
async function parseResponse(response) {
	const text = await response.text();
	let data;
	try {
		data = JSON.parse(text);
	} catch {
		data = text;
	}
	return {
		ok: response.ok,
		status: response.status,
		data,
		headers: response.headers
	};
}

//#endregion
//#region node_modules/incur/dist/Filter.js
/** Parses a filter expression string into structured filter paths. */
function parse$1(expression) {
	const paths = [];
	const tokens = [];
	let current = "";
	let depth = 0;
	for (let i = 0; i < expression.length; i++) {
		const ch = expression[i];
		if (ch === "[") depth++;
		else if (ch === "]") depth--;
		if (ch === "," && depth === 0) {
			tokens.push(current);
			current = "";
		} else current += ch;
	}
	if (current) tokens.push(current);
	for (const token of tokens) {
		const path$2 = [];
		let remaining = token;
		while (remaining.length > 0) {
			const bracketIdx = remaining.indexOf("[");
			if (bracketIdx === -1) {
				for (const part of remaining.split(".")) if (part) path$2.push({ key: part });
				break;
			}
			const before = remaining.slice(0, bracketIdx);
			for (const part of before.split(".")) if (part) path$2.push({ key: part });
			const closeBracket = remaining.indexOf("]", bracketIdx);
			const [startStr, endStr] = remaining.slice(bracketIdx + 1, closeBracket).split(",");
			path$2.push({
				start: Number(startStr),
				end: Number(endStr)
			});
			remaining = remaining.slice(closeBracket + 1);
			if (remaining.startsWith(".")) remaining = remaining.slice(1);
		}
		paths.push(path$2);
	}
	return paths;
}
/** Applies parsed filter paths to a data value, returning a filtered copy. */
function apply(data, paths) {
	if (paths.length === 0) return data;
	if (paths.length === 1 && paths[0].length === 1 && "key" in paths[0][0]) {
		const key = paths[0][0].key;
		if (Array.isArray(data)) return data.map((item) => apply(item, paths));
		if (typeof data === "object" && data !== null) {
			const val = data[key];
			if (typeof val !== "object" || val === null) return val;
			return { [key]: val };
		}
		return;
	}
	if (Array.isArray(data)) return data.map((item) => apply(item, paths));
	const result = {};
	for (const path$2 of paths) merge(result, data, path$2, 0);
	return result;
}
function merge(target, data, segments, index$1) {
	if (index$1 >= segments.length || typeof data !== "object" || data === null) return;
	const segment = segments[index$1];
	if ("key" in segment) {
		const val = data[segment.key];
		if (val === void 0) return;
		if (index$1 + 1 >= segments.length) {
			target[segment.key] = val;
			return;
		}
		const next = segments[index$1 + 1];
		if ("start" in next) {
			if (!Array.isArray(val)) return;
			const sliced = val.slice(next.start, next.end);
			if (index$1 + 2 >= segments.length) {
				target[segment.key] = sliced;
				return;
			}
			target[segment.key] = sliced.map((item) => {
				const sub = {};
				merge(sub, item, segments, index$1 + 2);
				return sub;
			});
			return;
		}
		if (typeof val !== "object" || val === null) return;
		if (!target[segment.key] || typeof target[segment.key] !== "object") target[segment.key] = {};
		merge(target[segment.key], val, segments, index$1 + 1);
		return;
	}
}

//#endregion
//#region node_modules/@toon-format/toon/dist/index.mjs
const NULL_LITERAL = "null";
const DELIMITERS = {
	comma: ",",
	tab: "	",
	pipe: "|"
};
const DEFAULT_DELIMITER = DELIMITERS.comma;
/**
* Escapes special characters in a string for encoding.
*
* @remarks
* Handles backslashes, quotes, newlines, carriage returns, and tabs.
*/
function escapeString(value) {
	return value.replace(/\\/g, `\\\\`).replace(/"/g, `\\"`).replace(/\n/g, `\\n`).replace(/\r/g, `\\r`).replace(/\t/g, `\\t`);
}
function isBooleanOrNullLiteral(token) {
	return token === "true" || token === "false" || token === "null";
}
function normalizeValue(value) {
	if (value === null) return null;
	if (typeof value === "object" && value !== null && "toJSON" in value && typeof value.toJSON === "function") {
		const next = value.toJSON();
		if (next !== value) return normalizeValue(next);
	}
	if (typeof value === "string" || typeof value === "boolean") return value;
	if (typeof value === "number") {
		if (Object.is(value, -0)) return 0;
		if (!Number.isFinite(value)) return null;
		return value;
	}
	if (typeof value === "bigint") {
		if (value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER) return Number(value);
		return value.toString();
	}
	if (value instanceof Date) return value.toISOString();
	if (Array.isArray(value)) return value.map(normalizeValue);
	if (value instanceof Set) return Array.from(value).map(normalizeValue);
	if (value instanceof Map) return Object.fromEntries(Array.from(value, ([k, v]) => [String(k), normalizeValue(v)]));
	if (isPlainObject(value)) {
		const encodedValues = {};
		for (const key in value) if (Object.hasOwn(value, key)) encodedValues[key] = normalizeValue(value[key]);
		return encodedValues;
	}
	return null;
}
function isJsonPrimitive(value) {
	return value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}
function isJsonArray(value) {
	return Array.isArray(value);
}
function isJsonObject(value) {
	return value !== null && typeof value === "object" && !Array.isArray(value);
}
function isEmptyObject(value) {
	return Object.keys(value).length === 0;
}
function isPlainObject(value) {
	if (value === null || typeof value !== "object") return false;
	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
}
function isArrayOfPrimitives(value) {
	return value.length === 0 || value.every((item) => isJsonPrimitive(item));
}
function isArrayOfArrays(value) {
	return value.length === 0 || value.every((item) => isJsonArray(item));
}
function isArrayOfObjects$1(value) {
	return value.length === 0 || value.every((item) => isJsonObject(item));
}
const NUMERIC_LIKE_PATTERN = /^-?\d+(?:\.\d+)?(?:e[+-]?\d+)?$/i;
const LEADING_ZERO_PATTERN = /^0\d+$/;
/**
* Checks if a key can be used without quotes.
*
* @remarks
* Valid unquoted keys must start with a letter or underscore,
* followed by letters, digits, underscores, or dots.
*/
function isValidUnquotedKey(key) {
	return /^[A-Z_][\w.]*$/i.test(key);
}
/**
* Checks if a key segment is a valid identifier for safe folding/expansion.
*
* @remarks
* Identifier segments are more restrictive than unquoted keys:
* - Must start with a letter or underscore
* - Followed only by letters, digits, or underscores (no dots)
* - Used for safe key folding and path expansion
*/
function isIdentifierSegment(key) {
	return /^[A-Z_]\w*$/i.test(key);
}
/**
* Determines if a string value can be safely encoded without quotes.
*
* @remarks
* A string needs quoting if it:
* - Is empty
* - Has leading or trailing whitespace
* - Could be confused with a literal (boolean, null, number)
* - Contains structural characters (colons, brackets, braces)
* - Contains quotes or backslashes (need escaping)
* - Contains control characters (newlines, tabs, etc.)
* - Contains the active delimiter
* - Starts with a list marker (hyphen)
*/
function isSafeUnquoted(value, delimiter = DEFAULT_DELIMITER) {
	if (!value) return false;
	if (value !== value.trim()) return false;
	if (isBooleanOrNullLiteral(value) || isNumericLike(value)) return false;
	if (value.includes(":")) return false;
	if (value.includes("\"") || value.includes("\\")) return false;
	if (/[[\]{}]/.test(value)) return false;
	if (/[\n\r\t]/.test(value)) return false;
	if (value.includes(delimiter)) return false;
	if (value.startsWith("-")) return false;
	return true;
}
/**
* Checks if a string looks like a number.
*
* @remarks
* Match numbers like `42`, `-3.14`, `1e-6`, `05`, etc.
*/
function isNumericLike(value) {
	return NUMERIC_LIKE_PATTERN.test(value) || LEADING_ZERO_PATTERN.test(value);
}
/**
* Attempts to fold a single-key object chain into a dotted path.
*
* @remarks
* Folding traverses nested objects with single keys, collapsing them into a dotted path.
* It stops when:
* - A non-single-key object is encountered
* - An array is encountered (arrays are not "single-key objects")
* - A primitive value is reached
* - The flatten depth limit is reached
* - Any segment fails safe mode validation
*
* Safe mode requirements:
* - `options.keyFolding` must be `'safe'`
* - Every segment must be a valid identifier (no dots, no special chars)
* - The folded key must not collide with existing sibling keys
* - No segment should require quoting
*
* @param key - The starting key to fold
* @param value - The value associated with the key
* @param siblings - Array of all sibling keys at this level (for collision detection)
* @param options - Resolved encoding options
* @returns A FoldResult if folding is possible, undefined otherwise
*/
function tryFoldKeyChain(key, value, siblings, options, rootLiteralKeys, pathPrefix, flattenDepth) {
	if (options.keyFolding !== "safe") return;
	if (!isJsonObject(value)) return;
	const { segments, tail, leafValue } = collectSingleKeyChain(key, value, flattenDepth ?? options.flattenDepth);
	if (segments.length < 2) return;
	if (!segments.every((seg) => isIdentifierSegment(seg))) return;
	const foldedKey = buildFoldedKey(segments);
	const absolutePath = pathPrefix ? `${pathPrefix}.${foldedKey}` : foldedKey;
	if (siblings.includes(foldedKey)) return;
	if (rootLiteralKeys && rootLiteralKeys.has(absolutePath)) return;
	return {
		foldedKey,
		remainder: tail,
		leafValue,
		segmentCount: segments.length
	};
}
/**
* Collects a chain of single-key objects into segments.
*
* @remarks
* Traverses nested objects, collecting keys until:
* - A non-single-key object is found
* - An array is encountered
* - A primitive is reached
* - An empty object is reached
* - The depth limit is reached
*
* @param startKey - The initial key to start the chain
* @param startValue - The value to traverse
* @param maxDepth - Maximum number of segments to collect
* @returns Object containing segments array, tail value, and leaf value
*/
function collectSingleKeyChain(startKey, startValue, maxDepth) {
	const segments = [startKey];
	let currentValue = startValue;
	while (segments.length < maxDepth) {
		if (!isJsonObject(currentValue)) break;
		const keys = Object.keys(currentValue);
		if (keys.length !== 1) break;
		const nextKey = keys[0];
		const nextValue = currentValue[nextKey];
		segments.push(nextKey);
		currentValue = nextValue;
	}
	if (!isJsonObject(currentValue) || isEmptyObject(currentValue)) return {
		segments,
		tail: void 0,
		leafValue: currentValue
	};
	return {
		segments,
		tail: currentValue,
		leafValue: currentValue
	};
}
function buildFoldedKey(segments) {
	return segments.join(".");
}
function encodePrimitive(value, delimiter) {
	if (value === null) return NULL_LITERAL;
	if (typeof value === "boolean") return String(value);
	if (typeof value === "number") return String(value);
	return encodeStringLiteral(value, delimiter);
}
function encodeStringLiteral(value, delimiter = DEFAULT_DELIMITER) {
	if (isSafeUnquoted(value, delimiter)) return value;
	return `"${escapeString(value)}"`;
}
function encodeKey(key) {
	if (isValidUnquotedKey(key)) return key;
	return `"${escapeString(key)}"`;
}
function encodeAndJoinPrimitives(values, delimiter = DEFAULT_DELIMITER) {
	return values.map((v) => encodePrimitive(v, delimiter)).join(delimiter);
}
function formatHeader(length, options) {
	const key = options?.key;
	const fields = options?.fields;
	const delimiter = options?.delimiter ?? ",";
	let header = "";
	if (key != null) header += encodeKey(key);
	header += `[${length}${delimiter !== DEFAULT_DELIMITER ? delimiter : ""}]`;
	if (fields) {
		const quotedFields = fields.map((f) => encodeKey(f));
		header += `{${quotedFields.join(delimiter)}}`;
	}
	header += ":";
	return header;
}
function* encodeJsonValue(value, options, depth) {
	if (isJsonPrimitive(value)) {
		const encodedPrimitive = encodePrimitive(value, options.delimiter);
		if (encodedPrimitive !== "") yield encodedPrimitive;
		return;
	}
	if (isJsonArray(value)) yield* encodeArrayLines(void 0, value, depth, options);
	else if (isJsonObject(value)) yield* encodeObjectLines(value, depth, options);
}
function* encodeObjectLines(value, depth, options, rootLiteralKeys, pathPrefix, remainingDepth) {
	const keys = Object.keys(value);
	if (depth === 0 && !rootLiteralKeys) rootLiteralKeys = new Set(keys.filter((k) => k.includes(".")));
	const effectiveFlattenDepth = remainingDepth ?? options.flattenDepth;
	for (const [key, val] of Object.entries(value)) yield* encodeKeyValuePairLines(key, val, depth, options, keys, rootLiteralKeys, pathPrefix, effectiveFlattenDepth);
}
function* encodeKeyValuePairLines(key, value, depth, options, siblings, rootLiteralKeys, pathPrefix, flattenDepth) {
	const currentPath = pathPrefix ? `${pathPrefix}.${key}` : key;
	const effectiveFlattenDepth = flattenDepth ?? options.flattenDepth;
	if (options.keyFolding === "safe" && siblings) {
		const foldResult = tryFoldKeyChain(key, value, siblings, options, rootLiteralKeys, pathPrefix, effectiveFlattenDepth);
		if (foldResult) {
			const { foldedKey, remainder, leafValue, segmentCount } = foldResult;
			const encodedFoldedKey = encodeKey(foldedKey);
			if (remainder === void 0) {
				if (isJsonPrimitive(leafValue)) {
					yield indentedLine(depth, `${encodedFoldedKey}: ${encodePrimitive(leafValue, options.delimiter)}`, options.indent);
					return;
				} else if (isJsonArray(leafValue)) {
					yield* encodeArrayLines(foldedKey, leafValue, depth, options);
					return;
				} else if (isJsonObject(leafValue) && isEmptyObject(leafValue)) {
					yield indentedLine(depth, `${encodedFoldedKey}:`, options.indent);
					return;
				}
			}
			if (isJsonObject(remainder)) {
				yield indentedLine(depth, `${encodedFoldedKey}:`, options.indent);
				const remainingDepth = effectiveFlattenDepth - segmentCount;
				const foldedPath = pathPrefix ? `${pathPrefix}.${foldedKey}` : foldedKey;
				yield* encodeObjectLines(remainder, depth + 1, options, rootLiteralKeys, foldedPath, remainingDepth);
				return;
			}
		}
	}
	const encodedKey = encodeKey(key);
	if (isJsonPrimitive(value)) yield indentedLine(depth, `${encodedKey}: ${encodePrimitive(value, options.delimiter)}`, options.indent);
	else if (isJsonArray(value)) yield* encodeArrayLines(key, value, depth, options);
	else if (isJsonObject(value)) {
		yield indentedLine(depth, `${encodedKey}:`, options.indent);
		if (!isEmptyObject(value)) yield* encodeObjectLines(value, depth + 1, options, rootLiteralKeys, currentPath, effectiveFlattenDepth);
	}
}
function* encodeArrayLines(key, value, depth, options) {
	if (value.length === 0) {
		yield indentedLine(depth, formatHeader(0, {
			key,
			delimiter: options.delimiter
		}), options.indent);
		return;
	}
	if (isArrayOfPrimitives(value)) {
		yield indentedLine(depth, encodeInlineArrayLine(value, options.delimiter, key), options.indent);
		return;
	}
	if (isArrayOfArrays(value)) {
		if (value.every((arr) => isArrayOfPrimitives(arr))) {
			yield* encodeArrayOfArraysAsListItemsLines(key, value, depth, options);
			return;
		}
	}
	if (isArrayOfObjects$1(value)) {
		const header = extractTabularHeader(value);
		if (header) yield* encodeArrayOfObjectsAsTabularLines(key, value, header, depth, options);
		else yield* encodeMixedArrayAsListItemsLines(key, value, depth, options);
		return;
	}
	yield* encodeMixedArrayAsListItemsLines(key, value, depth, options);
}
function* encodeArrayOfArraysAsListItemsLines(prefix, values, depth, options) {
	yield indentedLine(depth, formatHeader(values.length, {
		key: prefix,
		delimiter: options.delimiter
	}), options.indent);
	for (const arr of values) if (isArrayOfPrimitives(arr)) {
		const arrayLine = encodeInlineArrayLine(arr, options.delimiter);
		yield indentedListItem(depth + 1, arrayLine, options.indent);
	}
}
function encodeInlineArrayLine(values, delimiter, prefix) {
	const header = formatHeader(values.length, {
		key: prefix,
		delimiter
	});
	const joinedValue = encodeAndJoinPrimitives(values, delimiter);
	if (values.length === 0) return header;
	return `${header} ${joinedValue}`;
}
function* encodeArrayOfObjectsAsTabularLines(prefix, rows, header, depth, options) {
	yield indentedLine(depth, formatHeader(rows.length, {
		key: prefix,
		fields: header,
		delimiter: options.delimiter
	}), options.indent);
	yield* writeTabularRowsLines(rows, header, depth + 1, options);
}
function extractTabularHeader(rows) {
	if (rows.length === 0) return;
	const firstRow = rows[0];
	const firstKeys = Object.keys(firstRow);
	if (firstKeys.length === 0) return;
	if (isTabularArray(rows, firstKeys)) return firstKeys;
}
function isTabularArray(rows, header) {
	for (const row of rows) {
		if (Object.keys(row).length !== header.length) return false;
		for (const key of header) {
			if (!(key in row)) return false;
			if (!isJsonPrimitive(row[key])) return false;
		}
	}
	return true;
}
function* writeTabularRowsLines(rows, header, depth, options) {
	for (const row of rows) yield indentedLine(depth, encodeAndJoinPrimitives(header.map((key) => row[key]), options.delimiter), options.indent);
}
function* encodeMixedArrayAsListItemsLines(prefix, items, depth, options) {
	yield indentedLine(depth, formatHeader(items.length, {
		key: prefix,
		delimiter: options.delimiter
	}), options.indent);
	for (const item of items) yield* encodeListItemValueLines(item, depth + 1, options);
}
function* encodeObjectAsListItemLines(obj, depth, options) {
	if (isEmptyObject(obj)) {
		yield indentedLine(depth, "-", options.indent);
		return;
	}
	const entries = Object.entries(obj);
	const [firstKey, firstValue] = entries[0];
	const restEntries = entries.slice(1);
	if (isJsonArray(firstValue) && isArrayOfObjects$1(firstValue)) {
		const header = extractTabularHeader(firstValue);
		if (header) {
			yield indentedListItem(depth, formatHeader(firstValue.length, {
				key: firstKey,
				fields: header,
				delimiter: options.delimiter
			}), options.indent);
			yield* writeTabularRowsLines(firstValue, header, depth + 2, options);
			if (restEntries.length > 0) yield* encodeObjectLines(Object.fromEntries(restEntries), depth + 1, options);
			return;
		}
	}
	const encodedKey = encodeKey(firstKey);
	if (isJsonPrimitive(firstValue)) yield indentedListItem(depth, `${encodedKey}: ${encodePrimitive(firstValue, options.delimiter)}`, options.indent);
	else if (isJsonArray(firstValue)) if (firstValue.length === 0) yield indentedListItem(depth, `${encodedKey}${formatHeader(0, { delimiter: options.delimiter })}`, options.indent);
	else if (isArrayOfPrimitives(firstValue)) yield indentedListItem(depth, `${encodedKey}${encodeInlineArrayLine(firstValue, options.delimiter)}`, options.indent);
	else {
		yield indentedListItem(depth, `${encodedKey}${formatHeader(firstValue.length, { delimiter: options.delimiter })}`, options.indent);
		for (const item of firstValue) yield* encodeListItemValueLines(item, depth + 2, options);
	}
	else if (isJsonObject(firstValue)) {
		yield indentedListItem(depth, `${encodedKey}:`, options.indent);
		if (!isEmptyObject(firstValue)) yield* encodeObjectLines(firstValue, depth + 2, options);
	}
	if (restEntries.length > 0) yield* encodeObjectLines(Object.fromEntries(restEntries), depth + 1, options);
}
function* encodeListItemValueLines(value, depth, options) {
	if (isJsonPrimitive(value)) yield indentedListItem(depth, encodePrimitive(value, options.delimiter), options.indent);
	else if (isJsonArray(value)) if (isArrayOfPrimitives(value)) yield indentedListItem(depth, encodeInlineArrayLine(value, options.delimiter), options.indent);
	else {
		yield indentedListItem(depth, formatHeader(value.length, { delimiter: options.delimiter }), options.indent);
		for (const item of value) yield* encodeListItemValueLines(item, depth + 1, options);
	}
	else if (isJsonObject(value)) yield* encodeObjectAsListItemLines(value, depth, options);
}
function indentedLine(depth, content, indentSize) {
	return " ".repeat(indentSize * depth) + content;
}
function indentedListItem(depth, content, indentSize) {
	return indentedLine(depth, "- " + content, indentSize);
}
/**
* Applies a replacer function to a `JsonValue` and all its descendants.
*
* The replacer is called for:
* - The root value (with key='', path=[])
* - Every object property (with the property name as key)
* - Every array element (with the string index as key: '0', '1', etc.)
*
* @param root - The normalized `JsonValue` to transform
* @param replacer - The replacer function to apply
* @returns The transformed `JsonValue`
*/
function applyReplacer(root, replacer) {
	const replacedRoot = replacer("", root, []);
	if (replacedRoot === void 0) return transformChildren(root, replacer, []);
	return transformChildren(normalizeValue(replacedRoot), replacer, []);
}
/**
* Recursively transforms the children of a `JsonValue` using the replacer.
*
* @param value - The value whose children should be transformed
* @param replacer - The replacer function to apply
* @param path - Current path from root
* @returns The value with transformed children
*/
function transformChildren(value, replacer, path$2) {
	if (isJsonObject(value)) return transformObject(value, replacer, path$2);
	if (isJsonArray(value)) return transformArray(value, replacer, path$2);
	return value;
}
/**
* Transforms an object by applying the replacer to each property.
*
* @param obj - The object to transform
* @param replacer - The replacer function to apply
* @param path - Current path from root
* @returns A new object with transformed properties
*/
function transformObject(obj, replacer, path$2) {
	const result = {};
	for (const [key, value] of Object.entries(obj)) {
		const childPath = [...path$2, key];
		const replacedValue = replacer(key, value, childPath);
		if (replacedValue === void 0) continue;
		result[key] = transformChildren(normalizeValue(replacedValue), replacer, childPath);
	}
	return result;
}
/**
* Transforms an array by applying the replacer to each element.
*
* @param arr - The array to transform
* @param replacer - The replacer function to apply
* @param path - Current path from root
* @returns A new array with transformed elements
*/
function transformArray(arr, replacer, path$2) {
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const value = arr[i];
		const childPath = [...path$2, i];
		const replacedValue = replacer(String(i), value, childPath);
		if (replacedValue === void 0) continue;
		const normalizedValue = normalizeValue(replacedValue);
		result.push(transformChildren(normalizedValue, replacer, childPath));
	}
	return result;
}
/**
* Encodes a JavaScript value into TOON format string.
*
* @param input - Any JavaScript value (objects, arrays, primitives)
* @param options - Optional encoding configuration
* @returns TOON formatted string
*
* @example
* ```ts
* encode({ name: 'Alice', age: 30 })
* // name: Alice
* // age: 30
*
* encode({ users: [{ id: 1 }, { id: 2 }] })
* // users[]:
* //   - id: 1
* //   - id: 2
*
* encode(data, { indent: 4, keyFolding: 'safe' })
* ```
*/
function encode(input, options) {
	return Array.from(encodeLines(input, options)).join("\n");
}
/**
* Encodes a JavaScript value into TOON format as a sequence of lines.
*
* This function yields TOON lines one at a time without building the full string,
* making it suitable for streaming large outputs to files, HTTP responses, or process stdout.
*
* @param input - Any JavaScript value (objects, arrays, primitives)
* @param options - Optional encoding configuration
* @returns Iterable of TOON lines (without trailing newlines)
*
* @example
* ```ts
* // Stream to stdout
* for (const line of encodeLines({ name: 'Alice', age: 30 })) {
*   console.log(line)
* }
*
* // Collect to array
* const lines = Array.from(encodeLines(data))
*
* // Equivalent to encode()
* const toonString = Array.from(encodeLines(data, options)).join('\n')
* ```
*/
function encodeLines(input, options) {
	const normalizedValue = normalizeValue(input);
	const resolvedOptions = resolveOptions(options);
	return encodeJsonValue(resolvedOptions.replacer ? applyReplacer(normalizedValue, resolvedOptions.replacer) : normalizedValue, resolvedOptions, 0);
}
function resolveOptions(options) {
	return {
		indent: options?.indent ?? 2,
		delimiter: options?.delimiter ?? DEFAULT_DELIMITER,
		keyFolding: options?.keyFolding ?? "off",
		flattenDepth: options?.flattenDepth ?? Number.POSITIVE_INFINITY,
		replacer: options?.replacer
	};
}

//#endregion
//#region node_modules/incur/dist/Formatter.js
var import_dist$3 = require_dist();
/** Serializes a value to the specified format. Defaults to TOON. */
function format(value, fmt = "toon") {
	if (value == null) return "";
	if (fmt === "json") {
		if (typeof value === "string") {
			const trimmed = value.trim();
			if (trimmed.startsWith("{") || trimmed.startsWith("[")) try {
				return JSON.stringify(JSON.parse(value), null, 2);
			} catch {}
		}
		return JSON.stringify(value, null, 2);
	}
	if (fmt === "yaml") return (0, import_dist$3.stringify)(value);
	if (fmt === "md") return formatMarkdown(value);
	if (fmt === "jsonl") {
		if (Array.isArray(value)) return value.map((v) => JSON.stringify(v)).join("\n");
		return JSON.stringify(value);
	}
	if (isScalar(value)) return String(value);
	return encode(value);
}
/** Whether a value is a scalar (string, number, boolean, null, undefined). */
function isScalar(value) {
	return value === null || value === void 0 || typeof value !== "object";
}
/** Whether all values in an object are scalars. */
function isFlat(obj) {
	return Object.values(obj).every(isScalar);
}
/** Whether a value is an array of plain objects. */
function isArrayOfObjects(value) {
	return Array.isArray(value) && value.length > 0 && value.every((v) => typeof v === "object" && v !== null && !Array.isArray(v));
}
/** Renders an aligned markdown table from headers and rows. */
function table(headers, rows) {
	const widths = headers.map((h, i) => Math.max(h.length, ...rows.map((r) => (r[i] ?? "").length)));
	const pad = (s, i) => s.padEnd(widths[i]);
	return `${`| ${headers.map(pad).join(" | ")} |`}\n${`|${widths.map((w) => "-".repeat(w + 2)).join("|")}|`}\n${rows.map((r) => `| ${headers.map((_, i) => pad(r[i] ?? "", i)).join(" | ")} |`).join("\n")}`;
}
/** Renders a key-value table from a flat object. */
function kvTable(obj) {
	return table(["Key", "Value"], Object.entries(obj).map(([k, v]) => [k, String(v)]));
}
/** Renders a columnar table from an array of objects. */
function columnarTable(items) {
	const keys = [...new Set(items.flatMap(Object.keys))];
	return table(keys, items.map((item) => keys.map((k) => String(item[k] ?? ""))));
}
/** Formats a value as Markdown, recursing into nested objects. */
function formatMarkdown(value, path$2 = []) {
	if (isScalar(value)) {
		if (path$2.length === 0) return String(value);
		return `## ${path$2.join(".")}\n\n${String(value)}`;
	}
	if (Array.isArray(value)) {
		if (isArrayOfObjects(value)) {
			const table$1 = columnarTable(value);
			if (path$2.length === 0) return table$1;
			return `## ${path$2.join(".")}\n\n${table$1}`;
		}
		return formatMarkdown(String(value), path$2);
	}
	const obj = value;
	const entries = Object.entries(obj);
	if (path$2.length === 0 && isFlat(obj)) return kvTable(obj);
	if (path$2.length > 0 || entries.length > 1 || entries.some(([, v]) => !isScalar(v))) return entries.map(([key, val]) => {
		const childPath = [...path$2, key];
		if (isScalar(val)) return `## ${childPath.join(".")}\n\n${String(val)}`;
		if (isArrayOfObjects(val)) return `## ${childPath.join(".")}\n\n${columnarTable(val)}`;
		if (typeof val === "object" && val !== null && !Array.isArray(val)) {
			const nested = val;
			if (isFlat(nested)) return `## ${childPath.join(".")}\n\n${kvTable(nested)}`;
			return formatMarkdown(nested, childPath);
		}
		return `## ${childPath.join(".")}\n\n${String(val)}`;
	}).join("\n\n");
	return kvTable(obj);
}

//#endregion
//#region node_modules/incur/dist/internal/helpers.js
/** Checks whether a value is a plain object record. */
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
/** Converts a camelCase string to kebab-case. */
function toKebab(value) {
	return value.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
}
/** Computes the Levenshtein edit distance between two strings. */
function levenshtein(a, b) {
	const m = a.length;
	const n = b.length;
	const dp = Array.from({ length: n + 1 }, (_, i) => i);
	for (let i = 1; i <= m; i++) {
		let prev = dp[0];
		dp[0] = i;
		for (let j = 1; j <= n; j++) {
			const tmp = dp[j];
			dp[j] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, dp[j], dp[j - 1]);
			prev = tmp;
		}
	}
	return dp[n];
}
/** Suggests the closest command name from a set, returning it if within a reasonable edit distance. */
function suggest(input, candidates) {
	const threshold = input.length <= 4 ? 2 : Math.floor(input.length / 2);
	const lower = input.toLowerCase();
	const all$1 = Array.isArray(candidates) ? candidates : [...candidates];
	let best;
	let bestScore = Infinity;
	for (const c of all$1) {
		const lc = c.toLowerCase();
		const dist = levenshtein(lower, lc);
		let score;
		if (lc.startsWith(lower) && lc !== lower) score = dist;
		else if (lc.includes(lower)) score = 100 + dist;
		else if (dist <= threshold) score = 200 + dist;
		else continue;
		if (score < bestScore) {
			bestScore = score;
			best = c;
		}
	}
	return best;
}

//#endregion
//#region node_modules/incur/dist/Parser.js
/** Parses raw argv tokens against Zod schemas for args and options. */
function parse(argv, options = {}) {
	const { args: argsSchema, options: optionsSchema, alias, defaults } = options;
	const optionNames = createOptionNames(optionsSchema, alias);
	const positionals = [];
	const rawArgvOptions = {};
	let i = 0;
	while (i < argv.length) {
		const token = argv[i];
		if (token.startsWith("--no-") && token.length > 5) {
			const name = normalizeOptionName(token.slice(5), optionNames);
			if (!name) throw new ParseError({ message: `Unknown flag: ${token}` });
			rawArgvOptions[name] = false;
			i++;
		} else if (token.startsWith("--")) {
			const eqIdx = token.indexOf("=");
			if (eqIdx !== -1) {
				const raw$1 = token.slice(2, eqIdx);
				const name = normalizeOptionName(raw$1, optionNames);
				if (!name) throw new ParseError({ message: `Unknown flag: --${raw$1}` });
				setOption(rawArgvOptions, name, token.slice(eqIdx + 1), optionsSchema);
				i++;
			} else {
				const name = normalizeOptionName(token.slice(2), optionNames);
				if (!name) throw new ParseError({ message: `Unknown flag: ${token}` });
				if (isCountOption(name, optionsSchema)) {
					rawArgvOptions[name] = (rawArgvOptions[name] ?? 0) + 1;
					i++;
				} else if (isBooleanOption(name, optionsSchema)) {
					rawArgvOptions[name] = true;
					i++;
				} else {
					const value = argv[i + 1];
					if (value === void 0) throw new ParseError({ message: `Missing value for flag: ${token}` });
					setOption(rawArgvOptions, name, value, optionsSchema);
					i += 2;
				}
			}
		} else if (token.startsWith("-") && !token.startsWith("--") && token.length >= 2) {
			const chars = token.slice(1);
			for (let j = 0; j < chars.length; j++) {
				const short = chars[j];
				const name = optionNames.aliasToName.get(short);
				if (!name) throw new ParseError({ message: `Unknown flag: -${short}` });
				if (!(j === chars.length - 1)) if (isCountOption(name, optionsSchema)) rawArgvOptions[name] = (rawArgvOptions[name] ?? 0) + 1;
				else if (isBooleanOption(name, optionsSchema)) rawArgvOptions[name] = true;
				else throw new ParseError({ message: `Non-boolean flag -${short} must be last in a stacked alias` });
				else if (isCountOption(name, optionsSchema)) rawArgvOptions[name] = (rawArgvOptions[name] ?? 0) + 1;
				else if (isBooleanOption(name, optionsSchema)) rawArgvOptions[name] = true;
				else {
					const value = argv[i + 1];
					if (value === void 0) throw new ParseError({ message: `Missing value for flag: -${short}` });
					setOption(rawArgvOptions, name, value, optionsSchema);
					i++;
				}
			}
			i++;
		} else {
			positionals.push(token);
			i++;
		}
	}
	const rawArgs = {};
	if (argsSchema) {
		const keys = Object.keys(argsSchema.shape);
		for (let j = 0; j < keys.length; j++) {
			const key = keys[j];
			if (positionals[j] !== void 0) rawArgs[key] = positionals[j];
		}
	}
	const args = argsSchema ? zodParse(argsSchema, rawArgs) : {};
	const rawDefaults = normalizeOptionDefaults(defaults, optionsSchema, optionNames);
	if (optionsSchema) for (const [name, value] of Object.entries(rawArgvOptions)) rawArgvOptions[name] = coerce(value, name, optionsSchema);
	const mergedOptions = {
		...rawDefaults,
		...rawArgvOptions
	};
	return {
		args,
		options: optionsSchema ? zodParse(optionsSchema, mergedOptions) : {}
	};
}
/** Builds lookup tables for option names and short aliases. */
function createOptionNames(schema$6, alias) {
	const aliasToName = /* @__PURE__ */ new Map();
	if (alias) for (const [name, short] of Object.entries(alias)) aliasToName.set(short, name);
	const knownOptions = new Set(schema$6 ? Object.keys(schema$6.shape) : []);
	const kebabToCamel = /* @__PURE__ */ new Map();
	for (const name of knownOptions) {
		const kebab = toKebab(name);
		if (kebab !== name) kebabToCamel.set(kebab, name);
	}
	return {
		aliasToName,
		kebabToCamel,
		knownOptions
	};
}
/** Normalizes a long option name, accepting kebab-case aliases for camelCase schema keys. */
function normalizeOptionName(raw$1, options) {
	const name = options.kebabToCamel.get(raw$1) ?? raw$1;
	return options.knownOptions.has(name) ? name : void 0;
}
/** Normalizes config-backed defaults and validates config structure/key names. */
function normalizeOptionDefaults(defaults, schema$6, optionNames) {
	if (defaults === void 0) return {};
	if (!isRecord(defaults)) throw new ParseError({ message: "Invalid config section: expected an object of option defaults" });
	if (!schema$6) {
		const [first] = Object.keys(defaults);
		if (first) throw new ParseError({ message: `Unknown config option: ${first}` });
		return {};
	}
	const normalized = {};
	for (const [rawName, value] of Object.entries(defaults)) {
		const name = normalizeOptionName(rawName, optionNames);
		if (!name) throw new ParseError({ message: `Unknown config option: ${rawName}` });
		normalized[name] = value;
	}
	return normalized;
}
/** Unwraps ZodDefault/ZodOptional to get the inner type. */
function unwrap$1(schema$6) {
	let s = schema$6;
	while (s.def?.innerType) s = s.def.innerType;
	return s;
}
/** Checks if an option's inner type is boolean. */
function isBooleanOption(name, schema$6) {
	if (!schema$6) return false;
	const field = schema$6.shape[name];
	if (!field) return false;
	return unwrap$1(field).constructor.name === "ZodBoolean";
}
/** Checks if an option is a count type (z.count()). */
function isCountOption(name, schema$6) {
	if (!schema$6) return false;
	const field = schema$6.shape[name];
	if (!field) return false;
	return typeof field.meta === "function" && field.meta()?.count === true;
}
/** Checks if an option's inner type is an array. */
function isArrayOption(name, schema$6) {
	if (!schema$6) return false;
	const field = schema$6.shape[name];
	if (!field) return false;
	return unwrap$1(field).constructor.name === "ZodArray";
}
/** Sets an option value, collecting into arrays for array schemas. */
function setOption(raw$1, name, value, schema$6) {
	if (isArrayOption(name, schema$6)) {
		const existing = raw$1[name];
		if (Array.isArray(existing)) existing.push(value);
		else raw$1[name] = [value];
	} else raw$1[name] = value;
}
/** Wraps zod schema.parse(), converting ZodError to ValidationError. */
function zodParse(schema$6, data) {
	try {
		return schema$6.parse(data);
	} catch (err) {
		const issues = err?.issues ?? err?.error?.issues ?? [];
		const fieldErrors = issues.map((issue$1) => ({
			code: issue$1.code,
			missing: !hasPath(data, issue$1.path ?? []),
			path: (issue$1.path ?? []).join("."),
			expected: issue$1.expected ?? "",
			received: issue$1.received ?? "",
			message: issue$1.message ?? ""
		}));
		throw new ValidationError({
			message: issues.map((i) => i.message).join("; ") || "Validation failed",
			fieldErrors,
			cause: err instanceof Error ? err : void 0
		});
	}
}
/** Checks whether the raw input contains the full issue path. */
function hasPath(data, path$2) {
	if (path$2.length === 0) return true;
	let current = data;
	for (const part of path$2) {
		if (!isRecord(current) && !Array.isArray(current)) return false;
		if (!(part in current)) return false;
		current = current[part];
	}
	return true;
}
/** Parses environment variables against a Zod schema. Falls back to `process.env` → `Deno.env` when no source is provided. */
function parseEnv(schema$6, source = defaultEnvSource()) {
	const raw$1 = {};
	for (const [key, field] of Object.entries(schema$6.shape)) {
		const value = source[key];
		if (value !== void 0) raw$1[key] = coerceEnv(value, field);
	}
	return zodParse(schema$6, raw$1);
}
/** Coerces an env var string to the type expected by the schema field. */
function coerceEnv(value, field) {
	const typeName = unwrap$1(field).constructor.name;
	if (typeName === "ZodNumber") return Number(value);
	if (typeName === "ZodBoolean") return value === "true" || value === "1";
	return value;
}
/** Coerces a raw string value to the type expected by the schema. */
function coerce(value, name, schema$6) {
	const field = schema$6.shape[name];
	if (!field) return value;
	const typeName = unwrap$1(field).constructor.name;
	if (typeName === "ZodNumber" && typeof value === "string") return Number(value);
	if (typeName === "ZodBoolean" && typeof value === "string") return value === "true";
	return value;
}
/** Returns the best available env source for the current runtime. */
function defaultEnvSource() {
	if (typeof globalThis !== "undefined") {
		const g = globalThis;
		if (g.process?.env) return g.process.env;
		if (g.Deno?.env) return new Proxy({}, { get: (_, key) => g.Deno.env.get(key) });
	}
	return {};
}

//#endregion
//#region node_modules/incur/dist/internal/command.js
/** @internal Sentinel symbol for `ok()` and `error()` return values. */
const sentinel$1 = Symbol.for("incur.sentinel");
/** @internal Unified command execution used by CLI, HTTP, and MCP transports. */
async function execute(command, options) {
	const { argv, inputOptions, agent, format: format$2, formatExplicit, name, path: path$2, version: version$1, envSource = process.env, env: envSchema, vars: varsSchema, middlewares = [] } = options;
	const displayName = options.displayName ?? name;
	const parseMode = options.parseMode ?? "argv";
	const varsMap = varsSchema ? varsSchema.parse({}) : {};
	let result;
	let streamConsumed;
	let resolveStreamConsumed;
	let resolveResultReady;
	const resultReady = new Promise((r) => {
		resolveResultReady = r;
	});
	const runCommand = async () => {
		let args;
		let parsedOptions;
		if (parseMode === "argv") {
			const parsed = parse(argv, {
				alias: command.alias,
				args: command.args,
				defaults: options.defaults,
				options: command.options
			});
			args = parsed.args;
			parsedOptions = parsed.options;
		} else if (parseMode === "split") {
			args = parse(argv, { args: command.args }).args;
			parsedOptions = command.options ? command.options.parse(inputOptions) : {};
		} else {
			const split$1 = splitParams(inputOptions, command);
			args = command.args ? command.args.parse(split$1.args) : {};
			parsedOptions = command.options ? command.options.parse(split$1.options) : {};
		}
		const commandEnv = command.env ? parseEnv(command.env, envSource) : {};
		const okFn = (data, meta$2 = {}) => ({
			[sentinel$1]: "ok",
			data,
			cta: meta$2.cta
		});
		const errorFn = (opts) => ({
			[sentinel$1]: "error",
			...opts
		});
		const raw$1 = command.run({
			agent,
			args,
			displayName,
			env: commandEnv,
			error: errorFn,
			format: format$2,
			formatExplicit,
			name,
			ok: okFn,
			options: parsedOptions,
			var: varsMap,
			version: version$1
		});
		if (isAsyncGenerator(raw$1)) {
			if (middlewares.length > 0) {
				streamConsumed = new Promise((r) => {
					resolveStreamConsumed = r;
				});
				async function* wrapped() {
					try {
						yield* raw$1;
					} finally {
						resolveStreamConsumed();
					}
				}
				result = { stream: wrapped() };
				resolveResultReady();
				await streamConsumed;
			} else result = { stream: raw$1 };
			return;
		}
		const awaited = await raw$1;
		if (isSentinel$1(awaited)) {
			if (awaited[sentinel$1] === "ok") {
				const ok = awaited;
				result = {
					ok: true,
					data: ok.data,
					...ok.cta ? { cta: ok.cta } : void 0
				};
			} else {
				const err = awaited;
				result = {
					ok: false,
					error: {
						code: err.code,
						message: err.message,
						...err.retryable !== void 0 ? { retryable: err.retryable } : void 0
					},
					...err.cta ? { cta: err.cta } : void 0,
					...err.exitCode !== void 0 ? { exitCode: err.exitCode } : void 0
				};
			}
			return;
		}
		result = {
			ok: true,
			data: awaited
		};
	};
	try {
		const cliEnv = envSchema ? parseEnv(envSchema, envSource) : {};
		if (middlewares.length > 0) {
			const errorFn = (opts) => {
				result = {
					ok: false,
					error: {
						code: opts.code,
						message: opts.message,
						...opts.retryable !== void 0 ? { retryable: opts.retryable } : void 0
					},
					...opts.cta ? { cta: opts.cta } : void 0,
					...opts.exitCode !== void 0 ? { exitCode: opts.exitCode } : void 0
				};
			};
			const mwCtx = {
				agent,
				command: path$2,
				displayName,
				env: cliEnv,
				error: errorFn,
				format: format$2,
				formatExplicit,
				name,
				set(key, value) {
					varsMap[key] = value;
				},
				var: varsMap,
				version: version$1
			};
			const chainPromise = middlewares.reduceRight((next, mw) => async () => {
				await mw(mwCtx, next);
			}, runCommand)();
			await Promise.race([chainPromise, resultReady]);
			if (streamConsumed) return result;
			await chainPromise;
		} else await runCommand();
	} catch (error) {
		if (error instanceof ValidationError) return {
			ok: false,
			error: {
				code: "VALIDATION_ERROR",
				message: error.message,
				fieldErrors: error.fieldErrors
			}
		};
		return {
			ok: false,
			error: {
				code: error instanceof IncurError ? error.code : "UNKNOWN",
				message: error instanceof Error ? error.message : String(error),
				...error instanceof IncurError ? { retryable: error.retryable } : void 0
			},
			...error instanceof IncurError && error.exitCode !== void 0 ? { exitCode: error.exitCode } : void 0
		};
	}
	return result ?? {
		ok: true,
		data: void 0
	};
}
/** @internal Splits flat params into args vs options using schema shapes. */
function splitParams(params, command) {
	const argKeys = new Set(command.args ? Object.keys(command.args.shape) : []);
	const a = {};
	const o = {};
	for (const [key, value] of Object.entries(params)) if (argKeys.has(key)) a[key] = value;
	else o[key] = value;
	return {
		args: a,
		options: o
	};
}
/** @internal Type guard for sentinel results. */
function isSentinel$1(value) {
	return typeof value === "object" && value !== null && sentinel$1 in value;
}
/** @internal Type guard for async generators. */
function isAsyncGenerator(value) {
	return typeof value === "object" && value !== null && Symbol.asyncIterator in value && typeof value.next === "function";
}
/** @internal Creates a builtin subcommand with typesafe alias inference. */
function subcommand(def) {
	return def;
}
/** Supported shell names for completions. */
const shells = [
	"bash",
	"fish",
	"nushell",
	"zsh"
];
/** Built-in command metadata shared by help, completions, and handler logic. */
const builtinCommands = [
	{
		name: "completions",
		description: "Generate shell completion script",
		args: object({ shell: _enum(shells).describe("Shell to generate completions for") }),
		hint(name) {
			const rows = [
				[
					"bash",
					`eval "$(${name} completions bash)"`,
					"# add to ~/.bashrc"
				],
				[
					"fish",
					`${name} completions fish | source`,
					"# add to ~/.config/fish/config.fish"
				],
				[
					"nushell",
					`see \`${name} completions nushell\``,
					"# add to config.nu"
				],
				[
					"zsh",
					`eval "$(${name} completions zsh)"`,
					"# add to ~/.zshrc"
				]
			];
			const shellW = Math.max(...rows.map((r) => r[0].length));
			const cmdW = Math.max(...rows.map((r) => r[1].length));
			return "Setup:\n" + rows.map(([s, cmd, comment]) => `  ${s.padEnd(shellW)}  ${cmd.padEnd(cmdW)}  ${comment}`).join("\n");
		}
	},
	{
		name: "mcp",
		description: "Register as MCP server",
		subcommands: [subcommand({
			name: "add",
			description: "Register as MCP server",
			alias: { command: "c" },
			options: object({
				agent: string$5().optional().describe("Target a specific agent (e.g. claude-code, cursor)"),
				command: string$5().optional().describe("Override the command agents will run (e.g. \"pnpm my-cli --mcp\")"),
				noGlobal: boolean$1().optional().describe("Install to project instead of globally")
			})
		})]
	},
	{
		name: "skills",
		aliases: ["skill"],
		description: "Sync skill files to agents",
		subcommands: [subcommand({
			name: "add",
			description: "Sync skill files to agents",
			options: object({
				depth: number$1().optional().describe("Grouping depth for skill files (default: 1)"),
				noGlobal: boolean$1().optional().describe("Install to project instead of globally")
			})
		}), subcommand({
			name: "list",
			aliases: ["ls"],
			description: "List skills"
		})]
	}
];
/** @internal Finds a builtin command by its name or alias. */
function findBuiltin(token) {
	return builtinCommands.find((b) => b.name === token || b.aliases?.includes(token));
}
/** @internal Finds a builtin subcommand by its name or alias. */
function findBuiltinSubcommand(builtin, token) {
	return builtin.subcommands?.find((sub) => sub.name === token || sub.aliases?.includes(token));
}

//#endregion
//#region node_modules/incur/dist/Help.js
/** Formats help text for a router CLI or command group. */
function formatRoot(name, options = {}) {
	const { aliases, configFlag, description, version: version$1, commands = [], root = false } = options;
	const lines = [];
	const title = version$1 ? `${name}@${version$1}` : name;
	lines.push(description ? `${title} \u2014 ${description}` : title);
	lines.push("");
	lines.push(`Usage: ${name} <command>`);
	if (aliases?.length) lines.push(`Aliases: ${aliases.join(", ")}`);
	if (commands.length > 0) {
		lines.push("");
		lines.push("Commands:");
		const maxLen = Math.max(...commands.map((c) => c.name.length));
		for (const cmd of commands) if (cmd.description) {
			const padding = " ".repeat(maxLen - cmd.name.length);
			lines.push(`  ${cmd.name}${padding}  ${cmd.description}`);
		} else lines.push(`  ${cmd.name}`);
	}
	lines.push(...globalOptionsLines(root, configFlag));
	return lines.join("\n");
}
/** Formats help text for a leaf command. */
function formatCommand(name, options = {}) {
	const { alias, aliases, configFlag, description, version: version$1, args, env, envSource, hint, root = false, options: opts, examples } = options;
	const lines = [];
	const title = version$1 ? `${name}@${version$1}` : name;
	lines.push(description ? `${title} \u2014 ${description}` : title);
	lines.push("");
	const { usage } = options;
	if (usage && usage.length > 0) {
		const usageLines = usage.map((u) => {
			const parts = [];
			if (u.prefix) parts.push(u.prefix);
			parts.push(name);
			if (u.args) for (const key of Object.keys(u.args)) parts.push(`<${key}>`);
			if (u.options) for (const key of Object.keys(u.options)) parts.push(`--${key} <${key}>`);
			if (u.suffix) parts.push(u.suffix);
			return parts.join(" ");
		});
		const pad = " ".repeat(7);
		lines.push(`Usage: ${usageLines[0]}`);
		for (const line of usageLines.slice(1)) lines.push(`${pad}${line}`);
	} else {
		const synopsis = buildSynopsis(name, args);
		const commandSuffix = options.commands && options.commands.length > 0 ? " | <command>" : "";
		lines.push(`Usage: ${synopsis}${opts ? " [options]" : ""}${commandSuffix}`);
	}
	if (aliases?.length) lines.push(`Aliases: ${aliases.join(", ")}`);
	if (args) {
		const entries = argsEntries(args);
		if (entries.length > 0) {
			lines.push("");
			lines.push("Arguments:");
			const maxLen = Math.max(...entries.map((e) => e.name.length));
			for (const entry of entries) lines.push(`  ${entry.name}${" ".repeat(maxLen - entry.name.length)}  ${entry.description}`);
		}
	}
	if (opts) {
		const entries = optionEntries(opts, alias);
		if (entries.length > 0) {
			lines.push("");
			lines.push("Options:");
			const maxLen = Math.max(...entries.map((e) => e.flag.length));
			for (const entry of entries) {
				const padding = " ".repeat(maxLen - entry.flag.length);
				const prefix = entry.deprecated ? "[deprecated] " : "";
				const desc = entry.defaultValue !== void 0 ? `${prefix}${entry.description} (default: ${entry.defaultValue})` : `${prefix}${entry.description}`;
				lines.push(`  ${entry.flag}${padding}  ${desc}`);
			}
		}
	}
	if (examples && examples.length > 0) {
		lines.push("");
		lines.push("Examples:");
		const maxLen = Math.max(...examples.map((e) => (e.command ? `${name} ${e.command}` : name).length));
		for (const ex of examples) {
			const cmd = ex.command ? `${name} ${ex.command}` : name;
			if (ex.description) lines.push(`  ${cmd}${" ".repeat(maxLen - cmd.length)}  # ${ex.description}`);
			else lines.push(`  ${cmd}`);
		}
	}
	if (hint) {
		lines.push("");
		lines.push(hint);
	}
	const { commands } = options;
	if (commands && commands.length > 0) {
		lines.push("");
		lines.push("Commands:");
		const maxLen = Math.max(...commands.map((c) => c.name.length));
		for (const cmd of commands) if (cmd.description) {
			const padding = " ".repeat(maxLen - cmd.name.length);
			lines.push(`  ${cmd.name}${padding}  ${cmd.description}`);
		} else lines.push(`  ${cmd.name}`);
	}
	if (!options.hideGlobalOptions) lines.push(...globalOptionsLines(root, configFlag));
	if (env) {
		const entries = envEntries(env);
		if (entries.length > 0) {
			lines.push("");
			lines.push("Environment Variables:");
			const maxLen = Math.max(...entries.map((e) => e.name.length));
			for (const entry of entries) {
				const padding = " ".repeat(maxLen - entry.name.length);
				const parts = [entry.description];
				const source = envSource ?? defaultEnvSource();
				if (entry.name in source) parts.push(`set: ${redact(source[entry.name])}`);
				if (entry.defaultValue !== void 0) parts.push(`default: ${entry.defaultValue}`);
				const desc = parts.length > 1 ? `${parts[0]} (${parts.slice(1).join(", ")})` : parts[0];
				lines.push(`  ${entry.name}${padding}  ${desc}`);
			}
		}
	}
	return lines.join("\n");
}
/** Builds the synopsis string with `<required>` and `[optional]` placeholders. */
function buildSynopsis(name, args) {
	if (!args) return name;
	const parts = [name];
	for (const [key, schema$6] of Object.entries(args.shape)) {
		const type = resolveTypeName$1(schema$6);
		const label = type.includes("|") ? type : key;
		parts.push(schema$6._zod.optout === "optional" ? `[${label}]` : `<${label}>`);
	}
	return parts.join(" ");
}
/** Extracts arg entries from a Zod object schema. */
function argsEntries(schema$6) {
	const entries = [];
	for (const [key, field] of Object.entries(schema$6.shape)) entries.push({
		name: key,
		description: field.description ?? ""
	});
	return entries;
}
/** Extracts env var entries from a Zod object schema. */
function envEntries(schema$6) {
	const entries = [];
	for (const [key, field] of Object.entries(schema$6.shape)) {
		const defaultValue = extractDefault(field);
		entries.push({
			name: key,
			description: field.description ?? "",
			defaultValue
		});
	}
	return entries;
}
/** Extracts option entries from a Zod object schema. */
function optionEntries(schema$6, alias) {
	const entries = [];
	for (const [key, field] of Object.entries(schema$6.shape)) {
		const type = resolveTypeName$1(field);
		const short = alias?.[key];
		const kebab = toKebab(key);
		const valueHint = type === "boolean" ? "" : ` <${type}>`;
		const flag = short ? `--${kebab}, -${short}${valueHint}` : `--${kebab}${valueHint}`;
		let defaultValue = extractDefault(field);
		if (type === "boolean" && defaultValue === false) defaultValue = void 0;
		const deprecated = extractDeprecated(field);
		entries.push({
			flag,
			description: field.description ?? "",
			defaultValue,
			deprecated
		});
	}
	return entries;
}
/** Resolves a human-readable type name from a Zod schema. */
function resolveTypeName$1(schema$6) {
	if (isCountSchema(schema$6)) return "count";
	const unwrapped = unwrap(schema$6);
	if (unwrapped instanceof ZodString) return "string";
	if (unwrapped instanceof ZodNumber) return "number";
	if (unwrapped instanceof ZodBoolean) return "boolean";
	if (unwrapped instanceof ZodArray) return "array";
	if (unwrapped instanceof ZodEnum) return Object.values(unwrapped._zod.def.entries).join("|");
	if (unwrapped instanceof ZodUnion) {
		const options = unwrapped._zod?.def?.options;
		if (options?.every((o) => o instanceof ZodLiteral)) return options.map((o) => String(o._zod.def.values[0])).join("|");
	}
	return "value";
}
/** Checks if a schema is a count type (`.meta({ count: true })`). */
function isCountSchema(schema$6) {
	const s = schema$6;
	return typeof s?.meta === "function" && s.meta()?.count === true;
}
/** Unwraps optional/default/nullable wrappers to get the inner type. */
function unwrap(schema$6) {
	if (schema$6 instanceof ZodOptional) return unwrap(schema$6.unwrap());
	if (schema$6 instanceof ZodDefault) return unwrap(schema$6.removeDefault());
	if (schema$6 instanceof ZodNullable) return unwrap(schema$6.unwrap());
	return schema$6;
}
/** Extracts the default value from a Zod schema, if any. */
function extractDefault(schema$6) {
	if (schema$6 instanceof ZodDefault) {
		const raw$1 = schema$6._def.defaultValue;
		const value = typeof raw$1 === "function" ? raw$1() : raw$1;
		if (Array.isArray(value) && value.length === 0) return void 0;
		return value;
	}
	if (schema$6 instanceof ZodOptional) return extractDefault(schema$6.unwrap());
}
/** Reads the `deprecated` flag from a Zod schema's `.meta()`. */
function extractDeprecated(schema$6) {
	return (schema$6?.meta?.())?.deprecated === true ? true : void 0;
}
/** Renders the built-in commands and global options block. Root-only items are hidden for subcommands. */
function globalOptionsLines(root = false, configFlag) {
	const lines = [];
	if (root) {
		const builtins = builtinCommands.flatMap((b) => {
			if (!b.subcommands) return [{
				name: b.name,
				desc: b.description
			}];
			if (b.subcommands.length === 1) return [{
				name: `${b.name} ${b.subcommands[0].name}`,
				desc: b.subcommands[0].description
			}];
			const names = b.subcommands.map((s) => s.name).join(", ");
			return [{
				name: b.name,
				desc: `${b.description} (${names})`
			}];
		});
		const maxCmd = Math.max(...builtins.map((b) => b.name.length));
		lines.push("", "Integrations:", ...builtins.map((b) => `  ${b.name}${" ".repeat(maxCmd - b.name.length)}  ${b.desc}`));
	}
	const flags = [
		...configFlag ? [{
			flag: `--${configFlag} <path>`,
			desc: "Load JSON option defaults from a file"
		}] : [],
		{
			flag: "--filter-output <keys>",
			desc: "Filter output by key paths (e.g. foo,bar.baz,a[0,3])"
		},
		{
			flag: "--format <toon|json|yaml|md|jsonl>",
			desc: "Output format"
		},
		{
			flag: "--help",
			desc: "Show help"
		},
		{
			flag: "--llms, --llms-full",
			desc: "Print LLM-readable manifest"
		},
		...root ? [{
			flag: "--mcp",
			desc: "Start as MCP stdio server"
		}] : [],
		...configFlag ? [{
			flag: `--no-${configFlag}`,
			desc: "Disable JSON option defaults for this run"
		}] : [],
		{
			flag: "--schema",
			desc: "Show JSON Schema for command"
		},
		{
			flag: "--token-count",
			desc: "Print token count of output (instead of output)"
		},
		{
			flag: "--token-limit <n>",
			desc: "Limit output to n tokens"
		},
		{
			flag: "--token-offset <n>",
			desc: "Skip first n tokens of output"
		},
		{
			flag: "--full-output",
			desc: "Show full output envelope"
		},
		...root ? [{
			flag: "--version",
			desc: "Show version"
		}] : []
	].sort((a, b) => a.flag.localeCompare(b.flag));
	const maxLen = Math.max(...flags.map((f) => f.flag.length));
	lines.push("", "Global Options:", ...flags.map((f) => `  ${f.flag}${" ".repeat(maxLen - f.flag.length)}  ${f.desc}`));
	return lines;
}
/** Redacts a value, showing only the last 4 characters for long values. */
function redact(value) {
	if (value.length <= 4) return "****";
	return `****${value.slice(-4)}`;
}

//#endregion
//#region node_modules/incur/dist/internal/pm.js
/** Detects the package manager runner (`npx`, `pnpx`, `bunx`) from the current process environment. */
function detectRunner() {
	const userAgent = process.env.npm_config_user_agent ?? "";
	const execPath = process.env.npm_execpath ?? "";
	if (userAgent.includes("pnpm") || execPath.includes("pnpm")) return "pnpx";
	if (userAgent.includes("bun") || execPath.includes("bun")) return "bunx";
	return "npx";
}

//#endregion
//#region node_modules/incur/dist/Schema.js
/**
* Converts a Zod schema to a JSON Schema object. Strips the `$schema`
* meta-property. Represents bigints and dates as `{ type: "string" }`
* since JSON lacks native types for them.
*/
function toJsonSchema(schema$6) {
	const result = toJSONSchema(schema$6, {
		unrepresentable: "any",
		override: (ctx) => {
			const type = ctx.zodSchema._zod?.def?.type;
			if (type === "bigint" || type === "date") ctx.jsonSchema.type = "string";
		}
	});
	delete result.$schema;
	return result;
}

//#endregion
//#region node_modules/incur/dist/Mcp.js
/** Starts a stdio MCP server that exposes commands as tools. */
async function serve(name, version$1, commands, options = {}) {
	const server = new McpServer({
		name,
		version: version$1
	});
	for (const tool of collectTools(commands, [])) {
		const mergedShape = {
			...tool.command.args?.shape,
			...tool.command.options?.shape
		};
		const hasInput = Object.keys(mergedShape).length > 0;
		server.registerTool(tool.name, {
			...tool.description ? { description: tool.description } : void 0,
			...hasInput ? { inputSchema: object(mergedShape) } : void 0,
			...tool.outputSchema ? { outputSchema: tool.outputSchema } : void 0
		}, async (...callArgs) => {
			return callTool(tool, hasInput ? callArgs[0] : {}, {
				extra: hasInput ? callArgs[1] : callArgs[0],
				sendNotification: (n) => server.server.notification(n),
				name,
				version: version$1,
				middlewares: options.middlewares,
				env: options.env,
				vars: options.vars
			});
		});
	}
	const transport = new StdioServerTransport(options.input ?? process.stdin, options.output ?? process.stdout);
	await server.connect(transport);
}
/** @internal Executes a tool call and returns a CallToolResult. */
async function callTool(tool, params, options = {}) {
	const allMiddleware = [
		...options.middlewares ?? [],
		...tool.middlewares ?? [],
		...tool.command.middleware ?? []
	];
	const result = await execute(tool.command, {
		agent: true,
		argv: [],
		env: options.env,
		format: "json",
		formatExplicit: true,
		inputOptions: params,
		middlewares: allMiddleware,
		name: options.name ?? tool.name,
		parseMode: "flat",
		path: tool.name,
		vars: options.vars,
		version: options.version
	});
	if ("stream" in result) {
		const chunks = [];
		const progressToken = options.extra?.mcpReq?._meta?.progressToken;
		let i = 0;
		try {
			for await (const chunk of result.stream) {
				chunks.push(chunk);
				if (progressToken !== void 0 && options.sendNotification) await options.sendNotification({
					method: "notifications/progress",
					params: {
						progressToken,
						progress: ++i,
						message: JSON.stringify(chunk)
					}
				});
			}
		} catch (err) {
			return {
				content: [{
					type: "text",
					text: err instanceof Error ? err.message : String(err)
				}],
				isError: true
			};
		}
		return { content: [{
			type: "text",
			text: JSON.stringify(chunks)
		}] };
	}
	if (!result.ok) return {
		content: [{
			type: "text",
			text: result.error.message ?? "Command failed"
		}],
		isError: true
	};
	const data = result.data ?? null;
	return {
		content: [{
			type: "text",
			text: JSON.stringify(data)
		}],
		...data !== null && tool.outputSchema ? { structuredContent: data } : void 0
	};
}
/** @internal Recursively collects leaf commands as tool entries. */
function collectTools(commands, prefix, parentMiddlewares = []) {
	const result = [];
	for (const [name, entry] of commands) {
		if ("_alias" in entry) continue;
		const path$2 = [...prefix, name];
		if ("_group" in entry && entry._group) {
			const groupMw = [...parentMiddlewares, ...entry.middlewares ?? []];
			result.push(...collectTools(entry.commands, path$2, groupMw));
		} else result.push({
			name: path$2.join("_"),
			description: entry.description,
			inputSchema: buildToolSchema(entry.args, entry.options),
			...entry.output ? { outputSchema: toJsonSchema(entry.output) } : void 0,
			command: entry,
			...parentMiddlewares.length > 0 ? { middlewares: parentMiddlewares } : void 0
		});
	}
	return result.sort((a, b) => a.name.localeCompare(b.name));
}
/** @internal Builds a merged JSON Schema from args and options Zod schemas. */
function buildToolSchema(args, options) {
	const properties = {};
	const required$1 = [];
	for (const schema$6 of [args, options]) {
		if (!schema$6) continue;
		const json$1 = toJsonSchema(schema$6);
		Object.assign(properties, json$1.properties ?? {});
		required$1.push(...json$1.required ?? []);
	}
	if (required$1.length > 0) return {
		type: "object",
		properties,
		required: required$1
	};
	return {
		type: "object",
		properties
	};
}

//#endregion
//#region node_modules/incur/dist/internal/dereference.js
/**
* Dereferences all local `$ref` pointers in a JSON object (e.g. `{"$ref": "#/components/schemas/User"}`),
* replacing them inline with the resolved values. Only handles local (`#/...`) references.
*
* Handles circular references by caching a mutable placeholder before recursing.
*
* Minimal reimplementation of the dereferencing behavior from `@apidevtools/json-schema-ref-parser`
* (https://github.com/APIDevTools/json-schema-ref-parser). Only supports in-memory, local-pointer
* resolution — no file/URL resolution, no `$id` scoping.
*/
function dereference(root) {
	return walk(root, root, /* @__PURE__ */ new Map());
}
function walk(node, root, cache) {
	if (Array.isArray(node)) return node.map((item) => walk(item, root, cache));
	if (typeof node !== "object" || node === null) return node;
	const obj = node;
	if (typeof obj.$ref === "string" && obj.$ref.startsWith("#")) {
		const ref = obj.$ref;
		if (cache.has(ref)) return cache.get(ref);
		const resolved = resolvePointer(root, ref);
		if (typeof resolved !== "object" || resolved === null || Array.isArray(resolved)) {
			const dereferenced$1 = walk(resolved, root, cache);
			cache.set(ref, dereferenced$1);
			return dereferenced$1;
		}
		const placeholder = {};
		cache.set(ref, placeholder);
		const dereferenced = walk(resolved, root, cache);
		if (typeof dereferenced !== "object" || dereferenced === null || Array.isArray(dereferenced)) {
			cache.set(ref, dereferenced);
			return dereferenced;
		}
		Object.assign(placeholder, dereferenced);
		return placeholder;
	}
	const result = {};
	for (const key of Object.keys(obj)) result[key] = walk(obj[key], root, cache);
	return result;
}
/** Resolves a JSON Pointer (e.g. `#/components/schemas/User`) against a root object. */
function resolvePointer(root, pointer) {
	const fragment = pointer.slice(1);
	if (fragment === "" || fragment === "/") return root;
	const parts = fragment.slice(1).split("/").map((p) => p.replace(/~1/g, "/").replace(/~0/g, "~"));
	let current = root;
	for (const part of parts) {
		if (typeof current !== "object" || current === null) throw new Error(`Cannot resolve $ref "${pointer}": path segment "${part}" not found`);
		current = current[part];
		if (current === void 0) throw new Error(`Cannot resolve $ref "${pointer}": "${part}" not found`);
	}
	return current;
}

//#endregion
//#region node_modules/incur/dist/Openapi.js
/** Generates incur command entries from an OpenAPI spec. Resolves all `$ref` pointers. */
async function generateCommands(spec$1, fetch$1, options = {}) {
	const resolved = dereference(structuredClone(spec$1));
	const commands = /* @__PURE__ */ new Map();
	const paths = resolved.paths ?? {};
	for (const [path$2, methods] of Object.entries(paths)) for (const [method, operation] of Object.entries(methods)) {
		if (method.startsWith("x-")) continue;
		const op = operation;
		const name = op.operationId ?? `${method}_${path$2.replace(/[/{}]/g, "_")}`;
		const httpMethod = method.toUpperCase();
		const pathParams = (op.parameters ?? []).filter((p) => p.in === "path");
		const queryParams = (op.parameters ?? []).filter((p) => p.in === "query");
		const bodySchema = op.requestBody?.content?.["application/json"]?.schema;
		const bodyProps = bodySchema?.properties ?? {};
		const bodyRequired = new Set(bodySchema?.required ?? []);
		let argsSchema;
		if (pathParams.length > 0) {
			const shape = {};
			for (const p of pathParams) {
				let zodType = p.schema ? toZod(p.schema) : string$5();
				if (p.description) zodType = zodType.describe(p.description);
				shape[p.name] = coerceIfNeeded(zodType);
			}
			argsSchema = object(shape);
		}
		const optShape = {};
		for (const p of queryParams) {
			let zodType = p.schema ? toZod(p.schema) : string$5();
			if (!p.required) zodType = zodType.optional();
			if (p.description) zodType = zodType.describe(p.description);
			optShape[p.name] = coerceIfNeeded(zodType);
		}
		for (const [key, schema$6] of Object.entries(bodyProps)) {
			let zodType = toZod(schema$6);
			if (!bodyRequired.has(key)) zodType = zodType.optional();
			optShape[key] = zodType;
		}
		const optionsSchema = Object.keys(optShape).length > 0 ? object(optShape) : void 0;
		commands.set(name, {
			description: op.summary ?? op.description,
			args: argsSchema,
			options: optionsSchema,
			run: createHandler({
				basePath: options.basePath,
				fetch: fetch$1,
				httpMethod,
				path: path$2,
				pathParams,
				queryParams,
				bodyProps
			})
		});
	}
	return commands;
}
function createHandler(config$1) {
	return async (context) => {
		const { args = {}, options = {} } = context;
		let urlPath = (config$1.basePath ?? "") + config$1.path;
		for (const p of config$1.pathParams) {
			const value = args[p.name];
			if (value !== void 0) urlPath = urlPath.replace(`{${p.name}}`, String(value));
		}
		const query = new URLSearchParams();
		for (const p of config$1.queryParams) {
			const value = options[p.name];
			if (value !== void 0) query.set(p.name, String(value));
		}
		let body;
		const bodyKeys = Object.keys(config$1.bodyProps);
		if (bodyKeys.length > 0) {
			const bodyObj = {};
			for (const key of bodyKeys) if (options[key] !== void 0) bodyObj[key] = options[key];
			if (Object.keys(bodyObj).length > 0) body = JSON.stringify(bodyObj);
		}
		const input = {
			path: urlPath,
			method: config$1.httpMethod,
			headers: new Headers(),
			body,
			query
		};
		if (body) input.headers.set("content-type", "application/json");
		const request = buildRequest(input);
		const response = await config$1.fetch(request);
		const output = await parseResponse(response);
		if (!output.ok) return context.error({
			code: `HTTP_${output.status}`,
			message: typeof output.data === "object" && output.data !== null && "message" in output.data ? String(output.data.message) : typeof output.data === "string" ? output.data : `HTTP ${output.status}`
		});
		return output.data;
	};
}
/** Converts a JSON Schema object to a Zod schema. */
function toZod(schema$6) {
	return fromJSONSchema(schema$6);
}
/** Wraps a Zod schema with coercion if the base type is number or boolean (argv is always strings). */
function coerceIfNeeded(schema$6) {
	const isOptional = schema$6 instanceof ZodOptional;
	const inner = isOptional ? schema$6.unwrap() : schema$6;
	const coerced = (() => {
		if (inner instanceof ZodNumber) return isOptional ? number().optional() : number();
		if (inner instanceof ZodBoolean) return isOptional ? boolean().optional() : boolean();
		if (inner instanceof ZodUnion) {
			const options = inner._zod?.def?.options;
			if (options?.some((o) => o instanceof ZodNumber)) return isOptional ? number().optional() : number();
			if (options?.some((o) => o instanceof ZodBoolean)) return isOptional ? boolean().optional() : boolean();
		}
	})();
	if (!coerced) return schema$6;
	const desc = schema$6.description ?? inner.description;
	return desc ? coerced.describe(desc) : coerced;
}

//#endregion
//#region node_modules/incur/dist/Skill.js
var import_dist$2 = require_dist();
/** Generates a compact Markdown command index for `--llms`. */
function index(name, commands, description) {
	const lines = [`# ${name}`];
	if (description) lines.push("", description);
	lines.push("");
	lines.push("| Command | Description |");
	lines.push("|---------|-------------|");
	for (const cmd of commands) {
		const signature = buildSignature(name, cmd);
		const desc = cmd.description ?? "";
		lines.push(`| \`${signature}\` | ${desc} |`);
	}
	lines.push("", `Run \`${name} --llms-full\` for full manifest. Run \`${name} <command> --schema\` for argument details.`);
	return lines.join("\n");
}
/** @internal Builds a command signature with arg placeholders. */
function buildSignature(cli$1, cmd) {
	const base = !cmd.name ? cli$1 : `${cli$1} ${cmd.name}`;
	if (!cmd.args) return base;
	const shape = cmd.args.shape;
	const json$1 = toJsonSchema(cmd.args);
	const required$1 = new Set(json$1.required ?? []);
	return `${base} ${Object.keys(shape).map((k) => required$1.has(k) ? `<${k}>` : `[${k}]`).join(" ")}`;
}
/** Generates a Markdown skill file from a CLI name and collected command data. */
function generate(name, commands, groups = /* @__PURE__ */ new Map()) {
	if (!(groups.size > 0)) return commands.map((cmd) => renderCommandBody(name, cmd)).join("\n\n");
	const sections = [`# ${name}`];
	let lastGroup;
	for (const cmd of commands) {
		const segment = !cmd.name ? "" : cmd.name.split(" ")[0];
		if (segment !== lastGroup) {
			lastGroup = segment;
			if (segment) {
				const desc = groups.get(segment);
				const heading = desc ? `## ${name} ${segment}\n\n${desc}` : `## ${name} ${segment}`;
				sections.push(heading);
			}
		}
		sections.push(renderCommandBody(name, cmd, segment ? 3 : 2));
	}
	return sections.join("\n\n");
}
/** Splits commands into skill files grouped by depth. */
function split(name, commands, depth, groups = /* @__PURE__ */ new Map()) {
	if (depth === 0) return [{
		dir: "",
		content: renderGroup(name, name, commands, groups, name)
	}];
	const buckets = /* @__PURE__ */ new Map();
	for (const cmd of commands) {
		if (!cmd.name) {
			const key$1 = slugify(name);
			const bucket$1 = buckets.get(key$1) ?? [];
			bucket$1.push(cmd);
			buckets.set(key$1, bucket$1);
			continue;
		}
		const key = cmd.name.split(" ").slice(0, depth).join("-");
		const bucket = buckets.get(key) ?? [];
		bucket.push(cmd);
		buckets.set(key, bucket);
	}
	return [...buckets.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([dir, cmds]) => {
		const first = cmds[0];
		const prefix = !first.name ? "" : first.name.split(" ").slice(0, depth).join(" ");
		return {
			dir,
			content: renderGroup(name, prefix ? `${name} ${prefix}` : name, cmds, groups, prefix || void 0)
		};
	});
}
/** @internal Renders a group-level frontmatter + command bodies. */
function renderGroup(cli$1, title, cmds, groups, prefix) {
	const groupDesc = prefix ? groups.get(prefix) : void 0;
	const fallbackDesc = cmds.length === 1 && cmds[0].description ? cmds[0].description : void 0;
	const desc = groupDesc ?? fallbackDesc;
	const description = desc ? `${desc.replace(/\.$/, "")}. Run \`${title} --help\` for usage details.` : `Run \`${title} --help\` for usage details.`;
	return `${`---\n${(0, import_dist$2.stringify)({
		name: slugify(title),
		description,
		requires_bin: cli$1,
		command: title
	}, { lineWidth: 0 }).trimEnd()}\n---`}\n\n${cmds.map((cmd) => renderCommandBody(cli$1, cmd)).join("\n\n---\n\n")}`;
}
/** @internal Renders a command's heading and sections without frontmatter. */
function renderCommandBody(cli$1, cmd, level = 1) {
	const fullName = !cmd.name ? cli$1 : `${cli$1} ${cmd.name}`;
	const sections = [];
	const h = (n) => "#".repeat(n);
	let heading = `${h(level)} ${fullName}`;
	if (cmd.description) heading += `\n\n${cmd.description}`;
	sections.push(heading);
	const sub = h(level + 1);
	if (cmd.args) {
		const shape = cmd.args.shape;
		const json$1 = toJsonSchema(cmd.args);
		const required$1 = new Set(json$1.required ?? []);
		const properties = json$1.properties;
		const rows = Object.entries(shape).map(([key, field]) => {
			const prop = properties?.[key];
			return `| \`${key}\` | \`${resolveTypeName(prop)}\` | ${required$1.has(key) ? "yes" : "no"} | ${field.description ?? ""} |`;
		});
		sections.push(`${sub} Arguments\n\n| Name | Type | Required | Description |\n|------|------|----------|-------------|\n${rows.join("\n")}`);
	}
	if (cmd.env) {
		const shape = cmd.env.shape;
		const json$1 = toJsonSchema(cmd.env);
		const required$1 = new Set(json$1.required ?? []);
		const properties = json$1.properties;
		const rows = Object.entries(shape).map(([key, field]) => {
			const prop = properties?.[key];
			const type = resolveTypeName(prop);
			const def = prop?.default !== void 0 ? String(prop.default) : "";
			const req = required$1.has(key) ? "yes" : "no";
			const desc = field.description ?? "";
			return `| \`${key}\` | \`${type}\` | ${req} | ${def ? `\`${def}\`` : ""} | ${desc} |`;
		});
		sections.push(`${sub} Environment Variables\n\n| Name | Type | Required | Default | Description |\n|------|------|----------|---------|-------------|\n${rows.join("\n")}`);
	}
	if (cmd.options) {
		const shape = cmd.options.shape;
		const properties = toJsonSchema(cmd.options).properties;
		const rows = Object.entries(shape).map(([key, field]) => {
			const prop = properties?.[key];
			const type = resolveTypeName(prop);
			const def = prop?.default !== void 0 ? String(prop.default) : "";
			const rawDesc = field.description ?? "";
			const desc = prop?.deprecated ? `**Deprecated.** ${rawDesc}` : rawDesc;
			return `| \`--${key}\` | \`${type}\` | ${def ? `\`${def}\`` : ""} | ${desc} |`;
		});
		sections.push(`${sub} Options\n\n| Flag | Type | Default | Description |\n|------|------|---------|-------------|\n${rows.join("\n")}`);
	}
	if (cmd.output) {
		const outputSchema = toJsonSchema(cmd.output);
		const table$1 = schemaToTable(outputSchema);
		if (table$1) sections.push(`${sub} Output\n\n${table$1}`);
		else {
			const type = resolveTypeName(outputSchema);
			sections.push(`${sub} Output\n\nType: \`${type}\``);
		}
	}
	if (cmd.examples && cmd.examples.length > 0) {
		const lines = cmd.examples.map((ex) => {
			return `${ex.description ? `# ${ex.description}\n` : ""}${cli$1} ${ex.command}`;
		});
		sections.push(`${sub} Examples\n\n\`\`\`sh\n${lines.join("\n\n")}\n\`\`\``);
	}
	if (cmd.hint) sections.push(`> ${cmd.hint}`);
	return sections.join("\n\n");
}
/** Computes a deterministic hash of command structure for staleness detection. */
function hash(commands) {
	const data = commands.map((cmd) => ({
		name: cmd.name,
		description: cmd.description,
		args: cmd.args ? toJsonSchema(cmd.args) : void 0,
		env: cmd.env ? toJsonSchema(cmd.env) : void 0,
		options: cmd.options ? toJsonSchema(cmd.options) : void 0,
		output: cmd.output ? toJsonSchema(cmd.output) : void 0
	}));
	return createHash("sha256").update(JSON.stringify(data)).digest("hex").slice(0, 16);
}
/** @internal Renders a JSON Schema object as a Markdown table. Returns `undefined` for non-object schemas. */
function schemaToTable(schema$6, prefix = "") {
	if (schema$6.type !== "object") return void 0;
	const properties = schema$6.properties;
	if (!properties || Object.keys(properties).length === 0) return void 0;
	const required$1 = new Set(schema$6.required ?? []);
	const rows = [];
	for (const [key, prop] of Object.entries(properties)) {
		const name = prefix ? `${prefix}.${key}` : key;
		const type = resolveTypeName(prop);
		const req = required$1.has(key) ? "yes" : "no";
		const desc = prop.description ?? "";
		rows.push(`| \`${name}\` | \`${type}\` | ${req} | ${desc} |`);
		if (prop.type === "object" && prop.properties) {
			const nested = schemaToTable(prop, name);
			if (nested) {
				const lines = nested.split("\n");
				rows.push(...lines.slice(2));
			}
		}
		if (prop.type === "array" && prop.items) {
			const items = prop.items;
			if (items.type === "object" && items.properties) {
				const nested = schemaToTable(items, `${name}[]`);
				if (nested) {
					const lines = nested.split("\n");
					rows.push(...lines.slice(2));
				}
			}
		}
	}
	return `| Field | Type | Required | Description |\n|-------|------|----------|-------------|\n${rows.join("\n")}`;
}
/** @internal Converts a string to a lowercase slug (e.g. `"my-cli"` → `"my-cli"`, `"My Tool"` → `"my-tool"`). */
function slugify(s) {
	return s.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/-{2,}/g, "-").replace(/^-|-$/g, "");
}
/** @internal Resolves a simple type name from a JSON Schema property. */
function resolveTypeName(prop) {
	if (!prop) return "unknown";
	const type = prop.type;
	if (type) return type === "integer" ? "number" : type;
	return "unknown";
}

//#endregion
//#region node_modules/incur/dist/SyncMcp.js
/** Registers the CLI as an MCP server via `npx add-mcp` and direct config writes for unsupported agents. */
async function register(name, options = {}) {
	const runner = detectRunner();
	const command = options.command ?? `${runner} ${detectPackageSpecifier(name)} --mcp`;
	const targetAgents = options.agents ?? [];
	const ampOnly = targetAgents.length === 1 && targetAgents[0] === "amp";
	const agents = [];
	if (!ampOnly) {
		const args = [
			command,
			"--name",
			name,
			"-y"
		];
		if (options.global !== false) args.push("-g");
		for (const agent of targetAgents.filter((a) => a !== "amp")) args.push("-a", agent);
		const [cmd, ...prefix] = runner.split(" ");
		const { stdout } = await exec(cmd, [
			...prefix,
			"add-mcp",
			...args
		]);
		agents.push(...stdout.split("\n").filter((l) => l.includes("✓") || l.includes("✔")).map((l) => l.replace(/[│┃|]/g, "").replace(/.*[✓✔]\s*/, "").replace(/:.*/, "").trim()).filter(Boolean));
	}
	if (targetAgents.length === 0 || targetAgents.includes("amp")) {
		if (registerAmp(name, command)) agents.push("Amp");
	}
	return {
		command,
		agents
	};
}
/** @internal Registers an MCP server in Amp's settings.json. */
function registerAmp(name, command) {
	const configPath = join(homedir(), ".config", "amp", "settings.json");
	let config$1 = {};
	if (existsSync(configPath)) try {
		config$1 = JSON.parse(readFileSync(configPath, "utf-8"));
	} catch {
		return false;
	}
	const [cmd, ...args] = command.split(" ");
	if (!cmd) return false;
	const servers = config$1["amp.mcpServers"] ?? {};
	servers[name] = {
		command: cmd,
		args
	};
	config$1["amp.mcpServers"] = servers;
	const dir = dirname(configPath);
	if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
	writeFileSync(configPath, JSON.stringify(config$1, null, 2) + "\n");
	return true;
}
/** @internal Detects the package specifier used to run this CLI (handles dlx/npx URL and version installs). */
function detectPackageSpecifier(name) {
	const bin = process.argv[1];
	if (!bin) return name;
	const match$1 = bin.match(/^(.+)[/\\]node_modules[/\\]/);
	if (!match$1) return name;
	try {
		const deps = JSON.parse(readFileSync(join(match$1[1], "package.json"), "utf-8")).dependencies ?? {};
		const spec$1 = deps[name];
		if (!spec$1 || Object.keys(deps).length !== 1) return name;
		if (/^https?:\/\//.test(spec$1) || spec$1.startsWith("file:")) return spec$1;
		if (/^\d/.test(spec$1)) return `${name}@${spec$1}`;
	} catch {}
	return name;
}
/** Promisified execFile with stderr in error message. */
function exec(cmd, args) {
	return new Promise((resolve, reject) => {
		execFile(cmd, args, (error, stdout, stderr) => {
			if (error) {
				const msg = stderr?.trim() || stdout?.trim() || error.message;
				reject(new Error(msg));
			} else resolve({
				stdout,
				stderr
			});
		});
	});
}

//#endregion
//#region node_modules/incur/dist/internal/agents.js
const home = os$1.homedir();
const configHome = process.env.XDG_CONFIG_HOME || path$1.join(home, ".config");
const claudeHome = process.env.CLAUDE_CONFIG_DIR?.trim() || path$1.join(home, ".claude");
const codexHome = process.env.CODEX_HOME?.trim() || path$1.join(home, ".codex");
/** All known agent definitions. */
const all = [
	{
		name: "Amp",
		globalSkillsDir: path$1.join(configHome, "agents", "skills"),
		projectSkillsDir: ".agents/skills",
		universal: true,
		detect: () => fs$2.existsSync(path$1.join(configHome, "amp"))
	},
	{
		name: "Cline",
		globalSkillsDir: path$1.join(home, ".agents", "skills"),
		projectSkillsDir: ".agents/skills",
		universal: true,
		detect: () => fs$2.existsSync(path$1.join(home, ".cline"))
	},
	{
		name: "Codex",
		globalSkillsDir: path$1.join(codexHome, "skills"),
		projectSkillsDir: ".agents/skills",
		universal: true,
		detect: () => fs$2.existsSync(codexHome)
	},
	{
		name: "Cursor",
		globalSkillsDir: path$1.join(home, ".cursor", "skills"),
		projectSkillsDir: ".agents/skills",
		universal: true,
		detect: () => fs$2.existsSync(path$1.join(home, ".cursor"))
	},
	{
		name: "Gemini CLI",
		globalSkillsDir: path$1.join(home, ".gemini", "skills"),
		projectSkillsDir: ".agents/skills",
		universal: true,
		detect: () => fs$2.existsSync(path$1.join(home, ".gemini"))
	},
	{
		name: "GitHub Copilot",
		globalSkillsDir: path$1.join(home, ".copilot", "skills"),
		projectSkillsDir: ".agents/skills",
		universal: true,
		detect: () => fs$2.existsSync(path$1.join(home, ".copilot"))
	},
	{
		name: "Kimi CLI",
		globalSkillsDir: path$1.join(configHome, "agents", "skills"),
		projectSkillsDir: ".agents/skills",
		universal: true,
		detect: () => fs$2.existsSync(path$1.join(home, ".kimi"))
	},
	{
		name: "OpenCode",
		globalSkillsDir: path$1.join(configHome, "opencode", "skills"),
		projectSkillsDir: ".agents/skills",
		universal: true,
		detect: () => fs$2.existsSync(path$1.join(configHome, "opencode"))
	},
	{
		name: "Claude Code",
		globalSkillsDir: path$1.join(claudeHome, "skills"),
		projectSkillsDir: ".claude/skills",
		universal: false,
		detect: () => fs$2.existsSync(claudeHome)
	},
	{
		name: "Windsurf",
		globalSkillsDir: path$1.join(home, ".codeium", "windsurf", "skills"),
		projectSkillsDir: ".windsurf/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(home, ".codeium", "windsurf"))
	},
	{
		name: "Continue",
		globalSkillsDir: path$1.join(home, ".continue", "skills"),
		projectSkillsDir: ".continue/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(home, ".continue"))
	},
	{
		name: "Roo",
		globalSkillsDir: path$1.join(home, ".roo", "skills"),
		projectSkillsDir: ".roo/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(home, ".roo"))
	},
	{
		name: "Kilo",
		globalSkillsDir: path$1.join(home, ".kilocode", "skills"),
		projectSkillsDir: ".kilocode/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(home, ".kilocode"))
	},
	{
		name: "Goose",
		globalSkillsDir: path$1.join(configHome, "goose", "skills"),
		projectSkillsDir: ".goose/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(configHome, "goose"))
	},
	{
		name: "Augment",
		globalSkillsDir: path$1.join(home, ".augment", "skills"),
		projectSkillsDir: ".augment/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(home, ".augment"))
	},
	{
		name: "Trae",
		globalSkillsDir: path$1.join(home, ".trae", "skills"),
		projectSkillsDir: ".trae/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(home, ".trae"))
	},
	{
		name: "Junie",
		globalSkillsDir: path$1.join(home, ".junie", "skills"),
		projectSkillsDir: ".junie/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(home, ".junie"))
	},
	{
		name: "Crush",
		globalSkillsDir: path$1.join(configHome, "crush", "skills"),
		projectSkillsDir: ".crush/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(configHome, "crush"))
	},
	{
		name: "Kiro CLI",
		globalSkillsDir: path$1.join(home, ".kiro", "skills"),
		projectSkillsDir: ".kiro/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(home, ".kiro"))
	},
	{
		name: "Qwen Code",
		globalSkillsDir: path$1.join(home, ".qwen", "skills"),
		projectSkillsDir: ".qwen/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(home, ".qwen"))
	},
	{
		name: "OpenHands",
		globalSkillsDir: path$1.join(home, ".openhands", "skills"),
		projectSkillsDir: ".openhands/skills",
		universal: false,
		detect: () => fs$2.existsSync(path$1.join(home, ".openhands"))
	}
];
/** Detects which agents are installed on the system. */
function detect() {
	return all.filter((a) => a.detect());
}
/**
* Installs skill directories to the canonical location and creates symlinks for
* detected non-universal agents.
*
* @param sourceDir - Directory containing skill subdirectories (each with a `SKILL.md`).
* @param options - Installation options.
* @returns Installed canonical paths.
*/
function install(sourceDir, options = {}) {
	const isGlobal = options.global !== false;
	const cwd = options.cwd || process.cwd();
	const base = isGlobal ? home : cwd;
	const canonicalBase = path$1.join(base, ".agents", "skills");
	const detected = options.agents ?? detect();
	const paths = [];
	const agents = [];
	for (const skill of discoverSkills(sourceDir)) {
		const canonicalDir = path$1.join(canonicalBase, skill.name);
		rmForce(canonicalDir);
		fs$2.mkdirSync(canonicalDir, { recursive: true });
		if (skill.root) fs$2.copyFileSync(path$1.join(skill.dir, "SKILL.md"), path$1.join(canonicalDir, "SKILL.md"));
		else fs$2.cpSync(skill.dir, canonicalDir, { recursive: true });
		paths.push(canonicalDir);
		for (const agent of detected) {
			if (agent.universal) continue;
			const agentSkillsDir = isGlobal ? agent.globalSkillsDir : path$1.join(cwd, agent.projectSkillsDir);
			const agentDir = path$1.join(agentSkillsDir, skill.name);
			if (agentDir === canonicalDir) continue;
			try {
				rmForce(agentDir);
				fs$2.mkdirSync(path$1.dirname(agentDir), { recursive: true });
				const realLinkDir = resolveParent(path$1.dirname(agentDir));
				const realTarget = resolveParent(canonicalDir);
				const rel = path$1.relative(realLinkDir, realTarget);
				fs$2.symlinkSync(rel, agentDir);
				agents.push({
					agent: agent.name,
					path: agentDir,
					mode: "symlink"
				});
			} catch {
				try {
					fs$2.cpSync(canonicalDir, agentDir, { recursive: true });
					agents.push({
						agent: agent.name,
						path: agentDir,
						mode: "copy"
					});
				} catch {}
			}
		}
	}
	return {
		paths,
		agents
	};
}
/**
* Removes a skill by name from the canonical location and all detected agent directories.
*/
function remove(skillName, options = {}) {
	const isGlobal = options.global !== false;
	const cwd = options.cwd || process.cwd();
	const base = isGlobal ? home : cwd;
	rmForce(path$1.join(base, ".agents", "skills", skillName));
	for (const agent of detect()) {
		if (agent.universal) continue;
		const agentSkillsDir = isGlobal ? agent.globalSkillsDir : path$1.join(cwd, agent.projectSkillsDir);
		rmForce(path$1.join(agentSkillsDir, skillName));
	}
}
/** Recursively discovers skill directories (those containing a `SKILL.md`). */
function discoverSkills(rootDir) {
	const results = [];
	function visit$6(dir) {
		let entries;
		try {
			entries = fs$2.readdirSync(dir, { withFileTypes: true });
		} catch {
			return;
		}
		for (const entry of entries) {
			if (!entry.isDirectory()) continue;
			const subDir = path$1.join(dir, entry.name);
			const skillPath = path$1.join(subDir, "SKILL.md");
			if (fs$2.existsSync(skillPath)) {
				const nameMatch = fs$2.readFileSync(skillPath, "utf8").match(/^name:\s*(.+)$/m);
				results.push({
					name: sanitizeName(nameMatch?.[1] ?? entry.name),
					dir: subDir
				});
			}
			visit$6(subDir);
		}
	}
	visit$6(rootDir);
	const rootSkill = path$1.join(rootDir, "SKILL.md");
	if (fs$2.existsSync(rootSkill)) {
		const name = sanitizeName(fs$2.readFileSync(rootSkill, "utf8").match(/^name:\s*(.+)$/m)?.[1] ?? "skill");
		if (!results.some((r) => r.name === name)) results.push({
			name,
			dir: rootDir,
			root: true
		});
	}
	return results;
}
/** Sanitizes a skill name for use as a directory name. */
function sanitizeName(name) {
	return name.trim().replace(/[/\\]/g, "-").replace(/\.\./g, "").slice(0, 255);
}
/** Removes a file, directory, or symlink (including broken symlinks). */
function rmForce(target) {
	try {
		if (fs$2.lstatSync(target).isSymbolicLink()) fs$2.unlinkSync(target);
		else fs$2.rmSync(target, {
			recursive: true,
			force: true
		});
	} catch {}
}
/** Resolves parent directories through symlinks. */
function resolveParent(dir) {
	try {
		return fs$2.realpathSync(dir);
	} catch {
		const parent = path$1.dirname(dir);
		if (parent === dir) return dir;
		try {
			return path$1.join(fs$2.realpathSync(parent), path$1.relative(parent, dir));
		} catch {
			return dir;
		}
	}
}

//#endregion
//#region node_modules/incur/dist/SyncSkills.js
var import_dist$1 = require_dist();
/** Generates skill files from a command map and installs them natively. */
async function sync(name, commands, options = {}) {
	const { depth = 1, description, global = true } = options;
	const cwd = options.cwd ?? (global ? resolvePackageRoot() : process.cwd());
	const groups = /* @__PURE__ */ new Map();
	if (description) groups.set(name, description);
	const entries = collectEntries(commands, [], groups, options.rootCommand);
	const files = split(name, entries, depth, groups);
	const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), `incur-skills-${name}-`));
	try {
		const skills = [];
		for (const file$1 of files) {
			const filePath = file$1.dir ? path.join(tmpDir, file$1.dir, "SKILL.md") : path.join(tmpDir, "SKILL.md");
			await fs.mkdir(path.dirname(filePath), { recursive: true });
			await fs.writeFile(filePath, `${file$1.content}\n`);
			const meta$2 = parseFrontmatter(file$1.content);
			skills.push({
				name: meta$2.name ?? (file$1.dir || name),
				description: meta$2.description
			});
		}
		if (options.include) for (const pattern of options.include) {
			const globPattern = pattern === "_root" ? "SKILL.md" : path.join(pattern, "SKILL.md");
			for await (const match$1 of fs.glob(globPattern, { cwd })) try {
				const content = await fs.readFile(path.resolve(cwd, match$1), "utf8");
				const meta$2 = parseFrontmatter(content);
				const skillName = pattern === "_root" ? meta$2.name ?? name : path.basename(path.dirname(match$1));
				const dest = path.join(tmpDir, skillName, "SKILL.md");
				await fs.mkdir(path.dirname(dest), { recursive: true });
				await fs.writeFile(dest, content);
				if (!skills.some((s) => s.name === skillName)) skills.push({
					name: skillName,
					description: meta$2.description,
					external: true
				});
			} catch {}
		}
		const { paths, agents } = install(tmpDir, {
			global,
			cwd
		});
		const currentNames = new Set(paths.map((p) => path.basename(p)));
		const prev = readMeta(name);
		if (prev?.skills) for (const old of prev.skills) {
			if (currentNames.has(old)) continue;
			remove(old, {
				global,
				cwd
			});
		}
		const hashEntries = collectEntries(commands, [], void 0, options.rootCommand);
		writeMeta(name, hash(hashEntries), [...currentNames], [...paths, ...agents.map((agent) => agent.path)]);
		return {
			skills: skills.sort((a, b) => a.name.localeCompare(b.name)),
			paths,
			agents
		};
	} finally {
		await fs.rm(tmpDir, {
			recursive: true,
			force: true
		});
	}
}
/** Lists skills derived from a CLI's command map with install status. */
async function list(name, commands, options = {}) {
	const { depth = 1, description } = options;
	const cwd = options.cwd ?? process.cwd();
	const groups = /* @__PURE__ */ new Map();
	if (description) groups.set(name, description);
	const entries = collectEntries(commands, [], groups, options.rootCommand);
	const files = split(name, entries, depth, groups);
	const skills = [];
	const installed = readInstalledSkills(name, { cwd });
	for (const file$1 of files) {
		const meta$2 = parseFrontmatter(file$1.content);
		const skillName = meta$2.name ?? (file$1.dir || name);
		skills.push({
			name: skillName,
			description: meta$2.description,
			installed: installed.has(skillName)
		});
	}
	if (options.include) for (const pattern of options.include) {
		const globPattern = pattern === "_root" ? "SKILL.md" : path.join(pattern, "SKILL.md");
		for await (const match$1 of fs.glob(globPattern, { cwd })) try {
			const meta$2 = parseFrontmatter(await fs.readFile(path.resolve(cwd, match$1), "utf8"));
			const skillName = pattern === "_root" ? meta$2.name ?? name : path.basename(path.dirname(match$1));
			if (!skills.some((s) => s.name === skillName)) skills.push({
				name: skillName,
				description: meta$2.description,
				installed: installed.has(skillName)
			});
		} catch {}
	}
	return skills.sort((a, b) => a.name.localeCompare(b.name));
}
/** Returns whether any previously synced skills are still installed on disk. */
function hasInstalledSkills(name, options = {}) {
	return readInstalledSkills(name, options).size > 0;
}
/** Recursively collects leaf commands as `Skill.CommandInfo`. */
function collectEntries(commands, prefix, groups = /* @__PURE__ */ new Map(), rootCommand) {
	const result = [];
	if (rootCommand) {
		const cmd = {};
		if (rootCommand.description) cmd.description = rootCommand.description;
		if (rootCommand.args) cmd.args = rootCommand.args;
		if (rootCommand.env) cmd.env = rootCommand.env;
		if (rootCommand.hint) cmd.hint = rootCommand.hint;
		if (rootCommand.options) cmd.options = rootCommand.options;
		if (rootCommand.output) cmd.output = rootCommand.output;
		const examples = formatExamples(rootCommand.examples);
		if (examples) cmd.examples = examples;
		result.push(cmd);
	}
	for (const [name, entry] of commands) {
		const entryPath = [...prefix, name];
		if ("_group" in entry && entry._group) {
			if (entry.description) groups.set(entryPath.join(" "), entry.description);
			result.push(...collectEntries(entry.commands, entryPath, groups));
		} else {
			const cmd = { name: entryPath.join(" ") };
			if (entry.description) cmd.description = entry.description;
			if (entry.args) cmd.args = entry.args;
			if (entry.env) cmd.env = entry.env;
			if (entry.hint) cmd.hint = entry.hint;
			if (entry.options) cmd.options = entry.options;
			if (entry.output) cmd.output = entry.output;
			const examples = formatExamples(entry.examples);
			if (examples) {
				const cmdName = entryPath.join(" ");
				cmd.examples = examples.map((e) => ({
					...e,
					command: e.command ? `${cmdName} ${e.command}` : cmdName
				}));
			}
			result.push(cmd);
		}
	}
	return result.sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""));
}
function parseFrontmatter(content) {
	const match$1 = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match$1) return {};
	const meta$2 = (0, import_dist$1.parse)(match$1[1]);
	if (!meta$2 || typeof meta$2 !== "object") return {};
	return meta$2;
}
/** Resolves the package root from the executing bin script (`process.argv[1]`). Walks up from the bin's directory looking for `package.json`. Falls back to `process.cwd()`. */
function resolvePackageRoot() {
	const bin = process.argv[1];
	if (!bin) return process.cwd();
	let dir = path.dirname((() => {
		try {
			return fsSync.realpathSync(bin);
		} catch {
			return process.execPath;
		}
	})());
	const root = path.parse(dir).root;
	while (dir !== root) {
		try {
			fsSync.accessSync(path.join(dir, "package.json"));
			return dir;
		} catch {}
		dir = path.dirname(dir);
	}
	return process.cwd();
}
/** Returns the hash file path for a CLI. */
function hashPath(name) {
	const dir = process.env.XDG_DATA_HOME || path.join(os.homedir(), ".local", "share");
	return path.join(dir, "incur", `${name}.json`);
}
/** @internal Writes the skills metadata for staleness detection and cleanup. */
function writeMeta(name, hash$2, skills, paths) {
	const file$1 = hashPath(name);
	const dir = path.dirname(file$1);
	if (!fsSync.existsSync(dir)) fsSync.mkdirSync(dir, { recursive: true });
	fsSync.writeFileSync(file$1, JSON.stringify({
		hash: hash$2,
		skills,
		paths,
		at: (/* @__PURE__ */ new Date()).toISOString()
	}) + "\n");
}
/** @internal Reads the stored metadata for a CLI. */
function readMeta(name) {
	try {
		return JSON.parse(fsSync.readFileSync(hashPath(name), "utf-8"));
	} catch {
		return;
	}
}
/** Reads the names of previously synced skills that are still installed on disk. */
function readInstalledSkills(name, options = {}) {
	const meta$2 = readMeta(name);
	if (!meta$2?.skills?.length) return /* @__PURE__ */ new Set();
	if (meta$2.paths?.length) {
		const installed$1 = meta$2.paths.filter((skillPath) => isInstalledSkillPath(skillPath)).map((skillPath) => path.basename(skillPath));
		return new Set(installed$1);
	}
	const cwd = options.cwd ?? process.cwd();
	const bases = [path.join(os.homedir(), ".agents", "skills"), path.join(cwd, ".agents", "skills")];
	const installed = meta$2.skills.filter((skill) => bases.some((base) => isInstalledSkillPath(path.join(base, skill))));
	return new Set(installed);
}
/** Returns whether a skill directory currently contains a skill file. */
function isInstalledSkillPath(skillPath) {
	return fsSync.existsSync(path.join(skillPath, "SKILL.md"));
}
/** Reads the stored skills hash for a CLI. Returns `undefined` if no hash exists. */
function readHash(name) {
	return readMeta(name)?.hash;
}

//#endregion
//#region node_modules/incur/dist/Cli.js
var import_dist = require_dist();
function create(nameOrDefinition, definition) {
	const name = typeof nameOrDefinition === "string" ? nameOrDefinition : nameOrDefinition.name;
	const def = typeof nameOrDefinition === "string" ? definition ?? {} : nameOrDefinition;
	const rootDef = "run" in def ? def : void 0;
	const rootFetch = "fetch" in def ? def.fetch : void 0;
	const commands = /* @__PURE__ */ new Map();
	const middlewares = [];
	const pending = [];
	const mcpHandler = createMcpHttpHandler(name, def.version ?? "0.0.0");
	const cli$1 = {
		name,
		description: def.description,
		env: def.env,
		vars: def.vars,
		command(nameOrCli, def$1) {
			if (typeof nameOrCli === "string") {
				if (def$1 && "fetch" in def$1 && typeof def$1.fetch === "function") {
					if (def$1.openapi) {
						pending.push(generateCommands(def$1.openapi, def$1.fetch, { basePath: def$1.basePath }).then((generated) => {
							commands.set(nameOrCli, {
								_group: true,
								description: def$1.description,
								commands: generated,
								...def$1.outputPolicy ? { outputPolicy: def$1.outputPolicy } : void 0
							});
						}));
						return cli$1;
					}
					commands.set(nameOrCli, {
						_fetch: true,
						basePath: def$1.basePath,
						description: def$1.description,
						fetch: def$1.fetch,
						...def$1.outputPolicy ? { outputPolicy: def$1.outputPolicy } : void 0
					});
					return cli$1;
				}
				commands.set(nameOrCli, def$1);
				if (def$1.aliases) for (const a of def$1.aliases) commands.set(a, {
					_alias: true,
					target: nameOrCli
				});
				return cli$1;
			}
			const mountedRootDef = toRootDefinition.get(nameOrCli);
			if (mountedRootDef) {
				commands.set(nameOrCli.name, mountedRootDef);
				const rootAliases = toRootAliases.get(nameOrCli);
				if (rootAliases) for (const a of rootAliases) commands.set(a, {
					_alias: true,
					target: nameOrCli.name
				});
				return cli$1;
			}
			const sub = nameOrCli;
			const subCommands = toCommands.get(sub);
			const subOutputPolicy = toOutputPolicy.get(sub);
			const subMiddlewares = toMiddlewares.get(sub);
			commands.set(sub.name, {
				_group: true,
				description: sub.description,
				commands: subCommands,
				...subOutputPolicy ? { outputPolicy: subOutputPolicy } : void 0,
				...subMiddlewares?.length ? { middlewares: subMiddlewares } : void 0
			});
			return cli$1;
		},
		async fetch(req) {
			if (pending.length > 0) await Promise.all(pending);
			return fetchImpl(name, commands, req, {
				envSchema: def.env,
				mcpHandler,
				middlewares,
				name,
				rootCommand: rootDef,
				vars: def.vars,
				version: def.version
			});
		},
		async serve(argv = process.argv.slice(2), serveOptions = {}) {
			if (pending.length > 0) await Promise.all(pending);
			return serveImpl(name, commands, argv, {
				...serveOptions,
				aliases: def.aliases,
				config: def.config,
				description: def.description,
				envSchema: def.env,
				format: def.format,
				mcp: def.mcp,
				middlewares,
				outputPolicy: def.outputPolicy,
				rootCommand: rootDef,
				rootFetch,
				sync: def.sync,
				vars: def.vars,
				version: def.version
			});
		},
		use(handler) {
			middlewares.push(handler);
			return cli$1;
		}
	};
	if (rootDef) toRootDefinition.set(cli$1, rootDef);
	if (rootDef && def.aliases) toRootAliases.set(cli$1, def.aliases);
	if (def.options) toRootOptions.set(cli$1, def.options);
	if (def.config !== void 0) toConfigEnabled.set(cli$1, true);
	if (def.outputPolicy) toOutputPolicy.set(cli$1, def.outputPolicy);
	toMiddlewares.set(cli$1, middlewares);
	toCommands.set(cli$1, commands);
	return cli$1;
}
/** @internal Shared serve implementation for both router and leaf CLIs. */
async function serveImpl(name, commands, argv, options = {}) {
	const stdout = options.stdout ?? ((s) => process.stdout.write(s));
	const exit = options.exit ?? ((code) => process.exit(code));
	const human = process.stdout.isTTY === true;
	const configEnabled = options.config !== void 0;
	const configFlag = options.config?.flag;
	const displayName = resolveDisplayName(name, options.aliases);
	function writeln(s) {
		stdout(s.endsWith("\n") ? s : `${s}\n`);
	}
	let builtinFlags;
	try {
		builtinFlags = extractBuiltinFlags(argv, { configFlag });
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		if (human) writeln(formatHumanError({
			code: "UNKNOWN",
			message
		}));
		else writeln(format({
			code: "UNKNOWN",
			message
		}, "toon"));
		exit(1);
		return;
	}
	const { fullOutput, format: formatFlag, formatExplicit, filterOutput, tokenLimit, tokenOffset, tokenCount, llms, llmsFull, mcp: mcpFlag, help, version: version$1, schema: schema$6, configPath, configDisabled, rest: filtered } = builtinFlags;
	if (mcpFlag) {
		await serve(name, options.version ?? "0.0.0", commands, {
			middlewares: options.middlewares,
			env: options.envSchema,
			vars: options.vars,
			version: options.version
		});
		return;
	}
	const completeShell = process.env.COMPLETE;
	if (completeShell) {
		const sepIdx = argv.indexOf("--");
		const words = sepIdx !== -1 ? argv.slice(sepIdx + 1) : argv;
		if (words.length === 0) stdout([name, ...options.aliases ?? []].map((n) => register$1(completeShell, n)).join("\n"));
		else {
			const index$1 = Number(process.env._COMPLETE_INDEX ?? words.length - 1);
			const candidates = complete(commands, options.rootCommand, words, index$1);
			const current = words[index$1] ?? "";
			const nonFlags = words.slice(0, index$1).filter((w) => !w.startsWith("-"));
			if (nonFlags.length <= 1) {
				for (const b of builtinCommands) if (b.name.startsWith(current) && !candidates.some((c) => c.value === b.name)) candidates.push({
					value: b.name,
					description: b.description,
					...b.subcommands ? { noSpace: true } : void 0
				});
			} else if (nonFlags.length === 2) {
				const parent = nonFlags[nonFlags.length - 1];
				const builtin = findBuiltin(parent);
				if (builtin?.subcommands) {
					for (const sub of builtin.subcommands) for (const value of [sub.name, ...sub.aliases ?? []]) if (value.startsWith(current) && !candidates.some((c) => c.value === value)) candidates.push({
						value,
						description: sub.description
					});
				}
			}
			const out = format$1(completeShell, candidates);
			if (out) stdout(out);
		}
		return;
	}
	let skillsCta;
	if (!llms && !llmsFull && !schema$6 && !help && !version$1) {
		const isSkillsAdd = builtinIdx(filtered, name, "skills") !== -1;
		const isMcpAdd = builtinIdx(filtered, name, "mcp") !== -1;
		if (!isSkillsAdd && !isMcpAdd) {
			const stored = readHash(name);
			if (stored && hasInstalledSkills(name, { cwd: options.sync?.cwd })) {
				const entries = collectSkillCommands(commands, [], /* @__PURE__ */ new Map(), options.rootCommand);
				if (hash(entries) !== stored) skillsCta = {
					description: "Skills are out of date:",
					commands: [{
						command: process.env.npm_config_user_agent || process.env.npm_execpath ? `${detectRunner()} ${detectPackageSpecifier(name)} skills add` : `${displayName} skills add`,
						description: "sync outdated skills"
					}]
				};
			}
		}
	}
	if (llms || llmsFull) {
		let scopedCommands = commands;
		const prefix = [];
		let scopedDescription = options.description;
		for (const token of filtered) {
			const rawEntry = scopedCommands.get(token);
			if (!rawEntry) break;
			const entry = resolveAlias(scopedCommands, rawEntry);
			if (isGroup(entry)) {
				scopedCommands = entry.commands;
				scopedDescription = entry.description;
				prefix.push(token);
			} else {
				scopedCommands = new Map([[token, entry]]);
				break;
			}
		}
		const scopedRoot = prefix.length === 0 ? options.rootCommand : void 0;
		if (llmsFull) {
			if (!formatExplicit || formatFlag === "md") {
				const groups = /* @__PURE__ */ new Map();
				const cmds = collectSkillCommands(scopedCommands, prefix, groups, scopedRoot);
				const scopedName = prefix.length > 0 ? `${name} ${prefix.join(" ")}` : name;
				writeln(generate(scopedName, cmds, groups));
				return;
			}
			writeln(format(buildManifest(scopedCommands, prefix), formatFlag));
			return;
		}
		if (!formatExplicit || formatFlag === "md") {
			const cmds = collectSkillCommands(scopedCommands, prefix, /* @__PURE__ */ new Map(), scopedRoot);
			const scopedName = prefix.length > 0 ? `${name} ${prefix.join(" ")}` : name;
			writeln(index(scopedName, cmds, scopedDescription));
			return;
		}
		writeln(format(buildIndexManifest(scopedCommands, prefix), formatFlag));
		return;
	}
	const completionsIdx = builtinIdx(filtered, name, "completions");
	if (completionsIdx !== -1) {
		const shell = filtered[completionsIdx + 1];
		if (help || !shell) {
			const b = findBuiltin("completions");
			writeln(formatCommand(`${name} completions`, {
				args: b.args,
				description: b.description,
				hideGlobalOptions: true,
				hint: b.hint?.(name)
			}));
			return;
		}
		if (!shells.includes(shell)) {
			writeln(formatHumanError({
				code: "INVALID_SHELL",
				message: `Unknown shell '${shell}'. Supported: ${shells.join(", ")}`
			}));
			exit(1);
			return;
		}
		writeln([name, ...options.aliases ?? []].map((n) => register$1(shell, n)).join("\n"));
		return;
	}
	const skillsIdx = builtinIdx(filtered, name, "skills");
	if (skillsIdx !== -1) {
		const builtin = findBuiltin("skills");
		const skillsSub = filtered[skillsIdx + 1];
		const sub = skillsSub ? findBuiltinSubcommand(builtin, skillsSub) : void 0;
		if (skillsSub && !sub) {
			const suggestion = suggest(skillsSub, builtin.subcommands?.flatMap((sub$1) => [sub$1.name, ...sub$1.aliases ?? []]) ?? []);
			const message = `'${skillsSub}' is not a command for '${name} skills'.${suggestion ? ` Did you mean '${suggestion}'?` : ""}`;
			const ctaCommands = [];
			if (suggestion) {
				const corrected = argv.map((t) => t === skillsSub ? suggestion : t);
				ctaCommands.push({ command: `${name} ${corrected.join(" ")}` });
			}
			ctaCommands.push({
				command: `${name} skills --help`,
				description: "see all available commands"
			});
			const cta = {
				description: ctaCommands.length === 1 ? "Suggested command:" : "Suggested commands:",
				commands: ctaCommands
			};
			if (human) {
				writeln(formatHumanError({
					code: "COMMAND_NOT_FOUND",
					message
				}));
				writeln(formatHumanCta(cta));
			} else writeln(format({
				code: "COMMAND_NOT_FOUND",
				message,
				cta
			}, "toon"));
			exit(1);
			return;
		}
		if (!skillsSub) {
			writeln(formatBuiltinHelp(name, builtin));
			return;
		}
		if (sub?.name === "list") {
			if (help) {
				writeln(formatBuiltinSubcommandHelp(name, builtin, "list"));
				return;
			}
			try {
				const result$1 = await list(name, commands, {
					cwd: options.sync?.cwd,
					depth: options.sync?.depth ?? 1,
					description: options.description,
					include: options.sync?.include,
					rootCommand: options.rootCommand
				});
				if (result$1.length === 0) {
					writeln("No skills found.");
					return;
				}
				const lines = [];
				const maxLen = Math.max(...result$1.map((s) => s.name.length));
				for (const s of result$1) {
					const icon = s.installed ? "✓" : "✗";
					const padding = s.description ? `${" ".repeat(maxLen - s.name.length)}  ${s.description}` : "";
					lines.push(`  ${icon} ${s.name}${padding}`);
				}
				const installedCount = result$1.filter((s) => s.installed).length;
				lines.push("");
				lines.push(`${result$1.length} skill${result$1.length === 1 ? "" : "s"} (${installedCount} installed)`);
				writeln(lines.join("\n"));
			} catch (err) {
				writeln(format({
					code: "LIST_SKILLS_FAILED",
					message: err instanceof Error ? err.message : String(err)
				}, formatExplicit ? formatFlag : "toon"));
				exit(1);
			}
			return;
		}
		if (help) {
			writeln(formatBuiltinSubcommandHelp(name, builtin, "add"));
			return;
		}
		const rest$1 = filtered.slice(skillsIdx + 2);
		const depthArg = rest$1.indexOf("--depth");
		const depthEq = rest$1.find((t) => t.startsWith("--depth="));
		const depth = depthArg !== -1 ? Number(rest$1[depthArg + 1]) : depthEq ? Number(depthEq.split("=")[1]) : options.sync?.depth ?? 1;
		const global = rest$1.includes("--no-global") ? false : void 0;
		try {
			stdout("Syncing...");
			const result$1 = await sync(name, commands, {
				cwd: options.sync?.cwd,
				depth,
				description: options.description,
				global,
				include: options.sync?.include,
				rootCommand: options.rootCommand
			});
			stdout("\r\x1B[K");
			const lines = [];
			const skillLabel = (s) => s.name;
			const maxLen = Math.max(...result$1.skills.map((s) => skillLabel(s).length));
			for (const s of result$1.skills) {
				const label = skillLabel(s);
				const padding = s.description ? `${" ".repeat(maxLen - label.length)}  ${s.description}` : "";
				lines.push(`  ✓ ${label}${padding}`);
			}
			lines.push("");
			lines.push(`${result$1.skills.length} skill${result$1.skills.length === 1 ? "" : "s"} synced`);
			const suggestions = options.sync?.suggestions;
			if (suggestions && suggestions.length > 0) {
				lines.push("");
				lines.push(`Your agent can now use ${name}. Try asking:`);
				for (const s of suggestions) lines.push(`  "${s}"`);
			}
			lines.push("");
			lines.push(`Run \`${name} --help\` to see the full command reference.`);
			writeln(lines.join("\n"));
			if (fullOutput || formatExplicit) {
				const output = { skills: result$1.paths };
				if (fullOutput && result$1.agents.length > 0) output.agents = result$1.agents;
				writeln(format(output, formatExplicit ? formatFlag : "toon"));
			}
		} catch (err) {
			writeln(format({
				code: "SYNC_SKILLS_FAILED",
				message: err instanceof Error ? err.message : String(err)
			}, formatExplicit ? formatFlag : "toon"));
			exit(1);
		}
		return;
	}
	const mcpIdx = builtinIdx(filtered, name, "mcp");
	if (mcpIdx !== -1) {
		const mcpSub = filtered[mcpIdx + 1];
		if (mcpSub && mcpSub !== "add") {
			const suggestion = suggest(mcpSub, ["add"]);
			const message = `'${mcpSub}' is not a command for '${name} mcp'.${suggestion ? ` Did you mean '${suggestion}'?` : ""}`;
			const ctaCommands = [];
			if (suggestion) {
				const corrected = argv.map((t) => t === mcpSub ? suggestion : t);
				ctaCommands.push({ command: `${name} ${corrected.join(" ")}` });
			}
			ctaCommands.push({
				command: `${name} mcp --help`,
				description: "see all available commands"
			});
			const cta = {
				description: ctaCommands.length === 1 ? "Suggested command:" : "Suggested commands:",
				commands: ctaCommands
			};
			if (human) {
				writeln(formatHumanError({
					code: "COMMAND_NOT_FOUND",
					message
				}));
				writeln(formatHumanCta(cta));
			} else writeln(format({
				code: "COMMAND_NOT_FOUND",
				message,
				cta
			}, "toon"));
			exit(1);
			return;
		}
		if (!mcpSub) {
			writeln(formatBuiltinHelp(name, findBuiltin("mcp")));
			return;
		}
		if (help) {
			writeln(formatBuiltinSubcommandHelp(name, findBuiltin("mcp"), "add"));
			return;
		}
		const rest$1 = filtered.slice(mcpIdx + 2);
		const global = rest$1.includes("--no-global") ? false : true;
		let command$1 = options.mcp?.command;
		const agents = [...options.mcp?.agents ?? []];
		for (let i = 0; i < rest$1.length; i++) if ((rest$1[i] === "--command" || rest$1[i] === "-c") && rest$1[i + 1]) command$1 = rest$1[++i];
		else if (rest$1[i] === "--agent" && rest$1[i + 1]) agents.push(rest$1[++i]);
		try {
			stdout("Registering MCP server...");
			const result$1 = await register(name, {
				command: command$1,
				global,
				agents
			});
			stdout("\r\x1B[K");
			const lines = [];
			lines.push(`✓ Registered ${name} as MCP server`);
			if (result$1.agents.length > 0) lines.push(`  Agents: ${result$1.agents.join(", ")}`);
			lines.push("");
			lines.push(`Agents can now use ${name} tools.`);
			const suggestions = options.sync?.suggestions;
			if (suggestions && suggestions.length > 0) {
				lines.push("");
				lines.push("Try asking:");
				for (const s of suggestions) lines.push(`  "${s}"`);
			}
			writeln(lines.join("\n"));
			if (fullOutput || formatExplicit) writeln(format({
				name,
				command: result$1.command,
				agents: result$1.agents
			}, formatExplicit ? formatFlag : "toon"));
		} catch (err) {
			writeln(format({
				code: "MCP_ADD_FAILED",
				message: err instanceof Error ? err.message : String(err)
			}, formatExplicit ? formatFlag : "toon"));
			exit(1);
		}
		return;
	}
	if (version$1 && !help && options.version) {
		writeln(options.version);
		return;
	}
	if (filtered.length === 0) {
		if (options.rootCommand && human && options.rootCommand.args && hasRequiredArgs(options.rootCommand.args)) {
			const cmd = options.rootCommand;
			writeln(formatCommand(name, {
				alias: cmd.alias,
				aliases: options.aliases,
				configFlag,
				description: cmd.description ?? options.description,
				version: options.version,
				args: cmd.args,
				env: cmd.env,
				envSource: options.env,
				hint: cmd.hint,
				options: cmd.options,
				examples: formatExamples(cmd.examples),
				usage: cmd.usage,
				commands: commands.size > 0 ? collectHelpCommands(commands) : void 0,
				root: true
			}));
			return;
		}
		if (options.rootCommand || options.rootFetch) {} else {
			writeln(formatRoot(name, {
				aliases: options.aliases,
				configFlag,
				description: options.description,
				version: options.version,
				commands: collectHelpCommands(commands),
				root: true
			}));
			return;
		}
	}
	const resolved = filtered.length === 0 && options.rootCommand ? {
		command: options.rootCommand,
		path: name,
		rest: []
	} : filtered.length === 0 && options.rootFetch ? {
		fetchGateway: {
			_fetch: true,
			fetch: options.rootFetch,
			description: options.description
		},
		middlewares: [],
		path: name,
		rest: []
	} : resolveCommand(commands, filtered);
	if (help && "fetchGateway" in resolved) {
		writeln(formatFetchHelp(resolved.path === name ? name : `${name} ${resolved.path}`, resolved.fetchGateway.description));
		return;
	}
	if (help) {
		if ("help" in resolved || "error" in resolved) {
			const helpName = "help" in resolved ? `${name} ${resolved.path}` : name;
			const helpDesc = "help" in resolved ? resolved.description : options.description;
			const helpCmds = "help" in resolved ? resolved.commands : commands;
			const isRoot = helpName === name;
			if (isRoot && options.rootCommand && helpCmds.size > 0) {
				const cmd = options.rootCommand;
				writeln(formatCommand(name, {
					alias: cmd.alias,
					aliases: options.aliases,
					configFlag,
					description: cmd.description ?? options.description,
					version: options.version,
					args: cmd.args,
					env: cmd.env,
					envSource: options.env,
					hint: cmd.hint,
					options: cmd.options,
					examples: formatExamples(cmd.examples),
					usage: cmd.usage,
					commands: collectHelpCommands(helpCmds),
					root: true
				}));
			} else writeln(formatRoot(helpName, {
				aliases: isRoot ? options.aliases : void 0,
				configFlag,
				description: helpDesc,
				version: isRoot ? options.version : void 0,
				commands: collectHelpCommands(helpCmds),
				root: isRoot
			}));
		} else if ("command" in resolved) {
			const cmd = resolved.command;
			const isRootCmd = resolved.path === name;
			const commandName = isRootCmd ? name : `${name} ${resolved.path}`;
			const helpSubcommands = isRootCmd && options.rootCommand && commands.size > 0 ? collectHelpCommands(commands) : void 0;
			writeln(formatCommand(commandName, {
				alias: cmd.alias,
				aliases: isRootCmd ? options.aliases : cmd.aliases,
				configFlag,
				description: cmd.description,
				version: isRootCmd ? options.version : void 0,
				args: cmd.args,
				env: cmd.env,
				envSource: options.env,
				hint: cmd.hint,
				options: cmd.options,
				examples: formatExamples(cmd.examples),
				usage: cmd.usage,
				commands: helpSubcommands,
				root: isRootCmd
			}));
		}
		return;
	}
	if (schema$6) {
		if ("help" in resolved) {
			writeln(formatRoot(`${name} ${resolved.path}`, {
				configFlag,
				description: resolved.description,
				commands: collectHelpCommands(resolved.commands)
			}));
			return;
		}
		if ("error" in resolved) {
			const parent = resolved.path ? `${name} ${resolved.path}` : name;
			const suggestion = suggest(resolved.error, resolved.commands.keys());
			const didYouMean = suggestion ? ` Did you mean '${suggestion}'?` : "";
			writeln(`Error: '${resolved.error}' is not a command for '${parent}'.${didYouMean}`);
			exit(1);
			return;
		}
		if ("fetchGateway" in resolved) {
			writeln("--schema is not supported for fetch commands.");
			exit(1);
			return;
		}
		const cmd = resolved.command;
		const format$3 = formatExplicit ? formatFlag : "toon";
		const result$1 = {};
		if (cmd.args) result$1.args = toJsonSchema(cmd.args);
		if (cmd.env) result$1.env = toJsonSchema(cmd.env);
		if (cmd.options) result$1.options = toJsonSchema(cmd.options);
		if (cmd.output) result$1.output = toJsonSchema(cmd.output);
		writeln(format(result$1, format$3));
		return;
	}
	if ("help" in resolved) {
		writeln(formatRoot(`${name} ${resolved.path}`, {
			configFlag,
			description: resolved.description,
			commands: collectHelpCommands(resolved.commands)
		}));
		return;
	}
	const start = performance.now();
	const resolvedFormat = "command" in resolved && resolved.command.format;
	const format$2 = formatExplicit ? formatFlag : resolvedFormat || options.format || "toon";
	const rootFallbackBlocked = "error" in resolved && !resolved.path && (() => {
		const candidates = [...resolved.commands.keys()];
		for (const b of builtinCommands) candidates.push(b.name);
		return suggest(resolved.error, candidates) !== void 0;
	})();
	const effective = "error" in resolved && options.rootFetch && !resolved.path && !rootFallbackBlocked ? {
		fetchGateway: {
			_fetch: true,
			fetch: options.rootFetch,
			description: options.description
		},
		middlewares: [],
		path: name,
		rest: filtered
	} : "error" in resolved && options.rootCommand && !resolved.path && !rootFallbackBlocked ? {
		command: options.rootCommand,
		path: name,
		rest: filtered
	} : resolved;
	const effectiveOutputPolicy = "outputPolicy" in resolved && resolved.outputPolicy || options.outputPolicy;
	const renderOutput = !(human && !formatExplicit && effectiveOutputPolicy === "agent-only");
	const filterPaths = filterOutput ? parse$1(filterOutput) : void 0;
	function truncate(s) {
		if (tokenLimit == null && tokenOffset == null) return {
			text: s,
			truncated: false
		};
		const total = estimateTokenCount(s);
		const offset = tokenOffset ?? 0;
		const end = tokenLimit != null ? offset + tokenLimit : total;
		if (offset === 0 && end >= total) return {
			text: s,
			truncated: false
		};
		const sliced = sliceByTokens(s, offset, end);
		const actualEnd = Math.min(end, total);
		const nextOffset = actualEnd < total ? actualEnd : void 0;
		return {
			text: `${sliced}\n[truncated: showing tokens ${offset}–${actualEnd} of ${total}]`,
			truncated: true,
			nextOffset
		};
	}
	function write(output) {
		if (filterPaths && output.ok && output.data != null) output = {
			...output,
			data: apply(output.data, filterPaths)
		};
		if (skillsCta) {
			const existing = output.meta.cta;
			output = {
				...output,
				meta: {
					...output.meta,
					cta: existing ? {
						description: existing.description,
						commands: [...existing.commands, ...skillsCta.commands]
					} : skillsCta
				}
			};
		}
		if (tokenCount) {
			const base$1 = output.ok ? output.data : output.error;
			const formatted$1 = base$1 != null ? format(base$1, format$2) : "";
			return writeln(String(estimateTokenCount(formatted$1)));
		}
		const cta = output.meta.cta;
		if (human && !fullOutput) {
			if (output.ok && output.data != null && renderOutput) writeln(truncate(format(output.data, format$2)).text);
			else if (!output.ok) writeln(formatHumanError(output.error));
			if (cta) writeln(formatHumanCta(cta));
			return;
		}
		if (fullOutput) {
			if (tokenLimit != null || tokenOffset != null) {
				const t = truncate(output.ok && output.data != null ? format(output.data, format$2) : !output.ok ? format(output.error, format$2) : "");
				if (t.truncated) {
					const envelope = output.ok ? {
						ok: true,
						data: t.text
					} : {
						ok: false,
						error: t.text
					};
					const meta$2 = { ...output.meta };
					if (t.nextOffset != null) meta$2.nextOffset = t.nextOffset;
					envelope.meta = meta$2;
					return writeln(format(envelope, format$2));
				}
			}
			return writeln(format(output, format$2));
		}
		const base = output.ok ? output.data : output.error;
		const formatted = format(base, format$2);
		if (!cta) {
			if (formatted) writeln(truncate(formatted).text);
			return;
		}
		const payload = typeof base === "object" && base !== null ? {
			...base,
			cta
		} : {
			data: base,
			cta
		};
		writeln(truncate(format(payload, format$2)).text);
	}
	if ("error" in effective) {
		const helpCmd = effective.path ? `${name} ${effective.path} --help` : `${name} --help`;
		const parent = effective.path ? `${name} ${effective.path}` : name;
		const candidates = "commands" in effective ? [...effective.commands.keys()] : [];
		if (!effective.path) for (const b of builtinCommands) candidates.push(b.name);
		const suggestion = suggest(effective.error, candidates);
		const didYouMean = suggestion ? ` Did you mean '${suggestion}'?` : "";
		const message = `'${effective.error}' is not a command for '${parent}'.${didYouMean}`;
		const ctaCommands = [];
		if (suggestion) {
			const corrected = argv.map((t) => t === effective.error ? suggestion : t);
			ctaCommands.push({ command: `${name} ${corrected.join(" ")}` });
		}
		ctaCommands.push({
			command: helpCmd,
			description: "see all available commands"
		});
		const cta = {
			description: ctaCommands.length === 1 ? "Suggested command:" : "Suggested commands:",
			commands: ctaCommands
		};
		if (human && !fullOutput) {
			writeln(formatHumanError({
				code: "COMMAND_NOT_FOUND",
				message
			}));
			writeln(formatHumanCta(skillsCta ? {
				...cta,
				commands: [...cta.commands, ...skillsCta.commands]
			} : cta));
			exit(1);
			return;
		}
		write({
			ok: false,
			error: {
				code: "COMMAND_NOT_FOUND",
				message
			},
			meta: {
				command: effective.error,
				cta,
				duration: `${Math.round(performance.now() - start)}ms`
			}
		});
		exit(1);
		return;
	}
	if ("fetchGateway" in effective) {
		const { fetchGateway, path: path$3, rest: fetchRest } = effective;
		const fetchMiddleware = [...options.middlewares ?? [], ...effective.middlewares ?? []];
		const runFetch = async () => {
			const input = parseArgv(fetchRest);
			if (fetchGateway.basePath) input.path = fetchGateway.basePath + input.path;
			const request = buildRequest(input);
			const response = await fetchGateway.fetch(request);
			if (isStreamingResponse(response)) {
				await handleStreaming(parseStreamingResponse(response), {
					name,
					path: path$3,
					start,
					format: format$2,
					formatExplicit,
					human,
					renderOutput,
					fullOutput,
					truncate,
					write,
					writeln,
					exit
				});
				return;
			}
			const output = await parseResponse(response);
			if (output.ok) write({
				ok: true,
				data: output.data,
				meta: {
					command: path$3,
					duration: `${Math.round(performance.now() - start)}ms`
				}
			});
			else {
				write({
					ok: false,
					error: {
						code: `HTTP_${output.status}`,
						message: typeof output.data === "object" && output.data !== null && "message" in output.data ? String(output.data.message) : typeof output.data === "string" ? output.data : `HTTP ${output.status}`
					},
					meta: {
						command: path$3,
						duration: `${Math.round(performance.now() - start)}ms`
					}
				});
				exit(1);
			}
		};
		try {
			const cliEnv = options.envSchema ? parseEnv(options.envSchema, options.env ?? process.env) : {};
			if (fetchMiddleware.length > 0) {
				const varsMap = options.vars ? options.vars.parse({}) : {};
				const errorFn = (opts) => ({
					[sentinel]: "error",
					...opts
				});
				const mwCtx = {
					agent: !human,
					command: path$3,
					displayName,
					env: cliEnv,
					error: errorFn,
					format: format$2,
					formatExplicit,
					name,
					set(key, value) {
						varsMap[key] = value;
					},
					var: varsMap,
					version: options.version
				};
				const handleMwSentinel = (result$1) => {
					if (!isSentinel(result$1) || result$1[sentinel] !== "error") return;
					const err = result$1;
					const cta = formatCtaBlock(displayName, err.cta);
					write({
						ok: false,
						error: {
							code: err.code,
							message: err.message,
							...err.retryable !== void 0 ? { retryable: err.retryable } : void 0
						},
						meta: {
							command: path$3,
							duration: `${Math.round(performance.now() - start)}ms`,
							...cta ? { cta } : void 0
						}
					});
					exit(err.exitCode ?? 1);
				};
				await fetchMiddleware.reduceRight((next, mw) => async () => {
					handleMwSentinel(await mw(mwCtx, next));
				}, runFetch)();
			} else await runFetch();
		} catch (error) {
			write({
				ok: false,
				error: {
					code: error instanceof IncurError ? error.code : "UNKNOWN",
					message: error instanceof Error ? error.message : String(error)
				},
				meta: {
					command: path$3,
					duration: `${Math.round(performance.now() - start)}ms`
				}
			});
			exit(error instanceof IncurError ? error.exitCode ?? 1 : 1);
		}
		return;
	}
	const { command, path: path$2, rest } = effective;
	const allMiddleware = [
		...options.middlewares ?? [],
		..."middlewares" in resolved ? resolved.middlewares ?? [] : [],
		...command.middleware ?? []
	];
	if (human) emitDeprecationWarnings(rest, command.options, command.alias);
	let defaults;
	if (configEnabled) try {
		defaults = await loadCommandOptionDefaults(name, path$2, {
			configDisabled,
			configPath,
			files: options.config?.files,
			loader: options.config?.loader
		});
	} catch (error) {
		write({
			ok: false,
			error: {
				code: error instanceof IncurError ? error.code : "UNKNOWN",
				message: error instanceof Error ? error.message : String(error)
			},
			meta: {
				command: path$2,
				duration: `${Math.round(performance.now() - start)}ms`
			}
		});
		exit(error instanceof IncurError ? error.exitCode ?? 1 : 1);
		return;
	}
	const result = await execute(command, {
		agent: !human,
		argv: rest,
		defaults,
		displayName,
		env: options.envSchema,
		envSource: options.env,
		format: format$2,
		formatExplicit,
		inputOptions: {},
		middlewares: allMiddleware,
		name,
		path: path$2,
		vars: options.vars,
		version: options.version
	});
	const duration$2 = `${Math.round(performance.now() - start)}ms`;
	if ("stream" in result) {
		await handleStreaming(result.stream, {
			name: displayName,
			path: path$2,
			start,
			format: format$2,
			formatExplicit,
			human,
			renderOutput,
			fullOutput,
			truncate,
			write,
			writeln,
			exit
		});
		return;
	}
	if (result.ok) {
		const cta = formatCtaBlock(displayName, result.cta);
		write({
			ok: true,
			data: result.data,
			meta: {
				command: path$2,
				duration: duration$2,
				...cta ? { cta } : void 0
			}
		});
	} else {
		const cta = formatCtaBlock(displayName, result.cta);
		if (human && !formatExplicit && result.error.fieldErrors) {
			writeln(formatHumanValidationError(displayName, path$2, command, new ValidationError({
				message: result.error.message,
				fieldErrors: result.error.fieldErrors
			}), options.env, configFlag));
			exit(1);
			return;
		}
		write({
			ok: false,
			error: {
				code: result.error.code,
				message: result.error.message,
				...result.error.retryable !== void 0 ? { retryable: result.error.retryable } : void 0,
				...result.error.fieldErrors ? { fieldErrors: result.error.fieldErrors } : void 0
			},
			meta: {
				command: path$2,
				duration: duration$2,
				...cta ? { cta } : void 0
			}
		});
		exit(result.exitCode ?? 1);
	}
}
/** @internal Creates a lazy MCP HTTP handler scoped to a CLI instance. */
function createMcpHttpHandler(name, version$1) {
	let transport;
	return async (req, commands, mcpOptions) => {
		if (!transport) {
			const { McpServer: McpServer$1, WebStandardStreamableHTTPServerTransport } = await import("./dist-BQbUeNjr.js");
			const server = new McpServer$1({
				name,
				version: version$1
			});
			for (const tool of collectTools(commands, [])) {
				const mergedShape = {
					...tool.command.args?.shape,
					...tool.command.options?.shape
				};
				const hasInput = Object.keys(mergedShape).length > 0;
				server.registerTool(tool.name, {
					...tool.description ? { description: tool.description } : void 0,
					...hasInput ? { inputSchema: object(mergedShape) } : void 0
				}, async (...callArgs) => {
					const params = hasInput ? callArgs[0] : {};
					return callTool(tool, params, {
						name,
						version: version$1,
						middlewares: mcpOptions?.middlewares,
						env: mcpOptions?.env,
						vars: mcpOptions?.vars
					});
				});
			}
			transport = new WebStandardStreamableHTTPServerTransport({
				sessionIdGenerator: () => crypto.randomUUID(),
				enableJsonResponse: true
			});
			await server.connect(transport);
		}
		return transport.handleRequest(req);
	};
}
/** @internal Handles an HTTP request by resolving a command and returning a JSON Response. */
async function fetchImpl(name, commands, req, options = {}) {
	const start = performance.now();
	const url$1 = new URL(req.url);
	const segments = url$1.pathname.split("/").filter(Boolean);
	if (segments[0] === "mcp" && segments.length === 1 && options.mcpHandler) return options.mcpHandler(req, commands, {
		middlewares: options.middlewares,
		env: options.envSchema,
		vars: options.vars
	});
	if (segments[0] === ".well-known" && segments[1] === "skills" && segments.length >= 3 && req.method === "GET") {
		const groups = /* @__PURE__ */ new Map();
		const cmds = collectSkillCommands(commands, [], groups, options.rootCommand);
		if (segments[2] === "index.json" && segments.length === 3) {
			const skills = split(name, cmds, 1, groups).map((f) => {
				const fmMatch = f.content.match(/^---\n([\s\S]*?)\n---/);
				const meta$2 = fmMatch ? (0, import_dist.parse)(fmMatch[1]) : {};
				return {
					name: f.dir || name,
					description: meta$2.description ?? "",
					files: ["SKILL.md"]
				};
			});
			return new Response(JSON.stringify({ skills }), {
				status: 200,
				headers: {
					"content-type": "application/json",
					"cache-control": "public, max-age=300"
				}
			});
		}
		if (segments.length === 4 && segments[3] === "SKILL.md") {
			const skillName = segments[2];
			const file$1 = split(name, cmds, 1, groups).find((f) => (f.dir || name) === skillName);
			if (file$1) return new Response(file$1.content, {
				status: 200,
				headers: {
					"content-type": "text/markdown",
					"cache-control": "public, max-age=300"
				}
			});
			return new Response("Not Found", { status: 404 });
		}
		return new Response("Not Found", { status: 404 });
	}
	let inputOptions = {};
	if (req.method === "GET") for (const [key, value] of url$1.searchParams) inputOptions[key] = value;
	else try {
		if ((req.headers.get("content-type") ?? "").includes("application/json")) inputOptions = await req.json();
	} catch {}
	function jsonResponse(body, status) {
		return new Response(JSON.stringify(body), {
			status,
			headers: { "content-type": "application/json" }
		});
	}
	if (segments.length === 0) {
		if (options.rootCommand) return executeCommand(name, options.rootCommand, [], inputOptions, start, options);
		return jsonResponse({
			ok: false,
			error: {
				code: "COMMAND_NOT_FOUND",
				message: "No root command defined."
			},
			meta: {
				command: "/",
				duration: `${Math.round(performance.now() - start)}ms`
			}
		}, 404);
	}
	const resolved = resolveCommand(commands, segments);
	if ("error" in resolved) {
		const parent = resolved.path ? `${name} ${resolved.path}` : name;
		const suggestion = suggest(resolved.error, resolved.commands.keys());
		const didYouMean = suggestion ? ` Did you mean '${suggestion}'?` : "";
		return jsonResponse({
			ok: false,
			error: {
				code: "COMMAND_NOT_FOUND",
				message: `'${resolved.error}' is not a command for '${parent}'.${didYouMean}`
			},
			meta: {
				command: resolved.error,
				duration: `${Math.round(performance.now() - start)}ms`
			}
		}, 404);
	}
	if ("help" in resolved) return jsonResponse({
		ok: false,
		error: {
			code: "COMMAND_NOT_FOUND",
			message: `'${resolved.path}' is a command group. Specify a subcommand.`
		},
		meta: {
			command: resolved.path,
			duration: `${Math.round(performance.now() - start)}ms`
		}
	}, 404);
	if ("fetchGateway" in resolved) return resolved.fetchGateway.fetch(req);
	const { command, path: path$2, rest } = resolved;
	const groupMiddlewares = "middlewares" in resolved ? resolved.middlewares : [];
	return executeCommand(path$2, command, rest, inputOptions, start, {
		...options,
		groupMiddlewares
	});
}
/** @internal Executes a resolved command for the fetch handler and returns a JSON Response. */
async function executeCommand(path$2, command, rest, inputOptions, start, options) {
	function jsonResponse(body, status) {
		return new Response(JSON.stringify(body), {
			status,
			headers: { "content-type": "application/json" }
		});
	}
	const allMiddleware = [
		...options.middlewares ?? [],
		...options.groupMiddlewares ?? [],
		...command.middleware ?? []
	];
	const result = await execute(command, {
		agent: true,
		argv: rest,
		env: options.envSchema,
		format: "json",
		formatExplicit: true,
		inputOptions,
		middlewares: allMiddleware,
		name: options.name ?? path$2,
		parseMode: "split",
		path: path$2,
		vars: options.vars,
		version: options.version
	});
	const duration$2 = `${Math.round(performance.now() - start)}ms`;
	if ("stream" in result) {
		const stream = new ReadableStream({ async start(controller) {
			const encoder = new TextEncoder();
			try {
				for await (const value of result.stream) controller.enqueue(encoder.encode(JSON.stringify({
					type: "chunk",
					data: value
				}) + "\n"));
				controller.enqueue(encoder.encode(JSON.stringify({
					type: "done",
					ok: true,
					meta: { command: path$2 }
				}) + "\n"));
			} catch (error) {
				controller.enqueue(encoder.encode(JSON.stringify({
					type: "error",
					ok: false,
					error: {
						code: "UNKNOWN",
						message: error instanceof Error ? error.message : String(error)
					}
				}) + "\n"));
			}
			controller.close();
		} });
		return new Response(stream, {
			status: 200,
			headers: { "content-type": "application/x-ndjson" }
		});
	}
	if (!result.ok) {
		const cta$1 = formatCtaBlock(options.name ?? path$2, result.cta);
		return jsonResponse({
			ok: false,
			error: {
				code: result.error.code,
				message: result.error.message,
				...result.error.retryable !== void 0 ? { retryable: result.error.retryable } : void 0
			},
			meta: {
				command: path$2,
				duration: duration$2,
				...cta$1 ? { cta: cta$1 } : void 0
			}
		}, result.error.code === "VALIDATION_ERROR" ? 400 : 500);
	}
	const cta = formatCtaBlock(options.name ?? path$2, result.cta);
	return jsonResponse({
		ok: true,
		data: result.data,
		meta: {
			command: path$2,
			duration: duration$2,
			...cta ? { cta } : void 0
		}
	}, 200);
}
/** @internal Formats a validation error for TTY with usage hint. */
function formatHumanValidationError(cli$1, path$2, command, error, envSource, configFlag) {
	const lines = [];
	for (const fe of error.fieldErrors) {
		const line = (() => {
			const target = formatValidationTarget(command, fe.path);
			if (fe.missing) return `Error: missing required ${target.kind} ${target.label}`;
			if (target.kind === "environment variable") return `Error: invalid value for environment variable ${target.label}: ${fe.message}`;
			return `Error: invalid value for ${target.label}: ${fe.message}`;
		})();
		lines.push(line);
	}
	lines.push("See below for usage.");
	lines.push("");
	lines.push(formatCommand(path$2 === cli$1 ? cli$1 : `${cli$1} ${path$2}`, {
		alias: command.alias,
		configFlag,
		description: command.description,
		args: command.args,
		env: command.env,
		envSource,
		hint: command.hint,
		options: command.options,
		examples: formatExamples(command.examples),
		usage: command.usage
	}));
	return lines.join("\n");
}
/** @internal Formats a field path as an option flag, env name, or positional placeholder. */
function formatValidationTarget(command, path$2) {
	const [head, ...tail] = path$2.split(".");
	if (!head) return {
		kind: "argument",
		label: "input"
	};
	if (command.options?.shape[head]) {
		const suffix = tail.length > 0 ? `.${tail.join(".")}` : "";
		return {
			kind: "option",
			label: `--${toKebab(head)}${suffix}`
		};
	}
	if (command.env?.shape[head]) return {
		kind: "environment variable",
		label: `${head}${tail.length > 0 ? `.${tail.join(".")}` : ""}`
	};
	return {
		kind: "argument",
		label: `<${path$2}>`
	};
}
/** @internal Resolves a command from the tree by walking tokens until a leaf is found. */
function resolveCommand(commands, tokens) {
	const [first, ...rest] = tokens;
	if (!first || !commands.has(first)) return {
		error: first ?? "(none)",
		path: "",
		commands,
		rest
	};
	let entry = resolveAlias(commands, commands.get(first));
	const path$2 = [first];
	let remaining = rest;
	let inheritedOutputPolicy;
	const collectedMiddlewares = [];
	if (isFetchGateway(entry)) {
		const outputPolicy$1 = entry.outputPolicy ?? inheritedOutputPolicy;
		return {
			fetchGateway: entry,
			middlewares: collectedMiddlewares,
			path: path$2.join(" "),
			rest: remaining,
			...outputPolicy$1 ? { outputPolicy: outputPolicy$1 } : void 0
		};
	}
	while (isGroup(entry)) {
		if (entry.outputPolicy) inheritedOutputPolicy = entry.outputPolicy;
		if (entry.middlewares) collectedMiddlewares.push(...entry.middlewares);
		const next = remaining[0];
		if (!next) return {
			help: true,
			path: path$2.join(" "),
			description: entry.description,
			commands: entry.commands
		};
		const rawChild = entry.commands.get(next);
		if (!rawChild) return {
			error: next,
			path: path$2.join(" "),
			commands: entry.commands,
			rest: remaining.slice(1)
		};
		let child = resolveAlias(entry.commands, rawChild);
		path$2.push(next);
		remaining = remaining.slice(1);
		entry = child;
		if (isFetchGateway(entry)) {
			const outputPolicy$1 = entry.outputPolicy ?? inheritedOutputPolicy;
			return {
				fetchGateway: entry,
				middlewares: collectedMiddlewares,
				path: path$2.join(" "),
				rest: remaining,
				...outputPolicy$1 ? { outputPolicy: outputPolicy$1 } : void 0
			};
		}
	}
	const outputPolicy = entry.outputPolicy ?? inheritedOutputPolicy;
	return {
		command: entry,
		middlewares: collectedMiddlewares,
		path: path$2.join(" "),
		rest: remaining,
		...outputPolicy ? { outputPolicy } : void 0
	};
}
/** @internal Extracts built-in flags (--full-output, --format, --json, --llms, --help, --version) from argv. */
const validFormats = new Set([
	"toon",
	"json",
	"yaml",
	"md",
	"jsonl"
]);
function extractBuiltinFlags(argv, options = {}) {
	let fullOutput = false;
	let llms = false;
	let llmsFull = false;
	let mcp = false;
	let help = false;
	let version$1 = false;
	let schema$6 = false;
	let format$2 = "toon";
	let formatExplicit = false;
	let configPath;
	let configDisabled = false;
	let filterOutput;
	let tokenLimit;
	let tokenOffset;
	let tokenCount = false;
	const rest = [];
	const cfgFlag = options.configFlag ? `--${options.configFlag}` : void 0;
	const cfgFlagEq = options.configFlag ? `--${options.configFlag}=` : void 0;
	const noCfgFlag = options.configFlag ? `--no-${options.configFlag}` : void 0;
	for (let i = 0; i < argv.length; i++) {
		const token = argv[i];
		if (token === "--full-output") fullOutput = true;
		else if (token === "--llms") llms = true;
		else if (token === "--llms-full") llmsFull = true;
		else if (token === "--mcp") mcp = true;
		else if (token === "--help" || token === "-h") help = true;
		else if (token === "--version") version$1 = true;
		else if (token === "--schema") schema$6 = true;
		else if (token === "--json") {
			format$2 = "json";
			formatExplicit = true;
		} else if (token === "--format" && argv[i + 1]) {
			if (!validFormats.has(argv[i + 1])) throw new ParseError({ message: `Invalid format: "${argv[i + 1]}". Expected one of: ${[...validFormats].join(", ")}` });
			format$2 = argv[i + 1];
			formatExplicit = true;
			i++;
		} else if (cfgFlag && token === cfgFlag) {
			const value = argv[i + 1];
			if (value === void 0) throw new ParseError({ message: `Missing value for flag: ${cfgFlag}` });
			configPath = value;
			configDisabled = false;
			i++;
		} else if (cfgFlagEq && token.startsWith(cfgFlagEq)) {
			const value = token.slice(cfgFlagEq.length);
			if (value.length === 0) throw new ParseError({ message: `Missing value for flag: ${cfgFlag}` });
			configPath = value;
			configDisabled = false;
		} else if (noCfgFlag && token === noCfgFlag) {
			configPath = void 0;
			configDisabled = true;
		} else if (token === "--filter-output" && argv[i + 1]) {
			filterOutput = argv[i + 1];
			i++;
		} else if (token === "--token-limit" && argv[i + 1]) {
			const n = Number(argv[i + 1]);
			if (!Number.isFinite(n) || argv[i + 1].trim() === "") throw new ParseError({ message: `Invalid value for --token-limit: "${argv[i + 1]}"` });
			tokenLimit = n;
			i++;
		} else if (token === "--token-offset" && argv[i + 1]) {
			const n = Number(argv[i + 1]);
			if (!Number.isFinite(n) || argv[i + 1].trim() === "") throw new ParseError({ message: `Invalid value for --token-offset: "${argv[i + 1]}"` });
			tokenOffset = n;
			i++;
		} else if (token === "--token-count") tokenCount = true;
		else rest.push(token);
	}
	return {
		fullOutput,
		format: format$2,
		formatExplicit,
		configPath,
		configDisabled,
		filterOutput,
		tokenLimit,
		tokenOffset,
		tokenCount,
		llms,
		llmsFull,
		mcp,
		help,
		version: version$1,
		schema: schema$6,
		rest
	};
}
/** @internal Loads config-backed option defaults for the active command. */
async function loadCommandOptionDefaults(cli$1, path$2, options = {}) {
	if (options.configDisabled) return void 0;
	const { loader } = options;
	let targetPath;
	if (options.configPath) targetPath = resolveConfigPath(options.configPath);
	else targetPath = await findFirstExisting(options.files ?? [`${cli$1}.json`]);
	let parsed;
	if (loader) {
		const result = await loader(targetPath);
		if (result === void 0) return void 0;
		if (!isRecord(result)) throw new ParseError({ message: "Config loader must return a plain object or undefined" });
		parsed = result;
	} else {
		if (!targetPath) return void 0;
		const result = await readJsonConfig(targetPath, !!options.configPath);
		if (!result) return void 0;
		parsed = result;
	}
	return extractCommandSection(parsed, cli$1, path$2);
}
/** @internal Resolves a config file path, expanding `~` to home dir. */
function resolveConfigPath(filePath) {
	if (filePath.startsWith("~/") || filePath === "~") return path$1.join(os$1.homedir(), filePath.slice(1));
	return path$1.resolve(process.cwd(), filePath);
}
/** @internal Returns the first readable file from a list of paths, or `undefined`. */
async function findFirstExisting(paths) {
	for (const p of paths) {
		const resolved = resolveConfigPath(p);
		try {
			await fs$1.access(resolved, fs$1.constants.R_OK);
			return resolved;
		} catch {}
	}
}
/** @internal Reads and parses a JSON config file. */
async function readJsonConfig(targetPath, explicit) {
	let raw$1;
	try {
		raw$1 = await fs$1.readFile(targetPath, "utf8");
	} catch (error) {
		if (error.code === "ENOENT") {
			if (explicit) throw new ParseError({ message: `Config file not found: ${targetPath}` });
			return;
		}
		throw error;
	}
	let parsed;
	try {
		parsed = JSON.parse(raw$1);
	} catch (error) {
		throw new ParseError({
			message: `Invalid JSON config file: ${targetPath}`,
			cause: error instanceof Error ? error : void 0
		});
	}
	if (!isRecord(parsed)) throw new ParseError({ message: `Invalid config file: expected a top-level object in ${targetPath}` });
	return parsed;
}
/** @internal Walks the nested config tree to extract option defaults for a command path. */
function extractCommandSection(parsed, cli$1, path$2) {
	const segments = path$2 === cli$1 ? [] : path$2.split(" ");
	let node = parsed;
	for (const seg of segments) {
		if (!isRecord(node)) return void 0;
		const commands = node.commands;
		if (!isRecord(commands)) return void 0;
		node = commands[seg];
		if (node === void 0) return void 0;
	}
	if (!isRecord(node)) throw new ParseError({ message: `Invalid config section for '${path$2}': expected an object` });
	const options = node.options;
	if (options === void 0) return void 0;
	if (!isRecord(options)) throw new ParseError({ message: `Invalid config 'options' for '${path$2}': expected an object` });
	return Object.keys(options).length > 0 ? options : void 0;
}
/** @internal Collects immediate child commands/groups for help output. */
function collectHelpCommands(commands) {
	const result = [];
	for (const [name, entry] of commands) {
		if (isAlias(entry)) continue;
		result.push({
			name,
			description: entry.description
		});
	}
	return result.sort((a, b) => a.name.localeCompare(b.name));
}
/** @internal Finds the index of a builtin command token in the filtered argv. Returns -1 if not found. */
function builtinIdx(filtered, cliName, builtin) {
	if (findBuiltin(filtered[0])?.name === builtin) return 0;
	if (filtered[0] === cliName && findBuiltin(filtered[1])?.name === builtin) return 1;
	return -1;
}
/** @internal Formats group-level help for a built-in command (e.g. `cli skills`). */
function formatBuiltinHelp(cli$1, builtin) {
	return formatRoot(`${cli$1} ${builtin.name}`, {
		aliases: builtin.aliases,
		description: builtin.description,
		commands: builtin.subcommands?.map((s) => ({
			name: s.name,
			description: s.description
		}))
	});
}
/** @internal Formats subcommand-level help for a built-in command (e.g. `cli skills add --help`). */
function formatBuiltinSubcommandHelp(cli$1, builtin, subName) {
	const sub = findBuiltinSubcommand(builtin, subName);
	return formatCommand(`${cli$1} ${builtin.name} ${subName}`, {
		alias: sub?.alias,
		aliases: sub?.aliases,
		description: sub?.description,
		hideGlobalOptions: true,
		options: sub?.options
	});
}
/** @internal Formats help text for a fetch gateway command. */
function formatFetchHelp(name, description) {
	const lines = [];
	if (description) lines.push(`${name} — ${description}`);
	else lines.push(name);
	lines.push("");
	lines.push(`Usage: ${name} <path> [options]`);
	lines.push("");
	lines.push("Path segments are joined into the request URL path.");
	lines.push("");
	lines.push("Options:");
	lines.push("  -X, --method <METHOD>     HTTP method (default: GET, POST if body present)");
	lines.push("  -H, --header \"Key: Val\"   Set a request header (repeatable)");
	lines.push("  -d, --data <json>          Request body (implies POST)");
	lines.push("      --body <json>          Request body (implies POST)");
	lines.push("  --<key> <value>            Query string parameter");
	return lines.join("\n");
}
/** @internal Type guard for command groups. */
function isGroup(entry) {
	return "_group" in entry;
}
/** @internal Type guard for fetch gateways. */
function isFetchGateway(entry) {
	return "_fetch" in entry;
}
/** @internal Type guard for alias entries. */
function isAlias(entry) {
	return "_alias" in entry;
}
/** @internal Follows an alias entry to its canonical target. Returns the entry unchanged if not an alias. */
function resolveAlias(commands, entry) {
	if (isAlias(entry)) return commands.get(entry.target);
	return entry;
}
/** @internal Maps CLI instances to their command maps. */
const toCommands = /* @__PURE__ */ new WeakMap();
/** @internal Maps CLI instances to their middleware arrays. */
const toMiddlewares = /* @__PURE__ */ new WeakMap();
/** @internal Maps root CLI instances to their command definitions. */
const toRootDefinition = /* @__PURE__ */ new WeakMap();
/** @internal Maps CLI instances to their root options schema. */
const toRootOptions = /* @__PURE__ */ new WeakMap();
/** @internal Maps CLI instances to whether config file loading is enabled. */
const toConfigEnabled = /* @__PURE__ */ new WeakMap();
/** @internal Maps CLI instances to their output policy. */
const toOutputPolicy = /* @__PURE__ */ new WeakMap();
/** @internal Maps root CLI instances to their command aliases. */
const toRootAliases = /* @__PURE__ */ new WeakMap();
/** @internal Sentinel symbol for `ok()` and `error()` return values. */
const sentinel = Symbol.for("incur.sentinel");
/** @internal Formats an error for human-readable TTY output. */
function formatHumanError(error) {
	let out = `${error.code === "UNKNOWN" || error.code === "COMMAND_NOT_FOUND" ? "Error" : `Error (${error.code})`}: ${error.message}`;
	if (error.fieldErrors) for (const fe of error.fieldErrors) out += `\n  ${fe.path}: ${fe.message}`;
	return out;
}
/** @internal Formats a CTA block for human-readable TTY output. */
function formatHumanCta(cta) {
	const lines = ["", cta.description];
	const maxLen = Math.max(...cta.commands.map((c) => c.command.length));
	for (const c of cta.commands) {
		const desc = c.description ? `  ${"".padEnd(maxLen - c.command.length)}# ${c.description}` : "";
		lines.push(`  ${c.command}${desc}`);
	}
	return lines.join("\n");
}
/** @internal Type guard for sentinel results. */
function hasRequiredArgs(args) {
	return Object.values(args.shape).some((field) => field._zod.optout !== "optional");
}
function isSentinel(value) {
	return typeof value === "object" && value !== null && sentinel in value;
}
/** @internal Handles streaming output from an async generator `run` handler. */
async function handleStreaming(generator, ctx) {
	const useJsonl = ctx.format === "jsonl";
	if (useJsonl || !ctx.formatExplicit && ctx.format === "toon") try {
		let returnValue;
		while (true) {
			const { value, done } = await generator.next();
			if (done) {
				returnValue = value;
				break;
			}
			if (isSentinel(value)) {
				const tagged = value;
				if (tagged[sentinel] === "error") {
					if (useJsonl) ctx.writeln(JSON.stringify({
						type: "error",
						ok: false,
						error: {
							code: tagged.code,
							message: tagged.message,
							...tagged.retryable !== void 0 ? { retryable: tagged.retryable } : void 0
						}
					}));
					else ctx.writeln(formatHumanError({
						code: tagged.code,
						message: tagged.message
					}));
					ctx.exit(tagged.exitCode ?? 1);
					return;
				}
			}
			if (useJsonl) ctx.writeln(JSON.stringify({
				type: "chunk",
				data: value
			}));
			else if (ctx.renderOutput) ctx.writeln(ctx.truncate(format(value, ctx.format)).text);
		}
		if (isSentinel(returnValue) && returnValue[sentinel] === "error") {
			const err = returnValue;
			if (useJsonl) ctx.writeln(JSON.stringify({
				type: "error",
				ok: false,
				error: {
					code: err.code,
					message: err.message,
					...err.retryable !== void 0 ? { retryable: err.retryable } : void 0
				}
			}));
			else ctx.writeln(formatHumanError({
				code: err.code,
				message: err.message
			}));
			ctx.exit(err.exitCode ?? 1);
			return;
		}
		const cta = isSentinel(returnValue) && returnValue[sentinel] === "ok" ? formatCtaBlock(ctx.name, returnValue.cta) : void 0;
		if (useJsonl) ctx.writeln(JSON.stringify({
			type: "done",
			ok: true,
			meta: {
				command: ctx.path,
				duration: `${Math.round(performance.now() - ctx.start)}ms`,
				...cta ? { cta } : void 0
			}
		}));
		else if (cta) ctx.writeln(formatHumanCta(cta));
	} catch (error) {
		if (useJsonl) ctx.writeln(JSON.stringify({
			type: "error",
			ok: false,
			error: {
				code: error instanceof IncurError ? error.code : "UNKNOWN",
				message: error instanceof Error ? error.message : String(error)
			}
		}));
		else ctx.writeln(formatHumanError({
			code: "UNKNOWN",
			message: error instanceof Error ? error.message : String(error)
		}));
		ctx.exit(error instanceof IncurError ? error.exitCode ?? 1 : 1);
	}
	else {
		const chunks = [];
		try {
			let returnValue;
			while (true) {
				const { value, done } = await generator.next();
				if (done) {
					returnValue = value;
					break;
				}
				if (isSentinel(value)) {
					const tagged = value;
					if (tagged[sentinel] === "error") {
						ctx.write({
							ok: false,
							error: {
								code: tagged.code,
								message: tagged.message,
								...tagged.retryable !== void 0 ? { retryable: tagged.retryable } : void 0
							},
							meta: {
								command: ctx.path,
								duration: `${Math.round(performance.now() - ctx.start)}ms`
							}
						});
						ctx.exit(tagged.exitCode ?? 1);
						return;
					}
				}
				chunks.push(value);
			}
			if (isSentinel(returnValue) && returnValue[sentinel] === "error") {
				const err = returnValue;
				ctx.write({
					ok: false,
					error: {
						code: err.code,
						message: err.message,
						...err.retryable !== void 0 ? { retryable: err.retryable } : void 0
					},
					meta: {
						command: ctx.path,
						duration: `${Math.round(performance.now() - ctx.start)}ms`
					}
				});
				ctx.exit(err.exitCode ?? 1);
				return;
			}
			const cta = isSentinel(returnValue) && returnValue[sentinel] === "ok" ? formatCtaBlock(ctx.name, returnValue.cta) : void 0;
			ctx.write({
				ok: true,
				data: chunks,
				meta: {
					command: ctx.path,
					duration: `${Math.round(performance.now() - ctx.start)}ms`,
					...cta ? { cta } : void 0
				}
			});
		} catch (error) {
			ctx.write({
				ok: false,
				error: {
					code: error instanceof IncurError ? error.code : "UNKNOWN",
					message: error instanceof Error ? error.message : String(error)
				},
				meta: {
					command: ctx.path,
					duration: `${Math.round(performance.now() - ctx.start)}ms`
				}
			});
			ctx.exit(error instanceof IncurError ? error.exitCode ?? 1 : 1);
		}
	}
}
/** @internal Formats a CTA block into the output envelope shape. */
function formatCtaBlock(name, block) {
	if (!block || block.commands.length === 0) return void 0;
	return {
		description: block.description ?? (block.commands.length === 1 ? "Suggested command:" : "Suggested commands:"),
		commands: block.commands.map((c) => formatCta(name, c))
	};
}
/** @internal Formats a CTA by prefixing the CLI name. Handles string and object forms. */
function formatCta(name, cta) {
	if (typeof cta === "string") return { command: `${name} ${cta}` };
	let cmd = `${cta.command === name || cta.command.startsWith(`${name} `) ? "" : `${name} `}${cta.command}`;
	if (cta.args) for (const [key, value] of Object.entries(cta.args)) cmd += value === true ? ` <${key}>` : ` ${value}`;
	if (cta.options) for (const [key, value] of Object.entries(cta.options)) cmd += value === true ? ` --${key} <${key}>` : ` --${key} ${value}`;
	return {
		command: cmd,
		...cta.description ? { description: cta.description } : void 0
	};
}
/** @internal Builds the `--llms` index manifest (name + description only) from the command tree. */
function buildIndexManifest(commands, prefix = []) {
	return {
		version: "incur.v1",
		commands: collectIndexCommands(commands, prefix).sort((a, b) => a.name.localeCompare(b.name))
	};
}
/** @internal Recursively collects leaf commands with name + description only. */
function collectIndexCommands(commands, prefix) {
	const result = [];
	for (const [name, entry] of commands) {
		if (isAlias(entry)) continue;
		const path$2 = [...prefix, name];
		if (isGroup(entry)) result.push(...collectIndexCommands(entry.commands, path$2));
		else {
			const cmd = { name: path$2.join(" ") };
			if (isFetchGateway(entry)) {
				if (entry.description) cmd.description = entry.description;
			} else if (entry.description) cmd.description = entry.description;
			result.push(cmd);
		}
	}
	return result;
}
/** @internal Builds the `--llms` manifest from the command tree. */
function buildManifest(commands, prefix = []) {
	return {
		version: "incur.v1",
		commands: collectCommands(commands, prefix).sort((a, b) => a.name.localeCompare(b.name))
	};
}
/** @internal Recursively collects leaf commands with their full paths. */
function collectCommands(commands, prefix) {
	const result = [];
	for (const [name, entry] of commands) {
		if (isAlias(entry)) continue;
		const path$2 = [...prefix, name];
		if (isFetchGateway(entry)) {
			const cmd = { name: path$2.join(" ") };
			if (entry.description) cmd.description = entry.description;
			result.push(cmd);
		} else if (isGroup(entry)) result.push(...collectCommands(entry.commands, path$2));
		else {
			const cmd = { name: path$2.join(" ") };
			if (entry.description) cmd.description = entry.description;
			const inputSchema = buildInputSchema(entry.args, entry.env, entry.options);
			const outputSchema = entry.output ? toJsonSchema(entry.output) : void 0;
			if (inputSchema || outputSchema) {
				cmd.schema = {};
				if (inputSchema?.args) cmd.schema.args = inputSchema.args;
				if (inputSchema?.env) cmd.schema.env = inputSchema.env;
				if (inputSchema?.options) cmd.schema.options = inputSchema.options;
				if (outputSchema) cmd.schema.output = outputSchema;
			}
			const examples = formatExamples(entry.examples);
			if (examples) {
				const cmdName = path$2.join(" ");
				cmd.examples = examples.map((e) => ({
					...e,
					command: e.command ? `${cmdName} ${e.command}` : cmdName
				}));
			}
			result.push(cmd);
		}
	}
	return result;
}
/** @internal Recursively collects leaf commands as `Skill.CommandInfo` for `--llms --format md`. */
function collectSkillCommands(commands, prefix, groups, rootCommand) {
	const result = [];
	if (rootCommand) {
		const cmd = {};
		if (rootCommand.description) cmd.description = rootCommand.description;
		if (rootCommand.args) cmd.args = rootCommand.args;
		if (rootCommand.env) cmd.env = rootCommand.env;
		if (rootCommand.hint) cmd.hint = rootCommand.hint;
		if (rootCommand.options) cmd.options = rootCommand.options;
		if (rootCommand.output) cmd.output = rootCommand.output;
		const examples = formatExamples(rootCommand.examples);
		if (examples) cmd.examples = examples;
		result.push(cmd);
	}
	for (const [name, entry] of commands) {
		if (isAlias(entry)) continue;
		const path$2 = [...prefix, name];
		if (isFetchGateway(entry)) {
			const cmd = { name: path$2.join(" ") };
			if (entry.description) cmd.description = entry.description;
			cmd.hint = "Fetch gateway. Pass path segments and curl-style flags (-X, -H, -d, --key value).";
			result.push(cmd);
		} else if (isGroup(entry)) {
			if (entry.description) groups.set(path$2.join(" "), entry.description);
			result.push(...collectSkillCommands(entry.commands, path$2, groups));
		} else {
			const cmd = { name: path$2.join(" ") };
			if (entry.description) cmd.description = entry.description;
			if (entry.args) cmd.args = entry.args;
			if (entry.env) cmd.env = entry.env;
			if (entry.hint) cmd.hint = entry.hint;
			if (entry.options) cmd.options = entry.options;
			if (entry.output) cmd.output = entry.output;
			const examples = formatExamples(entry.examples);
			if (examples) {
				const cmdName = path$2.join(" ");
				cmd.examples = examples.map((e) => ({
					...e,
					command: e.command ? `${cmdName} ${e.command}` : cmdName
				}));
			}
			result.push(cmd);
		}
	}
	return result.sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""));
}
/** @internal Formats examples into `{ command, description }` objects. `command` is the args/options suffix only. */
function formatExamples(examples) {
	if (!examples || examples.length === 0) return void 0;
	return examples.map((ex) => {
		const parts = [];
		if (ex.args) for (const value of Object.values(ex.args)) parts.push(String(value));
		if (ex.options) for (const [key, value] of Object.entries(ex.options)) parts.push(`--${key} ${value}`);
		const result = { command: parts.join(" ") };
		if (ex.description) result.description = ex.description;
		return result;
	});
}
/** @internal Builds separate args, env, and options JSON Schemas. */
function buildInputSchema(args, env, options) {
	if (!args && !env && !options) return void 0;
	const result = {};
	if (args) result.args = toJsonSchema(args);
	if (env) result.env = toJsonSchema(env);
	if (options) result.options = toJsonSchema(options);
	return result;
}
/** @internal Scans argv for deprecated flags and writes warnings to stderr. */
function emitDeprecationWarnings(argv, optionsSchema, alias) {
	if (!optionsSchema) return;
	const shape = optionsSchema.shape;
	const deprecatedFlags = /* @__PURE__ */ new Set();
	const deprecatedShorts = /* @__PURE__ */ new Map();
	for (const key of Object.keys(shape)) if ((shape[key]?.meta?.())?.deprecated) {
		const kebab = key.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
		deprecatedFlags.add(kebab);
		if (alias?.[key]) deprecatedShorts.set(alias[key], kebab);
	}
	if (deprecatedFlags.size === 0) return;
	for (const token of argv) if (token.startsWith("--")) {
		const stripped = token.split("=")[0].slice(2);
		const raw$1 = !deprecatedFlags.has(stripped) && stripped.startsWith("no-") ? stripped.slice(3) : stripped;
		if (deprecatedFlags.has(raw$1)) process.stderr.write(`Warning: --${raw$1} is deprecated\n`);
	} else if (token.startsWith("-") && token.length >= 2) {
		for (const ch of token.slice(1)) if (deprecatedShorts.has(ch)) process.stderr.write(`Warning: --${deprecatedShorts.get(ch)} is deprecated\n`);
	}
}
/** @internal Resolves the display name from `process.argv[1]` basename. Returns the basename if it matches `name` or one of the `aliases`, otherwise falls back to `name`. */
function resolveDisplayName(name, aliases) {
	const bin = process.argv[1];
	if (!bin) return name;
	const basename = path$1.basename(bin);
	if (basename === name) return name;
	if (aliases?.includes(basename)) return basename;
	return name;
}

//#endregion
//#region src/schemas.ts
const ItemTypeSchema = enumType([
	"story",
	"comment",
	"job",
	"poll",
	"pollopt"
]);
const BaseItemSchema = objectType({
	id: numberType().int().describe("The item's unique id."),
	type: ItemTypeSchema.describe("The type of item."),
	by: stringType().describe("The username of the item's author."),
	time: numberType().int().describe("Creation date of the item, in Unix Time."),
	dead: booleanType().optional().describe("True if the item is dead."),
	deleted: booleanType().optional().describe("True if the item is deleted.")
});
const StorySchema = BaseItemSchema.extend({
	type: literalType("story"),
	descendants: numberType().int().optional().describe("In the case of stories or polls, the total comment count."),
	kids: arrayType(numberType().int()).optional().describe("The ids of the item's comments, in ranked display order."),
	score: numberType().int().optional().describe("The story's score, or the votes for a pollopt."),
	title: stringType().describe("The title of the story, poll or job. HTML."),
	text: stringType().optional().describe("The comment, story or poll text. HTML."),
	url: stringType().optional().describe("The URL of the story.")
});
const CommentSchema = BaseItemSchema.extend({
	type: literalType("comment"),
	parent: numberType().int().describe("The comment's parent: either another comment or the relevant story."),
	kids: arrayType(numberType().int()).optional().describe("The ids of the item's comments, in ranked display order."),
	text: stringType().describe("The comment, story or poll text. HTML.")
});
const JobSchema = BaseItemSchema.extend({
	type: literalType("job"),
	score: numberType().int().optional().describe("The story's score, or the votes for a pollopt."),
	title: stringType().describe("The title of the story, poll or job. HTML."),
	text: stringType().optional().describe("The comment, story or poll text. HTML."),
	url: stringType().optional().describe("The URL of the story.")
});
const PollSchema = BaseItemSchema.extend({
	type: literalType("poll"),
	descendants: numberType().int().optional().describe("In the case of stories or polls, the total comment count."),
	kids: arrayType(numberType().int()).optional().describe("The ids of the item's comments, in ranked display order."),
	parts: arrayType(numberType().int()).describe("A list of related pollopts, in display order."),
	score: numberType().int().optional().describe("The story's score, or the votes for a pollopt."),
	title: stringType().describe("The title of the story, poll or job. HTML."),
	text: stringType().optional().describe("The comment, story or poll text. HTML.")
});
const PollOptSchema = BaseItemSchema.extend({
	type: literalType("pollopt"),
	poll: numberType().int().describe("The poll's unique id."),
	score: numberType().int().optional().describe("The story's score, or the votes for a pollopt."),
	text: stringType().describe("The comment, story or poll text. HTML.")
});
const ItemSchema = unionType([
	StorySchema,
	CommentSchema,
	JobSchema,
	PollSchema,
	PollOptSchema
]).describe("A Hacker News item (story, comment, job, poll, or pollopt).");
const UserSchema = objectType({
	id: stringType().describe("The user's unique username. Case-sensitive."),
	created: numberType().int().describe("Creation date of the user, in Unix Time."),
	karma: numberType().int().describe("The user's karma."),
	about: stringType().optional().describe("The user's optional self-description. HTML."),
	submitted: arrayType(numberType().int()).optional().describe("List of the user's stories, polls and comments.")
});
const MaxItemSchema = numberType().int().describe("The current largest item id.");
const UpdatesSchema = objectType({
	items: arrayType(numberType().int()).describe("List of item ids that have been updated recently."),
	profiles: arrayType(stringType()).describe("List of user names that have been updated recently.")
});
const StoryIdsSchema = arrayType(numberType().int()).describe("List of story/item ids.");
const HighlightResultSchema = objectType({
	value: stringType(),
	matchLevel: enumType([
		"none",
		"partial",
		"full"
	]),
	matchedWords: arrayType(stringType()),
	fullyHighlighted: booleanType().optional()
});
const SearchHitSchema = objectType({
	objectID: stringType().describe("The item's unique id (as string)."),
	created_at: stringType().describe("Creation date in ISO 8601 format."),
	created_at_i: numberType().int().describe("Creation date in Unix Time."),
	author: stringType().describe("The username of the item's author."),
	title: stringType().optional().describe("The title of the story."),
	text: stringType().optional().describe("The text of the comment or story."),
	url: stringType().optional().describe("The URL of the story."),
	points: numberType().int().optional().describe("The story's score."),
	num_comments: numberType().int().optional().describe("The number of comments."),
	children: arrayType(numberType().int()).optional().describe("The ids of the item's comments."),
	story_id: numberType().int().optional().describe("The story id (for comments)."),
	_tags: arrayType(stringType()).describe("Tags for the item."),
	_highlightResult: recordType(HighlightResultSchema).optional()
});
const SearchResponseSchema = objectType({
	hits: arrayType(SearchHitSchema).describe("List of search results."),
	nbHits: numberType().int().describe("Number of hits total."),
	page: numberType().int().describe("Current page (0-indexed)."),
	nbPages: numberType().int().describe("Number of pages total."),
	hitsPerPage: numberType().int().describe("Number of hits per page."),
	processingTimeMS: numberType().int().describe("Processing time in milliseconds."),
	query: stringType().describe("The query string."),
	params: stringType().describe("The search parameters."),
	exhaustive: objectType({
		nbHits: booleanType(),
		typo: booleanType()
	}).optional(),
	exhaustiveNbHits: booleanType().optional(),
	exhaustiveTypo: booleanType().optional()
});
const ItemIdParamSchema = objectType({ id: coerce$1.number().int().min(1).describe("The item's unique id.") });
const UserIdParamSchema = objectType({ id: stringType().min(1).describe("The user's unique username.") });
const SearchQuerySchema = objectType({
	query: stringType().min(1).describe("Search query string."),
	tags: stringType().optional().describe("Filter by tags (e.g., story, comment, poll, show_hn, ask_hn, author_USERNAME)."),
	page: coerce$1.number().int().min(0).default(0).describe("Page number (0-indexed)."),
	hitsPerPage: coerce$1.number().int().min(1).max(100).default(20).describe("Number of hits per page.")
});

//#endregion
//#region src/index.ts
const app = new OpenAPIHono();
const FIREBASE_BASE = "https://hacker-news.firebaseio.com/v0";
const ALGOLIA_BASE = "https://hn.algolia.com/api/v1";
const USER_AGENT = "clify-hackernews (https://github.com/cli-fy/news.ycombinator.com)";
async function fetchJson(url$1) {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 15e3);
	try {
		const res = await fetch(url$1, {
			signal: controller.signal,
			headers: { "User-Agent": USER_AGENT }
		});
		if (!res.ok) throw new Error(`upstream returned ${res.status}`);
		return await res.json();
	} finally {
		clearTimeout(timeout);
	}
}
const topStoriesRoute = createRoute({
	method: "get",
	path: "/topstories",
	tags: ["Stories"],
	summary: "Get top stories",
	description: "Returns an array of up to 500 top story IDs.",
	responses: {
		200: {
			description: "List of top story IDs",
			content: { "application/json": { schema: StoryIdsSchema } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(topStoriesRoute, async (c) => {
	try {
		const data = await fetchJson(`${FIREBASE_BASE}/topstories.json`);
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const newStoriesRoute = createRoute({
	method: "get",
	path: "/newstories",
	tags: ["Stories"],
	summary: "Get new stories",
	description: "Returns an array of up to 500 new story IDs.",
	responses: {
		200: {
			description: "List of new story IDs",
			content: { "application/json": { schema: StoryIdsSchema } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(newStoriesRoute, async (c) => {
	try {
		const data = await fetchJson(`${FIREBASE_BASE}/newstories.json`);
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const bestStoriesRoute = createRoute({
	method: "get",
	path: "/beststories",
	tags: ["Stories"],
	summary: "Get best stories",
	description: "Returns an array of up to 500 best story IDs.",
	responses: {
		200: {
			description: "List of best story IDs",
			content: { "application/json": { schema: StoryIdsSchema } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(bestStoriesRoute, async (c) => {
	try {
		const data = await fetchJson(`${FIREBASE_BASE}/beststories.json`);
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const askStoriesRoute = createRoute({
	method: "get",
	path: "/askstories",
	tags: ["Stories"],
	summary: "Get Ask HN stories",
	description: "Returns an array of up to 200 Ask HN story IDs.",
	responses: {
		200: {
			description: "List of Ask HN story IDs",
			content: { "application/json": { schema: StoryIdsSchema } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(askStoriesRoute, async (c) => {
	try {
		const data = await fetchJson(`${FIREBASE_BASE}/askstories.json`);
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const showStoriesRoute = createRoute({
	method: "get",
	path: "/showstories",
	tags: ["Stories"],
	summary: "Get Show HN stories",
	description: "Returns an array of up to 200 Show HN story IDs.",
	responses: {
		200: {
			description: "List of Show HN story IDs",
			content: { "application/json": { schema: StoryIdsSchema } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(showStoriesRoute, async (c) => {
	try {
		const data = await fetchJson(`${FIREBASE_BASE}/showstories.json`);
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const jobStoriesRoute = createRoute({
	method: "get",
	path: "/jobstories",
	tags: ["Stories"],
	summary: "Get job stories",
	description: "Returns an array of up to 200 job story IDs.",
	responses: {
		200: {
			description: "List of job story IDs",
			content: { "application/json": { schema: StoryIdsSchema } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(jobStoriesRoute, async (c) => {
	try {
		const data = await fetchJson(`${FIREBASE_BASE}/jobstories.json`);
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const itemRoute = createRoute({
	method: "get",
	path: "/item/{id}",
	tags: ["Items"],
	summary: "Get item by ID",
	description: "Returns a single item (story, comment, job, poll, or pollopt) by its ID.",
	request: { params: ItemIdParamSchema },
	responses: {
		200: {
			description: "The requested item",
			content: { "application/json": { schema: ItemSchema } }
		},
		404: {
			description: "Item not found",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(itemRoute, async (c) => {
	const { id } = c.req.valid("param");
	try {
		const data = await fetchJson(`${FIREBASE_BASE}/item/${id}.json`);
		if (data === null) return c.json({ error: `item ${id} not found` }, 404);
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const userRoute = createRoute({
	method: "get",
	path: "/user/{id}",
	tags: ["Users"],
	summary: "Get user by ID",
	description: "Returns a single user by their username.",
	request: { params: UserIdParamSchema },
	responses: {
		200: {
			description: "The requested user",
			content: { "application/json": { schema: UserSchema } }
		},
		404: {
			description: "User not found",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(userRoute, async (c) => {
	const { id } = c.req.valid("param");
	try {
		const data = await fetchJson(`${FIREBASE_BASE}/user/${id}.json`);
		if (data === null) return c.json({ error: `user ${id} not found` }, 404);
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const maxItemRoute = createRoute({
	method: "get",
	path: "/maxitem",
	tags: ["Items"],
	summary: "Get max item ID",
	description: "Returns the current largest item id.",
	responses: {
		200: {
			description: "Current max item ID",
			content: { "application/json": { schema: MaxItemSchema } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(maxItemRoute, async (c) => {
	try {
		const data = await fetchJson(`${FIREBASE_BASE}/maxitem.json`);
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const updatesRoute = createRoute({
	method: "get",
	path: "/updates",
	tags: ["Updates"],
	summary: "Get recent updates",
	description: "Returns items and profiles that have changed recently.",
	responses: {
		200: {
			description: "Recent updates",
			content: { "application/json": { schema: UpdatesSchema } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(updatesRoute, async (c) => {
	try {
		const data = await fetchJson(`${FIREBASE_BASE}/updates.json`);
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const searchRoute = createRoute({
	method: "get",
	path: "/search",
	tags: ["Search"],
	summary: "Search HN by relevance",
	description: "Search Hacker News stories and comments by relevance using Algolia.",
	request: { query: SearchQuerySchema },
	responses: {
		200: {
			description: "Search results",
			content: { "application/json": { schema: SearchResponseSchema } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(searchRoute, async (c) => {
	const { query, tags: tags$1, page, hitsPerPage } = c.req.valid("query");
	const url$1 = new URL(`${ALGOLIA_BASE}/search`);
	url$1.searchParams.set("query", query);
	url$1.searchParams.set("page", String(page));
	url$1.searchParams.set("hitsPerPage", String(hitsPerPage));
	if (tags$1) url$1.searchParams.set("tags", tags$1);
	try {
		const data = await fetchJson(url$1.toString());
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const searchByDateRoute = createRoute({
	method: "get",
	path: "/search_by_date",
	tags: ["Search"],
	summary: "Search HN by date",
	description: "Search Hacker News stories and comments by date using Algolia.",
	request: { query: SearchQuerySchema },
	responses: {
		200: {
			description: "Search results",
			content: { "application/json": { schema: SearchResponseSchema } }
		},
		502: {
			description: "Upstream API error",
			content: { "application/json": { schema: objectType({ error: stringType() }) } }
		}
	}
});
app.openapi(searchByDateRoute, async (c) => {
	const { query, tags: tags$1, page, hitsPerPage } = c.req.valid("query");
	const url$1 = new URL(`${ALGOLIA_BASE}/search_by_date`);
	url$1.searchParams.set("query", query);
	url$1.searchParams.set("page", String(page));
	url$1.searchParams.set("hitsPerPage", String(hitsPerPage));
	if (tags$1) url$1.searchParams.set("tags", tags$1);
	try {
		const data = await fetchJson(url$1.toString());
		return c.json(data);
	} catch (err) {
		return c.json({ error: err instanceof Error ? err.message : "unknown error" }, 502);
	}
});
const spec = app.getOpenAPIDocument({
	openapi: "3.1.0",
	info: {
		title: "clify-hackernews",
		version: "0.1.0",
		description: "RESTful API for Hacker News data via Firebase and Algolia APIs."
	},
	servers: [{
		url: "https://hacker-news.firebaseio.com/v0",
		description: "Firebase API"
	}, {
		url: "https://hn.algolia.com/api/v1",
		description: "Algolia Search API"
	}]
});
const cli = create("hackernews", { description: "Fetch data from Hacker News via RESTful API." }).command("api", {
	description: "Call the Hacker News API",
	fetch: app.fetch,
	openapi: spec
});
var src_default = cli;

//#endregion
export { app, src_default as default, spec };
//# sourceMappingURL=index.js.map