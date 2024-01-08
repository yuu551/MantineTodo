import { Container, Group, Title, Text } from "@mantine/core";
import { getToday, getTodayDay } from "../utils/utils";

export function TodoTitle() {
  return (
    <Container size="md">
      <Group my={30} gap={8}>
        <Title order={2}>今日</Title>
        <Text c={"gray"} mt={9}>
          {getTodayDay()}
        </Text>
        <Text c={"gray"} mt={9}>
          {getToday()}
        </Text>
      </Group>
    </Container>
  );
}
