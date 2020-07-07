import React from "react";
import ReactDOM from "react-dom";

interface Props {
  title: string;
  content: string;
  actions: JSX.Element;
  onDismiss(): void;
}

const Modal = (props: Props) => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
