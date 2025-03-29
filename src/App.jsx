import { Suspense } from "react";
import "./App.css";
import Bottles from "./components/bottles/Bottles";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";

const fetchBottlesData = async () => {
  const res = await fetch("bottles.json");
  return res.json();
};

function App() {
  const bottlesPromise = fetchBottlesData();

  return (
    <div className="space-y-4 max-w-11/12 my-5 mx-auto">
      <Suspense fallback={<Loading></Loading>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </div>
  );
}

export default App;
