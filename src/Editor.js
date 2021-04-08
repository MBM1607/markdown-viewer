import { ScrollSync, ScrollSyncNode } from 'scroll-sync-react';

import './Editor.css';


const Editor = ({ text, setText }) => {

	const onChange = (e) => {
		setText(e.target.value);
	}

	return (
		<ScrollSync>
			<div id='editor-container'>
				<ScrollSyncNode group='editor'>
					<p id='line-numbers'>
						{
							text.split('\n').map((_, i) => {
								return `${i + 1}\n`;
							})
						}
					</p>
				</ScrollSyncNode>
				<ScrollSyncNode group='editor'>
					<textarea
						id='editor'
						onChange={onChange}
						value={text}
						className='syncscroll'
						name='editor'
					>
					</textarea>
				</ScrollSyncNode>
			</div>
		</ScrollSync>
	)
};


export default Editor;