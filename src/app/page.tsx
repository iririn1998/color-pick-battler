import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import { Text } from "@/components/Text";

const Home = () => {
  return (
    <Stack>
      <Text size="xl">ここはタイトルがめんです</Text>
      <Button component={Link} href="/menu" color="green">
        <Text>メニュー</Text>
      </Button>
    </Stack>
  );
};

export default Home;
