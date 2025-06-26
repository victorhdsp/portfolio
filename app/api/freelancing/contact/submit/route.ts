import MailGun from 'mailgun.js';
import formData from 'form-data';
import { type NextRequest, NextResponse } from 'next/server';

const mailgun = new MailGun(formData);

const client = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
});

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json();

    const mailData = {
        from: `Freelancing Contact <contato@sandboxc1bd382a3f534c7abd7e0d2cf9131872.mailgun.org>`,
        to: email,
        subject: `Novo contato de ${name}, via formulário, no site victorhdsp.com (Freelancing)`,
        text: `Você recebeu uma nova mensagem de contato:\n\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`,
    };

    try {
        const response = await client.messages.create(
            'sandboxc1bd382a3f534c7abd7e0d2cf9131872.mailgun.org',
            mailData
        );

        return NextResponse.json({ id: response.id, message: 'E-mail enviado com sucesso!' }, { status: 200 });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        throw new Error('Erro ao enviar e-mail');
    }
}