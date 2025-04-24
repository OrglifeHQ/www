import type { Metadata } from "next";
import { Space_Grotesk as Sans } from "next/font/google";
import "./index.css";
import { Navbar } from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";

const geistSans = Sans({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
    metadataBase: new URL("https://orglife.co.in"),
    title: siteConfig.company.name,
    description: "Find us on www.orglife.co.in",
    keywords: [
        "Orglife Industries Pvt. Ltd.",
        "Orglife",
        "Orglife Industries",
        "Orglife Industries Pvt. Ltd.",
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} bg-black text-white antialiased`}
            >
                <header className="w-full">
                    <Navbar />
                </header>
                <main className="w-full">{children}</main>
                <footer className="w-full">
                    <Footer />
                </footer>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            name: "Orglife Industries Pvt. Ltd.",
                            url: "https://orglife.co.in",
                            logo: "https://orglife.co.in/logo.png",
                        }),
                    }}
                />
            </body>
        </html>
    );
}
