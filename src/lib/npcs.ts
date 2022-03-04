import { INpc } from '../types'
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
      {
        question: 'ZZZzzzZZZZzzz...',
        answer: 'Steini er steinrotaður',
      },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.3, -1, -3],
    scale: 3,
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
      {
        question:
          'Það verður einhver að bjarga Steina, hann þarf booster eftir fús tap',
        answer: 'OK',
      },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -1, -3],
    scale: 2,
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
      {
        question:
          'Hey þú! Ég er í alveg tómu tjónu. Ég finn ekki smjörið mitt, ég þarf það í kaffið.',
        answer: 'Ojjj, setur þú smjör í kaffið þitt?',
      },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [1, -5, 2],
    scale: 5,
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
      { question: 'Alltaf eitthvað sniðugt í eldhúsinu', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -3, -3],
    scale: 3,
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
      { question: 'Ekki trufla er að HAKKA', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.4, -10, 3],
    scale: 3,
  },
  {
    name: 'Þórhildur',
    idx: IndexMap.BLUE,
    color: ColorMap.BLUE,
    model: {
      obj: '/models/npcs/thorhildur/model.obj',
      mtl: '/models/npcs/thorhildur/model.mtl',
    },
    dialogs: [
      { question: 'Vertu velkominn í JÚNÍVERSINN', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.4, -10, 3],
    scale: 3,
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
      { question: 'Þettta er senior fundur pjakkur', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0, -3, -3],
    scale: 5,
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
      { question: 'Góður bjór', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [30, 0, 10],
    scale: 1.5,
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
      { question: 'Þessar hendur eru EVIL', answer: 'OK' },
      { question: 'blab!!!', answer: 'NO' },
    ],
    position: [0.2, -2, -3],
    scale: 4,
  },
]
