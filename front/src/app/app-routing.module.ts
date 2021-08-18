import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialComponent } from './testimonial/testimonial.component';




const routes: Routes = [
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: 'portfolio', component: PorfolioComponent},
    { path: 'resume', component: ResumeComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'testimonial', component: TestimonialComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
