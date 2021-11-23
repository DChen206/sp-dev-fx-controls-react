import { UUID } from "../components/ItemContext";
export interface InjectedPanelAttributes {
    role: string | undefined;
    'aria-hidden': boolean | undefined;
    'aria-labelledby': string;
    id: string;
    hidden: boolean | undefined;
}
export interface InjectedHeadingAttributes {
    role: string;
}
export interface InjectedButtonAttributes {
    id: string;
    'aria-controls': string;
    'aria-expanded': boolean;
    'aria-disabled': boolean;
    role: string;
    tabIndex: number;
}
export default class AccordionStore {
    readonly expanded: UUID[];
    readonly allowMultipleExpanded: boolean;
    readonly allowZeroExpanded: boolean;
    constructor({ expanded, allowMultipleExpanded, allowZeroExpanded, }: {
        expanded?: UUID[];
        allowMultipleExpanded?: boolean;
        allowZeroExpanded?: boolean;
    });
    readonly toggleExpanded: (uuid: string) => AccordionStore;
    readonly isItemDisabled: (uuid: string) => boolean;
    readonly isItemExpanded: (uuid: string) => boolean;
    readonly getPanelAttributes: (uuid: string, dangerouslySetExpanded?: boolean) => InjectedPanelAttributes;
    readonly getHeadingAttributes: () => InjectedHeadingAttributes;
    readonly getButtonAttributes: (uuid: string, dangerouslySetExpanded?: boolean) => InjectedButtonAttributes;
    private readonly getPanelId;
    private readonly getButtonId;
    private readonly augment;
}
//# sourceMappingURL=AccordionStore.d.ts.map