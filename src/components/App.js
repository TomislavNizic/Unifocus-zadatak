import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import TableView from './TableView';
import ChartView from './ChartView';
import NewRecord from './NewRecord';


const App = () => {
    return (
        <div className="container">
           <BrowserRouter>
               <div>
                   <Header/>
                   <Route exact path="/" component={TableView} />
                   <Route exact path="/table-view" component={TableView} />
                   <Route path="/table-view/new" component={NewRecord} />
                   <Route path="/chart-view" component={ChartView} />
               </div>
           </BrowserRouter>
        </div>
    );
};

export default App;

// Definiranje ruta