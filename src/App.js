import "./App.css";
import { Body } from "./components/Body/Body";
import { ProductProvider } from "./providers/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <Body />
    </ProductProvider>
  );
}

export default App;
