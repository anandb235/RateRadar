import {useTheme} from "../Hooks/useTheme";
import ChartPlaceholderLight from "./chart_placeholder_light.png"
import ChartPlaceholderDark from "./chart_placeholder_dark.png"
import TablePlaceholderLight from "./table_placeholder_light.png"
import TablePlaceholderDark from "./table_placeholder_dark.png"
import {Loader} from "semantic-ui-react";
import 'semantic-ui-css/components/loader.css';

export const TablePlaceHolder = () => {
    const {lightMode, themeLoading} = useTheme();

    return <div className="table-placeholder">
        <div>All coins you add will show up here</div>
        {
            themeLoading ?
                <div className="placeholder-loader-container">
                    <Loader active inline='centered'/>
                </div> :
                <img src={lightMode ? TablePlaceholderLight : TablePlaceholderDark} alt="No Chart Data"></img>
        }

    </div>
}

export const ChartPlaceHolder = () => {
    const {lightMode, themeLoading} = useTheme();
    return <div className="table-placeholder">
        {
            themeLoading ?
                <div className="placeholder-loader-container">
                    <Loader active inline='centered'/>
                </div> :
                <img src={lightMode ? ChartPlaceholderLight : ChartPlaceholderDark} alt="No Chart Data"></img>
        }
        <div>Add a coin to view the trends</div>
    </div>
}