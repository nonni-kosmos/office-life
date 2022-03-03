import React from 'react'
import Model from '@src/components/Model'
import { Npcs, npcs } from '@src/lib/npcs'
import { useGameStore } from '@src/lib/store'
import * as THREE from 'three'
import { Colors } from '@src/utlis'
interface IQuestScene {
  activeColor: string
  activeDialog: boolean
}

const QuestScene = ({ activeColor, activeDialog }: IQuestScene) => {
  // TODO: Load models on mount

  const { npcColor } = useGameStore()

  return (
    <>
      {npcs.map((npc, key) => (
        <Model npc={npc} key={key} active={npcColor === npc.color} />
      ))}
    </>
  )

  // if (!activeDialog) return null
  // switch (activeColor) {
  //   case Colors.YELLOW:
  //     return (
  //       <>
  //         <Model active={activeDialog} npc={Npcs.YELLOW} />
  //         {/* <Background /> */}
  //       </>
  //     )
  //   case Colors.GREEN:
  //     return (
  //       <>
  //         <Model active={activeDialog} npc={Npcs.GREEN} />
  //         {/* <Background /> */}
  //       </>
  //     )
  //   case Colors.RED:
  //     return (
  //       <>
  //         <Model active={activeDialog} npc={Npcs.RED} />
  //         {/* <Background /> */}
  //       </>
  //     )
  //   case Colors.PINK:
  //     return (
  //       <>
  //         <Model active={activeDialog} npc={Npcs.PINK} />
  //         {/* <Background /> */}
  //       </>
  //     )
  //   case Colors.AQUA:
  //     return (
  //       <>
  //         <Model active={activeDialog} npc={Npcs.AQUA} />
  //         {/* <Background /> */}
  //       </>
  //     )
  //   default:
  //     return null
  // }
}

export default QuestScene
