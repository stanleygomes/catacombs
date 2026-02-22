select
	max(count_mes) as count_mes
	, max(count_ano) as count_ano
from (
	select
		0 as count_mes
		, count(pbi.id_product_backlog_item) as count_ano
	from product_backlog_item pbi
	join projetos p on
		p.id_projeto = pbi.id_projeto
	where
		1 = 1
		and pbi.campos_personalizados->>'Tipo' in (:pbi_type)
		and p.id_projeto in (:project_list)
		and pbi.dt_criacao >= ':year_date_start'
		and pbi.dt_criacao <= ':year_date_end'
	union
	select
		count(pbi.id_product_backlog_item) as count_mes
		, 0 as count_ano
	from product_backlog_item pbi
	join projetos p on
		p.id_projeto = pbi.id_projeto
	where
		1 = 1
		and pbi.campos_personalizados->>'Tipo' in (:pbi_type)
		and p.id_projeto in (:project_list)
		and pbi.dt_criacao >= ':month_date_start'
		and pbi.dt_criacao <= ':month_date_end'
) as resumo_plr
