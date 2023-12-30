import { defineConfig } from 'cypress';
import { seed } from '@/pages/api/utils/lib/seed-test';

interface SeedTaskArguments {
	password: string;
	user: string;
	database: string;
}

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:3000',
		setupNodeEvents(on, config) {
			on('task', {
				async seedDatabase({ password, user, database }: SeedTaskArguments) {
					await seed(password, user, database);
					return null;
				},
			});
		},
	},
});

