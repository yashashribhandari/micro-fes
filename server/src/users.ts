enum Roles {
  Admin = 'admin',
  User = 'user',
  Editor = 'editor',
}

export interface User {
  userId: number;
  username: string;
  email: string;
  age: number;
  isActive: boolean;
  roles: Roles[];
  password: string;
}

const users: User[] = [
  {
    userId: 1,
    username: 'john.doe',
    email: 'john.doe@example.com',
    age: 30,
    isActive: true,
    roles: [Roles.Admin, Roles.User],
    password: 'password123',
  },
  {
    userId: 2,
    username: 'jane.smith',
    email: 'jane.smith@example.com',
    age: 25,
    isActive: false,
    roles: [Roles.User],
    password: 'password456',
  },
  {
    userId: 3,
    username: 'alice.johnson',
    email: 'alice.johnson@example.com',
    age: 28,
    isActive: true,
    roles: [Roles.Editor, Roles.User],
    password: 'password789',
  },
  {
    userId: 4,
    username: 'bob.brown',
    email: 'bob.brown@example.com',
    age: 35,
    isActive: false,
    roles: [Roles.User],
    password: 'password101',
  },
];

export default users;
