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

    public async login(input: LoginInputDTO) {
        if (!input.email) {
          throw new Error("Email invalido!");
        }
    
        if (!input.password) {
          throw new Error("Digite sua senha");
        }
    
        const userDatabase = new UserDatabase();
        const user = await userDatabase.getUserByEmail(input.email);
    
        if (!user) {
          throw new Error("Conta invalida");
        }
    
        const hashManager = new HashManager();
        const isPasswordCorrect = await hashManager.compare(
          input.password,
          user.getPassword()
        );
    
        if (!isPasswordCorrect) {
          throw new Error("Senha ou usuário inválida");
        }
    
        const token = new Authenticator().generateToken({ id: user.getId() });
        return token;
      }
 
    //login precisa ser feito
   
}