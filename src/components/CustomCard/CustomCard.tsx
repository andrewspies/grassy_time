import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  data: any;
  buttonLabel: string;
  buttonLink: string;
}

const CustomCard: React.FC<Props> = (props) => {

  return (
    <Card interactive={true} elevation={Elevation.TWO}>
      <h3>{props.title}</h3>
      <p>{props.data}</p>
      <Link to={props.buttonLink}>
        <Button intent="primary" small={true}>{props.buttonLabel}</Button>
      </Link>

    </Card>
  )
};

export default CustomCard;