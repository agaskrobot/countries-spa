import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Countries } from "../Countries";

const AppRouter = () => (
  <BrowserRouter basename={process.env.REACT_APP_ROOT_PATH}>
    <Switch>
      <Route exact path="/" component={Countries} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
