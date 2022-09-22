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
        <p onClick={toggleReadMore} className="read-or-hide readMoreColor place" >
          {isReadMore ? "read more" : "show less"}
        </p>
      </div>
    );
  };
const WithHeaderExample = ({title , posted , original}) => {
  return (
    <Card>
      <Card.Header className="h1">{title}</Card.Header>
      <Card.Body>
        <Card.Title>{posted}</Card.Title>
        <Card.Text>
          <ReadMore > {original} </ReadMore>
        </Card.Text>
        {/* <div className="d-flex justify-content-end mx-5"><button className="btn-main">Open</button></div> */}
      </Card.Body>
    </Card>
  );
}

const Blog = () => {
    return(
        <div className="m-0 p-0">
            <HeaderMain />
            <div className="container newsroom">
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