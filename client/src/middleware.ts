export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] // Exclude API routes and common static assets
}

export { default } from "next-auth/middleware";