import BaseDatabase from "./BaseDatabase";
import { Music } from "../model/MusicModel";

export default class MusicDatabase extends BaseDatabase {
    private static TABLE_NAME = "fullstack_music";

    public async createMusic(
        id: string,
        title: string,
        author: string,
        date: Date,
        file: string,
        genre: string,
        album: string
    ):Promise<any> {
        try {
            await this.getConnection()
            .insert({
                id,
                title,
                author,
                date,
                file,
                genre,
                album
            })
            .into(MusicDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
       
    }



}