import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import GlobalStyles from './globalStyles'

import closeIcon from '../../assets/close.png'

const portalRoot = document.getElementById("portal-root");

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  max-width: 90%;
  max-height: 90%;
  box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const HeaderRow = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ScrollDisabler = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

const Modal = ({ isOpen, close, children }) => {

  const [isOpen, setOpen] = useState(false);

  const contentRef = useRef();

  useEffect(() => {
    if (!isOpen) return;

    function listener(evt) {
      if (contentRef.current?.contains(evt.target)) return;
      close();
    }

    window.addEventListener("click", listener);

    return () => {
      window.removeEventListener("click", listener);
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <Background>
        <Content ref={contentRef}>
          <HeaderRow>
            <img
              src={closeIcon}
              alt=""
              width="30px"
              style={{ cursor: "pointer" }}
              onClick={close}
            />
          </HeaderRow>
          {children}
        </Content>
      </Background>
      <ScrollDisabler />
    
    portalRoot


    <GlobalStyles />
    <div>
      <h1>Building a Reusable Modal Component in React.js</h1>
      <button onClick={() => setOpen(true)}>Open the Modal!</button>
      <img
        src="https://images.unsplash.com/photo-1612673769667-cf044ad1459b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80"
        style={{ width: "100vw" }}
        alt=""
      />
      <p>
      eget quam. Aenean lacinia bibendum nulla sed consectetur. Donec
          ullamcorper nulla non metus auctor fringilla. Duis mollis, est non
          commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec
          elit. Sed posuere consectetur est at lobortis. Nulla vitae elit
          libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet
          rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at
          eget metus.
        </p>
        <div style={{ transform: "translateX(50px)" }}>
          <Modal isOpen={isOpen} close={() => setOpen(false)}>
            <h2>Hello from the Modal</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus. Cras justo odio, dapibus
              ac facilisis in, egestas eget quam. Cras mattis consectetur purus
              sit amet fermentum.
            </p>
          </Modal>
        </div>
      </div>
      </>,
  );
};

export default Modal;