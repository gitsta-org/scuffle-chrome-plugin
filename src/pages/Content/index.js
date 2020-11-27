/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import App from './modules/App';
class Main extends React.Component {
  render() {
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
}

const app = document.createElement('div');
app.id = 'scuffle-root';

document.body.appendChild(app);
ReactDOM.render(<Main />, app);

app.style.display = 'none';

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  alert(request.message);
  if (request.message === 'create-bookmark') {
    toggle();
  }
});

function toggle() {
  if (app.style.display === 'none') {
    app.style.display = 'block';
  } else {
    app.style.display = 'none';
  }
}
