
interface ButtonConfig {
	colorList: string[],
	colorSelected: number | null,
	setColorSelected: (index: number) => void;
}

export default function ColorProduct({ colorList, colorSelected, setColorSelected }: ButtonConfig) {

	if (!Array.isArray(colorList)) {
    return <p>Color list is invalid</p>;
  }
	
	return (
		<div className='flex flex-col sm:flex-row gap-2 sm:gap-6 items-start sm:items-center'>
			<p className='text-sm sm:text-base'>Color:</p>
			<div className='flex gap-2 sm:gap-4'>
				{colorList.map((color, index) => {
					return (
						<button
							key={index}
							type="button"
							onClick={() => { setColorSelected(index) }}
							style={{ backgroundColor: color }}
							className={`p-2 sm:p-3 border-2 ${colorSelected === index && 'border-black'} rounded-full`}
						>
						</button>)
				})}
			</div>
		</div>
	);
}