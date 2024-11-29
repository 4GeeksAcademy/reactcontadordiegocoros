import { Container } from "react-bootstrap";

import { SecondsCounter } from "../components/SecondsCounter";

export const Counterpage = () => {
  return (
    <Container>
      <h1>Contador</h1>
      <SecondsCounter />
    </Container>
  );
};
