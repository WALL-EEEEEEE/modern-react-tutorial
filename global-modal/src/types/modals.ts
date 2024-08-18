
export interface ModalMeta {
    [name: string]: any
}

export type ModalMap = {
    [name: string]: {
        id: string,
        open: boolean
        meta?: ModalMeta
    }
}



export type Modal = {
    id: string
    open: boolean
    meta?: ModalMeta
}