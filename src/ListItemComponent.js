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

      {props.children}
    </div>
  );
};

export default ListItemComonent;
