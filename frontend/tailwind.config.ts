import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/**/*.{html,js,tsx}'
	],
	theme: {
		screens: {
			'mini' :'400px',
			'sm' :'767px',
			'md' :'991px',
			'sa' :'992px',
			'sb' :'1023px',
			'lg' :'1074px',
			'1lg':'1120px',
			'2lg':'1150px',
			'xl' :'1200px',
			'xs' :'1540px',
		},
	},
	plugins: [],
}satisfies Config;
export default config;


