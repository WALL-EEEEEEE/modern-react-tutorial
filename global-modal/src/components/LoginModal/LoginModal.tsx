import { BaseModal } from "../BaseModal"


export interface ILoginModalProps {
    onClose?: ()=>void
}

export default function LoginModal(props: ILoginModalProps) {
    return (
        <BaseModal title="Login Modal" show closeOnTap>
                I'm a login Modal
        </BaseModal>
    )
}