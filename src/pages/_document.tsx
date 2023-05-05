import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body className='scrollbar h-screen scrollbar-thumb-gray-900 overflow-y-visible scrollbar-track-gray-100 scrollbar-medium'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
