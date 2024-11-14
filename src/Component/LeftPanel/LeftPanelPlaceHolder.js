import * as React from "react"
import "./LeftPanel.css"
import DehazeIcon from '@mui/icons-material/Dehaze';

function LeftPanelPlaceHolder(props) {
    return (
            <div className="left-panel-outer-container left-panel-minimized">
                <div className="left-panel-header-minimized">
                    <div className="left-panel-restore-icon"><DehazeIcon style={{ cursor: "pointer" }} onClick={props.onClick} /></div>
                </div>
            </div>
    )
}

export default LeftPanelPlaceHolder;