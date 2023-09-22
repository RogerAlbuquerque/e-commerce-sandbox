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
			<body className='flex flex-col'>				
				<Header />			
				<NavigationBar />
				<main className='text-neutral-400 pt-2 flex justify-center'>
					<div id='containerMain' className='' style={{width:'1200px'}}>
						{children}
					</div>
					
				</main>					
				<Footer />			
			</body>
		</html>
	);
}
