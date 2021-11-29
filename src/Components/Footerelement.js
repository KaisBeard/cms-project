import React from "react";

export default function(importedData) {
    const {helloIamSomeText} = importedData.fields
    return (
        <div>
            {helloIamSomeText}
        </div>

    )
}