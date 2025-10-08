import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookService {
    private prisma;
    constructor(prisma: PrismaService);
    createBook(createBookDto: CreateBookDto): Promise<{
        id: number;
        title: string;
        subTitle: string;
        description: string;
        author: string;
        publisher: string;
        coverImgUrl: string;
    }>;
    findAllBooks(): Promise<{
        id: number;
        title: string;
        subTitle: string;
        description: string;
        author: string;
        publisher: string;
        coverImgUrl: string;
    }[]>;
    searchBooks(q?: string): Promise<{
        id: number;
        title: string;
        subTitle: string;
        description: string;
        author: string;
        publisher: string;
        coverImgUrl: string;
    }[]>;
    findRandomBooks(): Promise<unknown>;
    findOneBook(id: number): Promise<{
        id: number;
        title: string;
        subTitle: string;
        description: string;
        author: string;
        publisher: string;
        coverImgUrl: string;
    }>;
    updateBook(id: number, dto: UpdateBookDto): Promise<{
        id: number;
        title: string;
        subTitle: string;
        description: string;
        author: string;
        publisher: string;
        coverImgUrl: string;
    }>;
    removeBook(id: number): Promise<void>;
}
