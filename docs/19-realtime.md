# 19 — Realtime

Supabase Realtime channels for live features.

## Channels

| Feature | Channel pattern |
|---|---|
| Online presence | `presence:online` |
| Typing indicators | `typing:{conversation_id}` |
| New messages | `messages:{conversation_id}` |
| Notifications | `notifications:{user_id}` |

## Presence

- Track online/offline/away via Supabase Presence
- Update `last_online` on disconnect
- Show green dot on profile cards

## Typing indicators

- Broadcast typing start/stop in conversation channel
- Auto-expire after 3s of inactivity

## Read receipts

- Update `read_at` when conversation opened
- Broadcast read event to sender

## Components

- `OnlineDot`, `TypingIndicator`, `usePresence`, `useRealtimeMessages`
