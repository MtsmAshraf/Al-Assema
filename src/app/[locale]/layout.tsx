import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import icon from "./favicon.ico"
import FloatContact from "@/components/FloatContact/FloatContact";


export const metadata: Metadata = {
  title: "Al Assema",
  description: "العاصمة لأنظمة الهواء المضغوط - Al Asema for Compressed Air Systems",
  icons: icon.src,
};

export default async function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string}
  
}>) {

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body >
        <NextIntlClientProvider messages={messages}>
          <Header lo={locale}></Header>
          {children}
          <FloatContact lo={locale}></FloatContact>
          <Footer lo={locale}></Footer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
