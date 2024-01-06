import { CategoryBadges } from "../components/CategoryBudges";
import { Header } from "../components/Header";
import { TodoAddArea } from "../components/TodoAddArea";
import { TodoTable } from "../components/TodoTable";
import { TodoTitle } from "../components/TodoTitle";

export function TodoListPage() {
  return (
    <>
      <Header />
      <TodoTitle />
      <CategoryBadges />
      <TodoTable />
      <TodoAddArea />
    </>
  );
}
