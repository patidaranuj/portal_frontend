import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServicesService } from 'src/app/services/admin-services.service';
import { Paper } from '../../classes/Paper';

@Component({
  selector: 'app-view-paper',
  templateUrl: './view-paper.component.html',
  styleUrls: ['./view-paper.component.css']
})
export class ViewPaperComponent implements OnInit {

  papers:Paper[]=[];
  
  constructor(private router:Router,private service:AdminServicesService) { }

  ngOnInit(): void {
    this.service.fetchPaper().subscribe((data)=>{
      this.papers=data;
    },
    (err)=>{
      console.log("error occurs");
    })
  }

}
