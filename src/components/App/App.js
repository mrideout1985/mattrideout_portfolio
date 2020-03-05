import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Projects from '../../pages/Projects'
import Blog from '../../pages/Blog'
import Writing from '../../pages/Writing';
import Layout from '../layout/Layout';
import Landing from "../../pages/Landing";


function App() {
  return (

    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/projects' component={Projects} />
          <Route path='/blog' component={Blog} />
          <Route path='/writing' component={Writing} />
        </Switch>
      </Layout>
    </Router>

  );
}

export default App;
