import React from 'react'
import Section from './Section'
import Data from './Data'

function Detail(props){
    return(
        <>
            {Data.map((item)=>{
                if (props.showDetail === item.id+"") {
                    return <Section item={item} key={item.id}/>
                }else return null;
            })}
        </>
    )
}
export default Detail;