import React from 'react'
import { useGameStore } from '@src/lib/store'
import { npcs } from '@src/lib/npcs'

const QuestGuide = () => {
  const { toggleQuestDialog, questDialogOpen, npcColor } = useGameStore()

  const chosenNpc = npcs.find((npc) => npc.color === npcColor)

  if (questDialogOpen) {
    return (
      <button
        onClick={() => toggleQuestDialog(false)}
        className='h-full w-full'
      >
        {chosenNpc && (
          <div className='absolute bottom-0 left-0 p-10 text-2xl bg-black text-left grid gap-5 '>
            <p className='text-yellow-300'>{`${chosenNpc.name}: ${chosenNpc.dialogs[0].question}`}</p>
            <p className='text-white'>{`Þú: ${chosenNpc.dialogs[0].answer}`}</p>
          </div>
        )}
      </button>
    )
  } else return null
}

export default QuestGuide
