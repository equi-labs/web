import { Accordion, Box, Container, SimpleGrid, Title } from "@mantine/core";
import React from "react";
import Plot from 'react-plotly.js';

export default function Data() {


    const data = [
        {
            name: "Crypto YouTube Subscribers Change",
            x: [
                '2018-12-22',
                '2018-12-23',
                '2018-12-24',
                '2018-12-25',
                '2018-12-26',
                '2018-12-27',
                '2018-12-28'],
            y: [
                32.51,
                33.51,
                34.51,
                35.51,
                36.51,
                37.51,
                100
            ],
        }
    ];

    var layout1 = {
        title: {
            text: 'Crypto YouTube Total Videos',
            font: {
                size: 24
            },
            x: 0.05,
        },
        xaxis: {
            title: {
                text: 'Time',
                font: {
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Total Uploaded Videos',
                font: {
                    size: 18,
                    color: '#7f7f7f'
                }
            }
        }
    };

    var layout2 = {
        title: {
            text: 'Crypto YouTube Total Videos Change Rate',
            font: {
                size: 24
            },
            x: 0.05,
        },
        xaxis: {
            title: {
                text: 'Time',
                font: {
                    size: 18,
                    color: '#7f7f7f'
                }
            },
        },
        yaxis: {
            title: {
                text: 'Total Uploaded Videos',
                font: {
                    size: 18,
                    color: '#7f7f7f'
                }
            }
        }
    };

    return (

        <>
            <Plot data={data} layout={layout1} useResizeHandler={true} style={{ width: "100%", height: "100%" }} />
            <Plot data={data} layout={layout2} useResizeHandler={true} style={{ width: "100%", height: "100%" }} />
        </>

    )

}