import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import NewProject from "./components/NewProject";
import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProjectId] = useState(1);
  const [newProject, setNewProject] = useState(false);

  const addProject = ({ title, description, dueDate }) => {
    const newProject = {
      id: projects.length + 1,
      title,
      description,
      dueDate,
      tasks: [],
    };
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
        {newProject && (
          <NewProject addProject={addProject} setNewProject={setNewProject} />
        )}
        {!newProject && projects.length > 0 && (
          <Project activeProject={activeProject} />
        )}
        {!newProject && projects.length === 0 && (
          <div className="w-full flex flex-col justify-center px-10">
            <h2>
              No projects yet. Click on + Add Project to create a new project.
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
