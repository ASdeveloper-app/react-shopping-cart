import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FcShipped } from 'react-icons/fc';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';



const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  let formattedPrice = formatPrice(product.price, product.currencyId);

  let productInstallment;

  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>o {product.installments} pagos de </span>
        <b>
          {product.currencyFormat}
          {formatPrice(installmentPrice, product.currencyId)}
        </b>
      </div>
    );
  }

  let productPromo;

  if (product.promoPrice < product.price) {
    const promoPrice = product.promoPrice;

    productPromo = (
      <div className="installment">
        <b>
          {product.currencyFormat}
          {formatPrice(promoPrice, product.currencyId)}
        </b>
      </div>
    );
  }

  const completedStyle = {
    color: "#d8d8d8",
    textDecorationLine: "line-through",
    textDecorationColor: "#e10098",
    fontSize: "1.5em",

  }
  
  return (
    <div
      className="shelf-item"
      onClick={() => addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper"><FcShipped  size="4vw"/></div>
      )}
      <Thumb
        classes="shelf-item__thumb"
        src={require(`../../../../static/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />
      <p className="shelf-item__title">{product.title}</p>
      <div className="shelf-item__price">
        <div className="val">
          <small>{product.currencyFormat}</small>
          <b style={product.promoPrice ? completedStyle : null} >{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
          <span style={product.promoPrice ? completedStyle : null} >{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
        </div>
        {productInstallment}
      </div>
      <p className="shelf-item__promo">{productPromo}</p>
      <div className="shelf-item__buy-btn">Agregar al Carrito</div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
