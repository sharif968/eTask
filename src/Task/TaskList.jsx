import { useContext } from "react";
import TaskHeading from "./TaskHeading";
import { TaskContext } from "../context/TaskContext";
import { FaStar } from "react-icons/fa";

export default function TaskList() {
  const {
    tasks,
    handleDeleteTask,
    handleFavourite,
    handleEditTask,
    
  } = useContext(TaskContext);
  return (
    <table className="table-fixed overflow-auto xl:w-full">
      <TaskHeading />
      {tasks.map((task) => {
        return (
          <tbody key={task.id}>
            <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
              <td>
                <button onClick={() => handleFavourite(task.id)}>
                  {task.isFavorite ? (
                    <FaStar color="yellow" />
                  ) : (
                    <FaStar color="gray" />
                  )}
                </button>
              </td>
              <td>{task.title}</td>
              <td>
                <div>{task.description}</div>
              </td>
              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag, index) => (
                    <li key={index}>
                      <span className="inline-block h-5 whitespace-nowrap rounded-[45px] bg-[#00D991A1] px-2.5 text-sm capitalize text-[#F4F5F6]">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </td>
              <td className="text-center">{task.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                  <button
                    className="text-blue-500"
                    onClick={() => {
                      handleEditTask(task);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
