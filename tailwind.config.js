import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            colors: {
                oDarkBlue: {
                    '50': '#f1f7fd',
                    '100': '#dfeefa',
                    '200': '#c6e1f7',
                    '300': '#9ecff2',
                    '400': '#70b4ea',
                    '500': '#4f96e2',
                    '600': '#3a7bd6',
                    '700': '#3167c4',
                    '800': '#2d54a0',
                    '900': '#2a497e',
                    '950': '#18253f',
                },
                oLightBlue: {
                    '50': '#f2fbfa',
                    '100': '#d3f4f1',
                    '200': '#a7e8e3',
                    '300': '#73d5d1',
                    '400': '#3faaaa',
                    '500': '#2d9d9f',
                    '600': '#227b7f',
                    '700': '#1f6266',
                    '800': '#1d4e52',
                    '900': '#1c4345',
                    '950': '#0b2428',
                },
                oGreen: {
                    '50': '#fafce9',
                    '100': '#f4f8cf',
                    '200': '#e7f2a4',
                    '300': '#d5e86e',
                    '400': '#c0d942',
                    '500': '#afce26',
                    '600': '#7e9818',
                    '700': '#607417',
                    '800': '#4c5c18',
                    '900': '#414e19',
                    '950': '#212b08',
                },
                oDarkBg: '#0e0e11'

            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
