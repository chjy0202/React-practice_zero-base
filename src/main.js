import { UploadButton } from './components/UploadButton.js';
import { getRandomCount } from './helper/getRandomCount.js';
import { Icon } from './components/Icon.js';

const MIN = 0;
const MAX = 30;

let count;
let status;

const container = document.getElementById('root');
const ReactDomRoot = ReactDOM.createRoot(container);

function render(status = 'idle') {
  ReactDomRoot.render(
    <React.StrictMode>
      <div onClick={upload}>
        <UploadButton status={status}></UploadButton>
      </div>
      <UploadButton status="disabled"></UploadButton>
      <Icon status="disabled"></Icon>
    </React.StrictMode>
  );
}

function upload() {
  render('pending');

  count = getRandomCount(MIN, MAX);
  status = count < 10 ? 'resolved' : count < 20 ? 'rejected' : 'disabled';

  setTimeout(() => {
    render(status);
  }, 2000);
}

render();
