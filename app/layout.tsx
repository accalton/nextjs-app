import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/app/ui/sidebar";
import Analytics from "@/app/ui/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Test NextJS App",
    description: "A custom NextJS app for testing all kinds of stuff!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
            <Analytics />
            <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
                <div className="w-full flex-none md:w-64">
                    <Sidebar />
                </div>
                <div className="flex-grow md:overflow-y-auto">{children}</div>
            </div>
            </body>
        </html>
    );
}
