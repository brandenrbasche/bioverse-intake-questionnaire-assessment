import {getServerSession} from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import {NextResponse} from "next/server";

export default async function Dashboard() {

    const session = await getServerSession(authOptions)

    if (!session) {
        return new NextResponse(JSON.stringify({ error: 'unauthorized'}), {
            status: 401
        })
    }

    return (
        <p>admin panel works!</p>
    )
}