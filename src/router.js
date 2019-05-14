
import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Demo from "./view/Demo";

const Router = () => (
    <HashRouter>
        <Route path="/" component={Demo}>
            {/* {<Route path="about" component={About}/>
                <Route path="users" component={Users}>
                    <Route path="/user/:userId" component={User}/>
                </Route>
                <Route path="*" component={NoMatch}/>} */}
        </Route>
    </HashRouter>
);

export default Router;
