export type UserResponse = {
    question_id: Number;
    type: string;
    response: 'mcq' | 'input';
}

export interface QuestionProps {
    question: object;
    questionNumber: number;
    questionId: number;
    handleChange: (response: UserResponse) => void;
}

export interface McqProps {
    options: string[];
    handleFormChange: (response: string[]) => void;
}

export interface TextInputProps {
    questionId: number;
    handleFormChange: (response: string) => void;
}