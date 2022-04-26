import React from 'react';
import KanbanColumn from './KanbanColumn';
import StrategyListNames from '../Strategies/StrategyListNames';

class KanbanBoard extends React.Component {
	constructor(props) {
		super(props);
		this.state = ({
			isLoading: true,
			metrics: [],
			draggedOverCol: 0,
		});
		this.handleOnDragEnter = this.handleOnDragEnter.bind(this);
		this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
		this.columns = [
			{ name: 'Q1-2022', stage: 1 },
			{ name: 'Q2-2022', stage: 2 },
			{ name: 'Q3-2022', stage: 3 },
			{ name: 'Q4-2022', stage: 4 }
		];
	}

	componentDidMount() {
		this.setState({ metrics: metrixList, isLoading: false });
	}

	handleOnDragEnter(e, stageValue) {
		this.setState({ draggedOverCol: stageValue });
	}

	handleOnDragEnd(e, metrix) {
		const updatedmetrics = this.state.metrics.slice(0);
		updatedmetrics.find((metrixObject) => { return metrixObject.name === metrix.name; }).metrixStage = this.state.draggedOverCol;
		this.setState({ metrics: updatedmetrics });
	}

	strategyListComponent = () => {
		return (
			this.strategyList.map(aName => {
				return (
					<StrategyListNames
						key={aName.id}
						name={aName.strategyName}
					/>
				)
			})
		);
	}

	render() {
		if (this.state.isLoading) {
			return (<h3>Loading...</h3>);
		}

		return (
			<div>
				<div className="mb-3">
					<label htmlFor="recipient-name" className="col-form-label">Select Strategy:</label>
					<select className="form-select" aria-label="Default select example">
						{strategyList.map(aName =>
							<option value={aName.id} key={aName.id}>{aName.strategyName}</option>
						)};
					</select>
				</div>
				{this.columns.map((column) => {
					return (
						<KanbanColumn
							name={column.name}
							stage={column.stage}
							metrics={this.state.metrics.filter((metrix) => { return parseInt(metrix.metrixStage, 10) === column.stage; })}
							onDragEnter={this.handleOnDragEnter}
							onDragEnd={this.handleOnDragEnd}
							key={column.stage}
						/>
					);
				})}
			</div>
		);
	}
}


let metrixList = [
	{
		name: 'Metrix 1',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		metrixStage: 1,
		strategy: "Decrease Expences"
	},
	{
		name: 'Metrix 2',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		metrixStage: 1,
		strategy: "Decrease Expences"
	},
	{
		name: 'Metrix 3',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		metrixStage: 1,
		strategy: "Increase Sales"
	},
	{
		name: 'Metrix 4',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		metrixStage: 2,
		strategy: "Decrease Expences"
	},
	{
		name: 'Metrix 5',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		metrixStage: 3,
		strategy: "Increase Sales"
	},
	{
		name: 'Metrix 6',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		metrixStage: 3,
		strategy: "Decrease Expences"
	},
	{
		name: 'Metrix 7',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere dui vel urna egestas rutrum. ',
		metrixStage: 4,
		strategy: "Increase Sales"
	},
];

let strategyList = [
	{
		id: 1,
		strategyName: "Increase Sales"
	},
	{
		id: 2,
		strategyName: "Decrease Expences"
	}
]

export default KanbanBoard;