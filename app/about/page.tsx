'use client'

import { Container, Title, Paper, Group, Button, Textarea, TextInput, SimpleGrid, Text, Grid, Blockquote } from "@mantine/core";
import classes from "./style.module.css"
import { ContactIconsList } from "../../components/ContactIcons/Component";
import bg from '../../public/bg.svg'
import { IconBulbFilled } from '@tabler/icons-react';


export default function Page() {
    return (
        <Container size='lg' mt={30}>
            <div className={classes.content}>

                <Title order={2} mt={30}>What is Equilibrium Labs?</Title>

                <Blockquote color="blue" icon={<IconBulbFilled />} radius='lg' mt="xl">
                    {"Introducing Equilibrium, a comprehensive trend analysis tool for the cryptocurrency long-term investor. The application combines cutting-edge technology with a well-known trading indicator (let's call it 'Golden Line' ... read the full story here) to provide valuable insights on buy and sell opportunities in the ever-evolving cryptocurrency market."}
                </Blockquote>


                <Title order={2} mt={30}>Our Mission and Values</Title>

                <Blockquote color="blue" icon={<IconBulbFilled />} radius='lg' mt="xl">
                    {"Introducing Equilibrium, a comprehensive trend analysis tool for the cryptocurrency long-term investor. The application combines cutting-edge technology with a well-known trading indicator (let's call it 'Golden Line' ... read the full story here) to provide valuable insights on buy and sell opportunities in the ever-evolving cryptocurrency market."}
                </Blockquote>

                <Title order={2} mt={30}>Contact</Title>


                <SimpleGrid
                    cols={{ base: 1, sm: 1, lg: 2 }}
                    spacing={{ base: 10, sm: 'lg' }}
                    mt='xl'
                >
                    <div>
                        <Paper shadow="md" radius="lg">
                            <div className={classes.contacts} style={{ backgroundImage: `url(${bg.src})` }}>
                                <ContactIconsList />
                            </div>
                        </Paper>
                    </div>
                    <div>
                        <Paper shadow="md" radius="lg">
                            <div className={classes.contacts} style={{ backgroundImage: `url(${bg.src})` }}>
                                <ContactIconsList />
                            </div>
                        </Paper>
                    </div>
                </SimpleGrid>
            </div>
        </Container>
    )

}