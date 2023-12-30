import { defineConfig } from 'cypress';
import { seed } from '@/pages/api/utils/lib/seed-test';

export default defineConfig({
	env: {
		variable: 'foo',
	},
	e2e: {
		baseUrl: 'http://localhost:3000',
		setupNodeEvents(on, config) {
			on('task', {
				async seedDatabase() {
					await seed();
					return null;
				},
			});
		},
	},
});
