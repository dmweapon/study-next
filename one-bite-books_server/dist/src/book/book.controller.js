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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const swagger_1 = require("@nestjs/swagger");
const book_entity_1 = require("./entitiy/book.entity");
const update_book_dto_1 = require("./dto/update-book.dto");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    findAll() {
        return this.bookService.findAllBooks();
    }
    findSearchResult(q) {
        return this.bookService.searchBooks(q);
    }
    findRandom() {
        return this.bookService.findRandomBooks();
    }
    findOne(bookId) {
        return this.bookService.findOneBook(bookId);
    }
    create(createBookDto) {
        return this.bookService.createBook(createBookDto);
    }
    update(bookId, updateBookDto) {
        return this.bookService.updateBook(bookId, updateBookDto);
    }
    delete(bookId) {
        return this.bookService.removeBook(bookId);
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({
        summary: '모든 도서 불러오기',
        description: '데이터베이스에 저장되어있는 모든 도서를 불러옵니다.',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: book_entity_1.BookEntity,
        isArray: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/search'),
    (0, swagger_1.ApiOperation)({
        summary: '도서 검색하기',
        description: '제목, 저자, 출판사를 기준으로 검색합니다',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'q',
        type: String,
        description: '책 제목 검색',
        required: true,
    }),
    (0, swagger_1.ApiOkResponse)({
        type: book_entity_1.BookEntity,
        isArray: true,
    }),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "findSearchResult", null);
__decorate([
    (0, common_1.Get)('random'),
    (0, swagger_1.ApiOperation)({
        summary: '랜덤 도서 불러오기',
        description: '랜덤 3개의 도서를 불러옵니다 (추천도서에 사용하세요)',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: book_entity_1.BookEntity,
        isArray: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookController.prototype, "findRandom", null);
__decorate([
    (0, common_1.Get)(':bookId'),
    (0, swagger_1.ApiOperation)({
        summary: '특정 도서 불러오기',
        description: 'id를 기준으로 특정 도서의 정보를 불러옵니다',
    }),
    (0, swagger_1.ApiParam)({
        name: 'bookId',
        description: '정보를 불러오려는 도서의 아이디',
        type: Number,
    }),
    (0, swagger_1.ApiOkResponse)({
        type: book_entity_1.BookEntity,
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: '{id}번 도서는 존재하지 않습니다',
    }),
    __param(0, (0, common_1.Param)('bookId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '새로운 도서 생성하기',
        description: "새로운 도서를 생성합니다. category는 'FE' 이거나 'BE'여야 합니다.",
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: '도서 아이디',
                },
                title: {
                    type: 'string',
                    description: '도서 제목',
                    nullable: true,
                },
                subTitle: {
                    type: 'string',
                    description: '도서 부제',
                },
                author: {
                    type: 'string',
                    description: '저자',
                    nullable: true,
                },
                description: {
                    type: 'string',
                    description: '도서 소개',
                    nullable: true,
                },
                publisher: {
                    type: 'string',
                    description: '출판사',
                    nullable: true,
                },
                coverImgUrl: {
                    type: 'string',
                    description: '도서 표지 이미지 링크(URL)',
                    nullable: true,
                },
            },
        },
    }),
    (0, swagger_1.ApiCreatedResponse)({
        type: book_entity_1.BookEntity,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':bookId'),
    (0, swagger_1.ApiOperation)({
        summary: '도서 정보 수정하기',
        description: '특정 도서의 정보를 수정합니다.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'bookId',
        description: '정보를 수정하려는 도서의 아이디',
        type: Number,
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: '도서 아이디',
                },
                title: {
                    type: 'string',
                    description: '도서 제목',
                    nullable: true,
                },
                subTitle: {
                    type: 'string',
                    description: '도서 부제',
                },
                author: {
                    type: 'string',
                    description: '저자',
                    nullable: true,
                },
                description: {
                    type: 'string',
                    description: '도서 소개',
                    nullable: true,
                },
                publisher: {
                    type: 'string',
                    description: '출판사',
                    nullable: true,
                },
                coverImgUrl: {
                    type: 'string',
                    description: '도서 표지 이미지 링크(URL)',
                    nullable: true,
                },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        type: book_entity_1.BookEntity,
    }),
    (0, swagger_1.ApiNotFoundResponse)(),
    __param(0, (0, common_1.Param)('bookId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':bookId'),
    (0, swagger_1.ApiOperation)({
        summary: '도서 삭제하기',
        description: '특정 도서를 삭제합니다. (주의! 도서에 달린 리뷰도 함께 삭제됩니다)',
    }),
    (0, swagger_1.ApiParam)({
        name: 'bookId',
        description: '삭제하려는 도서의 아이디',
        type: Number,
    }),
    (0, swagger_1.ApiOkResponse)(),
    (0, swagger_1.ApiNotFoundResponse)(),
    __param(0, (0, common_1.Param)('bookId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BookController.prototype, "delete", null);
exports.BookController = BookController = __decorate([
    (0, swagger_1.ApiTags)('Book (도서 관련 API)'),
    (0, common_1.Controller)('book'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map