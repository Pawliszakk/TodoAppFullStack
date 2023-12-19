import { useContext } from 'react';
import ThemeContext from '@/context/theme-context';
import { getSections } from '@/data/data';

import Section from '../UI/Section/Section';

const Home = () => {
	const { isDark } = useContext(ThemeContext);

	const HomeSectionsData = getSections(isDark);

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
					home
				/>
			))}
		</>
	);
};

export default Home;
