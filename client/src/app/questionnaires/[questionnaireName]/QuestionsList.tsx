'use client';
import { useState, useEffect } from 'react';
import Question from "@/app/questionnaires/[questionnaireName]/Question";
import { UserResponse } from "../../../../types/types";

type Props = {
    name: string;
}

const Questions = ({ name }: Props) => {
    const [questionList, setQuestionList] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [userResponses, setUserResponses] = useState({});

    const tempResponses = {
        user_id: 1, // todo: make dynamic
        questionnaire_id: 1, // todo: make dynamic
        responses: []
    };

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

    /**
     * @param response
     */
    // const handleFormChange = (response: UserResponse | string) => {
    const handleFormChange = (response: UserResponse) => {
        console.log('handle form change hit!');
        console.log('response: ', response);
    }

    // TODO: POST form data submission to database
    const handleSubmit = () => {
        console.log('form submitted!')
        alert('Are you sure you want to submit? Answers cannot be undone after submission.')
    }

    if (isLoading) return <p>Loading...</p>

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {
                    (questionList !== undefined) && (questionList.map((question, index) => (
                        <div className='mb-3'>
                            <Question
                                handleFormChange={handleFormChange}
                                questionId={question.questionnaire_questions.id}
                                key={question.questionnaire_questions.id}
                                questionNumber={index + 1}
                                question={question.questionnaire_questions.question}
                            />
                        </div>
                        ))
                    )

                }

                <button
                    className='bg-gray-100 border border-2 border-gray-500 hover:border-black hover:bg-white transition ease-in-out duration-300 px-5 py-2 rounded-md'
                    type='submit'>
                        Submit
                </button>
            </form>
        </div>
    );
};

export default Questions;
