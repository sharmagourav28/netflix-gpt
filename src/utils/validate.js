export const checkValidData = (email, password, name) => {
  // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // if (!isNameValid) return "Name not valid";
  if (!isEmailValid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid";
  return "Login Successfully"; // usna null diya tha
};
