import React, { useState } from 'react';
import { Container, Row, Col, Tooltip, Image} from 'reactstrap';
import './GifCard.css';

export default function GifCard(props) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Col xs="12" s="12" m="12" l="12" xl="12">
      <span href="#" id={"Tooltip-" + props.id}>
      <a href={props.url}><img
        className="img-fluid"
        src={props.img}
        alt={props.title}
      /></a></span>
      <Tooltip
        placement="auto"
        isOpen={tooltipOpen}
        target={"Tooltip-" + props.id}
        toggle={toggle}
      >
      {props.title}
      </Tooltip>
    </Col>
  );
};
