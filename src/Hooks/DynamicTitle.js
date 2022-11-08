import { useEffect } from "react"

const DynamicTitle = title => {
    useEffect( () => {
        document.title = `${document.title} - Lens King`;
    }, [title]);
};


export default DynamicTitle;