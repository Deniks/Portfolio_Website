import create from 'zustand';

export const useStore = create((set) => ({
  isHovered: false,
  setHover: () => set((state) => ({ isHovered: true })),
  removeHover: () => set((state) => ({ isHovered: false })),
}));
