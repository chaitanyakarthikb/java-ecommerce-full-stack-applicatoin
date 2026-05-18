import { createContext, useState } from "react";

export const ProductContext = createContext<any>(null);

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
    const [products, setProducts] = useState<any>([]);
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
