import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "../layouts/home/home.component";
import { MobpartComponent } from "../layouts/products/mobpart/mobpart.component";
import { PageNotFoundComponent } from "../layouts/page-not-found/page-not-found.component";
import { MotoComponent } from "../layouts/products/mobpart/moto/moto.component";
import { SamComponent } from "../layouts/products/mobpart/sam/sam.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  {
    path: "mobile",
    component: MobpartComponent,
    children: [
      { path: "moto", component: MotoComponent },
      { path: "sam", component: SamComponent },
    ],
  },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
