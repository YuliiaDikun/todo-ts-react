import React from "react";
import { Heading, Container, SimpleGrid } from "@chakra-ui/react";
import CanbanColumn from "../Components/CanbanColumn";
import { ColumnType } from "../types/enums";

const Canban: React.FC = () => {
  return (
    <section>
      <Heading
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        mt={4}
      >
        Canban
      </Heading>
      <Container maxWidth="container.lg" px={4} py={10}>
        <SimpleGrid columns={{ dase: 1, md: 4 }} spacing={{ base: 16, md: 4 }}>
          <CanbanColumn column={ColumnType.TO_DO } />
          <CanbanColumn column={ColumnType.IN_PROGREDD }/>
          <CanbanColumn column={ColumnType.BLOCKED }/>
          <CanbanColumn column={ColumnType.COMPLETED}/>
        </SimpleGrid>
      </Container>
    </section>
  );
};

export default Canban;
