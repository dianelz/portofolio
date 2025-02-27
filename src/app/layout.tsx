import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <Navbar />
        <div className="container mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}