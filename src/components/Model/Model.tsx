import React, { useEffect, useMemo } from 'react'
import { useLoader } from '@react-three/fiber'
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { INpc } from '../../types'

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

  object.rotation.set(npc.position[0], npc.position[1], npc.position[2])

  const VISIBLE = 1

  object.scale.set(VISIBLE, VISIBLE, VISIBLE)

  useMemo(() => {
    if (active) {
      object.scale.set(VISIBLE, VISIBLE, VISIBLE)
    } else {
      object.scale.set(0, 0, 0)
    }
    console.log(active)
  }, [active])

  return <primitive object={object} />
}

export default Model
