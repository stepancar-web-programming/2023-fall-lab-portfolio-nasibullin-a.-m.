import React, { ReactNode } from 'react';

interface IArticleProps {
    title?: string;
    children: ReactNode;
}
export const Article: React.FC<IArticleProps> = (props) => {
    return (
        <div className={'pt-6'}>
            {props.title && <div className={'text-gray-600 pb-4 text-2xl underline'}>{props.title}</div>}
            {props.children}
        </div>
    );
};
