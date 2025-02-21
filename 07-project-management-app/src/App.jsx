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

  const deleteProject = (projectId) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );

    setProjects(updatedProjects);
    setActiveProjectId(updatedProjects[0].id);
  }

  const activeProject = projects.find(
    (project) => project.id === activeProjectId
  );

  //remove ability to add empty project with pop up...
  //add ability to add tasks to project
  //add ability to change active project while creating new project
  //style new page
  //add some type of sort to project sidebar?
  //add some type of other pages that track completed projects, etc.
  //allow project to complete... not just delete

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
          <Project activeProject={activeProject} deleteProject = {deleteProject} />
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
