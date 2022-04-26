import React from 'react';

class KanbanCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
		};
	}

	render() {
		const cardStyle = {
			'backgroundColor': '#f9f7f7',
			'paddingLeft': '0px',
			'paddingTop': '5px',
			'paddingBottom': '5px',
			'marginLeft': '0px',
			'marginRight': '5px',
			'marginBottom': '5px',
		};

		return (
			<div
				style={cardStyle}
				draggable={true}
				onDragEnd={(e) => { this.props.onDragEnd(e, this.props.metrix); }}
			>
				<div><h4>{this.props.metrix.name}</h4></div>
				{(this.state.collapsed)
					? null
					: (<div><strong>Description: </strong>{this.props.metrix.description}<br /></div>)
				}
				<div
					style={{ 'width': '100%' }}
					onClick={(e) => { this.setState({ collapsed: !this.state.collapsed }); }}
				>
					{(this.state.collapsed) ? String.fromCharCode('9660') : String.fromCharCode('9650')}
				</div>
			</div>
		);
	}
}

export default KanbanCard;