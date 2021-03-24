import { useEffect, useState } from 'react';
import Split from 'react-split';
import marked from 'marked';

import Header from './Header';
import Editor from './Editor';
import Viewer from './Viewer';

marked.setOptions({
	headerIds: false,
	renderer: new marked.Renderer(),
	pedantic: false,
	gfm: true,
	breaks: true,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	xhtml: true
});

const App = () => {

	const [markdown, setMarkdown] = useState('');
	const [text, setText] = useState(`# Markdown syntax guide

## Headers

# This is a Heading h1
## This is a Heading h2
###### This is a Heading h6

## Emphasis

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

## Lists

### Unordered

* Item 1
* Item 2
* Item 2a
* Item 2b

### Ordered

1. Item 1
1. Item 2
1. Item 3
  1. Item 3a
  1. Item 3b

## Images

![This is a alt text.](/image/sample.png "This is a sample image.")

## Links

You may be using [Markdown Live Preview](https://markdownlivepreview.com/).

## Blockquotes

> Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
>
>> Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## Tables

| Left columns  | Right columns |
| ------------- |:-------------:|
| left foo      | right foo     |
| left bar      | right bar     |
| left baz      | right baz     |

## Blocks of code

\`\`\`
	let message = 'Hello world';
	alert(message);
\`\`\`

## Inline code

\`print("Hello, World!")\`.`);

	useEffect(() => {
		setMarkdown(marked(text));
	}, [text]);

	return (
		<>
			<Header setText={setText} />
			<Split
				sizes={[50, 50]}
				direction='horizontal'
				gutterSize={5}
				>
				<Editor text={text} setText={setText} />
				<Viewer markdown={markdown} />
			</Split>
			<footer>
				<p>&copy; Muhammad Khan</p>
			</footer>
		</>
	);
}

export default App;
