import { useNavigate } from "react-router";
import type { Task } from "../../../modules/task/domain/Task";
import type { TaskService } from "../../../modules/task/domain/TaskService";
import { join } from "../../../shared/css/CssUtils";
import { useForm } from "../../../shared/hooks/useForm";
import { useTaskStore } from "../../../store/task/useTaskStore";
import styles from "./TaskGrid.module.css";

export interface TaskGridFormProps {
  task: Task;
  taskService: TaskService;
}

export const TaskGridForm = ({ task, taskService }: TaskGridFormProps) => {
  const { changeTask } = useTaskStore();
  const navigate = useNavigate();
  const { handleSubmit } = useForm(() => {
    const newTask = {
      ...task,
      status: "DONE",
    };
    changeTask(newTask, taskService);
    navigate("/task");
  });

  return (
    <form onSubmit={handleSubmit}>
      <button className={join(styles.button)}>Finalizar Tarea</button>
    </form>
  );
};
