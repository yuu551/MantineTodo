import { Container, Group, Title, Text } from "@mantine/core";

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

const getToday = () => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  // 月と日を文字列に変換し、"月日"の形式で表示する
  const formattedDate = month + "月" + day + "日";

  return formattedDate;
};

const getTodayDay = () => {
  const daysOfWeek = ["日", "月", "火", "水", "木", "金", "土"];
  const today = new Date();
  const dayOfWeekIndex = today.getDay();

  // 曜日を配列から取得
  const dayOfWeek = daysOfWeek[dayOfWeekIndex];

  return dayOfWeek;
};
