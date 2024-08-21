import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    // @ts-ignore
    const session = await getServerSession(authOptions);
    // @ts-ignore
    const isAdmin = session?.user.user_type === 'admin';

    console.log('logging active session: ', session?.user);

    if (isAdmin) {
        console.log('User is an admin.');
        return (
            <>
                <h1 className='mt-4'>Admin Dashboard</h1>
                <p className='italic'>Display user responses and allow admins to explore results in detail.</p>
            </>
        )
    } else {
        console.log('User is not an admin. Redirecting to intake selection page.');
        return redirect('/questionnaires');
    }
}