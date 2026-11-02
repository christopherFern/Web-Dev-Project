// export default function HomeSection({ title, items }) {
//   return (
//     <section>
//       <h2 className="label-box">{title}</h2>
//
//       <div className="content-area">
//         {items.map((item) => (
//           <article className="item-card" key={item.id}>
//             {item.title}
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

//
// export default function HomeSection({
//                                         title,
//                                         items,
//                                         selectedItemId,
//                                         onSelectItem
//                                     }) {
//     return (
//         <section>
//             <h2 className="label-box">{title}</h2>
//
//             <div className="content-area">
//                 {items.map((item) => {
//                     const isSelected = selectedItemId === item.id;
//                     return (
//                         <article
//                             className={`item-card ${isSelected ? "item-card-active" : ""}`}
//                             key={item.id}
//                             onClick={() => onSelectItem && onSelectItem(item)}
//                             onKeyDown={(e) => {
//                                 if (e.key === "Enter" || e.key === " ") {
//                                     e.preventDefault();
//                                     onSelectItem && onSelectItem(item);
//                                 }
//                             }}
//                             tabIndex={0}
//                             role="button"
//                             aria-pressed={isSelected}
//                         >
//                             <div className="item-card-content">
//                                 <span>{item.title}</span>
//                                 {item.genre && (
//                                     <small className="item-card-meta">{item.genre}</small>
//                                 )}
//                                 {item.inShelf && (
//                                     <span className="shelf-badge">★ On My Shelf</span>
//                                 )}
//                             </div>
//                         </article>
//                     );
//                 })}
//             </div>
//         </section>
//     );
// }

export default function HomeSection({ title, items, selectedItemId, onSelectItem }) {
    return (
        <section>
            <h2 className="label-box">{title}</h2>

            <div className="content-area">
                {items.map((item) => {
                    const isSelected = selectedItemId === item.id;
                    const isSelectable = Boolean(item.genre);

                    return (
                        <article
                            className={`item-card ${isSelected ? "item-card-active" : ""}`}
                            key={item.id}
                            onClick={() => isSelectable && onSelectItem && onSelectItem(item)}
                            onKeyDown={(e) => {
                                if (isSelectable && (e.key === "Enter" || e.key === " ")) {
                                    e.preventDefault();
                                    onSelectItem && onSelectItem(item);
                                }
                            }}
                            tabIndex={isSelectable ? 0 : undefined}
                            role={isSelectable ? "button" : undefined}
                            aria-pressed={isSelectable ? isSelected : undefined}
                        >
                            <div className="item-card-content">
                                <span>{item.title}</span>
                                {item.genre && (
                                    <small className="item-card-meta">{item.genre}</small>
                                )}
                                {item.inShelf && (
                                    <span className="shelf-badge">★ On My Shelf</span>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}