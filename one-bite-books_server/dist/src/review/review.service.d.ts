import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
export declare class ReviewService {
    private prisma;
    constructor(prisma: PrismaService);
    createReview(createReviewDto: CreateReviewDto): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        author: string;
        bookId: number;
    }>;
    findAllReviews(): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        author: string;
        bookId: number;
    }[]>;
    findBookReviews(bookId: number): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        author: string;
        bookId: number;
    }[]>;
    updateReview(reviewId: number, updateReviewDto: UpdateReviewDto): Promise<{
        id: number;
        createdAt: Date;
        content: string;
        author: string;
        bookId: number;
    }>;
    removeReview(reviewId: number): Promise<void>;
}
