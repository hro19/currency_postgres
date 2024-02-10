
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model ItemHistory
 * 
 */
export type ItemHistory = $Result.DefaultSelection<Prisma.$ItemHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CurrencyCode: {
  aud: 'aud',
  cny: 'cny',
  krw: 'krw',
  thb: 'thb',
  twd: 'twd',
  vnd: 'vnd',
  jpy: 'jpy',
  php: 'php',
  usd: 'usd'
};

export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode]

}

export type CurrencyCode = $Enums.CurrencyCode

export const CurrencyCode: typeof $Enums.CurrencyCode

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;

  /**
   * `prisma.itemHistory`: Exposes CRUD operations for the **ItemHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ItemHistories
    * const itemHistories = await prisma.itemHistory.findMany()
    * ```
    */
  get itemHistory(): Prisma.ItemHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Item: 'Item',
    ItemHistory: 'ItemHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'item' | 'itemHistory'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      ItemHistory: {
        payload: Prisma.$ItemHistoryPayload<ExtArgs>
        fields: Prisma.ItemHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemHistoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemHistoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          findFirst: {
            args: Prisma.ItemHistoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemHistoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          findMany: {
            args: Prisma.ItemHistoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>[]
          }
          create: {
            args: Prisma.ItemHistoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          createMany: {
            args: Prisma.ItemHistoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemHistoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          update: {
            args: Prisma.ItemHistoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ItemHistoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemHistoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemHistoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemHistoryPayload>
          }
          aggregate: {
            args: Prisma.ItemHistoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItemHistory>
          }
          groupBy: {
            args: Prisma.ItemHistoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemHistoryCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    histories: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | ItemCountOutputTypeCountHistoriesArgs
  }

  // Custom InputTypes

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemHistoryWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    currencyCode: $Enums.CurrencyCode | null
    created_at: Date | null
    updated_at: Date | null
    isPublic: boolean | null
    thubmnail: string | null
    userEmail: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    currencyCode: $Enums.CurrencyCode | null
    created_at: Date | null
    updated_at: Date | null
    isPublic: boolean | null
    thubmnail: string | null
    userEmail: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    currencyCode: number
    created_at: number
    updated_at: number
    isPublic: number
    thubmnail: number
    userEmail: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    currencyCode?: true
    created_at?: true
    updated_at?: true
    isPublic?: true
    thubmnail?: true
    userEmail?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    currencyCode?: true
    created_at?: true
    updated_at?: true
    isPublic?: true
    thubmnail?: true
    userEmail?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    currencyCode?: true
    created_at?: true
    updated_at?: true
    isPublic?: true
    thubmnail?: true
    userEmail?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    name: string
    currencyCode: $Enums.CurrencyCode
    created_at: Date
    updated_at: Date
    isPublic: boolean
    thubmnail: string | null
    userEmail: string
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currencyCode?: boolean
    created_at?: boolean
    updated_at?: boolean
    isPublic?: boolean
    thubmnail?: boolean
    userEmail?: boolean
    histories?: boolean | Item$historiesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    currencyCode?: boolean
    created_at?: boolean
    updated_at?: boolean
    isPublic?: boolean
    thubmnail?: boolean
    userEmail?: boolean
  }

  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | Item$historiesArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      histories: Prisma.$ItemHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      currencyCode: $Enums.CurrencyCode
      created_at: Date
      updated_at: Date
      isPublic: boolean
      thubmnail: string | null
      userEmail: string
    }, ExtArgs["result"]["item"]>
    composites: {}
  }


  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
    **/
    create<T extends ItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemCreateArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Items.
     *     @param {ItemCreateManyArgs} args - Arguments to create many Items.
     *     @example
     *     // Create many Items
     *     const item = await prisma.item.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
    **/
    delete<T extends ItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
    **/
    upsert<T extends ItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    histories<T extends Item$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Item$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly name: FieldRef<"Item", 'String'>
    readonly currencyCode: FieldRef<"Item", 'CurrencyCode'>
    readonly created_at: FieldRef<"Item", 'DateTime'>
    readonly updated_at: FieldRef<"Item", 'DateTime'>
    readonly isPublic: FieldRef<"Item", 'Boolean'>
    readonly thubmnail: FieldRef<"Item", 'String'>
    readonly userEmail: FieldRef<"Item", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }


  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }


  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }


  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }


  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }


  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }


  /**
   * Item.histories
   */
  export type Item$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    where?: ItemHistoryWhereInput
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    cursor?: ItemHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ItemHistoryScalarFieldEnum | ItemHistoryScalarFieldEnum[]
  }


  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemInclude<ExtArgs> | null
  }



  /**
   * Model ItemHistory
   */

  export type AggregateItemHistory = {
    _count: ItemHistoryCountAggregateOutputType | null
    _avg: ItemHistoryAvgAggregateOutputType | null
    _sum: ItemHistorySumAggregateOutputType | null
    _min: ItemHistoryMinAggregateOutputType | null
    _max: ItemHistoryMaxAggregateOutputType | null
  }

  export type ItemHistoryAvgAggregateOutputType = {
    id: number | null
    price: number | null
    rate: number | null
    inverseRate: number | null
    itemId: number | null
  }

  export type ItemHistorySumAggregateOutputType = {
    id: number | null
    price: number | null
    rate: number | null
    inverseRate: number | null
    itemId: number | null
  }

  export type ItemHistoryMinAggregateOutputType = {
    id: number | null
    price: number | null
    rate: number | null
    inverseRate: number | null
    created_at: Date | null
    updated_at: Date | null
    itemId: number | null
  }

  export type ItemHistoryMaxAggregateOutputType = {
    id: number | null
    price: number | null
    rate: number | null
    inverseRate: number | null
    created_at: Date | null
    updated_at: Date | null
    itemId: number | null
  }

  export type ItemHistoryCountAggregateOutputType = {
    id: number
    price: number
    rate: number
    inverseRate: number
    created_at: number
    updated_at: number
    itemId: number
    _all: number
  }


  export type ItemHistoryAvgAggregateInputType = {
    id?: true
    price?: true
    rate?: true
    inverseRate?: true
    itemId?: true
  }

  export type ItemHistorySumAggregateInputType = {
    id?: true
    price?: true
    rate?: true
    inverseRate?: true
    itemId?: true
  }

  export type ItemHistoryMinAggregateInputType = {
    id?: true
    price?: true
    rate?: true
    inverseRate?: true
    created_at?: true
    updated_at?: true
    itemId?: true
  }

  export type ItemHistoryMaxAggregateInputType = {
    id?: true
    price?: true
    rate?: true
    inverseRate?: true
    created_at?: true
    updated_at?: true
    itemId?: true
  }

  export type ItemHistoryCountAggregateInputType = {
    id?: true
    price?: true
    rate?: true
    inverseRate?: true
    created_at?: true
    updated_at?: true
    itemId?: true
    _all?: true
  }

  export type ItemHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemHistory to aggregate.
     */
    where?: ItemHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemHistories to fetch.
     */
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ItemHistories
    **/
    _count?: true | ItemHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemHistoryMaxAggregateInputType
  }

  export type GetItemHistoryAggregateType<T extends ItemHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateItemHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItemHistory[P]>
      : GetScalarType<T[P], AggregateItemHistory[P]>
  }




  export type ItemHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemHistoryWhereInput
    orderBy?: ItemHistoryOrderByWithAggregationInput | ItemHistoryOrderByWithAggregationInput[]
    by: ItemHistoryScalarFieldEnum[] | ItemHistoryScalarFieldEnum
    having?: ItemHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemHistoryCountAggregateInputType | true
    _avg?: ItemHistoryAvgAggregateInputType
    _sum?: ItemHistorySumAggregateInputType
    _min?: ItemHistoryMinAggregateInputType
    _max?: ItemHistoryMaxAggregateInputType
  }

  export type ItemHistoryGroupByOutputType = {
    id: number
    price: number
    rate: number
    inverseRate: number
    created_at: Date
    updated_at: Date
    itemId: number
    _count: ItemHistoryCountAggregateOutputType | null
    _avg: ItemHistoryAvgAggregateOutputType | null
    _sum: ItemHistorySumAggregateOutputType | null
    _min: ItemHistoryMinAggregateOutputType | null
    _max: ItemHistoryMaxAggregateOutputType | null
  }

  type GetItemHistoryGroupByPayload<T extends ItemHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ItemHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ItemHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    rate?: boolean
    inverseRate?: boolean
    created_at?: boolean
    updated_at?: boolean
    itemId?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["itemHistory"]>

  export type ItemHistorySelectScalar = {
    id?: boolean
    price?: boolean
    rate?: boolean
    inverseRate?: boolean
    created_at?: boolean
    updated_at?: boolean
    itemId?: boolean
  }

  export type ItemHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }


  export type $ItemHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ItemHistory"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      price: number
      rate: number
      inverseRate: number
      created_at: Date
      updated_at: Date
      itemId: number
    }, ExtArgs["result"]["itemHistory"]>
    composites: {}
  }


  type ItemHistoryGetPayload<S extends boolean | null | undefined | ItemHistoryDefaultArgs> = $Result.GetResult<Prisma.$ItemHistoryPayload, S>

  type ItemHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemHistoryCountAggregateInputType | true
    }

  export interface ItemHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ItemHistory'], meta: { name: 'ItemHistory' } }
    /**
     * Find zero or one ItemHistory that matches the filter.
     * @param {ItemHistoryFindUniqueArgs} args - Arguments to find a ItemHistory
     * @example
     * // Get one ItemHistory
     * const itemHistory = await prisma.itemHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemHistoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemHistoryFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ItemHistory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ItemHistoryFindUniqueOrThrowArgs} args - Arguments to find a ItemHistory
     * @example
     * // Get one ItemHistory
     * const itemHistory = await prisma.itemHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemHistoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemHistoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ItemHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryFindFirstArgs} args - Arguments to find a ItemHistory
     * @example
     * // Get one ItemHistory
     * const itemHistory = await prisma.itemHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemHistoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemHistoryFindFirstArgs<ExtArgs>>
    ): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ItemHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryFindFirstOrThrowArgs} args - Arguments to find a ItemHistory
     * @example
     * // Get one ItemHistory
     * const itemHistory = await prisma.itemHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemHistoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemHistoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ItemHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ItemHistories
     * const itemHistories = await prisma.itemHistory.findMany()
     * 
     * // Get first 10 ItemHistories
     * const itemHistories = await prisma.itemHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemHistoryWithIdOnly = await prisma.itemHistory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemHistoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemHistoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ItemHistory.
     * @param {ItemHistoryCreateArgs} args - Arguments to create a ItemHistory.
     * @example
     * // Create one ItemHistory
     * const ItemHistory = await prisma.itemHistory.create({
     *   data: {
     *     // ... data to create a ItemHistory
     *   }
     * })
     * 
    **/
    create<T extends ItemHistoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemHistoryCreateArgs<ExtArgs>>
    ): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ItemHistories.
     *     @param {ItemHistoryCreateManyArgs} args - Arguments to create many ItemHistories.
     *     @example
     *     // Create many ItemHistories
     *     const itemHistory = await prisma.itemHistory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ItemHistoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemHistoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ItemHistory.
     * @param {ItemHistoryDeleteArgs} args - Arguments to delete one ItemHistory.
     * @example
     * // Delete one ItemHistory
     * const ItemHistory = await prisma.itemHistory.delete({
     *   where: {
     *     // ... filter to delete one ItemHistory
     *   }
     * })
     * 
    **/
    delete<T extends ItemHistoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemHistoryDeleteArgs<ExtArgs>>
    ): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ItemHistory.
     * @param {ItemHistoryUpdateArgs} args - Arguments to update one ItemHistory.
     * @example
     * // Update one ItemHistory
     * const itemHistory = await prisma.itemHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemHistoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemHistoryUpdateArgs<ExtArgs>>
    ): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ItemHistories.
     * @param {ItemHistoryDeleteManyArgs} args - Arguments to filter ItemHistories to delete.
     * @example
     * // Delete a few ItemHistories
     * const { count } = await prisma.itemHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemHistoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemHistoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ItemHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ItemHistories
     * const itemHistory = await prisma.itemHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemHistoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemHistoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ItemHistory.
     * @param {ItemHistoryUpsertArgs} args - Arguments to update or create a ItemHistory.
     * @example
     * // Update or create a ItemHistory
     * const itemHistory = await prisma.itemHistory.upsert({
     *   create: {
     *     // ... data to create a ItemHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ItemHistory we want to update
     *   }
     * })
    **/
    upsert<T extends ItemHistoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemHistoryUpsertArgs<ExtArgs>>
    ): Prisma__ItemHistoryClient<$Result.GetResult<Prisma.$ItemHistoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ItemHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryCountArgs} args - Arguments to filter ItemHistories to count.
     * @example
     * // Count the number of ItemHistories
     * const count = await prisma.itemHistory.count({
     *   where: {
     *     // ... the filter for the ItemHistories we want to count
     *   }
     * })
    **/
    count<T extends ItemHistoryCountArgs>(
      args?: Subset<T, ItemHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ItemHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemHistoryAggregateArgs>(args: Subset<T, ItemHistoryAggregateArgs>): Prisma.PrismaPromise<GetItemHistoryAggregateType<T>>

    /**
     * Group by ItemHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ItemHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ItemHistory model
   */
  readonly fields: ItemHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ItemHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ItemHistory model
   */ 
  interface ItemHistoryFieldRefs {
    readonly id: FieldRef<"ItemHistory", 'Int'>
    readonly price: FieldRef<"ItemHistory", 'Float'>
    readonly rate: FieldRef<"ItemHistory", 'Float'>
    readonly inverseRate: FieldRef<"ItemHistory", 'Float'>
    readonly created_at: FieldRef<"ItemHistory", 'DateTime'>
    readonly updated_at: FieldRef<"ItemHistory", 'DateTime'>
    readonly itemId: FieldRef<"ItemHistory", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * ItemHistory findUnique
   */
  export type ItemHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemHistory to fetch.
     */
    where: ItemHistoryWhereUniqueInput
  }


  /**
   * ItemHistory findUniqueOrThrow
   */
  export type ItemHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemHistory to fetch.
     */
    where: ItemHistoryWhereUniqueInput
  }


  /**
   * ItemHistory findFirst
   */
  export type ItemHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemHistory to fetch.
     */
    where?: ItemHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemHistories to fetch.
     */
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemHistories.
     */
    cursor?: ItemHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemHistories.
     */
    distinct?: ItemHistoryScalarFieldEnum | ItemHistoryScalarFieldEnum[]
  }


  /**
   * ItemHistory findFirstOrThrow
   */
  export type ItemHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemHistory to fetch.
     */
    where?: ItemHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemHistories to fetch.
     */
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ItemHistories.
     */
    cursor?: ItemHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ItemHistories.
     */
    distinct?: ItemHistoryScalarFieldEnum | ItemHistoryScalarFieldEnum[]
  }


  /**
   * ItemHistory findMany
   */
  export type ItemHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ItemHistories to fetch.
     */
    where?: ItemHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ItemHistories to fetch.
     */
    orderBy?: ItemHistoryOrderByWithRelationInput | ItemHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ItemHistories.
     */
    cursor?: ItemHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ItemHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ItemHistories.
     */
    skip?: number
    distinct?: ItemHistoryScalarFieldEnum | ItemHistoryScalarFieldEnum[]
  }


  /**
   * ItemHistory create
   */
  export type ItemHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ItemHistory.
     */
    data: XOR<ItemHistoryCreateInput, ItemHistoryUncheckedCreateInput>
  }


  /**
   * ItemHistory createMany
   */
  export type ItemHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ItemHistories.
     */
    data: ItemHistoryCreateManyInput | ItemHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ItemHistory update
   */
  export type ItemHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ItemHistory.
     */
    data: XOR<ItemHistoryUpdateInput, ItemHistoryUncheckedUpdateInput>
    /**
     * Choose, which ItemHistory to update.
     */
    where: ItemHistoryWhereUniqueInput
  }


  /**
   * ItemHistory updateMany
   */
  export type ItemHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ItemHistories.
     */
    data: XOR<ItemHistoryUpdateManyMutationInput, ItemHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ItemHistories to update
     */
    where?: ItemHistoryWhereInput
  }


  /**
   * ItemHistory upsert
   */
  export type ItemHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ItemHistory to update in case it exists.
     */
    where: ItemHistoryWhereUniqueInput
    /**
     * In case the ItemHistory found by the `where` argument doesn't exist, create a new ItemHistory with this data.
     */
    create: XOR<ItemHistoryCreateInput, ItemHistoryUncheckedCreateInput>
    /**
     * In case the ItemHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemHistoryUpdateInput, ItemHistoryUncheckedUpdateInput>
  }


  /**
   * ItemHistory delete
   */
  export type ItemHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
    /**
     * Filter which ItemHistory to delete.
     */
    where: ItemHistoryWhereUniqueInput
  }


  /**
   * ItemHistory deleteMany
   */
  export type ItemHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ItemHistories to delete
     */
    where?: ItemHistoryWhereInput
  }


  /**
   * ItemHistory without action
   */
  export type ItemHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemHistory
     */
    select?: ItemHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ItemHistoryInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    currencyCode: 'currencyCode',
    created_at: 'created_at',
    updated_at: 'updated_at',
    isPublic: 'isPublic',
    thubmnail: 'thubmnail',
    userEmail: 'userEmail'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const ItemHistoryScalarFieldEnum: {
    id: 'id',
    price: 'price',
    rate: 'rate',
    inverseRate: 'inverseRate',
    created_at: 'created_at',
    updated_at: 'updated_at',
    itemId: 'itemId'
  };

  export type ItemHistoryScalarFieldEnum = (typeof ItemHistoryScalarFieldEnum)[keyof typeof ItemHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'CurrencyCode'
   */
  export type EnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode'>
    


  /**
   * Reference to a field of type 'CurrencyCode[]'
   */
  export type ListEnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    currencyCode?: EnumCurrencyCodeFilter<"Item"> | $Enums.CurrencyCode
    created_at?: DateTimeFilter<"Item"> | Date | string
    updated_at?: DateTimeFilter<"Item"> | Date | string
    isPublic?: BoolFilter<"Item"> | boolean
    thubmnail?: StringNullableFilter<"Item"> | string | null
    userEmail?: StringFilter<"Item"> | string
    histories?: ItemHistoryListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    currencyCode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    isPublic?: SortOrder
    thubmnail?: SortOrderInput | SortOrder
    userEmail?: SortOrder
    histories?: ItemHistoryOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    currencyCode?: EnumCurrencyCodeFilter<"Item"> | $Enums.CurrencyCode
    created_at?: DateTimeFilter<"Item"> | Date | string
    updated_at?: DateTimeFilter<"Item"> | Date | string
    isPublic?: BoolFilter<"Item"> | boolean
    thubmnail?: StringNullableFilter<"Item"> | string | null
    userEmail?: StringFilter<"Item"> | string
    histories?: ItemHistoryListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    currencyCode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    isPublic?: SortOrder
    thubmnail?: SortOrderInput | SortOrder
    userEmail?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    name?: StringWithAggregatesFilter<"Item"> | string
    currencyCode?: EnumCurrencyCodeWithAggregatesFilter<"Item"> | $Enums.CurrencyCode
    created_at?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    isPublic?: BoolWithAggregatesFilter<"Item"> | boolean
    thubmnail?: StringNullableWithAggregatesFilter<"Item"> | string | null
    userEmail?: StringWithAggregatesFilter<"Item"> | string
  }

  export type ItemHistoryWhereInput = {
    AND?: ItemHistoryWhereInput | ItemHistoryWhereInput[]
    OR?: ItemHistoryWhereInput[]
    NOT?: ItemHistoryWhereInput | ItemHistoryWhereInput[]
    id?: IntFilter<"ItemHistory"> | number
    price?: FloatFilter<"ItemHistory"> | number
    rate?: FloatFilter<"ItemHistory"> | number
    inverseRate?: FloatFilter<"ItemHistory"> | number
    created_at?: DateTimeFilter<"ItemHistory"> | Date | string
    updated_at?: DateTimeFilter<"ItemHistory"> | Date | string
    itemId?: IntFilter<"ItemHistory"> | number
    item?: XOR<ItemRelationFilter, ItemWhereInput>
  }

  export type ItemHistoryOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    rate?: SortOrder
    inverseRate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    itemId?: SortOrder
    item?: ItemOrderByWithRelationInput
  }

  export type ItemHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ItemHistoryWhereInput | ItemHistoryWhereInput[]
    OR?: ItemHistoryWhereInput[]
    NOT?: ItemHistoryWhereInput | ItemHistoryWhereInput[]
    price?: FloatFilter<"ItemHistory"> | number
    rate?: FloatFilter<"ItemHistory"> | number
    inverseRate?: FloatFilter<"ItemHistory"> | number
    created_at?: DateTimeFilter<"ItemHistory"> | Date | string
    updated_at?: DateTimeFilter<"ItemHistory"> | Date | string
    itemId?: IntFilter<"ItemHistory"> | number
    item?: XOR<ItemRelationFilter, ItemWhereInput>
  }, "id">

  export type ItemHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    rate?: SortOrder
    inverseRate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    itemId?: SortOrder
    _count?: ItemHistoryCountOrderByAggregateInput
    _avg?: ItemHistoryAvgOrderByAggregateInput
    _max?: ItemHistoryMaxOrderByAggregateInput
    _min?: ItemHistoryMinOrderByAggregateInput
    _sum?: ItemHistorySumOrderByAggregateInput
  }

  export type ItemHistoryScalarWhereWithAggregatesInput = {
    AND?: ItemHistoryScalarWhereWithAggregatesInput | ItemHistoryScalarWhereWithAggregatesInput[]
    OR?: ItemHistoryScalarWhereWithAggregatesInput[]
    NOT?: ItemHistoryScalarWhereWithAggregatesInput | ItemHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ItemHistory"> | number
    price?: FloatWithAggregatesFilter<"ItemHistory"> | number
    rate?: FloatWithAggregatesFilter<"ItemHistory"> | number
    inverseRate?: FloatWithAggregatesFilter<"ItemHistory"> | number
    created_at?: DateTimeWithAggregatesFilter<"ItemHistory"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ItemHistory"> | Date | string
    itemId?: IntWithAggregatesFilter<"ItemHistory"> | number
  }

  export type ItemCreateInput = {
    name: string
    currencyCode: $Enums.CurrencyCode
    created_at?: Date | string
    updated_at?: Date | string
    isPublic?: boolean
    thubmnail?: string | null
    userEmail?: string
    histories?: ItemHistoryCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    name: string
    currencyCode: $Enums.CurrencyCode
    created_at?: Date | string
    updated_at?: Date | string
    isPublic?: boolean
    thubmnail?: string | null
    userEmail?: string
    histories?: ItemHistoryUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    thubmnail?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    histories?: ItemHistoryUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    thubmnail?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
    histories?: ItemHistoryUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: number
    name: string
    currencyCode: $Enums.CurrencyCode
    created_at?: Date | string
    updated_at?: Date | string
    isPublic?: boolean
    thubmnail?: string | null
    userEmail?: string
  }

  export type ItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    thubmnail?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    thubmnail?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type ItemHistoryCreateInput = {
    price: number
    rate: number
    inverseRate: number
    created_at?: Date | string
    updated_at?: Date | string
    item: ItemCreateNestedOneWithoutHistoriesInput
  }

  export type ItemHistoryUncheckedCreateInput = {
    id?: number
    price: number
    rate: number
    inverseRate: number
    created_at?: Date | string
    updated_at?: Date | string
    itemId: number
  }

  export type ItemHistoryUpdateInput = {
    price?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    inverseRate?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type ItemHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    inverseRate?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemHistoryCreateManyInput = {
    id?: number
    price: number
    rate: number
    inverseRate: number
    created_at?: Date | string
    updated_at?: Date | string
    itemId: number
  }

  export type ItemHistoryUpdateManyMutationInput = {
    price?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    inverseRate?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    inverseRate?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumCurrencyCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ItemHistoryListRelationFilter = {
    every?: ItemHistoryWhereInput
    some?: ItemHistoryWhereInput
    none?: ItemHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ItemHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currencyCode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    isPublic?: SortOrder
    thubmnail?: SortOrder
    userEmail?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currencyCode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    isPublic?: SortOrder
    thubmnail?: SortOrder
    userEmail?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currencyCode?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    isPublic?: SortOrder
    thubmnail?: SortOrder
    userEmail?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyCodeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyCodeFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ItemRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type ItemHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rate?: SortOrder
    inverseRate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    itemId?: SortOrder
  }

  export type ItemHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rate?: SortOrder
    inverseRate?: SortOrder
    itemId?: SortOrder
  }

  export type ItemHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rate?: SortOrder
    inverseRate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    itemId?: SortOrder
  }

  export type ItemHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rate?: SortOrder
    inverseRate?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    itemId?: SortOrder
  }

  export type ItemHistorySumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rate?: SortOrder
    inverseRate?: SortOrder
    itemId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ItemHistoryCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput> | ItemHistoryCreateWithoutItemInput[] | ItemHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutItemInput | ItemHistoryCreateOrConnectWithoutItemInput[]
    createMany?: ItemHistoryCreateManyItemInputEnvelope
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
  }

  export type ItemHistoryUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput> | ItemHistoryCreateWithoutItemInput[] | ItemHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutItemInput | ItemHistoryCreateOrConnectWithoutItemInput[]
    createMany?: ItemHistoryCreateManyItemInputEnvelope
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumCurrencyCodeFieldUpdateOperationsInput = {
    set?: $Enums.CurrencyCode
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ItemHistoryUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput> | ItemHistoryCreateWithoutItemInput[] | ItemHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutItemInput | ItemHistoryCreateOrConnectWithoutItemInput[]
    upsert?: ItemHistoryUpsertWithWhereUniqueWithoutItemInput | ItemHistoryUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemHistoryCreateManyItemInputEnvelope
    set?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    disconnect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    delete?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    update?: ItemHistoryUpdateWithWhereUniqueWithoutItemInput | ItemHistoryUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemHistoryUpdateManyWithWhereWithoutItemInput | ItemHistoryUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemHistoryScalarWhereInput | ItemHistoryScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemHistoryUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput> | ItemHistoryCreateWithoutItemInput[] | ItemHistoryUncheckedCreateWithoutItemInput[]
    connectOrCreate?: ItemHistoryCreateOrConnectWithoutItemInput | ItemHistoryCreateOrConnectWithoutItemInput[]
    upsert?: ItemHistoryUpsertWithWhereUniqueWithoutItemInput | ItemHistoryUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: ItemHistoryCreateManyItemInputEnvelope
    set?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    disconnect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    delete?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    connect?: ItemHistoryWhereUniqueInput | ItemHistoryWhereUniqueInput[]
    update?: ItemHistoryUpdateWithWhereUniqueWithoutItemInput | ItemHistoryUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: ItemHistoryUpdateManyWithWhereWithoutItemInput | ItemHistoryUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: ItemHistoryScalarWhereInput | ItemHistoryScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<ItemCreateWithoutHistoriesInput, ItemUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutHistoriesInput
    connect?: ItemWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ItemUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<ItemCreateWithoutHistoriesInput, ItemUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: ItemCreateOrConnectWithoutHistoriesInput
    upsert?: ItemUpsertWithoutHistoriesInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutHistoriesInput, ItemUpdateWithoutHistoriesInput>, ItemUncheckedUpdateWithoutHistoriesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumCurrencyCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel>
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel>
    not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCurrencyCodeFilter<$PrismaModel>
    _max?: NestedEnumCurrencyCodeFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ItemHistoryCreateWithoutItemInput = {
    price: number
    rate: number
    inverseRate: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemHistoryUncheckedCreateWithoutItemInput = {
    id?: number
    price: number
    rate: number
    inverseRate: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemHistoryCreateOrConnectWithoutItemInput = {
    where: ItemHistoryWhereUniqueInput
    create: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput>
  }

  export type ItemHistoryCreateManyItemInputEnvelope = {
    data: ItemHistoryCreateManyItemInput | ItemHistoryCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type ItemHistoryUpsertWithWhereUniqueWithoutItemInput = {
    where: ItemHistoryWhereUniqueInput
    update: XOR<ItemHistoryUpdateWithoutItemInput, ItemHistoryUncheckedUpdateWithoutItemInput>
    create: XOR<ItemHistoryCreateWithoutItemInput, ItemHistoryUncheckedCreateWithoutItemInput>
  }

  export type ItemHistoryUpdateWithWhereUniqueWithoutItemInput = {
    where: ItemHistoryWhereUniqueInput
    data: XOR<ItemHistoryUpdateWithoutItemInput, ItemHistoryUncheckedUpdateWithoutItemInput>
  }

  export type ItemHistoryUpdateManyWithWhereWithoutItemInput = {
    where: ItemHistoryScalarWhereInput
    data: XOR<ItemHistoryUpdateManyMutationInput, ItemHistoryUncheckedUpdateManyWithoutItemInput>
  }

  export type ItemHistoryScalarWhereInput = {
    AND?: ItemHistoryScalarWhereInput | ItemHistoryScalarWhereInput[]
    OR?: ItemHistoryScalarWhereInput[]
    NOT?: ItemHistoryScalarWhereInput | ItemHistoryScalarWhereInput[]
    id?: IntFilter<"ItemHistory"> | number
    price?: FloatFilter<"ItemHistory"> | number
    rate?: FloatFilter<"ItemHistory"> | number
    inverseRate?: FloatFilter<"ItemHistory"> | number
    created_at?: DateTimeFilter<"ItemHistory"> | Date | string
    updated_at?: DateTimeFilter<"ItemHistory"> | Date | string
    itemId?: IntFilter<"ItemHistory"> | number
  }

  export type ItemCreateWithoutHistoriesInput = {
    name: string
    currencyCode: $Enums.CurrencyCode
    created_at?: Date | string
    updated_at?: Date | string
    isPublic?: boolean
    thubmnail?: string | null
    userEmail?: string
  }

  export type ItemUncheckedCreateWithoutHistoriesInput = {
    id?: number
    name: string
    currencyCode: $Enums.CurrencyCode
    created_at?: Date | string
    updated_at?: Date | string
    isPublic?: boolean
    thubmnail?: string | null
    userEmail?: string
  }

  export type ItemCreateOrConnectWithoutHistoriesInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutHistoriesInput, ItemUncheckedCreateWithoutHistoriesInput>
  }

  export type ItemUpsertWithoutHistoriesInput = {
    update: XOR<ItemUpdateWithoutHistoriesInput, ItemUncheckedUpdateWithoutHistoriesInput>
    create: XOR<ItemCreateWithoutHistoriesInput, ItemUncheckedCreateWithoutHistoriesInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutHistoriesInput, ItemUncheckedUpdateWithoutHistoriesInput>
  }

  export type ItemUpdateWithoutHistoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    thubmnail?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type ItemUncheckedUpdateWithoutHistoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    currencyCode?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    thubmnail?: NullableStringFieldUpdateOperationsInput | string | null
    userEmail?: StringFieldUpdateOperationsInput | string
  }

  export type ItemHistoryCreateManyItemInput = {
    id?: number
    price: number
    rate: number
    inverseRate: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ItemHistoryUpdateWithoutItemInput = {
    price?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    inverseRate?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemHistoryUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    inverseRate?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemHistoryUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    rate?: FloatFieldUpdateOperationsInput | number
    inverseRate?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ItemCountOutputTypeDefaultArgs instead
     */
    export type ItemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ItemHistoryDefaultArgs instead
     */
    export type ItemHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}