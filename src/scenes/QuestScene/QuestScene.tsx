import React from 'react'
import Model from '@src/components/Model'
import { useGameStore } from '@src/lib/store'
import * as THREE from 'three'
import { INpc } from '../../types';
interface IQuestScene {
  npcs: INpc[]
}

const QuestScene = ({ npcs }: IQuestScene) => {
  // TODO: Load models on mount

  const { npcColor, questDialogOpen } = useGameStore()

  return (
    <>
      {npcs.map((npc, key) => (
        <Model
          npc={npc}
          key={key}
          active={npcColor === npc.color && questDialogOpen}
        />
      ))}
    </>
  )

}

export default QuestScene
