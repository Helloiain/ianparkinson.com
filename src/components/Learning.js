import React from 'react'
import TreeView from './TreeView'

// This example data format is totally arbitrary. No data massaging is
// required and you use regular js in `render` to iterate through and
// construct your nodes.
const dataSource = [
  {
    type: 'Software Engineering',
    collapsed: true,
    subjects: [
      {category: 'Javascript', sub1: 'Values, Types, and Operators', sub2: 'Program Structure', sub3: 'Functions', sub4: 'Objects and Arrays', key5: 'Higher-order Functions', collapsed: true},
      {category: 'Frameworks/Libraries', sub1: 'React', sub2: 'Vue.js', sub3: 'jQuery', sub4: 'anime.js', collapsed: true},
      {category: 'Data Structures', collapsed: true},
      {category: 'Algorithms', collapsed: true}
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
            <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={true}>
              {node.subjects.map(subCat => {
                const label2 = <span className="node">{subCat.category}</span>;
                return (
                  <TreeView nodeLabel={label2} key={subCat.category} defaultCollapsed={true}>
                    <div className="info">{subCat.sub1}</div>
                    <div className="info">{subCat.sub2}</div>
                    <div className="info">{subCat.sub3}</div>
                    <div className="info">{subCat.sub4}</div>
                    <div className="info">{subCat.sub5}</div>
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