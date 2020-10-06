import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'tabs',   
    children: [
      {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule),
      },
      {
        path: ':incidentNr',
        loadChildren: () => import('./incident-detail2/incident-detail2.module').then( m => m.IncidentDetail2PageModule)
      },
      {
        path: 'incident-technician-detail',
        children: [
          {
            path: ':incidentNr',
            loadChildren: () => import('./incident-technician-detail/incident-technician-detail.module').then(m => m.IncidentTechnicianDetailPageModule)
          }
        ]
      },
      {
        path: 'incidentdetailsolved',
        children: [
          {
            path: ':incidentNr',
            loadChildren: () => import('./incidentdetailsolved/incidentdetailsolved.module').then( m => m.IncidentdetailsolvedPageModule)
          }
        ]
      }
    
    ]
  },
  {
    path: 'tab1-detail',
    loadChildren: () => import('./tab1-detail/tab1-detail.module').then( m => m.Tab1DetailPageModule)
  },
  {
    path: 'newincident',
    loadChildren: () => import('./newincident/newincident.module').then( m => m.NewincidentPageModule)
  },
  {
    path: 'incident-technician-detail',
    loadChildren: () => import('./incident-technician-detail/incident-technician-detail.module').then( m => m.IncidentTechnicianDetailPageModule)
  },
  {
    path: 'incidentdetailsolved',
    loadChildren: () => import('./incidentdetailsolved/incidentdetailsolved.module').then( m => m.IncidentdetailsolvedPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
