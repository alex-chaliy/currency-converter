import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// view modules
import { DashboardModule } from './views/dashboard/dashboard.module';
import { PageNotFoundModule } from './views/page-not-found/page-not-found.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,

    // view modules
    DashboardModule,
    PageNotFoundModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'currency-convert';
}
