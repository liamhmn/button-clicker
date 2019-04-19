import './index.css';
// import * as serviceWorker from './serviceWorker';

/** Constants. */
const CLICK = 'click';
const BUTTON = 'button';

/** State. */
const state = {};

// clicks
state.clicks = {
  current: 0,
  total: 0,
};

// cursor
state.cursor = {
  owned: 1,
  cost: {
    base: 50,
    rate: 2,
  },
  output: {
    base: 2,
    current: 1,
  },
};

// generators
state.generators = {
  generatorA: {
    label: 'Generator A',
    owned: 0,
    delay: 10,
    cost: {
      base: 25,
      rate: 1.15,
    },
    output: {
      base: 1,
      current: 0,
    },
  },

  generatorB: {
    label: 'Generator B',
    owned: 0,
    delay: 5,
    cost: {
      base: 100,
      rate: 1.1,
    },
    output: {
      base: 1,
      current: 0,
    },
  },

  generatorC: {
    label: 'Generator C',
    owned: 0,
    delay: 3,
    cost: {
      base: 200,
      rate: 1.07,
    },
    output: {
      base: 1,
      current: 0,
    },
  },
};

// set `next` value for cursor `cost` and `output`
state.cursor.cost.next = state.cursor.cost.base;
state.cursor.output.next = state.cursor.output.base;

// set `next` value for generators `cost` and `output`
Object.keys(state.generators).forEach(id => {
  const generator = state.generators[id];
  generator.cost.next = generator.cost.base;
  generator.output.next = generator.output.base;
});

/** Elements. */
const elements = {
  button: document.getElementById('button'),
  counter: document.getElementById('counter'),
  cursor: document.getElementById('upgrade'),
  store: document.getElementById('store'),
};

// add generators to table
Object.keys(state.generators).forEach(id => {
  const generatorNode = elements.cursor.cloneNode(true);
  generatorNode.id = id;
  const button = generatorNode.querySelector(BUTTON);
  const { label } = state.generators[id];
  button.title = label;
  button.innerText = label;
  elements.store.appendChild(generatorNode);
});

/** Helpers. */

/**
 * @param  {Number} base
 * @param  {Number} rate
 * @param  {Number} owned
 * @return {Number}
 */
const calculateNextCost = (base, rate, owned) => {
  return Math.floor(base * Math.pow(rate, owned));
};

/**
 * @param  {String}      id
 * @return {HTMLElement}
 */
const getElementById = id => {
  return elements[id]
    ? elements[id]
    : (elements[id] = document.getElementById(id));
};

/**
 * @param  {Number} clicks
 * @param  {Number} seconds
 * @return {String}
 */
const formatGeneratorOutput = (clicks, seconds) => {
  return [
    clicks.toLocaleString(),
    clicks === 1 ? 'click' : 'clicks',
    'per',
    seconds.toLocaleString(),
    seconds === 1 ? 'second' : 'seconds',
  ].join(' ');
};

/** Views. */
const views = {
  renderCounter: () => {
    elements.counter.innerText = state.clicks.current.toLocaleString();
  },

  renderCursor: () => {
    const cursorRow = elements.cursor;
    const { cursor } = state;
    cursorRow.querySelector('.owned').innerText = (
      cursor.owned - 1
    ).toLocaleString();
    cursorRow.querySelector(
      '.cost'
    ).innerText = cursor.cost.next.toLocaleString();
    cursorRow.querySelector(
      '.output-current'
    ).innerText = `${cursor.output.current.toLocaleString()} per click`;
    cursorRow.querySelector(
      '.output-next'
    ).innerText = `${cursor.output.next.toLocaleString()} per click`;
  },

  /**
   * @param {String} id
   */
  renderGenerator: id => {
    const generator = state.generators[id];
    const generatorRow = getElementById(id);
    generatorRow.querySelector(
      '.owned'
    ).innerText = generator.owned.toLocaleString();
    generatorRow.querySelector(
      '.cost'
    ).innerText = generator.cost.next.toLocaleString();
    generatorRow.querySelector(
      '.output-current'
    ).innerText = formatGeneratorOutput(
      generator.output.current,
      generator.delay
    );
    generatorRow.querySelector(
      '.output-next'
    ).innerText = formatGeneratorOutput(generator.output.next, generator.delay);
  },

  renderGenerators: () => {
    Object.keys(state.generators).forEach(id => {
      views.renderGenerator(id);
    });
  },
};

/** Actions. */
const actions = {
  /**
   * @param {Number}  number
   * @param {Boolean} [skipTotal]
   */
  increment: (number, skipTotal) => {
    const { clicks } = state;
    clicks.current += number;
    if (!skipTotal) {
      clicks.total += number;
    }

    views.renderCounter();
    const cursorButton = elements.cursor.querySelector(BUTTON);
    cursorButton.disabled = clicks.current < state.cursor.cost.next;

    const { generators } = state;
    Object.keys(generators).forEach(id => {
      const generatorRow = getElementById(id);
      const generatorButton = generatorRow.querySelector(BUTTON);
      generatorButton.disabled = clicks.current < generators[id].cost.next;
    });
  },

  /**
   * @param {Number} clicks
   */
  decrement: clicks => {
    actions.increment(-clicks, true);
  },

  updateCursor: () => {
    const { cursor } = state;
    const { cost, output } = cursor;
    const owned = ++cursor.owned;
    cost.next = calculateNextCost(cost.base, cost.rate, owned - 1);
    output.current = output.next;
    output.next = Math.round(output.base * owned);
    views.renderCursor();
  },

  /**
   * @param {String} id
   */
  updateGenerator: id => {
    const generator = state.generators[id];
    const { cost, output } = generator;
    const owned = ++generator.owned;
    cost.next = calculateNextCost(cost.base, cost.rate, owned);
    output.current = output.next;
    output.next = Math.round(output.base * (owned + 1));
    views.renderGenerator(id);
  },
};

/** Events. */

// click button
elements.button.addEventListener(CLICK, () => {
  actions.increment(state.cursor.output.current);
});

// upgrade cursor
elements.cursor.querySelector(BUTTON).addEventListener(CLICK, () => {
  if (state.clicks.current >= state.cursor.cost.next) {
    actions.decrement(state.cursor.cost.next);
    actions.updateCursor();
  }
});

// purchase generator
Object.keys(state.generators).forEach(id => {
  const generator = state.generators[id];
  const generatorRow = getElementById(id);

  generatorRow.querySelector(BUTTON).addEventListener(CLICK, () => {
    if (state.clicks.current >= generator.cost.next) {
      actions.decrement(generator.cost.next);
      actions.updateGenerator(id);

      if (generator.interval) {
        generator.interval.callback = () => {
          actions.increment(generator.output.current);
        };
      } else {
        generator.interval = {
          output: generator.output.current,
          callback: () => {
            actions.increment(generator.output.current);
          },
        };
        setInterval(generator.interval.callback, generator.delay * 1000);
      }
    }
  });
});

/** Bootstrap. */
views.renderCounter();
views.renderCursor();
views.renderGenerators();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
