import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartComponent } from "./cart/cart.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { AlertComponent } from "./alert/alert.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { ShippingComponent } from "./shipping/shipping.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CheckOutComponent } from "./check-out/check-out.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductListComponent,
    CartComponent,
    ProductDetailComponent,
    AlertComponent,
    ShippingComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      { path: "product-details/:id", component: ProductDetailComponent },
      { path: "cart", component: CartComponent },
      { path: "shipping", component: ShippingComponent },
      { path: "check-out", component: CheckOutComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
