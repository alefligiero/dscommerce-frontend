import { ChangeEvent, FormEvent, useState } from 'react';
import './styles.css'

type Props = {
  onSearch: (searchText: string) => void;
}

export default function SearchBar( {onSearch}: Props) {

  const [text, setText] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleResetClick() {
    setText("");
    onSearch(text);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(text);
  }

  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input type="text" value={text} onChange={handleChange} placeholder="Nome do produto" />
      <button onClick={handleResetClick}>🗙</button>
    </form>
  );
}
