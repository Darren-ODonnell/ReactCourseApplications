import React from 'react';
import PlayerDetail from './PlayerDetail';


const SquadDetail = () => {
    return (
        <div>
            <div className="Full Forwards">
                <PlayerDetail name= "Darren" position= "Full Forward" number= "15"/>
                <PlayerDetail name= "Darren" position= "Full Forward" number= "14"/>
                <PlayerDetail name= "Darren" position= "Full Forward" number= "13"/>
            </div>
            <div className="Half Forwards">
                <PlayerDetail name= "Darren" position= "Half Forward" number= "12"/>
                <PlayerDetail name= "Darren" position= "Half Forward" number= "11"/>
                <PlayerDetail name= "Darren" position= "Half Forward" number= "10"/>
            </div>
            <div className="MidField">
                <PlayerDetail name= "Darren" position= "MidField" number= "9"/>
                <PlayerDetail name= "Darren" position= "MidField" number= "8"/>
            </div>
            <div className="Half Back">
                <PlayerDetail name= "Darren" position= "Half Back" number= "7"/>
                <PlayerDetail name= "Darren" position= "Half Back" number= "6"/>
                <PlayerDetail name= "Darren" position= "Half Back" number= "5"/>
            </div>
            <div className="Full Back">
                <PlayerDetail name= "Darren" position= "Full Back" number= "4"/>
                <PlayerDetail name= "Darren" position= "Full Back" number= "3"/>
                <PlayerDetail name= "Darren" position= "Full Back" number= "2"/>
            </div>
            <div className="GoalKeeper">
                <PlayerDetail name= "Darren" position= "GoalKeeper" number= "1"/>
            </div>
            
        </div>

    );
}

export default SquadDetail;