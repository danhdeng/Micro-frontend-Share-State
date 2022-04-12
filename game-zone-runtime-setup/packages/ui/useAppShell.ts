import create from 'zustand';
import {persist} from 'zustand/middleware';
type store = {
  user: string | null;
  score: number;
  setUser: (user: string | null) => void;
  addToScore: (amount: number) => void;
};

export const useAppShell = create<store>(
    persist<store>(
    (set:any) => ({
        user: null,
        score: 0,
        setUser: (user: string | null) => set(() => ({ user })),
        addToScore: (amount:number) => set((state:any) => ({ score: state.score + amount })),
}),{
    name:"app-shell",
})
