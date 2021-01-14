import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import GifCard from './GifCard'
import GifCardEntireColumn from './GifCardEntireColumn'
import { Container, Row, Col } from 'reactstrap';

export default function GetData(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result["data"]);
          setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (!Array.isArray(items)) {
    return <Container className="no-padding">
        <Row className="d-flex flex-row justify-content-between align-items-center">
          <GifCardEntireColumn
            img={items.images.fixed_height.url}
            id={0}
            title={items.title}
            url={items.url}
          />
        </Row>
      </Container>
  } else {
    return (
      <Container className="no-padding"><Row className="d-flex flex-row justify-content-between align-items-center">{items && items.map((item, index) => {
        return <GifCard img={item.images.fixed_height.url}
            id={index}
            title={item.title}
            url={item.url}
          />
        })
      }
      </Row>
      </Container>
    );
  }
}
