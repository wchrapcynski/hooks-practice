import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

const Modal = ({ isShowing, hide }) =>
  // Portal lets you render a component outside of the parent DOM component. 
  // You will so document.body at the end of the statement that declares where to
  // append the code. 
  isShowing ? ReactDOM.createPortal(
    // React.Fragment let's you not need to wrap your JSX in a div which can cause problems
    // in some cases.
    <React.Fragment>
      <div className="modal-overlay" />
      <div
        className="modal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal">
          <div className="modal-header">
            App Description
            <button
              type="button"
              className="modal-close-button"
              data-dismiss="modal"
              aria-label="Close"
              onClick={hide}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p>
            This app demonstrates using React Hooks! This modal makes use of
            useState as well as a custom Hook for the modal. You can visit
            this repo to checkout the code:
            <br />
            <a
              href="https://github.com/wchrapcynski/hooks-practice"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/wchrapcynski/hooks-practice
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>,
    document.body
  ) : null;

export default Modal;