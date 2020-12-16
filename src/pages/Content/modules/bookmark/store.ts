import { createContext } from 'react';

export type Bookmark = {
  id: string;
  url: string;
  title?: string;
} & ScuffleEntityBase;

export type ScuffleEntityBase = {
  createdAt: number;
  tags?: string[];
};

export interface IState {
  bookmarks: Bookmark[];
}

export const initialState: IState = { bookmarks: [] }; // intial state

export const Context = createContext<{
  state: IState;
  setState: React.Dispatch<React.SetStateAction<IState>>;
}>(undefined as any);