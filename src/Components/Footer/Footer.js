import React from "react";

import style from './Footer.module.css'

export const Footer = ({ text }) => {
  return (
    <footer className={`${style.footer} container-fluid`}>
      {text}
    </footer>
  );
};
