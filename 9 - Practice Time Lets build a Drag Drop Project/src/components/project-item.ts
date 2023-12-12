import { AutoBind } from "../decorator/auto-bind";
import { Draggable } from "../models/drag-drop";
import { Project } from "../models/project";
import { Component } from "./base-components";

export class ProjectItem
  extends Component<HTMLUListElement, HTMLElement>
  implements Draggable
{
  private project: Project;

  get persons() {
    if (this.project.people === 1) {
      return "1 person is";
    } else {
      return this.project.people + " persons is";
    }
  }

  constructor(hostID: string, project: Project) {
    super("single-project", hostID, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  @AutoBind
  startDragging(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.element.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  @AutoBind
  endDragging(_: DragEvent): void {}

  configure(): void {
    this.element.addEventListener("dragstart", this.startDragging);
    this.element.addEventListener("dragend", this.endDragging);
  }

  renderContent(): void {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons + " assigned";
    this.element.querySelector("p")!.textContent = this.project.desc;
  }
}
