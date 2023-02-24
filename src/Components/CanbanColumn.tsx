import React, { useState, useEffect } from "react";
import { ColumnType } from "../types/enums";
import { AddIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { IItems } from "../types/todo";
import CanbanTodo from "./CanbanTodo";

const ColumnColorScheme: Record<ColumnType, string> = {
  Todo: "gray",
  "In progress": "blue",
  Blocked: "red",
  Completed: "green",
};

interface IProps {
  column: ColumnType;
}

const CanbanColumn: React.FC<IProps> = ({ column }: { column: ColumnType }) => {
  const [todos, setTodos] = useState<IItems[]>(
    () => JSON.parse(localStorage.getItem("todos")!) ?? []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const columnTodos = todos.map((todo, index) => (
    <CanbanTodo key={todo.id} index={index} todo={todo} />
  ));
  return (
    <Box>
      <Heading fontSize="md" mb={4} letterSpacing="wide">
        <Badge
          px={1}
          py={1}
          rounded="lg"
          colorScheme={ColumnColorScheme[column]}
        >
          {column}
        </Badge>
      </Heading>
      <IconButton
        size="xs"
        w="full"
        color={useColorModeValue("gray.50", "gray.400")}
        bgColor={useColorModeValue("gray.100", "gray.700")}
        py={2}
        _hover={{ bgColor: useColorModeValue("gray.200", "gray.600") }}
        variant="solid"
        colorScheme="black"
        aria-label="add-todo"
        icon={<AddIcon />}
      />
      <Stack
        direction={{ base: "row", md: "column" }}
        h={{ base: 300, md: 600 }}
        p={4}
        mt={2}
        spacing={4}
        bgColor={useColorModeValue("gray.50", "gray.400")}
        rounded="lg"
        boxShadow="auto"
        overflow="auto"
      >
        {columnTodos}
      </Stack>
    </Box>
  );
};

export default CanbanColumn;
