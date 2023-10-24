import Section from '../UI/Section/Section';
import { HomeSectionsData } from '@/data/data';

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
