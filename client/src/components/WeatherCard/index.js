import React from "react";
import Card from "react-bootstrap";

function WeatherCard(
    title,
    body
) {
    return (
        <Card>
            <Card.body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {body}
                </Card.Text>
            </Card.body>
        </Card>
    )
}