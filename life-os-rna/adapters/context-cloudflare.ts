
export type Env = Record<string, unknown>

export type ExecutionMeta = {
  env: Env
  ctx: ExecutionContext
}

export function withContext(
  fn: (request: Request, meta: ExecutionMeta) => Promise<Response>
) {
  return (request: Request, env: Env, ctx: ExecutionContext) => {
    return fn(request, { env, ctx })
  }
}
