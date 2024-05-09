"use server"

import { CheckoutOrderParams } from "@/types"
import { redirect } from "next/navigation";
// import Stripe from 'stripe';
export const checkoutOrder = async (order: CheckoutOrderParams) => {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  // make sure the price first!
  // Stripe处理价格时，默认使用的是美分（cents）作为最小单位，这意味着价格会以分
  const price = order.isFree?0:Number(order.price)*100
  try {
    // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              currency:"usd",
              unit_amount:price,
              product_data:{
                name:order.eventTitle
              }
            },
            quantity: 1,
          },
        ],
        metadata:{
          eventId:order.eventId,
          buyerId:order.buyerId
        },
        mode: 'payment',
        success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
        cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/`,
      });
      // res.redirect(303, session.url);
      redirect(session.url!)
  } catch (error) {
      throw error
  }
}