import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const password = await hash('test1234', 12)

    // const user = await prisma.users.create({
    //     data: {
    //         // id: 1,
    //         name: 'Test user',
    //         email: 'anothertest@test.com',
    //         password,
    //         user_type: 'user'
    //     }
    // })
    //
    // console.log({ user });
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });