import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function GifCard(props) {
  return (
    <div>
      <a href={props.url}><img
        src={props.img}
        alt={props.title}
      /></a>
    </div>
  );
};
