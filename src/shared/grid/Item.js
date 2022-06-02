import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = () => {
  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
    boxShadow: "none ",
  }));
  return Item;
};

export default Item;
