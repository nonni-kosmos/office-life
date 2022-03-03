import type { NextPage } from 'next'
import SceneOne from '../scenes/SceneOne'

const Home: NextPage = () => {
  return (
    <main className='absolute top-0 left-0 h-screen w-full bg-green'>
      <SceneOne />
    </main>
  )
}

export default Home
