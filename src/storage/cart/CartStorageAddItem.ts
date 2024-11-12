import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import { cartStorageGetAll } from "./CartStorageGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CART_COLLECTION } from "@storage/storageConfig";

export const cartStorageAddItem = async (product: StorageCartItemProps) => {
  try {
    let stored = await cartStorageGetAll();

    const productExistentsInCart = stored.filter(item => (item.productId === product.productId) && (item.size === product.size));

    if (productExistentsInCart.length > 0) {
      stored = stored.map(item => {
        if (item.productId === productExistentsInCart[0].productId && item.size === productExistentsInCart[0].size) {
          item.quantity = Number(productExistentsInCart[0].quantity) + Number(product.quantity)
        }

        return item;
      });
    } else {
      stored.push(product);
    }

    const productsUpdated = JSON.stringify(stored);
    await AsyncStorage.setItem(CART_COLLECTION, productsUpdated);

    return stored;
  } catch (error) {
    throw error;
  }
}