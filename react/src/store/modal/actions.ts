import { ModalActionTypes } from "./types";

export const setVisible = (text: string) => ({
    type: ModalActionTypes.SET_VISIBLE_MODAL as const,
    payload: text,
});
  
export const setInvisible = () => ({
    type: ModalActionTypes.SET_INVISIBLE_MODAL as const
});