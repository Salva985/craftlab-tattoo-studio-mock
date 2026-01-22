import { useMemo, useState } from "react";
import { galleryItems, GALLERY_STYLES } from "../../data/gallery.js";
import { filterByStyle, sortByMostRecent } from "../../utils/gallery.js";
import { useLocale } from "../../i18n/I18nProvider.jsx";
import { useT } from "../../i18n/useT.js";
import { formatDateDMY } from "../../utils/date.js";
import Modal from "../ui/Modal.jsx";
import { buildWhatsAppLink } from "../../utils/whatsapp.js";

function getText(field, locale) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[locale] ?? field.en ?? "";
}

export default function GallerySection() {
  const t = useT();
  const { locale } = useLocale();
  const [style, setStyle] = useState("all");
  const [activeItem, setActiveItem] = useState(null);

  const items = useMemo(() => {
    const filtered = filterByStyle(galleryItems, style);
    return sortByMostRecent(filtered);
  }, [style]);

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{t("sections.gallery")}</h2>
          <p className="mt-2 max-w-xl text-white/60">{t("gallery.subtitle")}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setStyle("all")}
            className={[
              "rounded-full border px-3 py-1.5 text-sm",
              style === "all"
                ? "border-white bg-white text-black"
                : "border-white/15 text-white/70 hover:text-white",
            ].join(" ")}
          >
            {t("gallery.filters.all")}
          </button>

          {GALLERY_STYLES.map((key) => (
            <button
              key={key}
              type="button"
              onClick={() => setStyle(key)}
              className={[
                "rounded-full border px-3 py-1.5 text-sm",
                style === key
                  ? "border-white bg-white text-black"
                  : "border-white/15 text-white/70 hover:text-white",
              ].join(" ")}
            >
              {t(`gallery.styles.${key}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.id}
            onClick={() => setActiveItem(it)}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:border-white/30"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={it.image}
                alt={getText(it.title, locale) || t("gallery.itemAlt")}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold">
                  {getText(it.title, locale)}
                </h3>
                <time className="text-xs text-white/50" dateTime={it.date}>
                  {formatDateDMY(it.date)}
                </time>
              </div>

              <p className="mt-2 text-sm text-white/60">
                {getText(it.description, locale)}
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {it.styles.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70"
                  >
                    {t(`gallery.styles.${s}`)}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <Modal isOpen={!!activeItem} onClose={() => setActiveItem(null)}>
        {activeItem && (
          <div className="grid gap-6 p-6 md:grid-cols-2">
            <div className="aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src={activeItem.image}
                alt={getText(activeItem.title, locale)}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                {getText(activeItem.title, locale)}
              </h3>

              <p className="mt-3 text-white/70">
                {getText(activeItem.description, locale)}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {activeItem.styles.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                  >
                    {t(`gallery.styles.${s}`)}
                  </span>
                ))}
              </div>

              <a
                href={buildWhatsAppLink({
                  phoneE164: "+34622807032", // TODO: studio number
                  message: `Hi! I’m interested in this tattoo style: ${getText(
                    activeItem.title,
                    locale
                  )}.`,
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black hover:opacity-90"
              >
                {t("gallery.bookStyle")}
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
