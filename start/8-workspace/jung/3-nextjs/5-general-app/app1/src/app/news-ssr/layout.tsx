export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        <h1 className="font-bold text-lg">News APP (SSR)</h1>
      </header>
      <section>{children}</section>
    </>
  )
}
