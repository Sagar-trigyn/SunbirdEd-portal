import { PermissionDirective, BodyScrollDirective } from './directives';
import { RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule,
  SuiProgressModule, SuiRatingModule, SuiCollapseModule } from 'ng2-semantic-ui';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { SharedModule } from '@sunbird/shared';
import { AvatarModule } from 'ngx-avatar';
import {
  MainHeaderComponent, MainFooterComponent, MainMenuComponent, SearchComponent, ConceptPickerComponent,
  DataDrivenFilterComponent, ErrorPageComponent, SortByComponent, FlagContentComponent,
  BreadcrumbsComponent, LanguageDropdownComponent, ProminentFilterComponent, TopicPickerComponent
} from './components';
import { AuthGuard } from './guard/auth-gard.service';
import { CacheService } from 'ng2-cache-service';
import { WebExtensionModule } from '@project-sunbird/web-extensions';
import { TelemetryModule } from '@sunbird/telemetry';
@NgModule({
  imports: [
    CommonModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
    SuiRatingModule, SuiCollapseModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    WebExtensionModule,
    TelemetryModule,
    AvatarModule
  ],
  declarations: [MainHeaderComponent, MainFooterComponent, MainMenuComponent, SearchComponent, PermissionDirective,
    BodyScrollDirective, ConceptPickerComponent, DataDrivenFilterComponent, BreadcrumbsComponent, SortByComponent,
    ErrorPageComponent, FlagContentComponent, LanguageDropdownComponent, ProminentFilterComponent, TopicPickerComponent],
  exports: [MainHeaderComponent, MainFooterComponent, PermissionDirective, BodyScrollDirective, ConceptPickerComponent,
    DataDrivenFilterComponent, SortByComponent, BreadcrumbsComponent, FlagContentComponent,
    TelemetryModule, LanguageDropdownComponent, ProminentFilterComponent, TopicPickerComponent],
    providers: [CacheService, AuthGuard]
})
export class CoreModule {
}
