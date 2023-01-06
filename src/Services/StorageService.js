import {collection, getDocs, doc, updateDoc, addDoc, deleteDoc} from "firebase/firestore";
import {db} from "./FirebaseService";
import {DEFAULT_LOADING_TIMEOUT} from "../Data/Constants";


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

export const addOwnedCrypto = (data, setLoading, setError) => {
    addDoc(collection(db, "ownedCrypto"), data)
        .catch(() => setError(true))
        .finally(()=>{
            setTimeout(()=>setLoading(false), DEFAULT_LOADING_TIMEOUT)
        })
}

export const deleteOwnedCrypto = (data, setLoading, setError) => {
    deleteDoc(doc(db, "ownedCrypto", data.docId))
        .catch(() => setError(true))
        .finally(()=>{
            setTimeout(()=>setLoading(false), DEFAULT_LOADING_TIMEOUT)
        })
}

export const updateOwnedCrypto = (data, setLoading, setError) => {
    updateDoc(doc(db, "ownedCrypto", data.docId), {owned: data.owned})
        .then(() => console.log("Updated database"))
        .catch(() => setError(true))
        .finally(()=>{
            setTimeout(()=>setLoading(false), DEFAULT_LOADING_TIMEOUT)
        })
}
