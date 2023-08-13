import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface TipStore {
  bill: number | null;
  changeBill: (e: any) => void;
  tip: number | null;
  changeTip: (e: any) => void;
  customTip: number | null;
  staticChangeTip: (per: number) => void;
  numberOfPeople: number | null;
  changeNumberOfPeople: (e: any) => void;
  tipAmount: number;
  total: number;
  reset: () => void;
}

const useTipStore = create<TipStore>()(
  devtools((set) => ({
    bill: null,
    changeBill: (e) => {
      set(() => ({ bill: e.target.value }));
    },
    tip: null,
    staticChangeTip: (per) => {
      set(() => ({ tip: per, customTip: null }));
    },
    customTip: null,
    changeTip: (e) => {
      set(() => ({ customTip: e.target.value, tip: null }));
    },
    numberOfPeople: null,
    changeNumberOfPeople: (e) => {
      set(() => ({ numberOfPeople: e.target.value }));
    },
    tipAmount: 0.0,
    total: 0.0,
    reset: () => {
      set(() => ({ bill: 0, tip: 0, numberOfPeople: 0, customTip: 0 }));
    },
  }))
);

export default useTipStore;
