import React from 'react';

function Loading(Component) {
        return function withloadingcompponent ({isloading,data}){
            if (isloading) {
                return(
                <p>Loading.....!!</p>
                )
            } else {
                console.log("lascja");
                return(
                    <Component data={data}/>
                )
            }
        }
}

export default Loading;