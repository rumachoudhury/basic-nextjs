"use client"; //Must be the first line, no quotes wrapping it

import { TTodo } from "@/types";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

function AllTodos() {
  const [allTodos, setAllTodos] = useState<TTodo[]>([]);

  const fetchAllTodos = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/todos");
      setAllTodos(response.data.todos);
      console.log("Fetched todos:", response.data.todos);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  useEffect(() => {
    fetchAllTodos();
  }, []);
  console.log("All Todos:", allTodos);

  return (
    <div>
      <div className="overflow-x-auto max-w-4xl mx-auto bg-gray-100 p-4 rounded-lg shadow-md my-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Todo</th>
              <th>Status</th>
              <th>User ID</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allTodos.map((todo: TTodo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.todo}</td>
                {/*using ternary operator to check if the todo is completed or not*/}
                <td>{todo.completed ? "Completed" : "Not Completed"}</td>
                <td>{todo.userId}</td>
                <td className="flex gap-2">
                  <Link href={`/todo/${todo.id}`}>
                    <button className="btn btn-xs btn-primary">Details</button>
                  </Link>
                  <button className="btn btn-xs btn-primary">Edit</button>
                  <button className="btn btn-xs btn-secondary ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllTodos;
