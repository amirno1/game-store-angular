import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  items = [];
  // productAmount = 0;

  constructor(private http: HttpClient) {}
  onBuy(product) {
    this.items.push(product);
    console.log(this.http);
    // this.productAmount = this.items.length;
  }
  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }

  getItems() {
    return this.items;
  }
}
