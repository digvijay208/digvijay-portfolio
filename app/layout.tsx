import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Portfolio | Full Stack Developer",
  description:
    "Personal portfolio showcasing projects, skills, and experience as a Full Stack Developer.",
  keywords: ["portfolio", "developer", "full stack", "react", "nextjs"],
  authors: [{ name: "Your Name" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Portfolio | Full Stack Developer",
    description: "Personal portfolio showcasing projects, skills, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var themeVer = localStorage.getItem('themeVersion');
                  var theme = localStorage.getItem('theme');
                  // v2 migration: first time with the new dark-first default, reset to dark
                  if (themeVer !== '2') {
                    theme = 'dark';
                    localStorage.setItem('theme', 'dark');
                    localStorage.setItem('themeVersion', '2');
                  }
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
