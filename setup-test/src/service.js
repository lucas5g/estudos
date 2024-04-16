export function parseUser(user){
  return {
    email: user.email,
    name: user.name.toUpperCase()
  }
}