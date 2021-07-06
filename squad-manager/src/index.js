import React from 'react';
import ReactDOM from 'react-dom';
import SquadDetail from './components/SquadDetail';
if (module.hot) {
    module.hot.accept();
  }

  //index
const App = () =>{
    return (
        <div className="ui container comments">
           <SquadDetail />
        </div>
    );
};



ReactDOM.render(<App />, document.querySelector('#root'))