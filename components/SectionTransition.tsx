export default function SectionTransition({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 60 }}>
      <h2 style={{ marginBottom: 20 }}>{title}</h2>
      {children}
    </section>
  );
}
