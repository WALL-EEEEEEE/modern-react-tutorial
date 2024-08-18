import {ModalMeta} from "../types/modals";


export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export type modalOpenAction = {
    readonly type: typeof MODAL_OPEN
    readonly payload: {
        modalFileName: string;
        meta: ModalMeta
    }
}

export type modalCloseAction = {
    readonly type: typeof MODAL_CLOSE;
    readonly payload: {
        modalFileName: string;
    }
}

export function openModal(modalFileName: string, meta: ModalMeta): modalOpenAction {
    console.log(modalFileName, meta)
    return {
        type: MODAL_OPEN,
        payload: {
            modalFileName,
            meta
        }
    }
}

export function closeModal(modalFileName: string): modalCloseAction {
    return {
        type: MODAL_CLOSE,
        payload: { modalFileName }
    };
}
