for $a in doc("C:/Users/user/Desktop/Trabalho/Trabalho PEI/Caderneta.xml") //Caderneta//Cromos//Cromo
where $a/Raridade = 'Gold'
return  
<Cromo nome="{$a /../@nome}"> {
<Raridade>{$a /Raridade }</Raridade>
}</Cromo>