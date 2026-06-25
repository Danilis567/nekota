/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Tipografi eklentisinin renklerini ve stillerini özelleştiriyoruz
      typography: ({ theme }) => ({
        // 'prose-invert' class'ı kullanıldığında bu stiller geçerli olacak
        invert: {
          css: {
            '--tw-prose-body': 'rgba(255, 255, 255, 0.8)', // Paragraf rengi
            '--tw-prose-headings': theme('colors.white'), // Başlıklar (h1, h2, h3)
            '--tw-prose-lead': theme('colors.gray.300'),
            '--tw-prose-links': '#FFA800', // Linklerin rengi
            '--tw-prose-bold': '#FFA800', // Kalın yazıların rengi
            '--tw-prose-counters': '#FFA800', // Numaralı liste sayaçları
            '--tw-prose-bullets': '#FFA800', // Numarasız liste noktaları
            '--tw-prose-hr': 'rgba(255, 168, 0, 0.2)', // Yatay çizgi (<hr>) rengi
            '--tw-prose-quotes': theme('colors.gray.200'), // Alıntı metinleri
            '--tw-prose-quote-borders': '#FFA800', // Alıntıların solundaki çizgi
            '--tw-prose-captions': theme('colors.gray.400'),
            '--tw-prose-code': '#FFA800', // Kod blokları (`...`)
            '--tw-prose-pre-code': theme('colors.gray.300'),
            '--tw-prose-pre-bg': 'rgba(0, 0, 0, 0.2)', // Kod bloğu arka planı
            '--tw-prose-th-borders': theme('colors.gray.700'),
            '--tw-prose-td-borders': theme('colors.gray.800'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Tipografi eklentisini aktif et
  ],
}