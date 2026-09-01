/**
 * Public Mux playback IDs for the videos used in the site.
 */

const muxPlaybackIds = {
  about: "Jl7sQqsOrJ3MXYfoF2opeKuClbbetN85kHgrXg02zCqk",
  rhode: "42VNp5QEaf23EA5kDnxrl00LEQoYlYaO5XJE4Xnu02DK00",
  honorable: "FyCwDY5bZQInoDHWykW6QuSxKZfmELTdDJo01UBW3xkY",
  unna: "9OzwV6V00PZNOVDyBFdQ3ghaLBTN3i02ctf89oL7zmiyM",
  vanta: "lajXYoNNOfqqiD32glNxk502KDC5T2sY7x87heZn6p008",
  dua: "C3RBH7clOHEWp82ToYXXOoKT6Rp2cP62kfBMmk02nG44",
  
  ccus: "JWybvTcR48ft63O7tMFhGHxoUevBR8LlBYceyKFHXi8",
  porsce911: "PdPgy8OSMapOvsbmYxVStlPIFoCouwJxU502Ds02Q00gOg",
  nothingEar3: "vIj5TQAwfXCZQ8FOFysAflDJT02x1D1KOqyo01HhSfYHM",
  kunye: "TMLh9xSCu8ITUOwU7j00FddWpK1WkZUDpbYznZW8JnFg",
} as const;

export type MuxVideoKey = keyof typeof muxPlaybackIds;

export const getMuxPlaybackId = (key: MuxVideoKey) =>
  muxPlaybackIds[key] || undefined;

/** Lightweight still image generated from a public Mux video. */
export const getMuxThumbnailUrl = (playbackId: string) =>
  `https://image.mux.com/${playbackId}/thumbnail.webp?time=0&width=640`;
