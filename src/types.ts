import { Vector2 } from 'three'

export type Dialoge = {
  question: string
  answer: string
}

export interface INpc {
  name: string
  idx: number
  model: {
    obj: string
    mtl: string
  }
  dialogs: Dialoge[]
  position: number[]
}
