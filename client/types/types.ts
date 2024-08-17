export type UserResponse = {
    question_id: Number;
    type: string;
    response: 'mcq' | 'input';
}

export interface QuestionProps {
    question: any;
    questionNumber: number;
    questionId: number;
    handleFormChange: (response: any) => void;
}

export interface McqProps {
    options: string[];
    handleFormChange: (response: string[]) => void;
}

export interface TextInputProps {
    questionId: number;
    handleFormChange: (response: string) => void;
}