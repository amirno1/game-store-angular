import { Component, OnInit } from "@angular/core";
// import { ProductService } from "../product.service";

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"]
})
export class NavBarComponent implements OnInit {
  // productAmount = 0;
  constructor() // private productService: ProductService
  {}

  ngOnInit() {
    // this.productAmount = this.productService.showAmount();
    // this.productAmount = this.productService.productAmount;
    // console.log(this.productAmount);
  }
}
