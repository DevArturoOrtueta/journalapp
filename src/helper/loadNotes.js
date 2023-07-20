import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

 export const loadNotes = async(uid = '') => {
    if(!uid) throw new Error('No existe uid del usuario');

    const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`); //Cuando vamos a buscar dentro de una coleccion se debe usar collection y documentos usar doc, muy importante a a hora de llamar informacion o introducir informacion en firebase
    const docs = await getDocs(collectionRef);
    const notes = []
    docs.forEach( doc => {
        notes.push({id:doc.id, ...doc.data()})
    })

    return notes
 }