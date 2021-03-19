import { useState } from 'react';

import './Editor.css';


const Editor = ({ renderMarkdown }) => {
	const [text, setText] = useState('');

	const onChange = (e) => {
		setText(e.target.value);
		renderMarkdown(e.target.value);
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