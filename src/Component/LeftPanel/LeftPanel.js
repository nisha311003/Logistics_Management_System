import * as React from "react";
import "./LeftPanel.css";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { UIPanel } from "../../constrants/UIPanel";
import { switchActivePanel } from "../../redux/AppUIStateReducer";

function LeftPanel(props) {
    const appUIState = useSelector((state) => state.appUIState);
    const dispatch = useDispatch();

    const switchPanel = (panel) => {
        dispatch(switchActivePanel(panel));
    }

    return (
        <div className="left-panel-outer-container left-panel-maximized">
            <div className="left-panel-header">
                <div className="left-panel-header-outer">
                    <span className="left-panel-header-text">Logistics Navigation</span>
                </div>
                <div className="left-panel-close-icon">
                    <CloseIcon style={{ cursor: "pointer" }} onClick={props.onClick} />
                </div>
            </div>
            <div className="left-panel-items-container">
                <div
                    className="left-panel-item-base left-panel-item"
                    onClick={() => switchPanel(UIPanel.AdminDashboard)}
                >
                    {appUIState.activePanel === UIPanel.AdminDashboard ? <b>Dashboard</b> : "Dashboard"}
                </div>
                <div
                    className="left-panel-item-base left-panel-item"
                    onClick={() => switchPanel(UIPanel.BookingDetails)}  // Booking Details navigation
                >
                    {appUIState.activePanel === UIPanel.BookingDetails ? <b>Booking Details</b> : "Booking Details"}
                </div>
                <div
                    className="left-panel-item-base left-panel-item"
                    onClick={() => switchPanel(UIPanel.Dispatch)}  // Booking Details navigation
                >
                    {appUIState.activePanel === UIPanel.Dispatch ? <b>Dispatch</b> : "Dispatch"}
                </div>
            </div>
        </div>
    );
}

export default LeftPanel;
