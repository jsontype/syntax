export default function MovieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        <h1 className="font-bold text-lg">Counter App</h1>
      </header>
      <section>{children}</section>
    </>
  )
}
