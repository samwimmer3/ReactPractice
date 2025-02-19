import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NewProject from "./components/NewProject";
import { useState } from "react";

function App() {
  
  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(1);
  const [newProject, setNewProject] = useState(false);

  const addProject = (title) => {
    const newProject = { id: projects.length + 1, title, tasks: [] };
    setProjects((prevProjects) => [...prevProjects, newProject]);
    setActiveProjectId(newProject.id);
  };

  const activeProject = projects.find(
    (project) => project.id === activeProjectId
  );

  return (
    <>
      <div className="flex">
        <Sidebar
          activeProjectId={activeProjectId}
          projects={projects}
          setActiveProjectId={setActiveProjectId}
          setNewProject={setNewProject}
        />
        {newProject ? <NewProject addProject={addProject} /> : <Project activeProject = {activeProject}/> }
      </div>
    </>
  );
}

export default App;
