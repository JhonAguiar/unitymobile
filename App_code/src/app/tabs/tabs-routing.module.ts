import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../pages/myhelpdesk/myhelpdesk.module').then(m => m.MyhelpdeskPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/technician/technician.module').then(m => m.TechnicianPageModule)
          },
          {
            path: ':incidentNr',
            loadChildren: () => import('../pages/technician-detail/technician-detail.module').then( m => m.TechnicianDetailPageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/solvedincident/solvedincident.module').then(m => m.SolvedincidentPageModule)
          },
          {
            path: ':incidentNr',
            loadChildren: () => import('../pages/solvedincident-detail/solvedincident-detail.module').then( m => m.SolvedincidentDetailPageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/historyincidents/historyincidents.module').then(m => m.HistoryincidentsPageModule)
          },
          {
            path: ':incidentNr',
            loadChildren: () => import('../pages/historyincidents-detail/historyincidents-detail.module').then( m => m.HistoryincidentsDetailPageModule)
          }
        ]
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
          },
          {
            path: ':incidentNr',
            loadChildren: () => import('../pages/historyincidents-detail/historyincidents-detail.module').then( m => m.HistoryincidentsDetailPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
