'use client'

import { Container, Title } from "@mantine/core"
import classes from './style.module.css'

export default function Page() {
    return (
        // <Layout IndicatorTitle="YouTube Views">
        //     <Tabs.Panel value="data">
        //         data
        //     </Tabs.Panel>

        //     <Tabs.Panel value="description">
        //         indicator description goes here
        //     </Tabs.Panel>

        //     <Tabs.Panel value="summary">
        //         data smmary
        //     </Tabs.Panel>
        // </Layout>

        <Container className={classes.root}>
            <Title className={classes.title}>The indicator is offline for maintenance</Title>
        </Container>
    )
}