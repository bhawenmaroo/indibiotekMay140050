/**
 * GALLERY IMAGES CONFIG
 *
 * To add new images to the gallery:
 * 1. Copy your image file into:  public/gallery/
 * 2. Add an entry below with the filename and an optional caption.
 *
 * Example:
 *   { src: "/gallery/my-photo.jpg", caption: "Lab experiment, March 2025" },
 */

export interface GalleryImage {
  src: string;
  caption?: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  // Add your images here, e.g.:
  // { src: "/gallery/lab-1.jpg", caption: "R&D Lab — 2024" },
  // { src: "/gallery/field-visit.jpg", caption: "Field visit, Bihar" },
];

export default GALLERY_IMAGES;
