import React from 'react';
import { PrismaClient } from "@prisma/client";

type Props = {
    id: number;
    // questionnaireName: string;
}

const Questions = ({ id }: Props) => {
    const prisma = new PrismaClient();



    // const questions = prisma.questionnaire_questions

    return (
        <div>
            <p>questions for {id}</p>
        </div>
    );
};

export default Questions;
