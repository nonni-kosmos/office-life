import create from 'zustand'

interface IStore {
  npcColor: string | null
  toggleNpcColor: (color: string) => void
  questDialogOpen: boolean
  toggleQuestDialog: (active: boolean) => void
  activeScene: number
  toggleActiveScene: (scene: number) => void
}

export const useGameStore = create<IStore>((set) => ({
  npcColor: null,
  toggleNpcColor: (color: string) =>
    set((state) => ({
      npcColor: state.questDialogOpen ? state.npcColor : color,
    })),

  // quest dialog
  questDialogOpen: false,
  toggleQuestDialog: (active) =>
    set((store) => ({
      questDialogOpen: active,
      npcColor: !active ? '' : store.npcColor,
    })),

  // scene
  activeScene: 1,
  toggleActiveScene: (activeScene: number) =>
    set(() => ({
      activeScene,
    })),
}))
