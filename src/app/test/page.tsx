'use client';
import React, { useState } from 'react';

interface MenuItem {
  name: string;
  children?: MenuItem[];
}

const MenuItemComponent: React.FC<{ item: MenuItem }> = ({ item }) => {
	const [isSubmenuOpen, setSubmenuOpen] = useState(false);

	const handleToggleSubmenu = () => {
		setSubmenuOpen(!isSubmenuOpen);
	};

	return (
		<li>
			<div onClick={handleToggleSubmenu}>
				{item.name}
				{item.children && <span>{isSubmenuOpen ? '▲' : '▼'}</span>}
			</div>
			{isSubmenuOpen && item.children && (
				<ul>
					{item.children.map((child, index) => (
						<MenuItemComponent key={index} item={child} />
					))}
				</ul>
			)}
		</li>
	);
};


const DropdownMenu: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
	return (
		<ul>
			{menuItems.map((item, index) => (
				<MenuItemComponent key={index} item={item} />
			))}
		</ul>
	);
};




const App: React.FC = () => {
	const menuItems: MenuItem[] = [
		{
			name: 'Menu 1',
			children: [
				{ name: 'Submenu 1.1' },
				{ name: 'Submenu 1.2', children: [{ name: 'Submenu 1.2.1' }] },
			],
		},
		{
			name: 'Menu 2',
			children: [
				{ name: 'Submenu 2.1' },
				{ name: 'Submenu 2.2', children: [{ name: 'Submenu 2.2.1' }] },
			],
		},
		{ name: 'Menu 3' },
	];

	return (
		<div>
			<h1>Dropdown Menu</h1>
			<DropdownMenu menuItems={menuItems} />
		</div>
	);
};

export default App;
