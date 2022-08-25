import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div className="header hover body-width">
    <div id="nav" className="active" role="navigation">
      <ul id="menu-main-menu" className="menu">
        <li className="menu-item">
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/about">
            <a style={linkStyle}>About</a>
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/portfolio">
            <a style={linkStyle}>Portfolio</a>
          </Link>
        </li>
      </ul>
      <div className="trigger">
        <div id="line-1"></div>
        <div id="line-2"></div>
      </div>
    </div>
    <div id="logo">
      <Link href="/">
        <a>
          <img src="/static/img/logo.svg" alt="Al Ribo" />
        </a>
      </Link>
    </div>
    <style jsx>{`
    .header {
        -webkit-transition: top 1s;
        -moz-transition: top 1s;
        -ms-transition: top 1s;
        -o-transition: top 1s;
        transition: top 1s;
        background-color: transparent;
        position: fixed;
        top: -30px;
        height: 75px;
        width: 100%;
        z-index: 9999;
    }
    @media screen and (max-width: 550px) {
        .header {
            top: -110px;
        }
    }
    .header.hover {
        -webkit-transition: top 1s;
        -moz-transition: top 1s;
        -ms-transition: top 1s;
        -o-transition: top 1s;
        transition: top 1s;
        top: 0px;
    }
    .header .main {
        padding: 0 10px;
    }
    .header #logo {
        -webkit-border-radius: 0 0 45px 45px;
        -moz-border-radius: 0 0 45px 45px;
        -ms-border-radius: 0 0 45px 45px;
        -o-border-radius: 0 0 45px 45px;
        border-radius: 0 0 45px 45px;
        -webkit-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        -ms-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        -o-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        -webkit-transform: translate(-50%, 0);
        -moz-transform: translate(-50%, 0);
        -ms-transform: translate(-50%, 0);
        -o-transform: translate(-50%, 0);
        transform: translate(-50%, 0);
        background-color: #000;
        box-sizing: border-box;
        cursor: pointer;
        display: block;
        margin: 0px;
        padding: 5px 15px;
        position: absolute;
        height: 45px;
        width: 90px;
        top: 40px;
        left: 50%;
        z-index: 9998;
    }
    .header #logo img {
        height: auto;
        width: 100%;
    }
    @media screen and (max-width: 550px) {
        .header #logo img {
            max-height: 20px;
            max-width: 100%;
        }
    }
    @media screen and (max-width: 550px) {
        .header #logo {
            -webkit-border-radius: 0;
            -moz-border-radius: 0;
            -ms-border-radius: 0;
            -o-border-radius: 0;
            border-radius: 0;
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            -ms-box-shadow: none;
            -o-box-shadow: none;
            box-shadow: none;
            -webkit-transform: translate(0, 0);
            -moz-transform: translate(0, 0);
            -ms-transform: translate(0, 0);
            -o-transform: translate(0, 0);
            transform: translate(0, 0);
            background-color: #ac2f20;
            height: 40px;
            margin: 0;
            max-height: 40px;
            max-width: 100%;
            padding: 10px;
            position: fixed !important;
            top: 0px !important;
            width: 100%;
            left: auto;
            z-index: 10000;
        }
    }
    #nav {
        -webkit-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        -ms-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        -o-box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
        background-color: #000;
        position: relative;
        text-align: center;
        height: 40px;
        width: 100%;
    }
    @media screen and (max-width: 550px) {
        #nav {
            padding-top: 40px;
            height: 120px;
        }
    }
    #nav.active li a {
        cursor: pointer;
    }
    #nav ul {
        background-color: #000;
        display: inline-block;
        height: 40px;
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
    @media screen and (max-width: 550px) {
        #nav ul {
            height: auto;
        }
    }
    #nav ul li {
        display: inline-block;
        margin-top: 10px;
    }
    @media screen and (max-width: 550px) {
        #nav ul li {
            display: block;
            height: 30px;
        }
    }
    #nav ul li a {
        color: #FFF;
        cursor: default;
        font-family: "Century Gothic", "Apple Gothic", Verdana, Arial, sans-serif;
        font-size: 15px;
        padding: 5px 10px;
    }
    @media screen and (max-width: 550px) {
        #nav ul li a {
            margin: 0 !important;
        }
    }
    #nav ul li a:hover {
        color: #FE7A2E;
    }
    #nav ul li.current-menu-item a {
        color: #FE7A2E;
        margin-top: 0px;
    }
    .trigger {
        -webkit-border-radius: 0 0 35px 35px;
        -moz-border-radius: 0 0 35px 35px;
        -ms-border-radius: 0 0 35px 35px;
        -o-border-radius: 0 0 35px 35px;
        border-radius: 0 0 35px 35px;
        -webkit-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        -ms-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        -o-box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
        background-color: #000;
        cursor: pointer;
        display: none;
        margin: 0px auto;
        position: relative;
        height: 35px;
        width: 70px;
        z-index: 9998;
    }
    @media screen and (max-width: 550px) {
        .trigger {
            display: block;
        }
    }
    .trigger:hover [id^=line-] {
        background-color: #FE7A2E;
    }
    .trigger [id^=line-] {
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        -ms-border-radius: 2px;
        -o-border-radius: 2px;
        border-radius: 2px;
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: all 300ms;
        -moz-transition: all 300ms;
        -ms-transition: all 300ms;
        -o-transition: all 300ms;
        transition: all 300ms;
        background-color: #FFF;
        position: absolute;
        left: 20px;
        height: 2px;
        width: 30px;
    }
    .trigger #line-1 {
        top: 5px;
    }
    .trigger #line-2 {
        top: 17px;
    }
    .trigger.close [id^=line-] {
        top: 12px;
        -webkit-transition: all 300ms;
        -moz-transition: all 300ms;
        -ms-transition: all 300ms;
        -o-transition: all 300ms;
        transition: all 300ms;
    }
    .trigger.close #line-1 {
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        -o-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .trigger.close #line-2 {
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    `}</style>
  </div>
);

export default Header;