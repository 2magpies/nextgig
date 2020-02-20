import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import VenueList from './components/venues/VenueList';
import AuditionList from './components/auditions/AuditionList';
import AuditionDetail from './components/auditions/AuditionDetail';
import PostAudition from './components/auditions/PostAudition';
import UpdateAudition from './components/auditions/UpdateAudition';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/home/NavigationBar';
import { Jumbotron } from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/venues" component={VenueList} />
            <Route path="/auditions" component={AuditionList} />
            <Route path="/auditions/:id" component={AuditionDetail} />
            <Route path="/post-audition" component={PostAudition} />
            <Route path="/update-audition" component={UpdateAudition} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
