import { lazy, ReactNode, Suspense } from "react"
import { getModalsList } from "../store/selector"
import { useSelector } from "react-redux"
import { ErrorBoundary } from "../ErrorBoundary"

interface ILazyComponentProps {
    filename: string
    children?: ReactNode
}

function LazyComponent({ filename }: ILazyComponentProps) {
    const handleModalClose = () => console.warn("Hereby I promise to close this modal!")
    const DynamicComponent = lazy(() => import(`./${filename}/${filename}.tsx`))

    return (<Suspense fallback={null}>
        <ErrorBoundary>
            {filename ? (
                <DynamicComponent onClose={handleModalClose}></DynamicComponent>
            ) : null}
        </ErrorBoundary>
    </Suspense>)

}



interface IModalProviderProps {
    children: React.ReactNode
}

export function ModalProvider(props: IModalProviderProps) {
    const modals = useSelector(getModalsList)
    console.log(modals)
    return (
        <>
            { modals.map((filename) => {
               return <LazyComponent key={filename} filename={filename} />
            })}
            {props.children}
        </>
    )
}
