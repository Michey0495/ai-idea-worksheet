import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI活用アイデアシート',
  description: 'ウォーターフォール開発の上流工程でAIツールを活用するためのアイデアシート',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  )
}

