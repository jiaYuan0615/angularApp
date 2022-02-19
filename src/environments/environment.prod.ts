const protocol = 'https'
const host = 'localhost'
const port = '5000'
const prefix = '/api'


export const environment = {
  production: true,
  router: `${protocol}://${host}${port ? `:${port}` : ''}${prefix}/`,
};
