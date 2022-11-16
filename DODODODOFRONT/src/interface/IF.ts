export interface IUser {
  id: number;
  nickname: string;
  email: string;
}

export interface IUserWithOnline extends IUser {
  online: boolean;
}

export interface IDM {
  id: string;
  SenderId: number;
  Sender: IUser;
  ReceiverId: number;
  Receiver: IUser;
  content: string;
  createAt: Date;
}
