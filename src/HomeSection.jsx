export default function HomeSection({ title, items }) {
  return (
    <section>
      <h2 className="label-box">{title}</h2>

      <div className="content-area">
        {items.map((item) => (
          <article className="item-card" key={item.id}>
            {item.title}
          </article>
        ))}
      </div>
    </section>
  );
}
