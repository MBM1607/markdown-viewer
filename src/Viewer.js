import './Viewer.css';

const Viewer = ({ markdown }) => {
	return (
		<div id="viewer">
			{markdown}
		</div>
	);
};

export default Viewer;