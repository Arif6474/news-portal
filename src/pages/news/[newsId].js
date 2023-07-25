import RootLayout from "@/components/Layouts/RootLayout";
import { Col, Row } from "antd";
import Image from "next/image";
import {
    UserOutlined,
    CalendarOutlined,
    CommentOutlined,
    ProfileOutlined,
  } from "@ant-design/icons";
import { useGetSingleNewsQuery } from "@/redux/api/apiSlice";
import { useRouter } from "next/router";

function NewsDetail() {
    const router = useRouter()
    console.log("🚀 ~ file: [newsId].js:15 ~ NewsDetail ~ router:", router)
    const {data:news}= useGetSingleNewsQuery(router.query.newsId)
    return (
    <Row style={{ marginTop: "80px", alignItems: "center" }}>
    <Col md={6} lg={12}>
      <Image
        alt="example"
        src={news?.image_url}
        width={500}
        height={300}
        responsive
      />
    </Col>
    <Col md={6} lg={12} style={{ paddingLeft: "20px" }}>
      <h1 style={{ fontSize: "30px" }}>{news?.title}</h1>
      <span
        style={{
          color: "gray",
          display: "block",
          fontSize: "20px",
        }}
      >
        <UserOutlined /> {news?.author}
      </span>
      <div
        className="line"
        style={{
          height: "5px",
          margin: "20px 0",
          background: "#000",
          width: "100%",
        }}
      ></div>

      <p
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          color: "gray",
          margin: "10px 0px",
          fontSize: "20px",
        }}
      >
        <span>
          <CalendarOutlined /> {news?.release_date}
        </span>
        <span>
          <CommentOutlined /> {news?.comment_count} Comments
        </span>
        <span>
          <ProfileOutlined /> {news?.category}
        </span>
      </p>

      <p style={{ fontSize: "25px", fontWeight: "lighter" }}>
        {news?.description}
      </p>
    </Col>
  </Row>
    )
}

export default NewsDetail;

NewsDetail.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
// export const getStaticPaths = async () => {
//   const res = await fetch("http://localhost:5000/news");
//   const newses = await res.json();
//   const paths = newses.map((news) => ({
//     params: { newsId: news?.id },
//   }));
//   return { paths, fallback: false };
// };

// export const getServerSideProps = async (context) => {
//   console.log("🚀 ~ file: [newsId].js:23 ~ getStaticProps ~ context:", context)
//   const {params} = context;
//   const res = await fetch(`http://localhost:5000/news/${params?.newsId}`);
//   const data = await res.json();
//   return {
//     props: {
//       news: data,
//     },
//   };
// };
