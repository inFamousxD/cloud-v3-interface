import {ExplorerDirectoriesDataType} from "../Explorer.types";
import React from "react";
import DirectoriesListItem from "./DirectoriesListItem";
import {DirectoriesHeaderStyled} from "./Directories.styled";

const DirectoriesList: React.FC<ExplorerDirectoriesDataType> = (props) => {
    const { children, name } = props;
    const [selected, setSelected] = React.useState<string>("");

    return (
        <div style={{ marginBottom: '30vh' }}>
            <DirectoriesHeaderStyled>
                <div className="material-symbols-outlined">
                    book_4
                </div>
                <div className={"item-name-block title"}>
                    { name }
                </div>
                <div style={{ flex: 'auto' }}></div>
                <div className="material-symbols-outlined">
                    new_window
                </div>
                <div className="material-symbols-outlined">
                    create_new_folder
                </div>
                <div className="material-symbols-outlined">
                    more_vert
                </div>
            </DirectoriesHeaderStyled>
            {
                children && children.map(item => {
                    return <DirectoriesListItem key={item.name} data={item} depth={0} selected={selected} setSelected={setSelected}/>
                })
            }
        </div>
    )
}

export default DirectoriesList;