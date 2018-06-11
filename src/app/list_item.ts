export class ListItem {
  id: number;
  title: string = '';
  completed: boolean = false;

  constructor(list_values: Object = {}) {
    Object.assign(this, list_values);
  }
}
