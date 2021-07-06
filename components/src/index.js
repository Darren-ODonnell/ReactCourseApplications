import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

if (module.hot) {
    module.hot.accept();
  }

  //index
const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div> 
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
             
            <ApprovalCard>
                <CommentDetail 
                    author= "Sam" 
                    text="Hello" 
                    time= "Today at 6:00PM" 
                    avatar= {faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail  
                    author= "Alex" 
                    text="Howdy" 
                    time= "Today at 9:00PM" 
                    avatar= {faker.image.image()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail  
                    author= "Jane" 
                    text="Cheers" 
                    time= "Yesterday at 3:00PM" 
                    avatar= {faker.image.image()}
                />
            </ApprovalCard>

        </div>
    );
};



ReactDOM.render(<App />, document.querySelector('#root'))