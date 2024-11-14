import LoginForm from './Component/LoginForm/LoginForm';
import CustomerLogin from './Component/LoginForm/CustomerLogin';
import { UIPanel } from './constrants/UIPanel';
import { useSelector } from "react-redux";
import AdminDashboard from './Component/MainPanel/AdminDashboard';
import HeaderPanel from './Component/Header/HeaderPanel';
import LeftPanel from './Component/LeftPanel/LeftPanel';
import React from 'react';
import LeftPanelPlaceHolder from './Component/LeftPanel/LeftPanelPlaceHolder';
import './App.css';
import BookingDetails from './Component/MainPanel/BookingDetails';
import Dispatch from './Component/MainPanel/Dispatch';

function App() {
  const appUIState = useSelector((state) => state.appUIState);
  const [isLeftPanelMaximized, setLeftPanelMaximized] = React.useState(true);
  const isLogin = useSelector((state) => state.logisticState.isLogin);

  return (
    <>
      {isLogin ? (
        <div className={isLeftPanelMaximized ? "app-container space-maximum" : "app-container space-minimum"}>
          {isLeftPanelMaximized ? (
            <LeftPanel onClick={() => setLeftPanelMaximized(false)} />
          ) : (
            <LeftPanelPlaceHolder onClick={() => setLeftPanelMaximized(true)} />
          )}
          {appUIState.activePanel === UIPanel.AdminDashboard && <AdminDashboard />}
          {appUIState.activePanel === UIPanel.BookingDetails && <BookingDetails/>}
          {appUIState.activePanel === UIPanel.Dispatch && <Dispatch/>}
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
}

export default App;
