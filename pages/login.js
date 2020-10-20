import { Card, Input, Row, Col, Button, message } from "antd";

import { login } from "../api";
import { useEffect, useState } from "react";

import { useRouter } from 'next/router'

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handlSubmit = () => {
    setIsLoading(true);
    login({ email, password }, (err, result) => {
      if (err) throw err;
      if (!result.status) { 
        Object.keys(result.errMsg).forEach((key) => {
          message.error(result.errMsg[key]); 
        });
        setIsLoading(false);
      } else {
        localStorage.setItem("blog_token", result.token);
        localStorage.setItem("blog_user", JSON.stringify(result.user));
        router.replace(`./dash`);
        setIsLoading(false);
      }
    });
  };
  useEffect(()=>{
    if (localStorage.getItem("blog_token")&&localStorage.getItem("blog_user")){
        router.replace(`./dash`)
    }
  },[])
 

  return (
    <div className="login-page">
      <Card className="logC" style={{ width: 400 }}>
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </Col>
          <Col span={24}>
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </Col>
          <Col span={24}>
            <Button
              loading={isLoading}
              onClick={handlSubmit}
              type="primary"
              block
            >
              Login
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
  
};

export default Login;