import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProductsPages from "./pages/ProductsPages/ProductsPages";
import IndexPages from "./pages/IndexPages";
import NoMatch from "./pages/NoMatch/NoMatch";
import ProductPage from "./pages/ProductPage/ProductPage";
import NavbarVicent from "./utils/NavbarVicent";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
    return (
        <BrowserRouter>
            <NavbarVicent />
            <Switch>
                <Route exact path="/" component={IndexPages} />
                <Route exact path="/products" component={ProductsPages} />
                <Route exact path="/products/:id" component={ProductPage} />
                <Route component={NoMatch} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
