import Image from 'next/image'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout title="page not found">
        <div className='flex flex-col items-center mt-20'>
            <Image src='' />
            <h1>404</h1>
            <h2>404</h2>

        </div>
    </Layout>
  )
}

export default NotFoundPage