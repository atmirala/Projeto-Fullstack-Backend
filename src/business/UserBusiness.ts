import { SignupInputDTO, LoginInputDTO } from "../model/UserModel";
import  UserDatabase  from "../data/UserDatabase";
import  IdGenerator  from "../services/IdGenerator";
import  HashManager  from "../services/HashManager";
import  Authenticator  from "../services/Authenticator";

export class UserBusiness {

    async createUser(user: SignupInputDTO) {

        const idGenerator = new IdGenerator();
        const id = idGenerator.generateId();

        const hashManager = new HashManager();
        const hashPassword = await hashManager.hash(user.password);

        const userDatabase = new UserDatabase();
        await userDatabase.createUser(id, user.email, user.name, user.nickname, hashPassword);

        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({ id });

        return accessToken;
    }

   
}