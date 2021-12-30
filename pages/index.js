import Head from 'next/head'
import Dice from 'react-dice-roll';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Roll the dice</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Dice rollingTime={3000} onRoll={(value) => console.log(value)} />
        <h1 className="text-center font-bold top-8 uppercase mt-12 text-lg">Dice Roll created by An Doan</h1>

      </main>


    </div>
  )
}
