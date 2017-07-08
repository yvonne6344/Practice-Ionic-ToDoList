import { Component, ViewChild } from '@angular/core';
import { NavController, List } from 'ionic-angular';
import { Task } from './task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
@ViewChild(List) list: List;
  public tasks : Task[];

  constructor(public navCtrl: NavController) {
    this.tasks = [
      { id: 1, title: 'Front-End Interviews', isDone: false, isEdit: false },
      { id: 2, title: 'Learn JavaScript', isDone: false, isEdit: false },
      { id: 3, title: 'Coding Coding Coding', isDone: false, isEdit: false },
    ];
  }

  // Add Task
  addTask(title){
   if(title){
     this.tasks.push(new Task(title));
   }
  }

  // Edit Task
  editTask(task){
    task.isEdit = !task.isEdit;
    this.list.closeSlidingItems();
  }

  // Delete Task
  deleteTask(id){
    console.log('The index being passed: ' + id)
    this.tasks.splice(id,1);
  }

}
