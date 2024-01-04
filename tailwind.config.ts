import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/Components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			'sm' :'640px',
			'md' :'991px',
			'sa' :'992px',
			'sb' :'1024px',
			'lg' :'1074px',
			'1lg':'1120px',
			'2lg':'1150px',
			'xl' :'1200px',
			'xs' :'1540px',
			'2xs':'1900px',
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
