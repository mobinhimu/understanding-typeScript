import { AutoBind } from "../decorator/auto-bind";
import { DragTarget } from "../models/drag-drop";
import { Project, ProjectStatus } from "../models/project";
import { projectState } from "../states/state";
import { Component } from "./base-components";
import { ProjectItem } from "./project-item";

export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  assignProject: any[] = [];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);

    this.renderContent();
    this.configure();
  }

  private renderProject() {
    const listEl = <HTMLUListElement>(
      document.getElementById(`${this.type}-projects-list`)!
    );

    listEl.innerHTML = "";

    for (const project of this.assignProject) {
      new ProjectItem(this.element.querySelector("ul")!.id, project);
    }
  }

  renderContent() {
    const listID = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listID;
    this.element.querySelector("h2")!.textContent = (
      this.type + " Projects"
    ).toUpperCase();
  }

  @AutoBind
  dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();

      const listEle = this.element.querySelector("ul")!;
      listEle.classList.add("droppable");
    }
  }

  @AutoBind
  dropHandler(event: DragEvent): void {
    const projectID = event.dataTransfer!.getData("text/plain");
    projectState.switchProject(
      projectID,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    );
  }

  @AutoBind
  dragLeaveHandler(event: DragEvent): void {
    const listEle = this.element.querySelector("ul")!;
    listEle.classList.remove("droppable");
  }

  configure(): void {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("drop", this.dropHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);

    projectState.addListener((projects: Project[]) => {
      const relevantProject = projects.filter((project) => {
        if (this.type === "active") {
          return project.status === ProjectStatus.Active;
        }

        return project.status === ProjectStatus.Finished;
      });

      this.assignProject = relevantProject;

      this.renderProject();
    });
  }
}
