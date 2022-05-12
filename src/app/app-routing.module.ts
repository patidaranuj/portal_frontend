import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './component/admin/add-course/add-course.component';
import { AddPaperComponent } from './component/admin/add-paper/add-paper.component';
import { AddQuestionComponent } from './component/admin/add-question/add-question.component';
import { AddStudentComponent } from './component/admin/add-student/add-student.component';
import { AdminhomeComponent } from './component/admin/adminhome/adminhome.component';
import { DeletePaperComponent } from './component/admin/delete-paper/delete-paper.component';
import { ViewCourseComponent } from './component/admin/view-course/view-course.component';
import { ViewPaperComponent } from './component/admin/view-paper/view-paper.component';
import { ViewStudentComponent } from './component/admin/view-student/view-student.component';

const routes: Routes = [{
  path:'admin',
  // component:AdminhomeComponent, 
    children:[
    {
      path:'',
      component:AdminhomeComponent
    },
    {
      path:'viewstudent',
      component:ViewStudentComponent
    },
    {
      path:'viewcourse',
      component:ViewCourseComponent
    }, {
      path:'viewpaper',
      component:ViewPaperComponent
      
    },
    {
      path:'deletepaper',
      component:DeletePaperComponent
    },
    {
      path:'addcourse',
      component:AddCourseComponent
    },
    {
      path:'addstudent',
      component:AddStudentComponent
    },
    {
      path:'addpaper',
      component:AddPaperComponent,
      children:[{
        path:'addquestion',
        component:AddQuestionComponent
      }
      ]
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
