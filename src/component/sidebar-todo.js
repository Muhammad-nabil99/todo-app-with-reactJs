
import { Tools } from "./customize";
function TodoContent({ content,onRemove,onUpdateItem}) {
    return (
      <div>
        {content ? (
          <>
            <div className="content-header">
              <div className="title">
                <h2>{content.title}</h2>
                <span>{content.date}</span>
              </div>
              <div className="content-tools">
                <Tools onEvent={onRemove} className={"fa-solid fa-trash"}></Tools>
                <Tools onEvent={onUpdateItem} className={"fa-solid fa-pen-nib"}></Tools>
              </div>
            </div>
            <p>{content.description}</p>
          </>
        ) : (
          <span className="no-content">no content here ✏️</span>
        )}
      </div>
    );
    //  ;
  }
export default TodoContent