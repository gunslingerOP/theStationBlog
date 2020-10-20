import { PureHeader } from "../../components/adminHeader";
import { Input, Button, Card, message, Popover } from "antd";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { addData, getOneData, editData, DeleteData } from "../../api";
import { Popconfirm } from 'antd';

const Create = () => {

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
  
    const router = useRouter();
  


  useEffect(() => {

    if(router && router.query){
        getOneData(router.query.create,(err, result)=>{
          if(err) throw err;
          if (!result.status) {
            Object.keys(result.errMsg).forEach((key) => {
              message.error(result.errMsg[key]);
            });
          } else {
            setIsEdit(true)
            setText(result.article.text)
            setTitle(result.article.title)
            setImage(result.article.image)
            setDescription(result.article.description)
          }
        })
       }


  }, [router]);



  const handleNew = () => {
    setLoading(true);
    addData(
      {
        title,
        description,
        image,
        text,
        athor: Number(JSON.parse(localStorage.getItem("blog_user")).id),
      },
      (err, result) => {
        if (err) throw err;
        if (!result.status) {
          Object.keys(result.errMsg).forEach((key) => {
            message.error(result.errMsg[key]);
          });
          setLoading(false);
        } else {
          router.push("/");
        }
      }
    );
  };

  const handleEdit = () =>{
    setLoading(true);
    editData(
      router.query.create,
      {
        title,
        description,
        image,
        text,
        athor: Number(JSON.parse(localStorage.getItem("blog_user")).id),
      },
      (err, result) => {
        if (err) throw err;
        if (!result.status) {
          Object.keys(result.errMsg).forEach((key) => {
            message.error(result.errMsg[key]);
          });
          setLoading(false);
        } else {
          router.push("/dash");
        }
      }
    );
  }

const handleDelete=()=>{
  setLoading(true)
  DeleteData(router.query.create,(result,err)=>{
    if (err) throw err
    if (result){
      console.log(result)
      router.push(`/dash`)
    }
  })

}

  var ReactQuill;
  if (typeof window != "undefined") {
    ReactQuill = require("react-quill");
  }
  return (
      
    <div className="create-page">
      <PureHeader />

      <main className="container">
        <div className="search-box">
          <Popover content={<img src={image} />}>
            <Input
              style={{ width: 300 }}
              placeholder="https://example/image.png"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Popover>
          <Button
            loading={loading}
            type="primary"
            onClick={isEdit ? handleEdit : handleNew}
            disabled={title && image && description && text ? false : true}
          >
            Save
          </Button>
          <Popconfirm placement="bottom" title={"Are you sure you want to delete this article?"} onConfirm={handleDelete} okText="Yes" cancelText="No">

          <Button type="primary" danger  >
          Delete article
        </Button>
          </Popconfirm>
        </div>
        <Input.TextArea
          rows={4}
          style={{ marginTop: 20 }}
          placeholder="Short Description . . ."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Card
          style={{ marginTop: 20 }}
          title={
            <input
              className="input-title"
              placeholder="Write Blog title . . ."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          }
        >
          {ReactQuill && (
            <ReactQuill
              style={{ minHeight: 100 }}
              theme="bubble"
              value={text}
              onChange={(value) => setText(value)}
            />
          )}
        </Card>
      </main>
    </div>
  );
};

export default Create;
