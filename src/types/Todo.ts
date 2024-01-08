export type Todo = {
  id: number;
  content: string;
  status: string;
  deadline: string;
  userId: number;
  category: string;
};
export type Category = {
  id: number;
  value: string;
  color: string;
};
