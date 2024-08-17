import React, { useState } from 'react';
import {QuestionProps, McqProps, TextInputProps, UserResponse} from "../../../../types/types";

const Question = ({ question, questionNumber, questionId, handleFormChange }: QuestionProps) => {
    return (
        <div>
            <h3><span className='font-medium'>{questionNumber}.</span> {question.question}</h3>
            {
                question.type === 'mcq'
                    ? <MultipleChoice handleFormChange={handleFormChange} questionNumber={questionNumber} question={question.question} options={question.options} />
                    : <TextInput handleFormChange={handleFormChange} questionId={questionId} />
            }
        </div>
    )
};

/**
 * Multiple Choice question component:
 */
const MultipleChoice = ({ options, handleFormChange }: McqProps) => {
    const mcqResponse: string[] = [];

    const updateMcqResponse = (option: string, checked: boolean) => {
        if (checked) {
            mcqResponse.push(option);
        } else {
            const i = mcqResponse.indexOf(option);
            i !== -1 && mcqResponse.splice(i, 1);
        }

        console.log('current response: ', mcqResponse);
        handleFormChange(mcqResponse);
    }

    return (
        <div>
            {
                options.map((option, index) => (
                    <div>
                        <input
                            onChange={(e) => updateMcqResponse(e.target.value, e.target.checked)}
                            type='checkbox'
                            key={index}
                            name={option}
                            value={option}
                        />
                        <label key={index} htmlFor={option}>{option}</label>
                    </div>
                ))
            }
        </div>
    )
}

/**
 * Text input question component:
 */
const TextInput = ({ questionId, handleFormChange }: TextInputProps) => {
    const handleTextInput = (response: string) => {
        console.log('logging response from text input: ', response);
        handleFormChange(response);
    }
    return (
        <textarea onBlur={(e) => handleTextInput(e.target.value)} required id={questionId.toString()} />
    )
}

export default Question;
