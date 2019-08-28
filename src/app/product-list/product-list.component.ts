import { Component, OnInit } from "@angular/core";
import products from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() {}
  notify() {
    window.alert("notified");
  }
  onNotify() {
    window.alert("shared");
  }
  ngOnInit() {}
}
