export interface TodoState {
  readonly todos: TodoModel[];
  readonly nextId: number
}

export class TodoModel {
  public readonly id: number;
  public readonly text: string;
  public readonly completed: boolean = false;


  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }
}
