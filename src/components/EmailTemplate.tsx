import * as React from "react";
import { ContactFormType } from "./ContactForm";

export const EmailTemplate: React.FC<Readonly<ContactFormType>> = ({
    name,
    email,
    message,
    phone,
    subject,
}) => (
    <div>
        <h1>Welcome, {name}!</h1>
    </div>
);
