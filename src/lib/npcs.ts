import { INpc, ColorNames } from '../types'
import { ColorMap, IndexMap } from '@src/utlis'

export const Npcs: Record<ColorNames, INpc> = {
  YELLOW: {
    name: 'Steini',
    idx: IndexMap.YELLOW,
    color: ColorMap.YELLOW,
    model: {
      obj: '/models/npcs/steini/model.obj',
      mtl: '/models/npcs/steini/model.mtl',
    },
    dialogs: [
      { question: 'blabla?', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -1, -3],
  },
  GREEN: {
    name: 'Hafliði',
    idx: IndexMap.GREEN,
    color: ColorMap.GREEN,
    model: {
      obj: '/models/npcs/haflidi/model.obj',
      mtl: '/models/npcs/haflidi/model.mtl',
    },
    dialogs: [
      { question: 'blabla?', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -1, -3],
  },
  RED: {
    name: 'Nonni',
    idx: IndexMap.RED,
    color: ColorMap.RED,
    model: {
      obj: '/models/npcs/nonni/model.obj',
      mtl: '/models/npcs/nonni/model.mtl',
    },
    dialogs: [
      { question: 'blabla?', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -1, -3],
  },
  AQUA: {
    name: 'Sunna',
    idx: IndexMap.AQUA,
    color: ColorMap.AQUA,
    model: {
      obj: '/models/npcs/sunna/model.obj',
      mtl: '/models/npcs/sunna/model.mtl',
    },
    dialogs: [
      { question: 'blabla?', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -1, -3],
  },
  PINK: {
    name: 'Bjartur',
    idx: IndexMap.PINK,
    color: ColorMap.PINK,
    model: {
      obj: '/models/npcs/bjartur/model.obj',
      mtl: '/models/npcs/bjartur/model.mtl',
    },
    dialogs: [
      { question: 'blabla?', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -1, -3],
  },
}
