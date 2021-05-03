import React from 'react';

const Data = ({tableData}) =>{
console.log("안보여야해")
    return (
        <div>
        {
          tableData.map((item, index)=>{
            return(
              <div key={index}>
                <p>{item[0]}</p>
                <p>{item[1]}</p>
                <p>{item[2]}</p>
              </div>
            )
          })
        }
      </div>
    );
}
export default React.memo(Data);