export class Item {
  private name: string;
  private store: string;
  private price: number;
  private detail: string;
  private itemlink: string;
  private date_created: Date;
  private availableonline: boolean;
  private availableinstore: boolean;

  constructor(name: string, store: string, price: number, detail: string, itemlink: string, date_created: Date, availableonline: boolean, availableinstore: boolean) {
    this.name = name;
    this.store = store;
    this.price = price;
    this.detail = detail;
    this.itemlink = itemlink;
    this.date_created = date_created;
    this.availableonline = availableonline;
    this.availableinstore = availableinstore;
  }

  public getName(): string {
    return this.name;
  }
  public setName(name: string): void {
    this.name = name;
  }
  public getStore(): string {
    return this.store;
  }
  public getPrice(): number {
    return this.price;
  }
  public getDetail(): string {
    return this.detail;
  }
  public getItemlink(): string {
    return this.itemlink;
  }
  public getDate_created(): Date {
    return this.date_created;
  }
  public isAvailableonline(): boolean {
    return this.availableonline;
  }
  public isAvailableinstore(): boolean {
    return this.availableinstore;
  }
}