import React, { useContext } from 'react';
import { Context as BookmarksContext } from './store';
export default function BookmarksHome() {
  const bookmarkContext = useContext(BookmarksContext);
  return (<div>I am inside bookmark home</div>);
}
