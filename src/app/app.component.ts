import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'My Task list';
  taskList: string[] = [] ;

  ngOnInit(): void{
    if(localStorage.getItem('my_tasks'))
    throw new Error("Method not implemented.");
  }
}
