import { setVisible, setInvisible } from "./actions";

export interface ModalState {
    visible: boolean;
    text: string | null;
}

export enum ModalActionTypes {
    SET_VISIBLE_MODAL = 'SET_VISIBLE_MODAL',
    SET_INVISIBLE_MODAL = 'SET_INVISIBLE_MODAL',
}

export type ModalAction = ReturnType<typeof setVisible> | ReturnType<typeof setInvisible>;
