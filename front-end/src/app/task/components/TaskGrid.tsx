import { useEffect } from "react";
import { Criteria } from "../../../modules/shared/domain/criteria/Criteria";
import type { TaskService } from "../../../modules/task/domain/TaskService";
import { TaskStatus } from "../../../modules/task/domain/TaskStatus";
import { join } from "../../../shared/css/CssUtils";
import { useTaskStore } from "../../../store/task/useTaskStore";
import { Col } from "../../components/Col";
import { Grid } from "../../components/Grid";
import { H3 } from "../../components/Heading";
import { useBreadcrumbs } from "../../components/useBreadcrumbs";
import styles from "./TaskGrid.module.css";
import { TaskGridForm } from "./TaskGridForm";

type TaskGridProps = {
  criteria: Criteria;
  taskService: TaskService;
};

export const TaskGrid = ({ criteria, taskService }: TaskGridProps) => {
  const path = useBreadcrumbs();
  const { tasks, pullTask } = useTaskStore();

  useEffect(() => {
    pullTask(criteria, taskService);
  }, [pullTask, taskService, path, criteria]);

  return (
    <Grid cols={2}>
      {tasks.map((task) => (
        <Col key={task.id}>
          <article
            className={join(styles.card)}
            style={{ border: `1px solid ${task.color}` }}
          >
            <H3>{task.title}</H3>
            <p>{task.content}</p>
            <footer>
              <span
                className={join(styles.color)}
                style={{
                  border: `1px solid ${task.color}`,
                  background: task.color,
                }}
              ></span>
              {task.status === TaskStatus.DOING && (
                <TaskGridForm taskService={taskService} task={task} />
              )}
            </footer>
          </article>
        </Col>
      ))}
    </Grid>
  );
};
