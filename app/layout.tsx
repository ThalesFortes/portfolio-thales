import type { Metadata } from "next";
import { Poppins, Yellowtail } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
  display: "swap",
});

// Substitui a Valencia (comercial, usada no site de referência) por uma
// script/brush font de licença aberta com a mesma vibe assinatura à mão.
const yellowtail = Yellowtail({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const siteUrl = "https://thalesfortes.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thales Fortes | Desenvolvedor Full-Stack & Web3",
  description:
    "Portfólio de Thales Fortes: desenvolvedor full-stack (Java/Spring Boot, React), Web3 verificável com contratos on-chain e automação de processos com IA e n8n. Prova, não promessa.",
  keywords: [
    "Thales Fortes",
    "desenvolvedor full-stack",
    "Java",
    "Spring Boot",
    "Web3",
    "Solidity",
    "React",
    "automação n8n",
    "IA",
  ],
  authors: [{ name: "Thales de Abreu Fortes da Silva" }],
  openGraph: {
    title: "Thales Fortes | Desenvolvedor Full-Stack & Web3",
    description:
      "Full-stack (Java/Spring Boot, React), Web3 verificável e automação com IA/n8n. Cada projeto tem prova checável, não só promessa.",
    url: siteUrl,
    siteName: "Thales Fortes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Thales Fortes | Desenvolvedor Full-Stack & Web3",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thales Fortes | Desenvolvedor Full-Stack & Web3",
    description:
      "Full-stack, Web3 verificável e automação com IA/n8n. Prova, não promessa.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${yellowtail.variable}`}>
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        <main id="conteudo">{children}</main>
      </body>
    </html>
  );
}
