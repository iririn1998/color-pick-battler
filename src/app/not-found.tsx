import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Text } from "@/components/Text";

const NotFound: FC = () => {
  return (
    <AnimatedBackground>
      <AnimatedTitle>404 Error</AnimatedTitle>
      <Stack align="center" gap="md" w="100%" maw={300}>
        <Text style={{ fontSize: "1.2rem", textAlign: "center" }}>
          ページがみつかりません
        </Text>
        <Text
          style={{
            fontSize: "0.9rem",
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          おしのページはそんざいしないか、いどうしたかのうせいがあります
        </Text>
        <Button
          component={Link}
          href="/"
          color="blue"
          size="lg"
          fullWidth
          mt="md"
        >
          <Text>ホームにもどる</Text>
        </Button>
      </Stack>
    </AnimatedBackground>
  );
};

export default NotFound;
