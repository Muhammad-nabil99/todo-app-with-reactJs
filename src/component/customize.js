function Tools({ className,onEvent}) {
    return (
      <div className="tools" onClick={onEvent}>
        <i className={className}></i>
      </div>
    );
  }
  function Button({ children, onEvent }) {
    return (
      <button className="button" onClick={onEvent}>
        {children}
      </button>
    );
  }
export {Tools,Button};