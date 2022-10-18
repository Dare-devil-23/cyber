import React ,{useState}from "react";
import HeaderMain from "../menu/HeaderMain";
import Footer from "../components/footer";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {news} from "./news";
import "./blog.css";

const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <div className="text-hide ">
        {isReadMore ? text.slice(0, 160) : text}
        <span onClick={toggleReadMore} className="read-or-hide readMoreColor place" >
          {isReadMore ? "read more" : "show less"}
        </span>
      </div>
    );
  };
const WithHeaderExample = ({title , posted , original}) => {
  return (
    <Card text="dark" bg="light" className="my-2">
      <div className="header">{title}</div>
      <Card.Body className="px-5">
        <div>{posted}</div>
        <Card.Text>
          <ReadMore > {original} </ReadMore>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const Blog = () => {
    return(
        <div className="m-0 p-0">
            <HeaderMain />
            <div className="container newsroom mt-5">
             {
                news.map((n,i)=>{
                    return(
                        <WithHeaderExample {...n} key={i}/>
                    )
                })
             }
            </div>
            <Footer />   
        </div>
    )
}

export default Blog;