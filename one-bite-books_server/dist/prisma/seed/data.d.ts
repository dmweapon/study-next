interface ReviewData {
    author: string;
    content: string;
}
interface BookData {
    title: string;
    subTitle: string;
    description: string;
    author: string;
    publisher: string;
    coverImgUrl: string;
    reviews: ReviewData[];
}
export declare const seedData: BookData[];
export {};
