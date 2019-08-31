import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private productService: ProductService) {}
  items;

  ngOnInit() {
    this.items = this.productService.getItems();
  }
  clear() {
    this.productService.onClear();
    this.items = this.productService.getItems();
  }
  increase(item) {
    this.productService.onIncrease(item);
  }
  decrease(item) {
    this.productService.onDecrease(item);
    this.items = this.productService.getItems();
  }
  remove(item) {
    this.productService.onRemove(item);
    this.items = this.productService.getItems();
  }
}
