import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },  
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'your-rides',
    loadChildren: () => import('./pages/your-rides/your-rides.module').then( m => m.YourRidesPageModule)
  },
  {
    path: 'offer-rides',
    loadChildren: () => import('./pages/offer-rides/offer-rides.module').then( m => m.OfferRidesPageModule)
  },
  {
    path: 'find-rides',
    loadChildren: () => import('./pages/find-rides/find-rides.module').then( m => m.FindRidesPageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./pages/inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'stopovers',
    loadChildren: () => import('./pages/stopovers/stopovers.module').then( m => m.StopoversPageModule)
  },
  {
    path: 'stopovers-list',
    loadChildren: () => import('./pages/stopovers-list/stopovers-list.module').then( m => m.StopoversListPageModule)
  },
  {
    path: 'booking-slider',
    loadChildren: () => import('./pages/booking-slider/booking-slider.module').then( m => m.BookingSliderPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'preferences',
    loadChildren: () => import('./pages/preferences/preferences.module').then( m => m.PreferencesPageModule)
  },
  {
    path: 'add-car',
    loadChildren: () => import('./pages/add-car/add-car.module').then( m => m.AddCarPageModule)
  },
  {
    path: 'chat-list',
    loadChildren: () => import('./pages/chat-list/chat-list.module').then( m => m.ChatListPageModule)
  },
  {
    path: 'id-verify',
    loadChildren: () => import('./pages/id-verify/id-verify.module').then( m => m.IdVerifyPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'car-info',
    loadChildren: () => import('./pages/car-info/car-info.module').then( m => m.CarInfoPageModule)
  }, 
  {
    path: 'payments',
    loadChildren: () => import('./pages/payments/payments.module').then( m => m.PaymentsPageModule)
  },
  {
    path: 'myhelpdesk',
    loadChildren: () => import('./pages/myhelpdesk/myhelpdesk.module').then( m => m.MyhelpdeskPageModule)
  },
  {
    path: 'incident-detail',
    loadChildren: () => import('./pages/incident-detail/incident-detail.module').then( m => m.IncidentDetailPageModule)
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
        loadChildren: () => import('./pages/incident-detail/incident-detail.module').then( m => m.IncidentDetailPageModule)
      },
      {
        path: 'incident-technician-detail',
        children: [
          {
            path: ':incidentNr',
            loadChildren: () => import('./pages/technician-detail/technician-detail.module').then( m => m.TechnicianDetailPageModule)
          }
        ]
      },
      {
        path: 'incidentdetailsolved',
        children: [
          {
            path: ':incidentNr',
            loadChildren: () => import('./pages/incident-detail/incident-detail.module').then( m => m.IncidentDetailPageModule)
          }
        ]
      }
    
    ]
  },
  {
    path: 'newincident',
    loadChildren: () => import('./pages/newincident/newincident.module').then( m => m.NewincidentPageModule)
  },
  {
    path: 'technician',
    loadChildren: () => import('./pages/technician/technician.module').then( m => m.TechnicianPageModule)
  },
  {
    path: 'technician-detail',
    loadChildren: () => import('./pages/technician-detail/technician-detail.module').then( m => m.TechnicianDetailPageModule)
  },
  {
    path: 'solvedincident',
    loadChildren: () => import('./pages/solvedincident/solvedincident.module').then( m => m.SolvedincidentPageModule)
  },
  {
    path: 'solvedincident-detail',
    loadChildren: () => import('./pages/solvedincident-detail/solvedincident-detail.module').then( m => m.SolvedincidentDetailPageModule)
  },
  {
    path: 'historyincidents-detail',
    loadChildren: () => import('./pages/historyincidents-detail/historyincidents-detail.module').then( m => m.HistoryincidentsDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
