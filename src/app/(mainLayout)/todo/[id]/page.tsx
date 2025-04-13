import SingleTodos from "@/components/SingleTodos";

function SingleTodo({ params }: { params: { id: number } }) {
  const { id } = params;
  console.log("Todo ID:", id);

  return <SingleTodos id={id} />;
}

export default SingleTodo;
