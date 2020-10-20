import { useEffect, useState } from "react";
import { getData } from "../api";
import { Input, Button, Row, Col, Spin } from "antd";
import { PlusOutlined, HomeFilled } from "@ant-design/icons";
import { useRouter } from "next/router";
import { PureHeader } from "../components/adminHeader";
import EditCard from "../components/editCard";

const Dash = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData((err, result) => {
      if (err) throw err;
      if (!result.status) {
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]);
        });
        setLoading(false);
      } else {
        setData(result.articles);
        setLoading(false);
      }
    });
  }, []);

  return (
    <Spin spinning={loading} tip="Loading...">
      <div className="home-page">
        <PureHeader />
        <main className="container">
          <div className="search-box">
            <Input.Search
              style={{ width: 300 }}
              placeholder="Search for something..."
            />
            <Button
              onClick={() => router.push("/")}
              type="primary"
              icon={<HomeFilled />}
            >
              Home
            </Button>
               <Button
              onClick={() => router.push("/blog/create")}
              type="primary"
              icon={<PlusOutlined />}
            >
              New Article
            </Button>
          </div>
          <Row gutter={[30, 30]} style={{ marginTop: 30 }}>
            {data.map((article) => (
              <Col md={8} sm={12} xs={24} key={article.id}>
                <EditCard article={article} />
              </Col>
            ))}
          </Row>
        </main>
      </div>
    </Spin>
  );
};

export default Dash;
