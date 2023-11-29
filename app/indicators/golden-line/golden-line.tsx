import { useState } from 'react';
import {
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
    keys,
    Button,
} from '@mantine/core';
import { IconSelector, IconChevronDown, IconChevronUp, IconSearch, IconTrendingUp } from '@tabler/icons-react';
import classes from './TableSort.module.css';

interface RowData {
    Symbol: string;
    Date: string;
    Price: string;
    Volume: string;
    ChartAge: string;
    ViewChart: string
}

interface ThProps {
    hideOnSmallScreen: boolean;
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}

function Th({ hideOnSmallScreen, children, reversed, sorted, onSort }: ThProps) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    const classNames = [classes.th];

    if (hideOnSmallScreen) {
        classNames.push(classes.hideOnSmallScreen);
    }

    return (
        <Table.Th className={classNames.join(' ')}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data: RowData[], search: string) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
}

function sortData(
    data: RowData[],
    payload: { sortBy: keyof RowData | null; reversed: boolean; search: string }
) {
    const { sortBy } = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].localeCompare(a[sortBy]);
            }

            return a[sortBy].localeCompare(b[sortBy]);
        }),
        payload.search
    );
}

const data = [{
    "Symbol": "JPI",
    "Date": "2/1/2023",
    "Price": "$73246.00",
    "Volume": "9285717",
    "ChartAge": "1",
    "ViewChart": "null"
}, {
    "Symbol": "WAL",
    "Date": "1/8/2023",
    "Price": "$24847.17",
    "Volume": "7063488",
    "ChartAge": "203",
    "ViewChart": "null"
}, {
    "Symbol": "MMC",
    "Date": "10/24/2023",
    "Price": "$22647.97",
    "Volume": "3122819",
    "ChartAge": "54",
    "ViewChart": "null"
}, {
    "Symbol": "RS",
    "Date": "5/31/2023",
    "Price": "$48713.94",
    "Volume": "8684736",
    "ChartAge": "115",
    "ViewChart": "null"
}, {
    "Symbol": "DWSN",
    "Date": "3/14/2023",
    "Price": "$71737.98",
    "Volume": "3647996",
    "ChartAge": "95",
    "ViewChart": "null"
}, {
    "Symbol": "BPOPN",
    "Date": "2/26/2023",
    "Price": "$15184.35",
    "Volume": "4152946",
    "ChartAge": "212",
    "ViewChart": "null"
}, {
    "Symbol": "VET",
    "Date": "10/8/2023",
    "Price": "$66424.81",
    "Volume": "6206133",
    "ChartAge": "99",
    "ViewChart": "null"
}, {
    "Symbol": "CERCW",
    "Date": "10/26/2023",
    "Price": "$5608.80",
    "Volume": "8426674",
    "ChartAge": "131",
    "ViewChart": "null"
}, {
    "Symbol": "INTC",
    "Date": "7/16/2023",
    "Price": "$27174.64",
    "Volume": "2941155",
    "ChartAge": "29",
    "ViewChart": "null"
}, {
    "Symbol": "BMRC",
    "Date": "7/26/2023",
    "Price": "$84124.49",
    "Volume": "8041040",
    "ChartAge": "279",
    "ViewChart": "null"
}];

export function TableSort() {
    const [search, setSearch] = useState('');
    const [sortedData, setSortedData] = useState(data);
    const [sortBy, setSortBy] = useState<keyof RowData | null>(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);

    const setSorting = (field: keyof RowData) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, { sortBy: field, reversed, search }));
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, { sortBy, reversed: reverseSortDirection, search: value }));
    };

    return (
        <>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                value={search}
                onChange={handleSearchChange}
            />
            <Table stickyHeader={true} horizontalSpacing="md" verticalSpacing="xs" layout="fixed">
                <Table.Thead>
                    <Table.Tr>
                        <Th
                            hideOnSmallScreen={false}
                            sorted={sortBy === 'Symbol'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('Symbol')}
                        >
                            Symbol
                        </Th>
                        <Th
                            hideOnSmallScreen={true}
                            sorted={sortBy === 'Date'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('Date')}
                        >
                            Date
                        </Th>
                        <Th
                            hideOnSmallScreen={false}
                            sorted={sortBy === 'Price'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('Price')}
                        >
                            Price
                        </Th>
                        <Th
                            hideOnSmallScreen={true}
                            sorted={sortBy === 'Volume'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('Volume')}
                        >
                            Volume
                        </Th>
                        <Th
                            hideOnSmallScreen={true}
                            sorted={sortBy === 'ChartAge'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('ChartAge')}
                        >
                            Chart Age
                        </Th>
                        <Th
                            hideOnSmallScreen={false}
                            sorted={sortBy === 'ViewChart'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('ViewChart')}
                        >
                            Chart
                        </Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                    {sortedData.length > 0 ? (
                        sortedData.map((row) => (
                            <Table.Tr key={row.Symbol}>
                                <Table.Td>{row.Symbol}</Table.Td>
                                <Table.Td className={classes.hideOnSmallScreen}>{row.Date}</Table.Td>
                                <Table.Td >{row.Price}</Table.Td>
                                <Table.Td className={classes.hideOnSmallScreen}>{row.Volume}</Table.Td>
                                <Table.Td className={classes.hideOnSmallScreen}>{row.ChartAge}</Table.Td>
                                <Table.Td>
                                    <Button
                                        variant="light"
                                        color='green'
                                        rightSection={<IconTrendingUp size={14} />}
                                    >
                                        Open
                                    </Button>
                                </Table.Td>
                            </Table.Tr>
                        ))
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={Object.keys(data[0]).length}>
                                <Text fw={500} ta="center">
                                    Nothing found
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </>
    );
}