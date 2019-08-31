import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  items = [];

  constructor(private http: HttpClient) {}
  onBuy(product) {
    let reapeatedItem = this.items.find(item => item.id === product.id);
    if (reapeatedItem) {
      reapeatedItem.itemAmount++;
    } else {
      product.itemAmount = 1;
      this.items.push(product);
    }
  }
  onIncrease(item) {
    item.itemAmount++;
  }
  onDecrease(item) {
    if (item.itemAmount <= 1) {
      this.onRemove(item);
    } else {
      item.itemAmount--;
    }
  }
  onClear() {
    this.items = [];
  }
  onRemove(item) {
    this.items = this.items.filter(currentItem => currentItem.id !== item.id);
  }
  onAmountChange() {
    return this.items.length;
  }
  getShippingPrices() {
    return this.http.get("/assets/shipping.json");
  }
  getItems() {
    return this.items;
  }
}
