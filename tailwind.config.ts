import type { Config } from 'tailwindcss'

export default {
  theme: {
    extend: {
      colors: {
        cream: '#F8EFE6',
        dark: '#201E1E',
        'dark-light': '#101010',
        pink: '#F0ABAF',
        purple: '#9364A3',
        orange: '#E9A039',
        gold: '#FDCA02',
      },
      fontFamily: {
        heading: ['Antonio', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
} satisfies Config
