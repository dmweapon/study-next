"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const data_1 = require("./data");
const remove_whitepsace_1 = require("../../src/util/remove-whitepsace");
const prisma = new client_1.PrismaClient();
async function truncateAllTable() {
    const tablenames = await prisma.$queryRaw `SELECT tablename FROM pg_tables WHERE schemaname='public'`;
    const tables = tablenames
        .map(({ tablename }) => tablename)
        .filter((name) => name !== '_prisma_migrations')
        .map((name) => `"public"."${name}"`)
        .join(', ');
    try {
        await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tables} RESTART IDENTITY;`);
    }
    catch (error) {
        console.log({ error });
    }
}
async function createSeedData() {
    const reviewSeedData = data_1.seedData.reduce((acc, book, idx) => {
        acc.push(...book.reviews.map((review) => ({ ...review, bookId: idx + 1 })));
        return acc;
    }, []);
    const bookSeedData = data_1.seedData.map((book) => {
        delete book.reviews;
        book['searchIndex'] = (0, remove_whitepsace_1.removeWhitespace)([
            book.title,
            book.author,
            book.subTitle,
        ]);
        return book;
    });
    await prisma.book.createMany({
        data: bookSeedData,
    });
    await prisma.review.createMany({
        data: reviewSeedData,
    });
}
async function main() {
    await truncateAllTable();
    await createSeedData();
}
main();
//# sourceMappingURL=seed.js.map