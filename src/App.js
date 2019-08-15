import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CONTENT from './COMPONENT/content'


class App extends React.Component{


  render() {
    return (
      <div className='card text-center'>

        <div className="card-header">
              HEADER
        </div>
        <div className="card-body">
              <CONTENT />
        </div>
        <div className="card-footer text-muted">
         FOOTER
        </div>
      
      </div>
    )
  }


}
export default App;
