import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export async function GET(request: Request) {
    // @ts-ignore
    const session = await getServerSession(authOptions);
    return NextResponse.json({ authenticated: !!session })
}