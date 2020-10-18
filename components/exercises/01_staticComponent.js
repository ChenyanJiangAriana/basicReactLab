import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = () => {
  return (
    <div>
      <h1>HDip Computer Science - Modules Table</h1>
      <table className="table table-bordered">
       <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
       <tbody>
         <tr>
            <td>Web Application Development</td>
            <td>2</td>
            <td>2</td>
        </tr>
        <tr>
            <td>English</td>
            <td>2</td>
            <td>2</td>
        </tr>
       </tbody>
      </table>

    </div>
  );
};

export default Demo;
