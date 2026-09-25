export default function ImagePlaceholder({ title, heightClass = "image-tall", tone = "dark" }) {
  return (
    <div className={`image-placeholder ${heightClass} ${tone}`}>
      <span>{title}</span>
    </div>
  );
}
