import firebase from "../../../firebase";

export const logout = () => {
  firebase.auth().signOut();
};

export const login = (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signup = (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
};
