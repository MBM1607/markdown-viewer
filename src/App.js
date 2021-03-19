import { useState } from 'react';
import Split from 'react-split';

import Editor from './Editor';
import Viewer from './Viewer';


const App = () => {


	const [markdown, setMarkdown] = useState('');

	const renderMarkdown = (text) => {
		setMarkdown(
			<>
				{
					text.split('\n').map((line, index) => {
						if (line === '***')
							return <hr key={index} />

						else if (line[0] === '#')
							if (line[1] === '#')
								if (line[2] === '#')
									return <h3 key={index}>{line.slice(3)}</h3>;
								else
									return <h2 key={index}>{line.slice(2)}</h2>;
							else
								return (
									<>
										<h1 key={index}>{line.slice(1)}</h1>
										<hr />
									</>
								);

						else if (line[0] === '*' && line[line.length - 1] === '*')
							if (line[1] === '*' && line[line.length - 2] === '*')
								return <p key={index}><strong>{line.slice(2, -2)}</strong></p>
							else
								return <p key={index}><em>{line.slice(1, -1)}</em></p>

						else
							return <p key={index}>{line}</p>
					})
				}
			</>
		);
	};

	return (
		<>
			<Split
				sizes={[50, 50]}
				direction='horizontal'
				gutterSize={5}
				>
				<Editor renderMarkdown={renderMarkdown} />
				<Viewer markdown={markdown} />

			</Split>
		</>
	);
}

export default App;
