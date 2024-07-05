import { useState } from "react";
import FormAddTodo from "./component/Form";
import TodoContent from "./component/sidebar-todo";
import { Button } from "./component/customize";
import Todo from "./component/todo";

const initalData = [
  {
    id: "1222",
    title: "Example",
    description: `Craving a new gym session that injects some excitement into your routine? Ditch the mundane and embrace a dynamic workout adventure!  Instead of the usual treadmill slog, consider a high-intensity interval training (HIIT) routine that pushes your limits with short bursts of intense activity followed by recovery periods. Feeling like a power move? Opt for a plyometric power session that incorporates explosive jumps and dynamic movements.  For a metabolism-boosting challenge, tackle a metabolic conditioning circuit that fuses strength training with cardio exercises.  Want to focus on real-world movement? Try a functional strength challenge that utilizes bodyweight exercises and light weights to mimic everyday motions.  If you're a fan of classic tools, a barbells and bodyweight blitz will have you sculpting and sweating using those trusty iron bars and your own bodyweight.  There's a perfect workout adventure waiting for you at the gym, so go explore and conquer!`,
    date: "Thu Jul 04 2024",
  },
  {
    id: "134dsf222",
    title: "test1",
    description: `Craving a new gym session that injects some excitement into your routine? Ditch the mundane and embrace a dynamic workout adventure!  Instead of the usual treadmill slog, consider a high-intensity interval training (HIIT) routine that pushes your limits with short bursts of intense activity followed by recovery periods. Feeling like a power move? Opt for a plyometric power session that incorporates explosive jumps and dynamic movements.  For a metabolism-boosting challenge, tackle a metabolic conditioning circuit that fuses strength training with cardio exercises.  Want to focus on real-world movement? Try a functional strength challenge that utilizes bodyweight exercises and light weights to mimic everyday motions.  If you're a fan of classic tools, a barbells and bodyweight blitz will have you sculpting and sweating using those trusty iron bars and your own bodyweight.  There's a perfect workout adventure waiting for you at the gym, so go explore and conquer!`,
    date: "Thu Jul 04 2024",
  },
  {
    id: "1wse34dssdaas3f222",
    title: "test2",
    description: `Craving a new gym session that injects some excitement into your routine? Ditch the mundane and embrace a dynamic workout adventure!  Instead of the usual treadmill slog, consider a high-intensity interval training (HIIT) routine that pushes your limits with short bursts of intense activity followed by recovery periods. Feeling like a power move? Opt for a plyometric power session that incorporates explosive jumps and dynamic movements.  For a metabolism-boosting challenge, tackle a metabolic conditioning circuit that fuses strength training with cardio exercises.  Want to focus on real-world movement? Try a functional strength challenge that utilizes bodyweight exercises and light weights to mimic everyday motions.  If you're a fan of classic tools, a barbells and bodyweight blitz will have you sculpting and sweating using those trusty iron bars and your own bodyweight.  There's a perfect workout adventure waiting for you at the gym, so go explore and conquer!`,
    date: "Thu Jul 04 2024",
  },
];
function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}
function TodoApp() {
  const [datas, setDatas] = useState(initalData);
  const [showForm, setShowForm] = useState(false);
  const [seeMore, setSeeMore] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [btnMode, setBtnMode] = useState("add");

  function handleForm(e) {
    e.preventDefault();
    if (!title || !text) return;
    const newItem = {
      id: crypto.randomUUID(),
      title: title,
      description: text,
      date: new Date().toDateString(),
    };
    if (btnMode === "update") {
      const updateItem = datas.map((data) =>
        data.id === seeMore.id
          ? { ...data, title: title, description: text }
          : data
      );
      const newItem = updateItem.filter(
        (update) => update.id === seeMore.id
      )[0];
      setDatas(updateItem);
      setSeeMore(newItem);
      setShowForm(false);
    }
    handleAddItem(newItem);
  }

  function handleAddNewBtn() {
    setShowForm((show) => !show);
    setBtnMode("add");
  }
  function handleAddItem(newItem) {
    if (btnMode === "update") return;
    setDatas((datas) => [...datas, newItem]);
    setShowForm((showForm) => !showForm);
  }
  function handleUpdate() {
    setTitle("");
    setText("");
    setBtnMode("update");
    setShowForm((show) => !show);
  }
  function handleRemove() {
    const confirm = window.confirm("do you wanna remove this item?");
    if (!confirm) return;
    setDatas(datas.filter((data) => data.id !== seeMore.id));
    setSeeMore(false);
  }
  function closeAll(e) {
    if (!e.target.closest(".formInput") && showForm === true) setShowForm(!showForm);
    
  }
  return (
    <div className="todo-app" onClick={closeAll}>
      <div className="todo-list">
        <div className="header">
          <h3>Todo App📝</h3>
          <Button className="button" onEvent={handleAddNewBtn}>
            New Todo
          </Button>
          {showForm && (
            <FormAddTodo
              setBtnMode={setBtnMode}
              btnMode={btnMode}
              onAddItem={handleAddItem}
              handleForm={handleForm}
              setTitle={setTitle}
              setText={setText}
            />
          )}
        </div>
        <ul>
          {datas.map((data) => (
            <Todo
              data={data}
              setSeeMore={setSeeMore}
              seeMore={seeMore}
              key={data.id}
            />
          ))}
        </ul>
      </div>
      <div className="sidebar">
        <TodoContent
          content={seeMore}
          onUpdateItem={handleUpdate}
          onRemove={handleRemove}
        />
      </div>
    </div>
  );
}

export default App;
