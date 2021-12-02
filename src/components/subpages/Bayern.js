import "./subpages.css";
import {useEffect, useState} from "react";

function Bayern() {
    const [importedData, setImportedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        client.getEntries()
        .then((res) => res.json)
        .then(setImportedData(json.idk)) //fix idk part
    }, [])


    return <div>Use this page for routing, Andrea ;-)</div>
};

export default Bayern;