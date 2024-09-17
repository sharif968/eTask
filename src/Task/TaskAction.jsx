import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { toast } from "react-toastify";

export default function TaskAction() {
  const { setShowAddModal, setTaskToUpdate, handleDeleteAllTask } =
    useContext(TaskContext);
  return (
    <div className="my-6 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
      <div className="flex items-center space-x-5">
        <button
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={() => {
            setShowAddModal(true);
          }}
        >
          Add Task
        </button>
        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
          onClick={() => {
            handleDeleteAllTask();
            toast.error("All tasks deleted successfully");
          }}
        >
          Delete All
        </button>
      </div>
    </div>
  );
}
