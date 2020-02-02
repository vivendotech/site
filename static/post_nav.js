function desenha_navegador(lis_post, post_atual){
    console.log(lis_post,post_atual )
    lis_post.forEach(element => {

        let r_marcar_ = element["url"] == post_atual
        let side = $(`<li><a href="${element["url"]}">${element["title"]}</a> </li>`)

        if (r_marcar_){
            side = $(`<li class="marcar_"><a href="${element["url"]}">${element["title"]}</a> </li>`)

        }
        else{


        }
        $("#sidebar-nav").append(side);
    });
    
}


$(document).ready(function(){
    $.ajax({
        url: "/post.json", 
        success: function(result){

            let re = new RegExp("(/dados/)|(/web/)|(/python/)|(/software/)")
            let url_page = document.URL
            let result_split = url_page.split(re)
            let r_match = url_page.match(re)

            let saida = result_split[5].split("/")

            let url_post_acessado = result_split[1] + result_split[5]

            desenha_navegador(result[saida[0]]["posts"], url_post_acessado)
        
        
      }});
})