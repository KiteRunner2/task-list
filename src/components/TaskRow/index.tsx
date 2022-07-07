import { VStack, Button, ButtonGroup, Checkbox, Input } from "@chakra-ui/react";

type TaskProperty = {
  id: string;
  status: string;
  description: string;
};

type Props = {
  task: TaskProperty;
  onCheckboxChange: any;
  onTaskDescriptionChange: any;
  onTaskUpdate: any;
};

function TaskRow(props: Props) {
  const { task, onCheckboxChange, onTaskDescriptionChange, onTaskUpdate } =
    props;

  console.log("task row", task);
  return (
    <VStack>
      <div style={{ display: "flex", width: "60%" }} key={task.id}>
        <Checkbox
          id={task.id}
          value={task.description}
          isChecked={task.status === "done"}
          onChange={onCheckboxChange}
          style={{ marginRight: "5px" }}
        />
        <Input
          variant="flushed"
          id={task.id}
          value={task.description}
          onChange={onTaskDescriptionChange}
          style={{ marginRight: "5px" }}
          textDecoration={task.status === "done" ? "line-through" : "none"}
        />
        <ButtonGroup>
          <Button
            variant="solid"
            colorScheme="facebook"
            size="sm"
            onClick={() => onTaskUpdate(task.id)}
          >
            Update
          </Button>
          <Button variant="outline" colorScheme="facebook" size="sm">
            Delete
          </Button>
        </ButtonGroup>
      </div>
    </VStack>
  );
}

export default TaskRow;
