import React from 'react'
import Model from '@src/components/Model'
import { Npcs } from '@src/lib/npcs'
import { useGameStore } from '@src/lib/store'
import * as THREE from 'three'
import { Colors } from '@src/utlis'
interface IQuestScene {
  activeColor: string
  activeDialog: boolean
}

const QuestScene = ({ activeColor, activeDialog }: IQuestScene) => {
  const Background = () => {
    const geo = new THREE.PlaneGeometry(1, 1)
    const mat = new THREE.MeshBasicMaterial({
      color: '#fff',
      side: THREE.DoubleSide,
    })

    const plane = new THREE.Mesh(geo, mat)

    plane.scale.set(10, 10, 2)
    plane.rotation.set(0, 225, 0)

    return <primitive object={plane} />
  }
  // TODO: Load models on mount

  if (!activeDialog) return null
  switch (activeColor) {
    case Colors.YELLOW:
      return (
        <>
          <Model active={activeDialog} npc={Npcs.YELLOW} />
          {/* <Background /> */}
        </>
      )
    case Colors.GREEN:
      return (
        <>
          <Model active={activeDialog} npc={Npcs.GREEN} />
          {/* <Background /> */}
        </>
      )
    case Colors.RED:
      return (
        <>
          <Model active={activeDialog} npc={Npcs.RED} />
          {/* <Background /> */}
        </>
      )
    case Colors.PINK:
      return (
        <>
          <Model active={activeDialog} npc={Npcs.PINK} />
          {/* <Background /> */}
        </>
      )
    case Colors.AQUA:
      return (
        <>
          <Model active={activeDialog} npc={Npcs.AQUA} />
          {/* <Background /> */}
        </>
      )
    default:
      return null
  }
}

export default QuestScene
