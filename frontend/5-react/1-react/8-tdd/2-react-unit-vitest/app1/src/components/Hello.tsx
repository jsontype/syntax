type HelloProps = {
  name: string
}

export default function Hello({ name }: HelloProps) {
  return <h1>Hello, {name}!</h1>
}
