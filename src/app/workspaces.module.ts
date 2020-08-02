import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkspacesComponent } from './workspaces/workspaces.component'
import { WorkspacesRoutingModule } from './workspaces-routing.module';


@NgModule({
  declarations: [
    WorkspacesComponent
  ],
  imports: [
    CommonModule,
    WorkspacesRoutingModule
  ]
})
export class WorkspacesModule { }
