import React, { Component } from 'react';
import MetrixListItems from './MetrixListItems';
import StrategyListNames from './../Strategies/StrategyListNames';

class MetrixList extends Component{

  constructor(props) {
    super(props);

    this.state = {
        dir:[],
        item:{
            name:"",
            description:""
        },
        isEditing:false,
        temp_index:null
    }

    this.handleChange = this.handleChange.bind(this)
    this.add = this.add.bind(this)
    // this.delete = this.delete.bind(this)
    // this.edit = this.edit.bind(this)
    // this.update = this.update.bind(this)
    // this.view = this.view.bind(this)
}

handleChange(event){
  const name = event.target.name;
  const value = event.target.value;
  let item = this.state.item;

  item[name] = value;

  this.setState({item:item})
}

add(e){
  e.preventDefault()
  let dir = this.state.dir;
  dir.push(this.state.item)
  this.setState({dir:dir, item:{name:"", description:""}})
  console.log(this.state.dir)
}

  metrixList = [
    {
      id: 1,
      strategy: "Increase Sales",
      metrixId: "s1m1",
      metrixName: "Introduce to new customer",
      description: "xxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      id: 2,
      strategy: "Increase Sales",
      metrixId: "s1m2",
      metrixName: "Upsale existing customer",
      description: "xxxxxxxxxxxxxxxxxxxxxx"
    },
    {
      id: 3,
      strategy: "Decrease Expences",
      metrixId: "s2m3",
      metrixName: "metrix3",
      description: "xxxxxxxxxxxxxxxxxxxxxx"
    },
  ]

  strategyList = [
    {
      id: 1,
      strategyName: "Increase Sales"
    },
    {
      id: 2,
      strategyName: "Decrease Expences"
    }
  ]

  handleSubmit = (e) => {
    
  }

  metrixListComponent = () => {
    return (
      this.metrixList.map(aMetrix => {
        return (
          <MetrixListItems
            key={aMetrix.id}
            strategy={aMetrix.strategy}
            metrixId={aMetrix.metrixId}
            metrixName={aMetrix.metrixName}
            description={aMetrix.description}
          />
        )
      })
    );
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

  render(){
  return (
    <div>
      <h1>Matrix List</h1>
      <hr />
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-primary me-md-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Metrix</button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add New Metrix</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form method="POST" onSubmit={this.state.isEditing ? this.update : this.add}>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">Strategy:</label>
                    <select className="form-select" aria-label="Default select example">
                      {this.strategyList.map(aName =>
                        <option value={aName.id}>{aName.strategyName}</option>
                      )};
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">Name:</label>
                    <input type="text" name='name' className="form-control" value={this.state.item.name} onChange={this.handleChange} />
                  </div>
                  <div className="mb-3">
                    <label for="message-text" className="col-form-label">Description:</label>
                    <textarea className="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <table className="table table-striped">
        <div className="row align-items-center">
          <div className="col">Strategy</div>
          <div className="col">Metrix Id</div>
          <div className="col">Metrix Name</div>
          <div className="col">Description</div>
          <div className="col">Action</div>
        </div>
      </table>
      <ul>
        {this.metrixListComponent()}
        {this.state.dir}
      </ul>
    </div>
  );
}
}

export default MetrixList;