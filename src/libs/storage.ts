import AsyncStorage from '@react-native-community/async-storage';
class Storage {
  static instance = new Storage();
  store = async (key: string, value: any): Promise<boolean | string> => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.error('Error in store method, msg: ', error);
      throw Error(error);
    }
  };
  get = async (key: string): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (error) {
      console.error('Error in get method, msg: ', error);
      throw Error(error);
    }
  };
  remove = async (key: string): Promise<boolean | string> => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error in remove method, msg: ', error);
      throw Error(error);
    }
  };
  getAllKeys = async (): Promise<string[]> => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (error) {
      console.error('Error in getAllKeys method, msg: ', error);
      throw Error(error);
    }
  };
  getMulti = async (keys: string[]): Promise<[string, string | null][]> => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (error) {
      console.error('Error in getMulti method, msg: ', error);
      throw Error(error);
    }
  };
}

export default Storage;
