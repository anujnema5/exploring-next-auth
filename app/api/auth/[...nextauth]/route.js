// import NextAuth from "next-auth/next";
// import prisma from "../../../../libs/prisma";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import GithubProvider from "next-auth/providers/github";

const { authOptions } = require("@/utils/authOptions");
const { default: NextAuth } = require("next-auth/next");

// const authOptions = {
//     adapters: PrismaAdapter(prisma),
//     providers: [
//         GithubProvider({
//             clientId: process.env.GITHUB_ID,
//             clientSecret: process.env.SECRET
//         }),

//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.SECRET
//         }),

//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text", placeholder: "Email" },
//                 password: { label: "Password", placeholder: "Password" },
//                 username: { label: "Username", type: "username", placeholder: "Username" }
//             },

//             async authorize(credentials) {
//                 const user = { id: 1, name: "Anuj nema", email: "anujneyma@gmail.com" }
//                 return user;
//             },
//         }),
//     ],
//     secret: process.env.SECRET,
//     session: {
//         strategy: "jwt",
//     },
//     debug: process.env.NODE_ENV = "development",
// }

// const handler = NextAuth(authOptions)
// export {handler as GET, handler as POST}

const handler = NextAuth(authOptions)
export {handler as GET,handler as POST}

























