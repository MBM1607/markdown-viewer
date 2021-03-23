import './Editor.css';


const Editor = ({ text, setText }) => {

	const onChange = (e) => {
		setText(e.target.value);
	}

	return (
		<textarea
			id="editor"
			onChange={onChange}
			value={text} >
		</textarea>
	)
};


export default Editor;