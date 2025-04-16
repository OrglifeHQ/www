import * as React from "react";
import { ContactFormType } from "./ContactForm";

export const EmailTemplate: React.FC<Readonly<ContactFormType>> = ({
    name,
    email,
    message,
    phone,
    subject,
}) => (
    <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
        <p style={{ fontSize: 24 }}>Nmae: {name}!</p>
        <p style={{ fontSize: 16 }}>Phone: {phone}!</p>
        <p style={{ fontSize: 16 }}>Email: {email}!</p>
        <p style={{ fontSize: 16 }}>Message: {message}!</p>
    </div>
);
