import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {User} from "@/app/user";
import {LoginButton, LogoutButton} from "@/app/auth";

export default async function Home() {
    const session = await getServerSession(authOptions);

    return (
      <main>
          <LoginButton />
          <LogoutButton />
          <h1>Server session</h1>
          <pre>{JSON.stringify(session)}</pre>
          <h1>Client call</h1>
          <User />
      </main>
  );
}
