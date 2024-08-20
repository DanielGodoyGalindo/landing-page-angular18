import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    { path: 'app-home', component: HomeComponent },
    { path: 'app-products', component: ProductsComponent },
    { path: 'app-product/:id', component: ProductDetailComponent },
    { path: 'app-contact', component: ContactComponent },
    // "wildcard route" para cuando no se encuentra la ruta indicada
    { path: '**', redirectTo: '/app-home', pathMatch: 'full' } 
];
