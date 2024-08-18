import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ModalMeta } from "../types/modals"
import { closeModal, openModal } from "../store/action"
import { isModalOpen } from "../store/selector"
import { UIState } from "../store/reducer"

export function useModal(modalFile: string) {
    const dispatch = useDispatch()

    const onOpen = useCallback(
        (meta: ModalMeta) => {
            console.log(meta)
            dispatch(openModal(modalFile, meta))
        },
        [modalFile]
    );

    const onClose = useCallback(() => dispatch(closeModal(modalFile)), [modalFile])
    const isOpen = useSelector<UIState>((state) => isModalOpen(state, modalFile))
    return {
        isOpen, 
        onOpen, 
        onClose,
    }
}