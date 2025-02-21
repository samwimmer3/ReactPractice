export default function Project({ activeProject, deleteProject }) {
  return (
    <div className="w-full flex flex-col justify-center px-10">
      <div className="flex justify-between items-center w-full px-10 py-6">
        <div className="flex flex-col justify-center font-mono">
          <h1 className="text-4xl font-bold text-zinc-800">
            {activeProject?.title}
          </h1>
          <p className="text-gray-600 text-m mt-2 text-zinc-500">
            {activeProject?.dueDate}
          </p>
          <p className="text-gray-800 text-lg mt-4">
            {activeProject?.description}
          </p>
        </div>
        <button
          className=" hover:text-zinc-500 text-zinc-800 font-bold py-2 px-4 rounded-m"
          onClick={() => deleteProject(activeProject?.id)}>
          Delete
        </button>
      </div>
      <hr className="border-t-4 border-gray-300 mt-6 w-11/12 mx-auto" />

      <div className=" justify-between items-center w-full px-10 py-6 font-mono">
        <h2 className="text-2xl font-bold text-zinc-800">Tasks</h2>

        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Enter a task..."
            className="w-1/2 bg-stone-200 rounded-lg py-2 px-4 text-lg focus:outline-none mt-2"
          />
          <button className="flex hover:text-zinc-500 text-zinc-800 font-bold py-2 px-4 rounded text-lg items-center mt-2">
            Add Task
          </button>
        </div>

        <ul className="mt-4 space-y-2 bg-stone-200 rounded-lg py-10">
          <li>Add a component here</li> {/* Need to make a component for this */}
        </ul>
      </div>
    </div>
  );
}
