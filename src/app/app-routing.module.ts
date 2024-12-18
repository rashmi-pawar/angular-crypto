import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { FaqComponent } from './faq/faq.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { LiveCoinComponent } from './live-coin/live-coin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'buySell', component: BuySellComponent },
  { path: 'index', component: HomeNewComponent },
  { path: 'currencyConvertor', component: CurrencyConverterComponent },
  { path: 'liveCoin', component: LiveCoinComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact_us', component: ContactUsComponent },
  { path: 'about_us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'forgot_password', component: ForgetPasswordComponent },
  { path: 'faq', component: FaqComponent },
  { path: '',   redirectTo: 'index', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
