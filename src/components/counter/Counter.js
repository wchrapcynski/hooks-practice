import React, { useState, useEffect } from 'react';
import './Counter.css'
import Modal from '../Modal/Modal'
import useModal from '../useModal/useModal'

const NumberCounter = () => {
    // This sets up each counter. In this example, countByOne and CountByFive are the 
    // variables. It then creates functions called setCountOne and SetCountFive to update
    // those variables. The declaration of useState sets up the hook and you can put
    // something in the parentheses to give it a default value. You can create as
    // many of these as necessary in a single file.
    const [countByOne, setCountOne] = useState(0);
    const [countByFive, setCountFive] = useState(0);
    // This sets up using the custom Modal Hook.
    const {isShowing, toggle} = useModal();

    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      // This querySlector updates the counter display for the countByFive variable.
      document.querySelector(".counter-display-five").innerHTML = `The count is ${countByFive}`;
    })

    return (
      <div className="counter-block">
        <button className="button-modal" onClick={toggle}>Show Description</button>
        <Modal
          isShowing={isShowing}
          hide={toggle}
        />
        {/* This is the countByOne counter. */}
        <div className="counter-one">
          <p className="counter-description">This counters uses the useState React Hook</p>
          <p>The count is {countByOne}</p>
          <button onClick={() => setCountOne(countByOne + 1)}>
            Increase Count by 1
          </button>
          {/* The function on this button will not let the variable count go below zero. */}
          <button
            onClick={() => (countByOne > 0 ? setCountOne(countByOne - 1) : "")}
          >
            Decrease Count by 1
          </button>
        </div>
        {/* This is the countByFive counter */}
        <div className="counter-five">
          <p className="counter-description">This counters uses the useState and useEffect React Hooks</p>
          <p className="counter-display-five"></p>
          <button onClick={() => setCountFive(countByFive + 5)}>
            Increase Count by 5
          </button>
          {/* The function on this button will not let the variable count go below zero. */}
          <button
            onClick={() =>
              countByFive > 0 ? setCountFive(countByFive - 5) : ""
            }
          >
            Decrease Count by 5
          </button>
        </div>
      </div>
    );
}

export default NumberCounter