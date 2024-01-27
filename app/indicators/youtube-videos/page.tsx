'use client'

import { Container, Tabs, Title } from "@mantine/core"
import classes from './style.module.css'
import Layout from "../_layout"
import Data from "./data"

export default function Page() {
    return (
        <>
            <Layout IndicatorTitle="YouTube Views">
                <Tabs.Panel value="data">
                    <Data />
                </Tabs.Panel>

                <Tabs.Panel value="description">
                    indicator description goes here
                </Tabs.Panel>

                <Tabs.Panel value="summary">
                    data smmary
                </Tabs.Panel>
            </Layout>
        </>

    )
}