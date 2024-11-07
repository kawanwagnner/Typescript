import express, {Request, Response} from "express";
import { IUser } from "./types/user";

const nome: String = "Kawan";

const app = express();

app.use(express.json())

app.use("/criar", (req: Request, res: Response) => {
    const {nome, endereco, senha} = req.body;

    const usuario: IUser = {
        nome,
        endereco,
        senha
    }
})