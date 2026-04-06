/**
 * SectionWrapper
 * A thin layout wrapper that standardises section padding and max-width.
 * Use the `style` prop to override / extend as needed per-section.
 *
 * @param {{
 *   id?: string,
 *   style?: React.CSSProperties,
 *   children: React.ReactNode,
 *   className?: string,
 * }} props
 */
function SectionWrapper({ id, style = {}, children, className = "" }) {
  return (
    <section id={id} style={style} className={className}>
      {children}
    </section>
  );
}

export default SectionWrapper;
