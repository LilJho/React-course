import Todo from "./components/Todo";

function App() {
  return (
    <div className="box-border w-screen h-screen m-0 font-sans bg-gray-200">
      <h1 className="p-4 mx-12 text-xl font-bold text-gray-700">My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Learn NextJs" />
      <Todo text="Practice and Apply for work" />
    </div>
  );
}

export default App;
