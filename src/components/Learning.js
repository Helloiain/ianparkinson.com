import React from 'react'
import TreeView from './TreeView'

// This example data format is totally arbitrary. No data massaging is
// required and you use regular js in `render` to iterate through and
// construct your nodes.
const dataSource = [
  {
    type: 'Software Engineering',
    collapsed: false,
    subjects: [
      {category: 'Javascript', sub1: 'Values, Types, and Operators', sub2: 'Program Structure', sub3: 'Functions', sub4: 'Objects and Arrays', sub5: 'Higher-order Functions', collapsed: true},
      {category: 'Frameworks/Libraries', sub1: 'React (Hooks/Context)', sub2: 'Vue.js', sub3: 'jQuery', sub4: 'D3.js', sub5: 'Underscore/Lodash', collapsed: true},
      {category: 'Tools', sub1: 'Babel', sub2: 'Webpack/Rollup/Parcel', sub3: 'Git', sub4: 'npm', sub5: 'CI/CD'},
      {category: 'Backend', sub1: 'AWS', sub2: 'Serverless', sub3: 'Machine Learning', sub4: 'Firebase', sub5: 'Testing'},
      {category: 'Misc', sub1: 'React Native', sub2: 'Music (Tone.js)', sub3: 'Data-structures', sub4: 'Algorithms', sub5: 'Animation/Graphics (canvas/three.js/A-frame)'},
    ],
  },
];

export default class Learning extends React.Component {
  render() {
    return (
      <div>
        {dataSource.map((node, i) => {
          const type = node.type;
          const label = <span className="node">{type}</span>;
          return (
            <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={false}>
              {node.subjects.map(subCat => {
                const label2 = <span className="node">{subCat.category}</span>;
                return (
                  <TreeView nodeLabel={label2} key={subCat.category} defaultCollapsed={true}>
                    <div className="info"><input className="checkbox" type="checkbox" disabled />{subCat.sub1}</div>
                    <div className="info"><input className="checkbox" type="checkbox" disabled />{subCat.sub2}</div>
                    <div className="info"><input className="checkbox" type="checkbox" disabled />{subCat.sub3}</div>
                    <div className="info"><input className="checkbox" type="checkbox" disabled />{subCat.sub4}</div>
                    <div className="info"><input className="checkbox" type="checkbox" disabled />{subCat.sub5}</div>
                  </TreeView>
                );
              })}
            </TreeView>
          );
        })}
      </div>
    );
  }
}