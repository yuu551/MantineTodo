import { Container, Table } from "@mantine/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { Select, ComboboxItem } from "@mantine/core";
import { DateTimePicker, DateValue } from "@mantine/dates";
import { TodoCard } from "./TodoCard";

type Todo = {
  id: number;
  content: string;
  status: string;
  deadline: string;
  userId: number;
};

export function TodoTable() {
  //Todoのデータ
  const [todoData, setTodoData] = useState<Todo[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/todos/").then((result) => {
      const todos: Todo[] = result.data.todos.map((row: Todo) => {
        return row;
      });
      setTodoData(todos);
    });
  }, []);

  return (
    <Container size="md">
      {/*
                <Table miw={700}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>やること</Table.Th>
            <Table.Th>ステータス</Table.Th>
            <Table.Th>期日</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {todoData?.map((row) => {
            return (
              <Table.Tr key={row.id}>
                <Table.Td>{row.content}</Table.Td>
                <Table.Td>
                  <TableSelect rowData={row} />
                </Table.Td>
                <Table.Td>
                  <TableDateTime rowData={row} />
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
            */}
      <TodoCard />
    </Container>
  );
}

type TableSelectProps = {
  rowData: Todo;
};

type TableDateTimeProps = {
  rowData: Todo;
};

const TableSelect = ({ rowData }: TableSelectProps) => {
  const [seletctStatus, setStatus] = useState<ComboboxItem | null>({
    value: rowData.status,
    label: rowData.status,
  });

  const onChangeSelect = async (option: ComboboxItem) => {
    try {
      const res = await axios.put("http://localhost:8080/todos/" + rowData.id, {
        ...rowData,
        status: option.value,
      });
      console.log(res);
      setStatus(option);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Select
      data={["in_progress", "completed"]}
      value={seletctStatus ? seletctStatus.value : null}
      onChange={(_value, option) => onChangeSelect(option)}
    ></Select>
  );
};

const TableDateTime = ({ rowData }: TableDateTimeProps) => {
  const [dateTime, setDateTime] = useState<Date | DateValue>(
    new Date(rowData.deadline)
  );
  const onChangeDateTime = async (value: DateValue) => {
    console.log(value);
    try {
      const res = await axios.put("http://localhost:8080/todos/" + rowData.id, {
        ...rowData,
        deadline: value,
      });
      console.log(res);
      setDateTime(value);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <DateTimePicker
      valueFormat="YYYY/MM/DD HH:mm "
      defaultValue={new Date(rowData.deadline)}
      value={dateTime}
      onChange={(value) => onChangeDateTime(value)}
    />
  );
};
