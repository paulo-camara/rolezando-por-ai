import React, { useEffect, useState } from "react";
import { URL_GOOGLE_SHEETS } from "../../constants";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import GradeCounter from "../../components/GradeCounter/GradeCounter";
import CashCounter from "../../components/CashCounter/CashCounter";
import {
  Comments,
  ContainerData,
  ContainerNewRoleButton,
  HeaderAccordionContainer,
  HeaderAcordion,
  Informations,
  Button,
  Label,
} from "../../components/RoleData/RoleData";

const RolezandoList = () => {
  const [list, setList] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {}, []);

  useEffect(() => {
    if (filterValue === "") {
      return getData();
    }

    const newData = [];

    list.filter((item) => {
      if (
        item.nome.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.cidade.toLowerCase().includes(filterValue.toLowerCase()) ||
        item.categoria.toLowerCase().includes(filterValue.toLowerCase())
      ) {
        newData.push(item);
      }
    });

    setList(newData);
  }, [filterValue]);

  const getData = () => {
    const data = fetch(URL_GOOGLE_SHEETS).then((res) => res.text());

    data.then((result) => {
      const resp = result
        .replace("google.visualization.Query.setResponse(", "")
        .replace("/*O_o*/", "")
        .replace("\n", "")
        .replace(");", "");

      const response = JSON.parse(resp);

      let data = [];

      const headers = response.table.cols.map(({ label }) => label);

      response.table.rows.forEach((row) => {
        let value = {};

        row.c.forEach(({ v }, index) => {
          value = { ...value, [headers[index]]: v };
        });

        data.push({ ...value });
      });

      setList(data);
    });
  };

  const newRole = () => {
    window.open(`https://forms.gle/1QL1qnvKjEHUPUwaA`, "_blank");
  };

  const mapsRedirect = (nome) => {
    window.open(`https://www.google.com.br/maps/search/${nome}`, "_blank");
  };

  const onChangeFilter = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <>
      <ContainerNewRoleButton>
        <Button onClick={newRole}>Cadastrar novo role</Button>
      </ContainerNewRoleButton>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          padding: "15px",
        }}
      >
        <input
          placeholder="Você pode filtrar por Nome, Cidade ou Categoria"
          style={{
            border: "none",
            width: "100%",
            height: "25px",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "16px",
          }}
          onChange={onChangeFilter}
        />
      </div>
      <Accordion>
        {list.map((item, index) => {
          return (
            <AccordionItem style={{ margin: "15px" }}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <HeaderAccordionContainer>
                    <HeaderAcordion>{item.nome}</HeaderAcordion>
                    <GradeCounter counter={item.nota} />
                  </HeaderAccordionContainer>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <ContainerData>
                  <Informations>
                    <div>
                      <Label>{item.categoria}</Label>
                      <Label>{`Possui espaço kids? ${item.kids}`}</Label>
                    </div>
                    <div>
                      <CashCounter counter={item.valor} />
                      <Label>{item.cidade}</Label>
                    </div>
                  </Informations>
                  <Comments>
                    <Label>{`Comentário: ${item.comentario ?? ""}`}</Label>
                  </Comments>
                  <Button onClick={() => mapsRedirect(item.nome)}>
                    Let's bora
                  </Button>
                </ContainerData>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default RolezandoList;
