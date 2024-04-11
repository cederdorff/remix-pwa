import type { WebAppManifest } from "@remix-pwa/dev";
import { json } from "@remix-run/node";
import logo from "../assets/logo.png";

export const loader = () => {
  return json(
    <WebAppManifest>{
      short_name: "RemixPWA",
      name: "Remix PWA",
      start_url: "/",
      display: "standalone",
      theme_color: "#acc6c9",
      background_color: "#264c59",
      icons: [
        {
          src: logo,
          sizes: "512x512",
          type: "image/png"
        }
      ]
    },
    {
      headers: {
        "Cache-Control": "public, max-age=600",
        "Content-Type": "application/manifest+json"
      }
    }
  );
};
