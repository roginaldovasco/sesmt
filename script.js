function teste() {
    var colab = ['Adriano', 'Bruno', 'Claudemir', 'Ricardo', 'Robson', 'Silvio']
    var funcao = ['Montador', 'Montador', 'Ajudante', 'Ajudante', 'Montador', 'Ajudante']
    var status = ['Liberado', 'Liberado', 'Bloqueado', 'Bloqueado', 'Liberado', 'Bloqueado']
    var isel = document.getElementById('isel')
    var sel = String(isel.value)        
   var dados = document.getElementById('ifuncao')
    var cargo = funcao[colab.indexOf(sel)]
    
    var lib = document.getElementById('iliberacao')
    var liberacao = status[colab.indexOf(sel)]
    dados.innerHTML = `Função: ${cargo}<br>Situação: ${liberacao}`

        
}
