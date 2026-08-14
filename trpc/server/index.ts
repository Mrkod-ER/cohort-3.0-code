import { publicProcedure, router } from './trpc.js';
import { z } from 'zod';
import { createHTTPServer } from '@trpc/server/adapters/standalone';

const todoInputType = z.object({
    title: z.string(),
    description: z.string(), 
    done: z.boolean().optional()
});
 
export const appRouter = router({
    signUp: publicProcedure
        .input(z.object({
            email: z.string(),
            password: z.string()
        }))
        .mutation(async (opts) => {
            // context
            const username = opts.ctx.username; 

            let email = opts.input.email; 
            let password = opts.input.password; 
            
            //do validation
            //do db 

            let token = "123443423";
            return {
                token
            }
        }),
    createTodo: publicProcedure
        .input(z.object({
            title: z.string(),
            description: z.string()
        }))
        .mutation(async (opts) => {
            console.log(opts.ctx.username);
            return {
                id: "1"
            }
        })
});

const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    console.log(authHeader);
    // jwt verify
    return {
        username: "123"
    }
  }
});
 
server.listen(3000);
 
export type AppRouter = typeof appRouter;