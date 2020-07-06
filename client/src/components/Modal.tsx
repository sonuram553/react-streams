import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props: any) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">Are you sure you want to delete stream?</div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
