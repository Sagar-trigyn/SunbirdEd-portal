import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExploreContentComponent, ExploreCurriculumCoursesComponent } from './components';
import { ViewAllComponent } from '@sunbird/content-search';
const routes: Routes = [
  {
    path: '', loadChildren: () => import('../../../explore-page-new/explore-page-new.module').then(m => m.ExplorePageNewModule)
  },
  {
    path: 'view-all/:section/:pageNumber', component: ViewAllComponent,
    data: {
      telemetry: {
        env: 'explore-new', pageid: 'view-all', type: 'view', subtype: 'paginate'
      },
      filterType: 'explore-new',
      softConstraints: { badgeAssertions: 98, board: 99, channel: 100 },
      applyMode: true
    }
  },
  {
    path: ':pageNumber', component: ExploreContentComponent, data: {
      telemetry: {
        env: 'explore-new', pageid: 'explore-search', type: 'view', subtype: 'paginate'
      },
      softConstraints: { badgeAssertions: 98, channel: 100 }
    }
  },
  {
    path: 'list/curriculum-courses', component: ExploreCurriculumCoursesComponent, data: {
      telemetry: {
        env: 'curriculum-courses', pageid: 'curriculum-courses', type: 'view', subtype: 'paginate'
      },
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreNewRoutingModule { }
