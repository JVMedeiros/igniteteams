import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Form } from "./styles";

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

      <Form>
        <Input 
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />
        <ButtonIcon 
          icon="add"
        />
      </Form>
      <Filter 
        title="turma A"
      />
    </Container>
  )
}