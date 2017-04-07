import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './PageLayouts/main/main';
import Features from './PageLayouts/features/features';
import Team from './PageLayouts/team/team';
import Shop from './PageLayouts/shop/products/products';

export default () => (
    <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/features" exact component={Features} />
        <Route path="/team" exact component={Team} />
        <Route path="/shop" exact component={Shop} />
    </Switch>
);

