import { Outlet } from "react-router";
import { HttpCategoryService } from "../../modules/category/infrastructure/HttpCategoryService";
import { HttpTaskService } from "../../modules/task/infrastructure/HttpTaskService";
import type { TaskDependencies } from "../../store/task/TaskDependencies";
import { Col } from "../components/Col";
import { Grid } from "../components/Grid";
import { H1, H3 } from "../components/Heading";
import { TaskCategoryList } from "./components/TaskCategoryList";
import { TaskGrid } from "./components/TaskGrid";
import { join } from "../../shared/css/CssUtils";
import { ButtonLink } from "../components/ButtonLink";
import styles from "./components/TaskGrid.module.css";
import { Criteria } from "../../modules/shared/domain/criteria/Criteria";
import { CriteriaFilterOperators } from "../../modules/shared/domain/criteria/CriteriaFilterOperators";
import { CriteriaFilters } from "../../modules/shared/domain/criteria/CriteriaFilters";
import { CriteriaOrder } from "../../modules/shared/domain/criteria/CriteriaOrder";
import { TaskStatus } from "../../modules/task/domain/TaskStatus";
import { useId, useState, type ChangeEvent } from "react";

type TaskIndexProps = TaskDependencies;

const criteriaDoing = new Criteria(
  CriteriaFilters.fromValues([
    ["status", CriteriaFilterOperators.EQ, TaskStatus.DOING],
  ]),
  CriteriaOrder.none(),
  0,
  6,
);

const criteriaDone = new Criteria(
  CriteriaFilters.fromValues([
    ["status", CriteriaFilterOperators.EQ, TaskStatus.DONE],
  ]),
  CriteriaOrder.none(),
  0,
  6,
);

export default function TaskIndex(dependencies: TaskIndexProps) {
  const doingId = useId();
  const doneId = useId();
  const [criteria, setCriteria] = useState<Criteria>(criteriaDoing);
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value === TaskStatus.DOING) {
      setCriteria(criteriaDoing);
    }

    if (value === TaskStatus.DONE) {
      setCriteria(criteriaDone);
    }
  };

  return (
    <section>
      <H1>Mis Tareas</H1>
      <Grid cols={5}>
        <Col span={1}>
          <H3>Categorías</H3>
          <TaskCategoryList categoryService={dependencies.categoryService} />
        </Col>
        <Col span={4}>
          <header className={join(styles.flex, styles["justify-end"])}>
            <ButtonLink to="add">Agregar Tarea</ButtonLink>
          </header>
          <section className={join(styles.filters)}>
            <div>
              <input
                type="radio"
                name="task-list"
                value={TaskStatus.DOING}
                id={doingId}
                onChange={handleOnChange}
              />
              <label htmlFor={doingId}>Tareas Pendientes</label>
            </div>
            <div>
              <input
                type="radio"
                name="task-list"
                value={TaskStatus.DONE}
                id={doneId}
                onChange={handleOnChange}
              />

              <label htmlFor={doneId}>Tareas Finalizadas</label>
            </div>
          </section>

          <TaskGrid
            taskService={dependencies.taskService}
            criteria={criteria}
          />
          <Outlet context={dependencies} />
        </Col>
      </Grid>
    </section>
  );
}

export const getDependencies = (): TaskDependencies => {
  return {
    taskService: new HttpTaskService(),
    categoryService: new HttpCategoryService(),
  };
};
