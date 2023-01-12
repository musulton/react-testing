import React from "react";

const UploadFile = () => {
    const [filename, setFilename] = React.useState(null);

    const handleUpload = (e) => {
        const filename = e?.target?.files[0]?.name;
        setFilename(filename)
    }

    return (
        <>
            <label htmlFor="upload-file">Upload File</label>

            <input
                type="file"
                id="upload-file"
                name="upload-file"
                onChange={handleUpload}
            />

            {filename && (
                <p>You have uploaded a file named {filename}</p>
            )}
        </>
    )
}

export default UploadFile;
