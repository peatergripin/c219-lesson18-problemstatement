import { getModule } from "../api";
import { useParams } from "react-router-dom";
export default function Module() {
  const { diplomaId, moduleId } = useParams();

  const { name, desc, module_chair } = getModule({ diplomaId, moduleId });

  return (
    <>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{module_chair.name}</h4>
      <span>{module_chair.title}</span>
    </>
  );
}
