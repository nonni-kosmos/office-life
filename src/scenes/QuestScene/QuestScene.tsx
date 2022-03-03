import React from 'react'
import Model from '@src/components/Model'
import { Steini } from '@src/lib/npcs'
import { useGameStore } from '@src/lib/store'
import * as THREE from 'three'

const QuestScene = () => {
  const { questDialogOpen } = useGameStore()

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

  return (
    <>
      <Model active={questDialogOpen} npc={Steini} />
      <Background />
    </>
  )
}

export default QuestScene
