import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    // SITE ADI SINYALI: Google, arama sonucundaki site adını belirlerken
    // manifest'teki name alanını da okur. Buranın diğer sinyallerle (WebSite
    // şeması, og:site_name, application-name) AYNI marka adını söylemesi şart;
    // farklı söylerse Google karar veremez ve alan adına (yer6zemin.com.tr) düşer.
    name: "YER6 Geoteknik",
    short_name: "YER6",
    description:
      "YER6 Geoteknik — jet grout, DSM, fore kazık, ankraj ve iksa sistemlerinde zemin iyileştirme ve güçlendirme çözümleri.",
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
