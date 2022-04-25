import React from 'react';

function MetrixListItems(props) {
  return (
    <table className="table table-striped">
      <div className="row">
        <div className="col">{props.strategy}</div>
        <div className="col">{props.metrixId}</div>
        <div className="col">{props.metrixName}</div>
        <div className="col">{props.description}</div>
        <div className="col"><button type="button" className="btn btn-secondary btn-sm">Update</button><button type="button" className="btn btn-danger btn-sm">Delete</button></div>
      </div>
    </table>
  );
}

export default MetrixListItems;