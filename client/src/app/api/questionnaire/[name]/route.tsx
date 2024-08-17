import {NextRequest, NextResponse} from "next/server";
import {prisma} from "../../../../../lib/prisma";
import { getQuestionnaireIdByName } from "./middleware";

/**
 * Returns all questions based on the questionnaire id passed into request body.
 * @param req
 * @param res
 * @constructor
 */
export async function GET(req: NextRequest, res: NextResponse, ) {
    try {
        const url = new URL(req.url);
        const name = url.pathname.split("/").pop()?.toLowerCase();
        console.log('PATHNAME: ', name)
        await getQuestionnaireIdByName(req, name);
        const questionnaireId = JSON.parse(req.headers.get('questionnaireId')).id;

        const questions = await prisma.questionnaire_junction.findMany({
            where: {questionnaire_id: questionnaireId},
            select: {
                questionnaire_questions: {
                    select: {
                        id: true,
                        question: true,
                    }
                }
            }
        });

        // console.log('LOGGING QUESTIONS: ', questions);
        return NextResponse.json(questions);
    } catch (error) {
        console.error('Error fetching list of questions: ', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
