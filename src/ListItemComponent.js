const ListItemComonent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <li>{props.el}</li>
      <button id={props.id} onClick={props.onDeleteHandler}>
        Delete
      </button>
    </div>
  );
};

export default ListItemComonent;
