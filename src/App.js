import "./App.css";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="">
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        Hello, Tailwind CSS!
      </button>

      <br />

      <button className="btn btn-green mr-4">Button</button>
      <button className="btn btn-blue">Button</button>

      <br />

      <button className="btn btn-red">Hover me</button>

      <div className="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
        <p className="text-indigo-600 group-hover:text-gray-900 ...">
          New Project
        </p>
        <p className="text-indigo-500 group-hover:text-gray-500 ...">
          Create a new project from a variety of starting templates.
        </p>
      </div>

      <div className="flex items-center w-3/4 my-5 mt-24">
        <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
        <p className="text-center ml-5 mr-1">ABOUT</p>
        <p className="text-center mr-5 ml-1">ME</p>
        <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
      </div>

      <div className="flex items-center w-3/4 my-5">
        <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
        <p className="text-center mx-5">CERTIFICATE</p>
        <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
      </div>

      <div className="flex items-center w-3/4 my-5">
        <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
        <p className="text-center mx-5">SKILL</p>
        <div className="h-px w-3/4 bg-slate-500 dark:bg-slate-400"></div>
      </div>
    </div>
  );
}

export default App;
