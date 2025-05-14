import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-50">
      <header class="bg-white shadow">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 class="text-xl font-semibold text-gray-900">Панель управления</h1>
          <button 
            (click)="logout()" 
            class="btn bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Выйти
          </button>
        </div>
      </header>
      <main>
        <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div class="px-4 py-6 sm:px-0">
            <div class="rounded-lg h-96 flex items-center justify-center bg-white shadow">
              <div class="text-center">
                <h2 class="text-2xl font-bold text-gray-800 mb-2">Добро пожаловать в панель управления</h2>
                <p class="text-gray-600">Вы успешно вошли в свой аккаунт.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  `
})
export class DashboardComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}