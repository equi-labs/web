'use client'

import { Container, Tabs } from "@mantine/core"

import Layout from "../_layout";

export default function Page() {
    return (
        <Layout IndicatorTitle="YouTube Views">
            <Tabs.Panel value="data">
                data
            </Tabs.Panel>

            <Tabs.Panel value="description">
                indicator description goes here
            </Tabs.Panel>

            <Tabs.Panel value="summary">
                data smmary
            </Tabs.Panel>
        </Layout>
    )
}