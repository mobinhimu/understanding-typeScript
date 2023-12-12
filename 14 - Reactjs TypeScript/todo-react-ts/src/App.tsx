import TodoList from "./components/TodoList";

function App() {
  const todos = [
    {
      id: crypto.randomUUID(),
      title: "Hello World",
    },
  ];

  return (
    <>
      <TodoList items={todos} />
    </>
  );
}

export default App;
