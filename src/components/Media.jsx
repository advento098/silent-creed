import Gallery from "./Gallery";

export default function Media({ imageList }) {
  return (
    <section id="media" className="section fade-in">
      <h2>Media</h2>
      <Gallery imageList={imageList} />
    </section>
  );
}
