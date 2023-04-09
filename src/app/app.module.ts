import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './add-comp/header/header.component';
import { FooterComponent } from './add-comp/footer/footer.component';
import { IndexComponent } from './comp/index/index.component';
import { LoginComponent } from './comp/login/login.component';
import { CardComponent } from './comp/card/card.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { AngularYandexMapsModule, YaConfig } from 'angular8-yandex-maps';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormModule } from 'ng-zorro-antd/form';
import { RegisterComponent } from './comp/register/register.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { UserInfoComponent } from './comp/user-info/user-info.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { AddCardComponent } from './comp/add-card/add-card.component';
import { DocsComponent } from './comp/docs/docs.component';
import { ProfileComponent } from './comp/profile/profile.component';
import { CardsComponent } from './add-comp/cards/cards.component';

import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { MeetingsComponent } from './add-comp/meetings/meetings.component';
import { NzTableModule } from 'ng-zorro-antd/table';


registerLocaleData(ru);

const mapConfig: YaConfig = {
  apikey: '81dcd694-7601-4387-bd05-996e3e78db3d',
  lang: 'ru_RU'
  // coordorder: 'longlat',
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    LoginComponent,
    CardComponent,
    RegisterComponent,
    UserInfoComponent,
    AddCardComponent,
    DocsComponent,
    ProfileComponent,
    CardsComponent,
    MeetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzTypographyModule,
    NzLayoutModule,
    NzIconModule,
    NzGridModule,
    NzCardModule,
    NzBadgeModule,
    NzTagModule,
    NzDrawerModule,
    NzMenuModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzCarouselModule,
    NzBreadCrumbModule,
    NzAvatarModule,
    AngularYandexMapsModule,
    NzStepsModule,
    NzFormModule,
    NzAlertModule,
    NzBackTopModule,
    NzPaginationModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzSliderModule,
    NzInputNumberModule,
    NzSelectModule,
    NzInputNumberModule,
    NzUploadModule,
    NzModalModule,
    NzImageModule,
    NzMessageModule,
    NzDatePickerModule,
    NzTableModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
