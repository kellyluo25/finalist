import { Injectable } from '@angular/core';
import { ListItem } from './list_item';

@Injectable({
  providedIn: 'root'
})

export class ListDataService {

  // list_item id counter
  id_counter = 0;

  // placeholder array for list
  list = [];

  constructor() {
  }

  // add list_item
  addListItem(list_item) {
    this.id_counter += 1
    list_item.id = this.id_counter;
    this.list.push(list_item);
      
      console.log(this.list);
    return this;
  }

  // delete list_item
  deleteListItem(list_itemID) {
    this.list = this.list.filter(function (list_item) {
        return list_item.id !== list_itemID
    });
    return this;
  }

  // update list_item
  updateListItem(list_itemID, list_values) {
    let currentlist_item = this.getListItem(list_itemID);
    Object.assign(currentlist_item, list_values);
    return currentlist_item;
  }

  // retrieve full list
  getList() {
    return this.list;
  }

  // get list_item by id
  getListItem(list_itemID) {
    return this.list.filter(function (list_item) {
        return list_item.id == list_itemID
      })[0];
  }

  // toggle list_item complete
  toggleListItem(list_item){
    let updatedlist_item = this.updateListItem(list_item.id, {
      complete: !list_item.complete
    });
    return updatedlist_item;
  }
}


