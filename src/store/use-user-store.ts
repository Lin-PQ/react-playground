import { create } from 'zustand';

interface UserState {
  name: string;
  bears: number;
  increase: () => void;
  updateName: (name: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  name: 'Lynn',
  bears: 0,
  increase: () => set((state) => ({ bears: state.bears + 1 })),
  updateName: (name) => set({ name }),
}));
