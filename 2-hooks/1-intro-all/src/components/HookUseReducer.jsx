import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, shouldShowText: state.shouldShowText };
    case 'TOGGLE_SHOW_TEXT':
      return { count: state.count, shouldShowText: !state.shouldShowText };
    default:
      return state;
  }
};

const HookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    shouldShowText: true,
  });
  return (
    <>
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: 'INCREMENT' });
          dispatch({ type: 'TOGGLE_SHOW_TEXT' });
        }}>
        Increment
      </button>
      <br />
      <div>{state.shouldShowText && <span> Text to be displayed </span>}</div>
    </>
  );
};

export default HookUseReducer;
