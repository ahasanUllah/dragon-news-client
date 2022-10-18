import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaTwitch } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {
   return (
      <div>
         <ButtonGroup vertical>
            <Button className="mb-2" variant="outline-primary">
               <FaGoogle /> Login with Google
            </Button>
            <Button variant="outline-dark">
               <FaGithub /> Login with Github
            </Button>
         </ButtonGroup>
         <div className="mt-3">
            <h5>Follow Us</h5>
            <ListGroup>
               <ListGroup.Item className="mb-2">
                  <FaFacebook /> Follow us on
               </ListGroup.Item>
               <ListGroup.Item className="mb-2">
                  <FaYoutube /> Follow us on
               </ListGroup.Item>
               <ListGroup.Item className="mb-2">
                  <FaTwitter /> Follow us on
               </ListGroup.Item>
               <ListGroup.Item className="mb-2">
                  <FaInstagram /> Follow us on
               </ListGroup.Item>
               <ListGroup.Item className="mb-2">
                  <FaTwitch /> Follow us on
               </ListGroup.Item>
            </ListGroup>
         </div>
         <div>
            <BrandCarousel></BrandCarousel>
         </div>
      </div>
   );
};

export default RightSideNav;
