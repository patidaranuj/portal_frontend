import { Component, Input, OnInit } from '@angular/core';
import { addPaper } from '../../classes/addPaper';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  
  description:string='';
  @Input('addPaper') addPaper:addPaper | undefined;

  constructor() { }

  ngOnInit(){
    
    console.log("this is child component")
    //console.log(addPaper)
  }

  check(){
    console.log("this is child component cheking")
    console.log(addPaper)
  }
}
