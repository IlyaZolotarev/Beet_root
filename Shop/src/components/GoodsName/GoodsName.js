import React from 'react';
import './GoodsName.scss';
import types from 'prop-types';

const GoodsName = ({ goodsName }) => {
    return (<p className="goods-name">{goodsName}</p>);
}

GoodsName.propTypes = {
    goodsName: types.string.isRequired,
}

export default GoodsName;
