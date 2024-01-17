import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/Components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			
		},
	},
	plugins: [],
};
export default config;
