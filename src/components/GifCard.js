import React, { useState } from 'react';
import { Container, Row, Col, Tooltip} from 'reactstrap';

export default function GifCard(props) {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <span href="#" id={"Tooltip-" + props.id}>
      <a href={props.url}><img
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
    </div>
  );
};
