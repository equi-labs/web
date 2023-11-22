import { Card, Text, Badge, Button, Group, Tooltip } from '@mantine/core';
import Link from 'next/link';

export function IndicatorCard({ Title, Description, UpdatedOn, Indicator }: { Title: string, Description: string, UpdatedOn: string, Indicator: string }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group justify="space-between">
        <Text fw={500}>{Title}</Text>
        <Tooltip label={UpdatedOn}>
          <Badge color="green" variant="light">
            Updated
          </Badge>
        </Tooltip>
      </Group>

      <Text size="sm" mt='lg' mb='lg' c="dimmed">
        {Description}
      </Text>


      <Button
        component={Link}
        variant="light"
        color="blue"
        fullWidth
        radius="md"
        href="/indicators/[indicator]"
        as={`/indicators/${Indicator}`}>
        Open
      </Button>
    </Card>
  );
}