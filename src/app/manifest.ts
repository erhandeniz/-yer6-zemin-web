import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YER6 Zemin Güçlendirme ve Jeoteknik Mühendislik",
    short_name: "YER6",
    description: "Premium geoteknik mühendislik ve zemin güçlendirme çözümleri.",
    start_url: "/",
    display: "standalone",
    background_color: "#070707",
    theme_color: "#d8a42d",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  };
}
