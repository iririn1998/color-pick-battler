import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Text } from "@/components/Text";

const Home: FC = () => {
  return (
    <AnimatedBackground>
      <AnimatedTitle>Color Pick Battler</AnimatedTitle>
      <Stack align="center" gap="md" w="100%" maw={180}>
        <Button
          component={Link}
          href="/battle"
          color="blue"
          size="lg"
          fullWidth
        >
          <Text>ステージセレクト</Text>
        </Button>
        <Button component={Link} href="/menu" color="green" size="lg" fullWidth>
          <Text>メニュー</Text>
        </Button>
        <Button
          component={Link}
          href="/tutorial"
          color="orange"
          size="lg"
          fullWidth
        >
          <Text>チュートリアル</Text>
        </Button>
      </Stack>
    </AnimatedBackground>
  );
};

export default Home;
