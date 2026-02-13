import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'projects',
        loadComponent: () =>
            import('./pages/projects/projects.component').then(m => m.ProjectsComponent)
    },
    {
        path: 'imprint',
        loadComponent: () =>
            import('./pages/imprint/imprint.component').then(m => m.ImprintComponent)
    },
    {
        path: 'privacy',
        loadComponent: () =>
            import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent)
    }
];
