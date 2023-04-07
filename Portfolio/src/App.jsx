import Ttt from "./Ttt";
import Tcc from "./Tcc";
// import Splines from "./Splines";
// import Scene from "./Splinefibe";
// import Excali from "./Excali";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="w-screen static">
      <div className="top-0 container w-1/2 lg:w-3/4 md,sm:w-full ">
        <Ttt />
        <Tcc />
        <h1 className="text-3xl font-bold underline text-yellow-200 bg-yellow-900">Hello world!</h1>
        <h1 className="text-3xl font-bold underline bg-green-400" >Hello world!</h1>
      </div>
      
    </div>
  );
}

export default App;
