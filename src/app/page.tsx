import { Button, Card, Container, Group, Text, Title } from "@mantine/core";

export default function Home() {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="md">
        Color Pick Battler
      </Title>
      <Text mb="lg">Mantineのスタイルが適用されているかテストします。</Text>

      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>テストカード</Text>
        </Group>

        <Text size="sm" c="dimmed">
          このカードとボタンが正しくスタイリングされていれば、Mantineの設定は成功です。
        </Text>

        <Button fullWidth mt="md" radius="md" variant="filled">
          Mantineボタン
        </Button>
      </Card>
    </Container>
  );
}
