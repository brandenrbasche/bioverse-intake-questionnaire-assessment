// import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";

// const secret = process.env.NEXTAUTH_SECRET;

// export async function middleware(req: NextRequest) {
//     // Check if user is authenticated:
//     const token = await getToken({ req, secret }); // get token (if available)
//
//     if (token) {
//         return NextResponse.redirect(new URL('/questionnaires', req.url));
//     }
// }

export { default } from "next-auth/middleware";