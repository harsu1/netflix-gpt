export const checkValidData=(email, Password)=>{
 const isEmailValid=/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email);
 const isPasswordValid=/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm.test(Password);
 if(!isEmailValid) return "Email ID is not Valid";
 if(!isPasswordValid) return "Password is not valid";

return null;
};