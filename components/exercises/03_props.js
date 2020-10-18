import { storiesOf } from "@storybook/react";
import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
//import CourseModulesWithProps from "../components/exercises/03_props";

const Demo = (props) => {
  const course = "MSc Computing - Modules table.";
  const modules = [
    {
      name: "Web Application Development",
      noLectures: 2,
      noPracticals: 2
    },
    {
      name: "English",
      noLectures: 2,
      noPracticals: 2
    }
  ];
  
      return (
        <div>
          <h1>{props.course}</h1>
          <table className="table table-bordered">
            <thead>
              <tr>
              <th>name</th>
              <th>no lectures</th>
              <th>no Practicals</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.modules[0].name}</td>
                <td>{props.modules[0].noLectures}</td>
                <td>{props.modules[0].noPracticals}</td>
              </tr>
              <tr>
                <td>{props.modules[1].name}</td>
                <td>{props.modules[1].noLectures}</td>
                <td>{props.modules[1].noPracticals}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    // storiesOf("Exercises", module)
    //   .add("03 - component with props", () => {
    //     const twoModules = [modules[0], modules[1]];
    //     return <CourseModulesWithProps modules={twoModules} course={name} />;
    //   })

 };export default Demo