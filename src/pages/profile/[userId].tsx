import LoadingSpinner from '@/components/UI/LoadingSpinner/LoadingSpinner';
import { Task, User } from '@/types/app';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const UserProfile = dynamic(
	() => import('@/components/Profile/UserProfile/UserProfile'),
	{
		loading: () => <LoadingSpinner />,
	}
);
const Panel = dynamic(() => import('@/components/Profile/Panel/Panel'), {
	loading: () => <LoadingSpinner />,
});
interface ProfilePageProps {
	user: User;
	tasks: Task[];
}

const ProfilePage: NextPage<ProfilePageProps> = ({ user, tasks }) => {
	return (
		<>
			<Head>
				<title>Taskify - Create or login to your account</title>
				<meta
					name="description"
					content="Welcome to Taskify, your go-to solution for task management and goal accomplishment. Why juggle scattered to-do lists when we've simplified it for you? Make collection of tasks, meticulously designed for your ease, all in one convenient platform for your needs."
				/>
			</Head>

			<UserProfile
				avatar={user.avatar}
				name={user.name}
				date={user.date}
				points={user.points}
			/>
			<Panel tasks={tasks} />
		</>
	);
};

export default ProfilePage;

export const getServerSideProps = async ({
	params,
}: {
	params: {
		userId: string;
	};
}) => {
	const userId = params.userId;

	const user: User = {
		avatar: '/assets/avatars/avatar11.jpg',
		name: 'John Doe',
		date: '2023-10-24',
		points: 123,
		id: '2',
	};

	const tasks: Task[] = [
		{
			title: 'Zapisz się na zajęcia fitness',
			description:
				'Znajdź lokalny klub fitness i zapisz się na zajęcia. Regularna aktywność fizyczna korzystnie wpływa na zdrowie.',
			category: 'Health',
			importance: 2,
			id: '1',
			author: 'JohnDoe',
			date: '2023-10-24',
			active: true,
		},
		{
			title: 'Przygotuj raport roczny',
			description:
				'Zbierz wszystkie potrzebne dane i przygotuj raport roczny dla firmy. To ważne zadanie zawodowe.',
			category: 'Work',
			importance: 3,
			id: '2',
			author: 'JaneSmith',
			date: '2023-10-25',
			active: false,
		},
		{
			title: 'Umyj okna',
			description:
				'Przetrzyj okna w domu, aby poprawić widoczność i uczynić wnętrze bardziej przyjemnym.',
			category: 'House',
			importance: 1,
			id: '3',
			author: 'Homeowner123',
			date: '2023-10-26',
			active: true,
		},
		{
			title: 'Znajdź czas na czytanie',
			description:
				'Zarezerwuj sobie czas na codzienne czytanie książek lub artykułów. Rozwijaj swoje zainteresowania.',
			category: 'Personal',
			importance: 2,
			id: '4',
			author: 'YourName',
			date: '2023-10-27',
			active: false,
		},
		{
			title: 'Opłać rachunki za prąd i wodę',
			description:
				'Sprawdź terminy opłat i ureguluj rachunki za prąd i wodę, aby uniknąć dodatkowych opłat.',
			category: 'Payments',
			importance: 3,
			id: '5',
			author: 'HouseholdManager',
			date: '2023-10-28',
			active: true,
		},
		{
			title: 'Zrób zakupy spożywcze',
			description:
				'Odpowiedz na potrzeby w kuchni i uzupełnij brakujące produkty.',
			category: 'House',
			importance: 2,
			id: '6',
			author: 'Homeowner123',
			date: '2023-10-29',
			active: false,
		},
		{
			title: 'Przygotuj prezent urodzinowy',
			description:
				'Zorganizuj prezent dla bliskiej osoby obchodzącej urodziny.',
			category: 'Personal',
			importance: 2,
			id: '7',
			author: 'YourName',
			date: '2023-10-30',
			active: true,
		},
		{
			title: 'Rozlicz podatek dochodowy',
			description:
				'Przygotuj i złoż wniosek o rozliczenie podatku dochodowego.',
			category: 'Payments',
			importance: 3,
			id: '8',
			author: 'FinancialAdvisor',
			date: '2023-10-31',
			active: false,
		},
		{
			title: 'Rozważ opcje inwestycyjne',
			description:
				'Przemyśl swoje opcje inwestycyjne i zdecyduj, jakie kroki podjąć.',
			category: 'Work',
			importance: 2,
			id: '9',
			author: 'InvestorGuy',
			date: '2023-11-01',
			active: true,
		},
		{
			title: 'Zrób ćwiczenia rozciągające',
			description:
				'Codzienne ćwiczenia rozciągające poprawią twoją elastyczność i samopoczucie.',
			category: 'Health',
			importance: 1,
			id: '10',
			author: 'FitnessEnthusiast',
			date: '2023-11-02',
			active: false,
		},
		{
			title: 'Odkurz mieszkanie',
			description: 'Uporządkuj swoje mieszkanie i pozbyj się kurzu i brudu.',
			category: 'House',
			importance: 1,
			id: '11',
			author: 'CleanFreak',
			date: '2023-11-03',
			active: true,
		},
		{
			title: 'Zapisz pomysł na biznes',
			description:
				'Zanotuj swój pomysł na nowy biznes i zastanów się nad jego realizacją.',
			category: 'Ideas',
			importance: 2,
			id: '12',
			author: 'EntrepreneurMind',
			date: '2023-11-04',
			active: false,
		},
		{
			title: 'Przygotuj prezent walentynkowy',
			description: 'Planuj prezent na nadchodzący Dzień Zakochanych.',
			category: 'Personal',
			importance: 1,
			id: '13',
			author: 'RomanticSoul',
			date: '2023-11-05',
			active: true,
		},
		{
			title: 'Zaplanuj wakacje',
			description:
				'Zacznij planować wakacje i zastanów się nad destynacją oraz datami podróży.',
			category: 'Personal',
			importance: 3,
			id: '14',
			author: 'TravelEnthusiast',
			date: '2023-11-06',
			active: true,
		},
		{
			title: 'Wysyłka paczek świątecznych',
			description: 'Przygotuj paczki świąteczne i wysyłaj je bliskim na czas.',
			category: 'Personal',
			importance: 2,
			id: '15',
			author: 'HolidayElf',
			date: '2023-11-07',
			active: false,
		},
		{
			title: 'Zaplanuj spotkanie z przyjaciółmi',
			description:
				'Zorganizuj spotkanie z przyjaciółmi lub rodziną i spędź wspólnie czas.',
			category: 'Personal',
			importance: 1,
			id: '16',
			author: 'Socializer',
			date: '2023-11-08',
			active: true,
		},
		{
			title: 'Przeczytaj artykuł o zdrowym odżywianiu',
			description: 'Poszerz swoją wiedzę na temat zdrowego odżywiania.',
			category: 'Health',
			importance: 1,
			id: '17',
			author: 'HealthEnthusiast',
			date: '2023-11-09',
			active: true,
		},
		{
			title: 'Sprzątanie w ogrodzie',
			description: 'Uporządkuj ogród i przygotuj go na nadchodzący sezon.',
			category: 'House',
			importance: 2,
			id: '18',
			author: 'GardenLover',
			date: '2023-11-10',
			active: false,
		},
		{
			title: 'Rozważ zakup samochodu',
			description:
				'Przemyśl swoje potrzeby i rozważ zakup nowego lub używanego samochodu.',
			category: 'Personal',
			importance: 3,
			id: '19',
			author: 'CarEnthusiast',
			date: '2023-11-11',
			active: true,
		},
		{
			title: 'Ustal budżet na remont',
			description: 'Określ, ile możesz przeznaczyć na planowany remont w domu.',
			category: 'House',
			importance: 2,
			id: '20',
			author: 'HomeImprover',
			date: '2023-11-12',
			active: false,
		},
	];

	return {
		props: {
			user,
			tasks,
		},
	};
};
