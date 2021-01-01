export class Session {
  private _id: string;
  private _token: string;
  private _creation_date: string;
  private _duration_hrs: string;


  constructor(_id: string, token: string, creation_date: string, duration_hrs: string) {
    this._id = _id;
    this._token = token;
    this._creation_date = creation_date;
    this._duration_hrs = duration_hrs;
  }

  public get id(): string {
    return this._id;
  }

  public get token(): string {
    return this._token;
  }

  public get creation_date(): string {
    return this._creation_date;
  }

  public get duration_hrs(): string {
    return this._duration_hrs;
  }
}