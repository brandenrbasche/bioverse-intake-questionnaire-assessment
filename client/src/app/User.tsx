import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {LogoutButton} from "@/app/auth";

export const User = async () => {
    const session = await getServerSession(authOptions);
    const userName = session?.user?.name;
    // console.log('client session: ', session)
    return (
        <div className='flex items-center justify-between mb-5'>
            <h3>Welcome, {userName}.</h3>
            <LogoutButton/>
        </div>
    )
}