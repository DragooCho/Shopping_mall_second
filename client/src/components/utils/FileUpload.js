import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import Axios from "axios";
import Column from "antd/lib/table/Column";

function FileUpload() {
  const [Images, setImages] = useState([]);

  const dropHandler = (files) => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    Axios.post("/api/product/image", formData, config).then((response) => {
      if (response.data.success) {
        setImages([...Images, response.data.filePath]);
      } else {
        alert("파일을 저장하는데 실패했습니다.");
      }
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Dropzone onDrop={dropHandler}>
        {({ getRootProps, getInputProps }) => (
          <div
            style={{
              width: 300,
              height: 240,
              border: "3px solid lightgray",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
            }}
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Icon
              type="plus"
              style={{
                fontSize: "4rem",
                position: "relative",
                top: "30px",
              }}
            />
            <p style={{ position: "relative", top: "30px" }}>
              이미지를 여기에 끌어 가지고 오세요!!!
            </p>
          </div>
        )}
      </Dropzone>
      <div
        style={{
          display: "flex",
          width: "350px",
          height: "240px",
          overflowX: "scroll",
        }}
      >
        {Images.map((image, index) => (
          <div key={index}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:5000/${image}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FileUpload;
