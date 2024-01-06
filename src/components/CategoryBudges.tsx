import { Group, Badge, Container, rem } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import classes from "./Header.module.css";

const Categories = [
  {
    id: 1,
    name: "家事",
    color: "lime",
  },
  {
    id: 2,
    name: "仕事",
    color: "grape",
  },
  {
    id: 3,
    name: "その他",
    color: "gray",
  },
];

export const CategoryBadges = () => {
  return (
    <Container size={"md"}>
      <Group my={30}>
        {Categories.map((category) => {
          return (
            <Badge
              key={category.id}
              variant="dot"
              color={category.color}
              size="lg"
              rightSection={
                <IconCirclePlus style={{ width: rem(16), height: rem(16),color:"#868e96" }} />
              }
            >
              {category.name}
            </Badge>
          );
        })}
      </Group>
    </Container>
  );
};
