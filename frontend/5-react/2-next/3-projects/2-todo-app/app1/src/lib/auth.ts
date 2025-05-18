export interface AuthUser {
  id: number
  name: string
  username: string
  email: string
  role: string
}

// Mock user data
const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "leanne",
    email: "leanne@example.com",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
    role: "user",
    password: "leanne",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "ervin",
    email: "ervin@example.com",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
    role: "user",
    password: "ervin",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "clementine",
    email: "clementine@example.com",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
    role: "user",
    password: "clementine",
  },
]

// Mock token storage
const tokens = new Map<string, AuthUser>()

export async function authenticateUser(
  username: string,
  password: string
): Promise<AuthUser | null> {
  const user = users.find((u) => u.username === username)
  if (!user || user.password !== password) return null

  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    role: user.role,
  }
}

export async function createToken(user: AuthUser): Promise<string> {
  const token = Math.random().toString(36).substring(2)
  tokens.set(token, user)
  return token
}

export async function getUserFromToken(
  token: string
): Promise<AuthUser | null> {
  return tokens.get(token) || null
}

export async function deleteToken(token: string): Promise<void> {
  tokens.delete(token)
}
