import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import HeaderComponent from '../Components/Header/HeaderComponent';
import NavigationBar from '../Components/Header/NavigationBar';
import Footer from '../Components/Footer';
import { GoSearch } from 'react-icons/go';


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
				<hr className='m-auto mb-4 customContainer'/>		
				<div className='customContainer flex m-auto p-0 justify-between text-stone-500 text-base mb-2'>
					<p>Copyright © 2023 Molla Store. All Rights Reserved.</p>
					<div className='flex gap-6'>
						<GoSearch className='text-xl' />
						<GoSearch className='text-xl' />
						<GoSearch className='text-xl' />
						<GoSearch className='text-xl' />
						<GoSearch className='text-xl' />
					</div>
				</div>
			</body>
		</html>
	);
}
