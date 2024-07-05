import { Button } from "./customize";
function FormAddTodo({btnMode, handleForm,setTitle,setText }) {
    
    return (
      <form onSubmit={handleForm} className="formInput">
        <label>Title</label>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="title"
        />
        <label>Description</label>
        <textarea
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="text..."
        />
        <Button >{btnMode}</Button>
      </form>
    );
  }
export default FormAddTodo