import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    findAllReviews(): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        author: string;
        bookId: number;
    }[]>;
    findReviews(bookId: number): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        author: string;
        bookId: number;
    }[]>;
    create(createReviewDto: CreateReviewDto): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        author: string;
        bookId: number;
    }>;
    update(reviewId: number, updateReviewDto: UpdateReviewDto): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        author: string;
        bookId: number;
    }>;
    remove(reviewId: number): Promise<void>;
}
