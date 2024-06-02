import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.css',
})
export class ToDoComponent {
  tasks_arr: string[] = [];
  newTask: string = '';
  isTableHidden: boolean = true;
  AddTask() {
    if (this.newTask != '' || this.newTask != null) {
      this.tasks_arr.push(this.newTask);
      this.isTableHidden = false;
      this.newTask = '';
    }
  }

  EditTask(index: number) {
    if (this.tasks_arr.length > 0) {
      let updatedTask = prompt('Enter the new value', this.tasks_arr[index]);
      if (updatedTask != null && updatedTask != '') {
        this.tasks_arr[index] = updatedTask;
      }
    }
  }
  RemoveTask(index: number) {
    if (this.tasks_arr.length > 0) {
      this.tasks_arr.splice(index, 1);
      this.isTableHidden = this.tasks_arr.length < 1;
    }
  }
}
