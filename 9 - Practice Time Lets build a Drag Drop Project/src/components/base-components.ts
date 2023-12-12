export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  tempEle: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostElementID: string,
    insertAtStart: boolean,
    newElementID?: string
  ) {
    this.tempEle = <HTMLTemplateElement>document.getElementById(templateId);
    this.hostElement = <T>document.getElementById(hostElementID);

    const importNode = document.importNode(this.tempEle.content, true);
    this.element = <U>importNode.firstElementChild;

    if (newElementID) this.element.id = newElementID;

    this.attach(insertAtStart);
  }

  private attach(insertAtStart: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtStart ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
