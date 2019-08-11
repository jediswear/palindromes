export const SET_FILE_CONTENT = 'SET_FILE_CONTENT'
export const SET_FILE_INFO = 'SET_FILE_INFO'

export const setFileContent = (content) => ({
  type: SET_FILE_CONTENT,
  content
})

export const setFileInfo = (name) => ({
  type: SET_FILE_INFO,
  name
})