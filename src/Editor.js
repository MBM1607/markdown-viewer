import './Editor.css';


const Editor = ({ text, setText }) => {

	const onChange = (e) => {
		setText(e.target.value);
	}

	return (
		<div id='editor-container'>
			<p id='line-numbers'>
				{
					text.split('\n').map((_, i) => {
						return `${i}\n`;
					})
				}
			</p>
			<textarea
				id='editor'
				onChange={onChange}
				value={text}
			>
			</textarea>
		</div>
	)
};


export default Editor;