// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    media: false,
    theme: {
        extend: {
            colors: {
                'brand-500': '#6366f1',
                'brand-600': '#4F46E5',
                'loft-black': '#101828',
                'loft-primary': '#6B0E1D',
                'loft-danger': '#F04438',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
