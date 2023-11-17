export interface CreatedUserDto {
  id: string;
  name: string;
  email: string;
  password: string;
  telephone: string;
  auth: {
    token: string;
  };
}
