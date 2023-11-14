import React from 'react';
import { Link } from 'react-router-dom';

export const Landing: React.FC = () => {
    return (
        <div className={'content-center'}>
            <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/sDh_kFP-ppk"></iframe>
            <Link className={'mt-5 flex justify-center'} to={'/resume'}>
                <button className={'bg-blue-400 rounded-full px-10 py-4 text-xl'}>Резюме</button>
            </Link>
        </div>
    );
};
