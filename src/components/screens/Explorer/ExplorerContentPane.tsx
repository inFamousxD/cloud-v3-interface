import React from "react";
import {ExplorerContentPaneStyled, ExplorerHeaderStyled} from "./Explorer.styles";
import {Editor} from "@monaco-editor/react";
import {darkTheme} from "../../../theme/dark.colors";

const ExplorerContentPane: React.FC = () => {
    return (
        <ExplorerContentPaneStyled>
            <ExplorerHeaderStyled>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
                        return  <div className={"tab"}>
                            <span className="material-symbols-outlined type">article</span>
                            <div className={"title"}>FileName {item}</div>
                            <span className="material-symbols-outlined close">close</span>
                        </div>
                    })
                }
            </ExplorerHeaderStyled>
            <Editor defaultLanguage="javascript" defaultValue="" theme={"vs-dark"} options={{
                fontSize: 13,
                codeLens: true
            }}
                onMount={(editor, monaco) => {
                    monaco.editor.defineTheme('my-theme', {
                        base: 'vs-dark',
                        inherit: true,
                        rules: [],
                        colors: {
                            'editor.background': darkTheme.backgroundDarker,
                        },
                    });

                    monaco.editor.setTheme("my-theme");
                }}
            />
        </ExplorerContentPaneStyled>
    )
}

export default ExplorerContentPane;