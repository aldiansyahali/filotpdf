import { db } from "@/lib/db"
import { messages, chats } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

export const runtime = "edge"

export const POST = async (req: Request) => {
  const { chatId } = await req.json()

  // Hapus pesan terkait dengan chatId
  await db.delete(messages).where(eq(messages.chatId, chatId))
  
  // Hapus chat itu sendiri
  await db.delete(chats).where(eq(chats.id, chatId))

  return NextResponse.json({ success: true })
}