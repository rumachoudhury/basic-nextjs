"use client";

import { TTodo } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

function SingleTodos({ id }: { id: number }) {
  console.log("Todo ID:", id);
  const [singleTodo, setSingleTodo] = useState<TTodo>();

  const fetchSingleTodo = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/todos/${id}`);
      setSingleTodo(response.data);
      console.log("Fetched todos:", response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  useEffect(() => {
    fetchSingleTodo();
  }, [id]);
  //   console.log("All Todos:", setSingleTodo);
  return (
    <div>
      <h1>{singleTodo?.todo}</h1>
      <p>{singleTodo?.completed ? "Completed" : "Not Completed"}</p>
      <p>User ID:{singleTodo?.userId}</p>
    </div>
  );
}

export default SingleTodos;
