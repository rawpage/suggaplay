# 13 — Payments (Stripe)

## Integration

- Stripe Checkout for subscription signup
- Stripe Customer Portal for manage/cancel
- Webhooks for lifecycle events

## Webhook events

- `checkout.session.completed` — activate subscription
- `invoice.paid` — renew period
- `invoice.payment_failed` — mark past_due, notify user
- `customer.subscription.deleted` — cancel access

## Flows

### New subscription (men)
1. User clicks "Subscribe" on pricing/waitlist
2. Server creates Stripe Checkout session
3. Redirect to Stripe
4. Webhook activates subscription in database
5. Redirect to `/discover`

### Founding member cap
- Track count of founding subscriptions
- When 500 reached, only show standard plan

## Pages

- `/account/subscription` — manage plan
- `/pricing` — public pricing (can be section on landing page)

## Security

- Verify webhook signatures
- Never trust client-side payment state
- Store `stripe_customer_id` on users table

## Environment variables

```
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_FOUNDING_PRICE_ID=
STRIPE_STANDARD_PRICE_ID=
```
