import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  return (
    <div>
      <h2>{text}</h2>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

export default App;
