// Selectors
interface breadcrumb {
    show: boolean,
    name: string
}
interface InitialState {
    streamit: {
        breadcrumb: breadcrumb
    }
}
export const getBreadcrumb = (state: InitialState): breadcrumb => state.streamit.breadcrumb;