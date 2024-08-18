import { ModalMap } from "../types/modals"
import { MODAL_CLOSE, MODAL_OPEN, modalCloseAction, modalOpenAction } from "./action";
type ModalActions = modalOpenAction | modalCloseAction


export interface UIState {
    modal: ModalMap;
}

const MODALS: ModalMap = {
    TestModal: {
      id: 'TestModal',
      open: false
    },
    LoginModal: {
      id: 'LoginModal',
      open: false,
      meta: {
        user: 'fedor'
      }
    }
};


const initialState: UIState = {
    modal: MODALS
}

export default function (
    state: UIState = initialState,
    action: ModalActions
): UIState {
    switch (action.type) {
        case MODAL_OPEN: {
            const id = action.payload.modalFileName
            const meta = action.payload.meta;
            return {
                ...state,
                modal: {
                    ...state.modal,
                    [id]: { id, meta, open: true }
                }
            }
        }
        case MODAL_CLOSE: {
            const id = action.payload.modalFileName
            return {
                ...state,
                modal: {
                    ...state.modal,
                    [id]: { id, open: false }
                }
            }
        }
        default:
            return state
    }
}