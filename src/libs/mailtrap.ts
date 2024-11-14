import { MailtrapClient } from "mailtrap"

export const sendEmail = async (to: string, subject: string, body: string) => {

    const options = {
        token: process.env.MAILTRAP_TOKEN as string,
        // testInboxId usar esse atributo para envio de email em teste
        testInboxId: 2470192
    };

    const mailtrap = new MailtrapClient(options);

    try {

        // testing usar esse atributo para envio de email em teste
        await mailtrap.testing.send({
            from: { name: 'Ofnet', email: 'Ofnet@ofnet.com.br' },
            to: [{ email: to }],
            subject,
            text: body,
            html: body
        });

        return true;
    } catch (error) {
        return false;
    }
}