<?php
/*
 *      Stanley Gomes <stanleygomess@hotmail.com>
 */
//-----------------------------------------------CONEXAO---------------------------------------------------
/*
	//incluindo a conexao
	include('../imagens/conexao.lib.php');
	$conexao=new conexao();
	$conexao->abrir();
	$conexao->status();
	$conexao->fechar();
*/

class conexao{
	//servidor online
	protected $host="mysql15.000webhost.com";
	protected $usuario="a7141099_quimica";
	protected $senha="aassdd01";
	protected $dbnome="a7141099_quimica";
	/*
	//servidor local
	protected $host="localhost";
	protected $usuario="root";
	protected $senha="vertrigo";
	protected $dbnome="chemicall";
	*/

	function __construct(){}

	function abrir(){
		$this->con=@mysql_connect($this->host, $this->usuario, $this->senha);
		$this->db=@mysql_select_db($this->dbnome,$this->con);
		return $this->con;
	}
	function status(){
		if(!$this->con){
			echo "<h3>Erro! Conexão falhou.</h3>".mysql_error();
			exit;
	  	}
		else{
			echo "<h3>Conexão bem sucedida.</h3>";
	  	}
	 }
	function fechar(){
		@mysql_close($this->con);
	}
}
?>