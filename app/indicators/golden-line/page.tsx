'use client'

import { Text, Tabs, Box, Stack, Flex, Blockquote, Code, Title } from "@mantine/core"
import { TableSort } from "./golden-line";
import { IconInfoCircle } from '@tabler/icons-react';
import Layout from "../_layout";

const code = `    //@version=4
    study(title="Golden Line", shorttitle="GL", overlay=true, resolution="")
    smma(src, length) =>
    smma = 0.0
    smma := na(smma[1]) ? sma(src, length) : (smma[1] * (length - 1) + src) / length
    smma
    v1 = smma(hl2, 15)
    m1 = smma(hl2, 19)
    m2 = smma(hl2, 25)
    v2 = smma(hl2, 29)
    p2 = v1<m1 != v1<v2 or m2<v2 != v1<v2
        p3= not p2 and v1<v2
        p1= not p2 and not p3
        c= p1 ? color.orange : p2 ? color.silver : #311b92
    line1 = plot(v1, "Line 1", color=c)
    line2 = plot(v2, "Line 2", color=c)
    fill(line1, line2, color=c)`;

export default function Page() {

    return (
        <Layout IndicatorTitle="Golden Line">
            <Tabs.Panel value="data">
                <TableSort />
            </Tabs.Panel>

            <Tabs.Panel value="description">
                <Text px='sm' mt='xl' ta='justify' fw={500} >
                    {"Applying an indicator on your favourite coin is straightforward and intuitive. For instance, if you like Bitcoin, you can look into its chart permanently and never bother with other assets; that's fair enough. But what about the rest of the market? Another coin in the crypto ocean might be soaring with a potential of 100X. Would you excuse yourself for missing the next Matic or Dogecoin?"}
                </Text>

                <Text px='sm' mt='xl' ta='justify' fw={500} >
                    {"Operating on weekly candle sticks, Equilibrium Labs fetches data directly from the renowned Binance exchange for well-established trading pairs. Afterwards, it applies the 'Golden Line' indicator, allowing you to identify trends across the whole market, discover new assets and make informed trading decisions."}
                </Text>

                <Text px='sm' mt='xl' ta='justify' fw={500} >
                    {"This dashboard shows whether a crypto coin is bullish, bearish, or in the grey zone. Furthermore, the dashboard offers essential information, such as the chart age, asset price, and volume regarding the latest week's candle close."}
                </Text>

                <Text px='sm' mt='xl' ta='justify' fw={500} >
                    {"Note that this indicator is modified to present trading pairs with a chart age over two years. This constraint was applied to assume mature projects, minimizing the risk of being scammed."}
                </Text>

                <Title px='sm' mt='xl' order={3}> How To</Title>

                <Text px='sm' mt='md' ta='justify' fw={500} >
                    {"For optimal use of this tool, it is recommended to include the following Pine Script to your Trading View Account. Note that if you open this app from a mobile device, you might not see all the data, or the redirection button won't work properly. Use a laptop's web browser for the full experience."}
                </Text>

                <Code px='sm' mt='xl' block>{code}</Code>

                <Text px='sm' mt='xl' ta='justify' fw={500} >
                    {"You are ready to go 🙂. Use the search bar on the top of your screen to find your favourite coin, or apply any of the provided filters to check bullish or bearish coins."}
                </Text>

            </Tabs.Panel>

            <Tabs.Panel value="summary">
                <Text
                    mt={100}
                    size="xl"
                    fw={900}
                    ta='center'

                >
                    Cooking a cool feature here ... 🥘
                </Text>
            </Tabs.Panel>
        </Layout>
    )
}