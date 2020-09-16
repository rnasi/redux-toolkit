export class TodoModel {
  public id: number;
  public text: string;
  public completed: boolean = false;


  constructor(id: number, text: string) {
    this.id = id;
    this.text = text;
  }
}
