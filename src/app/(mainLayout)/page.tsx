import AllTodos from "@/components/AllTodos";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function HomePage() {
  return (
    <div>
      <div>
        <Image
          src="https://cdni.iconscout.com/illustration/premium/thumb/todo-list-illustration-download-in-svg-png-gif-file-formats--checklist-task-food-drink-illustrations-2371075.png?f=webp"
          alt="Todo Image"
          width={500}
          height={500}
          className="flex justify-center items-center mx-auto"
        />
      </div>
      <div className="flex items-center justify-center ">
        <Button className="text-white text-center bg-blue-500">Click me</Button>
      </div>

      <AllTodos />
    </div>
  );
}

export default HomePage;
