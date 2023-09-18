import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import NavigationBar from '../Components/Header/NavigationBar';
import Header from '../Components/Header/HeaderComponent';
import Footer from '../Components/Footer';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Created by Roger Albuquerque',
};

export default function RootLayout({children}:{children: React.ReactNode}) {
	return (
		<html lang="pt">
			<body>
				<div id='Container' className=' flex flex-col items-center justify-center' >
					<Header />
					<NavigationBar />
					<main className='bg-blue-600 text-slate-50  pl-96 pr-96 pt-2 w-full'>
						{children}
					</main>					
					<Footer />
				</div>			
			</body>
		</html>
	);
}
