//example api request: replace with your API request here in folder API

export const getUser = () => {
  try {
    return Promise.resolve({
      status: 'success',
      data: [
        { id: 1, name: 'Anish' },
        { id: 2, name: 'Nija' },
        { id: 3, name: 'Vedhik' }
      ]
    })
  } catch (e) {
    return Promise.reject(e)
  }
}
