import {useRouteError} from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    return(
        <>
        <h2 className="error">Page Not Found!</h2>
        </>
    )
}

export default Error;