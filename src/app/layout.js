import { Poppins } from "next/font/google";
import "../styles/reset.css";
import "../styles/globals.css";

const poppins = Poppins({
  //variable: "--font-geist-sans",
  subsets: ["latin"], 
  weight: '400'
});



export const metadata = {
  title: "Triflix",
  description: "Site Triflix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${poppins}`}>
        {children}
      </body>
    </html>
  );
}
