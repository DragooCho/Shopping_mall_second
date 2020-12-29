import React from "react";
import { Button, Descriptions } from "antd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../_actions/user_actions";

function ProductInfo(props) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    // 필요한 정보를 Cart 필드에다가 넣어 준다.
    dispatch(addToCart(props.detail._id));
  };

  return (
    <div>
      <Descriptions title="생성 정보" bordered>
        <Descriptions.Item label="가격">
          {props.detail.price} $(달러)
        </Descriptions.Item>
        <Descriptions.Item label="판매 수량">
          {props.detail.sold}
        </Descriptions.Item>
        <Descriptions.Item label="조회 수">
          {props.detail.view}
        </Descriptions.Item>
        <Descriptions.Item label="상품 설명">
          {props.detail.description}
        </Descriptions.Item>
      </Descriptions>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {" "}
        <Button size="large" shape="round" type="danger" onClick={clickHandler}>
          장바구니에 추가
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
