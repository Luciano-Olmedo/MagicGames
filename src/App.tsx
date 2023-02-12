import { Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import MemoTest from "./components/MemoTest";

const App = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/memotest" element={<MemoTest />} />
    </Routes>
  );
};

export default App;
