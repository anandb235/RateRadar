import {useEffect, useState} from "react";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../services/FirebaseService";
import {DEFAULT_LOADING_TIMEOUT} from "../data/Constants";

export const useOwnedCrypto = () => {
    const [crypto, setCrypto] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "ownedCrypto"), (snapshot) => {
            const cryptoData = snapshot.docs.map(doc => ({
                docId: doc.id,
                ...doc.data()
            }));

            setCrypto(cryptoData)
            setTimeout(()=>setLoading(false),DEFAULT_LOADING_TIMEOUT);
        })

        return () => unsubscribe();
    }, [])

    return {crypto, loading};
}