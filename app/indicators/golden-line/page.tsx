'use client'

import { Text, Tabs, Box, Stack, Flex, Blockquote } from "@mantine/core"
import { TableSort } from "./golden-line";
import { IconInfoCircle } from '@tabler/icons-react';

import Layout from "../_layout";

export default function Page() {
    return (
        <Layout IndicatorTitle="Golden Line">
            <Tabs.Panel value="data">
                <TableSort />
            </Tabs.Panel>

            <Tabs.Panel value="description">
                <Text px='sm' mt='xl' ta='justify' fw={500} >
                    Applying an indicator on your favourite coin is straightforward and intuitive.
                    For instance, if you like Bitcoin, you can look into its chart permanently
                    and never bother with other assets; that's fair enough. But what about the
                    rest of the market? Another coin in the crypto ocean might be soaring with
                    a potential of 100X. Would you excuse yourself for missing the next Matic or Dogecoin?
                </Text>

                <Text px='sm' mt='xl' ta='justify' fw={500} >
                    Operating on weekly candle sticks, Equilibrium Labs fetches data directly from
                    the renowned Binance exchange for well-established trading pairs. Afterwards,
                    it applies the "Golden Line" indicator, allowing you to identify trends across
                    the whole market, discover new assets and make informed trading decisions.
                </Text>

                <Text px='sm' mt='xl' ta='justify' fw={500} >
                    This dashboard shows whether a crypto coin is bullish, bearish, or in the grey zone.
                    Furthermore, the dashboard offers essential information, such as the chart age,
                    asset price, and volume regarding the latest week's candle close.
                </Text>

                <Text px='sm' mt='xl' ta='justify' fw={500} >
                    Note that this indicator is modified to present trading pairs with a chart age
                    over two years. This constraint was applied to assume mature projects,
                    minimizing the risk of being scammed.
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