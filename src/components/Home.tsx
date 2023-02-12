import {Link} from "react-router-dom"

const Home = () => {
  return (
    <div className="grid grid-col-1 gap-10 mt-16 mx-auto place-items-center">
      <h1 className="text-3xl text-center place-items-center text-white">MemoBeast</h1>
      <button >
        <Link to={"/memotest"} className="text-white text-3xl border border-slate-300 rounded-md p-2 hover:bg-red-300" >Play !</Link>
        </button>
    </div>
  );
};

export default Home;
