// Shared in-memory state — works reliably with single PM2 fork process
export const visitorState = {
  count: 0,
  controllers: new Set<ReadableStreamDefaultController>(),
};

const encoder = new TextEncoder();

export function broadcast() {
  const msg = encoder.encode(`data: ${visitorState.count}\n\n`);
  for (const ctrl of visitorState.controllers) {
    try {
      ctrl.enqueue(msg);
    } catch {
      visitorState.controllers.delete(ctrl);
    }
  }
}
