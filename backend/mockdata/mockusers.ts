import { User } from '../../shared/user';

export const USERS: User[] = [
  {
    _id: '1',
    email: 'student@angular-university.io',
    password: 'password',
    username: 'student',
    roles: ['STUDENT'],
  },
  {
    _id: '2',
    email: 'admin@angular-university.io',
    password: 'password',
    username: 'admin',
    roles: ['ADMIN'],
  },
];
