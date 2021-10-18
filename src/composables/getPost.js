// import { resolve } from 'vue'
import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        // connects to collection in database
        let res = await projectFirestore.collection('posts').doc(id).get()
        // return error
        if(!res.exists){
          throw Error('This post does not exist')
        }
         // return post
        post.value = { ...res.data(), id: res.id}
        console.log(post.value)
      }
      catch(err) {
        error.value = err.message
        console.log(err.value)
      }
    }

    return { post, error, load }
}

export default getPost