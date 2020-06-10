# Rakuten.tv sample

## Installation and usage

1. `git clone https://github.com/gianpieroc/rakuten-tv.git`
2. `cd rakuten-tv`
3. `yarn install or npm install`
4. `yarn start`
5. Open localhost.rakuten.tv in your browser

## About

Project made using webpack, react, redux, and styled-components.

### Project structure: 
```
|-- node_modules/
|-- public/html                         --> DOM entry point
|-- src/
    |--api/                             --> Api connection (Used Classes to show inheritance)
        |--ApiGateway.js                --> Api Parent class (implements fetchapi)
        |--Streaming.js                 --> Streaming api implementation
        |--Movie.js                     --> Movie api implementation
        |--List.js                      --> List api implementation
    |--components/                      --> components used
    |--globalstyles/                    --> App theme
    |--pages/                           --> pages Container
    |--redux/                           --> All related to redux (store, sagas, actions, actiontypes, reducers) 
        |--store.js                     --> Redux store, used saga middlewares to listen actions
        |--sagas.js                     --> Sagas entry point
        |--actionTypes.js               --> action types
        |--rootReducer.js               --> reducers entry point
        |--list/                        --> list reducers, sagas, actions and selectors
        |--movie/                       --> movie reducers, sagas, actions and selectors
        |--streaming/                   --> streaming reducers, sagas, actions and selectors        
    |--routes/                          --> Project routes
    |--testUtils/                       --> Test suite adapted to the project (For Testing purposes)
        |--TestRouter.js                --> Router Component for testing purposes
        |--triggerActions.js           --> Module Pattern that defines a data structure to handle actions
        |--mockStore                   --> Store implementation for testing purposes
        |--actionWatcherMiddleware.js  --> middleware who record actions triggered
        |--__mocks__                   --> Mocks
        |--testRenderer                --> React testing library wrapper implementation
    |--utils/fetch-api                 --> FetchApi implementation (Promise race between a timeout and fetch api. To trigger timeouts)
    |--App.js                          --> Load provider and theme from styled components and App.styled
    |--App.styled.js                   --> Global styles
    |--constants                       --> constants used in the app
    |--index.js                        --> js entry point
    |--setupTests.js                   --> necessary for react testing library
   ``` 
   
### Introduction
  Webpack renders index.js as entry point. Then we add provider, theme, and routes (routes/index.js) in App.js
  
  To start working cleaner and expecting a good code quality, I added:
    1. eslint
    2. prettier
    3. husky: prepush mode: triggers coverage
              prepush mode: triggers eslint
    4. Coverage: 80% for statements,  except branches which has 70%
  
### ApiBuilder
  To show up inheritance in javascript, I created ApiGateway as parent Class in api folder. And Movie, Streaming, and List inherits from it
  
### TestUtils
  To use use react testing library wrapped with our mocked provider and router I created testRenderer that renders a component with all we should need to check if the app is executing the expected flow.
  
  Created actionWatcherMiddleware to use in our redux tests to create a queue of the actions executed to check if the flow of the app is working on redux side
  
  Used mocks to simulate real cases in our tests
  
  Added in actionWatcherMiddleware a module pattern located in triggerActions, that helps me to handle actions in tests easier

### Crossbrowser
  Added react-polyfill to work with multiple browsers

## Troubleshooting
  
  ### CORS
  ~WorkAround 1.~
    Assign 127.0.0.1 localhost.rakuten.tv in your hosts list
     https://support.rackspace.com/how-to/modify-your-hosts-file/
  
  ~WorkAround 2.~
   1. Install any CORS access app, in chrome could be: https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=es
   2. Add https://gizmo.rakuten.tv/ to the whitelist
  
  
  
