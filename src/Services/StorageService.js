import {collection, getDocs, doc, updateDoc, addDoc, deleteDoc} from "firebase/firestore";
import {db} from "./FirebaseService";


export const getCachedData = (DATA_NAME, defaultValue) => {
    const data = localStorage.getItem(DATA_NAME)
    return data ? JSON.parse(data) : defaultValue;
}
export const setCachedData = (DATA_NAME, data) => {
    localStorage.setItem(DATA_NAME, JSON.stringify(data))
}
export const clearCachedData = (DATA_NAME) => {
    localStorage.removeItem(DATA_NAME)
}

export const addOwnedCrypto = (data) => {
    addDoc(collection(db, "ownedCrypto"), data)
        .then(() => console.log("Added to database"))
        .catch((e) => console.log("Error adding to database: ", e))
}

export const deleteOwnedCrypto = (data) => {
    deleteDoc(doc(db, "ownedCrypto", data.docId))
        .then(() => console.log("Deleted from database"))
        .catch((e) => console.log("Error deleting from database: ", e));
}

export const updateOwnedCrypto = (data) => {
    updateDoc(doc(db, "ownedCrypto", data.docId), {owned: data.owned})
        .then(() => console.log("Updated database"))
        .catch((e) => console.log("Error updating database: ", e));
}
