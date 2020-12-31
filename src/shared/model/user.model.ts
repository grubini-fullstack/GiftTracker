import { Item } from './item.model';

export class User {
  private __id: string;
  private firstname: string;
  private lastname: string;
  private email: string;
  private phone: string;
  private notifications: boolean;
  private username: string;
  private password: string;
  private birthday: Date;
  private watchlist: Item[];
  private wishlist: Item[];
  private socialwishlist: Item[];
  private friends: User[];

  constructor(id: string, firstname: string, lastname: string, email: string, phone: string, username: string, password: string, birthday: Date, friends: User[], watchlist: Item[], wishlist: Item[], notifications: boolean, socialwishlist: Item[]) {
    this.__id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
    this.notifications = notifications;
    this.username = username;
    this.password = password;
    this.birthday = birthday;
    this.watchlist = watchlist;
    this.wishlist = wishlist;
    this.socialwishlist = socialwishlist;
    this.friends = friends;
  }

  public get__id(): string {
    return this.__id;
  }
  public set__id(__id: string): void {
    this.__id = __id;
  }

  public getFirstname(): string {
    return this.firstname;
  }
  public setFirstname(firstname: string): void {
    this.firstname = firstname;
  }

  public getLastname(): string {
    return this.lastname;
  }
  public setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string): void {
    this.email = email;
  }

  public getPhone(): string {
    return this.phone;
  }
  public setPhone(phone: string): void {
    this.phone = phone;
  }

  public isNotifications(): boolean {
    return this.notifications;
  }
  public setNotifications(notifications: boolean): void {
    this.notifications = notifications;
  }

  public getUsername(): string {
    return this.username;
  }
  public setUsername(username: string): void {
    this.username = username;
  }

  public getPassword(): string {
    return this.password;
  }
  public setPassword(password: string): void {
    this.password = password;
  }

  public getBirthday(): Date {
    return this.birthday;
  }
  public setBirthday(birthday: Date): void {
    this.birthday = birthday;
  }

  public getWatchlist(): Item[] {
    return this.watchlist;
  }
  public setWatchlist(watchlist: Item[]): void {
    this.watchlist = watchlist;
  }

  public getWishlist(): Item[] {
    return this.wishlist;
  }
  public setWishlist(wishlist: Item[]): void {
    this.wishlist = wishlist;
  }

  public getSocialwishlist(): Item[] {
    return this.socialwishlist;
  }
  public setSocialwishlist(socialwishlist: Item[]): void {
    this.socialwishlist = socialwishlist;
  }

  public getFriends(): User[] {
    return this.friends;
  }
  public setFriends(friends: User[]): void {
    this.friends = friends;
  }
}