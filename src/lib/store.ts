import create from 'zustand'

interface IStore {
  npcColor: string
  pickNpc: (color: string) => void
  questDialogOpen: boolean
  openQuestDialog: (active: boolean) => void
}

export const useGameStore = create<IStore>((set) => ({
  // npc logic, -1 is
  npcColor: "",
  pickNpc: (color) =>
    set(() => ({
      npcColor: color,
    })),

  // quest dialog
  questDialogOpen: false,
  openQuestDialog: (active) =>
    set(() => ({
      questDialogOpen: active,
    })),
}))
