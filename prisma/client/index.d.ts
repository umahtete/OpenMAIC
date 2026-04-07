
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
 * Model LtiUser
 * 
 */
export type LtiUser = $Result.DefaultSelection<Prisma.$LtiUserPayload>
/**
 * Model LtiSession
 * 
 */
export type LtiSession = $Result.DefaultSelection<Prisma.$LtiSessionPayload>
/**
 * Model LtiState
 * 
 */
export type LtiState = $Result.DefaultSelection<Prisma.$LtiStatePayload>
/**
 * Model LtiJwks
 * 
 */
export type LtiJwks = $Result.DefaultSelection<Prisma.$LtiJwksPayload>
/**
 * Model LtiGrade
 * 
 */
export type LtiGrade = $Result.DefaultSelection<Prisma.$LtiGradePayload>
/**
 * Model LtiLineItem
 * 
 */
export type LtiLineItem = $Result.DefaultSelection<Prisma.$LtiLineItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more LtiUsers
 * const ltiUsers = await prisma.ltiUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more LtiUsers
   * const ltiUsers = await prisma.ltiUser.findMany()
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
   * `prisma.ltiUser`: Exposes CRUD operations for the **LtiUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LtiUsers
    * const ltiUsers = await prisma.ltiUser.findMany()
    * ```
    */
  get ltiUser(): Prisma.LtiUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ltiSession`: Exposes CRUD operations for the **LtiSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LtiSessions
    * const ltiSessions = await prisma.ltiSession.findMany()
    * ```
    */
  get ltiSession(): Prisma.LtiSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ltiState`: Exposes CRUD operations for the **LtiState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LtiStates
    * const ltiStates = await prisma.ltiState.findMany()
    * ```
    */
  get ltiState(): Prisma.LtiStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ltiJwks`: Exposes CRUD operations for the **LtiJwks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LtiJwks
    * const ltiJwks = await prisma.ltiJwks.findMany()
    * ```
    */
  get ltiJwks(): Prisma.LtiJwksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ltiGrade`: Exposes CRUD operations for the **LtiGrade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LtiGrades
    * const ltiGrades = await prisma.ltiGrade.findMany()
    * ```
    */
  get ltiGrade(): Prisma.LtiGradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ltiLineItem`: Exposes CRUD operations for the **LtiLineItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LtiLineItems
    * const ltiLineItems = await prisma.ltiLineItem.findMany()
    * ```
    */
  get ltiLineItem(): Prisma.LtiLineItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    LtiUser: 'LtiUser',
    LtiSession: 'LtiSession',
    LtiState: 'LtiState',
    LtiJwks: 'LtiJwks',
    LtiGrade: 'LtiGrade',
    LtiLineItem: 'LtiLineItem'
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
      modelProps: "ltiUser" | "ltiSession" | "ltiState" | "ltiJwks" | "ltiGrade" | "ltiLineItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      LtiUser: {
        payload: Prisma.$LtiUserPayload<ExtArgs>
        fields: Prisma.LtiUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LtiUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LtiUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload>
          }
          findFirst: {
            args: Prisma.LtiUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LtiUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload>
          }
          findMany: {
            args: Prisma.LtiUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload>[]
          }
          create: {
            args: Prisma.LtiUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload>
          }
          createMany: {
            args: Prisma.LtiUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LtiUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload>[]
          }
          delete: {
            args: Prisma.LtiUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload>
          }
          update: {
            args: Prisma.LtiUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload>
          }
          deleteMany: {
            args: Prisma.LtiUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LtiUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LtiUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload>[]
          }
          upsert: {
            args: Prisma.LtiUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiUserPayload>
          }
          aggregate: {
            args: Prisma.LtiUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLtiUser>
          }
          groupBy: {
            args: Prisma.LtiUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<LtiUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.LtiUserCountArgs<ExtArgs>
            result: $Utils.Optional<LtiUserCountAggregateOutputType> | number
          }
        }
      }
      LtiSession: {
        payload: Prisma.$LtiSessionPayload<ExtArgs>
        fields: Prisma.LtiSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LtiSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LtiSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload>
          }
          findFirst: {
            args: Prisma.LtiSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LtiSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload>
          }
          findMany: {
            args: Prisma.LtiSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload>[]
          }
          create: {
            args: Prisma.LtiSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload>
          }
          createMany: {
            args: Prisma.LtiSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LtiSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload>[]
          }
          delete: {
            args: Prisma.LtiSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload>
          }
          update: {
            args: Prisma.LtiSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload>
          }
          deleteMany: {
            args: Prisma.LtiSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LtiSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LtiSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload>[]
          }
          upsert: {
            args: Prisma.LtiSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiSessionPayload>
          }
          aggregate: {
            args: Prisma.LtiSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLtiSession>
          }
          groupBy: {
            args: Prisma.LtiSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<LtiSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.LtiSessionCountArgs<ExtArgs>
            result: $Utils.Optional<LtiSessionCountAggregateOutputType> | number
          }
        }
      }
      LtiState: {
        payload: Prisma.$LtiStatePayload<ExtArgs>
        fields: Prisma.LtiStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LtiStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LtiStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload>
          }
          findFirst: {
            args: Prisma.LtiStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LtiStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload>
          }
          findMany: {
            args: Prisma.LtiStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload>[]
          }
          create: {
            args: Prisma.LtiStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload>
          }
          createMany: {
            args: Prisma.LtiStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LtiStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload>[]
          }
          delete: {
            args: Prisma.LtiStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload>
          }
          update: {
            args: Prisma.LtiStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload>
          }
          deleteMany: {
            args: Prisma.LtiStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LtiStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LtiStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload>[]
          }
          upsert: {
            args: Prisma.LtiStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiStatePayload>
          }
          aggregate: {
            args: Prisma.LtiStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLtiState>
          }
          groupBy: {
            args: Prisma.LtiStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<LtiStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.LtiStateCountArgs<ExtArgs>
            result: $Utils.Optional<LtiStateCountAggregateOutputType> | number
          }
        }
      }
      LtiJwks: {
        payload: Prisma.$LtiJwksPayload<ExtArgs>
        fields: Prisma.LtiJwksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LtiJwksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LtiJwksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload>
          }
          findFirst: {
            args: Prisma.LtiJwksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LtiJwksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload>
          }
          findMany: {
            args: Prisma.LtiJwksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload>[]
          }
          create: {
            args: Prisma.LtiJwksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload>
          }
          createMany: {
            args: Prisma.LtiJwksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LtiJwksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload>[]
          }
          delete: {
            args: Prisma.LtiJwksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload>
          }
          update: {
            args: Prisma.LtiJwksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload>
          }
          deleteMany: {
            args: Prisma.LtiJwksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LtiJwksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LtiJwksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload>[]
          }
          upsert: {
            args: Prisma.LtiJwksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiJwksPayload>
          }
          aggregate: {
            args: Prisma.LtiJwksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLtiJwks>
          }
          groupBy: {
            args: Prisma.LtiJwksGroupByArgs<ExtArgs>
            result: $Utils.Optional<LtiJwksGroupByOutputType>[]
          }
          count: {
            args: Prisma.LtiJwksCountArgs<ExtArgs>
            result: $Utils.Optional<LtiJwksCountAggregateOutputType> | number
          }
        }
      }
      LtiGrade: {
        payload: Prisma.$LtiGradePayload<ExtArgs>
        fields: Prisma.LtiGradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LtiGradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LtiGradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload>
          }
          findFirst: {
            args: Prisma.LtiGradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LtiGradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload>
          }
          findMany: {
            args: Prisma.LtiGradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload>[]
          }
          create: {
            args: Prisma.LtiGradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload>
          }
          createMany: {
            args: Prisma.LtiGradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LtiGradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload>[]
          }
          delete: {
            args: Prisma.LtiGradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload>
          }
          update: {
            args: Prisma.LtiGradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload>
          }
          deleteMany: {
            args: Prisma.LtiGradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LtiGradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LtiGradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload>[]
          }
          upsert: {
            args: Prisma.LtiGradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiGradePayload>
          }
          aggregate: {
            args: Prisma.LtiGradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLtiGrade>
          }
          groupBy: {
            args: Prisma.LtiGradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LtiGradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LtiGradeCountArgs<ExtArgs>
            result: $Utils.Optional<LtiGradeCountAggregateOutputType> | number
          }
        }
      }
      LtiLineItem: {
        payload: Prisma.$LtiLineItemPayload<ExtArgs>
        fields: Prisma.LtiLineItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LtiLineItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LtiLineItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload>
          }
          findFirst: {
            args: Prisma.LtiLineItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LtiLineItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload>
          }
          findMany: {
            args: Prisma.LtiLineItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload>[]
          }
          create: {
            args: Prisma.LtiLineItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload>
          }
          createMany: {
            args: Prisma.LtiLineItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LtiLineItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload>[]
          }
          delete: {
            args: Prisma.LtiLineItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload>
          }
          update: {
            args: Prisma.LtiLineItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload>
          }
          deleteMany: {
            args: Prisma.LtiLineItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LtiLineItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LtiLineItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload>[]
          }
          upsert: {
            args: Prisma.LtiLineItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LtiLineItemPayload>
          }
          aggregate: {
            args: Prisma.LtiLineItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLtiLineItem>
          }
          groupBy: {
            args: Prisma.LtiLineItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<LtiLineItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.LtiLineItemCountArgs<ExtArgs>
            result: $Utils.Optional<LtiLineItemCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    ltiUser?: LtiUserOmit
    ltiSession?: LtiSessionOmit
    ltiState?: LtiStateOmit
    ltiJwks?: LtiJwksOmit
    ltiGrade?: LtiGradeOmit
    ltiLineItem?: LtiLineItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type LtiUserCountOutputType
   */

  export type LtiUserCountOutputType = {
    sessions: number
    grades: number
  }

  export type LtiUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | LtiUserCountOutputTypeCountSessionsArgs
    grades?: boolean | LtiUserCountOutputTypeCountGradesArgs
  }

  // Custom InputTypes
  /**
   * LtiUserCountOutputType without action
   */
  export type LtiUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUserCountOutputType
     */
    select?: LtiUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LtiUserCountOutputType without action
   */
  export type LtiUserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LtiSessionWhereInput
  }

  /**
   * LtiUserCountOutputType without action
   */
  export type LtiUserCountOutputTypeCountGradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LtiGradeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model LtiUser
   */

  export type AggregateLtiUser = {
    _count: LtiUserCountAggregateOutputType | null
    _min: LtiUserMinAggregateOutputType | null
    _max: LtiUserMaxAggregateOutputType | null
  }

  export type LtiUserMinAggregateOutputType = {
    id: string | null
    sub: string | null
    platformId: string | null
    email: string | null
    name: string | null
    givenName: string | null
    familyName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LtiUserMaxAggregateOutputType = {
    id: string | null
    sub: string | null
    platformId: string | null
    email: string | null
    name: string | null
    givenName: string | null
    familyName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LtiUserCountAggregateOutputType = {
    id: number
    sub: number
    platformId: number
    email: number
    name: number
    givenName: number
    familyName: number
    roles: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LtiUserMinAggregateInputType = {
    id?: true
    sub?: true
    platformId?: true
    email?: true
    name?: true
    givenName?: true
    familyName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LtiUserMaxAggregateInputType = {
    id?: true
    sub?: true
    platformId?: true
    email?: true
    name?: true
    givenName?: true
    familyName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LtiUserCountAggregateInputType = {
    id?: true
    sub?: true
    platformId?: true
    email?: true
    name?: true
    givenName?: true
    familyName?: true
    roles?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LtiUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiUser to aggregate.
     */
    where?: LtiUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiUsers to fetch.
     */
    orderBy?: LtiUserOrderByWithRelationInput | LtiUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LtiUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LtiUsers
    **/
    _count?: true | LtiUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LtiUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LtiUserMaxAggregateInputType
  }

  export type GetLtiUserAggregateType<T extends LtiUserAggregateArgs> = {
        [P in keyof T & keyof AggregateLtiUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLtiUser[P]>
      : GetScalarType<T[P], AggregateLtiUser[P]>
  }




  export type LtiUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LtiUserWhereInput
    orderBy?: LtiUserOrderByWithAggregationInput | LtiUserOrderByWithAggregationInput[]
    by: LtiUserScalarFieldEnum[] | LtiUserScalarFieldEnum
    having?: LtiUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LtiUserCountAggregateInputType | true
    _min?: LtiUserMinAggregateInputType
    _max?: LtiUserMaxAggregateInputType
  }

  export type LtiUserGroupByOutputType = {
    id: string
    sub: string
    platformId: string
    email: string | null
    name: string | null
    givenName: string | null
    familyName: string | null
    roles: string[]
    createdAt: Date
    updatedAt: Date
    _count: LtiUserCountAggregateOutputType | null
    _min: LtiUserMinAggregateOutputType | null
    _max: LtiUserMaxAggregateOutputType | null
  }

  type GetLtiUserGroupByPayload<T extends LtiUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LtiUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LtiUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LtiUserGroupByOutputType[P]>
            : GetScalarType<T[P], LtiUserGroupByOutputType[P]>
        }
      >
    >


  export type LtiUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sub?: boolean
    platformId?: boolean
    email?: boolean
    name?: boolean
    givenName?: boolean
    familyName?: boolean
    roles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | LtiUser$sessionsArgs<ExtArgs>
    grades?: boolean | LtiUser$gradesArgs<ExtArgs>
    _count?: boolean | LtiUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ltiUser"]>

  export type LtiUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sub?: boolean
    platformId?: boolean
    email?: boolean
    name?: boolean
    givenName?: boolean
    familyName?: boolean
    roles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ltiUser"]>

  export type LtiUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sub?: boolean
    platformId?: boolean
    email?: boolean
    name?: boolean
    givenName?: boolean
    familyName?: boolean
    roles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ltiUser"]>

  export type LtiUserSelectScalar = {
    id?: boolean
    sub?: boolean
    platformId?: boolean
    email?: boolean
    name?: boolean
    givenName?: boolean
    familyName?: boolean
    roles?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LtiUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sub" | "platformId" | "email" | "name" | "givenName" | "familyName" | "roles" | "createdAt" | "updatedAt", ExtArgs["result"]["ltiUser"]>
  export type LtiUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | LtiUser$sessionsArgs<ExtArgs>
    grades?: boolean | LtiUser$gradesArgs<ExtArgs>
    _count?: boolean | LtiUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LtiUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LtiUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LtiUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LtiUser"
    objects: {
      sessions: Prisma.$LtiSessionPayload<ExtArgs>[]
      grades: Prisma.$LtiGradePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sub: string
      platformId: string
      email: string | null
      name: string | null
      givenName: string | null
      familyName: string | null
      roles: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ltiUser"]>
    composites: {}
  }

  type LtiUserGetPayload<S extends boolean | null | undefined | LtiUserDefaultArgs> = $Result.GetResult<Prisma.$LtiUserPayload, S>

  type LtiUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LtiUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LtiUserCountAggregateInputType | true
    }

  export interface LtiUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LtiUser'], meta: { name: 'LtiUser' } }
    /**
     * Find zero or one LtiUser that matches the filter.
     * @param {LtiUserFindUniqueArgs} args - Arguments to find a LtiUser
     * @example
     * // Get one LtiUser
     * const ltiUser = await prisma.ltiUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LtiUserFindUniqueArgs>(args: SelectSubset<T, LtiUserFindUniqueArgs<ExtArgs>>): Prisma__LtiUserClient<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LtiUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LtiUserFindUniqueOrThrowArgs} args - Arguments to find a LtiUser
     * @example
     * // Get one LtiUser
     * const ltiUser = await prisma.ltiUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LtiUserFindUniqueOrThrowArgs>(args: SelectSubset<T, LtiUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LtiUserClient<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiUserFindFirstArgs} args - Arguments to find a LtiUser
     * @example
     * // Get one LtiUser
     * const ltiUser = await prisma.ltiUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LtiUserFindFirstArgs>(args?: SelectSubset<T, LtiUserFindFirstArgs<ExtArgs>>): Prisma__LtiUserClient<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiUserFindFirstOrThrowArgs} args - Arguments to find a LtiUser
     * @example
     * // Get one LtiUser
     * const ltiUser = await prisma.ltiUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LtiUserFindFirstOrThrowArgs>(args?: SelectSubset<T, LtiUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__LtiUserClient<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LtiUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LtiUsers
     * const ltiUsers = await prisma.ltiUser.findMany()
     * 
     * // Get first 10 LtiUsers
     * const ltiUsers = await prisma.ltiUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ltiUserWithIdOnly = await prisma.ltiUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LtiUserFindManyArgs>(args?: SelectSubset<T, LtiUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LtiUser.
     * @param {LtiUserCreateArgs} args - Arguments to create a LtiUser.
     * @example
     * // Create one LtiUser
     * const LtiUser = await prisma.ltiUser.create({
     *   data: {
     *     // ... data to create a LtiUser
     *   }
     * })
     * 
     */
    create<T extends LtiUserCreateArgs>(args: SelectSubset<T, LtiUserCreateArgs<ExtArgs>>): Prisma__LtiUserClient<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LtiUsers.
     * @param {LtiUserCreateManyArgs} args - Arguments to create many LtiUsers.
     * @example
     * // Create many LtiUsers
     * const ltiUser = await prisma.ltiUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LtiUserCreateManyArgs>(args?: SelectSubset<T, LtiUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LtiUsers and returns the data saved in the database.
     * @param {LtiUserCreateManyAndReturnArgs} args - Arguments to create many LtiUsers.
     * @example
     * // Create many LtiUsers
     * const ltiUser = await prisma.ltiUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LtiUsers and only return the `id`
     * const ltiUserWithIdOnly = await prisma.ltiUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LtiUserCreateManyAndReturnArgs>(args?: SelectSubset<T, LtiUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LtiUser.
     * @param {LtiUserDeleteArgs} args - Arguments to delete one LtiUser.
     * @example
     * // Delete one LtiUser
     * const LtiUser = await prisma.ltiUser.delete({
     *   where: {
     *     // ... filter to delete one LtiUser
     *   }
     * })
     * 
     */
    delete<T extends LtiUserDeleteArgs>(args: SelectSubset<T, LtiUserDeleteArgs<ExtArgs>>): Prisma__LtiUserClient<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LtiUser.
     * @param {LtiUserUpdateArgs} args - Arguments to update one LtiUser.
     * @example
     * // Update one LtiUser
     * const ltiUser = await prisma.ltiUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LtiUserUpdateArgs>(args: SelectSubset<T, LtiUserUpdateArgs<ExtArgs>>): Prisma__LtiUserClient<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LtiUsers.
     * @param {LtiUserDeleteManyArgs} args - Arguments to filter LtiUsers to delete.
     * @example
     * // Delete a few LtiUsers
     * const { count } = await prisma.ltiUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LtiUserDeleteManyArgs>(args?: SelectSubset<T, LtiUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LtiUsers
     * const ltiUser = await prisma.ltiUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LtiUserUpdateManyArgs>(args: SelectSubset<T, LtiUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiUsers and returns the data updated in the database.
     * @param {LtiUserUpdateManyAndReturnArgs} args - Arguments to update many LtiUsers.
     * @example
     * // Update many LtiUsers
     * const ltiUser = await prisma.ltiUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LtiUsers and only return the `id`
     * const ltiUserWithIdOnly = await prisma.ltiUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends LtiUserUpdateManyAndReturnArgs>(args: SelectSubset<T, LtiUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LtiUser.
     * @param {LtiUserUpsertArgs} args - Arguments to update or create a LtiUser.
     * @example
     * // Update or create a LtiUser
     * const ltiUser = await prisma.ltiUser.upsert({
     *   create: {
     *     // ... data to create a LtiUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LtiUser we want to update
     *   }
     * })
     */
    upsert<T extends LtiUserUpsertArgs>(args: SelectSubset<T, LtiUserUpsertArgs<ExtArgs>>): Prisma__LtiUserClient<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LtiUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiUserCountArgs} args - Arguments to filter LtiUsers to count.
     * @example
     * // Count the number of LtiUsers
     * const count = await prisma.ltiUser.count({
     *   where: {
     *     // ... the filter for the LtiUsers we want to count
     *   }
     * })
    **/
    count<T extends LtiUserCountArgs>(
      args?: Subset<T, LtiUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LtiUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LtiUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LtiUserAggregateArgs>(args: Subset<T, LtiUserAggregateArgs>): Prisma.PrismaPromise<GetLtiUserAggregateType<T>>

    /**
     * Group by LtiUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiUserGroupByArgs} args - Group by arguments.
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
      T extends LtiUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LtiUserGroupByArgs['orderBy'] }
        : { orderBy?: LtiUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LtiUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLtiUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LtiUser model
   */
  readonly fields: LtiUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LtiUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LtiUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends LtiUser$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, LtiUser$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    grades<T extends LtiUser$gradesArgs<ExtArgs> = {}>(args?: Subset<T, LtiUser$gradesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the LtiUser model
   */
  interface LtiUserFieldRefs {
    readonly id: FieldRef<"LtiUser", 'String'>
    readonly sub: FieldRef<"LtiUser", 'String'>
    readonly platformId: FieldRef<"LtiUser", 'String'>
    readonly email: FieldRef<"LtiUser", 'String'>
    readonly name: FieldRef<"LtiUser", 'String'>
    readonly givenName: FieldRef<"LtiUser", 'String'>
    readonly familyName: FieldRef<"LtiUser", 'String'>
    readonly roles: FieldRef<"LtiUser", 'String[]'>
    readonly createdAt: FieldRef<"LtiUser", 'DateTime'>
    readonly updatedAt: FieldRef<"LtiUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LtiUser findUnique
   */
  export type LtiUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiUserInclude<ExtArgs> | null
    /**
     * Filter, which LtiUser to fetch.
     */
    where: LtiUserWhereUniqueInput
  }

  /**
   * LtiUser findUniqueOrThrow
   */
  export type LtiUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiUserInclude<ExtArgs> | null
    /**
     * Filter, which LtiUser to fetch.
     */
    where: LtiUserWhereUniqueInput
  }

  /**
   * LtiUser findFirst
   */
  export type LtiUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiUserInclude<ExtArgs> | null
    /**
     * Filter, which LtiUser to fetch.
     */
    where?: LtiUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiUsers to fetch.
     */
    orderBy?: LtiUserOrderByWithRelationInput | LtiUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiUsers.
     */
    cursor?: LtiUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiUsers.
     */
    distinct?: LtiUserScalarFieldEnum | LtiUserScalarFieldEnum[]
  }

  /**
   * LtiUser findFirstOrThrow
   */
  export type LtiUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiUserInclude<ExtArgs> | null
    /**
     * Filter, which LtiUser to fetch.
     */
    where?: LtiUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiUsers to fetch.
     */
    orderBy?: LtiUserOrderByWithRelationInput | LtiUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiUsers.
     */
    cursor?: LtiUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiUsers.
     */
    distinct?: LtiUserScalarFieldEnum | LtiUserScalarFieldEnum[]
  }

  /**
   * LtiUser findMany
   */
  export type LtiUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiUserInclude<ExtArgs> | null
    /**
     * Filter, which LtiUsers to fetch.
     */
    where?: LtiUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiUsers to fetch.
     */
    orderBy?: LtiUserOrderByWithRelationInput | LtiUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LtiUsers.
     */
    cursor?: LtiUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiUsers.
     */
    skip?: number
    distinct?: LtiUserScalarFieldEnum | LtiUserScalarFieldEnum[]
  }

  /**
   * LtiUser create
   */
  export type LtiUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiUserInclude<ExtArgs> | null
    /**
     * The data needed to create a LtiUser.
     */
    data: XOR<LtiUserCreateInput, LtiUserUncheckedCreateInput>
  }

  /**
   * LtiUser createMany
   */
  export type LtiUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LtiUsers.
     */
    data: LtiUserCreateManyInput | LtiUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LtiUser createManyAndReturn
   */
  export type LtiUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * The data used to create many LtiUsers.
     */
    data: LtiUserCreateManyInput | LtiUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LtiUser update
   */
  export type LtiUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiUserInclude<ExtArgs> | null
    /**
     * The data needed to update a LtiUser.
     */
    data: XOR<LtiUserUpdateInput, LtiUserUncheckedUpdateInput>
    /**
     * Choose, which LtiUser to update.
     */
    where: LtiUserWhereUniqueInput
  }

  /**
   * LtiUser updateMany
   */
  export type LtiUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LtiUsers.
     */
    data: XOR<LtiUserUpdateManyMutationInput, LtiUserUncheckedUpdateManyInput>
    /**
     * Filter which LtiUsers to update
     */
    where?: LtiUserWhereInput
    /**
     * Limit how many LtiUsers to update.
     */
    limit?: number
  }

  /**
   * LtiUser updateManyAndReturn
   */
  export type LtiUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * The data used to update LtiUsers.
     */
    data: XOR<LtiUserUpdateManyMutationInput, LtiUserUncheckedUpdateManyInput>
    /**
     * Filter which LtiUsers to update
     */
    where?: LtiUserWhereInput
    /**
     * Limit how many LtiUsers to update.
     */
    limit?: number
  }

  /**
   * LtiUser upsert
   */
  export type LtiUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiUserInclude<ExtArgs> | null
    /**
     * The filter to search for the LtiUser to update in case it exists.
     */
    where: LtiUserWhereUniqueInput
    /**
     * In case the LtiUser found by the `where` argument doesn't exist, create a new LtiUser with this data.
     */
    create: XOR<LtiUserCreateInput, LtiUserUncheckedCreateInput>
    /**
     * In case the LtiUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LtiUserUpdateInput, LtiUserUncheckedUpdateInput>
  }

  /**
   * LtiUser delete
   */
  export type LtiUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiUserInclude<ExtArgs> | null
    /**
     * Filter which LtiUser to delete.
     */
    where: LtiUserWhereUniqueInput
  }

  /**
   * LtiUser deleteMany
   */
  export type LtiUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiUsers to delete
     */
    where?: LtiUserWhereInput
    /**
     * Limit how many LtiUsers to delete.
     */
    limit?: number
  }

  /**
   * LtiUser.sessions
   */
  export type LtiUser$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
    where?: LtiSessionWhereInput
    orderBy?: LtiSessionOrderByWithRelationInput | LtiSessionOrderByWithRelationInput[]
    cursor?: LtiSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LtiSessionScalarFieldEnum | LtiSessionScalarFieldEnum[]
  }

  /**
   * LtiUser.grades
   */
  export type LtiUser$gradesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
    where?: LtiGradeWhereInput
    orderBy?: LtiGradeOrderByWithRelationInput | LtiGradeOrderByWithRelationInput[]
    cursor?: LtiGradeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LtiGradeScalarFieldEnum | LtiGradeScalarFieldEnum[]
  }

  /**
   * LtiUser without action
   */
  export type LtiUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiUser
     */
    select?: LtiUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiUser
     */
    omit?: LtiUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiUserInclude<ExtArgs> | null
  }


  /**
   * Model LtiSession
   */

  export type AggregateLtiSession = {
    _count: LtiSessionCountAggregateOutputType | null
    _min: LtiSessionMinAggregateOutputType | null
    _max: LtiSessionMaxAggregateOutputType | null
  }

  export type LtiSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    platformId: string | null
    contextId: string | null
    contextLabel: string | null
    contextTitle: string | null
    resourceLinkId: string | null
    resourceLinkTitle: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type LtiSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    platformId: string | null
    contextId: string | null
    contextLabel: string | null
    contextTitle: string | null
    resourceLinkId: string | null
    resourceLinkTitle: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type LtiSessionCountAggregateOutputType = {
    id: number
    userId: number
    platformId: number
    contextId: number
    contextLabel: number
    contextTitle: number
    resourceLinkId: number
    resourceLinkTitle: number
    customParams: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type LtiSessionMinAggregateInputType = {
    id?: true
    userId?: true
    platformId?: true
    contextId?: true
    contextLabel?: true
    contextTitle?: true
    resourceLinkId?: true
    resourceLinkTitle?: true
    expiresAt?: true
    createdAt?: true
  }

  export type LtiSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    platformId?: true
    contextId?: true
    contextLabel?: true
    contextTitle?: true
    resourceLinkId?: true
    resourceLinkTitle?: true
    expiresAt?: true
    createdAt?: true
  }

  export type LtiSessionCountAggregateInputType = {
    id?: true
    userId?: true
    platformId?: true
    contextId?: true
    contextLabel?: true
    contextTitle?: true
    resourceLinkId?: true
    resourceLinkTitle?: true
    customParams?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type LtiSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiSession to aggregate.
     */
    where?: LtiSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiSessions to fetch.
     */
    orderBy?: LtiSessionOrderByWithRelationInput | LtiSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LtiSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LtiSessions
    **/
    _count?: true | LtiSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LtiSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LtiSessionMaxAggregateInputType
  }

  export type GetLtiSessionAggregateType<T extends LtiSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateLtiSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLtiSession[P]>
      : GetScalarType<T[P], AggregateLtiSession[P]>
  }




  export type LtiSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LtiSessionWhereInput
    orderBy?: LtiSessionOrderByWithAggregationInput | LtiSessionOrderByWithAggregationInput[]
    by: LtiSessionScalarFieldEnum[] | LtiSessionScalarFieldEnum
    having?: LtiSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LtiSessionCountAggregateInputType | true
    _min?: LtiSessionMinAggregateInputType
    _max?: LtiSessionMaxAggregateInputType
  }

  export type LtiSessionGroupByOutputType = {
    id: string
    userId: string
    platformId: string
    contextId: string
    contextLabel: string | null
    contextTitle: string | null
    resourceLinkId: string | null
    resourceLinkTitle: string | null
    customParams: JsonValue | null
    expiresAt: Date
    createdAt: Date
    _count: LtiSessionCountAggregateOutputType | null
    _min: LtiSessionMinAggregateOutputType | null
    _max: LtiSessionMaxAggregateOutputType | null
  }

  type GetLtiSessionGroupByPayload<T extends LtiSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LtiSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LtiSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LtiSessionGroupByOutputType[P]>
            : GetScalarType<T[P], LtiSessionGroupByOutputType[P]>
        }
      >
    >


  export type LtiSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platformId?: boolean
    contextId?: boolean
    contextLabel?: boolean
    contextTitle?: boolean
    resourceLinkId?: boolean
    resourceLinkTitle?: boolean
    customParams?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ltiSession"]>

  export type LtiSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platformId?: boolean
    contextId?: boolean
    contextLabel?: boolean
    contextTitle?: boolean
    resourceLinkId?: boolean
    resourceLinkTitle?: boolean
    customParams?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ltiSession"]>

  export type LtiSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    platformId?: boolean
    contextId?: boolean
    contextLabel?: boolean
    contextTitle?: boolean
    resourceLinkId?: boolean
    resourceLinkTitle?: boolean
    customParams?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ltiSession"]>

  export type LtiSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    platformId?: boolean
    contextId?: boolean
    contextLabel?: boolean
    contextTitle?: boolean
    resourceLinkId?: boolean
    resourceLinkTitle?: boolean
    customParams?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type LtiSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "platformId" | "contextId" | "contextLabel" | "contextTitle" | "resourceLinkId" | "resourceLinkTitle" | "customParams" | "expiresAt" | "createdAt", ExtArgs["result"]["ltiSession"]>
  export type LtiSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }
  export type LtiSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }
  export type LtiSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }

  export type $LtiSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LtiSession"
    objects: {
      user: Prisma.$LtiUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      platformId: string
      contextId: string
      contextLabel: string | null
      contextTitle: string | null
      resourceLinkId: string | null
      resourceLinkTitle: string | null
      customParams: Prisma.JsonValue | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["ltiSession"]>
    composites: {}
  }

  type LtiSessionGetPayload<S extends boolean | null | undefined | LtiSessionDefaultArgs> = $Result.GetResult<Prisma.$LtiSessionPayload, S>

  type LtiSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LtiSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LtiSessionCountAggregateInputType | true
    }

  export interface LtiSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LtiSession'], meta: { name: 'LtiSession' } }
    /**
     * Find zero or one LtiSession that matches the filter.
     * @param {LtiSessionFindUniqueArgs} args - Arguments to find a LtiSession
     * @example
     * // Get one LtiSession
     * const ltiSession = await prisma.ltiSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LtiSessionFindUniqueArgs>(args: SelectSubset<T, LtiSessionFindUniqueArgs<ExtArgs>>): Prisma__LtiSessionClient<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LtiSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LtiSessionFindUniqueOrThrowArgs} args - Arguments to find a LtiSession
     * @example
     * // Get one LtiSession
     * const ltiSession = await prisma.ltiSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LtiSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, LtiSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LtiSessionClient<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiSessionFindFirstArgs} args - Arguments to find a LtiSession
     * @example
     * // Get one LtiSession
     * const ltiSession = await prisma.ltiSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LtiSessionFindFirstArgs>(args?: SelectSubset<T, LtiSessionFindFirstArgs<ExtArgs>>): Prisma__LtiSessionClient<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiSessionFindFirstOrThrowArgs} args - Arguments to find a LtiSession
     * @example
     * // Get one LtiSession
     * const ltiSession = await prisma.ltiSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LtiSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, LtiSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__LtiSessionClient<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LtiSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LtiSessions
     * const ltiSessions = await prisma.ltiSession.findMany()
     * 
     * // Get first 10 LtiSessions
     * const ltiSessions = await prisma.ltiSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ltiSessionWithIdOnly = await prisma.ltiSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LtiSessionFindManyArgs>(args?: SelectSubset<T, LtiSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LtiSession.
     * @param {LtiSessionCreateArgs} args - Arguments to create a LtiSession.
     * @example
     * // Create one LtiSession
     * const LtiSession = await prisma.ltiSession.create({
     *   data: {
     *     // ... data to create a LtiSession
     *   }
     * })
     * 
     */
    create<T extends LtiSessionCreateArgs>(args: SelectSubset<T, LtiSessionCreateArgs<ExtArgs>>): Prisma__LtiSessionClient<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LtiSessions.
     * @param {LtiSessionCreateManyArgs} args - Arguments to create many LtiSessions.
     * @example
     * // Create many LtiSessions
     * const ltiSession = await prisma.ltiSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LtiSessionCreateManyArgs>(args?: SelectSubset<T, LtiSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LtiSessions and returns the data saved in the database.
     * @param {LtiSessionCreateManyAndReturnArgs} args - Arguments to create many LtiSessions.
     * @example
     * // Create many LtiSessions
     * const ltiSession = await prisma.ltiSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LtiSessions and only return the `id`
     * const ltiSessionWithIdOnly = await prisma.ltiSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LtiSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, LtiSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LtiSession.
     * @param {LtiSessionDeleteArgs} args - Arguments to delete one LtiSession.
     * @example
     * // Delete one LtiSession
     * const LtiSession = await prisma.ltiSession.delete({
     *   where: {
     *     // ... filter to delete one LtiSession
     *   }
     * })
     * 
     */
    delete<T extends LtiSessionDeleteArgs>(args: SelectSubset<T, LtiSessionDeleteArgs<ExtArgs>>): Prisma__LtiSessionClient<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LtiSession.
     * @param {LtiSessionUpdateArgs} args - Arguments to update one LtiSession.
     * @example
     * // Update one LtiSession
     * const ltiSession = await prisma.ltiSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LtiSessionUpdateArgs>(args: SelectSubset<T, LtiSessionUpdateArgs<ExtArgs>>): Prisma__LtiSessionClient<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LtiSessions.
     * @param {LtiSessionDeleteManyArgs} args - Arguments to filter LtiSessions to delete.
     * @example
     * // Delete a few LtiSessions
     * const { count } = await prisma.ltiSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LtiSessionDeleteManyArgs>(args?: SelectSubset<T, LtiSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LtiSessions
     * const ltiSession = await prisma.ltiSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LtiSessionUpdateManyArgs>(args: SelectSubset<T, LtiSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiSessions and returns the data updated in the database.
     * @param {LtiSessionUpdateManyAndReturnArgs} args - Arguments to update many LtiSessions.
     * @example
     * // Update many LtiSessions
     * const ltiSession = await prisma.ltiSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LtiSessions and only return the `id`
     * const ltiSessionWithIdOnly = await prisma.ltiSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends LtiSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, LtiSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LtiSession.
     * @param {LtiSessionUpsertArgs} args - Arguments to update or create a LtiSession.
     * @example
     * // Update or create a LtiSession
     * const ltiSession = await prisma.ltiSession.upsert({
     *   create: {
     *     // ... data to create a LtiSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LtiSession we want to update
     *   }
     * })
     */
    upsert<T extends LtiSessionUpsertArgs>(args: SelectSubset<T, LtiSessionUpsertArgs<ExtArgs>>): Prisma__LtiSessionClient<$Result.GetResult<Prisma.$LtiSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LtiSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiSessionCountArgs} args - Arguments to filter LtiSessions to count.
     * @example
     * // Count the number of LtiSessions
     * const count = await prisma.ltiSession.count({
     *   where: {
     *     // ... the filter for the LtiSessions we want to count
     *   }
     * })
    **/
    count<T extends LtiSessionCountArgs>(
      args?: Subset<T, LtiSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LtiSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LtiSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LtiSessionAggregateArgs>(args: Subset<T, LtiSessionAggregateArgs>): Prisma.PrismaPromise<GetLtiSessionAggregateType<T>>

    /**
     * Group by LtiSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiSessionGroupByArgs} args - Group by arguments.
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
      T extends LtiSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LtiSessionGroupByArgs['orderBy'] }
        : { orderBy?: LtiSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LtiSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLtiSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LtiSession model
   */
  readonly fields: LtiSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LtiSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LtiSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends LtiUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LtiUserDefaultArgs<ExtArgs>>): Prisma__LtiUserClient<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LtiSession model
   */
  interface LtiSessionFieldRefs {
    readonly id: FieldRef<"LtiSession", 'String'>
    readonly userId: FieldRef<"LtiSession", 'String'>
    readonly platformId: FieldRef<"LtiSession", 'String'>
    readonly contextId: FieldRef<"LtiSession", 'String'>
    readonly contextLabel: FieldRef<"LtiSession", 'String'>
    readonly contextTitle: FieldRef<"LtiSession", 'String'>
    readonly resourceLinkId: FieldRef<"LtiSession", 'String'>
    readonly resourceLinkTitle: FieldRef<"LtiSession", 'String'>
    readonly customParams: FieldRef<"LtiSession", 'Json'>
    readonly expiresAt: FieldRef<"LtiSession", 'DateTime'>
    readonly createdAt: FieldRef<"LtiSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LtiSession findUnique
   */
  export type LtiSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
    /**
     * Filter, which LtiSession to fetch.
     */
    where: LtiSessionWhereUniqueInput
  }

  /**
   * LtiSession findUniqueOrThrow
   */
  export type LtiSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
    /**
     * Filter, which LtiSession to fetch.
     */
    where: LtiSessionWhereUniqueInput
  }

  /**
   * LtiSession findFirst
   */
  export type LtiSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
    /**
     * Filter, which LtiSession to fetch.
     */
    where?: LtiSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiSessions to fetch.
     */
    orderBy?: LtiSessionOrderByWithRelationInput | LtiSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiSessions.
     */
    cursor?: LtiSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiSessions.
     */
    distinct?: LtiSessionScalarFieldEnum | LtiSessionScalarFieldEnum[]
  }

  /**
   * LtiSession findFirstOrThrow
   */
  export type LtiSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
    /**
     * Filter, which LtiSession to fetch.
     */
    where?: LtiSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiSessions to fetch.
     */
    orderBy?: LtiSessionOrderByWithRelationInput | LtiSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiSessions.
     */
    cursor?: LtiSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiSessions.
     */
    distinct?: LtiSessionScalarFieldEnum | LtiSessionScalarFieldEnum[]
  }

  /**
   * LtiSession findMany
   */
  export type LtiSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
    /**
     * Filter, which LtiSessions to fetch.
     */
    where?: LtiSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiSessions to fetch.
     */
    orderBy?: LtiSessionOrderByWithRelationInput | LtiSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LtiSessions.
     */
    cursor?: LtiSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiSessions.
     */
    skip?: number
    distinct?: LtiSessionScalarFieldEnum | LtiSessionScalarFieldEnum[]
  }

  /**
   * LtiSession create
   */
  export type LtiSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a LtiSession.
     */
    data: XOR<LtiSessionCreateInput, LtiSessionUncheckedCreateInput>
  }

  /**
   * LtiSession createMany
   */
  export type LtiSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LtiSessions.
     */
    data: LtiSessionCreateManyInput | LtiSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LtiSession createManyAndReturn
   */
  export type LtiSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * The data used to create many LtiSessions.
     */
    data: LtiSessionCreateManyInput | LtiSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LtiSession update
   */
  export type LtiSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a LtiSession.
     */
    data: XOR<LtiSessionUpdateInput, LtiSessionUncheckedUpdateInput>
    /**
     * Choose, which LtiSession to update.
     */
    where: LtiSessionWhereUniqueInput
  }

  /**
   * LtiSession updateMany
   */
  export type LtiSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LtiSessions.
     */
    data: XOR<LtiSessionUpdateManyMutationInput, LtiSessionUncheckedUpdateManyInput>
    /**
     * Filter which LtiSessions to update
     */
    where?: LtiSessionWhereInput
    /**
     * Limit how many LtiSessions to update.
     */
    limit?: number
  }

  /**
   * LtiSession updateManyAndReturn
   */
  export type LtiSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * The data used to update LtiSessions.
     */
    data: XOR<LtiSessionUpdateManyMutationInput, LtiSessionUncheckedUpdateManyInput>
    /**
     * Filter which LtiSessions to update
     */
    where?: LtiSessionWhereInput
    /**
     * Limit how many LtiSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LtiSession upsert
   */
  export type LtiSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the LtiSession to update in case it exists.
     */
    where: LtiSessionWhereUniqueInput
    /**
     * In case the LtiSession found by the `where` argument doesn't exist, create a new LtiSession with this data.
     */
    create: XOR<LtiSessionCreateInput, LtiSessionUncheckedCreateInput>
    /**
     * In case the LtiSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LtiSessionUpdateInput, LtiSessionUncheckedUpdateInput>
  }

  /**
   * LtiSession delete
   */
  export type LtiSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
    /**
     * Filter which LtiSession to delete.
     */
    where: LtiSessionWhereUniqueInput
  }

  /**
   * LtiSession deleteMany
   */
  export type LtiSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiSessions to delete
     */
    where?: LtiSessionWhereInput
    /**
     * Limit how many LtiSessions to delete.
     */
    limit?: number
  }

  /**
   * LtiSession without action
   */
  export type LtiSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiSession
     */
    select?: LtiSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiSession
     */
    omit?: LtiSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiSessionInclude<ExtArgs> | null
  }


  /**
   * Model LtiState
   */

  export type AggregateLtiState = {
    _count: LtiStateCountAggregateOutputType | null
    _min: LtiStateMinAggregateOutputType | null
    _max: LtiStateMaxAggregateOutputType | null
  }

  export type LtiStateMinAggregateOutputType = {
    id: string | null
    state: string | null
    nonce: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type LtiStateMaxAggregateOutputType = {
    id: string | null
    state: string | null
    nonce: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type LtiStateCountAggregateOutputType = {
    id: number
    state: number
    nonce: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type LtiStateMinAggregateInputType = {
    id?: true
    state?: true
    nonce?: true
    expiresAt?: true
    createdAt?: true
  }

  export type LtiStateMaxAggregateInputType = {
    id?: true
    state?: true
    nonce?: true
    expiresAt?: true
    createdAt?: true
  }

  export type LtiStateCountAggregateInputType = {
    id?: true
    state?: true
    nonce?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type LtiStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiState to aggregate.
     */
    where?: LtiStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiStates to fetch.
     */
    orderBy?: LtiStateOrderByWithRelationInput | LtiStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LtiStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LtiStates
    **/
    _count?: true | LtiStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LtiStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LtiStateMaxAggregateInputType
  }

  export type GetLtiStateAggregateType<T extends LtiStateAggregateArgs> = {
        [P in keyof T & keyof AggregateLtiState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLtiState[P]>
      : GetScalarType<T[P], AggregateLtiState[P]>
  }




  export type LtiStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LtiStateWhereInput
    orderBy?: LtiStateOrderByWithAggregationInput | LtiStateOrderByWithAggregationInput[]
    by: LtiStateScalarFieldEnum[] | LtiStateScalarFieldEnum
    having?: LtiStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LtiStateCountAggregateInputType | true
    _min?: LtiStateMinAggregateInputType
    _max?: LtiStateMaxAggregateInputType
  }

  export type LtiStateGroupByOutputType = {
    id: string
    state: string
    nonce: string
    expiresAt: Date
    createdAt: Date
    _count: LtiStateCountAggregateOutputType | null
    _min: LtiStateMinAggregateOutputType | null
    _max: LtiStateMaxAggregateOutputType | null
  }

  type GetLtiStateGroupByPayload<T extends LtiStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LtiStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LtiStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LtiStateGroupByOutputType[P]>
            : GetScalarType<T[P], LtiStateGroupByOutputType[P]>
        }
      >
    >


  export type LtiStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    nonce?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ltiState"]>

  export type LtiStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    nonce?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ltiState"]>

  export type LtiStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    state?: boolean
    nonce?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ltiState"]>

  export type LtiStateSelectScalar = {
    id?: boolean
    state?: boolean
    nonce?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type LtiStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "state" | "nonce" | "expiresAt" | "createdAt", ExtArgs["result"]["ltiState"]>

  export type $LtiStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LtiState"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      state: string
      nonce: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["ltiState"]>
    composites: {}
  }

  type LtiStateGetPayload<S extends boolean | null | undefined | LtiStateDefaultArgs> = $Result.GetResult<Prisma.$LtiStatePayload, S>

  type LtiStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LtiStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LtiStateCountAggregateInputType | true
    }

  export interface LtiStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LtiState'], meta: { name: 'LtiState' } }
    /**
     * Find zero or one LtiState that matches the filter.
     * @param {LtiStateFindUniqueArgs} args - Arguments to find a LtiState
     * @example
     * // Get one LtiState
     * const ltiState = await prisma.ltiState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LtiStateFindUniqueArgs>(args: SelectSubset<T, LtiStateFindUniqueArgs<ExtArgs>>): Prisma__LtiStateClient<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LtiState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LtiStateFindUniqueOrThrowArgs} args - Arguments to find a LtiState
     * @example
     * // Get one LtiState
     * const ltiState = await prisma.ltiState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LtiStateFindUniqueOrThrowArgs>(args: SelectSubset<T, LtiStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LtiStateClient<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiStateFindFirstArgs} args - Arguments to find a LtiState
     * @example
     * // Get one LtiState
     * const ltiState = await prisma.ltiState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LtiStateFindFirstArgs>(args?: SelectSubset<T, LtiStateFindFirstArgs<ExtArgs>>): Prisma__LtiStateClient<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiStateFindFirstOrThrowArgs} args - Arguments to find a LtiState
     * @example
     * // Get one LtiState
     * const ltiState = await prisma.ltiState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LtiStateFindFirstOrThrowArgs>(args?: SelectSubset<T, LtiStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__LtiStateClient<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LtiStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LtiStates
     * const ltiStates = await prisma.ltiState.findMany()
     * 
     * // Get first 10 LtiStates
     * const ltiStates = await prisma.ltiState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ltiStateWithIdOnly = await prisma.ltiState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LtiStateFindManyArgs>(args?: SelectSubset<T, LtiStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LtiState.
     * @param {LtiStateCreateArgs} args - Arguments to create a LtiState.
     * @example
     * // Create one LtiState
     * const LtiState = await prisma.ltiState.create({
     *   data: {
     *     // ... data to create a LtiState
     *   }
     * })
     * 
     */
    create<T extends LtiStateCreateArgs>(args: SelectSubset<T, LtiStateCreateArgs<ExtArgs>>): Prisma__LtiStateClient<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LtiStates.
     * @param {LtiStateCreateManyArgs} args - Arguments to create many LtiStates.
     * @example
     * // Create many LtiStates
     * const ltiState = await prisma.ltiState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LtiStateCreateManyArgs>(args?: SelectSubset<T, LtiStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LtiStates and returns the data saved in the database.
     * @param {LtiStateCreateManyAndReturnArgs} args - Arguments to create many LtiStates.
     * @example
     * // Create many LtiStates
     * const ltiState = await prisma.ltiState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LtiStates and only return the `id`
     * const ltiStateWithIdOnly = await prisma.ltiState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LtiStateCreateManyAndReturnArgs>(args?: SelectSubset<T, LtiStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LtiState.
     * @param {LtiStateDeleteArgs} args - Arguments to delete one LtiState.
     * @example
     * // Delete one LtiState
     * const LtiState = await prisma.ltiState.delete({
     *   where: {
     *     // ... filter to delete one LtiState
     *   }
     * })
     * 
     */
    delete<T extends LtiStateDeleteArgs>(args: SelectSubset<T, LtiStateDeleteArgs<ExtArgs>>): Prisma__LtiStateClient<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LtiState.
     * @param {LtiStateUpdateArgs} args - Arguments to update one LtiState.
     * @example
     * // Update one LtiState
     * const ltiState = await prisma.ltiState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LtiStateUpdateArgs>(args: SelectSubset<T, LtiStateUpdateArgs<ExtArgs>>): Prisma__LtiStateClient<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LtiStates.
     * @param {LtiStateDeleteManyArgs} args - Arguments to filter LtiStates to delete.
     * @example
     * // Delete a few LtiStates
     * const { count } = await prisma.ltiState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LtiStateDeleteManyArgs>(args?: SelectSubset<T, LtiStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LtiStates
     * const ltiState = await prisma.ltiState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LtiStateUpdateManyArgs>(args: SelectSubset<T, LtiStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiStates and returns the data updated in the database.
     * @param {LtiStateUpdateManyAndReturnArgs} args - Arguments to update many LtiStates.
     * @example
     * // Update many LtiStates
     * const ltiState = await prisma.ltiState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LtiStates and only return the `id`
     * const ltiStateWithIdOnly = await prisma.ltiState.updateManyAndReturn({
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
    updateManyAndReturn<T extends LtiStateUpdateManyAndReturnArgs>(args: SelectSubset<T, LtiStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LtiState.
     * @param {LtiStateUpsertArgs} args - Arguments to update or create a LtiState.
     * @example
     * // Update or create a LtiState
     * const ltiState = await prisma.ltiState.upsert({
     *   create: {
     *     // ... data to create a LtiState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LtiState we want to update
     *   }
     * })
     */
    upsert<T extends LtiStateUpsertArgs>(args: SelectSubset<T, LtiStateUpsertArgs<ExtArgs>>): Prisma__LtiStateClient<$Result.GetResult<Prisma.$LtiStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LtiStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiStateCountArgs} args - Arguments to filter LtiStates to count.
     * @example
     * // Count the number of LtiStates
     * const count = await prisma.ltiState.count({
     *   where: {
     *     // ... the filter for the LtiStates we want to count
     *   }
     * })
    **/
    count<T extends LtiStateCountArgs>(
      args?: Subset<T, LtiStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LtiStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LtiState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LtiStateAggregateArgs>(args: Subset<T, LtiStateAggregateArgs>): Prisma.PrismaPromise<GetLtiStateAggregateType<T>>

    /**
     * Group by LtiState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiStateGroupByArgs} args - Group by arguments.
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
      T extends LtiStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LtiStateGroupByArgs['orderBy'] }
        : { orderBy?: LtiStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LtiStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLtiStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LtiState model
   */
  readonly fields: LtiStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LtiState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LtiStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LtiState model
   */
  interface LtiStateFieldRefs {
    readonly id: FieldRef<"LtiState", 'String'>
    readonly state: FieldRef<"LtiState", 'String'>
    readonly nonce: FieldRef<"LtiState", 'String'>
    readonly expiresAt: FieldRef<"LtiState", 'DateTime'>
    readonly createdAt: FieldRef<"LtiState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LtiState findUnique
   */
  export type LtiStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * Filter, which LtiState to fetch.
     */
    where: LtiStateWhereUniqueInput
  }

  /**
   * LtiState findUniqueOrThrow
   */
  export type LtiStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * Filter, which LtiState to fetch.
     */
    where: LtiStateWhereUniqueInput
  }

  /**
   * LtiState findFirst
   */
  export type LtiStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * Filter, which LtiState to fetch.
     */
    where?: LtiStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiStates to fetch.
     */
    orderBy?: LtiStateOrderByWithRelationInput | LtiStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiStates.
     */
    cursor?: LtiStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiStates.
     */
    distinct?: LtiStateScalarFieldEnum | LtiStateScalarFieldEnum[]
  }

  /**
   * LtiState findFirstOrThrow
   */
  export type LtiStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * Filter, which LtiState to fetch.
     */
    where?: LtiStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiStates to fetch.
     */
    orderBy?: LtiStateOrderByWithRelationInput | LtiStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiStates.
     */
    cursor?: LtiStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiStates.
     */
    distinct?: LtiStateScalarFieldEnum | LtiStateScalarFieldEnum[]
  }

  /**
   * LtiState findMany
   */
  export type LtiStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * Filter, which LtiStates to fetch.
     */
    where?: LtiStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiStates to fetch.
     */
    orderBy?: LtiStateOrderByWithRelationInput | LtiStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LtiStates.
     */
    cursor?: LtiStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiStates.
     */
    skip?: number
    distinct?: LtiStateScalarFieldEnum | LtiStateScalarFieldEnum[]
  }

  /**
   * LtiState create
   */
  export type LtiStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * The data needed to create a LtiState.
     */
    data: XOR<LtiStateCreateInput, LtiStateUncheckedCreateInput>
  }

  /**
   * LtiState createMany
   */
  export type LtiStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LtiStates.
     */
    data: LtiStateCreateManyInput | LtiStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LtiState createManyAndReturn
   */
  export type LtiStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * The data used to create many LtiStates.
     */
    data: LtiStateCreateManyInput | LtiStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LtiState update
   */
  export type LtiStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * The data needed to update a LtiState.
     */
    data: XOR<LtiStateUpdateInput, LtiStateUncheckedUpdateInput>
    /**
     * Choose, which LtiState to update.
     */
    where: LtiStateWhereUniqueInput
  }

  /**
   * LtiState updateMany
   */
  export type LtiStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LtiStates.
     */
    data: XOR<LtiStateUpdateManyMutationInput, LtiStateUncheckedUpdateManyInput>
    /**
     * Filter which LtiStates to update
     */
    where?: LtiStateWhereInput
    /**
     * Limit how many LtiStates to update.
     */
    limit?: number
  }

  /**
   * LtiState updateManyAndReturn
   */
  export type LtiStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * The data used to update LtiStates.
     */
    data: XOR<LtiStateUpdateManyMutationInput, LtiStateUncheckedUpdateManyInput>
    /**
     * Filter which LtiStates to update
     */
    where?: LtiStateWhereInput
    /**
     * Limit how many LtiStates to update.
     */
    limit?: number
  }

  /**
   * LtiState upsert
   */
  export type LtiStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * The filter to search for the LtiState to update in case it exists.
     */
    where: LtiStateWhereUniqueInput
    /**
     * In case the LtiState found by the `where` argument doesn't exist, create a new LtiState with this data.
     */
    create: XOR<LtiStateCreateInput, LtiStateUncheckedCreateInput>
    /**
     * In case the LtiState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LtiStateUpdateInput, LtiStateUncheckedUpdateInput>
  }

  /**
   * LtiState delete
   */
  export type LtiStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
    /**
     * Filter which LtiState to delete.
     */
    where: LtiStateWhereUniqueInput
  }

  /**
   * LtiState deleteMany
   */
  export type LtiStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiStates to delete
     */
    where?: LtiStateWhereInput
    /**
     * Limit how many LtiStates to delete.
     */
    limit?: number
  }

  /**
   * LtiState without action
   */
  export type LtiStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiState
     */
    select?: LtiStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiState
     */
    omit?: LtiStateOmit<ExtArgs> | null
  }


  /**
   * Model LtiJwks
   */

  export type AggregateLtiJwks = {
    _count: LtiJwksCountAggregateOutputType | null
    _min: LtiJwksMinAggregateOutputType | null
    _max: LtiJwksMaxAggregateOutputType | null
  }

  export type LtiJwksMinAggregateOutputType = {
    id: string | null
    publicKey: string | null
    privateKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LtiJwksMaxAggregateOutputType = {
    id: string | null
    publicKey: string | null
    privateKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LtiJwksCountAggregateOutputType = {
    id: number
    publicKey: number
    privateKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LtiJwksMinAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LtiJwksMaxAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LtiJwksCountAggregateInputType = {
    id?: true
    publicKey?: true
    privateKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LtiJwksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiJwks to aggregate.
     */
    where?: LtiJwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiJwks to fetch.
     */
    orderBy?: LtiJwksOrderByWithRelationInput | LtiJwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LtiJwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiJwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiJwks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LtiJwks
    **/
    _count?: true | LtiJwksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LtiJwksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LtiJwksMaxAggregateInputType
  }

  export type GetLtiJwksAggregateType<T extends LtiJwksAggregateArgs> = {
        [P in keyof T & keyof AggregateLtiJwks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLtiJwks[P]>
      : GetScalarType<T[P], AggregateLtiJwks[P]>
  }




  export type LtiJwksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LtiJwksWhereInput
    orderBy?: LtiJwksOrderByWithAggregationInput | LtiJwksOrderByWithAggregationInput[]
    by: LtiJwksScalarFieldEnum[] | LtiJwksScalarFieldEnum
    having?: LtiJwksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LtiJwksCountAggregateInputType | true
    _min?: LtiJwksMinAggregateInputType
    _max?: LtiJwksMaxAggregateInputType
  }

  export type LtiJwksGroupByOutputType = {
    id: string
    publicKey: string
    privateKey: string
    createdAt: Date
    updatedAt: Date
    _count: LtiJwksCountAggregateOutputType | null
    _min: LtiJwksMinAggregateOutputType | null
    _max: LtiJwksMaxAggregateOutputType | null
  }

  type GetLtiJwksGroupByPayload<T extends LtiJwksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LtiJwksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LtiJwksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LtiJwksGroupByOutputType[P]>
            : GetScalarType<T[P], LtiJwksGroupByOutputType[P]>
        }
      >
    >


  export type LtiJwksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ltiJwks"]>

  export type LtiJwksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ltiJwks"]>

  export type LtiJwksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ltiJwks"]>

  export type LtiJwksSelectScalar = {
    id?: boolean
    publicKey?: boolean
    privateKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LtiJwksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "publicKey" | "privateKey" | "createdAt" | "updatedAt", ExtArgs["result"]["ltiJwks"]>

  export type $LtiJwksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LtiJwks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      publicKey: string
      privateKey: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ltiJwks"]>
    composites: {}
  }

  type LtiJwksGetPayload<S extends boolean | null | undefined | LtiJwksDefaultArgs> = $Result.GetResult<Prisma.$LtiJwksPayload, S>

  type LtiJwksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LtiJwksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LtiJwksCountAggregateInputType | true
    }

  export interface LtiJwksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LtiJwks'], meta: { name: 'LtiJwks' } }
    /**
     * Find zero or one LtiJwks that matches the filter.
     * @param {LtiJwksFindUniqueArgs} args - Arguments to find a LtiJwks
     * @example
     * // Get one LtiJwks
     * const ltiJwks = await prisma.ltiJwks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LtiJwksFindUniqueArgs>(args: SelectSubset<T, LtiJwksFindUniqueArgs<ExtArgs>>): Prisma__LtiJwksClient<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LtiJwks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LtiJwksFindUniqueOrThrowArgs} args - Arguments to find a LtiJwks
     * @example
     * // Get one LtiJwks
     * const ltiJwks = await prisma.ltiJwks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LtiJwksFindUniqueOrThrowArgs>(args: SelectSubset<T, LtiJwksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LtiJwksClient<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiJwks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiJwksFindFirstArgs} args - Arguments to find a LtiJwks
     * @example
     * // Get one LtiJwks
     * const ltiJwks = await prisma.ltiJwks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LtiJwksFindFirstArgs>(args?: SelectSubset<T, LtiJwksFindFirstArgs<ExtArgs>>): Prisma__LtiJwksClient<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiJwks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiJwksFindFirstOrThrowArgs} args - Arguments to find a LtiJwks
     * @example
     * // Get one LtiJwks
     * const ltiJwks = await prisma.ltiJwks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LtiJwksFindFirstOrThrowArgs>(args?: SelectSubset<T, LtiJwksFindFirstOrThrowArgs<ExtArgs>>): Prisma__LtiJwksClient<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LtiJwks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiJwksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LtiJwks
     * const ltiJwks = await prisma.ltiJwks.findMany()
     * 
     * // Get first 10 LtiJwks
     * const ltiJwks = await prisma.ltiJwks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ltiJwksWithIdOnly = await prisma.ltiJwks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LtiJwksFindManyArgs>(args?: SelectSubset<T, LtiJwksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LtiJwks.
     * @param {LtiJwksCreateArgs} args - Arguments to create a LtiJwks.
     * @example
     * // Create one LtiJwks
     * const LtiJwks = await prisma.ltiJwks.create({
     *   data: {
     *     // ... data to create a LtiJwks
     *   }
     * })
     * 
     */
    create<T extends LtiJwksCreateArgs>(args: SelectSubset<T, LtiJwksCreateArgs<ExtArgs>>): Prisma__LtiJwksClient<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LtiJwks.
     * @param {LtiJwksCreateManyArgs} args - Arguments to create many LtiJwks.
     * @example
     * // Create many LtiJwks
     * const ltiJwks = await prisma.ltiJwks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LtiJwksCreateManyArgs>(args?: SelectSubset<T, LtiJwksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LtiJwks and returns the data saved in the database.
     * @param {LtiJwksCreateManyAndReturnArgs} args - Arguments to create many LtiJwks.
     * @example
     * // Create many LtiJwks
     * const ltiJwks = await prisma.ltiJwks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LtiJwks and only return the `id`
     * const ltiJwksWithIdOnly = await prisma.ltiJwks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LtiJwksCreateManyAndReturnArgs>(args?: SelectSubset<T, LtiJwksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LtiJwks.
     * @param {LtiJwksDeleteArgs} args - Arguments to delete one LtiJwks.
     * @example
     * // Delete one LtiJwks
     * const LtiJwks = await prisma.ltiJwks.delete({
     *   where: {
     *     // ... filter to delete one LtiJwks
     *   }
     * })
     * 
     */
    delete<T extends LtiJwksDeleteArgs>(args: SelectSubset<T, LtiJwksDeleteArgs<ExtArgs>>): Prisma__LtiJwksClient<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LtiJwks.
     * @param {LtiJwksUpdateArgs} args - Arguments to update one LtiJwks.
     * @example
     * // Update one LtiJwks
     * const ltiJwks = await prisma.ltiJwks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LtiJwksUpdateArgs>(args: SelectSubset<T, LtiJwksUpdateArgs<ExtArgs>>): Prisma__LtiJwksClient<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LtiJwks.
     * @param {LtiJwksDeleteManyArgs} args - Arguments to filter LtiJwks to delete.
     * @example
     * // Delete a few LtiJwks
     * const { count } = await prisma.ltiJwks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LtiJwksDeleteManyArgs>(args?: SelectSubset<T, LtiJwksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiJwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiJwksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LtiJwks
     * const ltiJwks = await prisma.ltiJwks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LtiJwksUpdateManyArgs>(args: SelectSubset<T, LtiJwksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiJwks and returns the data updated in the database.
     * @param {LtiJwksUpdateManyAndReturnArgs} args - Arguments to update many LtiJwks.
     * @example
     * // Update many LtiJwks
     * const ltiJwks = await prisma.ltiJwks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LtiJwks and only return the `id`
     * const ltiJwksWithIdOnly = await prisma.ltiJwks.updateManyAndReturn({
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
    updateManyAndReturn<T extends LtiJwksUpdateManyAndReturnArgs>(args: SelectSubset<T, LtiJwksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LtiJwks.
     * @param {LtiJwksUpsertArgs} args - Arguments to update or create a LtiJwks.
     * @example
     * // Update or create a LtiJwks
     * const ltiJwks = await prisma.ltiJwks.upsert({
     *   create: {
     *     // ... data to create a LtiJwks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LtiJwks we want to update
     *   }
     * })
     */
    upsert<T extends LtiJwksUpsertArgs>(args: SelectSubset<T, LtiJwksUpsertArgs<ExtArgs>>): Prisma__LtiJwksClient<$Result.GetResult<Prisma.$LtiJwksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LtiJwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiJwksCountArgs} args - Arguments to filter LtiJwks to count.
     * @example
     * // Count the number of LtiJwks
     * const count = await prisma.ltiJwks.count({
     *   where: {
     *     // ... the filter for the LtiJwks we want to count
     *   }
     * })
    **/
    count<T extends LtiJwksCountArgs>(
      args?: Subset<T, LtiJwksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LtiJwksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LtiJwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiJwksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LtiJwksAggregateArgs>(args: Subset<T, LtiJwksAggregateArgs>): Prisma.PrismaPromise<GetLtiJwksAggregateType<T>>

    /**
     * Group by LtiJwks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiJwksGroupByArgs} args - Group by arguments.
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
      T extends LtiJwksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LtiJwksGroupByArgs['orderBy'] }
        : { orderBy?: LtiJwksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LtiJwksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLtiJwksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LtiJwks model
   */
  readonly fields: LtiJwksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LtiJwks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LtiJwksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LtiJwks model
   */
  interface LtiJwksFieldRefs {
    readonly id: FieldRef<"LtiJwks", 'String'>
    readonly publicKey: FieldRef<"LtiJwks", 'String'>
    readonly privateKey: FieldRef<"LtiJwks", 'String'>
    readonly createdAt: FieldRef<"LtiJwks", 'DateTime'>
    readonly updatedAt: FieldRef<"LtiJwks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LtiJwks findUnique
   */
  export type LtiJwksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * Filter, which LtiJwks to fetch.
     */
    where: LtiJwksWhereUniqueInput
  }

  /**
   * LtiJwks findUniqueOrThrow
   */
  export type LtiJwksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * Filter, which LtiJwks to fetch.
     */
    where: LtiJwksWhereUniqueInput
  }

  /**
   * LtiJwks findFirst
   */
  export type LtiJwksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * Filter, which LtiJwks to fetch.
     */
    where?: LtiJwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiJwks to fetch.
     */
    orderBy?: LtiJwksOrderByWithRelationInput | LtiJwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiJwks.
     */
    cursor?: LtiJwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiJwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiJwks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiJwks.
     */
    distinct?: LtiJwksScalarFieldEnum | LtiJwksScalarFieldEnum[]
  }

  /**
   * LtiJwks findFirstOrThrow
   */
  export type LtiJwksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * Filter, which LtiJwks to fetch.
     */
    where?: LtiJwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiJwks to fetch.
     */
    orderBy?: LtiJwksOrderByWithRelationInput | LtiJwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiJwks.
     */
    cursor?: LtiJwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiJwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiJwks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiJwks.
     */
    distinct?: LtiJwksScalarFieldEnum | LtiJwksScalarFieldEnum[]
  }

  /**
   * LtiJwks findMany
   */
  export type LtiJwksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * Filter, which LtiJwks to fetch.
     */
    where?: LtiJwksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiJwks to fetch.
     */
    orderBy?: LtiJwksOrderByWithRelationInput | LtiJwksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LtiJwks.
     */
    cursor?: LtiJwksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiJwks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiJwks.
     */
    skip?: number
    distinct?: LtiJwksScalarFieldEnum | LtiJwksScalarFieldEnum[]
  }

  /**
   * LtiJwks create
   */
  export type LtiJwksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * The data needed to create a LtiJwks.
     */
    data: XOR<LtiJwksCreateInput, LtiJwksUncheckedCreateInput>
  }

  /**
   * LtiJwks createMany
   */
  export type LtiJwksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LtiJwks.
     */
    data: LtiJwksCreateManyInput | LtiJwksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LtiJwks createManyAndReturn
   */
  export type LtiJwksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * The data used to create many LtiJwks.
     */
    data: LtiJwksCreateManyInput | LtiJwksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LtiJwks update
   */
  export type LtiJwksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * The data needed to update a LtiJwks.
     */
    data: XOR<LtiJwksUpdateInput, LtiJwksUncheckedUpdateInput>
    /**
     * Choose, which LtiJwks to update.
     */
    where: LtiJwksWhereUniqueInput
  }

  /**
   * LtiJwks updateMany
   */
  export type LtiJwksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LtiJwks.
     */
    data: XOR<LtiJwksUpdateManyMutationInput, LtiJwksUncheckedUpdateManyInput>
    /**
     * Filter which LtiJwks to update
     */
    where?: LtiJwksWhereInput
    /**
     * Limit how many LtiJwks to update.
     */
    limit?: number
  }

  /**
   * LtiJwks updateManyAndReturn
   */
  export type LtiJwksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * The data used to update LtiJwks.
     */
    data: XOR<LtiJwksUpdateManyMutationInput, LtiJwksUncheckedUpdateManyInput>
    /**
     * Filter which LtiJwks to update
     */
    where?: LtiJwksWhereInput
    /**
     * Limit how many LtiJwks to update.
     */
    limit?: number
  }

  /**
   * LtiJwks upsert
   */
  export type LtiJwksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * The filter to search for the LtiJwks to update in case it exists.
     */
    where: LtiJwksWhereUniqueInput
    /**
     * In case the LtiJwks found by the `where` argument doesn't exist, create a new LtiJwks with this data.
     */
    create: XOR<LtiJwksCreateInput, LtiJwksUncheckedCreateInput>
    /**
     * In case the LtiJwks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LtiJwksUpdateInput, LtiJwksUncheckedUpdateInput>
  }

  /**
   * LtiJwks delete
   */
  export type LtiJwksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
    /**
     * Filter which LtiJwks to delete.
     */
    where: LtiJwksWhereUniqueInput
  }

  /**
   * LtiJwks deleteMany
   */
  export type LtiJwksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiJwks to delete
     */
    where?: LtiJwksWhereInput
    /**
     * Limit how many LtiJwks to delete.
     */
    limit?: number
  }

  /**
   * LtiJwks without action
   */
  export type LtiJwksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiJwks
     */
    select?: LtiJwksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiJwks
     */
    omit?: LtiJwksOmit<ExtArgs> | null
  }


  /**
   * Model LtiGrade
   */

  export type AggregateLtiGrade = {
    _count: LtiGradeCountAggregateOutputType | null
    _avg: LtiGradeAvgAggregateOutputType | null
    _sum: LtiGradeSumAggregateOutputType | null
    _min: LtiGradeMinAggregateOutputType | null
    _max: LtiGradeMaxAggregateOutputType | null
  }

  export type LtiGradeAvgAggregateOutputType = {
    score: number | null
    scoreMaximum: number | null
  }

  export type LtiGradeSumAggregateOutputType = {
    score: number | null
    scoreMaximum: number | null
  }

  export type LtiGradeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contextId: string | null
    resourceLinkId: string | null
    score: number | null
    scoreMaximum: number | null
    activityProgress: string | null
    gradingProgress: string | null
    timestamp: Date | null
    submitted: boolean | null
    submittedAt: Date | null
    createdAt: Date | null
  }

  export type LtiGradeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contextId: string | null
    resourceLinkId: string | null
    score: number | null
    scoreMaximum: number | null
    activityProgress: string | null
    gradingProgress: string | null
    timestamp: Date | null
    submitted: boolean | null
    submittedAt: Date | null
    createdAt: Date | null
  }

  export type LtiGradeCountAggregateOutputType = {
    id: number
    userId: number
    contextId: number
    resourceLinkId: number
    score: number
    scoreMaximum: number
    activityProgress: number
    gradingProgress: number
    timestamp: number
    submitted: number
    submittedAt: number
    createdAt: number
    _all: number
  }


  export type LtiGradeAvgAggregateInputType = {
    score?: true
    scoreMaximum?: true
  }

  export type LtiGradeSumAggregateInputType = {
    score?: true
    scoreMaximum?: true
  }

  export type LtiGradeMinAggregateInputType = {
    id?: true
    userId?: true
    contextId?: true
    resourceLinkId?: true
    score?: true
    scoreMaximum?: true
    activityProgress?: true
    gradingProgress?: true
    timestamp?: true
    submitted?: true
    submittedAt?: true
    createdAt?: true
  }

  export type LtiGradeMaxAggregateInputType = {
    id?: true
    userId?: true
    contextId?: true
    resourceLinkId?: true
    score?: true
    scoreMaximum?: true
    activityProgress?: true
    gradingProgress?: true
    timestamp?: true
    submitted?: true
    submittedAt?: true
    createdAt?: true
  }

  export type LtiGradeCountAggregateInputType = {
    id?: true
    userId?: true
    contextId?: true
    resourceLinkId?: true
    score?: true
    scoreMaximum?: true
    activityProgress?: true
    gradingProgress?: true
    timestamp?: true
    submitted?: true
    submittedAt?: true
    createdAt?: true
    _all?: true
  }

  export type LtiGradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiGrade to aggregate.
     */
    where?: LtiGradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiGrades to fetch.
     */
    orderBy?: LtiGradeOrderByWithRelationInput | LtiGradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LtiGradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiGrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiGrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LtiGrades
    **/
    _count?: true | LtiGradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LtiGradeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LtiGradeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LtiGradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LtiGradeMaxAggregateInputType
  }

  export type GetLtiGradeAggregateType<T extends LtiGradeAggregateArgs> = {
        [P in keyof T & keyof AggregateLtiGrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLtiGrade[P]>
      : GetScalarType<T[P], AggregateLtiGrade[P]>
  }




  export type LtiGradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LtiGradeWhereInput
    orderBy?: LtiGradeOrderByWithAggregationInput | LtiGradeOrderByWithAggregationInput[]
    by: LtiGradeScalarFieldEnum[] | LtiGradeScalarFieldEnum
    having?: LtiGradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LtiGradeCountAggregateInputType | true
    _avg?: LtiGradeAvgAggregateInputType
    _sum?: LtiGradeSumAggregateInputType
    _min?: LtiGradeMinAggregateInputType
    _max?: LtiGradeMaxAggregateInputType
  }

  export type LtiGradeGroupByOutputType = {
    id: string
    userId: string
    contextId: string
    resourceLinkId: string | null
    score: number
    scoreMaximum: number
    activityProgress: string
    gradingProgress: string
    timestamp: Date
    submitted: boolean
    submittedAt: Date | null
    createdAt: Date
    _count: LtiGradeCountAggregateOutputType | null
    _avg: LtiGradeAvgAggregateOutputType | null
    _sum: LtiGradeSumAggregateOutputType | null
    _min: LtiGradeMinAggregateOutputType | null
    _max: LtiGradeMaxAggregateOutputType | null
  }

  type GetLtiGradeGroupByPayload<T extends LtiGradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LtiGradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LtiGradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LtiGradeGroupByOutputType[P]>
            : GetScalarType<T[P], LtiGradeGroupByOutputType[P]>
        }
      >
    >


  export type LtiGradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contextId?: boolean
    resourceLinkId?: boolean
    score?: boolean
    scoreMaximum?: boolean
    activityProgress?: boolean
    gradingProgress?: boolean
    timestamp?: boolean
    submitted?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ltiGrade"]>

  export type LtiGradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contextId?: boolean
    resourceLinkId?: boolean
    score?: boolean
    scoreMaximum?: boolean
    activityProgress?: boolean
    gradingProgress?: boolean
    timestamp?: boolean
    submitted?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ltiGrade"]>

  export type LtiGradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contextId?: boolean
    resourceLinkId?: boolean
    score?: boolean
    scoreMaximum?: boolean
    activityProgress?: boolean
    gradingProgress?: boolean
    timestamp?: boolean
    submitted?: boolean
    submittedAt?: boolean
    createdAt?: boolean
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ltiGrade"]>

  export type LtiGradeSelectScalar = {
    id?: boolean
    userId?: boolean
    contextId?: boolean
    resourceLinkId?: boolean
    score?: boolean
    scoreMaximum?: boolean
    activityProgress?: boolean
    gradingProgress?: boolean
    timestamp?: boolean
    submitted?: boolean
    submittedAt?: boolean
    createdAt?: boolean
  }

  export type LtiGradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contextId" | "resourceLinkId" | "score" | "scoreMaximum" | "activityProgress" | "gradingProgress" | "timestamp" | "submitted" | "submittedAt" | "createdAt", ExtArgs["result"]["ltiGrade"]>
  export type LtiGradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }
  export type LtiGradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }
  export type LtiGradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LtiUserDefaultArgs<ExtArgs>
  }

  export type $LtiGradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LtiGrade"
    objects: {
      user: Prisma.$LtiUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contextId: string
      resourceLinkId: string | null
      score: number
      scoreMaximum: number
      activityProgress: string
      gradingProgress: string
      timestamp: Date
      submitted: boolean
      submittedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["ltiGrade"]>
    composites: {}
  }

  type LtiGradeGetPayload<S extends boolean | null | undefined | LtiGradeDefaultArgs> = $Result.GetResult<Prisma.$LtiGradePayload, S>

  type LtiGradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LtiGradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LtiGradeCountAggregateInputType | true
    }

  export interface LtiGradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LtiGrade'], meta: { name: 'LtiGrade' } }
    /**
     * Find zero or one LtiGrade that matches the filter.
     * @param {LtiGradeFindUniqueArgs} args - Arguments to find a LtiGrade
     * @example
     * // Get one LtiGrade
     * const ltiGrade = await prisma.ltiGrade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LtiGradeFindUniqueArgs>(args: SelectSubset<T, LtiGradeFindUniqueArgs<ExtArgs>>): Prisma__LtiGradeClient<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LtiGrade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LtiGradeFindUniqueOrThrowArgs} args - Arguments to find a LtiGrade
     * @example
     * // Get one LtiGrade
     * const ltiGrade = await prisma.ltiGrade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LtiGradeFindUniqueOrThrowArgs>(args: SelectSubset<T, LtiGradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LtiGradeClient<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiGrade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiGradeFindFirstArgs} args - Arguments to find a LtiGrade
     * @example
     * // Get one LtiGrade
     * const ltiGrade = await prisma.ltiGrade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LtiGradeFindFirstArgs>(args?: SelectSubset<T, LtiGradeFindFirstArgs<ExtArgs>>): Prisma__LtiGradeClient<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiGrade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiGradeFindFirstOrThrowArgs} args - Arguments to find a LtiGrade
     * @example
     * // Get one LtiGrade
     * const ltiGrade = await prisma.ltiGrade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LtiGradeFindFirstOrThrowArgs>(args?: SelectSubset<T, LtiGradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LtiGradeClient<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LtiGrades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiGradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LtiGrades
     * const ltiGrades = await prisma.ltiGrade.findMany()
     * 
     * // Get first 10 LtiGrades
     * const ltiGrades = await prisma.ltiGrade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ltiGradeWithIdOnly = await prisma.ltiGrade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LtiGradeFindManyArgs>(args?: SelectSubset<T, LtiGradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LtiGrade.
     * @param {LtiGradeCreateArgs} args - Arguments to create a LtiGrade.
     * @example
     * // Create one LtiGrade
     * const LtiGrade = await prisma.ltiGrade.create({
     *   data: {
     *     // ... data to create a LtiGrade
     *   }
     * })
     * 
     */
    create<T extends LtiGradeCreateArgs>(args: SelectSubset<T, LtiGradeCreateArgs<ExtArgs>>): Prisma__LtiGradeClient<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LtiGrades.
     * @param {LtiGradeCreateManyArgs} args - Arguments to create many LtiGrades.
     * @example
     * // Create many LtiGrades
     * const ltiGrade = await prisma.ltiGrade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LtiGradeCreateManyArgs>(args?: SelectSubset<T, LtiGradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LtiGrades and returns the data saved in the database.
     * @param {LtiGradeCreateManyAndReturnArgs} args - Arguments to create many LtiGrades.
     * @example
     * // Create many LtiGrades
     * const ltiGrade = await prisma.ltiGrade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LtiGrades and only return the `id`
     * const ltiGradeWithIdOnly = await prisma.ltiGrade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LtiGradeCreateManyAndReturnArgs>(args?: SelectSubset<T, LtiGradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LtiGrade.
     * @param {LtiGradeDeleteArgs} args - Arguments to delete one LtiGrade.
     * @example
     * // Delete one LtiGrade
     * const LtiGrade = await prisma.ltiGrade.delete({
     *   where: {
     *     // ... filter to delete one LtiGrade
     *   }
     * })
     * 
     */
    delete<T extends LtiGradeDeleteArgs>(args: SelectSubset<T, LtiGradeDeleteArgs<ExtArgs>>): Prisma__LtiGradeClient<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LtiGrade.
     * @param {LtiGradeUpdateArgs} args - Arguments to update one LtiGrade.
     * @example
     * // Update one LtiGrade
     * const ltiGrade = await prisma.ltiGrade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LtiGradeUpdateArgs>(args: SelectSubset<T, LtiGradeUpdateArgs<ExtArgs>>): Prisma__LtiGradeClient<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LtiGrades.
     * @param {LtiGradeDeleteManyArgs} args - Arguments to filter LtiGrades to delete.
     * @example
     * // Delete a few LtiGrades
     * const { count } = await prisma.ltiGrade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LtiGradeDeleteManyArgs>(args?: SelectSubset<T, LtiGradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiGrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiGradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LtiGrades
     * const ltiGrade = await prisma.ltiGrade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LtiGradeUpdateManyArgs>(args: SelectSubset<T, LtiGradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiGrades and returns the data updated in the database.
     * @param {LtiGradeUpdateManyAndReturnArgs} args - Arguments to update many LtiGrades.
     * @example
     * // Update many LtiGrades
     * const ltiGrade = await prisma.ltiGrade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LtiGrades and only return the `id`
     * const ltiGradeWithIdOnly = await prisma.ltiGrade.updateManyAndReturn({
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
    updateManyAndReturn<T extends LtiGradeUpdateManyAndReturnArgs>(args: SelectSubset<T, LtiGradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LtiGrade.
     * @param {LtiGradeUpsertArgs} args - Arguments to update or create a LtiGrade.
     * @example
     * // Update or create a LtiGrade
     * const ltiGrade = await prisma.ltiGrade.upsert({
     *   create: {
     *     // ... data to create a LtiGrade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LtiGrade we want to update
     *   }
     * })
     */
    upsert<T extends LtiGradeUpsertArgs>(args: SelectSubset<T, LtiGradeUpsertArgs<ExtArgs>>): Prisma__LtiGradeClient<$Result.GetResult<Prisma.$LtiGradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LtiGrades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiGradeCountArgs} args - Arguments to filter LtiGrades to count.
     * @example
     * // Count the number of LtiGrades
     * const count = await prisma.ltiGrade.count({
     *   where: {
     *     // ... the filter for the LtiGrades we want to count
     *   }
     * })
    **/
    count<T extends LtiGradeCountArgs>(
      args?: Subset<T, LtiGradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LtiGradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LtiGrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiGradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LtiGradeAggregateArgs>(args: Subset<T, LtiGradeAggregateArgs>): Prisma.PrismaPromise<GetLtiGradeAggregateType<T>>

    /**
     * Group by LtiGrade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiGradeGroupByArgs} args - Group by arguments.
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
      T extends LtiGradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LtiGradeGroupByArgs['orderBy'] }
        : { orderBy?: LtiGradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LtiGradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLtiGradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LtiGrade model
   */
  readonly fields: LtiGradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LtiGrade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LtiGradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends LtiUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LtiUserDefaultArgs<ExtArgs>>): Prisma__LtiUserClient<$Result.GetResult<Prisma.$LtiUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LtiGrade model
   */
  interface LtiGradeFieldRefs {
    readonly id: FieldRef<"LtiGrade", 'String'>
    readonly userId: FieldRef<"LtiGrade", 'String'>
    readonly contextId: FieldRef<"LtiGrade", 'String'>
    readonly resourceLinkId: FieldRef<"LtiGrade", 'String'>
    readonly score: FieldRef<"LtiGrade", 'Float'>
    readonly scoreMaximum: FieldRef<"LtiGrade", 'Float'>
    readonly activityProgress: FieldRef<"LtiGrade", 'String'>
    readonly gradingProgress: FieldRef<"LtiGrade", 'String'>
    readonly timestamp: FieldRef<"LtiGrade", 'DateTime'>
    readonly submitted: FieldRef<"LtiGrade", 'Boolean'>
    readonly submittedAt: FieldRef<"LtiGrade", 'DateTime'>
    readonly createdAt: FieldRef<"LtiGrade", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LtiGrade findUnique
   */
  export type LtiGradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
    /**
     * Filter, which LtiGrade to fetch.
     */
    where: LtiGradeWhereUniqueInput
  }

  /**
   * LtiGrade findUniqueOrThrow
   */
  export type LtiGradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
    /**
     * Filter, which LtiGrade to fetch.
     */
    where: LtiGradeWhereUniqueInput
  }

  /**
   * LtiGrade findFirst
   */
  export type LtiGradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
    /**
     * Filter, which LtiGrade to fetch.
     */
    where?: LtiGradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiGrades to fetch.
     */
    orderBy?: LtiGradeOrderByWithRelationInput | LtiGradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiGrades.
     */
    cursor?: LtiGradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiGrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiGrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiGrades.
     */
    distinct?: LtiGradeScalarFieldEnum | LtiGradeScalarFieldEnum[]
  }

  /**
   * LtiGrade findFirstOrThrow
   */
  export type LtiGradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
    /**
     * Filter, which LtiGrade to fetch.
     */
    where?: LtiGradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiGrades to fetch.
     */
    orderBy?: LtiGradeOrderByWithRelationInput | LtiGradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiGrades.
     */
    cursor?: LtiGradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiGrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiGrades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiGrades.
     */
    distinct?: LtiGradeScalarFieldEnum | LtiGradeScalarFieldEnum[]
  }

  /**
   * LtiGrade findMany
   */
  export type LtiGradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
    /**
     * Filter, which LtiGrades to fetch.
     */
    where?: LtiGradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiGrades to fetch.
     */
    orderBy?: LtiGradeOrderByWithRelationInput | LtiGradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LtiGrades.
     */
    cursor?: LtiGradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiGrades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiGrades.
     */
    skip?: number
    distinct?: LtiGradeScalarFieldEnum | LtiGradeScalarFieldEnum[]
  }

  /**
   * LtiGrade create
   */
  export type LtiGradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
    /**
     * The data needed to create a LtiGrade.
     */
    data: XOR<LtiGradeCreateInput, LtiGradeUncheckedCreateInput>
  }

  /**
   * LtiGrade createMany
   */
  export type LtiGradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LtiGrades.
     */
    data: LtiGradeCreateManyInput | LtiGradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LtiGrade createManyAndReturn
   */
  export type LtiGradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * The data used to create many LtiGrades.
     */
    data: LtiGradeCreateManyInput | LtiGradeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LtiGrade update
   */
  export type LtiGradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
    /**
     * The data needed to update a LtiGrade.
     */
    data: XOR<LtiGradeUpdateInput, LtiGradeUncheckedUpdateInput>
    /**
     * Choose, which LtiGrade to update.
     */
    where: LtiGradeWhereUniqueInput
  }

  /**
   * LtiGrade updateMany
   */
  export type LtiGradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LtiGrades.
     */
    data: XOR<LtiGradeUpdateManyMutationInput, LtiGradeUncheckedUpdateManyInput>
    /**
     * Filter which LtiGrades to update
     */
    where?: LtiGradeWhereInput
    /**
     * Limit how many LtiGrades to update.
     */
    limit?: number
  }

  /**
   * LtiGrade updateManyAndReturn
   */
  export type LtiGradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * The data used to update LtiGrades.
     */
    data: XOR<LtiGradeUpdateManyMutationInput, LtiGradeUncheckedUpdateManyInput>
    /**
     * Filter which LtiGrades to update
     */
    where?: LtiGradeWhereInput
    /**
     * Limit how many LtiGrades to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LtiGrade upsert
   */
  export type LtiGradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
    /**
     * The filter to search for the LtiGrade to update in case it exists.
     */
    where: LtiGradeWhereUniqueInput
    /**
     * In case the LtiGrade found by the `where` argument doesn't exist, create a new LtiGrade with this data.
     */
    create: XOR<LtiGradeCreateInput, LtiGradeUncheckedCreateInput>
    /**
     * In case the LtiGrade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LtiGradeUpdateInput, LtiGradeUncheckedUpdateInput>
  }

  /**
   * LtiGrade delete
   */
  export type LtiGradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
    /**
     * Filter which LtiGrade to delete.
     */
    where: LtiGradeWhereUniqueInput
  }

  /**
   * LtiGrade deleteMany
   */
  export type LtiGradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiGrades to delete
     */
    where?: LtiGradeWhereInput
    /**
     * Limit how many LtiGrades to delete.
     */
    limit?: number
  }

  /**
   * LtiGrade without action
   */
  export type LtiGradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiGrade
     */
    select?: LtiGradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiGrade
     */
    omit?: LtiGradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LtiGradeInclude<ExtArgs> | null
  }


  /**
   * Model LtiLineItem
   */

  export type AggregateLtiLineItem = {
    _count: LtiLineItemCountAggregateOutputType | null
    _avg: LtiLineItemAvgAggregateOutputType | null
    _sum: LtiLineItemSumAggregateOutputType | null
    _min: LtiLineItemMinAggregateOutputType | null
    _max: LtiLineItemMaxAggregateOutputType | null
  }

  export type LtiLineItemAvgAggregateOutputType = {
    scoreMaximum: number | null
  }

  export type LtiLineItemSumAggregateOutputType = {
    scoreMaximum: number | null
  }

  export type LtiLineItemMinAggregateOutputType = {
    id: string | null
    contextId: string | null
    label: string | null
    resourceId: string | null
    resourceLinkId: string | null
    tag: string | null
    scoreMaximum: number | null
    startDateTime: Date | null
    endDateTime: Date | null
    platformUrl: string | null
    createdAt: Date | null
  }

  export type LtiLineItemMaxAggregateOutputType = {
    id: string | null
    contextId: string | null
    label: string | null
    resourceId: string | null
    resourceLinkId: string | null
    tag: string | null
    scoreMaximum: number | null
    startDateTime: Date | null
    endDateTime: Date | null
    platformUrl: string | null
    createdAt: Date | null
  }

  export type LtiLineItemCountAggregateOutputType = {
    id: number
    contextId: number
    label: number
    resourceId: number
    resourceLinkId: number
    tag: number
    scoreMaximum: number
    startDateTime: number
    endDateTime: number
    platformUrl: number
    createdAt: number
    _all: number
  }


  export type LtiLineItemAvgAggregateInputType = {
    scoreMaximum?: true
  }

  export type LtiLineItemSumAggregateInputType = {
    scoreMaximum?: true
  }

  export type LtiLineItemMinAggregateInputType = {
    id?: true
    contextId?: true
    label?: true
    resourceId?: true
    resourceLinkId?: true
    tag?: true
    scoreMaximum?: true
    startDateTime?: true
    endDateTime?: true
    platformUrl?: true
    createdAt?: true
  }

  export type LtiLineItemMaxAggregateInputType = {
    id?: true
    contextId?: true
    label?: true
    resourceId?: true
    resourceLinkId?: true
    tag?: true
    scoreMaximum?: true
    startDateTime?: true
    endDateTime?: true
    platformUrl?: true
    createdAt?: true
  }

  export type LtiLineItemCountAggregateInputType = {
    id?: true
    contextId?: true
    label?: true
    resourceId?: true
    resourceLinkId?: true
    tag?: true
    scoreMaximum?: true
    startDateTime?: true
    endDateTime?: true
    platformUrl?: true
    createdAt?: true
    _all?: true
  }

  export type LtiLineItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiLineItem to aggregate.
     */
    where?: LtiLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiLineItems to fetch.
     */
    orderBy?: LtiLineItemOrderByWithRelationInput | LtiLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LtiLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LtiLineItems
    **/
    _count?: true | LtiLineItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LtiLineItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LtiLineItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LtiLineItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LtiLineItemMaxAggregateInputType
  }

  export type GetLtiLineItemAggregateType<T extends LtiLineItemAggregateArgs> = {
        [P in keyof T & keyof AggregateLtiLineItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLtiLineItem[P]>
      : GetScalarType<T[P], AggregateLtiLineItem[P]>
  }




  export type LtiLineItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LtiLineItemWhereInput
    orderBy?: LtiLineItemOrderByWithAggregationInput | LtiLineItemOrderByWithAggregationInput[]
    by: LtiLineItemScalarFieldEnum[] | LtiLineItemScalarFieldEnum
    having?: LtiLineItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LtiLineItemCountAggregateInputType | true
    _avg?: LtiLineItemAvgAggregateInputType
    _sum?: LtiLineItemSumAggregateInputType
    _min?: LtiLineItemMinAggregateInputType
    _max?: LtiLineItemMaxAggregateInputType
  }

  export type LtiLineItemGroupByOutputType = {
    id: string
    contextId: string
    label: string
    resourceId: string | null
    resourceLinkId: string | null
    tag: string | null
    scoreMaximum: number
    startDateTime: Date | null
    endDateTime: Date | null
    platformUrl: string | null
    createdAt: Date
    _count: LtiLineItemCountAggregateOutputType | null
    _avg: LtiLineItemAvgAggregateOutputType | null
    _sum: LtiLineItemSumAggregateOutputType | null
    _min: LtiLineItemMinAggregateOutputType | null
    _max: LtiLineItemMaxAggregateOutputType | null
  }

  type GetLtiLineItemGroupByPayload<T extends LtiLineItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LtiLineItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LtiLineItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LtiLineItemGroupByOutputType[P]>
            : GetScalarType<T[P], LtiLineItemGroupByOutputType[P]>
        }
      >
    >


  export type LtiLineItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contextId?: boolean
    label?: boolean
    resourceId?: boolean
    resourceLinkId?: boolean
    tag?: boolean
    scoreMaximum?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    platformUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ltiLineItem"]>

  export type LtiLineItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contextId?: boolean
    label?: boolean
    resourceId?: boolean
    resourceLinkId?: boolean
    tag?: boolean
    scoreMaximum?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    platformUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ltiLineItem"]>

  export type LtiLineItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contextId?: boolean
    label?: boolean
    resourceId?: boolean
    resourceLinkId?: boolean
    tag?: boolean
    scoreMaximum?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    platformUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ltiLineItem"]>

  export type LtiLineItemSelectScalar = {
    id?: boolean
    contextId?: boolean
    label?: boolean
    resourceId?: boolean
    resourceLinkId?: boolean
    tag?: boolean
    scoreMaximum?: boolean
    startDateTime?: boolean
    endDateTime?: boolean
    platformUrl?: boolean
    createdAt?: boolean
  }

  export type LtiLineItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contextId" | "label" | "resourceId" | "resourceLinkId" | "tag" | "scoreMaximum" | "startDateTime" | "endDateTime" | "platformUrl" | "createdAt", ExtArgs["result"]["ltiLineItem"]>

  export type $LtiLineItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LtiLineItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contextId: string
      label: string
      resourceId: string | null
      resourceLinkId: string | null
      tag: string | null
      scoreMaximum: number
      startDateTime: Date | null
      endDateTime: Date | null
      platformUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["ltiLineItem"]>
    composites: {}
  }

  type LtiLineItemGetPayload<S extends boolean | null | undefined | LtiLineItemDefaultArgs> = $Result.GetResult<Prisma.$LtiLineItemPayload, S>

  type LtiLineItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LtiLineItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LtiLineItemCountAggregateInputType | true
    }

  export interface LtiLineItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LtiLineItem'], meta: { name: 'LtiLineItem' } }
    /**
     * Find zero or one LtiLineItem that matches the filter.
     * @param {LtiLineItemFindUniqueArgs} args - Arguments to find a LtiLineItem
     * @example
     * // Get one LtiLineItem
     * const ltiLineItem = await prisma.ltiLineItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LtiLineItemFindUniqueArgs>(args: SelectSubset<T, LtiLineItemFindUniqueArgs<ExtArgs>>): Prisma__LtiLineItemClient<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LtiLineItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LtiLineItemFindUniqueOrThrowArgs} args - Arguments to find a LtiLineItem
     * @example
     * // Get one LtiLineItem
     * const ltiLineItem = await prisma.ltiLineItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LtiLineItemFindUniqueOrThrowArgs>(args: SelectSubset<T, LtiLineItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LtiLineItemClient<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiLineItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiLineItemFindFirstArgs} args - Arguments to find a LtiLineItem
     * @example
     * // Get one LtiLineItem
     * const ltiLineItem = await prisma.ltiLineItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LtiLineItemFindFirstArgs>(args?: SelectSubset<T, LtiLineItemFindFirstArgs<ExtArgs>>): Prisma__LtiLineItemClient<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LtiLineItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiLineItemFindFirstOrThrowArgs} args - Arguments to find a LtiLineItem
     * @example
     * // Get one LtiLineItem
     * const ltiLineItem = await prisma.ltiLineItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LtiLineItemFindFirstOrThrowArgs>(args?: SelectSubset<T, LtiLineItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__LtiLineItemClient<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LtiLineItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiLineItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LtiLineItems
     * const ltiLineItems = await prisma.ltiLineItem.findMany()
     * 
     * // Get first 10 LtiLineItems
     * const ltiLineItems = await prisma.ltiLineItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ltiLineItemWithIdOnly = await prisma.ltiLineItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LtiLineItemFindManyArgs>(args?: SelectSubset<T, LtiLineItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LtiLineItem.
     * @param {LtiLineItemCreateArgs} args - Arguments to create a LtiLineItem.
     * @example
     * // Create one LtiLineItem
     * const LtiLineItem = await prisma.ltiLineItem.create({
     *   data: {
     *     // ... data to create a LtiLineItem
     *   }
     * })
     * 
     */
    create<T extends LtiLineItemCreateArgs>(args: SelectSubset<T, LtiLineItemCreateArgs<ExtArgs>>): Prisma__LtiLineItemClient<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LtiLineItems.
     * @param {LtiLineItemCreateManyArgs} args - Arguments to create many LtiLineItems.
     * @example
     * // Create many LtiLineItems
     * const ltiLineItem = await prisma.ltiLineItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LtiLineItemCreateManyArgs>(args?: SelectSubset<T, LtiLineItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LtiLineItems and returns the data saved in the database.
     * @param {LtiLineItemCreateManyAndReturnArgs} args - Arguments to create many LtiLineItems.
     * @example
     * // Create many LtiLineItems
     * const ltiLineItem = await prisma.ltiLineItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LtiLineItems and only return the `id`
     * const ltiLineItemWithIdOnly = await prisma.ltiLineItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LtiLineItemCreateManyAndReturnArgs>(args?: SelectSubset<T, LtiLineItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LtiLineItem.
     * @param {LtiLineItemDeleteArgs} args - Arguments to delete one LtiLineItem.
     * @example
     * // Delete one LtiLineItem
     * const LtiLineItem = await prisma.ltiLineItem.delete({
     *   where: {
     *     // ... filter to delete one LtiLineItem
     *   }
     * })
     * 
     */
    delete<T extends LtiLineItemDeleteArgs>(args: SelectSubset<T, LtiLineItemDeleteArgs<ExtArgs>>): Prisma__LtiLineItemClient<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LtiLineItem.
     * @param {LtiLineItemUpdateArgs} args - Arguments to update one LtiLineItem.
     * @example
     * // Update one LtiLineItem
     * const ltiLineItem = await prisma.ltiLineItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LtiLineItemUpdateArgs>(args: SelectSubset<T, LtiLineItemUpdateArgs<ExtArgs>>): Prisma__LtiLineItemClient<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LtiLineItems.
     * @param {LtiLineItemDeleteManyArgs} args - Arguments to filter LtiLineItems to delete.
     * @example
     * // Delete a few LtiLineItems
     * const { count } = await prisma.ltiLineItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LtiLineItemDeleteManyArgs>(args?: SelectSubset<T, LtiLineItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiLineItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LtiLineItems
     * const ltiLineItem = await prisma.ltiLineItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LtiLineItemUpdateManyArgs>(args: SelectSubset<T, LtiLineItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LtiLineItems and returns the data updated in the database.
     * @param {LtiLineItemUpdateManyAndReturnArgs} args - Arguments to update many LtiLineItems.
     * @example
     * // Update many LtiLineItems
     * const ltiLineItem = await prisma.ltiLineItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LtiLineItems and only return the `id`
     * const ltiLineItemWithIdOnly = await prisma.ltiLineItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends LtiLineItemUpdateManyAndReturnArgs>(args: SelectSubset<T, LtiLineItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LtiLineItem.
     * @param {LtiLineItemUpsertArgs} args - Arguments to update or create a LtiLineItem.
     * @example
     * // Update or create a LtiLineItem
     * const ltiLineItem = await prisma.ltiLineItem.upsert({
     *   create: {
     *     // ... data to create a LtiLineItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LtiLineItem we want to update
     *   }
     * })
     */
    upsert<T extends LtiLineItemUpsertArgs>(args: SelectSubset<T, LtiLineItemUpsertArgs<ExtArgs>>): Prisma__LtiLineItemClient<$Result.GetResult<Prisma.$LtiLineItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LtiLineItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiLineItemCountArgs} args - Arguments to filter LtiLineItems to count.
     * @example
     * // Count the number of LtiLineItems
     * const count = await prisma.ltiLineItem.count({
     *   where: {
     *     // ... the filter for the LtiLineItems we want to count
     *   }
     * })
    **/
    count<T extends LtiLineItemCountArgs>(
      args?: Subset<T, LtiLineItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LtiLineItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LtiLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiLineItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LtiLineItemAggregateArgs>(args: Subset<T, LtiLineItemAggregateArgs>): Prisma.PrismaPromise<GetLtiLineItemAggregateType<T>>

    /**
     * Group by LtiLineItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LtiLineItemGroupByArgs} args - Group by arguments.
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
      T extends LtiLineItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LtiLineItemGroupByArgs['orderBy'] }
        : { orderBy?: LtiLineItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LtiLineItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLtiLineItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LtiLineItem model
   */
  readonly fields: LtiLineItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LtiLineItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LtiLineItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the LtiLineItem model
   */
  interface LtiLineItemFieldRefs {
    readonly id: FieldRef<"LtiLineItem", 'String'>
    readonly contextId: FieldRef<"LtiLineItem", 'String'>
    readonly label: FieldRef<"LtiLineItem", 'String'>
    readonly resourceId: FieldRef<"LtiLineItem", 'String'>
    readonly resourceLinkId: FieldRef<"LtiLineItem", 'String'>
    readonly tag: FieldRef<"LtiLineItem", 'String'>
    readonly scoreMaximum: FieldRef<"LtiLineItem", 'Float'>
    readonly startDateTime: FieldRef<"LtiLineItem", 'DateTime'>
    readonly endDateTime: FieldRef<"LtiLineItem", 'DateTime'>
    readonly platformUrl: FieldRef<"LtiLineItem", 'String'>
    readonly createdAt: FieldRef<"LtiLineItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LtiLineItem findUnique
   */
  export type LtiLineItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * Filter, which LtiLineItem to fetch.
     */
    where: LtiLineItemWhereUniqueInput
  }

  /**
   * LtiLineItem findUniqueOrThrow
   */
  export type LtiLineItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * Filter, which LtiLineItem to fetch.
     */
    where: LtiLineItemWhereUniqueInput
  }

  /**
   * LtiLineItem findFirst
   */
  export type LtiLineItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * Filter, which LtiLineItem to fetch.
     */
    where?: LtiLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiLineItems to fetch.
     */
    orderBy?: LtiLineItemOrderByWithRelationInput | LtiLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiLineItems.
     */
    cursor?: LtiLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiLineItems.
     */
    distinct?: LtiLineItemScalarFieldEnum | LtiLineItemScalarFieldEnum[]
  }

  /**
   * LtiLineItem findFirstOrThrow
   */
  export type LtiLineItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * Filter, which LtiLineItem to fetch.
     */
    where?: LtiLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiLineItems to fetch.
     */
    orderBy?: LtiLineItemOrderByWithRelationInput | LtiLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LtiLineItems.
     */
    cursor?: LtiLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiLineItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LtiLineItems.
     */
    distinct?: LtiLineItemScalarFieldEnum | LtiLineItemScalarFieldEnum[]
  }

  /**
   * LtiLineItem findMany
   */
  export type LtiLineItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * Filter, which LtiLineItems to fetch.
     */
    where?: LtiLineItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LtiLineItems to fetch.
     */
    orderBy?: LtiLineItemOrderByWithRelationInput | LtiLineItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LtiLineItems.
     */
    cursor?: LtiLineItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LtiLineItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LtiLineItems.
     */
    skip?: number
    distinct?: LtiLineItemScalarFieldEnum | LtiLineItemScalarFieldEnum[]
  }

  /**
   * LtiLineItem create
   */
  export type LtiLineItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * The data needed to create a LtiLineItem.
     */
    data: XOR<LtiLineItemCreateInput, LtiLineItemUncheckedCreateInput>
  }

  /**
   * LtiLineItem createMany
   */
  export type LtiLineItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LtiLineItems.
     */
    data: LtiLineItemCreateManyInput | LtiLineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LtiLineItem createManyAndReturn
   */
  export type LtiLineItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * The data used to create many LtiLineItems.
     */
    data: LtiLineItemCreateManyInput | LtiLineItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LtiLineItem update
   */
  export type LtiLineItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * The data needed to update a LtiLineItem.
     */
    data: XOR<LtiLineItemUpdateInput, LtiLineItemUncheckedUpdateInput>
    /**
     * Choose, which LtiLineItem to update.
     */
    where: LtiLineItemWhereUniqueInput
  }

  /**
   * LtiLineItem updateMany
   */
  export type LtiLineItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LtiLineItems.
     */
    data: XOR<LtiLineItemUpdateManyMutationInput, LtiLineItemUncheckedUpdateManyInput>
    /**
     * Filter which LtiLineItems to update
     */
    where?: LtiLineItemWhereInput
    /**
     * Limit how many LtiLineItems to update.
     */
    limit?: number
  }

  /**
   * LtiLineItem updateManyAndReturn
   */
  export type LtiLineItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * The data used to update LtiLineItems.
     */
    data: XOR<LtiLineItemUpdateManyMutationInput, LtiLineItemUncheckedUpdateManyInput>
    /**
     * Filter which LtiLineItems to update
     */
    where?: LtiLineItemWhereInput
    /**
     * Limit how many LtiLineItems to update.
     */
    limit?: number
  }

  /**
   * LtiLineItem upsert
   */
  export type LtiLineItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * The filter to search for the LtiLineItem to update in case it exists.
     */
    where: LtiLineItemWhereUniqueInput
    /**
     * In case the LtiLineItem found by the `where` argument doesn't exist, create a new LtiLineItem with this data.
     */
    create: XOR<LtiLineItemCreateInput, LtiLineItemUncheckedCreateInput>
    /**
     * In case the LtiLineItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LtiLineItemUpdateInput, LtiLineItemUncheckedUpdateInput>
  }

  /**
   * LtiLineItem delete
   */
  export type LtiLineItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
    /**
     * Filter which LtiLineItem to delete.
     */
    where: LtiLineItemWhereUniqueInput
  }

  /**
   * LtiLineItem deleteMany
   */
  export type LtiLineItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LtiLineItems to delete
     */
    where?: LtiLineItemWhereInput
    /**
     * Limit how many LtiLineItems to delete.
     */
    limit?: number
  }

  /**
   * LtiLineItem without action
   */
  export type LtiLineItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LtiLineItem
     */
    select?: LtiLineItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LtiLineItem
     */
    omit?: LtiLineItemOmit<ExtArgs> | null
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


  export const LtiUserScalarFieldEnum: {
    id: 'id',
    sub: 'sub',
    platformId: 'platformId',
    email: 'email',
    name: 'name',
    givenName: 'givenName',
    familyName: 'familyName',
    roles: 'roles',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LtiUserScalarFieldEnum = (typeof LtiUserScalarFieldEnum)[keyof typeof LtiUserScalarFieldEnum]


  export const LtiSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    platformId: 'platformId',
    contextId: 'contextId',
    contextLabel: 'contextLabel',
    contextTitle: 'contextTitle',
    resourceLinkId: 'resourceLinkId',
    resourceLinkTitle: 'resourceLinkTitle',
    customParams: 'customParams',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type LtiSessionScalarFieldEnum = (typeof LtiSessionScalarFieldEnum)[keyof typeof LtiSessionScalarFieldEnum]


  export const LtiStateScalarFieldEnum: {
    id: 'id',
    state: 'state',
    nonce: 'nonce',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type LtiStateScalarFieldEnum = (typeof LtiStateScalarFieldEnum)[keyof typeof LtiStateScalarFieldEnum]


  export const LtiJwksScalarFieldEnum: {
    id: 'id',
    publicKey: 'publicKey',
    privateKey: 'privateKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LtiJwksScalarFieldEnum = (typeof LtiJwksScalarFieldEnum)[keyof typeof LtiJwksScalarFieldEnum]


  export const LtiGradeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contextId: 'contextId',
    resourceLinkId: 'resourceLinkId',
    score: 'score',
    scoreMaximum: 'scoreMaximum',
    activityProgress: 'activityProgress',
    gradingProgress: 'gradingProgress',
    timestamp: 'timestamp',
    submitted: 'submitted',
    submittedAt: 'submittedAt',
    createdAt: 'createdAt'
  };

  export type LtiGradeScalarFieldEnum = (typeof LtiGradeScalarFieldEnum)[keyof typeof LtiGradeScalarFieldEnum]


  export const LtiLineItemScalarFieldEnum: {
    id: 'id',
    contextId: 'contextId',
    label: 'label',
    resourceId: 'resourceId',
    resourceLinkId: 'resourceLinkId',
    tag: 'tag',
    scoreMaximum: 'scoreMaximum',
    startDateTime: 'startDateTime',
    endDateTime: 'endDateTime',
    platformUrl: 'platformUrl',
    createdAt: 'createdAt'
  };

  export type LtiLineItemScalarFieldEnum = (typeof LtiLineItemScalarFieldEnum)[keyof typeof LtiLineItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type LtiUserWhereInput = {
    AND?: LtiUserWhereInput | LtiUserWhereInput[]
    OR?: LtiUserWhereInput[]
    NOT?: LtiUserWhereInput | LtiUserWhereInput[]
    id?: StringFilter<"LtiUser"> | string
    sub?: StringFilter<"LtiUser"> | string
    platformId?: StringFilter<"LtiUser"> | string
    email?: StringNullableFilter<"LtiUser"> | string | null
    name?: StringNullableFilter<"LtiUser"> | string | null
    givenName?: StringNullableFilter<"LtiUser"> | string | null
    familyName?: StringNullableFilter<"LtiUser"> | string | null
    roles?: StringNullableListFilter<"LtiUser">
    createdAt?: DateTimeFilter<"LtiUser"> | Date | string
    updatedAt?: DateTimeFilter<"LtiUser"> | Date | string
    sessions?: LtiSessionListRelationFilter
    grades?: LtiGradeListRelationFilter
  }

  export type LtiUserOrderByWithRelationInput = {
    id?: SortOrder
    sub?: SortOrder
    platformId?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    givenName?: SortOrderInput | SortOrder
    familyName?: SortOrderInput | SortOrder
    roles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: LtiSessionOrderByRelationAggregateInput
    grades?: LtiGradeOrderByRelationAggregateInput
  }

  export type LtiUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sub?: string
    AND?: LtiUserWhereInput | LtiUserWhereInput[]
    OR?: LtiUserWhereInput[]
    NOT?: LtiUserWhereInput | LtiUserWhereInput[]
    platformId?: StringFilter<"LtiUser"> | string
    email?: StringNullableFilter<"LtiUser"> | string | null
    name?: StringNullableFilter<"LtiUser"> | string | null
    givenName?: StringNullableFilter<"LtiUser"> | string | null
    familyName?: StringNullableFilter<"LtiUser"> | string | null
    roles?: StringNullableListFilter<"LtiUser">
    createdAt?: DateTimeFilter<"LtiUser"> | Date | string
    updatedAt?: DateTimeFilter<"LtiUser"> | Date | string
    sessions?: LtiSessionListRelationFilter
    grades?: LtiGradeListRelationFilter
  }, "id" | "sub">

  export type LtiUserOrderByWithAggregationInput = {
    id?: SortOrder
    sub?: SortOrder
    platformId?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    givenName?: SortOrderInput | SortOrder
    familyName?: SortOrderInput | SortOrder
    roles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LtiUserCountOrderByAggregateInput
    _max?: LtiUserMaxOrderByAggregateInput
    _min?: LtiUserMinOrderByAggregateInput
  }

  export type LtiUserScalarWhereWithAggregatesInput = {
    AND?: LtiUserScalarWhereWithAggregatesInput | LtiUserScalarWhereWithAggregatesInput[]
    OR?: LtiUserScalarWhereWithAggregatesInput[]
    NOT?: LtiUserScalarWhereWithAggregatesInput | LtiUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LtiUser"> | string
    sub?: StringWithAggregatesFilter<"LtiUser"> | string
    platformId?: StringWithAggregatesFilter<"LtiUser"> | string
    email?: StringNullableWithAggregatesFilter<"LtiUser"> | string | null
    name?: StringNullableWithAggregatesFilter<"LtiUser"> | string | null
    givenName?: StringNullableWithAggregatesFilter<"LtiUser"> | string | null
    familyName?: StringNullableWithAggregatesFilter<"LtiUser"> | string | null
    roles?: StringNullableListFilter<"LtiUser">
    createdAt?: DateTimeWithAggregatesFilter<"LtiUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LtiUser"> | Date | string
  }

  export type LtiSessionWhereInput = {
    AND?: LtiSessionWhereInput | LtiSessionWhereInput[]
    OR?: LtiSessionWhereInput[]
    NOT?: LtiSessionWhereInput | LtiSessionWhereInput[]
    id?: StringFilter<"LtiSession"> | string
    userId?: StringFilter<"LtiSession"> | string
    platformId?: StringFilter<"LtiSession"> | string
    contextId?: StringFilter<"LtiSession"> | string
    contextLabel?: StringNullableFilter<"LtiSession"> | string | null
    contextTitle?: StringNullableFilter<"LtiSession"> | string | null
    resourceLinkId?: StringNullableFilter<"LtiSession"> | string | null
    resourceLinkTitle?: StringNullableFilter<"LtiSession"> | string | null
    customParams?: JsonNullableFilter<"LtiSession">
    expiresAt?: DateTimeFilter<"LtiSession"> | Date | string
    createdAt?: DateTimeFilter<"LtiSession"> | Date | string
    user?: XOR<LtiUserScalarRelationFilter, LtiUserWhereInput>
  }

  export type LtiSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    platformId?: SortOrder
    contextId?: SortOrder
    contextLabel?: SortOrderInput | SortOrder
    contextTitle?: SortOrderInput | SortOrder
    resourceLinkId?: SortOrderInput | SortOrder
    resourceLinkTitle?: SortOrderInput | SortOrder
    customParams?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: LtiUserOrderByWithRelationInput
  }

  export type LtiSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LtiSessionWhereInput | LtiSessionWhereInput[]
    OR?: LtiSessionWhereInput[]
    NOT?: LtiSessionWhereInput | LtiSessionWhereInput[]
    userId?: StringFilter<"LtiSession"> | string
    platformId?: StringFilter<"LtiSession"> | string
    contextId?: StringFilter<"LtiSession"> | string
    contextLabel?: StringNullableFilter<"LtiSession"> | string | null
    contextTitle?: StringNullableFilter<"LtiSession"> | string | null
    resourceLinkId?: StringNullableFilter<"LtiSession"> | string | null
    resourceLinkTitle?: StringNullableFilter<"LtiSession"> | string | null
    customParams?: JsonNullableFilter<"LtiSession">
    expiresAt?: DateTimeFilter<"LtiSession"> | Date | string
    createdAt?: DateTimeFilter<"LtiSession"> | Date | string
    user?: XOR<LtiUserScalarRelationFilter, LtiUserWhereInput>
  }, "id">

  export type LtiSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    platformId?: SortOrder
    contextId?: SortOrder
    contextLabel?: SortOrderInput | SortOrder
    contextTitle?: SortOrderInput | SortOrder
    resourceLinkId?: SortOrderInput | SortOrder
    resourceLinkTitle?: SortOrderInput | SortOrder
    customParams?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: LtiSessionCountOrderByAggregateInput
    _max?: LtiSessionMaxOrderByAggregateInput
    _min?: LtiSessionMinOrderByAggregateInput
  }

  export type LtiSessionScalarWhereWithAggregatesInput = {
    AND?: LtiSessionScalarWhereWithAggregatesInput | LtiSessionScalarWhereWithAggregatesInput[]
    OR?: LtiSessionScalarWhereWithAggregatesInput[]
    NOT?: LtiSessionScalarWhereWithAggregatesInput | LtiSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LtiSession"> | string
    userId?: StringWithAggregatesFilter<"LtiSession"> | string
    platformId?: StringWithAggregatesFilter<"LtiSession"> | string
    contextId?: StringWithAggregatesFilter<"LtiSession"> | string
    contextLabel?: StringNullableWithAggregatesFilter<"LtiSession"> | string | null
    contextTitle?: StringNullableWithAggregatesFilter<"LtiSession"> | string | null
    resourceLinkId?: StringNullableWithAggregatesFilter<"LtiSession"> | string | null
    resourceLinkTitle?: StringNullableWithAggregatesFilter<"LtiSession"> | string | null
    customParams?: JsonNullableWithAggregatesFilter<"LtiSession">
    expiresAt?: DateTimeWithAggregatesFilter<"LtiSession"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LtiSession"> | Date | string
  }

  export type LtiStateWhereInput = {
    AND?: LtiStateWhereInput | LtiStateWhereInput[]
    OR?: LtiStateWhereInput[]
    NOT?: LtiStateWhereInput | LtiStateWhereInput[]
    id?: StringFilter<"LtiState"> | string
    state?: StringFilter<"LtiState"> | string
    nonce?: StringFilter<"LtiState"> | string
    expiresAt?: DateTimeFilter<"LtiState"> | Date | string
    createdAt?: DateTimeFilter<"LtiState"> | Date | string
  }

  export type LtiStateOrderByWithRelationInput = {
    id?: SortOrder
    state?: SortOrder
    nonce?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    state?: string
    AND?: LtiStateWhereInput | LtiStateWhereInput[]
    OR?: LtiStateWhereInput[]
    NOT?: LtiStateWhereInput | LtiStateWhereInput[]
    nonce?: StringFilter<"LtiState"> | string
    expiresAt?: DateTimeFilter<"LtiState"> | Date | string
    createdAt?: DateTimeFilter<"LtiState"> | Date | string
  }, "id" | "state">

  export type LtiStateOrderByWithAggregationInput = {
    id?: SortOrder
    state?: SortOrder
    nonce?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: LtiStateCountOrderByAggregateInput
    _max?: LtiStateMaxOrderByAggregateInput
    _min?: LtiStateMinOrderByAggregateInput
  }

  export type LtiStateScalarWhereWithAggregatesInput = {
    AND?: LtiStateScalarWhereWithAggregatesInput | LtiStateScalarWhereWithAggregatesInput[]
    OR?: LtiStateScalarWhereWithAggregatesInput[]
    NOT?: LtiStateScalarWhereWithAggregatesInput | LtiStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LtiState"> | string
    state?: StringWithAggregatesFilter<"LtiState"> | string
    nonce?: StringWithAggregatesFilter<"LtiState"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"LtiState"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LtiState"> | Date | string
  }

  export type LtiJwksWhereInput = {
    AND?: LtiJwksWhereInput | LtiJwksWhereInput[]
    OR?: LtiJwksWhereInput[]
    NOT?: LtiJwksWhereInput | LtiJwksWhereInput[]
    id?: StringFilter<"LtiJwks"> | string
    publicKey?: StringFilter<"LtiJwks"> | string
    privateKey?: StringFilter<"LtiJwks"> | string
    createdAt?: DateTimeFilter<"LtiJwks"> | Date | string
    updatedAt?: DateTimeFilter<"LtiJwks"> | Date | string
  }

  export type LtiJwksOrderByWithRelationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LtiJwksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LtiJwksWhereInput | LtiJwksWhereInput[]
    OR?: LtiJwksWhereInput[]
    NOT?: LtiJwksWhereInput | LtiJwksWhereInput[]
    publicKey?: StringFilter<"LtiJwks"> | string
    privateKey?: StringFilter<"LtiJwks"> | string
    createdAt?: DateTimeFilter<"LtiJwks"> | Date | string
    updatedAt?: DateTimeFilter<"LtiJwks"> | Date | string
  }, "id">

  export type LtiJwksOrderByWithAggregationInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LtiJwksCountOrderByAggregateInput
    _max?: LtiJwksMaxOrderByAggregateInput
    _min?: LtiJwksMinOrderByAggregateInput
  }

  export type LtiJwksScalarWhereWithAggregatesInput = {
    AND?: LtiJwksScalarWhereWithAggregatesInput | LtiJwksScalarWhereWithAggregatesInput[]
    OR?: LtiJwksScalarWhereWithAggregatesInput[]
    NOT?: LtiJwksScalarWhereWithAggregatesInput | LtiJwksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LtiJwks"> | string
    publicKey?: StringWithAggregatesFilter<"LtiJwks"> | string
    privateKey?: StringWithAggregatesFilter<"LtiJwks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LtiJwks"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LtiJwks"> | Date | string
  }

  export type LtiGradeWhereInput = {
    AND?: LtiGradeWhereInput | LtiGradeWhereInput[]
    OR?: LtiGradeWhereInput[]
    NOT?: LtiGradeWhereInput | LtiGradeWhereInput[]
    id?: StringFilter<"LtiGrade"> | string
    userId?: StringFilter<"LtiGrade"> | string
    contextId?: StringFilter<"LtiGrade"> | string
    resourceLinkId?: StringNullableFilter<"LtiGrade"> | string | null
    score?: FloatFilter<"LtiGrade"> | number
    scoreMaximum?: FloatFilter<"LtiGrade"> | number
    activityProgress?: StringFilter<"LtiGrade"> | string
    gradingProgress?: StringFilter<"LtiGrade"> | string
    timestamp?: DateTimeFilter<"LtiGrade"> | Date | string
    submitted?: BoolFilter<"LtiGrade"> | boolean
    submittedAt?: DateTimeNullableFilter<"LtiGrade"> | Date | string | null
    createdAt?: DateTimeFilter<"LtiGrade"> | Date | string
    user?: XOR<LtiUserScalarRelationFilter, LtiUserWhereInput>
  }

  export type LtiGradeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contextId?: SortOrder
    resourceLinkId?: SortOrderInput | SortOrder
    score?: SortOrder
    scoreMaximum?: SortOrder
    activityProgress?: SortOrder
    gradingProgress?: SortOrder
    timestamp?: SortOrder
    submitted?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: LtiUserOrderByWithRelationInput
  }

  export type LtiGradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LtiGradeWhereInput | LtiGradeWhereInput[]
    OR?: LtiGradeWhereInput[]
    NOT?: LtiGradeWhereInput | LtiGradeWhereInput[]
    userId?: StringFilter<"LtiGrade"> | string
    contextId?: StringFilter<"LtiGrade"> | string
    resourceLinkId?: StringNullableFilter<"LtiGrade"> | string | null
    score?: FloatFilter<"LtiGrade"> | number
    scoreMaximum?: FloatFilter<"LtiGrade"> | number
    activityProgress?: StringFilter<"LtiGrade"> | string
    gradingProgress?: StringFilter<"LtiGrade"> | string
    timestamp?: DateTimeFilter<"LtiGrade"> | Date | string
    submitted?: BoolFilter<"LtiGrade"> | boolean
    submittedAt?: DateTimeNullableFilter<"LtiGrade"> | Date | string | null
    createdAt?: DateTimeFilter<"LtiGrade"> | Date | string
    user?: XOR<LtiUserScalarRelationFilter, LtiUserWhereInput>
  }, "id">

  export type LtiGradeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contextId?: SortOrder
    resourceLinkId?: SortOrderInput | SortOrder
    score?: SortOrder
    scoreMaximum?: SortOrder
    activityProgress?: SortOrder
    gradingProgress?: SortOrder
    timestamp?: SortOrder
    submitted?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LtiGradeCountOrderByAggregateInput
    _avg?: LtiGradeAvgOrderByAggregateInput
    _max?: LtiGradeMaxOrderByAggregateInput
    _min?: LtiGradeMinOrderByAggregateInput
    _sum?: LtiGradeSumOrderByAggregateInput
  }

  export type LtiGradeScalarWhereWithAggregatesInput = {
    AND?: LtiGradeScalarWhereWithAggregatesInput | LtiGradeScalarWhereWithAggregatesInput[]
    OR?: LtiGradeScalarWhereWithAggregatesInput[]
    NOT?: LtiGradeScalarWhereWithAggregatesInput | LtiGradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LtiGrade"> | string
    userId?: StringWithAggregatesFilter<"LtiGrade"> | string
    contextId?: StringWithAggregatesFilter<"LtiGrade"> | string
    resourceLinkId?: StringNullableWithAggregatesFilter<"LtiGrade"> | string | null
    score?: FloatWithAggregatesFilter<"LtiGrade"> | number
    scoreMaximum?: FloatWithAggregatesFilter<"LtiGrade"> | number
    activityProgress?: StringWithAggregatesFilter<"LtiGrade"> | string
    gradingProgress?: StringWithAggregatesFilter<"LtiGrade"> | string
    timestamp?: DateTimeWithAggregatesFilter<"LtiGrade"> | Date | string
    submitted?: BoolWithAggregatesFilter<"LtiGrade"> | boolean
    submittedAt?: DateTimeNullableWithAggregatesFilter<"LtiGrade"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LtiGrade"> | Date | string
  }

  export type LtiLineItemWhereInput = {
    AND?: LtiLineItemWhereInput | LtiLineItemWhereInput[]
    OR?: LtiLineItemWhereInput[]
    NOT?: LtiLineItemWhereInput | LtiLineItemWhereInput[]
    id?: StringFilter<"LtiLineItem"> | string
    contextId?: StringFilter<"LtiLineItem"> | string
    label?: StringFilter<"LtiLineItem"> | string
    resourceId?: StringNullableFilter<"LtiLineItem"> | string | null
    resourceLinkId?: StringNullableFilter<"LtiLineItem"> | string | null
    tag?: StringNullableFilter<"LtiLineItem"> | string | null
    scoreMaximum?: FloatFilter<"LtiLineItem"> | number
    startDateTime?: DateTimeNullableFilter<"LtiLineItem"> | Date | string | null
    endDateTime?: DateTimeNullableFilter<"LtiLineItem"> | Date | string | null
    platformUrl?: StringNullableFilter<"LtiLineItem"> | string | null
    createdAt?: DateTimeFilter<"LtiLineItem"> | Date | string
  }

  export type LtiLineItemOrderByWithRelationInput = {
    id?: SortOrder
    contextId?: SortOrder
    label?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    resourceLinkId?: SortOrderInput | SortOrder
    tag?: SortOrderInput | SortOrder
    scoreMaximum?: SortOrder
    startDateTime?: SortOrderInput | SortOrder
    endDateTime?: SortOrderInput | SortOrder
    platformUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type LtiLineItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LtiLineItemWhereInput | LtiLineItemWhereInput[]
    OR?: LtiLineItemWhereInput[]
    NOT?: LtiLineItemWhereInput | LtiLineItemWhereInput[]
    contextId?: StringFilter<"LtiLineItem"> | string
    label?: StringFilter<"LtiLineItem"> | string
    resourceId?: StringNullableFilter<"LtiLineItem"> | string | null
    resourceLinkId?: StringNullableFilter<"LtiLineItem"> | string | null
    tag?: StringNullableFilter<"LtiLineItem"> | string | null
    scoreMaximum?: FloatFilter<"LtiLineItem"> | number
    startDateTime?: DateTimeNullableFilter<"LtiLineItem"> | Date | string | null
    endDateTime?: DateTimeNullableFilter<"LtiLineItem"> | Date | string | null
    platformUrl?: StringNullableFilter<"LtiLineItem"> | string | null
    createdAt?: DateTimeFilter<"LtiLineItem"> | Date | string
  }, "id">

  export type LtiLineItemOrderByWithAggregationInput = {
    id?: SortOrder
    contextId?: SortOrder
    label?: SortOrder
    resourceId?: SortOrderInput | SortOrder
    resourceLinkId?: SortOrderInput | SortOrder
    tag?: SortOrderInput | SortOrder
    scoreMaximum?: SortOrder
    startDateTime?: SortOrderInput | SortOrder
    endDateTime?: SortOrderInput | SortOrder
    platformUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LtiLineItemCountOrderByAggregateInput
    _avg?: LtiLineItemAvgOrderByAggregateInput
    _max?: LtiLineItemMaxOrderByAggregateInput
    _min?: LtiLineItemMinOrderByAggregateInput
    _sum?: LtiLineItemSumOrderByAggregateInput
  }

  export type LtiLineItemScalarWhereWithAggregatesInput = {
    AND?: LtiLineItemScalarWhereWithAggregatesInput | LtiLineItemScalarWhereWithAggregatesInput[]
    OR?: LtiLineItemScalarWhereWithAggregatesInput[]
    NOT?: LtiLineItemScalarWhereWithAggregatesInput | LtiLineItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LtiLineItem"> | string
    contextId?: StringWithAggregatesFilter<"LtiLineItem"> | string
    label?: StringWithAggregatesFilter<"LtiLineItem"> | string
    resourceId?: StringNullableWithAggregatesFilter<"LtiLineItem"> | string | null
    resourceLinkId?: StringNullableWithAggregatesFilter<"LtiLineItem"> | string | null
    tag?: StringNullableWithAggregatesFilter<"LtiLineItem"> | string | null
    scoreMaximum?: FloatWithAggregatesFilter<"LtiLineItem"> | number
    startDateTime?: DateTimeNullableWithAggregatesFilter<"LtiLineItem"> | Date | string | null
    endDateTime?: DateTimeNullableWithAggregatesFilter<"LtiLineItem"> | Date | string | null
    platformUrl?: StringNullableWithAggregatesFilter<"LtiLineItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LtiLineItem"> | Date | string
  }

  export type LtiUserCreateInput = {
    id?: string
    sub: string
    platformId: string
    email?: string | null
    name?: string | null
    givenName?: string | null
    familyName?: string | null
    roles?: LtiUserCreaterolesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: LtiSessionCreateNestedManyWithoutUserInput
    grades?: LtiGradeCreateNestedManyWithoutUserInput
  }

  export type LtiUserUncheckedCreateInput = {
    id?: string
    sub: string
    platformId: string
    email?: string | null
    name?: string | null
    givenName?: string | null
    familyName?: string | null
    roles?: LtiUserCreaterolesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: LtiSessionUncheckedCreateNestedManyWithoutUserInput
    grades?: LtiGradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type LtiUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: LtiUserUpdaterolesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: LtiSessionUpdateManyWithoutUserNestedInput
    grades?: LtiGradeUpdateManyWithoutUserNestedInput
  }

  export type LtiUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: LtiUserUpdaterolesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: LtiSessionUncheckedUpdateManyWithoutUserNestedInput
    grades?: LtiGradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LtiUserCreateManyInput = {
    id?: string
    sub: string
    platformId: string
    email?: string | null
    name?: string | null
    givenName?: string | null
    familyName?: string | null
    roles?: LtiUserCreaterolesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LtiUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: LtiUserUpdaterolesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: LtiUserUpdaterolesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiSessionCreateInput = {
    id?: string
    platformId: string
    contextId: string
    contextLabel?: string | null
    contextTitle?: string | null
    resourceLinkId?: string | null
    resourceLinkTitle?: string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
    user: LtiUserCreateNestedOneWithoutSessionsInput
  }

  export type LtiSessionUncheckedCreateInput = {
    id?: string
    userId: string
    platformId: string
    contextId: string
    contextLabel?: string | null
    contextTitle?: string | null
    resourceLinkId?: string | null
    resourceLinkTitle?: string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LtiSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    contextLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contextTitle?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: LtiUserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type LtiSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    contextLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contextTitle?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiSessionCreateManyInput = {
    id?: string
    userId: string
    platformId: string
    contextId: string
    contextLabel?: string | null
    contextTitle?: string | null
    resourceLinkId?: string | null
    resourceLinkTitle?: string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LtiSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    contextLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contextTitle?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    contextLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contextTitle?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiStateCreateInput = {
    id?: string
    state: string
    nonce: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LtiStateUncheckedCreateInput = {
    id?: string
    state: string
    nonce: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LtiStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiStateCreateManyInput = {
    id?: string
    state: string
    nonce: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LtiStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    nonce?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiJwksCreateInput = {
    id?: string
    publicKey: string
    privateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LtiJwksUncheckedCreateInput = {
    id?: string
    publicKey: string
    privateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LtiJwksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiJwksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiJwksCreateManyInput = {
    id?: string
    publicKey: string
    privateKey: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LtiJwksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiJwksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    privateKey?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiGradeCreateInput = {
    id?: string
    contextId: string
    resourceLinkId?: string | null
    score: number
    scoreMaximum: number
    activityProgress: string
    gradingProgress: string
    timestamp: Date | string
    submitted?: boolean
    submittedAt?: Date | string | null
    createdAt?: Date | string
    user: LtiUserCreateNestedOneWithoutGradesInput
  }

  export type LtiGradeUncheckedCreateInput = {
    id?: string
    userId: string
    contextId: string
    resourceLinkId?: string | null
    score: number
    scoreMaximum: number
    activityProgress: string
    gradingProgress: string
    timestamp: Date | string
    submitted?: boolean
    submittedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LtiGradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    activityProgress?: StringFieldUpdateOperationsInput | string
    gradingProgress?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: LtiUserUpdateOneRequiredWithoutGradesNestedInput
  }

  export type LtiGradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    activityProgress?: StringFieldUpdateOperationsInput | string
    gradingProgress?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiGradeCreateManyInput = {
    id?: string
    userId: string
    contextId: string
    resourceLinkId?: string | null
    score: number
    scoreMaximum: number
    activityProgress: string
    gradingProgress: string
    timestamp: Date | string
    submitted?: boolean
    submittedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LtiGradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    activityProgress?: StringFieldUpdateOperationsInput | string
    gradingProgress?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiGradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    activityProgress?: StringFieldUpdateOperationsInput | string
    gradingProgress?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiLineItemCreateInput = {
    id?: string
    contextId: string
    label: string
    resourceId?: string | null
    resourceLinkId?: string | null
    tag?: string | null
    scoreMaximum: number
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    platformUrl?: string | null
    createdAt?: Date | string
  }

  export type LtiLineItemUncheckedCreateInput = {
    id?: string
    contextId: string
    label: string
    resourceId?: string | null
    resourceLinkId?: string | null
    tag?: string | null
    scoreMaximum: number
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    platformUrl?: string | null
    createdAt?: Date | string
  }

  export type LtiLineItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiLineItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiLineItemCreateManyInput = {
    id?: string
    contextId: string
    label: string
    resourceId?: string | null
    resourceLinkId?: string | null
    tag?: string | null
    scoreMaximum: number
    startDateTime?: Date | string | null
    endDateTime?: Date | string | null
    platformUrl?: string | null
    createdAt?: Date | string
  }

  export type LtiLineItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiLineItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    resourceId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    startDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDateTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    platformUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type LtiSessionListRelationFilter = {
    every?: LtiSessionWhereInput
    some?: LtiSessionWhereInput
    none?: LtiSessionWhereInput
  }

  export type LtiGradeListRelationFilter = {
    every?: LtiGradeWhereInput
    some?: LtiGradeWhereInput
    none?: LtiGradeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LtiSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LtiGradeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LtiUserCountOrderByAggregateInput = {
    id?: SortOrder
    sub?: SortOrder
    platformId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    givenName?: SortOrder
    familyName?: SortOrder
    roles?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LtiUserMaxOrderByAggregateInput = {
    id?: SortOrder
    sub?: SortOrder
    platformId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    givenName?: SortOrder
    familyName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LtiUserMinOrderByAggregateInput = {
    id?: SortOrder
    sub?: SortOrder
    platformId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    givenName?: SortOrder
    familyName?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LtiUserScalarRelationFilter = {
    is?: LtiUserWhereInput
    isNot?: LtiUserWhereInput
  }

  export type LtiSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platformId?: SortOrder
    contextId?: SortOrder
    contextLabel?: SortOrder
    contextTitle?: SortOrder
    resourceLinkId?: SortOrder
    resourceLinkTitle?: SortOrder
    customParams?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platformId?: SortOrder
    contextId?: SortOrder
    contextLabel?: SortOrder
    contextTitle?: SortOrder
    resourceLinkId?: SortOrder
    resourceLinkTitle?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    platformId?: SortOrder
    contextId?: SortOrder
    contextLabel?: SortOrder
    contextTitle?: SortOrder
    resourceLinkId?: SortOrder
    resourceLinkTitle?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LtiStateCountOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    nonce?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiStateMaxOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    nonce?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiStateMinOrderByAggregateInput = {
    id?: SortOrder
    state?: SortOrder
    nonce?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiJwksCountOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LtiJwksMaxOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LtiJwksMinOrderByAggregateInput = {
    id?: SortOrder
    publicKey?: SortOrder
    privateKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type LtiGradeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contextId?: SortOrder
    resourceLinkId?: SortOrder
    score?: SortOrder
    scoreMaximum?: SortOrder
    activityProgress?: SortOrder
    gradingProgress?: SortOrder
    timestamp?: SortOrder
    submitted?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiGradeAvgOrderByAggregateInput = {
    score?: SortOrder
    scoreMaximum?: SortOrder
  }

  export type LtiGradeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contextId?: SortOrder
    resourceLinkId?: SortOrder
    score?: SortOrder
    scoreMaximum?: SortOrder
    activityProgress?: SortOrder
    gradingProgress?: SortOrder
    timestamp?: SortOrder
    submitted?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiGradeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contextId?: SortOrder
    resourceLinkId?: SortOrder
    score?: SortOrder
    scoreMaximum?: SortOrder
    activityProgress?: SortOrder
    gradingProgress?: SortOrder
    timestamp?: SortOrder
    submitted?: SortOrder
    submittedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiGradeSumOrderByAggregateInput = {
    score?: SortOrder
    scoreMaximum?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LtiLineItemCountOrderByAggregateInput = {
    id?: SortOrder
    contextId?: SortOrder
    label?: SortOrder
    resourceId?: SortOrder
    resourceLinkId?: SortOrder
    tag?: SortOrder
    scoreMaximum?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    platformUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiLineItemAvgOrderByAggregateInput = {
    scoreMaximum?: SortOrder
  }

  export type LtiLineItemMaxOrderByAggregateInput = {
    id?: SortOrder
    contextId?: SortOrder
    label?: SortOrder
    resourceId?: SortOrder
    resourceLinkId?: SortOrder
    tag?: SortOrder
    scoreMaximum?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    platformUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiLineItemMinOrderByAggregateInput = {
    id?: SortOrder
    contextId?: SortOrder
    label?: SortOrder
    resourceId?: SortOrder
    resourceLinkId?: SortOrder
    tag?: SortOrder
    scoreMaximum?: SortOrder
    startDateTime?: SortOrder
    endDateTime?: SortOrder
    platformUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type LtiLineItemSumOrderByAggregateInput = {
    scoreMaximum?: SortOrder
  }

  export type LtiUserCreaterolesInput = {
    set: string[]
  }

  export type LtiSessionCreateNestedManyWithoutUserInput = {
    create?: XOR<LtiSessionCreateWithoutUserInput, LtiSessionUncheckedCreateWithoutUserInput> | LtiSessionCreateWithoutUserInput[] | LtiSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LtiSessionCreateOrConnectWithoutUserInput | LtiSessionCreateOrConnectWithoutUserInput[]
    createMany?: LtiSessionCreateManyUserInputEnvelope
    connect?: LtiSessionWhereUniqueInput | LtiSessionWhereUniqueInput[]
  }

  export type LtiGradeCreateNestedManyWithoutUserInput = {
    create?: XOR<LtiGradeCreateWithoutUserInput, LtiGradeUncheckedCreateWithoutUserInput> | LtiGradeCreateWithoutUserInput[] | LtiGradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LtiGradeCreateOrConnectWithoutUserInput | LtiGradeCreateOrConnectWithoutUserInput[]
    createMany?: LtiGradeCreateManyUserInputEnvelope
    connect?: LtiGradeWhereUniqueInput | LtiGradeWhereUniqueInput[]
  }

  export type LtiSessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LtiSessionCreateWithoutUserInput, LtiSessionUncheckedCreateWithoutUserInput> | LtiSessionCreateWithoutUserInput[] | LtiSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LtiSessionCreateOrConnectWithoutUserInput | LtiSessionCreateOrConnectWithoutUserInput[]
    createMany?: LtiSessionCreateManyUserInputEnvelope
    connect?: LtiSessionWhereUniqueInput | LtiSessionWhereUniqueInput[]
  }

  export type LtiGradeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LtiGradeCreateWithoutUserInput, LtiGradeUncheckedCreateWithoutUserInput> | LtiGradeCreateWithoutUserInput[] | LtiGradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LtiGradeCreateOrConnectWithoutUserInput | LtiGradeCreateOrConnectWithoutUserInput[]
    createMany?: LtiGradeCreateManyUserInputEnvelope
    connect?: LtiGradeWhereUniqueInput | LtiGradeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LtiUserUpdaterolesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LtiSessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<LtiSessionCreateWithoutUserInput, LtiSessionUncheckedCreateWithoutUserInput> | LtiSessionCreateWithoutUserInput[] | LtiSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LtiSessionCreateOrConnectWithoutUserInput | LtiSessionCreateOrConnectWithoutUserInput[]
    upsert?: LtiSessionUpsertWithWhereUniqueWithoutUserInput | LtiSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LtiSessionCreateManyUserInputEnvelope
    set?: LtiSessionWhereUniqueInput | LtiSessionWhereUniqueInput[]
    disconnect?: LtiSessionWhereUniqueInput | LtiSessionWhereUniqueInput[]
    delete?: LtiSessionWhereUniqueInput | LtiSessionWhereUniqueInput[]
    connect?: LtiSessionWhereUniqueInput | LtiSessionWhereUniqueInput[]
    update?: LtiSessionUpdateWithWhereUniqueWithoutUserInput | LtiSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LtiSessionUpdateManyWithWhereWithoutUserInput | LtiSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LtiSessionScalarWhereInput | LtiSessionScalarWhereInput[]
  }

  export type LtiGradeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LtiGradeCreateWithoutUserInput, LtiGradeUncheckedCreateWithoutUserInput> | LtiGradeCreateWithoutUserInput[] | LtiGradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LtiGradeCreateOrConnectWithoutUserInput | LtiGradeCreateOrConnectWithoutUserInput[]
    upsert?: LtiGradeUpsertWithWhereUniqueWithoutUserInput | LtiGradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LtiGradeCreateManyUserInputEnvelope
    set?: LtiGradeWhereUniqueInput | LtiGradeWhereUniqueInput[]
    disconnect?: LtiGradeWhereUniqueInput | LtiGradeWhereUniqueInput[]
    delete?: LtiGradeWhereUniqueInput | LtiGradeWhereUniqueInput[]
    connect?: LtiGradeWhereUniqueInput | LtiGradeWhereUniqueInput[]
    update?: LtiGradeUpdateWithWhereUniqueWithoutUserInput | LtiGradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LtiGradeUpdateManyWithWhereWithoutUserInput | LtiGradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LtiGradeScalarWhereInput | LtiGradeScalarWhereInput[]
  }

  export type LtiSessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LtiSessionCreateWithoutUserInput, LtiSessionUncheckedCreateWithoutUserInput> | LtiSessionCreateWithoutUserInput[] | LtiSessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LtiSessionCreateOrConnectWithoutUserInput | LtiSessionCreateOrConnectWithoutUserInput[]
    upsert?: LtiSessionUpsertWithWhereUniqueWithoutUserInput | LtiSessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LtiSessionCreateManyUserInputEnvelope
    set?: LtiSessionWhereUniqueInput | LtiSessionWhereUniqueInput[]
    disconnect?: LtiSessionWhereUniqueInput | LtiSessionWhereUniqueInput[]
    delete?: LtiSessionWhereUniqueInput | LtiSessionWhereUniqueInput[]
    connect?: LtiSessionWhereUniqueInput | LtiSessionWhereUniqueInput[]
    update?: LtiSessionUpdateWithWhereUniqueWithoutUserInput | LtiSessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LtiSessionUpdateManyWithWhereWithoutUserInput | LtiSessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LtiSessionScalarWhereInput | LtiSessionScalarWhereInput[]
  }

  export type LtiGradeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LtiGradeCreateWithoutUserInput, LtiGradeUncheckedCreateWithoutUserInput> | LtiGradeCreateWithoutUserInput[] | LtiGradeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LtiGradeCreateOrConnectWithoutUserInput | LtiGradeCreateOrConnectWithoutUserInput[]
    upsert?: LtiGradeUpsertWithWhereUniqueWithoutUserInput | LtiGradeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LtiGradeCreateManyUserInputEnvelope
    set?: LtiGradeWhereUniqueInput | LtiGradeWhereUniqueInput[]
    disconnect?: LtiGradeWhereUniqueInput | LtiGradeWhereUniqueInput[]
    delete?: LtiGradeWhereUniqueInput | LtiGradeWhereUniqueInput[]
    connect?: LtiGradeWhereUniqueInput | LtiGradeWhereUniqueInput[]
    update?: LtiGradeUpdateWithWhereUniqueWithoutUserInput | LtiGradeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LtiGradeUpdateManyWithWhereWithoutUserInput | LtiGradeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LtiGradeScalarWhereInput | LtiGradeScalarWhereInput[]
  }

  export type LtiUserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<LtiUserCreateWithoutSessionsInput, LtiUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: LtiUserCreateOrConnectWithoutSessionsInput
    connect?: LtiUserWhereUniqueInput
  }

  export type LtiUserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<LtiUserCreateWithoutSessionsInput, LtiUserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: LtiUserCreateOrConnectWithoutSessionsInput
    upsert?: LtiUserUpsertWithoutSessionsInput
    connect?: LtiUserWhereUniqueInput
    update?: XOR<XOR<LtiUserUpdateToOneWithWhereWithoutSessionsInput, LtiUserUpdateWithoutSessionsInput>, LtiUserUncheckedUpdateWithoutSessionsInput>
  }

  export type LtiUserCreateNestedOneWithoutGradesInput = {
    create?: XOR<LtiUserCreateWithoutGradesInput, LtiUserUncheckedCreateWithoutGradesInput>
    connectOrCreate?: LtiUserCreateOrConnectWithoutGradesInput
    connect?: LtiUserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type LtiUserUpdateOneRequiredWithoutGradesNestedInput = {
    create?: XOR<LtiUserCreateWithoutGradesInput, LtiUserUncheckedCreateWithoutGradesInput>
    connectOrCreate?: LtiUserCreateOrConnectWithoutGradesInput
    upsert?: LtiUserUpsertWithoutGradesInput
    connect?: LtiUserWhereUniqueInput
    update?: XOR<XOR<LtiUserUpdateToOneWithWhereWithoutGradesInput, LtiUserUpdateWithoutGradesInput>, LtiUserUncheckedUpdateWithoutGradesInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LtiSessionCreateWithoutUserInput = {
    id?: string
    platformId: string
    contextId: string
    contextLabel?: string | null
    contextTitle?: string | null
    resourceLinkId?: string | null
    resourceLinkTitle?: string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LtiSessionUncheckedCreateWithoutUserInput = {
    id?: string
    platformId: string
    contextId: string
    contextLabel?: string | null
    contextTitle?: string | null
    resourceLinkId?: string | null
    resourceLinkTitle?: string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LtiSessionCreateOrConnectWithoutUserInput = {
    where: LtiSessionWhereUniqueInput
    create: XOR<LtiSessionCreateWithoutUserInput, LtiSessionUncheckedCreateWithoutUserInput>
  }

  export type LtiSessionCreateManyUserInputEnvelope = {
    data: LtiSessionCreateManyUserInput | LtiSessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LtiGradeCreateWithoutUserInput = {
    id?: string
    contextId: string
    resourceLinkId?: string | null
    score: number
    scoreMaximum: number
    activityProgress: string
    gradingProgress: string
    timestamp: Date | string
    submitted?: boolean
    submittedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LtiGradeUncheckedCreateWithoutUserInput = {
    id?: string
    contextId: string
    resourceLinkId?: string | null
    score: number
    scoreMaximum: number
    activityProgress: string
    gradingProgress: string
    timestamp: Date | string
    submitted?: boolean
    submittedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LtiGradeCreateOrConnectWithoutUserInput = {
    where: LtiGradeWhereUniqueInput
    create: XOR<LtiGradeCreateWithoutUserInput, LtiGradeUncheckedCreateWithoutUserInput>
  }

  export type LtiGradeCreateManyUserInputEnvelope = {
    data: LtiGradeCreateManyUserInput | LtiGradeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LtiSessionUpsertWithWhereUniqueWithoutUserInput = {
    where: LtiSessionWhereUniqueInput
    update: XOR<LtiSessionUpdateWithoutUserInput, LtiSessionUncheckedUpdateWithoutUserInput>
    create: XOR<LtiSessionCreateWithoutUserInput, LtiSessionUncheckedCreateWithoutUserInput>
  }

  export type LtiSessionUpdateWithWhereUniqueWithoutUserInput = {
    where: LtiSessionWhereUniqueInput
    data: XOR<LtiSessionUpdateWithoutUserInput, LtiSessionUncheckedUpdateWithoutUserInput>
  }

  export type LtiSessionUpdateManyWithWhereWithoutUserInput = {
    where: LtiSessionScalarWhereInput
    data: XOR<LtiSessionUpdateManyMutationInput, LtiSessionUncheckedUpdateManyWithoutUserInput>
  }

  export type LtiSessionScalarWhereInput = {
    AND?: LtiSessionScalarWhereInput | LtiSessionScalarWhereInput[]
    OR?: LtiSessionScalarWhereInput[]
    NOT?: LtiSessionScalarWhereInput | LtiSessionScalarWhereInput[]
    id?: StringFilter<"LtiSession"> | string
    userId?: StringFilter<"LtiSession"> | string
    platformId?: StringFilter<"LtiSession"> | string
    contextId?: StringFilter<"LtiSession"> | string
    contextLabel?: StringNullableFilter<"LtiSession"> | string | null
    contextTitle?: StringNullableFilter<"LtiSession"> | string | null
    resourceLinkId?: StringNullableFilter<"LtiSession"> | string | null
    resourceLinkTitle?: StringNullableFilter<"LtiSession"> | string | null
    customParams?: JsonNullableFilter<"LtiSession">
    expiresAt?: DateTimeFilter<"LtiSession"> | Date | string
    createdAt?: DateTimeFilter<"LtiSession"> | Date | string
  }

  export type LtiGradeUpsertWithWhereUniqueWithoutUserInput = {
    where: LtiGradeWhereUniqueInput
    update: XOR<LtiGradeUpdateWithoutUserInput, LtiGradeUncheckedUpdateWithoutUserInput>
    create: XOR<LtiGradeCreateWithoutUserInput, LtiGradeUncheckedCreateWithoutUserInput>
  }

  export type LtiGradeUpdateWithWhereUniqueWithoutUserInput = {
    where: LtiGradeWhereUniqueInput
    data: XOR<LtiGradeUpdateWithoutUserInput, LtiGradeUncheckedUpdateWithoutUserInput>
  }

  export type LtiGradeUpdateManyWithWhereWithoutUserInput = {
    where: LtiGradeScalarWhereInput
    data: XOR<LtiGradeUpdateManyMutationInput, LtiGradeUncheckedUpdateManyWithoutUserInput>
  }

  export type LtiGradeScalarWhereInput = {
    AND?: LtiGradeScalarWhereInput | LtiGradeScalarWhereInput[]
    OR?: LtiGradeScalarWhereInput[]
    NOT?: LtiGradeScalarWhereInput | LtiGradeScalarWhereInput[]
    id?: StringFilter<"LtiGrade"> | string
    userId?: StringFilter<"LtiGrade"> | string
    contextId?: StringFilter<"LtiGrade"> | string
    resourceLinkId?: StringNullableFilter<"LtiGrade"> | string | null
    score?: FloatFilter<"LtiGrade"> | number
    scoreMaximum?: FloatFilter<"LtiGrade"> | number
    activityProgress?: StringFilter<"LtiGrade"> | string
    gradingProgress?: StringFilter<"LtiGrade"> | string
    timestamp?: DateTimeFilter<"LtiGrade"> | Date | string
    submitted?: BoolFilter<"LtiGrade"> | boolean
    submittedAt?: DateTimeNullableFilter<"LtiGrade"> | Date | string | null
    createdAt?: DateTimeFilter<"LtiGrade"> | Date | string
  }

  export type LtiUserCreateWithoutSessionsInput = {
    id?: string
    sub: string
    platformId: string
    email?: string | null
    name?: string | null
    givenName?: string | null
    familyName?: string | null
    roles?: LtiUserCreaterolesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: LtiGradeCreateNestedManyWithoutUserInput
  }

  export type LtiUserUncheckedCreateWithoutSessionsInput = {
    id?: string
    sub: string
    platformId: string
    email?: string | null
    name?: string | null
    givenName?: string | null
    familyName?: string | null
    roles?: LtiUserCreaterolesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    grades?: LtiGradeUncheckedCreateNestedManyWithoutUserInput
  }

  export type LtiUserCreateOrConnectWithoutSessionsInput = {
    where: LtiUserWhereUniqueInput
    create: XOR<LtiUserCreateWithoutSessionsInput, LtiUserUncheckedCreateWithoutSessionsInput>
  }

  export type LtiUserUpsertWithoutSessionsInput = {
    update: XOR<LtiUserUpdateWithoutSessionsInput, LtiUserUncheckedUpdateWithoutSessionsInput>
    create: XOR<LtiUserCreateWithoutSessionsInput, LtiUserUncheckedCreateWithoutSessionsInput>
    where?: LtiUserWhereInput
  }

  export type LtiUserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: LtiUserWhereInput
    data: XOR<LtiUserUpdateWithoutSessionsInput, LtiUserUncheckedUpdateWithoutSessionsInput>
  }

  export type LtiUserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: LtiUserUpdaterolesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: LtiGradeUpdateManyWithoutUserNestedInput
  }

  export type LtiUserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: LtiUserUpdaterolesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    grades?: LtiGradeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LtiUserCreateWithoutGradesInput = {
    id?: string
    sub: string
    platformId: string
    email?: string | null
    name?: string | null
    givenName?: string | null
    familyName?: string | null
    roles?: LtiUserCreaterolesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: LtiSessionCreateNestedManyWithoutUserInput
  }

  export type LtiUserUncheckedCreateWithoutGradesInput = {
    id?: string
    sub: string
    platformId: string
    email?: string | null
    name?: string | null
    givenName?: string | null
    familyName?: string | null
    roles?: LtiUserCreaterolesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: LtiSessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type LtiUserCreateOrConnectWithoutGradesInput = {
    where: LtiUserWhereUniqueInput
    create: XOR<LtiUserCreateWithoutGradesInput, LtiUserUncheckedCreateWithoutGradesInput>
  }

  export type LtiUserUpsertWithoutGradesInput = {
    update: XOR<LtiUserUpdateWithoutGradesInput, LtiUserUncheckedUpdateWithoutGradesInput>
    create: XOR<LtiUserCreateWithoutGradesInput, LtiUserUncheckedCreateWithoutGradesInput>
    where?: LtiUserWhereInput
  }

  export type LtiUserUpdateToOneWithWhereWithoutGradesInput = {
    where?: LtiUserWhereInput
    data: XOR<LtiUserUpdateWithoutGradesInput, LtiUserUncheckedUpdateWithoutGradesInput>
  }

  export type LtiUserUpdateWithoutGradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: LtiUserUpdaterolesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: LtiSessionUpdateManyWithoutUserNestedInput
  }

  export type LtiUserUncheckedUpdateWithoutGradesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sub?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    givenName?: NullableStringFieldUpdateOperationsInput | string | null
    familyName?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: LtiUserUpdaterolesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: LtiSessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LtiSessionCreateManyUserInput = {
    id?: string
    platformId: string
    contextId: string
    contextLabel?: string | null
    contextTitle?: string | null
    resourceLinkId?: string | null
    resourceLinkTitle?: string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type LtiGradeCreateManyUserInput = {
    id?: string
    contextId: string
    resourceLinkId?: string | null
    score: number
    scoreMaximum: number
    activityProgress: string
    gradingProgress: string
    timestamp: Date | string
    submitted?: boolean
    submittedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type LtiSessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    contextLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contextTitle?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiSessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    contextLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contextTitle?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiSessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformId?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    contextLabel?: NullableStringFieldUpdateOperationsInput | string | null
    contextTitle?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    resourceLinkTitle?: NullableStringFieldUpdateOperationsInput | string | null
    customParams?: NullableJsonNullValueInput | InputJsonValue
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiGradeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    activityProgress?: StringFieldUpdateOperationsInput | string
    gradingProgress?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiGradeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    activityProgress?: StringFieldUpdateOperationsInput | string
    gradingProgress?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LtiGradeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextId?: StringFieldUpdateOperationsInput | string
    resourceLinkId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: FloatFieldUpdateOperationsInput | number
    scoreMaximum?: FloatFieldUpdateOperationsInput | number
    activityProgress?: StringFieldUpdateOperationsInput | string
    gradingProgress?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    submitted?: BoolFieldUpdateOperationsInput | boolean
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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