import { Container, Title, Text, Autocomplete } from '@mantine/core';
import classes from './Head.module.css';

export default function Welcome() {
    return (
        <div className={classes.root}>
            <Container size="lg">
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title className={classes.title}>
                            Welcome to{' '}
                            <Text
                                component="span"
                                inherit
                                variant="gradient"
                                gradient={{ from: 'yellow', to: 'blue' }}
                            >
                                Equilibrium Labs
                            </Text>
                        </Title>
                        
                        <Autocomplete
                            size='md'
                            mt={30}
                            placeholder="Search for an Indicator"
                            data={['Golden Line', 'YouTube Subs', 'YouTube Views']}
                            limit={4}
                        />

                    </div>
                </div>
            </Container>
        </div>
    );
}