"use client";

import { Button, Stack } from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedTitle } from "@/components/AnimatedTitle";
import { Text } from "@/components/Text";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage: FC<ErrorProps> = ({ error, reset }) => {
  return (
    <AnimatedBackground>
      <AnimatedTitle>500 Error</AnimatedTitle>
      <Stack align="center" gap="md" w="100%" maw={300}>
        <Text style={{ fontSize: "1.2rem", textAlign: "center" }}>
          エラーがはっせいしました
        </Text>
        <Text
          style={{
            fontSize: "0.9rem",
            textAlign: "center",
            opacity: 0.8,
          }}
        >
          よきしないエラーがはっせいしました。もう1どおためしください
        </Text>
        {error.digest && (
          <Text
            style={{
              fontSize: "0.8rem",
              textAlign: "center",
              opacity: 0.6,
            }}
          >
            エラーID: {error.digest}
          </Text>
        )}
        <Button color="orange" size="lg" fullWidth mt="md" onClick={reset}>
          <Text>もう1かいためす</Text>
        </Button>
        <Button component={Link} href="/" color="blue" size="lg" fullWidth>
          <Text>ホームにもどる</Text>
        </Button>
      </Stack>
    </AnimatedBackground>
  );
};

export default ErrorPage;
