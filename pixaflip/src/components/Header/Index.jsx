import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img
          className="image"
          src="https://secureservercdn.net/45.40.145.151/h9o.9b5.myftpupload.com/wp-content/uploads/2021/03/logo_main-213x59.png"
          alt=""
        />
      </div>
    );
  }
}

export default Header;
