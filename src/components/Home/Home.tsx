import { HomeSectionsData } from '@/data/data';

import Section from '../UI/Section/Section';

const Home = () => {
	return (
		<>
			{HomeSectionsData.map((data, i) => (
				<Section
					key={i}
					index={i}
					image={data.image}
					alt={data.alt}
					heading={data.heading}
					description={data.description}
					button={data.button}
				/>
			))}
		</>
	);
};

export default Home;
