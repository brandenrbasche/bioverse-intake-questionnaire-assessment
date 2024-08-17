import {NextRequest, NextResponse} from "next/server";
import {prisma} from "../../../../lib/prisma";

/**
 * Returns all questionnaires from the 'questionnaire_questionnaires' table.
 * @param request
 * @constructor
 */
export async function GET(request: NextRequest) {
    try {
        const questionnaires = await prisma.questionnaire_questionnaires.findMany();
        return NextResponse.json(questionnaires);
    } catch (error) {
        console.error('Error fetching questionnaire list: ', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}