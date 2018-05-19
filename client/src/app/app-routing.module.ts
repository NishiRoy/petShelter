import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddNewComponent } from './add-new/add-new.component';
import { EditComponent } from './edit/edit.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'',redirectTo:'pets',pathMatch:'full'},
  {path:'pets',component:HomeComponent},
  {path:'pets/new',component:AddNewComponent},
  {path:'pets/details/:id',component:DetailsComponent},
  {path:'pets/edit/:id',component:EditComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponent=[HomeComponent,PageNotFoundComponent,AddNewComponent,EditComponent,DetailsComponent];
