import Layout from '@/component/layout';
import { useRouter } from 'next/router';
import styles from '../../styles/bookId.module.css'

export async function getServerSideProps(context) {
  const { bookId } = context.query;
  const allJsonData = await fetch('https://example-data.draftbit.com/books?id='+bookId).then(r => r.json());
  return {
    props: {
      allJsonData,
    },
  };
}

export default function BookName({ allJsonData }) {
  const router = useRouter();
  const { bookId } = router.query;

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div>
        
      </div>
    </Layout>
  );
}