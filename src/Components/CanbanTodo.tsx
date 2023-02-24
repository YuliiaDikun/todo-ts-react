import React from "react";
import { Box, IconButton, Textarea } from "@chakra-ui/react";
import { IItems } from "../types/todo";
import { DeleteIcon } from "@chakra-ui/icons";
interface IProps {
  index: number;
  todo: IItems;
}

const CanbanTodo: React.FC<IProps> = ({ index, todo }) => {
  return (
    <Box
      as="div"
      role="group"
      position="relative"
      rounded="lg"
      w={200}
      pl={3}
      pr={7}
      pt={3}
      pb={1}
      boxShadow="xl"
      cursor="grab"
      bgColor={todo.color}
    >
      <IconButton
        position="absolute"
        top={0}
        left={0}
        zIndex={100}
        size="md"
        colorScheme="solid"
        color="gray.700"
        icon={<DeleteIcon />}
        opacity={0}
        _groupHover={{ opacity: 1 }}
        aria-label="delete canban todo"
      />
      <Textarea
        value={todo.title}
        fontWeight="semibold"
        cursor="inherit"
        border="none"
        p={0}
        resize="none"
        minH={70}
        maxH={200}
        focusBorderColor="none"
        color="gray.700"
      />
    </Box>
  );
};

export default CanbanTodo;
