import React, { useState } from 'react';

type Props = {
    question: object;
    questionNumber: number;
    questionId: number;
}

const Question = ({ question, questionNumber, questionId }: Props) => {
    return (
        <div>
            <h3><span className='font-medium'>{questionNumber}.</span> {question.question}</h3>
            {
                question.type === 'mcq'
                    ? <MultipleChoice questionNumber={questionNumber} question={question.question} options={question.options} />
                    : <TextInput questionId={questionId} />
            }
        </div>
    )
};

/**
 * Multiple Choice question component:
 */
type McqProps = {
    options: string[];
}
const MultipleChoice = ({ options }: McqProps) => {
    return (
        <div>
            {
                options.map((option, index) => (
                    <div>
                        <input type='checkbox' key={index} name={option}/>
                        <label htmlFor={option}>{option}</label>
                    </div>
                ))
            }
        </div>
    )
}

/**
 * Text input question component:
 */
type TextInputProps = {
    questionId: number;
}
const TextInput = ({ questionId }: TextInputProps) => {
    return (
        <textarea required id={questionId.toString()} />
    )
}

export default Question;
