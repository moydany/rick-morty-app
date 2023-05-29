import React from "react";
import { Badge, Card } from "react-bootstrap";
import { FaGlobe } from 'react-icons/fa';  // import the globe icon

export interface CharacterProps {
  data: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    image: string;
    url: string;
    created: string;
  };
}

const Character: React.FC<CharacterProps> = ({ data }) => {
  let badgeVariant = "success";
  if (data.status === "Dead") {
    badgeVariant = "danger";
  } else if (data.status === "unknown") {
    badgeVariant = "dark";
  }

  return (
    <Card style={{}} className="">
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title style={{ minHeight: "50px" }}>{data.name}</Card.Title>
        <Card.Text style={{ minHeight: "30px" }}>
          {data.species} - {data.gender}
        </Card.Text>
        <Card.Text style={{ marginTop: '10px', minHeight: "50px" }}>
          <FaGlobe style={{marginTop: "-3px"}}/> {data.location.name}  {/* Display the globe icon before the location */}
        </Card.Text>
        <Badge bg={badgeVariant} text="light">
          {data.status}
        </Badge>{" "}
      </Card.Body>
    </Card>
  );
};

export default Character;