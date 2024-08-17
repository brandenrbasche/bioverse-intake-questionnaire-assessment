import {getServerSession} from "next-auth/next";
import { authOptions } from "../../lib/auth";
import {LogoutButton} from "@/app/auth";
import Link from "next/link";

export const User = async () => {
    const session = await getServerSession(authOptions);
    const userName = session?.user?.name;
    const isAdmin = session?.user?.user_type === "admin";

    return (
        <>
            <div className='flex items-center justify-between mb-5'>
                <h3>Welcome, {userName}.</h3>
                <div>
                    {
                        isAdmin && (
                            <Link
                                href={'/dashboard'}
                                className='mr-3'
                            >
                                <button>Admin Dashboard</button>
                            </Link>
                        )
                    }
                    <LogoutButton/>
                </div>
            </div>
            <hr className='border border-gray-300 w-full'/>
        </>

    )
}