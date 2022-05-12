import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { Paper } from '../../classes/Paper';

@Component({
  selector: 'app-delete-paper',
  templateUrl: './delete-paper.component.html',
  styleUrls: ['./delete-paper.component.css']
})
export class DeletePaperComponent implements OnInit {

  papers:Paper[]=[];
  
  constructor(private adminService:AdminServicesService,private router :Router) { }

  ngOnInit(): void {
    this.adminService.fetchPaper().subscribe((data)=>{
      this.papers=data;
    },
    (err)=>{
      console.log("error occurs");
    })
  }

  deletePaper(paperid:any){
    this.papers.splice(this.papers.indexOf(paperid), 1);
    this.adminService.deletePaper(paperid.pid).subscribe((data)=>{
      console.log("paper Deleted");
      this.router.navigate(['/admin/deletepaper'])
      
    },
    (error)=>{
      console.log(error);
    }
    );
  }

}
