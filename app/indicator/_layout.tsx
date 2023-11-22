'use client'

import { Container, Title, Tabs, rem } from "@mantine/core"
import { IconChartLine, IconInfoCircle, IconFileDescription } from '@tabler/icons-react';
import classes from "./style.module.css"

export default function Layout({ children, IndicatorTitle }: { children: React.ReactNode, IndicatorTitle: string }) {
    return (
        <>
            <Container size='lg'>
                <div className={classes.content}>
                    <Title>{IndicatorTitle}</Title>
                    <Tabs variant="pills" radius="xl" defaultValue="data" my={50}>
                        <Tabs.List my={30}>
                            <Tabs.Tab value="data" leftSection={<IconChartLine style={{ width: rem(20), height: rem(20) }} />}>
                                Data
                            </Tabs.Tab>
                            <Tabs.Tab value="description" leftSection={<IconInfoCircle style={{ width: rem(20), height: rem(20) }} />}>
                                Description
                            </Tabs.Tab>
                            <Tabs.Tab value="summary" leftSection={<IconFileDescription style={{ width: rem(20), height: rem(20) }} />}>
                                Summary
                            </Tabs.Tab>
                        </Tabs.List>
                        {children}
                    </Tabs>
                </div>
            </Container>
        </>
    );
}