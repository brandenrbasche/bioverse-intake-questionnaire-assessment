'use client';
import { useState, useEffect } from 'react';
import Question from "@/app/questionnaires/[questionnaireName]/Question";
import {map} from "zod";
import question from "@/app/questionnaires/[questionnaireName]/Question";

type Props = {
    name: string;
}

const Questions = ({ name }: Props) => {
    const [questionList, setQuestionList] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [formData, setFormData] = useState({})

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

    const handleFormChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
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
                                questionId={question.questionnaire_questions.id}
                                key={question.questionnaire_questions.id}
                                questionNumber={index + 1}
                                question={question.questionnaire_questions.question}
                            />
                        </div>
                        ))
                    )

                }

                <button className='bg-gray-100 border border-2 border-gray-500 hover:border-black hover:bg-white transition ease-in-out duration-300 px-5 py-2 rounded-md' type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Questions;
