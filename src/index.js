import './index.css';
// import * as serviceWorker from './serviceWorker';

// constants
const CLICK_EVENT = 'click';

// state
const state = {
  clicks: 0,
};

// elements
const elements = {
  button: document.getElementById('button'),
  counter: document.getElementById('counter'),
};

// views
const views = {
  renderCounter: () => {
    elements.counter.innerText = state.clicks.toLocaleString();
  },
};

// actions
const actions = {
  incrementCounter: (number = 1) => {
    state.clicks += number;
    views.renderCounter();
  },
};

// events
elements.button.addEventListener(CLICK_EVENT, () => {
  actions.incrementCounter();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
