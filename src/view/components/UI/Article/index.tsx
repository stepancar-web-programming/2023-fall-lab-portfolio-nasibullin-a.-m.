import React, { ReactNode } from 'react';

interface IArticleProps {
    title?: string;
    children: ReactNode;
}
export const Article: React.FC<IArticleProps> = (props) => {
    return (
        <div className={'pt-6'}>
            {props.title && <div className={'pb-4 text-2xl text-gray-600 underline'}>{props.title}</div>}
            {props.children}
        </div>
    );
};
