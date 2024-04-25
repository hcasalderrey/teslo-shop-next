import Link from "next/link";
import { Title } from "../../../components/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import { QuantitySelector } from "@/components";
import { priceAR } from "@/utils";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>

            {productsInCart.map((product) => (
              <div className="flex mb-5" key={product.slug}>
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    height: "100px",
                    width: "100px",

                  }}
                  alt={product.title}
                  className="mr-5 rounded items-center content-center"
                />
                <div>
                  <p className="mb-5">{product.title}</p>
                  <p className="font-bold">{priceAR(product.price)} x 3</p>
                  
                  <button className="underline mt-3">Subtotal: {priceAR(product.price * 3 )}</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-7 shadow-xl">

                <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>

                <div className="mb-10">
                    <p className="text-xl font-semibold">Hernán Casalderrey</p>
                    <p>Calle 123</p>
                    <p>Córdoba</p>
                    <p>Argentina</p>
                    <p>CP: 123456</p>
                    <p>Teléfono: 123456789</p>
                    <p>Correo electrónico: hernan@hernan.com.ar</p>

                </div>

                <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />


                <h2 className="text-2xl mb-2 font-bold">Resumen de Orden</h2>
                <div className="grid grid-cols-2">
                    <span>No. de productos</span>
                    <span className="text-right">3 artículos</span>

                    <span>Subtotal</span>
                    <span className="text-right">$ 100</span>   

                    <span>Impuestos (21%)</span>
                    <span className="text-right">$ 21</span>

                    <span className="mt-5 text-2xl font-semibold">Total:</span>
                    <span className="mt-5 text-2xl font-semibold text-right">$ 121</span>
                </div>

                <div className="mt-5 w-full mb-2">
                    
                    <Link className="flex btn-primary justify-center" href="/orders/1234">Confirmar orden</Link>
                    <p className="mb-5 text-justify text-pretty">
                        <span className="text-gray-400 text-xs">
                            Al hacer clic aceptas nuestros 
                            <a className= "italic  text-gray-600" href="#"> términos y condiciones, </a> y 
                            <a className="italic  text-gray-600" href="#"> politicas de privacidad.</a>
                        </span>
                    </p>
                </div>
          </div>
        
        
        </div>
      </div>
    </div>
  );
}
