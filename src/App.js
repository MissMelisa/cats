import { QueryClientProvider, QueryClient } from "react-query";

import "./App.css";
import Home from "../src/Pages/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </div>
  );
}

export default App;
