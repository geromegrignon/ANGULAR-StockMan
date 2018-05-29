import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatGridListModule,
  MatChipsModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatSelectModule,
  MatDialogModule
 } from '@angular/material';

const MODULE = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatGridListModule,
  MatChipsModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule,
  MatSelectModule,
  MatDialogModule
];

@NgModule({
  imports: [
    ...MODULE
  ],
  exports: [
    MODULE
  ],
  declarations: []
})
export class MaterialModule { }

