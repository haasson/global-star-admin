import { ref } from 'vue'
import { deleteFromDatabase, getFromDatabase, putToDatabase, setToDatabase } from '../plugins/firebase'

const data = ref(null)

const useDatabase = (url) => {
  const get = async () => {
    const res = await getFromDatabase(url)
    data.value = res
  }

  const set = async (data) => {
    await setToDatabase(url, data)
  }

  const put = async (data) => {
    await putToDatabase(data)
  }

  const del = async () => {
    await deleteFromDatabase(url)
  }


  return {data, get, set, put, del}
}

export default useDatabase
