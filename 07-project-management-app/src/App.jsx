import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="text-gray-500 flex-1 p-6 text-center justify-center flex flex-col"> 
          <h1>Here is where the projects will be</h1>
        </main>
      </div>
    </>
  );
}

export default App;
