import {
  Container,
  Text,
  Button,
  Modal,
  TextInput,
  Select,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";

export function TodoAddArea() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Container size={"md"} mt={30}>
      <Button
        fullWidth
        leftSection={<IconPlus color="#228BE6" />}
        color="var(--mantine-color-gray-light)"
        size="lg"
        onClick={open}
      >
        <Text c={"blue"}>タスクを追加</Text>
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={<Text fw={"bold"}>Todo追加</Text>}
        centered
      >
        <TextInput label="やること" />
        <DateTimePicker mt={10} label="期日" valueFormat="YYYY/MM/DD HH:mm" />
        <Select mt={10} label="カテゴリー" data={["家事", "技術", "その他"]} />
        <Button fullWidth leftSection={<IconPlus />} my={20}>
          追加
        </Button>
      </Modal>
    </Container>
  );
}
