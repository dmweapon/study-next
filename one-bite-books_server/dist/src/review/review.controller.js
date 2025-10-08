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
exports.ReviewController = void 0;
const common_1 = require("@nestjs/common");
const review_service_1 = require("./review.service");
const create_review_dto_1 = require("./dto/create-review.dto");
const update_review_dto_1 = require("./dto/update-review.dto");
const swagger_1 = require("@nestjs/swagger");
const review_entity_1 = require("./entity/review.entity");
let ReviewController = class ReviewController {
    constructor(reviewService) {
        this.reviewService = reviewService;
    }
    findAllReviews() {
        return this.reviewService.findAllReviews();
    }
    findReviews(bookId) {
        return this.reviewService.findBookReviews(bookId);
    }
    create(createReviewDto) {
        return this.reviewService.createReview(createReviewDto);
    }
    update(reviewId, updateReviewDto) {
        return this.reviewService.updateReview(reviewId, updateReviewDto);
    }
    remove(reviewId) {
        console.log(reviewId);
        return this.reviewService.removeReview(reviewId);
    }
};
exports.ReviewController = ReviewController;
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiExcludeEndpoint)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "findAllReviews", null);
__decorate([
    (0, common_1.Get)('/book/:bookId'),
    (0, swagger_1.ApiOperation)({
        summary: '도서의 리뷰 불러오기',
        description: '특정 도서의 리뷰를 모두 불러옵니다.',
    }),
    (0, swagger_1.ApiParam)({
        name: 'bookId',
        description: '리뷰를 불러오고 싶은 도서의 아이디',
        type: Number,
    }),
    (0, swagger_1.ApiOkResponse)({
        type: review_entity_1.ReviewEntity,
        isArray: true,
    }),
    __param(0, (0, common_1.Param)('bookId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "findReviews", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({
        summary: '새로운 리뷰 생성하기',
        description: '새로운 리뷰를 작성합니다',
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                bookId: {
                    type: 'number',
                    description: '도서 ID',
                },
                content: {
                    type: 'string',
                    description: '리뷰 내용',
                },
                author: {
                    type: 'string',
                    description: '작성자',
                },
            },
        },
    }),
    (0, swagger_1.ApiCreatedResponse)({
        type: review_entity_1.ReviewEntity,
        description: '생성된 리뷰를 반환합니다',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_review_dto_1.CreateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':reviewId'),
    (0, swagger_1.ApiOperation)({
        summary: '리뷰 수정하기',
        description: '특정 리뷰를 수정합니다',
    }),
    (0, swagger_1.ApiParam)({
        name: 'reviewId',
        description: '수정하려는 리뷰의 아이디',
        type: Number,
    }),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                content: {
                    type: 'string',
                    description: '리뷰 내용',
                    nullable: true,
                },
                author: {
                    type: 'string',
                    description: '작성자',
                    nullable: true,
                },
            },
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        type: review_entity_1.ReviewEntity,
        description: '수정된 리뷰를 반환합니다',
    }),
    __param(0, (0, common_1.Param)('reviewId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_review_dto_1.UpdateReviewDto]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':reviewId'),
    (0, swagger_1.ApiOperation)({
        summary: '리뷰 삭제하기',
        description: '특정 리뷰를 삭제합니다',
    }),
    (0, swagger_1.ApiParam)({
        name: 'reviewId',
        description: '삭제하려는 리뷰의 아이디',
        type: Number,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: '리뷰이 삭제되었습니다',
    }),
    (0, swagger_1.ApiNotFoundResponse)({
        description: '삭제하려는 리뷰이 존재하지 않습니다',
    }),
    __param(0, (0, common_1.Param)('reviewId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ReviewController.prototype, "remove", null);
exports.ReviewController = ReviewController = __decorate([
    (0, swagger_1.ApiTags)('Review (리뷰 관련 API)'),
    (0, common_1.Controller)('review'),
    __metadata("design:paramtypes", [review_service_1.ReviewService])
], ReviewController);
//# sourceMappingURL=review.controller.js.map