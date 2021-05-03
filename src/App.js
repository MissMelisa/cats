import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";

import "./App.css";

import CatPresentationPage from "./Pages/CatPresentation";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/catPresentation" exact>
              <CatPresentationPage />
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
