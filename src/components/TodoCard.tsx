import { Card, Text, Button, Group } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import { IconCalendarEvent } from "@tabler/icons-react";
import { Badge } from "@mantine/core";
import { Todo } from "../types/Todo";
import { extractDate } from "../utils/utils";
import { Categories } from "../utils/constants";

type TodoCardPropsType = {
  todo: Todo;
};

export function TodoCard({ todo }: TodoCardPropsType) {
  const category = Categories.find(
    (category) => category.value === todo.category
  );
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder mb={20}>
        <Group justify="space-between" mb={5}>
          <Checkbox
            defaultChecked={todo.status === "completed" ? true : false}
            label={<Text fw={"bold"}>{todo.content}</Text>}
            radius="lg"
            size="md"
          />
        </Group>

        <Group justify="space-between" ml={32}>
          <Group gap={5} align="center">
            <IconCalendarEvent color="rgba(204, 10, 10, 1)" size={18} />
            <Text size="sm" c="rgba(204, 10, 10, 1)">
              {extractDate(todo.deadline)}
            </Text>
          </Group>
          <Badge variant="dot" color={category?.color} size="lg">
            {category?.value}
          </Badge>
        </Group>
      </Card>
    </>
  );
}
