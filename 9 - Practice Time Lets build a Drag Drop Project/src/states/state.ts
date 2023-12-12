import { Project, ProjectStatus } from "../models/project";

type Listener<T> = (items: T[]) => void;

export class State<T> {
  addListener(listenerFn: Listener<T>) {
    this.listener.push(listenerFn);
  }

  protected listener: Listener<T>[] = [];
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;
  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();
    return this.instance;
  }

  addProjects(title: string, desc: string, people: number) {
    const newProject = new Project(
      crypto.randomUUID(),
      title,
      desc,
      people,
      ProjectStatus.Active
    );

    this.projects.push(newProject);
    this.stateHandler();
  }

  switchProject(projectID: string, projectStatus: ProjectStatus) {
    const project = this.projects.find((project) => project.id === projectID);

    if (project && projectStatus !== project.status) {
      project.status = projectStatus;
      this.stateHandler();
    }
  }

  private stateHandler() {
    for (const listenerFn of this.listener) {
      listenerFn(this.projects.slice());
    }
  }
}

export const projectState = ProjectState.getInstance();
