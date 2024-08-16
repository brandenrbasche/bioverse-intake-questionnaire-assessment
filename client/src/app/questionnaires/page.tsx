import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

// const prisma = new PrismaClient();

const QuestionnaireSelection = async () => {
    const prisma = new PrismaClient();
    const questionnaireList = await prisma.questionnaire_questionnaires.findMany();

    return (
        <div>
            <h1>Please select a questionnaire:</h1>
            <ol>
                {
                    questionnaireList.map((questionnaire) => (
                        <li key={questionnaire.id} className='w-full'>
                            <Link href={`/questionnaires/${questionnaire.id}`}>
                                <button>{questionnaire.name?.charAt(0).toUpperCase() + questionnaire.name?.slice(1)}</button>
                            </Link>
                        </li>
                    ))
                }
            </ol>
            {/*<QuestionnaireSelection questionnaireList={questionnaireList} />*/}
        </div>
    );
};

export default QuestionnaireSelection;
