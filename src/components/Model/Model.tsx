import React, { useEffect, useMemo } from 'react'
import { useLoader, useThree } from '@react-three/fiber'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { INpc } from '../../types'
import { useGameStore } from '@src/lib/store'
import { Vector3 } from 'three'

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

  const VISIBLE = 1

  const { questDialogOpen, npcColor } = useGameStore()

  console.log(questDialogOpen, npcColor)

  useEffect(() => {
    if (active && questDialogOpen) {
      // var ignore1 = new Vector3()
      // var ignore2 = new Vector3()
      // var front_vector = new Vector3()

      // // get the direction the camera is pointing at
      // camera.matrix.extractBasis(ignore1, ignore2, front_vector)

      // // put the camera at a negative distance from the object
      // camera.position.copy(object.position)
      // camera.position.addScaledVector(front_vector, 0)
      // camera.position.copy(object.position)

      object.scale.set(VISIBLE, VISIBLE, VISIBLE)
    } else {
      object.scale.set(0, 0, 0)
    }
  }, [active, questDialogOpen])

  return <primitive object={object} />
}

export default Model
