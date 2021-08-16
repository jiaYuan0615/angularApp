const protocol = 'http'
const host = 'localhost'
const port = '3000'
const prefix = '/api'

export const environment = {
  production: true,
  router: `${protocol}://${host}${port ? `:${port}` : ''}${prefix}`,
};
