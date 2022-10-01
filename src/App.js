import * as React from 'react';

function getTitle(title) {
  return title;
}
function App() {
  return (
    <div>
      <h4>Hello, {getTitle('React')}</h4>

      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}
export default App;
