/*global chrome*/
/* src/content.js */
import React, { useState, useEffect, useCallback, RefObject } from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import App from './modules/App';

export function Main() {
  // const { children } = props;
  const [height, setHeight] = useState(500);
  const iframeRef = React.createRef();

  const handleResize = useCallback((iframe) => {
    const height = iframe.current?.node.contentDocument?.body.scrollHeight ?? 0;
    if (height !== 0) {
      setHeight(height);
    }
  }, []);

  useEffect(() => handleResize(iframeRef), [handleResize, iframeRef]);

  return (
    <Frame>
      <FrameContextConsumer>
        {({ document, window }) => {
          return <App document={document} window={window} isExt={true} />;
        }}
      </FrameContextConsumer>
    </Frame>
  );
}

const app = document.createElement('div');
app.id = 'scuffle-root';

document.body.appendChild(app);
ReactDOM.render(<Main />, app);

// app.style.display = 'none';

app.style = `position: fixed;top: calc(50% - 150px);left: calc(50% - 250px);background-color: white; display: block`;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'create-bookmark') {
    toggle();
  }
});

function toggle() {
  if (app.style.display === 'block') {
    app.style.display = 'block';
  } else {
    app.style.display = 'block';
  }
}
