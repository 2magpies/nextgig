import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/home/Home';
import VenueList from './components/venues/VenueList';
import PostVenue from './components/venues/PostVenue';
import VenueDetail from './components/venues/VenueDetail';
import UpdateVenue from './components/venues/UpdateVenue';
import AuditionList from './components/auditions/AuditionList';
import AuditionDetail from './components/auditions/AuditionDetail';
import PostAudition from './components/auditions/PostAudition';
import UpdateAudition from './components/auditions/UpdateAudition';
import { NoMatch } from './components/NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/home/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/venues" component={VenueList} />
            <Route path="/post-venue" component={PostVenue} />
            <Route exact path="/venues/:id" component={VenueDetail} />
            <Route exact
              path="/venues/:id"
              render={props => <UpdateVenue {...props} />}
            />
            <Route exact path="/auditions" component={AuditionList} />
            <Route path="/auditions/:id" component={AuditionDetail} />
            <Route exact
              path="/post-audition"
              render={props => <PostAudition {...props} />}/>
              
            <Route exact path="/update-audition/:id" component={UpdateAudition} />
            
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
