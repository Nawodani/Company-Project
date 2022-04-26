import React from 'react';

function MetrixListItems(props) {
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <td className="col-2">{props.strategy}</td>
          <td className="col-2">{props.metrixStage}</td>
          <td className="col-2">{props.metrixName}</td>
          <td className="col-4">{props.description}</td>
          <td className="col-2"><button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button><button type="button" className="btn btn-danger btn-sm">Delete</button></td>
        </tr>
      </tbody>
    </table>
  );
}

export default MetrixListItems;