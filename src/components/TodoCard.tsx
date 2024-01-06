import { Card, Text, Button, Group } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import { IconCalendarEvent } from "@tabler/icons-react";
import { Badge } from "@mantine/core";

export function TodoCard() {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" mb={5}>
          <Checkbox
            defaultChecked
            label={<Text fw={"bold"}>お米を買って帰る</Text>}
            radius="lg"
            size="md"
          />
        </Group>

        <Group justify="space-between" ml={32}>
          <Group gap={5} align="center">
            <IconCalendarEvent color="rgba(204, 10, 10, 1)" size={18} />
            <Text size="sm" c="rgba(204, 10, 10, 1)">
              9月13日
            </Text>
          </Group>
          <Badge variant="dot" color="lime" size="lg">
            家事
          </Badge>
        </Group>
      </Card>

      <Card shadow="sm" mt={20} padding="lg" radius="md" withBorder>
        <Group justify="space-between" mb={5}>
          <Checkbox
            defaultChecked
            label={<Text fw={"bold"}>書類を提出する</Text>}
            radius="lg"
            size="md"
          />
        </Group>

        <Group justify="space-between" ml={32}>
          <Group gap={5} align="center">
            <IconCalendarEvent color="rgba(204, 10, 10, 1)" size={18} />
            <Text size="sm" c="rgba(204, 10, 10, 1)">
              9月13日
            </Text>
          </Group>
          <Badge variant="dot" color="grape" size="lg">
            仕事
          </Badge>
        </Group>
      </Card>
    </>
  );
}
