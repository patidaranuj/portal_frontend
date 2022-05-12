import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCourseComponent } from './component/admin/add-course/add-course.component';
import { AddStudentComponent } from './component/admin/add-student/add-student.component';
import { AdminhomeComponent } from './component/admin/adminhome/adminhome.component';
import { CenterPartComponent } from './component/admin/center-part/center-part.component';
import { DeletePaperComponent } from './component/admin/delete-paper/delete-paper.component';
import { MainNavbarComponent } from './component/admin/main-navbar/main-navbar.component';
import { MediImageComponent } from './component/admin/medi-image/medi-image.component';
import { TopNavbarComponent } from './component/admin/top-navbar/top-navbar.component';
import { ViewCourseComponent } from './component/admin/view-course/view-course.component';
import { ViewStudentComponent } from './component/admin/view-student/view-student.component';
import { ViewStudentSemesterComponent } from './component/admin/view-student-semester/view-student-semester.component';
import { ViewPaperComponent } from './component/admin/view-paper/view-paper.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddPaperComponent } from './component/admin/add-paper/add-paper.component';
import { AddQuestionComponent } from './component/admin/add-question/add-question.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCourseComponent,
    AddStudentComponent,
    AdminhomeComponent,
    CenterPartComponent,
    DeletePaperComponent,
    MainNavbarComponent,
    MediImageComponent,
    TopNavbarComponent,
    ViewCourseComponent,
    ViewStudentComponent,
    ViewStudentSemesterComponent,
    ViewPaperComponent,
    AddPaperComponent,
    AddQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
