/** @type {import('tailwindcss').Config} */
export const prefix = "tw-";
export const content = [
  "./src/**/*.{html,ts}",
];
export const theme = {
  extend: {
    fontFamily: {
      'dancing': ['"Dancing Script"', 'cursive'],
      
      'pacifico': ['"Pacifico"', 'cursive'],
     
    },
  },
};
export const plugins = [];

