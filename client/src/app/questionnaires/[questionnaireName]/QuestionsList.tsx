'use client';
import { useState, useEffect } from 'react';
import Question from "@/app/questionnaires/[questionnaireName]/Question";

type Props = {
    name: string;
}

const Questions = ({ name }: Props) => {
    const [questionList, setQuestionList] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // GET request to /api/questionnaire/[name] to fetch all questions:
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`/api/questionnaire/${name}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                const data = await response.json();
                console.log('LOGGING DATA: ', data);
                setQuestionList(data);
            } catch (error) {
                console.error('Error fetching list of questions: ', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchQuestions();
    }, []);

    console.log('QUESTION LIST: ', questionList);

    return (
        <div>
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : (
                    questionList.map((question, index) => (
                        <Question key={`${question.id} ${index}`} type={question.type} question={question.question} />
                    ))
                )
            }
            {/*<h1>{formattedName} Intake Form</h1>*/}
        </div>
    );
};

export default Questions;
