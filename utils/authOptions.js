import { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions = {
    providers : [
        Credentials({
            name : "Credentials",
            credentials : {
                email : {label : "Email"},
                password : {label : "password"}
            },

            authorize(credentials, req) {
                // PERFORM DATABASE OPERATIONS

                if(credentials?.email === "admin@example.com" && credentials?.password === "password") {
                    return {
                        id : "1",
                        email : "admin@example.com" 
                    }
                }
            }
        })
    ]
}