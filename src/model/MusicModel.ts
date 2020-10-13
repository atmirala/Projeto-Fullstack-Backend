export class Music {
    constructor(
        private musicId: string,
        private title: string,
        private author: string,
        private date: Date,
        private file: string,
        private genre: string[],
        private album: string
    ) {}

    getId() {
       return this.musicId;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getDate() {
        return this.date;
    }
    getFile() {
        return this.file;
    }
    getGenre() {
        return this.genre;
    }
    getAlbum() {
        return this.album;
    }
    
    setId(musicId: string) {
        this.musicId = musicId;
    }
    setTitle(title: string) {
        this.title = title;
    }
    setAuthor(author: string) {
        this.author = author;
    }    
    setDate(date: Date) {
        this.date = date;
    }
    setFile(file: string) {
        this.file = file;
    }
    setGenre(genre: string[]) {
        this.genre = genre;
    }
    setAlbum(album: string) {
        this.album = album;
    }
    
    toMusicModel(music:any): Music {
        return new Music(
            music.musicId,
            music.title,
            music.author,
            music.date,
            music.file,
            music.genre,
            music.album

        );
    }
}

export interface MusicInputDTO {
    musicId: string;
    title: string;
    author: string;
    date: Date;
    file: string;
    genre: string;
    album: string;
}

