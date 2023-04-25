export interface UserDto {
  name: string;
  email: string;
}

export interface UserFull extends UserDto {
  readonly id: number;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
