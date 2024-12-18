import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeNewComponent } from './home-new/home-new.component';
import { NgParticlesModule } from "ng-particles";
import { HeaderComponent } from './header/header.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { LiveCoinComponent } from './live-coin/live-coin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { FooterComponent } from './footer/footer.component';
import { FaqComponent } from './faq/faq.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeNewComponent,
    HeaderComponent,
    BuySellComponent,
    CurrencyConverterComponent,
    LiveCoinComponent,
    RegisterComponent,
    LoginComponent,
    ContactUsComponent,
    AboutUsComponent,
    BlogComponent,
    ForgetPasswordComponent,
    FooterComponent,
    FaqComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
