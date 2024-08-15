export { default } from 'next-auth/middleware';

export const config = { matcher: [
        '/src/app/:path*'
    ]
}