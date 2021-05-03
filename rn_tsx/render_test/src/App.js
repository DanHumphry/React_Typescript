import React, {useState} from 'react';
import Section from './section';
import Data from './data';

function App() {
  const [tableDataId, setTableDataId] = useState(0);
  const [tableData, setTableData] = useState([]);
  

  return (
    <div className="App">
    <div>
      <Section tableDataId={tableDataId} setTableDataId={setTableDataId} tableData={tableData} setTableData={setTableData}></Section>
      <div>
        <div>
          <div>
            <Data tableData={tableData}/>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
