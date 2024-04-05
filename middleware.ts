import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
 

// const protectedRoutes = createRouteMatcher([
//     '/',
//     '/upcoming',
//     '/previous',
//     '/recordings',
//     '/personal-room',
//     '/meeting(.*)'
// ])

const isIgnoredRoute = createRouteMatcher(
    ['/sign-in', '/sign-up']
)

export default clerkMiddleware((auth, req) => {
    if(!isIgnoredRoute(req)) auth().protect();
})
 
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)'], // Run middleware on API routes
};