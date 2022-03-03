import create from 'zustand'

interface IStore {
  npcColor: string | null
  toggleNpcColor: (color: string) => void
  questDialogOpen: boolean
  toggleQuestDialog: (active: boolean) => void
}

export const useGameStore = create<IStore>((set) => ({
  npcColor: null,
  toggleNpcColor: (color: string) =>
    set(() => ({
      npcColor: color,
    })),

  // quest dialog
  questDialogOpen: false,
  toggleQuestDialog: (active) =>
    set(() => ({
      questDialogOpen: active,
    })),
}))
