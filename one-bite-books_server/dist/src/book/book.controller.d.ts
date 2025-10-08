import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    findAll(): Promise<{
        id: number;
        title: string;
        subTitle: string;
        description: string;
        author: string;
        publisher: string;
        coverImgUrl: string;
    }[]>;
    findSearchResult(q?: string): Promise<{
        id: number;
        title: string;
        subTitle: string;
        description: string;
        author: string;
        publisher: string;
        coverImgUrl: string;
    }[]>;
    findRandom(): Promise<unknown>;
    findOne(bookId: number): Promise<{
        id: number;
        title: string;
        subTitle: string;
        description: string;
        author: string;
        publisher: string;
        coverImgUrl: string;
    }>;
    create(createBookDto: CreateBookDto): Promise<{
        id: number;
        title: string;
        subTitle: string;
        description: string;
        author: string;
        publisher: string;
        coverImgUrl: string;
    }>;
    update(bookId: number, updateBookDto: UpdateBookDto): Promise<{
        id: number;
        title: string;
        subTitle: string;
        description: string;
        author: string;
        publisher: string;
        coverImgUrl: string;
    }>;
    delete(bookId: number): Promise<void>;
}
