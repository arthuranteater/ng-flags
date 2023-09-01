import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'countries/:countryId', component: ItemComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
