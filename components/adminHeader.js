import { Typography, Avatar, Popover, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {useRouter} from 'next/router'
import Link from "next/link";

const { Title, Text } = Typography;

export const PureHeader = () =>{
  const router = useRouter()

    return (
        <header>
        <div className="container hed">
          <div className="content">
            <Link href={`/dash`}>
            <a>

            <Title className="dash" style={{ color: "#fff" }} level={3}>
              Dashboard
            </Title>
            </a>
            </Link>
            <div className="user-account">
              <Text style={{ color: "#fff", marginRight: 8 }}>Hasan</Text>
              <Popover
                content={
                  <div>
                    <Button type="text">
                    Change password
                    </Button>
                    <br />
                    <Button type="link" onClick={()=>{
                      localStorage.removeItem('blog_token')
                      localStorage.removeItem('blog_user')
                      router.replace('/login')
                    }}>
                      Sign Out
                    </Button>
                  </div>
                }
              >
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Popover>
            </div>
          </div>
        </div>
      </header>
    )
}
