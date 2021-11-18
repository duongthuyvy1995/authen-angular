import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AdminRoleGuard } from './admin-role.guard';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductListComponent, ProductEditComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: ProductListComponent },
      { path: 'add-product', component: ProductEditComponent, canActivate: [AdminRoleGuard] },
    ]),
  ]
})
export class VyProductsModule { }
