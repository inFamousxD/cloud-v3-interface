import React from 'react';
import {NavigationDockStyled} from "./NavigationDock.styles";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../redux/store";
import mainDock from "../../../redux/slices/application/mainDock";

const NavigationDock: React.FC = () => {
    const navigate = useNavigate();
    const topOptions = useSelector((state: RootState) => state.mainDock.dockTopOptions);
    const bottomOptions = useSelector((state: RootState) => state.mainDock.dockBottomOptions);
    const selectedOption = useSelector((state: RootState) => state.mainDock.selected);
    const dispatch: AppDispatch = useDispatch();

    const dockOptionOnClick = (navigateTo: string, id: string) => {
        dispatch(mainDock.actions.selectFromDock({ selected: id }));
        navigate(navigateTo);
    }

    return (
        <NavigationDockStyled>
            {
                topOptions.map(option => {
                    return (
                        <div
                            key={option.id}
                            className={"material-symbols-outlined"}
                            id={(selectedOption === option.id ? "" : "un") + "selected"}
                            onClick={() => {dockOptionOnClick(option.navigatesTo, option.id);}}>
                            {option.icon}
                        </div>
                    )
                })
            }
            <div style={{ flex: 'auto' }} ></div>
            {
                bottomOptions.map(option => {
                    return (
                        <div
                            key={option.id}
                            className={"material-symbols-outlined"}
                            id={(selectedOption === option.id ? "" : "un") + "selected"}
                            onClick={() => {dockOptionOnClick(option.navigatesTo, option.id);}}>
                            {option.icon}
                        </div>
                    )
                })
            }
        </NavigationDockStyled>
    )
}

export default NavigationDock;