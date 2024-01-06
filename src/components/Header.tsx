import { useState } from "react";
import { Container, Group, Burger, Title, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function Header() {
  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Title size={"h3"}>Todo Application</Title>
      </Container>
    </header>
  );
}
