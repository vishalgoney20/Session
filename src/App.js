import React from 'react';
import './App.css';
import LinkCopyAndShare from './pages/LinkCopyAndShare'
//import NoInternet from './pages/NoInternet'
import { BrowserRouter, Route } from 'react-router-dom'
import ReactBreakpoints from 'react-breakpoints'
import ProspectContactForm from './pages/ProspectContactForm'


function App() {

  const breakpoints = {
    mobile: 320,
    mobileLandscape: 500,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1200,
    desktopLarge: 1500,
    desktopWide: 1920,
  }

  return (
    <BrowserRouter>
      <div className="App" >

        <ReactBreakpoints breakpoints={breakpoints}>
          <Route path="/" component={LinkCopyAndShare} />
        </ReactBreakpoints>

      </div>
    </BrowserRouter>
  );
}

export default App;



// <Route exact path="/" component={ProspectContactForm} />
// <ReactBreakpoints breakpoints={breakpoints}>
//   <Route path="/share" component={LinkCopyAndShare} />
// </ReactBreakpoints>

// {/* <Route path="/back" component={ProspectContactForm} /> */}


// {/* <Route path="/home/:id" component={Welcome} /> */}
// {/* <Route path="/example" component={ProspectContactForm} />
//   <Route path="/material" component={LinkCopyAndShare} />
//   <Route path="/draw" component={MaterialShare} /> */}