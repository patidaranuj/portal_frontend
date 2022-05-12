import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { addPaper } from '../../classes/addPaper';
import { Question } from '../../classes/Question';
import { AddQuestionComponent } from '../add-question/add-question.component';

@Component({
  selector: 'app-add-paper',
  templateUrl: './add-paper.component.html',
  styleUrls: ['./add-paper.component.css']
})
export class AddPaperComponent implements OnInit {

  addPaper:addPaper={
    name:'',
    courseId:'',
    numOfQues:'',
    maxMark:'',
  }
  constructor(private adminService:AdminServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  add()
  {
    //this.router.navigate(['/admin/addpaper/addquestion'])
    //this.adminService.addPapers(this.addPaper).subscribe((data)=>{
      console.log("this.addPaper");
      // this.addQuetion.check();
    }
  
  parentmethod()
  {
    console.log("this is aprent method");
  }
  }

// }
