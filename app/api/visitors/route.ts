import { visitorState, broadcast } from "@/lib/visitors";

const encoder = new TextEncoder();

export async function GET() {
  let ctrl: ReadableStreamDefaultController;

  const stream = new ReadableStream({
    start(controller) {
      ctrl = controller;
      visitorState.controllers.add(ctrl);
      visitorState.count++;
      // Send current count to new visitor
      ctrl.enqueue(encoder.encode(`data: ${visitorState.count}\n\n`));
      // Broadcast updated count to everyone else
      broadcast();
    },
    cancel() {
      visitorState.controllers.delete(ctrl);
      visitorState.count = Math.max(0, visitorState.count - 1);
      broadcast();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
