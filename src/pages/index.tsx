import Head from 'next/head'

import GameBoard from '@components/GameBoard';


export default function Home() {
  return (
    <>
      <Head>
        <title>Mini game</title>
        <meta name="description" content="Try yourself" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <GameBoard />
      </main>
    </>
  )
}
