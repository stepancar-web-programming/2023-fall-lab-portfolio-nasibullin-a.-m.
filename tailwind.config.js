/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            sans: [['"Manrope Variable"', ...defaultTheme.fontFamily.sans]],
        },
        extend: {},
    },
    plugins: [],
};
