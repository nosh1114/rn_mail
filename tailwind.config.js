/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}',
    "./node_modules/flowbite/**/*.js"
  ], // ここを追加
  theme: {
    extend: {}
  },
  plugins: [require('flowbite/plugin')]
};
