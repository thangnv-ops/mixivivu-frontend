interface EndPointObject {
  baseUrl: string
  child: {
    [x: string]: string
  }
}

export const internalUserEndpoints: EndPointObject = {
  baseUrl: '/api/internal-user',
  child: {
    authLogin: '/auth/login',
    getList: '/get-list',
    add: '/add-new',
    update: '/update-user',
    delete: '/delete-user',
  },
}

export const getEndpoint = (
  endpointObject: EndPointObject,
  target: keyof typeof endpointObject.child
) => {
  return `${endpointObject.baseUrl}${endpointObject.child[target]}`.replaceAll('//', '/')
}
