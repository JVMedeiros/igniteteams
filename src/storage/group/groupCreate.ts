import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await AsyncStorage.getItem("@group");
    const groups = storedGroups ? JSON.parse(storedGroups) : [];
    groups.push(newGroup);
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
  } catch (error) {
    throw error;
  }
}