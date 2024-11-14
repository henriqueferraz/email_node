import { RequestHandler } from "express";
import { sendEmail } from "../libs/mailtrap";


export const forgot: RequestHandler = async (req, res) => {
    const { email } = req.body;

    // Verificar se  o email existe, se é um usuário valido, gerar código...

    await sendEmail(email, 'Titulo do email', 'Corpo do email');

    console.log(email);

    res.json({});
}