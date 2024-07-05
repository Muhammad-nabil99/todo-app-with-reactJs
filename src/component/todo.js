
import { Button } from "./customize";

function Todo({ data, setSeeMore, seeMore }) {
    const curr = seeMore.id === data.id;
    function handleSeeMore() {
      setSeeMore(data);
    }
  
    return (
      <li className={curr ? "active" : ""} id={data.id}>
        <span>
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </span>
        <Button onEvent={handleSeeMore}>See More</Button>
      </li>
    );
  }
  
export default Todo;  