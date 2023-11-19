import { createBrowserRouter } from 'react-router-dom';
import { Resume } from '../view/pages/Resume';
import { Landing } from '../view/pages/Landing';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/resume',
        element: <Resume />,
    },
]);
