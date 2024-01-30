import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../api/models/models";
import { Box, CardActionArea } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "./placeholder.jpeg";

interface Props {
  item: IProduct;
}

export const ProductCard: React.FC<Props> = ({ item }) => {
  return (
    <Card
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {item.brand}
          </Typography>
          <Typography variant="h5" component="div">
            {item.title}
          </Typography>
          <Box sx={{ maxHeight: 195, width: "100%" }}>
            <LazyLoadImage
              src={item.thumbnail}
              width={103}
              height={195}
              alt={item.description}
              effect="blur"
              style={{ maxHeight: 195, width: "auto" }}
              placeholder={<img src={PlaceholderImage} alt={"placeholder"} />}
            />
          </Box>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {item.price}$
          </Typography>
          <Typography variant="body2">{item.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          onClick={() => {
            alert("Successfully bought!");
          }}
        >
          Buy now!
        </Button>
      </CardActions>
    </Card>
  );
};
