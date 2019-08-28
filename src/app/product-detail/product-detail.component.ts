import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import products from "../products";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}
  product;

  buy(product) {
    this.productService.onBuy(product);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      let productId = param.get("id");
      this.product = products.find(
        product => product.id === parseInt(productId)
      );
    });
  }
}
