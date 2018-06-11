import { Component } from '@angular/core';
import { ListItem } from './list_item';
import { ListDataService } from './list_data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListDataService]
})
export class AppComponent {

  newlist_item = new ListItem();

  constructor(private ListDataService: ListDataService) {
  }
  
  // retrieve list
  get list() {
    return this.ListDataService.getList();
  }

  addListItem() {
    this.ListDataService.addListItem(this.newlist_item);
    this.newlist_item = new ListItem();
  }

  toggleListItem(list_item) {
    this.ListDataService.toggleListItem(list_item);
  }

  deleteListItem(list_item) {
    this.ListDataService.deleteListItem(list_item.id);
  }

}