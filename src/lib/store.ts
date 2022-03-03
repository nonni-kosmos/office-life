import create from 'zustand'

interface IStore {
  npcActive: number
  pickNpc: (idx: number) => void
  questDialogOpen: boolean
  openQuestDialog: () => void
}

export const useGameStore = create<IStore>((set) => ({
  // npc logic, -1 is
  npcActive: 0,
  pickNpc: (idx) =>
    set(() => ({
      npcActive: idx,
    })),

  // quest dialog
  questDialogOpen: false,
  openQuestDialog: () =>
    set((state) => ({
      questDialogOpen: !state.questDialogOpen,
    })),
}))
