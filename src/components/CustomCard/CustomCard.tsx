import React from "react";
import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  data: any;
  buttonLabel: string;
  buttonLink: string;
}

const CustomCard: React.FC<Props> = (props) => {

  return (
    <Card>
      <h3>{props.title}</h3>
      <p>{props.data}</p>
      <Link to={props.buttonLink}>
        <Button color="primary">{props.buttonLabel}</Button>
      </Link>

    </Card>
  )
};

export default CustomCard;