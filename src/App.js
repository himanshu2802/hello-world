import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsDemoComponent from './components/PropsDemoComponent';
import StateDemoComponent from './components/StateDemoComponent';
import SetStateDemoComponent from './components/SetStateDemoComponent';
import EventOnFunctionalComponent from './components/EventOnFunctionalComponent';
import EventOnClassComponent from './components/EventOnClassComponent';
import EventBind from './components/EventBind';
import MethodAsPropsParentComponent from './components/MethodAsPropsParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import ListRendering from './components/ListRendering';
import FormComponent from './components/Form';
import RefDemo from './components/RefDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ClassComponent></ClassComponent> */}
        {/* <PropsDemoComponent name = "Bob" heroName = "Flop">
          <p> This is child element</p>
        </PropsDemoComponent>
        <PropsDemoComponent name = "Mob" heroName = "Hit">
          <button>Click Me</button>
        </PropsDemoComponent>
        <PropsDemoComponent name = "Job" heroName = "Super Hit"></PropsDemoComponent> */}

        {/* <StateDemoComponent></StateDemoComponent> */}

        {/* <SetStateDemoComponent></SetStateDemoComponent> */}

        {/* <EventOnFunctionalComponent></EventOnFunctionalComponent> */}

        {/* <EventOnClassComponent></EventOnClassComponent> */}

        {/* <EventBind></EventBind> */}

        {/* <MethodAsPropsParentComponent></MethodAsPropsParentComponent> */}

        {/* <ConditionalRendering></ConditionalRendering> */}

        {/* <ListRendering></ListRendering> */}

        {/* <FormComponent></FormComponent> */}

        <RefDemo></RefDemo>

      </div>
    );
  }
}

export default App;
