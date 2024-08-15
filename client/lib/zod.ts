// import { object, string } from "zod"
//
// export const signInSchema = object({
//     email: string({ required_error: "Email is required" })
//         .min(1, "Email is required")
//         .email("Invalid email"),
//     password: string({ required_error: "Password is required" })
//         .min(1, "Password is required")
//         .min(8, "Password must be more than 8 characters")
//         .max(32, "Password must be less than 32 characters"),
//     saltAndHashPassword: string (),
//     getUserFromDb: ({ email, pwHash }: { email: string; pwHash: string }) => {}
// })
//
// export const saltAndHashPassword = (password: string) => {
//     console.log('salt and hash password hit', password);
// }
//
// export const getUserFromDb = ((email: string, pwHash: string) => {
//     console.log('get user from db hit', email, pwHash);
// })