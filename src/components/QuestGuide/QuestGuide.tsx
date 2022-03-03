import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGameStore } from '@src/lib/store'
import { npcs } from '@src/lib/npcs'

const QuestGuide = () => {
  const { toggleQuestDialog, questDialogOpen, npcColor } = useGameStore()

  const chosenNpc = npcs.find((npc) => npc.color === npcColor)

  if (questDialogOpen) {
    return (
      <button
        onClick={() => toggleQuestDialog(false)}
        className='absolute h-screen w-screen top-0 left-0 z-10'
      >
        {chosenNpc && (
          <div className='absolute bottom-0 left-0 p-10 text-2xl bg-black text-yellow-300'>
            <p>{chosenNpc.dialogs[0].question}</p>
          </div>
        )}
      </button>
    )
  } else return null
}

export default QuestGuide
