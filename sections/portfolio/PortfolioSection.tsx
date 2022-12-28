import { Title } from '@/components/section'
import Section from '@/components/section/Section'

export default function PortfolioSection() {
    return (
        <Section id="portfolio" css={{ position: 'relative' }}>
            <Title
                title="Some of our work"
                subtitle="Explore some contracts we have done"
            />
            {/* ... */}
        </Section>
    )
}
