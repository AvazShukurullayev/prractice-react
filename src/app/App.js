import React from 'react';
import CarTableData from "../components/car-table/CarTableData";
import SoddaSpa from "../components/sodda-spa/SoddaSpa";
import KeeperApp from "../components/keeper-app/KeeperApp";

const App = () => {
    return (
        <div className="app">
            <CarTableData/>
            <hr/>
            <SoddaSpa />
            <hr/>
            <KeeperApp />
            <hr/>
        </div>
    );
};

export default App;