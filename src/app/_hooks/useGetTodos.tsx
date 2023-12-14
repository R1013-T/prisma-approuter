import { prisma } from "@/prisma";

export default async function useGetTodos() {
  const todos = await prisma.todo.findMany();
  return todos;
}