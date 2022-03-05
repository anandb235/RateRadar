import {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../Services/FirebaseService";

export const useOwnedCrypto = () => {
    const [crypto, setCrypto] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "ownedCrypto"), (snapshot) => {
            const cryptoData = snapshot.docs.map(doc => ({
                docId: doc.id,
                ...doc.data()
            }));

            setCrypto(cryptoData)
        })

        return () => unsubscribe();
    }, [])

    return crypto;
}