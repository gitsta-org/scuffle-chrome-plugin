import React from 'react';
import BookmarksHome from './Home';
import { initialState, Context as BookmarksContext } from './store';
export default function BookmarkIndex({ ...props }) {
  const currentState = {
    ...initialState,
    ...props.document.URL,
    ...props.document.title,
  };
  const [state, setState] = React.useState(currentState);
  const store = { state, setState };
  console.log(props);
  return (
    <BookmarksContext.Provider value={store}>
      <BookmarksHome />
    </BookmarksContext.Provider>
  );
}