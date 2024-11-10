import resumeIcon from "../assets/icons/resumo.svg";
import saleIcons from "../assets/icons/vendas.svg";
import webhooksIcons from "../assets/icons/webhooks.svg";
import configIcons from "../assets/icons/configuracoes.svg";
import contactIcon from "../assets/icons/contato.svg";
import exitIcon from "../assets/icons/sair.svg"
import FintechSVG from "../assets/FintechSVG";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Logo Fintech" />
      <ul>
        <li>
          <span>
            <img src={resumeIcon} alt="" />
          </span>
          <NavLink to={'/'}>Resumo</NavLink>
        </li>

        <li>
          <span>
            <img src={saleIcons} alt="" />
          </span>
          <NavLink to={'/vendas'}>Vendas</NavLink>
        </li>

        <li>
          <span>
            <img src={webhooksIcons} alt="" />
          </span>
          <a>Webhooks</a>
        </li>

        <li>
          <span>
            <img src={configIcons} alt="" />
          </span>
          <a>Configurações</a>
        </li>

        <li>
          <span>
            <img src={contactIcon} alt="" />
          </span>
          <a>Contato</a>
        </li>

        <li>
          <span>
            <img src={exitIcon} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
