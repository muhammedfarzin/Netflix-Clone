const { createContext, useState } = require("react");

export const urlIdContext=createContext(null)
export const showPreviewContext=createContext(null)

function Context({children}){
    const [urlId,setUrlId]=useState()
    const [showPreview,setShowPreview]=useState(Boolean)

    return(
        <urlIdContext.Provider value={{urlId,setUrlId}}>
            <showPreviewContext.Provider value={{showPreview,setShowPreview}}>
                {children}
            </showPreviewContext.Provider>
        </urlIdContext.Provider>
    )
}

export default Context