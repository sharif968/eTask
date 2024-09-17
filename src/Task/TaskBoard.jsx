import { useContext } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import { TaskContext } from "../context/TaskContext";
import NoTaskFound from "./NoTaskFound";

export default function TaskBoard() {
  const { showAddModal, tasks } = useContext(TaskContext);

  return (
    <section className="mb-20 mx-10" id="tasks">
      {showAddModal && <AddTaskModal />}

      <SearchTask />
      <TaskAction />
      {tasks.length === 0 ? (
        <NoTaskFound />
      ) : (
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="overflow-auto">
            <TaskList />
          </div>
        </div>
      )}
    </section>
  );
}
