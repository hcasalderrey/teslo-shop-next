import Link from "next/link";
import { Title } from "../../../components/ui/title/Title";
import { ProductsInCart } from "./ui/ProductsInCart";
import { OrderSumary } from "./ui/OrderSumary";
 
 

export default function CartPage() {

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
            <ProductsInCart />
            
          </div>
          <div className="bg-white rounded-xl p-7 shadow-xl h-fit">
          <h2 className="text-2xl mb-2 font-bold">Resumen de Orden</h2>


                <OrderSumary />

                <div className="mt-5 w-full mb-2">
                    <Link className="flex btn-primary justify-center" href="/checkout/address">Confirmar</Link>
                </div>
          </div>
        
        
        </div>
      </div>
    </div>
  );
}
