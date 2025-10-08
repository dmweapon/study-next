import { Prisma } from '@prisma/client';
type A<T extends string> = T extends `${infer U}ScalarFieldEnum` ? U : never;
type Entity = A<keyof typeof Prisma>;
type Keys<T extends Entity> = Extract<keyof (typeof Prisma)[keyof Pick<typeof Prisma, `${T}ScalarFieldEnum`>], string>;
export declare function prismaExclude<T extends Entity, K extends Keys<T>>(type: T, omit: K[]): Record<Exclude<Extract<keyof (typeof Prisma)[`${T}ScalarFieldEnum`], string>, K>, true>;
export {};
