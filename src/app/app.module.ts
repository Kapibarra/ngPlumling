import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CtaComponent } from './cta/cta.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SwiperModule } from 'swiper/angular';
import { ContactsComponent } from './contacts/contacts.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { BurgerComponent } from './burger/burger.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ServiceComponent,
    PortfolioComponent,
    CtaComponent,
    AdvantagesComponent,
    ReviewsComponent,
    ContactsComponent,
    CopyrightComponent,
    BurgerComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SwiperModule,
    NgwWowModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
