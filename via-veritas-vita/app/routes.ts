import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("/projetos", "routes/projetos.tsx"),
	route("/cadastro", "routes/cadastro.tsx"),
    route("/contato", "routes/contato.tsx"),
    route("/materiais", "routes/materiais.tsx"),
    route("/artigos", "routes/artigos.tsx"),
    route("/estudos", "routes/estudos.tsx"),
] satisfies RouteConfig;
