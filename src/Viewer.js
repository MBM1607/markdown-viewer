import './Viewer.css';

const Viewer = ({ markdown }) => {
	return (
		<div id="preview" dangerouslySetInnerHTML={{__html: markdown}}>
		</div>
	);
};

export default Viewer;