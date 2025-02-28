import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Diane Elzaabi | Portfolio</title>
        <meta name="description" content="Explore my work!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:title" content="Diane El Zaabi | Portfolio" />
        <meta property="og:description" content="Explore my portfolio,this website showcases my projects, skills, and experience in web development!" />
        <meta property="og:image" content="https://dianeelzaabi.com/preview.png" />
        <meta property="og:url" content="https://dianeelzaabi.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diane Elzaabi | Portfolio" />
        <meta name="twitter:description" content="Explore my portfolio,this website showcases my projects, skills, and experience in web development!" />
        <meta name="twitter:image" content="https://dianeelzaabi.com/preview.png" />
      </head>
      <body className="bg-background text-text">
        <Navbar />
        <div className="container mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
