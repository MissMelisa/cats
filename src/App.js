import { QueryClientProvider, QueryClient } from "react-query";

import Home from "./Pages/Home";
import "./App.css";

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
