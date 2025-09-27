import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import { Text } from "@/components/Text";

const Menu = () => {
  return (
    <Stack>
      <Text size="xl">ここはメニューがめんです</Text>
      <Button component={Link} href="/battle" color="orange">
        <Text>バトル</Text>
      </Button>
    </Stack>
  );
};

export default Menu;
