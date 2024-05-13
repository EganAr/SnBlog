import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  addDoc,
  query,
  where,
  setDoc,
  limit,
  startAfter,
  deleteDoc,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from "./init";
import { getAuth, updateProfile } from "firebase/auth";

export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default async function retrieveData(collectionName: string) {
  const q = query(collection(firestore, collectionName));

  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

export async function retrieveDataBySearch(
  collectionName: string,
  search: string
) {
  const q = query(
    collection(firestore, collectionName),
    where("title" || "categories", ">=", search),
    where("title" || "categories", "<=", search + "\uf8ff")
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function addData(collectionName: string, data: any) {
  try {
    const collectionRef = collection(firestore, collectionName);
    const docRef = doc(collectionRef);
    await setDoc(docRef, {
      id: docRef.id,
      ...data,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function deleteData(id: string) {
  const docRef = doc(firestore, "Blog", id)
  await deleteDoc(docRef)
}

export async function retrieveDataByField(
  collectionName: string,
  field: string,
  value: string
) {
  const q = query(
    collection(firestore, collectionName),
    where(field, "==", value)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function retrieveDataByFieldWithLimit(
  collectionName: string,
  field: string,
  value: string,
  limit: any
) {
  const q = query(
    collection(firestore, collectionName),
    where(field, "==", value),
    limit(limit)
  );
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return data;
}

export async function upload(file: any, user: any) {
  const fileRef = ref(storage, user.uid + ".png");

  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(user, { photoURL });
}
