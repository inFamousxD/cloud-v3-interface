export interface ExplorerDirectoriesPaneInterface {
    disableSelection?: boolean;
    data: ExplorerDirectoriesDataType;
}

export type ExplorerDirectoriesDataType = {
    name: string,
    children?: ExplorerDirectoriesListItemType[],
    type?: string,
    createdOn?: Date;
}

export type ExplorerDirectoriesListItemType = {
    id: string,
    name: string,
    children?: ExplorerDirectoriesListItemType[];
}