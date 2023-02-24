import React from "react";
import { Heading, Container } from "@chakra-ui/react";
const Canban: React.FC = () => {
  return (
    <section>
      <Heading
        fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
        fontWeight='bold'
        textAlign='center'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip="text"
        mt={4}
      >Canban</Heading>
      <Container maxWidth='container.lg' px={4} py={10}>

      </Container>
    </section>
  );
};

export default Canban;
