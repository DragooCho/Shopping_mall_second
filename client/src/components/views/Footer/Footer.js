import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";

function Footer() {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
        fontFamily: "Noto Sans KR",
      }}
    >
      <p>
        {" "}
        즐거운 쇼핑 <ShoppingCartOutlined />
      </p>
    </div>
  );
}

export default Footer;
