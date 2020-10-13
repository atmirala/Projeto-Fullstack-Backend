import BaseDatabase from "./BaseDatabase";
import { User } from "../model/UserModel";

export default class UserDatabase extends BaseDatabase {
private static TABLE_NAME = "fullstack_user";

    public static createUser(
        id: string,
        name: string,
        email: string,
        nickname: string,
        password: string
    ):Promise<any> {
        try {
            await this.getConnection()
            .insert({
                id,
                name,
                email,
                nickname,
                password,
            })
            .into(UserDatabase.TABLE_NAME)
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
       
    }

    public async getUserByEmail(email:string):Promise<User|void>{
        const result = await this.getConnection()
            .select()
            .from(UserDatabase.TABLE_NAME)
            .where({email});
        await BaseDatabase.destroyConnection();

        return User.toUserModel(result[0]);
        
    }
}