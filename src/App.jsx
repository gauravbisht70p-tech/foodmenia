import Header from "./components/Header";
import Body from "./components/Body";
import restaurants from "./utils/MockData";
const App = () => {
  
  return (
    <>
      <Header />
      <Body restaurants={restaurants} />
    </>
  );
};

export default App;
