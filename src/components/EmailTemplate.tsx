import { siteConfig } from "@/lib/config";
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Row,
    Column,
} from "@react-email/components";
import * as React from "react";

export const EmailTemplate = ({
    name = "John Doe",
    email = "john@example.com",
    phone = "+1 (555) 123-4567",
    message = "Hello, I would like to get in touch with you regarding your services.",
}) => {
    return (
        <Html>
            <Head />
            <Preview>New Contact Form Submission from {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={header as any}>
                        Contact Form Submission
                    </Heading>
                    <Hr style={hr} />
                    <Section style={section}>
                        <Row style={row}>
                            <Column>
                                <Text style={labelStyle as any}>Name:</Text>
                            </Column>
                            <Column>
                                <Text style={valueStyle}>{name}</Text>
                            </Column>
                        </Row>
                        <Row style={row}>
                            <Column>
                                <Text style={labelStyle as any}>Email:</Text>
                            </Column>
                            <Column>
                                <Text style={valueStyle}>{email}</Text>
                            </Column>
                        </Row>
                        <Row style={row}>
                            <Column>
                                <Text style={labelStyle as any}>Phone:</Text>
                            </Column>
                            <Column>
                                <Text style={valueStyle}>{phone}</Text>
                            </Column>
                        </Row>
                        <Hr style={hr} />
                        <Text style={labelStyle as any}>Message:</Text>
                        <Text style={messageStyle}>{message}</Text>
                    </Section>
                    <Hr style={hr} />
                    <Text style={footer as any}>
                        This email was sent from {siteConfig.company.name}
                        &apos;s website contact form.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
};

export default EmailTemplate;

// Styles
const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    padding: "40px 0",
};

const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #e6ebf1",
    borderRadius: "6px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
    margin: "0 auto",
    maxWidth: "600px",
    padding: "20px",
};

const header = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center",
    margin: "30px 0",
};

const section = {
    padding: "20px",
};

const row = {
    display: "flex",
    alignItems: "center",
    margin: "10px 0",
};

const labelStyle = {
    color: "#4f566b",
    fontSize: "16px",
    fontWeight: "bold",
    marginRight: "12px",
    marginBottom: "4px",
};

const valueStyle = {
    color: "#333",
    fontSize: "16px",
    margin: "0",
};

const messageStyle = {
    backgroundColor: "#f8f9fa",
    border: "1px solid #e6ebf1",
    borderRadius: "4px",
    color: "#333",
    fontSize: "16px",
    lineHeight: "1.6",
    margin: "10px 0 30px",
    padding: "12px",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const footer = {
    color: "#8898aa",
    fontSize: "14px",
    lineHeight: "24px",
    textAlign: "center",
    marginTop: "20px",
};
