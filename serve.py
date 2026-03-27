#!/usr/bin/env python3
"""
Serve the Gigahive site from this folder with cache disabled so CSS/JS/HTML
changes show up on refresh without hard-reload tricks.

Usage (from this folder):
  python3 serve.py

Then open http://127.0.0.1:8765/
"""
import http.server
import os
import socketserver

PORT = 8765


class DevRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        super().end_headers()


if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    with socketserver.TCPServer(("127.0.0.1", PORT), DevRequestHandler) as httpd:
        print("Gigahive dev server (no cache)")
        print("  → http://127.0.0.1:{}/".format(PORT))
        print("  Stop with Ctrl+C")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")
