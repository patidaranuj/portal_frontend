import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { Student } from '../../classes/Student';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {

  students:Student[]=[];
  constructor(private router:Router,private service:AdminServicesService) { }

  ngOnInit(): void {
    this.service.fetchStudents().subscribe((data)=>{
      this.students=data;
    },
    (err)=>{
      console.log("error occurs");
    })
  }

}
