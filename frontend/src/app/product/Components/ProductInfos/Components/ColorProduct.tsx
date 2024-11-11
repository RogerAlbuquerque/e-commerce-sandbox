
interface ButtonConfig {
	colorList: string[],
	colorSelected:number | null,
	setColorSelected: (index:number) => void;
}

export default function ColorProduct({ colorList,colorSelected, setColorSelected }: ButtonConfig) {
	const cor = '#50d71e';
	return (
		<div className='flex gap-6'>
			<p>Color:</p>
			{colorList.map((color, index) => (
				<button
					key={index}
					type="button"
					onClick={() => { setColorSelected(index)}}
					style={{backgroundColor: color}}
					className={`p-3 border-2 ${colorSelected === index && 'border-black'} rounded-full`}
				>
				</button>
			))}
		</div>
	);
}