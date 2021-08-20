import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { StarComponent } from "../shared/component/star/star.component";
import { StarModule } from "../shared/component/star/star.module";
import { CourseInfoComponent } from "./course-info.component";
import { CourseListComponent } from "./course-list.component";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";


@NgModule({
    declarations: [
        CourseListComponent,
        CourseInfoComponent,        
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses/info/:id',
                component: CourseInfoComponent
            },
            {
                path: 'courses',
                component: CourseListComponent
            },
        ])
    ]
})
export class CourseModule {

}