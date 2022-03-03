import { INpc } from '../types'

export const Steini: INpc = {
  name: 'Steini',
  idx: 0,
  model: {
    obj: '/models/npcs/steini/model.obj',
    mtl: '/models/npcs/steini/model.mtl',
  },
  dialogs: [
    { question: 'blabla?', answer: 'OK' },
    { question: 'blab!!!', answer: 'NO' },
  ],
  position: [0.2, -1, -3],
}
