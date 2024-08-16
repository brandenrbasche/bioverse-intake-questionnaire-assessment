declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            name: string,
            email: string,
            // custom properties:
            user_type: 'user' | 'admin'
        }
    }
}