import { PostgresDataSource } from "../../../db_config";
import { User } from "../../entities/User";
import { JWTService } from "./JWTService";
import bcrypt from 'bcryptjs';

type LoginUserRequest = {
    email: string
    password: string
    id: string
}

export class LoginUserService {
    async execute({ id, email, password }: LoginUserRequest): Promise<string>{
        const repo = PostgresDataSource.getRepository(User)

        // Verificar se o usuário com o e-mail fornecido existe
        const user = await repo.findOne({ where: { email }})
        if(!user) {
            throw new Error("Usuário não encontrado")
        }

        // Verificar se a senha fornecida corresponde à senha armazenada
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Senha incorreta");
        }

        // Criar e retornar um token JWT
        const token = JWTService.sign({ id: id } );
        if (token === "JWT_SECRET_NOT_FOUND") {
            throw new Error("Erro ao gerar token");
        }

        return token;
    }

}
