export default function TodoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>
        <h1 className="font-bold text-lg">Todo App (CSR)</h1>
      </header>
      <section>{children}</section>
    </>
  )
}
