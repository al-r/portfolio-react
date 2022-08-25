import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div className="wrapper">
    <Header /> 
    <div className={props.stylingClass}>
        <div className="main">
            {props.children}
        </div>
        <style jsx global>{`
        body {
            font-family: "Century Gothic","Apple Gothic",Verdana,Arial,sans-serif;
            margin: 0;
            position: relative;
        }
        a {
          color: #fe9a61;
          text-decoration: none;
          font-size: 13px;
        }
        a:hover {
          color: #FE7A2E;
          cursor: pointer;
        }
        a.button {
            margin: 10px 10px 0 0;
            max-width: 130px;
            width: 100%;
            display: inline-block;
            background-color: #000;
            padding: 5px 20px;
            color: #fff !important;
            text-align: center;
        }
        a.button:hover {
            background-color: #FE7A2E;
        }
        a.button:first-child {
            margin: 15px 10px 0 0;
        }
        .wrapper {
            width: 100%;
        }
        .main {
            height: calc(100vh - 95px);
            margin: 0 auto;
            max-width: 960px;
            padding: 95px 10px 10px;
            width: 100vw;
        }
        `}</style>
    </div>
  </div> 
);

export default Layout;