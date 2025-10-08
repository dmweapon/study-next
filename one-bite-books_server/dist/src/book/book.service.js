"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_exclude_1 = require("../util/prisma-exclude");
const remove_whitepsace_1 = require("../util/remove-whitepsace");
let BookService = class BookService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBook(createBookDto) {
        const searchIndex = (0, remove_whitepsace_1.removeWhitespace)([
            createBookDto.title,
            createBookDto.author,
            createBookDto.subTitle,
        ]);
        return await this.prisma.book.create({
            data: { ...createBookDto, searchIndex },
            select: (0, prisma_exclude_1.prismaExclude)('Book', ['searchIndex']),
        });
    }
    async findAllBooks() {
        return await this.prisma.book.findMany({
            select: (0, prisma_exclude_1.prismaExclude)('Book', ['searchIndex']),
        });
    }
    async searchBooks(q) {
        const searchText = q.replace(/\s+/g, '');
        return await this.prisma.book.findMany({
            select: (0, prisma_exclude_1.prismaExclude)('Book', ['searchIndex']),
            where: {
                OR: [
                    {
                        searchIndex: { contains: searchText, mode: 'insensitive' },
                    },
                ],
            },
        });
    }
    async findRandomBooks() {
        const query = `
    SELECT id, title, "subTitle", description, author, publisher, "coverImgUrl" 
    FROM "Book" ORDER BY RANDOM() LIMIT 3
    `;
        return await this.prisma.$queryRawUnsafe(query);
    }
    async findOneBook(id) {
        const book = await this.prisma.book.findUnique({
            select: (0, prisma_exclude_1.prismaExclude)('Book', ['searchIndex']),
            where: {
                id: id,
            },
        });
        if (!book) {
            throw new common_1.NotFoundException(`${id}번 도서는 존재하지 않습니다`);
        }
        return book;
    }
    async updateBook(id, dto) {
        const beforeUpdateData = await this.prisma.book
            .findUnique({
            select: (0, prisma_exclude_1.prismaExclude)('Book', ['searchIndex']),
            where: {
                id: id,
            },
        })
            .catch((err) => console.log(err));
        if (!beforeUpdateData) {
            throw new common_1.NotFoundException(`${id}번 도서는 존재하지 않습니다`);
        }
        const searchIndex = (0, remove_whitepsace_1.removeWhitespace)([
            dto.title ?? beforeUpdateData.title,
            dto.author ?? beforeUpdateData.author,
            dto.subTitle ?? beforeUpdateData.subTitle,
        ]);
        return await this.prisma.book.update({
            select: (0, prisma_exclude_1.prismaExclude)('Book', ['searchIndex']),
            where: {
                id: id,
            },
            data: { ...dto, searchIndex },
        });
    }
    async removeBook(id) {
        await this.prisma.book.delete({
            where: {
                id: id,
            },
        });
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookService);
//# sourceMappingURL=book.service.js.map