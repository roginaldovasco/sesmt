function teste() {
    var mat = ['1', '2', '3', '4', '5', '6']
    var nome = ['Adriano', 'Bruno', 'Claudemir', 'Ricardo', 'Robson', 'Silvio']
    var setor = ['Expedição', 'Ensaque', 'Farelo', 'SESMT', 'Ensaque', 'RH']

    var imat = document.getElementById('imat')
    var colab = String(imat.value)  

   var dados = document.getElementById('inome')
    var nome_colab = nome[mat.indexOf(colab)]      
    dados.innerText = nome_colab

    var area = document.getElementById('isetor')
    var area_colab = setor[mat.indexOf(mat)] 
    area.innerHTML = area_colab

    
    

        
}
