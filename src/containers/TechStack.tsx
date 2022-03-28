import TechList from "../components/shared/TechList";
import { techStack } from "../fixtures/tech-stack";

export function TechStackContainer(): JSX.Element {
    return (
        <TechList>              
        {
          techStack.map(({ name, icon, active }) => (
            <TechList.Item margin='1rem 2rem'>
              <TechList.Icon color={ active ? '#B31509' : '' }>{ icon }</TechList.Icon>
              <TechList.Label color={ active ? '#B31509' : '' }>{ name }</TechList.Label>
            </TechList.Item>
          ))
        }
        </TechList>
    )
}