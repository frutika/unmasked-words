import http from "node:http";

const PB_HOST = process.env.PB_HOST ?? "127.0.0.1";
const PB_PORT = parseInt(process.env.PB_PORT ?? "8090", 10);

export function pbGet(path: string, token?: string): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const headers: Record<string, string> = token ? { Authorization: token } : {};
    const req = http.get({ host: PB_HOST, port: PB_PORT, path, headers }, (res) => {
      let body = "";
      res.on("data", (chunk: string) => { body += chunk; });
      res.on("end", () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode && res.statusCode >= 400) {
            reject(Object.assign(new Error(parsed.message ?? "PB error"), { status: res.statusCode }));
          } else {
            resolve(parsed);
          }
        } catch { reject(new Error("parse error")); }
      });
    });
    req.on("error", reject);
    req.setTimeout(8000, () => { req.destroy(); reject(new Error("timeout")); });
  });
}
