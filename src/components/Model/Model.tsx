import React, { useEffect } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { INpc } from '../../types'
import { useGameStore } from '@src/lib/store'

export interface IModel {
  active: boolean
  npc: INpc
}

const Model = ({ active, npc }: IModel) => {
  const materials = useLoader(MTLLoader, npc.model.mtl)
  const object = useLoader(OBJLoader, npc.model.obj, (loader) => {
    materials.preload()
    loader.setMaterials(materials)
  })

  const { camera } = useThree()

  object.rotation.set(npc.position[0], npc.position[1], npc.position[2])
  const VISIBLE = npc.scale

  const { questDialogOpen, npcColor } = useGameStore()

  console.log(questDialogOpen, npcColor)

  useEffect(() => {
    if (active && questDialogOpen) {
      object.scale.set(VISIBLE, VISIBLE, VISIBLE)
    } else {
      object.scale.set(0, 0, 0)
    }
  }, [active, questDialogOpen, npcColor])

  return (
    <>
      <primitive object={object} />
      <spotLight intensity={0.5} />
    </>
  )
}

export default Model
