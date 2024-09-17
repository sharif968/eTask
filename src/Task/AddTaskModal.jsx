import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useState } from "react";

export default function AddTaskModal() {
  const { setShowAddModal, handleAddEditTask, taskToUpdate } =
    useContext(TaskContext);

  const initialTask = taskToUpdate || {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    tags: [],
    priority: "",
    isFavourite: false,
  };

  const [task, setTask] = useState(initialTask);
  const isAdd = !taskToUpdate;
  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: name === "tags" ? value.split(",") : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // if(!task.title || !task.description || !task.tags.length && !task.priority){
    //   toast.error("Please fill in all the fields.", {
    //     position: toast.POSITION.TOP_CENTER,
    //     autoClose: 3000,
    //   });
    //   return
    // }
    handleAddEditTask(task, isAdd);
  };
  return (
    <div className="fixed  inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <form
        className="relative mx-auto my-6 w-full max-w-[95%] sm:max-w-[400px] md:max-w-[500px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-6 sm:p-8 md:p-9"
        onSubmit={handleSubmit}
      >
        <button
          type="button"
          onClick={() => {
            setShowAddModal(false);
           
          }}
          className="absolute top-2 right-3 text-white text-2xl hover:text-red-600"
        >
          &times;
        </button>

        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          {isAdd ? " Add New Task" : "Edit Task"}{" "}
        </h2>

        <div className="space-y-6 text-white">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm">
              Title
            </label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5 text-sm"
              type="text"
              name="title"
              id="title"
              required
              value={task.title}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm">
              Description
            </label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 text-sm"
              type="text"
              name="description"
              id="description"
              required
              value={task.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="tags" className="block text-sm">
                Tags
              </label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5 text-sm"
                type="text"
                name="tags"
                id="tags"
                required
                value={task.tags.join(",")}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="priority" className="block text-sm">
                Priority
              </label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5 text-sm"
                name="priority"
                id="priority"
                required
                value={task.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="submit"
           
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
