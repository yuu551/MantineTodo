import {
  Container,
  Text,
  Button,
  Modal,
  TextInput,
  Select,
  Divider,
  Group,
  useCombobox,
  Combobox,
  InputBase,
  Input,
} from "@mantine/core";
import { DateTimePicker } from "@mantine/dates";
import { useDisclosure } from "@mantine/hooks";
import { IconPlus } from "@tabler/icons-react";
import { Indicator } from "@mantine/core";
import { useState } from "react";
import { Category } from "../types/Todo";
import { Categories } from "../utils/constants";
import { useForm } from "@mantine/form";

const SelectOption = ({ value, color }: Category) => {
  return (
    <Group>
      <Indicator color={color}></Indicator>
      <Text>{value}</Text>
    </Group>
  );
};

export function TodoAddArea() {
  const form = useForm({
    initialValues: {
      content: "",
      status: "in_progress",
      deadline: "",
      userId: 1,
      category: "",
    },
  });
  const [opened, { open, close }] = useDisclosure(false);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const selectedOption = Categories.find((item) => item.value === value);

  const options = Categories.map((item) => (
    <Combobox.Option value={item.value} key={item.value}>
      <SelectOption {...item} />
    </Combobox.Option>
  ));

  const formOnSubmit = (values: any) => {
    console.log(values);
    close();
  };

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
        withCloseButton={false}
        radius={16}
        size={600}
        title={<Text fw={"bold"}>タスク追加</Text>}
      >
        <form onSubmit={form.onSubmit((values) => formOnSubmit(values))}>
          <TextInput
            placeholder="タスク名"
            radius="xl"
            variant="unstyled"
            {...form.getInputProps("content")}
          />
          <DateTimePicker
            mt={3}
            placeholder="期限"
            radius="xl"
            variant="unstyled"
            valueFormat="YYYY/MM/DD HH:mm"
            {...form.getInputProps("deadline")}
          />
          <Divider my="xs" />
          <Group justify="space-between">
            <Combobox
              store={combobox}
              onOptionSubmit={(val) => {
                setValue(val);
                form.setFieldValue("category", val);
                combobox.closeDropdown();
              }}
            >
              <Combobox.Target>
                <InputBase
                  component="button"
                  type="button"
                  pointer
                  onClick={() => combobox.toggleDropdown()}
                  rightSectionPointerEvents="none"
                  multiline
                  variant="unstyled"
                  w={300}
                >
                  {selectedOption ? (
                    <SelectOption {...selectedOption} />
                  ) : (
                    <Input.Placeholder>カテゴリ</Input.Placeholder>
                  )}
                </InputBase>
              </Combobox.Target>

              <Combobox.Dropdown>
                <Combobox.Options>{options}</Combobox.Options>
              </Combobox.Dropdown>
            </Combobox>

            <Group style={{ flexDirection: "row-reverse" }}>
              <Button size="xs" type="submit">
                タスクを追加
              </Button>
              <Button size="xs" color="gray" onClick={close}>
                キャンセル
              </Button>
            </Group>
          </Group>
        </form>
      </Modal>
    </Container>
  );
}
