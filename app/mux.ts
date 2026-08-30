/**
 * Public Mux playback IDs for the videos used in the site.
 *
 * Playback IDs are safe to expose in client-side code. Paste the IDs from the
 * Mux dashboard here; do not add Mux API tokens or signing keys to this file.
 */
const muxPlaybackIds = {
  about: "Jl7sQqsOrJ3MXYfoF2opeKuClbbetN85kHgrXg02zCqk", // cosmos_1964321209.mp4
  rhode: "42VNp5QEaf23EA5kDnxrl00LEQoYlYaO5XJE4Xnu02DK00", // images/rhodes.mp4
  honorable: "FyCwDY5bZQInoDHWykW6QuSxKZfmELTdDJo01UBW3xkY", // cosmos_855654600.mp4
  unna: "9OzwV6V00PZNOVDyBFdQ3ghaLBTN3i02ctf89oL7zmiyM", // images/Vessel.mp4
  vanta: "lajXYoNNOfqqiD32glNxk502KDC5T2sY7x87heZn6p008", // images/vanta.mp4
  dua: "C3RBH7clOHEWp82ToYXXOoKT6Rp2cP62kfBMmk02nG44", // images/dua.mp4
  eWay: "Bwzio9gVqGNO6c6s2egmYVQ9gEcCnzwqQGi02bGLuMT8", // cosmos_103760289.mp4
  porsce911: "PdPgy8OSMapOvsbmYxVStlPIFoCouwJxU502Ds02Q00gOg", // cosmos_1100859839.mp4
  nothingEar3: "vIj5TQAwfXCZQ8FOFysAflDJT02x1D1KOqyo01HhSfYHM", // cosmos_104589580.mp4
  kunye: "23LP1J7aN8HBokubJ200xvh8txfvPXbQEm3aT5xRJr02I", // images/cosmos_1067584247 (1).mp4
} as const;

export type MuxVideoKey = keyof typeof muxPlaybackIds;

export const getMuxPlaybackId = (key: MuxVideoKey) =>
  muxPlaybackIds[key] || undefined;

/** Lightweight still image generated from a public Mux video. */
export const getMuxThumbnailUrl = (playbackId: string) =>
  `https://image.mux.com/${playbackId}/thumbnail.webp?time=0&width=640`;
