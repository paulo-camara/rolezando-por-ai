import { styled } from "@stitches/react";

export const HeaderAccordionContainer = styled("div", {
  height: "50px",
  borderRadius: "5px 5px 0px 0px",
  backgroundColor: "white",
  display: "flex",
  justifyContent: "space-between",
  padding: "5px 15px",
});

export const HeaderAcordion = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  fontSize: "22px",
  fontWeight: "600",
});

export const ContainerData = styled("div", {
  borderRadius: "0px 0px 5px 5px",
  minHeight: "100px",
  backgroundColor: "white",
  padding: "20px 15px",
});

export const Informations = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  textAlign: "initial",
  gap: "10px",
});

export const Comments = styled("div", {
  textAlign: "initial",
});

export const ContainerNewRoleButton = styled("div", {
  padding: "20px 15px",
});

export const Button = styled("div", {
  width: "100%",
  marginTop: "20px",
  backgroundColor: "#4564fb",
  border: "none",
  height: "35px",
  color: "white",
  fontSize: "18px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
});

export const Label = styled("div", {
  paddingTop: "15px",
});
