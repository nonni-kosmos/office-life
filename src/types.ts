import { ColorMap } from '@src/utlis'
export type Dialoge = {
  question: string
  answer: string
}

export type ColorNames = 'YELLOW' | 'GREEN' | 'RED' | 'AQUA' | 'PINK' | "BLUE" | 'WHITE'
export type ColorNames2 = 'YELLOW' | 'AQUA' | 'PINK' | 'WHITE'

export interface INpc {
  name: string
  idx: number
  color: ColorMap
  model: {
    obj: string
    mtl: string
  }
  dialogs: Dialoge[]
  position: number[]
  scale: number
  translateX?: number
  translateY?: number
}
