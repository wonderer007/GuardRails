import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/home'
import newScan from '../pages/newScan'

export default (
    <Route>
      <Route path="/" exact component={Home} />
      <Route path="/newSecurityScanResults" exact component={newScan} />
    </Route>
);
