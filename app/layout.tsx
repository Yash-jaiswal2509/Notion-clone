import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-providers";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modal-providers";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Notion-Clone",
  description: "A notion clone app",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/logo-dark.png',
        href: '/logo-dark.png'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/logo.png',
        href: '/logo.png'
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <EdgeStoreProvider>
          <ConvexClientProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="notion-theme">
              <Toaster position="bottom-center" />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </ConvexClientProvider>
        </EdgeStoreProvider>
      </body>
    </html>
  );
}

