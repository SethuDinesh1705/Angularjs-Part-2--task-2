import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users = [
    {
      id: 'one-user',
      firstName: 'Dinesh',
      value: 'Kumar',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: true,
    },
    {
      id: 'Two-User',
      firstName: 'pathy',
      value: 'Kumar',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: false,
    },
    {
      id: 'Three user',
      firstName: 'Dinesh',
      value: 'Kumar',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: true,
    },
    {
      id: 'Four user',
      firstName: 'pathy',
      value: 'Kumar',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: false,
    },
    {
      id: 'Five user',
      firstName: 'Dinesh',
      value: 'Kumar',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: true,
    },
    {
      id: 'Six user',
      firstName: 'pathy',
      value: 'Kumar',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: false,
    },
    {
      id: 'Seven user',
      firstName: 'Dinesh',
      value: 'Kumar',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: true,
    },
    {
      id: 'Eight user',
      firstName: 'pathy',
      value: 'Kumar',
      age: 25,
      login: '@gmail.com',
      password: '1705545',
      isDeleted: false,
    },
  ];
  constructor() {}
}
