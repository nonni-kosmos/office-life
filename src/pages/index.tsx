import Audio from '@src/components/Audio'
import type { NextPage } from 'next'
import { useState } from 'react'
import SceneOne from '../scenes/SceneOne'

const Home: NextPage = () => {
  const [startGame, setStartGame] = useState(false)
  return (
    <main className='absolute top-0 left-0 h-screen w-full bg-black font-mono'>
      {startGame ? (
        <>
          <SceneOne />
          <Audio />
        </>
      ) : (
        <button
          className='h-screen w-full text-7xl text-yellow-400 uppercase'
          onClick={() => setStartGame(true)}
        >
          enter the júníverse
        </button>
      )}
    </main>
  )
}

export default Home
