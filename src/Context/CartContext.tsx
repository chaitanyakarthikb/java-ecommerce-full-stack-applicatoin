import { createContext, useState } from "react";

export const CartContext = createContext<any>(null);

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<any>([]);

    return (
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    );
};