import React from "react";
import CardContent from "@mui/material/CardContent";
import { motion } from "framer-motion";
import Typography from "@mui/material/Typography";
import { Button, Card, CardActionArea, CardActions } from "@mui/material";
import SImageOne from "../servicesImage/aboutus.jpg";
import SImageTwo from "../servicesImage/architectural-cad-500x500.webp";
import SImageThree from "../servicesImage/douglas-sheppard-9rYfG8sWRVo-unsplash.jpg";
import SImageFour from "../servicesImage/hq720.jpg";
import SImageFive from "../servicesImage/IMG-7752_1200x1200.webp";
import SImageSix from "../servicesImage/product-jpeg-500x500.webp";
import SImageSeven from "../servicesImage/rcc-slab-casting-service-500x500.webp";
import SImageEigth from "../servicesImage/toa-heftiba-FV3GConVSss-unsplash.jpg";
import SImageNine from "../servicesImage/outdoor-stone-flooring-tile.jpg";
import Image from "next/image";
export default function Services() {
  return (
    <motion.div initial={{opacity:1,x:500,scale:1}} whileInView={{opacity:1,x:0,scale:1}} transition={{duration:0.6}}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection:'column',
        alignItems:'center'
      }}
    >
      <div style={{ fontSize:'3rem'}}>Services</div>
      <div
        style={{
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 30,
          padding: "20px 0px",
        }}
      >
        <div>
        
          <Card sx={{ maxWidth: 345,minHeight:420 , backgroundColor:'#383636',color:'white'}}>
            <CardActionArea>
              <Image style={{height:'14rem'}} src={SImageEigth} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Interior Decorators
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" color="text.secondary">
                We take all kind of interior work such as civil, carpentry, painting, all types of ceiling, pop punning, electric, LV systems, HVAC etc.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
        
          <Card sx={{ maxWidth: 345,minHeight:420 , backgroundColor:'#383636',color:'white'}}>
            <CardActionArea>
              <Image style={{height:'14rem'}} src={SImageTwo} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Interior Designer & Architecture
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" color="text.secondary">
                We are one of the best and prominent interior designers and architecture with quality services.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
        
          <Card sx={{ maxWidth: 345,minHeight:420 , backgroundColor:'#383636',color:'white'}}>
            <CardActionArea>
              <img style={{height:'14rem',width:'100%'}} src="https://image3.jdomni.in/banner/15072020/A2/E7/0C/9644F53BF7CC24CB92EAC8A190_1594809818811.jpg?output-format=webp" alt="" srcset="" />
              {/* <Image style={{}} src={SImageThree} /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Furnishing
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" color="text.secondary">
                We take the order for Sofa, Mattress, Pillow, Parda, Headboard, Fabric paneling etc.  We will be providing as per your budget and quality
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
          <Card sx={{ maxWidth: 345,minHeight:420 , backgroundColor:'#383636',color:'white'}}>
            <CardActionArea>
              <Image style={{height:'14rem'}} src={SImageFour} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   Texture Painting
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" color="text.secondary">
                We are one of the renowned painting contractors with enormous understanding and knowledge in this field.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
        
          <Card sx={{ maxWidth: 345,minHeight:420 , backgroundColor:'#383636',color:'white'}}>
            <CardActionArea>
            
                <Image style={{height:'14rem'}} src={SImageFive} />
              
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sports Ground
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" color="text.secondary">
                We make athletics track, Jogging track, tennis court, multi purpose ground,BasketBall ground ,foot ball ground, etc.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
        
          <Card sx={{ maxWidth: 345,minHeight:420 , backgroundColor:'#383636',color:'white'}}>
            <CardActionArea>
              <Image style={{height:'14rem'}} src={SImageSix} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Building repairing
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" color="text.secondary">
                We take all kind of building repairing works such as waterproofing, painting, cement plaster, plumbing etc.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
        
          <Card sx={{ maxWidth: 345,minHeight:420 , backgroundColor:'#383636',color:'white'}}>
            <CardActionArea>
              <Image style={{height:'14rem'}} src={SImageSeven} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  RCC Casting
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" color="text.secondary">
                We are one of the RCC building contractors with enormous understanding and knowledge in this field.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
        
          <Card sx={{ maxWidth: 345,minHeight:420 , backgroundColor:'#383636',color:'white'}}>
            <CardActionArea>
              <Image style={{height:'14rem'}} src={SImageOne} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Interior Works
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" color="text.secondary">
                  We are the one of the Best to provide amazing interiors work in Mumbai
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>

        <div>
        
          <Card sx={{ maxWidth: 345,minHeight:420 , backgroundColor:'#383636',color:'white'}}>
            <CardActionArea>
              <Image style={{height:'14rem'}} src={SImageNine} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Flooring
                </Typography>
                <Typography sx={{color:'white'}} variant="body2" color="text.secondary">
                We make many types of flooring such as pavers block, epoxy flooring, synthetic flooring, rubber flooring, acrylic flooring, wooden flooring etc.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
