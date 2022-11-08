import { useEffect } from "react"

const DynamicTitle = title => {
    useEffect( () => {
        document.title = `${title} - Lens King`;
    }, [title]);
};


export default DynamicTitle;