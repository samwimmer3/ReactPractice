export default function Sidebar({
  projects,
  activeProjectId,
  setActiveProjectId,
  setNewProject,
}) {
  return (
    <aside className="w-64 bg-zinc-900 font-mono text-zinc-300 p-5 h-screen mt-8 rounded-tr-3xl flex flex-col min-w-64">
      <h2 className="text-2xl mb-4 font-mono text-center">Your Projects</h2>
      <button
        onClick={() => setNewProject(true)}
        className="bg-zinc-800 hover:text-zinc-300 text-zinc-500 px-6 py-2 rounded font-mono ">
        + Add Project
      </button>
      <ul className="mt-4 space-y-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className={`cursor-pointer hover:text-zinc-500 text-zinc-300 px-2 py-2 rounded font-mono  ${
              activeProjectId === project.id ? "bg-zinc-800" : ""
            }`}>
            <button className = "block w-full py-2 px-6 text-xl" onClick={() => setActiveProjectId(project.id)}>
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
