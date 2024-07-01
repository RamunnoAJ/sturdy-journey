import { Montserrat } from "next/font/google";
import "./globals.css";
import "./normalize.css";
import Header from "@/components/Header/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Prueba técnica",
  description:
    "Prueba técnica de desarrolador frontend en Security and System.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Header
          userName={"Agustin Ramunno"}
          userImage={
            "https://avatars.githubusercontent.com/u/99135134?s=400&u=4af9a4adc0d399f200ec18064b422b3d78261ada&v=4"
          }
        />
        {children}
      </body>
    </html>
  );
}
