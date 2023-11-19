import React from 'react';
import { data } from './data.ts';
import { Article } from '../../components/UI/Article';
import { ArticleContent } from '../../components/UI/Article/ArticleContent';
import { ImageWidthType } from '../../components/UI/Image/ImageWidthType.ts';
import { Image } from '../../components/UI/Image';

export const Resume: React.FC = () => {
    return (
        <>
            <Article>
                <ArticleContent
                    left={
                        <Image
                            src={'https://i.ibb.co/9q92rwj/photo-2023-08-05-22-01-06.jpg'}
                            alt={'photo'}
                            widthType={ImageWidthType.FULL}
                        />
                    }
                    right={
                        <div>
                            <div className={'text-2xl font-bold'}>{data.name}</div>
                            <div className={'whitespace-pre-wrap'}>{data.aboutMe}</div>
                        </div>
                    }
                />
            </Article>
            <div className={'grid grid-cols-1'}>
                <Article title={data.first.title}>
                    <div>
                        <div className={'text-2xl font-bold'}>{data.first.position}</div>
                        <div className={'whitespace-pre-wrap'}>{data.first.content}</div>
                    </div>
                </Article>
                <Article title={data.second.title}>
                    <ArticleContent
                        left={<div className={'whitespace-pre-wrap'}>{data.second.left}</div>}
                        right={
                            <div>
                                <div className={'text-2xl font-bold'}>{data.second.right.place}</div>
                                <div className={'text-xl font-bold'}>{data.second.right.position}</div>
                                <div className={'whitespace-pre-wrap'}>{data.second.right.content}</div>
                            </div>
                        }
                    />
                </Article>
                <Article title={data.third.title}>
                    <ArticleContent
                        left={<div className={'whitespace-pre-wrap'}>{data.third.left}</div>}
                        right={
                            <div>
                                <div className={'text-2xl font-bold'}>{data.third.right.university}</div>
                                <div className={'whitespace-pre-wrap'}>{data.third.right.content}</div>
                            </div>
                        }
                    />
                </Article>
                <Article title={data.fourth.title}>
                    {data.fourth.data.map((x, index) => {
                        return <div key={index}>{x}</div>;
                    })}
                </Article>
                <Article title={data.fifth.title}>
                    <div className={'grid grid-cols-5 gap-4'}>
                        {data.fifth.data.map((x, index) => {
                            return (
                                <div className={'bg-gray-300 w-max rounded px-2'} key={index}>
                                    {x}
                                </div>
                            );
                        })}
                    </div>
                </Article>
            </div>
        </>
    );
};
