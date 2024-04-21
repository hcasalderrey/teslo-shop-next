import { titleFont } from "@/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="flex w-full text-xs mb-2 justify-center items-center">
     
        <Link href='/' className="mx-3">
            <span className={`${titleFont.className} antialiased font-bold`}>Mi-Catalogo</span>
            <span> | Consultas y Compras</span>
            <span> © {new Date().getFullYear()} </span>
        </Link>
        <Link className="mx-3" href={"#"}>Privacidad & Legal</Link> 
      </div>
      <div className="flex w-full text-xs mb-10 justify-center items-center">
     
        <Link href='https://www.hcsoluciones.com.ar'>
            <span className={`${titleFont.className} antialiased font-bold`}>by HC Soluciones</span>
            
        </Link>
        
      </div>
    </>
  );
};
