import { ContactFormType } from "@/components/ContactForm";
import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const body: ContactFormType = await request.json();

    try {
        const { data, error } = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["delivered@resend.dev"],
            subject: "Hello world",
            react: await EmailTemplate(body),
        });

        if (error) {
            console.log(error);
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        console.log(error);
        return Response.json({ error }, { status: 500 });
    }
}
