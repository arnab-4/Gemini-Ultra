import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import ThemeProvider from '@/components/ThemeProvider'
import StoreProvider from '@/components/StoreProvider'
import I18Provider from '@/components/I18nProvider'
import { Toaster } from '@/components/ui/toaster'
import { isUndefined } from 'lodash-es'

import 'katex/dist/katex.min.css'
import 'highlight.js/styles/a11y-light.css'
import './globals.css'

const HEAD_SCRIPTS = process.env.HEAD_SCRIPTS as string
const ENABLE_PROTECT = !isUndefined(process.env.ACCESS_PASSWORD) && process.env.ACCESS_PASSWORD !== ''

const APP_NAME = 'Gemini-Ultra'
const APP_DEFAULT_TITLE = 'Gemini-Ultra'
const APP_TITLE_TEMPLATE = '%s - PWA App'
const APP_DESCRIPTION =
  'Gemini AI is a revolutionary AI application designed to enhance your everyday life. From generating creative content to answering your questions, Gemini AI provides intelligent assistance, making your tasks easier and more efficient. Experience the power of AI at your fingertips.'

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  keywords: ['Gemini', 'Gemini Pro', 'Gemini 1.5', 'Gemini Chat', 'AI', 'voice', 'Free Chatgpt', 'Chatgpt'],
  icons: {
    icon: {
      type: 'image/svg+xml',
      url: './logo.svg',
    },
  },
  manifest: './manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  minimumScale: 1.0,
  maximumScale: 1.0,
  viewportFit: 'cover',
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>{HEAD_SCRIPTS ? <Script id="headscript">{HEAD_SCRIPTS}</Script> : null}</head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <StoreProvider isProtected={ENABLE_PROTECT}>
            <I18Provider>{children}</I18Provider>
          </StoreProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
