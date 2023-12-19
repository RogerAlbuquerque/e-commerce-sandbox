import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import HeaderComponent from '../Components/Header/HeaderComponent';
import NavigationBar from '../Components/Header/NavigationBar';
import Footer from '../Components/Footer';


export const metadata: Metadata = {
	title: 'Home',
	description: 'Created by Roger Albuquerque',
};

export default function RootLayout({children}:{children: React.ReactNode}) {
	return (
		<html lang="En">
			<body className='flex flex-col'>				
				<HeaderComponent />			
				<NavigationBar />
				{children}		
				<Footer />			
			</body>
		</html>
	);
}
