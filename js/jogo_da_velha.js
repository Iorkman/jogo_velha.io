$(function(){
    var jogador = true;
    var bak = $("table").html();
    var pontos = [0,0];
    var jogadas = 0;
    var ganhador = false;

    function ganhou(){
        ganhador = true;
        

        if(jogador == true){
            pontos[0]++;
            alert("O jogador \"O\" ganhou!");
            $("#pontos_o").html(pontos[0]);
        }
        else{
            pontos[1]++;
            alert("O jogador \"X\" ganhou!");
            $("#pontos_x").html(pontos[1]);
        }
        console.log("jogador O: "+pontos[0]);
        console.log("jogador X: "+pontos[1]);
    }

    function reseta(){
        $("table").html(bak);
        jogadas = 0;
        ganhador = false;
    }

    $(document).on("click","#A_1",function(){
        if(jogador==true){
            $("#A_1").html("X");
            jogador=false;
        }
        else{
            $("#A_1").html("O");
            jogador=true;
        }
    });
    $(document).on("click","#A_2",function(){
        if(jogador==true){
            $("#A_2").html("X");
            jogador=false;
        }
        else{
            $("#A_2").html("O");
            jogador=true;
        }
    });
    $(document).on("click","#A_3",function(){
        if(jogador==true){
            $("#A_3").html("X");
            jogador=false;
        }
        else{
            $("#A_3").html("O");
            jogador=true;
        }
    });
    $(document).on("click","#B_1",function(){
        if(jogador==true){
            $("#B_1").html("X");
            jogador=false;
        }
        else{
            $("#B_1").html("O");
            jogador=true;
        }
    });
    $(document).on("click","#B_2",function(){
        if(jogador==true){
            $("#B_2").html("X");
            jogador=false;
        }
        else{
            $("#B_2").html("O");
            jogador=true;
        }
    });
    $(document).on("click","#B_3",function(){
        if(jogador==true){
            $("#B_3").html("X");
            jogador=false;
        }
        else{
            $("#B_3").html("O");
            jogador=true;
        }
    });
    $(document).on("click","#C_1",function(){
        if(jogador==true){
            $("#C_1").html("X");
            jogador=false;
        }
        else{
            $("#C_1").html("O");
            jogador=true;
        }
    });
    $(document).on("click","#C_2",function(){
        if(jogador==true){
            $("#C_2").html("X");
            jogador=false;
        }
        else{
            $("#C_2").html("O");
            jogador=true;
        }
    });
    $(document).on("click","#C_3",function(){
        if(jogador==true){
            $("#C_3").html("X");
            jogador=false;
        }
        else{
            $("#C_3").html("O");
            jogador=true;
        }
    });

    $(document).on("click","button[name='reset']",function(){
        reseta();
    });

    $(document).on("click","#pontuacao_reset",function(){
        $("#pontos_x").html("0");
        $("#pontos_o").html("0");
    });

    $(document).on("click","td",function(){
        jogadas++;
        
        var a1=$("#A_1").html();
        var a2=$("#A_2").html();
        var a3=$("#A_3").html();
        var b1=$("#B_1").html();
        var b2=$("#B_2").html();
        var b3=$("#B_3").html();
        var c1=$("#C_1").html();
        var c2=$("#C_2").html();
        var c3=$("#C_3").html();

        if(a1==a2 && a1==a3){
            console.log(jogadas);
            ganhou();
            reseta();
        }
        else if(b1==b2 && b1==b3){
            console.log(jogadas);
            ganhou();
            reseta();
        }
        else if(c1==c2 && c1==c3){
            console.log(jogadas);
            ganhou();
            reseta();
        }
        else if(a1==b1 && a1==c1){
            console.log(jogadas);
            ganhou();
            reseta();
        }
        else if(a2==b2 && a2==c2){
            console.log(jogadas);
            ganhou();
            reseta();
        }
        else if(a3==b3 && a3==c3){
            console.log(jogadas);
            ganhou();
            reseta();
        }
        else if(a1==b2 && a1==c3){
            console.log(jogadas);
            ganhou();
            reseta();
        }
        else if(c1==b2 && b2==a3){
            console.log(jogadas);
            ganhou();
            reseta();
        }
        if((jogadas == 9) && (ganhador == false)){
            alert("Deu velha");
            reseta();
        }
    });
});