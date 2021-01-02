export class Item {
  private _name: string;
  private _store: string;
  private _regularPrice: string;
  private _salePrice: string;
  private _condition: string;
  private _details: { name: string, values: string[] }[];
  private _freeShipping: boolean;
  private _addToCartUrl: string;
  private _color: string;
  private _features: { feature: string }[];
  private _includedItemList: { includedItem: string }[];
  private _onlineAvailability: boolean;
  private _modelNumber: string;
  private _image: string;

  constructor(name: string, store: string, regularPrice: string, salePrice: string,
    condition: string, details: { name: string, values: string[] }[], freeShipping: boolean,
    addToCartUrl: string, color: string, features: { feature: string }[],
    includedItemList: { includedItem: string }[], onlineAvailability: boolean, modelNumber: string,
    image: string) {
    this._name = name;
    this._store = store;
    this._regularPrice = regularPrice;
    this._salePrice = salePrice;
    this._condition = condition;
    this._details = details;
    this._freeShipping = freeShipping;
    this._addToCartUrl = addToCartUrl;
    this._color = color;
    this._features = features;
    this._includedItemList = includedItemList;
    this._onlineAvailability = onlineAvailability;
    this._modelNumber = modelNumber;
    this._image = image;
  }

  public get name(): string {
    return this._name;
  }
  public get store(): string {
    return this._store;
  }
  public get regularPrice(): string {
    return this._regularPrice;
  }
  public get salesPrice(): string {
    return this._salePrice;
  }
  public get condition(): string {
    return this._condition;
  }
  public get details(): { name: string, values: string[] }[] {
    return this._details;
  }
  public get freeShipping(): boolean {
    return this._freeShipping;
  }
  public get addCartUrl(): string {
    return this._addToCartUrl;
  }
  public get color(): string {
    return this._color;
  }
  public get features(): { feature: string }[] {
    return this._features;
  }
  public get included(): { includedItem: string }[] {
    return this._includedItemList;
  }
  public get onlineAvailability(): boolean {
    return this._onlineAvailability;
  }
  public get modelNumber(): string {
    return this._modelNumber;
  }
  public get image(): string {
    return this._image;
  }
}