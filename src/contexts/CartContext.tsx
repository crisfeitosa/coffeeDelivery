import { createContext, ReactNode, useEffect, useState } from "react";

import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import { cartStorageAddItem } from "@storage/cart/CartStorageAddItem";
import { cartStorageRemoveItem } from "@storage/cart/CartStorageRemoveItem";
import { cartStorageRemoveAll } from "@storage/cart/CartStorageRemoveAll";
import { cartStorageGetAll } from "@storage/cart/CartStorageGetAll";

type CartContextData = {
  cart: StorageCartItemProps[];
  addProductCart: (product: StorageCartItemProps) => Promise<void>;
  removeProductCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

type CartProviderProps = {
  children: ReactNode;
} 

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<StorageCartItemProps[]>([]);

  async function addProductCart(product: StorageCartItemProps) {
    try {
      const storageResponse = await cartStorageAddItem(product);

      setCart(storageResponse);
    } catch(error) {
      throw error;
    }
  };

  async function removeProductCart(productId: string) {
    try {
      const response = await cartStorageRemoveItem(productId);
      setCart(response);

    } catch(error) {
      throw error;
    }
  };

  async function clearCart() {
    try {
      await cartStorageRemoveAll();
      setCart([]);
      
    } catch(error) {
      throw error;
    }
  };

  async function fetchCart() {
    try {
      const response = await cartStorageGetAll();
      setCart(response);
      
    } catch(error) {
      throw(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [cart]);

  return (
    <CartContext.Provider value={{
      cart, 
      addProductCart, 
      removeProductCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

