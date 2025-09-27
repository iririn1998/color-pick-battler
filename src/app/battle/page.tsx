import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import { Text } from "@/components/Text";

const Battle = () => {
  return (
    <Stack>
      <Text size="xl">ここはバトルがめんです</Text>
      <Button component={Link} href="/">
        <Text>ホーム</Text>
      </Button>
    </Stack>
  );
};

export default Battle;
