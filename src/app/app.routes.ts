import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodPageComponent },
  { path: 'cart-page', component: CartPageComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'auth-page', component: AuthComponent },
  { path: '', redirectTo:'auth-page', pathMatch:'full' },
  { path: '**', redirectTo:'/auth-page' },
];
