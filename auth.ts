import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
// import Google from "next-auth/providers/google"
 
export const {
  handlers : {GET , POST},
  auth,
} = NextAuth({
  providers: [GitHub]
})