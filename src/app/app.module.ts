import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule,MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatMenuModule } from '@angular/material';
import { FirstPageComponent } from './components/first-page/first-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';
import { ThirdPageComponent } from './components/third-page/third-page.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataDashboardComponent } from './components/data-dashboard/data-dashboard.component';

const appRoutes: Routes = [
  // { path: '', component: DashboardComponent},
  { path: 'first-page', component: FirstPageComponent},
  { path: 'second-page', component: SecondPageComponent},
  { path: 'third-page', component: ThirdPageComponent},
{ path: 'data-table', component: DataTableComponent},
{ path: 'data-dashboard', component: DataDashboardComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    DataTableComponent,
    DataDashboardComponent,

  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
