import { AutoBind } from "../decorator/auto-bind";
import { projectState } from "../states/state";
import { Validation, validation } from "../util/validation";
import { Component } from "./base-components";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", false, "user-input");

    this.titleInputElement = <HTMLInputElement>(
      this.element.querySelector("#title")
    );
    this.descriptionInputElement = <HTMLInputElement>(
      this.element.querySelector("#description")
    );
    this.peopleInputElement = <HTMLInputElement>(
      this.element.querySelector("#people")
    );

    this.configure();
  }

  configure() {
    this.element.addEventListener("submit", this.formSubmission);
  }

  renderContent(): void {}

  private gatherUserInput(): [string, string, number] | void {
    const titleInput = this.titleInputElement.value;
    const descriptionInput = this.descriptionInputElement.value;
    const peopleInput = +this.peopleInputElement.value;

    const titleValidation: Validation = {
      value: titleInput,
      required: true,
      minLen: 2,
    };

    const descriptionValidation: Validation = {
      value: descriptionInput,
      required: true,
      minLen: 5,
      maxLen: 20,
    };

    const peopleValidation: Validation = {
      value: peopleInput,
      required: true,
      min: 1,
    };

    if (
      !validation(titleValidation) ||
      !validation(descriptionValidation) ||
      !validation(peopleValidation)
    ) {
      alert("Invalid - Input. Please Try Again Later");
      return;
    }

    return [titleInput, descriptionInput, peopleInput];
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @AutoBind
  private formSubmission(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;

      projectState.addProjects(title, desc, people);

      this.clearInputs();
    }
  }
}
