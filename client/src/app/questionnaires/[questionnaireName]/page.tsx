'use client';

import { useParams } from 'next/navigation';
import QuestionsList from "@/app/questionnaires/[questionnaireName]/QuestionsList";

export default function IntakeForm() {
    const params = useParams();
    // const questionnaireName: string | string[] = params.questionnaireName;
    const formattedName = params.questionnaireName?.charAt(0).toUpperCase() + params.questionnaireName.slice(1);

    return (
        <div>
            <h1>{formattedName} Intake Form</h1>
            <QuestionsList name={formattedName} />
        </div>
    )
}