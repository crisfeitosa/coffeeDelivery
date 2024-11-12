import AsyncStorage from "@react-native-async-storage/async-storage";

import { StorageCartItemProps } from "@storage/dtos/storageCartItemProps";
import { CART_COLLECTION } from "@storage/storageConfig";

export const cartStorageGetAll = async () => {
  try {
    const storage = await AsyncStorage.getItem(CART_COLLECTION);
    const cart: StorageCartItemProps[] = storage ? JSON.parse(storage) : [];

    return cart;
  } catch (error) {
    throw error;
  }
};