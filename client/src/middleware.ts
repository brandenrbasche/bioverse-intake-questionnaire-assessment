export const config = {
    matcher: ['/((?!api).*)'] // Exclude API routes and common static assets
}

export { default } from "next-auth/middleware";