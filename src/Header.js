import './Header.css';

const Header = ({ setText }) => {
	const showFile = async (e) => {
		e.preventDefault();
		const reader = new FileReader();
		reader.onload = async (e) => {
			const text = e.target.result;
			setText(text);
		};
		reader.readAsText(e.target.files[0]);
	};

	return (
		<header>
			<label htmlFor='input-file' className='button'>Read from file:</label>
			<input
				type='file'
				name='input-file'
				id='input-file'
				onChange={showFile} />
		</header>
	);
};

export default Header;