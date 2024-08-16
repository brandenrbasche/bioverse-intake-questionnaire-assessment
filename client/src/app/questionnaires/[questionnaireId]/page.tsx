'use client';
import { useParams } from 'next/navigation';
import QuestionsList from "@/app/questionnaires/[questionnaireId]/QuestionsList";

export default function QuestionnairePage() {
    const params = useParams();
    const questionnaireId = params.questionnaireId;
    console.log('logging params: ', params.questionnaireId);

    return (
        <div>
            <QuestionsList id={questionnaireId} />
            {/*<h1>{questionnaireName.charAt(0).toUpperCase() + questionnaireName.slice(1)} Questionnaire</h1>*/}

        </div>
    )
}