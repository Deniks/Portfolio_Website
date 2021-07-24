import create from 'zustand';

export const useStore = create((set) => ({
  isHovered: false,
  buttonColor: '',
  setHover: (buttonColor) => set((state) => ({ isHovered: true, buttonColor })),
  removeHover: () => set((state) => ({ isHovered: false })),
}));
