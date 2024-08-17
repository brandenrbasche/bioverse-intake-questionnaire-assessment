import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await getServerSession(authOptions);
    const isAdmin = session?.user.user_type === 'admin';

    console.log('logging active session: ', session?.user);

    if (isAdmin) {
        console.log('User is an admin.');
        return (
            <h1 className='mt-4'>Admin Dashboard</h1>
        )
    } else {
        console.log('User is not an admin. Redirecting to intake selection page.');
        return redirect('/questionnaires');
    }
}