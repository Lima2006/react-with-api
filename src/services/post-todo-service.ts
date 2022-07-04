import TaskType from "../types/task-type";

type postTodoServiceParams = TaskType;
type postTodoServiceResponse = Response;
type postTodoServiceProps = (
  params: postTodoServiceParams
) => Promise<postTodoServiceResponse>;

const postTodoService: postTodoServiceProps = async (data) =>
  fetch("http://localhost:3001/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

export default postTodoService;
