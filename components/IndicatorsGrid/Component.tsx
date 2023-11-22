import { Container, SimpleGrid, Title } from '@mantine/core';
import { IndicatorCard } from '../IndicatorCard/IndicatorCard';

export default function IndicatorsGrid() {

    const data = [
        {
            name: "Golden Line",
            slug: 'golden-line',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            updatedOn: "19/11/2023"
        },
        {
            name: "YouTube Subs",
            slug: 'youtube-subs',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            updatedOn: "19/11/2023"
        },
        {
            name: "YouTube Views",
            slug: 'youtube-views',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            updatedOn: "19/11/2023"
        }
    ]

    return (
        <Container size='lg' mt='xl'>
            <Title order={1}>Indicators</Title>
            <SimpleGrid
                cols={{ base: 1, sm: 1, lg: 3 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
                mt='xl'
            >
                {
                    data.map((indicator) => (
                        <IndicatorCard
                            key={indicator.name}
                            Title={indicator.name}
                            Description={indicator.description}
                            UpdatedOn={indicator.updatedOn}
                            Indicator={indicator.slug}
                        />
                    ))
                }
            </SimpleGrid>
        </Container>

    );
}