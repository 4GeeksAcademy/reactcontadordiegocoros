import { userState, useState } from "react";
import { Badge, Button, Container } from "react-bootstrap";

export const SecondsCounter = () => {
  const [seconds, setSeconds] = useState(0);
  return (
    <>
      <Container style={{ display: "flex" }}>
        <h1>{seconds}</h1>
      </Container>
      <Container>
        <Button onClick={() => setSeconds(seconds + 1)}>+1</Button>
        <Button onClick={() => setSeconds(seconds - 1)}>-1</Button>
      </Container>
    </>
  );
};
