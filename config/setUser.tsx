import { db } from "../config/firebase"
import { doc, getDoc, collection, setDoc } from "firebase/firestore"

export const setUser = async(email:string) => {
    const docRef = doc(db, "winemakers", `${email}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      /* console.log("Document data:", docSnap.data()); */
    } else {
      const userRef = collection(db, "winemakers");

      await setDoc(doc(userRef, `${email}`), {
        email: `${email}`,
      });
    }
}