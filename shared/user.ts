export interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  roles: ('ADMIN' | 'STUDENT' | 'TEACHER')[];
}
