import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import Header from '../Components/Header/HeaderComponent';
import NavigationBar from '../Components/Header/NavigationBar';
import Footer from '../Components/Footer';


export const metadata: Metadata = {
	title: 'Home',
	description: 'Created by Roger Albuquerque',
};

export default function RootLayout({children}:{children: React.ReactNode}) {
	return (
		<html lang="pt">
			<body id='Container' className='flex flex-col'>				
				<Header />			
				<NavigationBar />
				<main className='bg-blue-600 text-slate-50 pt-2 w-full'>
					{children}
				</main>					
				<Footer />			
			</body>
		</html>
	);
}
