import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  public addcourse={
    courseId:'',
    courseName:'',
    branch:''
  }
  constructor(private adminService:AdminServicesService,private router :Router) { }


  ngOnInit(): void {
  }

  add(){
      this.adminService.addCourse(this.addcourse).subscribe((data)=>{
        console.log(data);
        Swal.fire({
          title:"Successful",
          icon:'success',
          text:"Course Added Successfully",
          iconColor:"green"
        })
        this.router.navigate(['/admin/viewcourse'])
      },(error)=>{
        console.log("error occured in adding course");
      });
  }

}
