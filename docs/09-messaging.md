# 09 — Messaging

## Routes

- `/inbox` — conversation list
- `/conversation/[id]` — chat thread

## Features

- Realtime chat via Supabase Realtime
- Conversation list sorted by `last_message_at`
- Typing indicators
- Read receipts (`read_at` on messages)
- Unread counter (badge on nav)
- Image messages (Supabase Storage)
- Emoji support
- Online presence in header
- Push notifications (Phase 2 — OneSignal)

## UX

Messenger-style: large profile image in header, chat bubbles, feels like messaging not "using a dating site."

## Subscription gate

Men without active subscription see upgrade prompt instead of sending messages.

## Components

- `ConversationList`, `MessageBubble`, `TypingIndicator`, `OnlineBadge`, `UnreadCounter`, `ChatInput`

## Tables

`conversations`, `messages` — see `docs/03-database.md`
