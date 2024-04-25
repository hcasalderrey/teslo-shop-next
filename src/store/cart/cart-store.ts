import { CartProduct } from "@/interfaces"; 
import { create } from "zustand";
import { persist } from "zustand/middleware";

 

interface State {
    cart: CartProduct[]

    getTotalItems:() => number
    getSumaryInformation: () => {
        itemsInCart: number
        subTotal: number
        tax: number
        total: number
    }
    // methods
    addProductToCart: (product: CartProduct) => void
    updateProductQuantity: (product: CartProduct, quantity: number) => void
    removeProduct: (product: CartProduct) => void
    //clearCart: () => void
}


export const useCartStore = create<State>()(
    
    persist(

            (set,get) => ({
                cart: [],

                getTotalItems:() => {
                    const {cart} = get();
                    return cart.reduce((total, item) => total + item.quantity, 0)

                },

                getSumaryInformation() {
                    const {cart} = get();
                    const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0)
                    const subTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
                    const tax = subTotal * 0.21
                    const total = subTotal + tax
                    return {
                        itemsInCart,
                        subTotal,
                        tax,
                        total
                    }
                },

                addProductToCart: (product: CartProduct) => {
                    const {cart} = get();
                    const productInCart = cart.some(
                        (item) => (item.id === product.id && item.size === product.size)
                    );    
                    if(!productInCart){
                        set({ cart: [...cart, product] })
                        return
                    }    
                    const updateCartProduct = cart.map((item) => {
                        if(item.id === product.id && item.size === product.size)  {
                            return {
                                ...item,
                                quantity: item.quantity + product.quantity
                            }
                        }    
                        return item
                    })    
                    set({ cart: updateCartProduct }) 
                },

                updateProductQuantity: (product: CartProduct, quantity: number) => {
                    const {cart} = get();

                    const updateCartProducts = cart.map((item) => {
                        if(item.id === product.id && item.size === product.size)  {
                            return {...item, quantity}
                        }    
                        return item
                    })    

                    set({ cart: updateCartProducts })
                   

                },

                removeProduct: (product: CartProduct) => {
                    const {cart} = get();
                    const updateCartProducts = cart.filter((item) => !(item.id === product.id && item.size === product.size))
                    set({ cart: updateCartProducts })
                }

            }),
        
        {
            name:'shopping-cart',

        }
    )
)
