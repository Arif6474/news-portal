import RootLayout from "@/components/Layouts/RootLayout";

function NewsDetail({ news }) {
  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.id}</p>
    </div>
  );
}

export default NewsDetail;

NewsDetail.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/news");
  const newses = await res.json();
  const paths = newses.map((news) => ({
    params: { newsId: news?.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  console.log("🚀 ~ file: [newsId].js:23 ~ getStaticProps ~ context:", context)
  const {params} = context;
  const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
  const data = await res.json();
  return {
    props: {
      news: data,
    },
  };
};
