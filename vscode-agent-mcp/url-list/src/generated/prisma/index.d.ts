
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model UrlList
 * 
 */
export type UrlList = $Result.DefaultSelection<Prisma.$UrlListPayload>
/**
 * Model Url
 * 
 */
export type Url = $Result.DefaultSelection<Prisma.$UrlPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UrlLists
 * const urlLists = await prisma.urlList.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more UrlLists
   * const urlLists = await prisma.urlList.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.urlList`: Exposes CRUD operations for the **UrlList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UrlLists
    * const urlLists = await prisma.urlList.findMany()
    * ```
    */
  get urlList(): Prisma.UrlListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.url`: Exposes CRUD operations for the **Url** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Urls
    * const urls = await prisma.url.findMany()
    * ```
    */
  get url(): Prisma.UrlDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    UrlList: 'UrlList',
    Url: 'Url'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "urlList" | "url"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UrlList: {
        payload: Prisma.$UrlListPayload<ExtArgs>
        fields: Prisma.UrlListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UrlListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UrlListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload>
          }
          findFirst: {
            args: Prisma.UrlListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UrlListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload>
          }
          findMany: {
            args: Prisma.UrlListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload>[]
          }
          create: {
            args: Prisma.UrlListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload>
          }
          createMany: {
            args: Prisma.UrlListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UrlListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload>[]
          }
          delete: {
            args: Prisma.UrlListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload>
          }
          update: {
            args: Prisma.UrlListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload>
          }
          deleteMany: {
            args: Prisma.UrlListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UrlListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UrlListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload>[]
          }
          upsert: {
            args: Prisma.UrlListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlListPayload>
          }
          aggregate: {
            args: Prisma.UrlListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrlList>
          }
          groupBy: {
            args: Prisma.UrlListGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrlListGroupByOutputType>[]
          }
          count: {
            args: Prisma.UrlListCountArgs<ExtArgs>
            result: $Utils.Optional<UrlListCountAggregateOutputType> | number
          }
        }
      }
      Url: {
        payload: Prisma.$UrlPayload<ExtArgs>
        fields: Prisma.UrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          findFirst: {
            args: Prisma.UrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          findMany: {
            args: Prisma.UrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>[]
          }
          create: {
            args: Prisma.UrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          createMany: {
            args: Prisma.UrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UrlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>[]
          }
          delete: {
            args: Prisma.UrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          update: {
            args: Prisma.UrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          deleteMany: {
            args: Prisma.UrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UrlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>[]
          }
          upsert: {
            args: Prisma.UrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UrlPayload>
          }
          aggregate: {
            args: Prisma.UrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUrl>
          }
          groupBy: {
            args: Prisma.UrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<UrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.UrlCountArgs<ExtArgs>
            result: $Utils.Optional<UrlCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    urlList?: UrlListOmit
    url?: UrlOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UrlListCountOutputType
   */

  export type UrlListCountOutputType = {
    urls: number
  }

  export type UrlListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    urls?: boolean | UrlListCountOutputTypeCountUrlsArgs
  }

  // Custom InputTypes
  /**
   * UrlListCountOutputType without action
   */
  export type UrlListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlListCountOutputType
     */
    select?: UrlListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UrlListCountOutputType without action
   */
  export type UrlListCountOutputTypeCountUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlWhereInput
  }


  /**
   * Models
   */

  /**
   * Model UrlList
   */

  export type AggregateUrlList = {
    _count: UrlListCountAggregateOutputType | null
    _min: UrlListMinAggregateOutputType | null
    _max: UrlListMaxAggregateOutputType | null
  }

  export type UrlListMinAggregateOutputType = {
    id: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UrlListMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UrlListCountAggregateOutputType = {
    id: number
    slug: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UrlListMinAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UrlListMaxAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UrlListCountAggregateInputType = {
    id?: true
    slug?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UrlListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UrlList to aggregate.
     */
    where?: UrlListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrlLists to fetch.
     */
    orderBy?: UrlListOrderByWithRelationInput | UrlListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UrlListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrlLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrlLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UrlLists
    **/
    _count?: true | UrlListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlListMaxAggregateInputType
  }

  export type GetUrlListAggregateType<T extends UrlListAggregateArgs> = {
        [P in keyof T & keyof AggregateUrlList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrlList[P]>
      : GetScalarType<T[P], AggregateUrlList[P]>
  }




  export type UrlListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlListWhereInput
    orderBy?: UrlListOrderByWithAggregationInput | UrlListOrderByWithAggregationInput[]
    by: UrlListScalarFieldEnum[] | UrlListScalarFieldEnum
    having?: UrlListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlListCountAggregateInputType | true
    _min?: UrlListMinAggregateInputType
    _max?: UrlListMaxAggregateInputType
  }

  export type UrlListGroupByOutputType = {
    id: string
    slug: string
    createdAt: Date
    updatedAt: Date
    _count: UrlListCountAggregateOutputType | null
    _min: UrlListMinAggregateOutputType | null
    _max: UrlListMaxAggregateOutputType | null
  }

  type GetUrlListGroupByPayload<T extends UrlListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlListGroupByOutputType[P]>
            : GetScalarType<T[P], UrlListGroupByOutputType[P]>
        }
      >
    >


  export type UrlListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    urls?: boolean | UrlList$urlsArgs<ExtArgs>
    _count?: boolean | UrlListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["urlList"]>

  export type UrlListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["urlList"]>

  export type UrlListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["urlList"]>

  export type UrlListSelectScalar = {
    id?: boolean
    slug?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UrlListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["urlList"]>
  export type UrlListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    urls?: boolean | UrlList$urlsArgs<ExtArgs>
    _count?: boolean | UrlListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UrlListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UrlListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UrlListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UrlList"
    objects: {
      urls: Prisma.$UrlPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["urlList"]>
    composites: {}
  }

  type UrlListGetPayload<S extends boolean | null | undefined | UrlListDefaultArgs> = $Result.GetResult<Prisma.$UrlListPayload, S>

  type UrlListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UrlListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrlListCountAggregateInputType | true
    }

  export interface UrlListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UrlList'], meta: { name: 'UrlList' } }
    /**
     * Find zero or one UrlList that matches the filter.
     * @param {UrlListFindUniqueArgs} args - Arguments to find a UrlList
     * @example
     * // Get one UrlList
     * const urlList = await prisma.urlList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UrlListFindUniqueArgs>(args: SelectSubset<T, UrlListFindUniqueArgs<ExtArgs>>): Prisma__UrlListClient<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UrlList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UrlListFindUniqueOrThrowArgs} args - Arguments to find a UrlList
     * @example
     * // Get one UrlList
     * const urlList = await prisma.urlList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UrlListFindUniqueOrThrowArgs>(args: SelectSubset<T, UrlListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UrlListClient<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UrlList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlListFindFirstArgs} args - Arguments to find a UrlList
     * @example
     * // Get one UrlList
     * const urlList = await prisma.urlList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UrlListFindFirstArgs>(args?: SelectSubset<T, UrlListFindFirstArgs<ExtArgs>>): Prisma__UrlListClient<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UrlList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlListFindFirstOrThrowArgs} args - Arguments to find a UrlList
     * @example
     * // Get one UrlList
     * const urlList = await prisma.urlList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UrlListFindFirstOrThrowArgs>(args?: SelectSubset<T, UrlListFindFirstOrThrowArgs<ExtArgs>>): Prisma__UrlListClient<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UrlLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UrlLists
     * const urlLists = await prisma.urlList.findMany()
     * 
     * // Get first 10 UrlLists
     * const urlLists = await prisma.urlList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urlListWithIdOnly = await prisma.urlList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UrlListFindManyArgs>(args?: SelectSubset<T, UrlListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UrlList.
     * @param {UrlListCreateArgs} args - Arguments to create a UrlList.
     * @example
     * // Create one UrlList
     * const UrlList = await prisma.urlList.create({
     *   data: {
     *     // ... data to create a UrlList
     *   }
     * })
     * 
     */
    create<T extends UrlListCreateArgs>(args: SelectSubset<T, UrlListCreateArgs<ExtArgs>>): Prisma__UrlListClient<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UrlLists.
     * @param {UrlListCreateManyArgs} args - Arguments to create many UrlLists.
     * @example
     * // Create many UrlLists
     * const urlList = await prisma.urlList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UrlListCreateManyArgs>(args?: SelectSubset<T, UrlListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UrlLists and returns the data saved in the database.
     * @param {UrlListCreateManyAndReturnArgs} args - Arguments to create many UrlLists.
     * @example
     * // Create many UrlLists
     * const urlList = await prisma.urlList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UrlLists and only return the `id`
     * const urlListWithIdOnly = await prisma.urlList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UrlListCreateManyAndReturnArgs>(args?: SelectSubset<T, UrlListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UrlList.
     * @param {UrlListDeleteArgs} args - Arguments to delete one UrlList.
     * @example
     * // Delete one UrlList
     * const UrlList = await prisma.urlList.delete({
     *   where: {
     *     // ... filter to delete one UrlList
     *   }
     * })
     * 
     */
    delete<T extends UrlListDeleteArgs>(args: SelectSubset<T, UrlListDeleteArgs<ExtArgs>>): Prisma__UrlListClient<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UrlList.
     * @param {UrlListUpdateArgs} args - Arguments to update one UrlList.
     * @example
     * // Update one UrlList
     * const urlList = await prisma.urlList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UrlListUpdateArgs>(args: SelectSubset<T, UrlListUpdateArgs<ExtArgs>>): Prisma__UrlListClient<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UrlLists.
     * @param {UrlListDeleteManyArgs} args - Arguments to filter UrlLists to delete.
     * @example
     * // Delete a few UrlLists
     * const { count } = await prisma.urlList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UrlListDeleteManyArgs>(args?: SelectSubset<T, UrlListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UrlLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UrlLists
     * const urlList = await prisma.urlList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UrlListUpdateManyArgs>(args: SelectSubset<T, UrlListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UrlLists and returns the data updated in the database.
     * @param {UrlListUpdateManyAndReturnArgs} args - Arguments to update many UrlLists.
     * @example
     * // Update many UrlLists
     * const urlList = await prisma.urlList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UrlLists and only return the `id`
     * const urlListWithIdOnly = await prisma.urlList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UrlListUpdateManyAndReturnArgs>(args: SelectSubset<T, UrlListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UrlList.
     * @param {UrlListUpsertArgs} args - Arguments to update or create a UrlList.
     * @example
     * // Update or create a UrlList
     * const urlList = await prisma.urlList.upsert({
     *   create: {
     *     // ... data to create a UrlList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UrlList we want to update
     *   }
     * })
     */
    upsert<T extends UrlListUpsertArgs>(args: SelectSubset<T, UrlListUpsertArgs<ExtArgs>>): Prisma__UrlListClient<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UrlLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlListCountArgs} args - Arguments to filter UrlLists to count.
     * @example
     * // Count the number of UrlLists
     * const count = await prisma.urlList.count({
     *   where: {
     *     // ... the filter for the UrlLists we want to count
     *   }
     * })
    **/
    count<T extends UrlListCountArgs>(
      args?: Subset<T, UrlListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UrlList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UrlListAggregateArgs>(args: Subset<T, UrlListAggregateArgs>): Prisma.PrismaPromise<GetUrlListAggregateType<T>>

    /**
     * Group by UrlList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlListGroupByArgs} args - Group by arguments.
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
      T extends UrlListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrlListGroupByArgs['orderBy'] }
        : { orderBy?: UrlListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UrlListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UrlList model
   */
  readonly fields: UrlListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UrlList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UrlListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    urls<T extends UrlList$urlsArgs<ExtArgs> = {}>(args?: Subset<T, UrlList$urlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UrlList model
   */
  interface UrlListFieldRefs {
    readonly id: FieldRef<"UrlList", 'String'>
    readonly slug: FieldRef<"UrlList", 'String'>
    readonly createdAt: FieldRef<"UrlList", 'DateTime'>
    readonly updatedAt: FieldRef<"UrlList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UrlList findUnique
   */
  export type UrlListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlListInclude<ExtArgs> | null
    /**
     * Filter, which UrlList to fetch.
     */
    where: UrlListWhereUniqueInput
  }

  /**
   * UrlList findUniqueOrThrow
   */
  export type UrlListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlListInclude<ExtArgs> | null
    /**
     * Filter, which UrlList to fetch.
     */
    where: UrlListWhereUniqueInput
  }

  /**
   * UrlList findFirst
   */
  export type UrlListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlListInclude<ExtArgs> | null
    /**
     * Filter, which UrlList to fetch.
     */
    where?: UrlListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrlLists to fetch.
     */
    orderBy?: UrlListOrderByWithRelationInput | UrlListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UrlLists.
     */
    cursor?: UrlListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrlLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrlLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UrlLists.
     */
    distinct?: UrlListScalarFieldEnum | UrlListScalarFieldEnum[]
  }

  /**
   * UrlList findFirstOrThrow
   */
  export type UrlListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlListInclude<ExtArgs> | null
    /**
     * Filter, which UrlList to fetch.
     */
    where?: UrlListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrlLists to fetch.
     */
    orderBy?: UrlListOrderByWithRelationInput | UrlListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UrlLists.
     */
    cursor?: UrlListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrlLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrlLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UrlLists.
     */
    distinct?: UrlListScalarFieldEnum | UrlListScalarFieldEnum[]
  }

  /**
   * UrlList findMany
   */
  export type UrlListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlListInclude<ExtArgs> | null
    /**
     * Filter, which UrlLists to fetch.
     */
    where?: UrlListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UrlLists to fetch.
     */
    orderBy?: UrlListOrderByWithRelationInput | UrlListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UrlLists.
     */
    cursor?: UrlListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UrlLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UrlLists.
     */
    skip?: number
    distinct?: UrlListScalarFieldEnum | UrlListScalarFieldEnum[]
  }

  /**
   * UrlList create
   */
  export type UrlListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlListInclude<ExtArgs> | null
    /**
     * The data needed to create a UrlList.
     */
    data: XOR<UrlListCreateInput, UrlListUncheckedCreateInput>
  }

  /**
   * UrlList createMany
   */
  export type UrlListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UrlLists.
     */
    data: UrlListCreateManyInput | UrlListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UrlList createManyAndReturn
   */
  export type UrlListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * The data used to create many UrlLists.
     */
    data: UrlListCreateManyInput | UrlListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UrlList update
   */
  export type UrlListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlListInclude<ExtArgs> | null
    /**
     * The data needed to update a UrlList.
     */
    data: XOR<UrlListUpdateInput, UrlListUncheckedUpdateInput>
    /**
     * Choose, which UrlList to update.
     */
    where: UrlListWhereUniqueInput
  }

  /**
   * UrlList updateMany
   */
  export type UrlListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UrlLists.
     */
    data: XOR<UrlListUpdateManyMutationInput, UrlListUncheckedUpdateManyInput>
    /**
     * Filter which UrlLists to update
     */
    where?: UrlListWhereInput
    /**
     * Limit how many UrlLists to update.
     */
    limit?: number
  }

  /**
   * UrlList updateManyAndReturn
   */
  export type UrlListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * The data used to update UrlLists.
     */
    data: XOR<UrlListUpdateManyMutationInput, UrlListUncheckedUpdateManyInput>
    /**
     * Filter which UrlLists to update
     */
    where?: UrlListWhereInput
    /**
     * Limit how many UrlLists to update.
     */
    limit?: number
  }

  /**
   * UrlList upsert
   */
  export type UrlListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlListInclude<ExtArgs> | null
    /**
     * The filter to search for the UrlList to update in case it exists.
     */
    where: UrlListWhereUniqueInput
    /**
     * In case the UrlList found by the `where` argument doesn't exist, create a new UrlList with this data.
     */
    create: XOR<UrlListCreateInput, UrlListUncheckedCreateInput>
    /**
     * In case the UrlList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UrlListUpdateInput, UrlListUncheckedUpdateInput>
  }

  /**
   * UrlList delete
   */
  export type UrlListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlListInclude<ExtArgs> | null
    /**
     * Filter which UrlList to delete.
     */
    where: UrlListWhereUniqueInput
  }

  /**
   * UrlList deleteMany
   */
  export type UrlListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UrlLists to delete
     */
    where?: UrlListWhereInput
    /**
     * Limit how many UrlLists to delete.
     */
    limit?: number
  }

  /**
   * UrlList.urls
   */
  export type UrlList$urlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    where?: UrlWhereInput
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    cursor?: UrlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * UrlList without action
   */
  export type UrlListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UrlList
     */
    select?: UrlListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UrlList
     */
    omit?: UrlListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlListInclude<ExtArgs> | null
  }


  /**
   * Model Url
   */

  export type AggregateUrl = {
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  export type UrlAvgAggregateOutputType = {
    order: number | null
  }

  export type UrlSumAggregateOutputType = {
    order: number | null
  }

  export type UrlMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    order: number | null
    listId: string | null
  }

  export type UrlMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    order: number | null
    listId: string | null
  }

  export type UrlCountAggregateOutputType = {
    id: number
    url: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    order: number
    listId: number
    _all: number
  }


  export type UrlAvgAggregateInputType = {
    order?: true
  }

  export type UrlSumAggregateInputType = {
    order?: true
  }

  export type UrlMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    order?: true
    listId?: true
  }

  export type UrlMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    order?: true
    listId?: true
  }

  export type UrlCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    order?: true
    listId?: true
    _all?: true
  }

  export type UrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Url to aggregate.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Urls
    **/
    _count?: true | UrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UrlAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UrlSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UrlMaxAggregateInputType
  }

  export type GetUrlAggregateType<T extends UrlAggregateArgs> = {
        [P in keyof T & keyof AggregateUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUrl[P]>
      : GetScalarType<T[P], AggregateUrl[P]>
  }




  export type UrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UrlWhereInput
    orderBy?: UrlOrderByWithAggregationInput | UrlOrderByWithAggregationInput[]
    by: UrlScalarFieldEnum[] | UrlScalarFieldEnum
    having?: UrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UrlCountAggregateInputType | true
    _avg?: UrlAvgAggregateInputType
    _sum?: UrlSumAggregateInputType
    _min?: UrlMinAggregateInputType
    _max?: UrlMaxAggregateInputType
  }

  export type UrlGroupByOutputType = {
    id: string
    url: string
    title: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    order: number
    listId: string
    _count: UrlCountAggregateOutputType | null
    _avg: UrlAvgAggregateOutputType | null
    _sum: UrlSumAggregateOutputType | null
    _min: UrlMinAggregateOutputType | null
    _max: UrlMaxAggregateOutputType | null
  }

  type GetUrlGroupByPayload<T extends UrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UrlGroupByOutputType[P]>
            : GetScalarType<T[P], UrlGroupByOutputType[P]>
        }
      >
    >


  export type UrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean
    listId?: boolean
    list?: boolean | UrlListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type UrlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean
    listId?: boolean
    list?: boolean | UrlListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type UrlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean
    listId?: boolean
    list?: boolean | UrlListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["url"]>

  export type UrlSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean
    listId?: boolean
  }

  export type UrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "description" | "createdAt" | "updatedAt" | "order" | "listId", ExtArgs["result"]["url"]>
  export type UrlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | UrlListDefaultArgs<ExtArgs>
  }
  export type UrlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | UrlListDefaultArgs<ExtArgs>
  }
  export type UrlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | UrlListDefaultArgs<ExtArgs>
  }

  export type $UrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Url"
    objects: {
      list: Prisma.$UrlListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      title: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
      order: number
      listId: string
    }, ExtArgs["result"]["url"]>
    composites: {}
  }

  type UrlGetPayload<S extends boolean | null | undefined | UrlDefaultArgs> = $Result.GetResult<Prisma.$UrlPayload, S>

  type UrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UrlCountAggregateInputType | true
    }

  export interface UrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Url'], meta: { name: 'Url' } }
    /**
     * Find zero or one Url that matches the filter.
     * @param {UrlFindUniqueArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UrlFindUniqueArgs>(args: SelectSubset<T, UrlFindUniqueArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Url that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UrlFindUniqueOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UrlFindUniqueOrThrowArgs>(args: SelectSubset<T, UrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindFirstArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UrlFindFirstArgs>(args?: SelectSubset<T, UrlFindFirstArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Url that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindFirstOrThrowArgs} args - Arguments to find a Url
     * @example
     * // Get one Url
     * const url = await prisma.url.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UrlFindFirstOrThrowArgs>(args?: SelectSubset<T, UrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Urls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Urls
     * const urls = await prisma.url.findMany()
     * 
     * // Get first 10 Urls
     * const urls = await prisma.url.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const urlWithIdOnly = await prisma.url.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UrlFindManyArgs>(args?: SelectSubset<T, UrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Url.
     * @param {UrlCreateArgs} args - Arguments to create a Url.
     * @example
     * // Create one Url
     * const Url = await prisma.url.create({
     *   data: {
     *     // ... data to create a Url
     *   }
     * })
     * 
     */
    create<T extends UrlCreateArgs>(args: SelectSubset<T, UrlCreateArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Urls.
     * @param {UrlCreateManyArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const url = await prisma.url.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UrlCreateManyArgs>(args?: SelectSubset<T, UrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Urls and returns the data saved in the database.
     * @param {UrlCreateManyAndReturnArgs} args - Arguments to create many Urls.
     * @example
     * // Create many Urls
     * const url = await prisma.url.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Urls and only return the `id`
     * const urlWithIdOnly = await prisma.url.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UrlCreateManyAndReturnArgs>(args?: SelectSubset<T, UrlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Url.
     * @param {UrlDeleteArgs} args - Arguments to delete one Url.
     * @example
     * // Delete one Url
     * const Url = await prisma.url.delete({
     *   where: {
     *     // ... filter to delete one Url
     *   }
     * })
     * 
     */
    delete<T extends UrlDeleteArgs>(args: SelectSubset<T, UrlDeleteArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Url.
     * @param {UrlUpdateArgs} args - Arguments to update one Url.
     * @example
     * // Update one Url
     * const url = await prisma.url.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UrlUpdateArgs>(args: SelectSubset<T, UrlUpdateArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Urls.
     * @param {UrlDeleteManyArgs} args - Arguments to filter Urls to delete.
     * @example
     * // Delete a few Urls
     * const { count } = await prisma.url.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UrlDeleteManyArgs>(args?: SelectSubset<T, UrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UrlUpdateManyArgs>(args: SelectSubset<T, UrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Urls and returns the data updated in the database.
     * @param {UrlUpdateManyAndReturnArgs} args - Arguments to update many Urls.
     * @example
     * // Update many Urls
     * const url = await prisma.url.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Urls and only return the `id`
     * const urlWithIdOnly = await prisma.url.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UrlUpdateManyAndReturnArgs>(args: SelectSubset<T, UrlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Url.
     * @param {UrlUpsertArgs} args - Arguments to update or create a Url.
     * @example
     * // Update or create a Url
     * const url = await prisma.url.upsert({
     *   create: {
     *     // ... data to create a Url
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Url we want to update
     *   }
     * })
     */
    upsert<T extends UrlUpsertArgs>(args: SelectSubset<T, UrlUpsertArgs<ExtArgs>>): Prisma__UrlClient<$Result.GetResult<Prisma.$UrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Urls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlCountArgs} args - Arguments to filter Urls to count.
     * @example
     * // Count the number of Urls
     * const count = await prisma.url.count({
     *   where: {
     *     // ... the filter for the Urls we want to count
     *   }
     * })
    **/
    count<T extends UrlCountArgs>(
      args?: Subset<T, UrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UrlAggregateArgs>(args: Subset<T, UrlAggregateArgs>): Prisma.PrismaPromise<GetUrlAggregateType<T>>

    /**
     * Group by Url.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UrlGroupByArgs} args - Group by arguments.
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
      T extends UrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UrlGroupByArgs['orderBy'] }
        : { orderBy?: UrlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Url model
   */
  readonly fields: UrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Url.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends UrlListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UrlListDefaultArgs<ExtArgs>>): Prisma__UrlListClient<$Result.GetResult<Prisma.$UrlListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Url model
   */
  interface UrlFieldRefs {
    readonly id: FieldRef<"Url", 'String'>
    readonly url: FieldRef<"Url", 'String'>
    readonly title: FieldRef<"Url", 'String'>
    readonly description: FieldRef<"Url", 'String'>
    readonly createdAt: FieldRef<"Url", 'DateTime'>
    readonly updatedAt: FieldRef<"Url", 'DateTime'>
    readonly order: FieldRef<"Url", 'Int'>
    readonly listId: FieldRef<"Url", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Url findUnique
   */
  export type UrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url findUniqueOrThrow
   */
  export type UrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url findFirst
   */
  export type UrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * Url findFirstOrThrow
   */
  export type UrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Url to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Urls.
     */
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * Url findMany
   */
  export type UrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter, which Urls to fetch.
     */
    where?: UrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Urls to fetch.
     */
    orderBy?: UrlOrderByWithRelationInput | UrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Urls.
     */
    cursor?: UrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Urls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Urls.
     */
    skip?: number
    distinct?: UrlScalarFieldEnum | UrlScalarFieldEnum[]
  }

  /**
   * Url create
   */
  export type UrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * The data needed to create a Url.
     */
    data: XOR<UrlCreateInput, UrlUncheckedCreateInput>
  }

  /**
   * Url createMany
   */
  export type UrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Urls.
     */
    data: UrlCreateManyInput | UrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Url createManyAndReturn
   */
  export type UrlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * The data used to create many Urls.
     */
    data: UrlCreateManyInput | UrlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Url update
   */
  export type UrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * The data needed to update a Url.
     */
    data: XOR<UrlUpdateInput, UrlUncheckedUpdateInput>
    /**
     * Choose, which Url to update.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url updateMany
   */
  export type UrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Urls.
     */
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyInput>
    /**
     * Filter which Urls to update
     */
    where?: UrlWhereInput
    /**
     * Limit how many Urls to update.
     */
    limit?: number
  }

  /**
   * Url updateManyAndReturn
   */
  export type UrlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * The data used to update Urls.
     */
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyInput>
    /**
     * Filter which Urls to update
     */
    where?: UrlWhereInput
    /**
     * Limit how many Urls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Url upsert
   */
  export type UrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * The filter to search for the Url to update in case it exists.
     */
    where: UrlWhereUniqueInput
    /**
     * In case the Url found by the `where` argument doesn't exist, create a new Url with this data.
     */
    create: XOR<UrlCreateInput, UrlUncheckedCreateInput>
    /**
     * In case the Url was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UrlUpdateInput, UrlUncheckedUpdateInput>
  }

  /**
   * Url delete
   */
  export type UrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
    /**
     * Filter which Url to delete.
     */
    where: UrlWhereUniqueInput
  }

  /**
   * Url deleteMany
   */
  export type UrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Urls to delete
     */
    where?: UrlWhereInput
    /**
     * Limit how many Urls to delete.
     */
    limit?: number
  }

  /**
   * Url without action
   */
  export type UrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Url
     */
    select?: UrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Url
     */
    omit?: UrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UrlInclude<ExtArgs> | null
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


  export const UrlListScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UrlListScalarFieldEnum = (typeof UrlListScalarFieldEnum)[keyof typeof UrlListScalarFieldEnum]


  export const UrlScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    order: 'order',
    listId: 'listId'
  };

  export type UrlScalarFieldEnum = (typeof UrlScalarFieldEnum)[keyof typeof UrlScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UrlListWhereInput = {
    AND?: UrlListWhereInput | UrlListWhereInput[]
    OR?: UrlListWhereInput[]
    NOT?: UrlListWhereInput | UrlListWhereInput[]
    id?: StringFilter<"UrlList"> | string
    slug?: StringFilter<"UrlList"> | string
    createdAt?: DateTimeFilter<"UrlList"> | Date | string
    updatedAt?: DateTimeFilter<"UrlList"> | Date | string
    urls?: UrlListRelationFilter
  }

  export type UrlListOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    urls?: UrlOrderByRelationAggregateInput
  }

  export type UrlListWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: UrlListWhereInput | UrlListWhereInput[]
    OR?: UrlListWhereInput[]
    NOT?: UrlListWhereInput | UrlListWhereInput[]
    createdAt?: DateTimeFilter<"UrlList"> | Date | string
    updatedAt?: DateTimeFilter<"UrlList"> | Date | string
    urls?: UrlListRelationFilter
  }, "id" | "slug">

  export type UrlListOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UrlListCountOrderByAggregateInput
    _max?: UrlListMaxOrderByAggregateInput
    _min?: UrlListMinOrderByAggregateInput
  }

  export type UrlListScalarWhereWithAggregatesInput = {
    AND?: UrlListScalarWhereWithAggregatesInput | UrlListScalarWhereWithAggregatesInput[]
    OR?: UrlListScalarWhereWithAggregatesInput[]
    NOT?: UrlListScalarWhereWithAggregatesInput | UrlListScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UrlList"> | string
    slug?: StringWithAggregatesFilter<"UrlList"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UrlList"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UrlList"> | Date | string
  }

  export type UrlWhereInput = {
    AND?: UrlWhereInput | UrlWhereInput[]
    OR?: UrlWhereInput[]
    NOT?: UrlWhereInput | UrlWhereInput[]
    id?: StringFilter<"Url"> | string
    url?: StringFilter<"Url"> | string
    title?: StringNullableFilter<"Url"> | string | null
    description?: StringNullableFilter<"Url"> | string | null
    createdAt?: DateTimeFilter<"Url"> | Date | string
    updatedAt?: DateTimeFilter<"Url"> | Date | string
    order?: IntFilter<"Url"> | number
    listId?: StringFilter<"Url"> | string
    list?: XOR<UrlListScalarRelationFilter, UrlListWhereInput>
  }

  export type UrlOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SortOrder
    listId?: SortOrder
    list?: UrlListOrderByWithRelationInput
  }

  export type UrlWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UrlWhereInput | UrlWhereInput[]
    OR?: UrlWhereInput[]
    NOT?: UrlWhereInput | UrlWhereInput[]
    url?: StringFilter<"Url"> | string
    title?: StringNullableFilter<"Url"> | string | null
    description?: StringNullableFilter<"Url"> | string | null
    createdAt?: DateTimeFilter<"Url"> | Date | string
    updatedAt?: DateTimeFilter<"Url"> | Date | string
    order?: IntFilter<"Url"> | number
    listId?: StringFilter<"Url"> | string
    list?: XOR<UrlListScalarRelationFilter, UrlListWhereInput>
  }, "id">

  export type UrlOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SortOrder
    listId?: SortOrder
    _count?: UrlCountOrderByAggregateInput
    _avg?: UrlAvgOrderByAggregateInput
    _max?: UrlMaxOrderByAggregateInput
    _min?: UrlMinOrderByAggregateInput
    _sum?: UrlSumOrderByAggregateInput
  }

  export type UrlScalarWhereWithAggregatesInput = {
    AND?: UrlScalarWhereWithAggregatesInput | UrlScalarWhereWithAggregatesInput[]
    OR?: UrlScalarWhereWithAggregatesInput[]
    NOT?: UrlScalarWhereWithAggregatesInput | UrlScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Url"> | string
    url?: StringWithAggregatesFilter<"Url"> | string
    title?: StringNullableWithAggregatesFilter<"Url"> | string | null
    description?: StringNullableWithAggregatesFilter<"Url"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Url"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Url"> | Date | string
    order?: IntWithAggregatesFilter<"Url"> | number
    listId?: StringWithAggregatesFilter<"Url"> | string
  }

  export type UrlListCreateInput = {
    id?: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    urls?: UrlCreateNestedManyWithoutListInput
  }

  export type UrlListUncheckedCreateInput = {
    id?: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
    urls?: UrlUncheckedCreateNestedManyWithoutListInput
  }

  export type UrlListUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urls?: UrlUpdateManyWithoutListNestedInput
  }

  export type UrlListUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    urls?: UrlUncheckedUpdateManyWithoutListNestedInput
  }

  export type UrlListCreateManyInput = {
    id?: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UrlListUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlListUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlCreateInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: number
    list: UrlListCreateNestedOneWithoutUrlsInput
  }

  export type UrlUncheckedCreateInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: number
    listId: string
  }

  export type UrlUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    list?: UrlListUpdateOneRequiredWithoutUrlsNestedInput
  }

  export type UrlUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    listId?: StringFieldUpdateOperationsInput | string
  }

  export type UrlCreateManyInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: number
    listId: string
  }

  export type UrlUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UrlUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    listId?: StringFieldUpdateOperationsInput | string
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

  export type UrlListRelationFilter = {
    every?: UrlWhereInput
    some?: UrlWhereInput
    none?: UrlWhereInput
  }

  export type UrlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UrlListCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UrlListMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UrlListMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UrlListScalarRelationFilter = {
    is?: UrlListWhereInput
    isNot?: UrlListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UrlCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SortOrder
    listId?: SortOrder
  }

  export type UrlAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type UrlMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SortOrder
    listId?: SortOrder
  }

  export type UrlMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: SortOrder
    listId?: SortOrder
  }

  export type UrlSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type UrlCreateNestedManyWithoutListInput = {
    create?: XOR<UrlCreateWithoutListInput, UrlUncheckedCreateWithoutListInput> | UrlCreateWithoutListInput[] | UrlUncheckedCreateWithoutListInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutListInput | UrlCreateOrConnectWithoutListInput[]
    createMany?: UrlCreateManyListInputEnvelope
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
  }

  export type UrlUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<UrlCreateWithoutListInput, UrlUncheckedCreateWithoutListInput> | UrlCreateWithoutListInput[] | UrlUncheckedCreateWithoutListInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutListInput | UrlCreateOrConnectWithoutListInput[]
    createMany?: UrlCreateManyListInputEnvelope
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UrlUpdateManyWithoutListNestedInput = {
    create?: XOR<UrlCreateWithoutListInput, UrlUncheckedCreateWithoutListInput> | UrlCreateWithoutListInput[] | UrlUncheckedCreateWithoutListInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutListInput | UrlCreateOrConnectWithoutListInput[]
    upsert?: UrlUpsertWithWhereUniqueWithoutListInput | UrlUpsertWithWhereUniqueWithoutListInput[]
    createMany?: UrlCreateManyListInputEnvelope
    set?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    disconnect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    delete?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    update?: UrlUpdateWithWhereUniqueWithoutListInput | UrlUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: UrlUpdateManyWithWhereWithoutListInput | UrlUpdateManyWithWhereWithoutListInput[]
    deleteMany?: UrlScalarWhereInput | UrlScalarWhereInput[]
  }

  export type UrlUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<UrlCreateWithoutListInput, UrlUncheckedCreateWithoutListInput> | UrlCreateWithoutListInput[] | UrlUncheckedCreateWithoutListInput[]
    connectOrCreate?: UrlCreateOrConnectWithoutListInput | UrlCreateOrConnectWithoutListInput[]
    upsert?: UrlUpsertWithWhereUniqueWithoutListInput | UrlUpsertWithWhereUniqueWithoutListInput[]
    createMany?: UrlCreateManyListInputEnvelope
    set?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    disconnect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    delete?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    connect?: UrlWhereUniqueInput | UrlWhereUniqueInput[]
    update?: UrlUpdateWithWhereUniqueWithoutListInput | UrlUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: UrlUpdateManyWithWhereWithoutListInput | UrlUpdateManyWithWhereWithoutListInput[]
    deleteMany?: UrlScalarWhereInput | UrlScalarWhereInput[]
  }

  export type UrlListCreateNestedOneWithoutUrlsInput = {
    create?: XOR<UrlListCreateWithoutUrlsInput, UrlListUncheckedCreateWithoutUrlsInput>
    connectOrCreate?: UrlListCreateOrConnectWithoutUrlsInput
    connect?: UrlListWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UrlListUpdateOneRequiredWithoutUrlsNestedInput = {
    create?: XOR<UrlListCreateWithoutUrlsInput, UrlListUncheckedCreateWithoutUrlsInput>
    connectOrCreate?: UrlListCreateOrConnectWithoutUrlsInput
    upsert?: UrlListUpsertWithoutUrlsInput
    connect?: UrlListWhereUniqueInput
    update?: XOR<XOR<UrlListUpdateToOneWithWhereWithoutUrlsInput, UrlListUpdateWithoutUrlsInput>, UrlListUncheckedUpdateWithoutUrlsInput>
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

  export type UrlCreateWithoutListInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: number
  }

  export type UrlUncheckedCreateWithoutListInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: number
  }

  export type UrlCreateOrConnectWithoutListInput = {
    where: UrlWhereUniqueInput
    create: XOR<UrlCreateWithoutListInput, UrlUncheckedCreateWithoutListInput>
  }

  export type UrlCreateManyListInputEnvelope = {
    data: UrlCreateManyListInput | UrlCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type UrlUpsertWithWhereUniqueWithoutListInput = {
    where: UrlWhereUniqueInput
    update: XOR<UrlUpdateWithoutListInput, UrlUncheckedUpdateWithoutListInput>
    create: XOR<UrlCreateWithoutListInput, UrlUncheckedCreateWithoutListInput>
  }

  export type UrlUpdateWithWhereUniqueWithoutListInput = {
    where: UrlWhereUniqueInput
    data: XOR<UrlUpdateWithoutListInput, UrlUncheckedUpdateWithoutListInput>
  }

  export type UrlUpdateManyWithWhereWithoutListInput = {
    where: UrlScalarWhereInput
    data: XOR<UrlUpdateManyMutationInput, UrlUncheckedUpdateManyWithoutListInput>
  }

  export type UrlScalarWhereInput = {
    AND?: UrlScalarWhereInput | UrlScalarWhereInput[]
    OR?: UrlScalarWhereInput[]
    NOT?: UrlScalarWhereInput | UrlScalarWhereInput[]
    id?: StringFilter<"Url"> | string
    url?: StringFilter<"Url"> | string
    title?: StringNullableFilter<"Url"> | string | null
    description?: StringNullableFilter<"Url"> | string | null
    createdAt?: DateTimeFilter<"Url"> | Date | string
    updatedAt?: DateTimeFilter<"Url"> | Date | string
    order?: IntFilter<"Url"> | number
    listId?: StringFilter<"Url"> | string
  }

  export type UrlListCreateWithoutUrlsInput = {
    id?: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UrlListUncheckedCreateWithoutUrlsInput = {
    id?: string
    slug: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UrlListCreateOrConnectWithoutUrlsInput = {
    where: UrlListWhereUniqueInput
    create: XOR<UrlListCreateWithoutUrlsInput, UrlListUncheckedCreateWithoutUrlsInput>
  }

  export type UrlListUpsertWithoutUrlsInput = {
    update: XOR<UrlListUpdateWithoutUrlsInput, UrlListUncheckedUpdateWithoutUrlsInput>
    create: XOR<UrlListCreateWithoutUrlsInput, UrlListUncheckedCreateWithoutUrlsInput>
    where?: UrlListWhereInput
  }

  export type UrlListUpdateToOneWithWhereWithoutUrlsInput = {
    where?: UrlListWhereInput
    data: XOR<UrlListUpdateWithoutUrlsInput, UrlListUncheckedUpdateWithoutUrlsInput>
  }

  export type UrlListUpdateWithoutUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlListUncheckedUpdateWithoutUrlsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UrlCreateManyListInput = {
    id?: string
    url: string
    title?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: number
  }

  export type UrlUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UrlUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type UrlUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }



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