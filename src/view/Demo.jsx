import React from "react";
import logo from "../asset/img/logo.png";
import "../asset/css/demo.scss";

function Demo() {
    return (
        <div className="demo-wrapper">
            <div className="logo-wrap">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <p className="intro">React单页面构建工具</p>
            <p className="link">
                <a href="https://github.com/jdf2e/Gaea4" className="btn">GITHUB</a>
                <a href="https://www.npmjs.com/package/gaea-cli" className="btn">NPM</a>
                <router-link to="/detail" className="btn btn-start">起步</router-link>
            </p>
        </div>
    );
}
export default Demo;
