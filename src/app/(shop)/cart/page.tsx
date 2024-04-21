import Link from "next/link";
import { Title } from "../../../components/ui/title/Title";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import { QuantitySelector } from "@/components";
import { priceAR } from "@/interfaces";
import { redirect } from "next/navigation";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function () {

    //if(productsInCart.length === 0)
    //    redirect('/empty')

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito de compras" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más items</span>
            <Link href="/" className="underline mb-5">
              Continua comprando
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
                  <p className="font-bold">{priceAR(product.price)}</p>
                  <QuantitySelector quantity={3} />
                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-xl p-7 shadow-xl h-fit">
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
                    <Link className="flex btn-primary justify-center" href="/checkout/address">Confirmar</Link>
                </div>
          </div>
        
        
        </div>
      </div>
    </div>
  );
}
