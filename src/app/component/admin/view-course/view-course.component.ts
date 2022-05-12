import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { Course } from '../../classes/Courses';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent implements OnInit {

  course:Course[]=[];
  constructor(private router:Router,private service:AdminServicesService) { }

  ngOnInit(): void {
    this.service.fetchCourses().subscribe((data)=>{
      this.course=data;
    },
    (err)=>{
      console.log("error occurs");
    })
  }

}
