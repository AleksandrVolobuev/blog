import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/Footer/Footer'
import { baseUrl } from './site-config'
import Header from './components/Header/Header'
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Alexander Volobuev Portfolio',
    template: '%s | Alexander Volobuev',
  },
  description: 'Портфолио веб-разработчика: проекты, кейсы и блог.',
  openGraph: {
    title: 'Alexander Volobuev Portfolio',
    description: 'Проекты, кейсы и подход к разработке.',
    url: baseUrl,
    siteName: 'Alexander Volobuev Portfolio',
    locale: 'ru_RU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ru"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-7xl mx-4 mt-8 lg:mx-auto">
        <Header />
       <main className="flex-auto min-w-0 flex flex-col px-2 md:px-0 mt-[var(--header-height)]">
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
