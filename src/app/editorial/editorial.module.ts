import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditorialListComponent } from './editorial-list/editorial-list.component'
import { EditorialRoutingModule } from './editorial-routing.routing'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EditorialRoutingModule
  ],
  declarations: [EditorialListComponent]
})
export class EditorialModule { }
