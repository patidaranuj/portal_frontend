import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addstudent={
    enrollId:'',
    name:'',
    branch:'',
    sem:'',
    email:'',
    password:'',
    course:''
  }

  constructor(private adminService:AdminServicesService,private router:Router) { }

  ngOnInit(): void {
  }
  
  add(){
    this.adminService.addStudent(this.addstudent).subscribe((data)=>{
      console.log(data)
      Swal.fire({
        title:"Successful",
        icon:'success',
        text:"Course Added Successfully",
        iconColor:"green"
      })
      this.router.navigate(['/admin/viewstudent'])
    },(error)=>{
      console.log("error occured while adding student");
      Swal.fire({
        title:"Error Occured",
        icon:'error',
        text:"Please check Details",
        iconColor:"red"
      })
    });
  }

}
