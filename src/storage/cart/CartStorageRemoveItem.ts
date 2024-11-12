import AsyncStorage from "@react-native-async-storage/async-storage";

import { cartStorageGetAll } from "./CartStorageGetAll";
import { CART_COLLECTION } from "@storage/storageConfig";

export const cartStorageRemoveItem = async (itemId: string) => {
  try {
    const stored = await cartStorageGetAll();

    const productsUpdated = stored.filter(item => item.id !== itemId);
    await AsyncStorage.setItem(CART_COLLECTION, JSON.stringify(productsUpdated));

    return productsUpdated;
  } catch (error) {
    throw error;
  }
}