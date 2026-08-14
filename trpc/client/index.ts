import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../server/index.js';
//     👆 **type-only** imports are stripped at build time
 
// Pass AppRouter as a type parameter. 👇 This lets `trpc` know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000',
      async headers() {
        return {
            authorization: "Bearer 123"
        }
      }
    }),  
  ],
});

async function main() {
    let response = await trpc.createTodo.mutate({
        title: "hello niggeros",
        description: "hello nigger"
    })

    console.log(response);
}

main();
