import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "TODO App",
    description:
        "A simple todo app for you to manage your tasks and be productive",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}
            >
                {children}
            </body>
        </html>
    );
}
