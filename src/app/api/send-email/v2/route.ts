import { ContactFormType } from "@/components/ContactForm";
import { EmailTemplate } from "@/components/EmailTemplate";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const body: ContactFormType = await request.json();

    try {
        const { data, error } = await resend.emails.send({
            from: "Orglife contact form <onboarding@resend.dev>",
            to: ["vjpsrt1122@gmail.com"],
            subject: body.subject,
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
