import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const SpinnerAnother = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 34,
            }}
            spin
          />
        }
      />
    </div>
  );
};

export default SpinnerAnother;
