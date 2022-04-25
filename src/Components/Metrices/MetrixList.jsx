import React, { useState } from 'react';
import MetrixListItems from './MetrixListItems';
import StrategyListNames from './../Strategies/StrategyListNames';

function MetrixList() {

  const metrixList = [
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

  const strategyList = [
    {
      id: 1,
      strategyName: "Increase Sales"
    },
    {
      id: 2,
      strategyName: "Decrease Expences"
    }
  ]

  const metrixListComponent = () => {
    return (
      metrixList.map(aMetrix => {
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

  const strategyListComponent = () => {
    return (
      strategyList.map(aName => {
        return (
          <StrategyListNames
            key={aName.id}
            name={aName.strategyName}
          />
        )
      })
    );
  }

  return (
    <div>
      <h1>Matrix List</h1>
      <hr />
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" className="btn btn-primary me-md-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Metrix</button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add New Metrix</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">Strategy:</label>
                    <select className="form-select" aria-label="Default select example">
                      {strategyList.map(aName =>
                        <option value={aName.id}>{aName.strategyName}</option>
                      )};
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">Name:</label>
                    <input type="text" className="form-control" id="recipient-name" />
                  </div>
                  <div className="mb-3">
                    <label for="message-text" className="col-form-label">Description:</label>
                    <textarea className="form-control" id="message-text"></textarea>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='container'>
        <div className="row align-items-center">
          <div className="col">Strategy</div>
          <div className="col">Metrix Id</div>
          <div className="col">Metrix Name</div>
          <div className="col">Description</div>
          <div className="col">Action</div>
        </div>
      </div>
      <ul>
        {metrixListComponent()}
      </ul>
    </div>
  );
}

export default MetrixList;