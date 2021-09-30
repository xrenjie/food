import React, { useState, useEffect } from "react";
import { Card, Button, Image } from "react-bootstrap";

const AltList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(props.items);
  });

  return (
    <div>
      {
        <div className="row">
          {items.map((item) => {
            return (
              <Card
                key={item._id.toString()}
                style={{ width: "18rem", padding: "0 0 0 0" }}
              >
                <Card.Img variant="top" src={item.url} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.certifications.map((cert) => {
                      return (
                        <Image
                          key={cert}
                          style={{ width: "50px", cursor: "pointer" }}
                          src={require(`../img/${cert}.jpg`).default}
                          onClick={() =>
                            window.open(
                              `https://foodprint.org/eating-sustainably/food-label-guide/food-label-guide-${item.category}`,
                              "_blank"
                            )
                          }
                        />
                      );
                    })}
                  </Card.Text>
                  <Button
                    href={`https://www.google.com/search?q=${item.name}`}
                    target="_blank"
                  >
                    Find on Google
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      }
    </div>
  );
};

export default AltList;
