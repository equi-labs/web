import { useMantineColorScheme, useComputedColorScheme, Switch } from '@mantine/core';
import { IconSun, IconMoonStars, IconMoon } from '@tabler/icons-react';

export function ColorSchemeToggle() {

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <Switch
      size="sm"
      onLabel={(<IconSun size='lg' />)}
      offLabel={(<IconMoonStars size='lg' />)}
      onChange={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
    />
  )
}