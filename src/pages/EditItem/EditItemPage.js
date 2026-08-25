import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getSingleTodo } from "../../api/api";
import TodoForm from "../../components/Form/TodoForm";
import { HashLoader } from "react-spinners";
import styles from "./EditItemPage.module.css";

const EditItemPage = () => {
  const { id } = useParams();

  const { data: todo, isFetching } = useQuery({
    queryKey: ["singleTodo"],
    queryFn: () => getSingleTodo(id),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  return (
    <section className={styles.page}>
      {isFetching ? (
        <HashLoader />
      ) : (
        <TodoForm mode="edit" initialData={todo} />
      )}
    </section>
  );
};

export default EditItemPage;
