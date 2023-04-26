export interface PassengerDto {
  notes: string;
}

export interface PassengerFull extends PassengerDto {
  readonly id: number;
  readonly fullName: string;
  readonly document: string;
  readonly codeDocument: string;
  readonly dateBirth: Date;
  readonly medEmployee: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}
