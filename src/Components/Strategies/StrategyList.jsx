import React from 'react';
import StrategyListNames from './StrategyListNames';

function StrategyList() {

    return (
        <div>
            <h1>Strategy List</h1>
            <hr />
            <ul>
                <StrategyListNames name="Increase Sales" />
                <StrategyListNames name="Decrease Expences" />
            </ul>
        </div>
    );
}

export default StrategyList;
