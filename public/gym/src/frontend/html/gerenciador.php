<h1><?php 
session_start();
if($_SESSION['login'] === 'NAO'){
    header('location: /src/frontend/html/admin.html');
}
?></h1>

<html>
    <head>
        <title>Gerenciador de tarefas</title>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!------ Include the above in your HEAD tag ---------->

<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
    </head>
    <body>
    <div class="container">
    <div class="row">
    
        <div class="col-md-10 col-md-offset-1" style="margin-top: 50px;">

            <div class="panel panel-default panel-table">
              <div class="panel-heading">
                <div class="row">
                  <div class="col col-xs-6">
                    <h3 class="panel-title">Gerenciador de mensagens</h3>
                  </div>
                  <div class="col col-xs-6 text-right">
                    <button type="button" class="btn btn-sm btn-primary btn-create">Create New</button>
                  </div>
                </div>
              </div>
              <div class="panel-body">
                <table class="table table-striped table-bordered table-list">
                  <thead>
                    <tr>
                        <th><em class="fa fa-cog"></em></th>
                        <th class="hidden-xs">Nome</th>
                        <th>Email</th>
                        <th>Menssagem</th>
                    </tr> 
                  </thead>
                  <tbody>
                      <?php 
                        $menssagens = array();
                        $arquivo = fopen('../../backend/menssagens.hd', 'r');
                        while(!feof($arquivo)){
                          $linha = fgets($arquivo);
                          $menssagens[] = $linha;
                        }
                        foreach($menssagens as $i){
                          $menssagemQuebrada = explode('#', $i);
                          if(count($menssagemQuebrada)<3){
                            continue;
                          }
                          ?>
                          <tr>
                            <td align="center">
                              <!-- <a class="btn btn-default"><em class="fa fa-pencil"></em></a> -->
                              <a class="btn btn-danger"><em class="fa fa-trash"></em></a>
                            </td>
                            <td class="hidden-xs"><?= $menssagemQuebrada[0]?></td>
                            <td><?= $menssagemQuebrada[1]?></td>
                            <td><?= $menssagemQuebrada[2]?></td>
                          </tr>
                        <?php } ?>
                        </tbody>
                </table>
                
            
              </div>
              <div class="panel-footer">
                <div class="row">
                  <div class="col col-xs-4">Page 1 of 5
                  </div>
                  <div class="col col-xs-8">
                    <ul class="pagination hidden-xs pull-right">
                      <li><a href="#">1</a></li>
                      <li><a href="#">2</a></li>
                      <li><a href="#">3</a></li>
                      <li><a href="#">4</a></li>
                      <li><a href="#">5</a></li>
                    </ul>
                    <ul class="pagination visible-xs pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">»</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

</div></div></div>
    </body>
</html>