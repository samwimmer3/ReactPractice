export default function NewProject({ addProject }) {
  return (
    <>
      <div className="w-full flex flex-col justify-center px-10">
        <label
          htmlFor="title"
          className="block text-gray-700 text-xl font-bold mt-6">
          Title
        </label>
        <input
          id="title"
          type="text"
          className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 text-xl leading-tight focus:outline-none"
        />
        <label
          htmlFor="description"
          className="block text-gray-700 text-xl font-bold mt-6">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 text-xl leading-tight focus:outline-none"
        />
        <label
          htmlFor="dueDate"
          className="block text-gray-700 text-xl font-bold mt-6">
          Due Date:
        </label>
        <input
          id="dueDate"
          type="date"
          className="shadow appearance-none border rounded w-full py-4 px-5 text-gray-700 text-xl leading-tight focus:outline-none"
        />
        <div className="flex justify-end space-x-6 mt-6">
          <button className="hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded text-lg">
            Cancel
          </button>
          <button className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-6 rounded text-lg">
            Save
          </button>
        </div>
      </div>
      `
    </>
  );
}
