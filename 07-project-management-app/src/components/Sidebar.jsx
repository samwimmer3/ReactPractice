export default function Sidebar() {
  return (
      <aside className="w-64 bg-zinc-900 font-mono text-zinc-300 p-5 h-screen mt-8 rounded-tr-3xl items-center flex flex-col">
        <h2 className="text-2xl mb-4 font-mono text-center">Your Projects</h2>
        <button className="bg-zinc-800 hover:text-zinc-300 text-zinc-500 px-6 py-2 rounded font-mono">+ Add Project</button>
      </aside>
  );
}
