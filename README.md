# use-search-field

> a custom hook

# useSearchPackage

A react hook package to search for any keyword in a table

[![NPM](https://img.shields.io/npm/v/@ibrahim-a-d/use-search-field.svg)](https://www.npmjs.com/package/@ibrahim-a-d/use-search-field) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ibrahim-a-d/use-search-field
```

## Usage

```jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearch } from "use-search-field";

const App = () => {
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const dataFiltered = useSearch(data, search);

  const FetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
    });
  };
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  // FetchData()
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div>
      <p>Bonjour</p>
      <input
        value={search}
        onChange={onChange}
        placeholder={"Entrer le terme a rechercher"}
      />
      {dataFiltered?.map((elem) => (
        <div key={elem.id}>
          <p>{elem.title}</p>
          <hr />
          <p>{elem.body}</p>
        </div>
      ))}
    </div>
  );
};
export default App;
```

## License

MIT © [Ibrahim-A-D](https://github.com/Ibrahim-A-D/)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
