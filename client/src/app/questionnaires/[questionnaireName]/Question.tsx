import React from 'react';

type Props = {
    type: 'mcq' | 'input';
    question: object;
}

const Question = ({ type, question }: Props) => {
    console.log('logging type: ', type)
    if (type === 'mcq') {
        return <MultipleChoice />
    } else {
        return <Input />
    }
};

const MultipleChoice = () => {
    return (
        <p>multiple choice</p>
    )
}

const Input = () => {
    return (
        <p>input</p>
    )
}

export default Question;
