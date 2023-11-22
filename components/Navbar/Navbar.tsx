import { Title, Group, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Navbar.module.css';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const links = [
    { link: '/about', label: 'About' },
];

export function Navbar() {
    const items = links.map((link) => {
        return (
            <a
                key={link.label}
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        );
    });

    return (
        <header className={classes.header}>
            <Container size="lg">
                <div className={classes.inner}>
                    {/* <MantineLogo size={28} /> */}
                    <Title order={2}>Labs</Title>
                    <Group gap={5}>
                        {items}
                        <ColorSchemeToggle />
                    </Group>
                </div>
            </Container>
        </header>
    );
}