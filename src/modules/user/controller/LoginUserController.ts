import { Request, Response } from 'express';
import { LoginUserService } from '../service/LoginUserService'; 

export class LoginUserController {

    async handle(request: Request, response: Response) {
        try {
            const { id, email, password } = request.body

            const loginService = new LoginUserService()

            // Execute o serviço de login para autenticar o usuário
            const token = await loginService.execute({ id, email, password})

            // Se a autenticação for bem-sucedida, retorne token JWT
            return response.json(token)
                } catch (error) {
            // Se ocorrer um erro, verificar se é uma instância de Error
            if (error instanceof Error){
                return response.status(401).json({ error: error.message})
            }

            // Se não for uma instância de Error, algo inesperado aconteceu 
            console.log("Erro inesperado:", error)
            return response.status(500).json({ error: "Erro interno no servidor"})
        }
    }
}