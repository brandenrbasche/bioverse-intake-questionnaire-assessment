// @ts-nocheck
'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const QuestionnaireSelection = () => {
    const [questionnaireList, setQuestionnaireList] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchQuestionnaireList = async () => {
            try {
                const response = await fetch('/api/questionnaire');
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                const data = await response.json();
                setQuestionnaireList(data);
            } catch (error) {
                console.error('Error fetching questionnaire list: ', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchQuestionnaireList();
    }, []);

    return (
        <div>
            <h1>Please select a questionnaire:</h1>
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ol>
                        {
                            questionnaireList.map((questionnaire) => (
                                <li key={questionnaire.id} className='w-full'>
                                    <Link href={`/questionnaires/${questionnaire.name}`}>
                                        <button>{questionnaire.name?.charAt(0).toUpperCase() + questionnaire.name?.slice(1)}</button>
                                    </Link>
                                </li>
                            ))
                        }
                    </ol>
                )
            }
        </div>
    );
};

export default QuestionnaireSelection;
