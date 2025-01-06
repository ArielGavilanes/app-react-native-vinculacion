import { CartItemI } from '../interfaces/CartItemI';

export const buildCartMessage = (
  cart: CartItemI[],
  discountApplied: number,
  shippingCost: number,
  subtotal: number,
  totalCart: number,
) => {
  if (cart.length === 0) {
    return 'Tu carrito está vacío. ¡Agrega productos para comenzar!';
  }

  const message = cart
    .map(
      (item, index) =>
        `${index + 1}. ${item.product.name} (${item.quantity} x $${item.product.price.toFixed(
          2,
        )}) = $${item.totalProduct.toFixed(2)}`,
    )
    .join('\n');

  return `🛒 *Detalles de tu carrito:*\n\n${message}\n\n💵 *Subtotal: $${subtotal}*\n🔖 *Descuento aplicado: -$${discountApplied.toFixed(
    2,
  )}*\n🚚 *Costo de envío: $${shippingCost.toFixed(
    2,
  )}*\n\n💵 *Total: $${totalCart}*`;
};
