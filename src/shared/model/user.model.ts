import { Session } from './session.model';
import { Item } from './item.model';

export class User {
  private _firstname: string;
  private _lastname: string;
  private _session: Session;
  private _email: string;
  private _phone: string;
  private _notifications?: boolean;
  private _birthday: Date;
  private _watchlist: Item[];
  private _wishlist: Item[];
  private _socialwishlist: Item[];
  private _friends: User[];

  constructor(firstname: string, lastname: string, session: Session, email: string, phone: string, notification: boolean, birthday: Date, watchlist: Item[], wishlist: Item[], socialwishlist: Item[], friends: User[]) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._session = session;
    this._email = email;
    this._phone = phone;
    this._notifications = notification;
    this._birthday = birthday;
    this._watchlist = watchlist;
    this._wishlist = wishlist;
    this._socialwishlist = socialwishlist;
    this._friends = friends;
  }

  public get firstname(): string {
    return this._firstname;
  }
  public set firstname(firstname: string) {
    this._firstname = firstname;
  }

  public get lastname(): string {
    return this._lastname;
  }
  public set lastname(lastname: string) {
    this._lastname = lastname;
  }

  public get session(): Session {
    return this._session;
  }

  public get email(): string {
    return this._email || '';
  }
  public set email(email: string) {
    this._email = email;
  }

  public get phone(): string {
    return this._phone || '';
  }
  public set phone(phone: string) {
    this._phone = phone;
  }

  public get notifications(): boolean {
    return this._notifications || false;
  }
  public set notifications(notifications: boolean) {
    this._notifications = notifications;
  }

  public get birthday(): Date {
    return this._birthday || new Date();
  }
  public set birthday(birthday: Date) {
    this._birthday = birthday;
  }

  public get watchlist(): Item[] {
    return this._watchlist || [];
  }
  public set watchlist(watchlist: Item[]) {
    this._watchlist = watchlist;
  }

  public get wishlist(): Item[] {
    return this._wishlist || [];
  }
  public set wishlist(wishlist: Item[]) {
    this._wishlist = wishlist;
  }

  public get socialwishlist(): Item[] {
    return this._socialwishlist || [];
  }
  public set socialwishlist(socialwishlist: Item[]) {
    this._socialwishlist = socialwishlist;
  }

  public get friends(): User[] {
    return this._friends || [];
  }
  public set friends(friends: User[]) {
    this._friends = friends;
  }
}