const Checkbox = ({ id, checked, handleChangeCheckbox }) => {
  return (
    <input
      type="checkbox"
      name="checkbox"
      id={id}
      checked={checked}
      onChange={handleChangeCheckbox}
    />
  );
};

export default Checkbox;
