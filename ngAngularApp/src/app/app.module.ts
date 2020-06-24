import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SqrtPipe } from "./pipes/sqrt.pipe";
import { FooterComponent } from "./layouts/footer/footer.component";
import { BannerOneComponent } from "./layouts/banner-one/banner-one.component";
import { BannerTwoComponent } from "./layouts/banner-two/banner-two.component";
import { BannerThreeComponent } from "./layouts/banner-three/banner-three.component";
import { ContactUsComponent } from "./layouts/contact-us/contact-us.component";
import { NavComponent } from "./layouts/nav/nav.component";
import { ProductsComponent } from "./layouts/products/products.component";
import { MobpartComponent } from "./layouts/products/mobpart/mobpart.component";
import { SimpleStyleDirective } from "./directives/simple-style.directive";
import { PageNotFoundComponent } from "./layouts/page-not-found/page-not-found.component";
import { HomeComponent } from "./layouts/home/home.component";
import { AppRoutingModule } from "./modules/app-routing.module";
import { MotoComponent } from './layouts/products/mobpart/moto/moto.component';
import { SamComponent } from './layouts/products/mobpart/sam/sam.component';
import { BooksComponent } from './products/books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    FooterComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    ContactUsComponent,
    NavComponent,
    ProductsComponent,
    MobpartComponent,
    SimpleStyleDirective,
    PageNotFoundComponent,
    HomeComponent,
    MotoComponent,
    SamComponent,
    BooksComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule], // module : group of logics i,e. takes required logics from browser
  bootstrap: [AppComponent], // to run : root compo
})
export class AppModule {}
