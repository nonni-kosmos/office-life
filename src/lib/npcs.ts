import { INpc, ColorNames, ColorNames2 } from '../types'
import { ColorMap, IndexMap } from '@src/utlis'

export const npcs: INpc[] = [
  {
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
    position: [0.3, -1, -3],
  },
  {
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
  {
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
    position: [-12, -6, 16],
  },
  {
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
  {
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
    position: [0.4, -10, 3],
  },
]


export const npcsKitchen: INpc[] = [
   {
    name: 'Brian',
    idx: IndexMap.YELLOW,
    color: ColorMap.YELLOW,
    model: {
      obj: '/models/npcs/brian/model.obj',
      mtl: '/models/npcs/brian/model.mtl',
    },
    dialogs: [
      { question: 'blabla?', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -1, -3],
  },
 {
    name: 'paskabjor',
    idx: IndexMap.AQUA,
    color: ColorMap.AQUA,
    model: {
      obj: '/models/items/paskabjor/bjor.obj',
      mtl: '/models/items/paskabjor/bjor.mtl',
    },
    dialogs: [
      { question: 'blabla?', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -1, -3],
  },
  {
    name: 'stefan',
    idx: IndexMap.PINK,
    color: ColorMap.PINK,
    model: {
      obj: '/models/npcs/stefan/model.obj',
      mtl: '/models/npcs/stefan/model.mtl',
    },
    dialogs: [
      { question: 'blabla?', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -1, -3],
  },
]

