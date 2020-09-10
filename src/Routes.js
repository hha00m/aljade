import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Signin from "./user/Singin";
import ProductsTab from "./pages/product-tab/ProductsTab";
import OrdersTab from "./pages/orders-tab/OrdersTab";
import BasketsTab from "./pages/basket-tab/BasketsTab";
import DrawerMenu from "./cores/Menu";
import SettingTab from "./pages/setting-tab/MoreLists.jsx";
import MessagesTab from "./pages/messages/MessagesTab";

const Routes = () => {
  return (
    <BrowserRouter>
      <DrawerMenu />
      <Switch>
        <Route path="/productsTab" exact component={ProductsTab} />
        <Route path="/ordersTab" exact component={OrdersTab} />
        <Route path="/settingsTab" exact component={SettingTab} />
        <Route path="/basketsTab" exact component={BasketsTab} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/messages" exact component={MessagesTab} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
