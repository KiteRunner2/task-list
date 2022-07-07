import { IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

type Props = {
  onAddTask: any;
};

function AddTask(props: Props) {
  return (
    <IconButton
      variant="outline"
      colorScheme="facebook"
      aria-label="Add Task"
      icon={<AddIcon />}
      size="sm"
      onClick={props.onAddTask}
    />
  );
}

export default AddTask;
