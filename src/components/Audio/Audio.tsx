import { useGameStore } from '@src/lib/store'
import React from 'react'

const Audio = () => {
  const { activeScene } = useGameStore()

  if (activeScene === 0) {
    return <audio src='/music/harvest-dawn.mp3' autoPlay loop />
  }

  return <audio src='/music/sauroman.mp3' autoPlay loop />
}

export default Audio
