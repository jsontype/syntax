export default function MovieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        <h1 className="font-bold text-lg"> - Movie App Detail</h1>
      </header>
      <section>{children}</section>
    </>
  )
}
