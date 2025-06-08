import { useId } from "react";
import type { Task } from "../../../modules/task/domain/Task";
import { randomColorHex } from "../../../modules/task/domain/TaskColor";
import { join } from "../../../shared/css/CssUtils";
import { useForm } from "../../../shared/hooks/useForm";
import { useCategoryStore } from "../../../store/category/useCategoryStore";
import { Button } from "../../components/Button";
import { ButtonLink } from "../../components/ButtonLink";
import { H2 } from "../../components/Heading";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { Select } from "../../components/Select";
import { TextArea } from "../../components/TextArea";
import styles from "./page.module.css";
import { useTaskStore } from "../../../store/task/useTaskStore";
import { useTaskDependencies } from "../../../store/task/useTaskDependencies";

const TaskAddPage = () => {
  const titleId = useId();
  const categoryId = useId();
  const contentId = useId();
  const { commitTask } = useTaskStore();
  const { categories } = useCategoryStore();
  const { taskService } = useTaskDependencies();
  const { handleSubmit } = useForm((_: HTMLFormElement, formData: FormData) => {
    const task: Task = {
      id: crypto.randomUUID(),
      color: randomColorHex(),
      status: "DOING",
      content: formData.get("content") as string,
      title: formData.get("title") as string,
      categoryId: formData.get("categoryId") as string,
    };
    commitTask(task, taskService);
  });

  return (
    <Modal>
      <form className={styles.form} onSubmit={handleSubmit}>
        <H2>Agregar Tarea</H2>
        <fieldset>
          <label htmlFor={titleId}>Titulo</label>
          <Input name="title" id={titleId} />
        </fieldset>
        <fieldset>
          <label htmlFor={categoryId}>Category</label>
          <Select name="categoryId" id={categoryId}>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </Select>
        </fieldset>
        <fieldset>
          <label htmlFor={contentId}>Content</label>
          <TextArea id={contentId} name="content"></TextArea>
        </fieldset>
        <fieldset className={join(styles["button-container"])}>
          <ButtonLink to="/task" variant="gray">
            Cancelar
          </ButtonLink>
          <Button>Guardar</Button>
        </fieldset>
      </form>
    </Modal>
  );
};

export default TaskAddPage;
