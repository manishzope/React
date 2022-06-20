import React, { useState, useEffect, useRef } from 'react';

function MessageComp() {
  const [message, setMessage] = useState('Hi');
  const inputRef = useRef();
  useEffect(() => {
    console.log('state is updated to', message);
  });

  return (
    <div>
      <h1>Message is "{message}"</h1>
      <label htmlFor="message"> Enter new Message</label>
      <input type="text" name="message" id="message" ref={inputRef} />
      <br />
      <button
        onClick={() => {
          setMessage(inputRef.current.value || 'Hola!');
          inputRef.current.value = '';
        }}>
        Update Message
      </button>
    </div>
  );
}

export default MessageComp;
