import "./App.css";
import "tailwindcss/tailwind.css";

function App() {
  return (
    <div className="">
      <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        Hello, Tailwind CSS!
      </button>

      <br />

      <button class="btn btn-green mr-4">Button</button>
      <button class="btn btn-blue">Button</button>

      <br />

      <button class="bg-red-500 hover:bg-red-700 ...">Hover me</button>

      <div className="group border-indigo-500 hover:bg-white hover:shadow-lg hover:border-transparent ...">
        <p className="text-indigo-600 group-hover:text-gray-900 ...">
          New Project
        </p>
        <p className="text-indigo-500 group-hover:text-gray-500 ...">
          Create a new project from a variety of starting templates.
        </p>
      </div>
    </div>
  );
}

export default App;
