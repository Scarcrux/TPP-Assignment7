import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function GetData(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  function ZipList(items) {
    const listItems = items["data"].map((item) =>
      <li key={item.toString()}>
        {item}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
    items.data.map(item => {
      console.log(item.images.fixed_height.url);
      console.log(item.url);
    });

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <h1>Test</h1>
    );
  }
}
