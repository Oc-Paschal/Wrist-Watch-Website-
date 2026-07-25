// Seller's WhatsApp number in international format, no "+", no spaces or dashes.
// Example: Nigerian number 0813 294 5217 -> "2348132945217"
export const SELLER_WHATSAPP_NUMBER = "2349132945217";

export function buildOrderMessage(cart) {
  const lines = ["Hello Kronos! I'd like to order the following:", ""];

  cart.forEach((item, index) => {
    const lineTotal = item.price * item.quantity;
    lines.push(
      `${index + 1}. ${item.name} — Qty: ${item.quantity} — ₦${lineTotal.toLocaleString()}`
    );
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  lines.push("", `Total: ₦${total.toLocaleString()}`, "", "Please confirm availability. Thank you!");

  return lines.join("\n");
}

export function sendCartToWhatsApp(cart) {
  if (!cart || cart.length === 0) return;

  const message = buildOrderMessage(cart);
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${SELLER_WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}
