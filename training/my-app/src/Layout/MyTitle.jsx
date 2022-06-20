import React, { useRef } from 'react';

const MyTitle = (props) => {
  const inputRef = useRef();
  return (
    <>
      <h1>TITLE - {props.title}</h1>
      <br />
      <input type='text' name='title' id='title' ref={inputRef} />
      <button
        onClick={() => {
          // changeTitle will internally invoke setTitle of MyHeader
          props.changeTitle(inputRef.current.value);
        }}>
        Inform Parent
      </button>
    </>
  );
};

export default MyTitle;
