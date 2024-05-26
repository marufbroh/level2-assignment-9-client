import { getSession } from "next-auth/react";

export { default } from "next-auth/middleware";

export const config = { matcher: ["/dashboard"] };

async function middleware(req) {
  const session = await getSession({ req });

  // Check if the user is logged in and has an admin role
  if (session && session.user && session.user.role === 'admin') {
    return NextResponse.next();
  } else {
    return NextResponse.redirect('/unauthorized'); // Redirect to an unauthorized page
  }
}

export default middleware;