import { useState } from 'react';
import Split from 'react-split';

import Editor from './Editor';
import Viewer from './Viewer';


const App = () => {


	const [markdown, setMarkdown] = useState('');

	const renderHeadings = (line, index) => {
		if (line.startsWith('##')) {
			if (line.startsWith('###')) {
				if (line.startsWith('####')) {
					if (line.startsWith('#####')) {
						if (line.startsWith('######')) {
							return (
								<h6 key={index}>{line.slice(6)}</h6>
							);
						}
						return (
							<h5 key={index}>{line.slice(5)}</h5>
						);
					}
					return (
						<h4 key={index}>{line.slice(4)}</h4>
					);
				}
				return (
					<h3 key={index}>{line.slice(3)}</h3>
				);
			}
			return (
				<>
					<h2 key={index}>{line.slice(2)}</h2>
					<hr />
				</>
			);
		}
		return (
			<>
				<h1 key={index}>{line.slice(1)}</h1>
				<hr />
			</>
		);
	};

	const renderMarkdown = (text) => {
		return (
			<>
				{
				text.split('\n').map((line, index) => {
					if (line === '***') {
						return <hr key={index} />
					}

					if (line.startsWith('#')) {
						return renderHeadings(line, index);
					}

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
				<Editor renderMarkdown={(text) => setMarkdown(renderMarkdown(text))} />
				<Viewer markdown={markdown} />

			</Split>
		</>
	);
}

export default App;
