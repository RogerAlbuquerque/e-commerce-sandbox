import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import HeaderComponent from '../Components/Header/HeaderComponent';
import NavigationBar from '../Components/Header/NavigationBar';
import Footer from '../Components/Footer';

export const metadata: Metadata = {
	title: 'Home',
	description: 'Created by Roger Albuquerque',
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="pt">
			<body className='relative'>				
				<HeaderComponent />			
				<NavigationBar />
				{children}		
				<Footer />	
			</body>
		</html>
	);
}