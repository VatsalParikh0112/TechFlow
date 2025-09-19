import { Routes } from '@angular/router';
import { Dashboard } from './routes/dashboard/dashboard';
import { Analytics } from './routes/analytics/analytics';
import { Team } from './routes/team/team';
import { Projects } from './routes/projects/projects';
import { PageNotFound } from './routes/page-not-found/page-not-found';
// layouts
import { ProductLayout } from './layout/product-layout/product-layout';
import { CompanyLayout } from './layout/company-layout/company-layout';
import { HeaderLayout } from './layout/header-layout/header-layout';
import { SupportLayout } from './layout/support-layout/support-layout';

// pages
import { Features } from './pages/products/features/features';
import { Pricing } from './pages/products/pricing/pricing';
import { Documentation } from './pages/products/documentation/documentation';
import { Api } from './pages/products/api/api';

import { About } from './pages/company/about/about';
import { Blog } from './pages/company/blog/blog';
import { Career } from './pages/company/career/career';
import { Contact } from './pages/company/contact/contact';

import { Signin } from './pages/header/signin/signin';
import { Getstarted } from './pages/header/getstarted/getstarted';

import { Helpcenter } from './pages/support/helpcenter/helpcenter';
import { Settings } from './pages/support/settings/settings';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: Dashboard, title: 'Dashboard' },
  { path: 'analytics', component: Analytics, title: 'Analytics' },
  { path: 'team', component: Team, title: 'Team' },
  { path: 'projects', component: Projects, title: 'Projects' },
  {
    path: 'header',
    component: HeaderLayout,
    children: [
      { path: 'signin', component: Signin },
      { path: 'getstarted', component: Getstarted },
    ],
  },
  {
    path: 'products',
    component: ProductLayout,
    children: [
      { path: 'features', component: Features },
      { path: 'pricing', component: Pricing },
      { path: 'documentation', component: Documentation },
      { path: 'api', component: Api },
    ],
  },
  {
    path: 'company',
    component: CompanyLayout,
    children: [
      { path: 'about', component: About },
      { path: 'blog', component: Blog },
      { path: 'career', component: Career },
      { path: 'contact', component: Contact },
    ],
  },
  {
    path: 'support',
    component: SupportLayout,
    children: [
      { path: 'helpcenter', component: Helpcenter },
      { path: 'settings', component: Settings },
    ],
  },
  { path: '**', component: PageNotFound },
];
