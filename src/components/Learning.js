import React from 'react'
import TreeView from './TreeView'

// This example data format is totally arbitrary. No data massaging is
// required and you use regular js in `render` to iterate through and
// construct your nodes.
const dataSource = [
  {
    type: 'Software Engineering',
    collapsed: true,
    people: [
      {category: 'Javascript', key1: 'Values, Types, and Operators', key2: 'Progran Structure', key3: 'Functions', key4: 'Objects and Arrays', key5: 'Higher-order Functions', collapsed: true},
      {category: 'Frameworks/Libraries', key1: 'React', key2: 'Vue.js', key3: 'jQuery', collapsed: true},
      {category: 'Data Structures', collapsed: true},
      {category: 'Algorithms', collapsed: true}
    ],
  },
];

// For the sake of simplicity, we're gonna use `defaultCollapsed`. Usually, a
// [controlled component](http://facebook.github.io/react/docs/forms.html#controlled-components)
// is preferred.
export default class Learning extends React.Component {
  render() {
    return (
      <div>
        {dataSource.map((node, i) => {
          const type = node.type;
          const label = <span className="node">{type}</span>;
          return (
            <TreeView key={type + '|' + i} nodeLabel={label} defaultCollapsed={true}>
              {node.people.map(subCat => {
                const label2 = <span className="node">{subCat.category}</span>;
                return (
                  <TreeView nodeLabel={label2} key={subCat.category} defaultCollapsed={true}>
                    <div className="info">{subCat.key1}</div>
                    <div className="info">{subCat.key2}</div>
                    <div className="info">{subCat.key3}</div>
                    <div className="info">{subCat.key4}</div>
                    <div className="info">{subCat.key5}</div>
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