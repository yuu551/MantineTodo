import { Group, Badge, Container, rem } from "@mantine/core";
import { IconCirclePlus } from "@tabler/icons-react";
import { Categories } from "../utils/constants";

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
                <IconCirclePlus
                  style={{ width: rem(16), height: rem(16), color: "#868e96" }}
                />
              }
            >
              {category.value}
            </Badge>
          );
        })}
      </Group>
    </Container>
  );
};
