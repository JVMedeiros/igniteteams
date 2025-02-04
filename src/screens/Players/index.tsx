import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";

type PlayersProps = {

}

export function Players() {
  return (
    <Container>
      <Header showBackButton/>
      
      <Highlight 
        title="Nome da turma"
        subtitle="adicione a galera e separe o time"
      />

      <ButtonIcon />
    </Container>
  )
}