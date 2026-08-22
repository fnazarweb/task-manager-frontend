import { useForm } from "react-hook-form";

const ReactFormComponent = () => {
  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const regex = /^[a-zA-Z0-9]+@{1}[a-z]{0,5}\.[a-z]{0,3}$/;
  console.log(regex.test("fasfasf@gmail.com"));
  //   console.log(watch("name"));
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("name", {
          required: true,
          minLength: 3,
          maxLength: 20,
        })}
        aria-invalid={errors.name ? true : false}
      />
      {errors.name?.type === "required" && <p role="alert">name is required</p>}
      {errors.name?.type === "maxLength" && (
        <p role="alert">maxLength is 20 characters</p>
      )}
      {errors.name?.type === "minLength" && (
        <p role="alert">min length is 3 characters</p>
      )}
      <select {...register("city")}>
        <option value="lviv">Lviv</option>
        <option value="kyiv">Kyiv</option>
        <option value="lutsk">Lutsk</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReactFormComponent;
