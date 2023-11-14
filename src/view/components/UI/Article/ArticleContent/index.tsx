import React, { ReactNode } from 'react';

export interface IActicleContentProps {
    left: ReactNode;
    right: ReactNode;
}
export const ArticleContent: React.FC<IActicleContentProps> = (props) => {
    return (
        <div className={'grid grid-cols-5 gap-10'}>
            <div className={'pt-1'}>{props.left}</div>
            <div className={'col-span-4'}>{props.right}</div>
        </div>
    );
};
