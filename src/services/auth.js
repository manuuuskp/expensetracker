import { auth } from "./../config/firebase-config";

const socialMediaAuth = (provider) => {
  return auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
      const user = result.user;
      console.log(user);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = result.credential;
      console.log(credential);
      const accessToken = credential.accessToken;
      console.log(accessToken);
      return result.user;
    })
    .catch((er) => {
      return er;
    });
};

export default socialMediaAuth;
