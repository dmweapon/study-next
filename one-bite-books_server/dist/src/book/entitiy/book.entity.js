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
exports.BookEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class BookEntity {
}
exports.BookEntity = BookEntity;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '아이디',
    }),
    __metadata("design:type", Number)
], BookEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '도서 제목',
    }),
    __metadata("design:type", String)
], BookEntity.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '도서 부제',
    }),
    __metadata("design:type", String)
], BookEntity.prototype, "subTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '도서 소개',
    }),
    __metadata("design:type", String)
], BookEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '저자',
    }),
    __metadata("design:type", String)
], BookEntity.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '출판사',
    }),
    __metadata("design:type", String)
], BookEntity.prototype, "publisher", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '도서 표지 이미지 URL',
    }),
    __metadata("design:type", String)
], BookEntity.prototype, "coverImgUrl", void 0);
//# sourceMappingURL=book.entity.js.map