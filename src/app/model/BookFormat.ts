export class BookFormat {
    id: string;
    title: string;
    author: string;
    releaseDate: string;

    constructor (id: string, title: string, author, releaseDate: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.releaseDate = releaseDate;
    }
}