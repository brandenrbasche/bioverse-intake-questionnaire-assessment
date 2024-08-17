import { NextRequest, NextResponse } from 'next/server';
import {prisma} from "../../../../../lib/prisma";

export async function getQuestionnaireIdByName(request: NextRequest, questionnaireName: string | undefined) {
    try {
        const result = await prisma.questionnaire_questionnaires.findFirst({
            where: {
                name: questionnaireName,
            },
            select: {
                id: true
            }
        });

        request.headers.set('questionnaireId', JSON.stringify(result));
        return NextResponse.next();
    } catch (error) {
        console.error('Error fetching questionnaire ID: ', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}