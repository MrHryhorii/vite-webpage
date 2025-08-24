import { useState } from 'react'
import { format } from "date-fns";

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  function add() {
    const t = text.trim();
    if (!t) return;
    setItems([...items, { id: Date.now(), text: t, time: format(new Date(), "PPP p") }]);
    setText("");
  }

  function remove(id) {
    setItems(items.filter((x) => x.id !== id));
  }

  return (
    <div className="wrap">
      <h1 className="title">Simple Notes</h1>

      <div className="row">
        <input
          className="input"
          placeholder="Write something..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
        />
        <button className="btn" onClick={add}>
          Add
        </button>
      </div>

      <ul className="list">
        {items.map((m) => (
          <li key={m.id} className="item">
            <div>
              <b>{m.text}</b>
              <small className="time">{m.time}</small>
            </div>
            <button className="rm" onClick={() => remove(m.id)}>
              Remove
            </button>
          </li>
        ))}
        {items.length === 0 && <li className="empty">No notes yet</li>}
      </ul>
    </div>
  );
}

export default App
