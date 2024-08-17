import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import {prisma} from "../../../../../lib/prisma";
import {compare} from "bcrypt";

export const authOptions = {
    session: {
        strategy: 'jwt',
    },
    providers: [
        CredentialsProvider({
            name: 'Sign in',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'hello@example.com'
                },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) {
                    return null; // this tells Auth.js that there was in INVALID credentials set (the credentials simply weren't correct)
                }

                const user = await prisma.users.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                // If a user isn't found, return null
                if (!user) {
                    return null;
                }

                const isPasswordValid = await compare(credentials.password, user.password);

                if (!isPasswordValid) {
                    return null;
                }

                return {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    user_type: user.user_type
                }
            }
        })
    ],
    callbacks: {
        // handles session object passed around/used when fetching a session
        session: ({ session, token }) => {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    user_type: token.user_type
                }
            }
        },
        // handles creation and management of jwt
        jwt: ({ token, user}) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    user_type: u.user_type,
                }
            }

            return token;
        }
    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };