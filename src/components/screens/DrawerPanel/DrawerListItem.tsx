import React from 'react';
import {ExplorerDirectoriesListItemType} from "../ContentPanel/ContentPanel.types";
import {DirectoriesListItemStyled} from "./DrawerPanel.styled";

type DirectoriesListItemType = {
    data: ExplorerDirectoriesListItemType,
    depth: number,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>
}
const DrawerListItem:React.FC<DirectoriesListItemType> = (props) => {
    const { data, depth } = props;

    const [displayChildren, setDisplayChildren] = React.useState<boolean>(false);

    return (
        <DirectoriesListItemStyled $depth={depth} $hasChildren={data.children !== undefined} $isSelected={data.id === props.selected}>
            <div onClick={() => {
                props.setSelected(data.id)
            }} onDoubleClick={() => {
                data.children && setDisplayChildren(!displayChildren)
            }} className={"item-name-block"}>
                {displayChildren && <div onClick={() => {
                    setDisplayChildren(!displayChildren)
                }} className="material-symbols-outlined"> expand_more </div>}
                {!displayChildren && <div onClick={() => {
                    setDisplayChildren(!displayChildren)
                }} className="material-symbols-outlined expand-icon"> chevron_right </div>}
                {
                    !data.children && <div className="material-symbols-outlined type-icon"> article </div>
                }
                {
                    data.children && <div className="material-symbols-outlined type-icon"> folder </div>
                }
                <div className={"item-name"}>{ data.name }</div>
            </div>
            {
                displayChildren && data.children && data.children.map(item => {
                    return <DrawerListItem key={item.name} data={item} depth={depth+1} selected={props.selected} setSelected={props.setSelected} />
                })
            }
        </DirectoriesListItemStyled>
    );
}

export default DrawerListItem;