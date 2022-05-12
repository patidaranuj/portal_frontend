import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Course } from '../component/classes/Courses';
import { Student } from '../component/classes/Student';
import { Paper } from '../component/classes/Paper';
@Injectable({
  providedIn: 'root'
})
export class AdminServicesService {

  constructor(private http:HttpClient) { }

  public fetchCourses():Observable<any>{
    return this.http.get<Course[]>("http://localhost:8080/viewcourse");
  }

  public fetchStudents():Observable<any>{
    return this.http.get<Student[]>("http://localhost:8080/admin/viewStudent");
  }

  public fetchPaper():Observable<any>{
    return this.http.get<Paper[]>("http://localhost:8080/admin/viewpaper")
  }

  public deletePaper(paperid:any){
    return this.http.delete("http://localhost:8080/admin"+'/deletepaper?id='+paperid);
  }

  public addCourse(Course:any)
  {
    return this.http.post("http://localhost:8080/admin/addCourse",Course);
  }

  public addStudent(Student:any){
    return this.http.post("http://localhost:8080/admin/addStudent",Student)
  }

  public addPapers(Paper:any)
  {
    return this.http.post("http://localhost:8080/admin/addpaper",Paper);
  }
}
